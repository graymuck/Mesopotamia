import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CONTACT_EMAIL, CONTACT_ENDPOINT, submitContactMessage } from "@/lib/contact-email";
import { I18nProvider } from "@/lib/i18n";
import { Route } from "@/routes/event";
const EventPage = Route.options.component!;
afterEach(() => { vi.unstubAllGlobals(); window.localStorage.clear(); });

describe("event FAQ and email contact", () => {
  it.each([
    ["en", "No, admission is free.", "Food will be distributed for free.", "Yes, you can take photos."],
    ["ar", "لا، الدخول مجاني.", "سيُوزَّع الطعام مجانًا.", "نعم، يمكنك التصوير."],
    ["ru", "Нет, вход бесплатный.", "Еда будет раздаваться бесплатно.", "Да, можно фотографировать."],
  ])("shows the three updated FAQs in %s without the old sections", (lang, admission, food, photos) => {
    window.localStorage.setItem("lang", lang!);
    const { container, unmount } = render(<I18nProvider><EventPage /></I18nProvider>);
    expect(container.querySelectorAll("details")).toHaveLength(3);
    for (const answer of [admission, food, photos]) expect(screen.getByText(answer!)).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/\[16:00\]|\[DATE|\[FREE|\[CITY|Map goes here|Is the venue accessible/);
    expect(screen.queryByText(CONTACT_EMAIL)).not.toBeInTheDocument();
    expect(container.querySelector("form")).toBeInTheDocument();
    unmount(); window.localStorage.clear();
  });
  it("posts multilingual form content only to the configured recipient", async () => {
    const request = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: "true" }) });
    vi.stubGlobal("fetch", request);
    await expect(submitContactMessage(" زيد & Alex ", "visitor@example.com", "Привет & hello")).resolves.toBe("submitted");
    const [url, options] = request.mock.calls[0]!;
    expect(url).toBe("https://formsubmit.co/ajax/zaidali20021015@gmail.com");
    expect(url).toBe(CONTACT_ENDPOINT);
    expect(options.method).toBe("POST");
    expect(JSON.parse(options.body)).toMatchObject({ name: "زيد & Alex", email: "visitor@example.com", message: "Привет & hello" });
  });
  it("does not report delivery while the recipient still needs to activate the service", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: "false", message: "Please activate this form" }) }));
    await expect(submitContactMessage("Alex", "visitor@example.com", "Hello")).resolves.toBe("activation-required");
  });
  it("keeps the visitor's message and shows an error when submission fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Offline")));
    const { unmount } = render(<I18nProvider><EventPage /></I18nProvider>);
    fireEvent.change(screen.getByLabelText("name"), { target: { value: "Alex" } });
    fireEvent.change(screen.getByLabelText("email"), { target: { value: "visitor@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello festival" } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    await waitFor(() => expect(screen.getByRole("alert")).toHaveTextContent("could not be submitted"));
    expect(screen.getByLabelText("Message")).toHaveValue("Hello festival");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    unmount();
  });
  it("confirms and clears the form only after a successful response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: "true" }) }));
    const { unmount } = render(<I18nProvider><EventPage /></I18nProvider>);
    fireEvent.change(screen.getByLabelText("name"), { target: { value: "Alex" } });
    fireEvent.change(screen.getByLabelText("email"), { target: { value: "visitor@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello festival" } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Your message has been submitted"));
    expect(screen.getByLabelText("Message")).toHaveValue("");
    unmount();
  });
  it("validates the form before attempting to submit", () => {
    window.localStorage.clear();
    const { unmount } = render(<I18nProvider><EventPage /></I18nProvider>);
    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    expect(screen.getAllByRole("alert")).toHaveLength(3);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    unmount();
  });
});
