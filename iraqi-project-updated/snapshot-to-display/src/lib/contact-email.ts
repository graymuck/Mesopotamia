export const CONTACT_EMAIL = "zaidali20021015@gmail.com";
export const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;

/** The recipient must activate FormSubmit before it forwards messages. */
export async function submitContactMessage(name: string, email: string, message: string): Promise<"submitted" | "activation-required"> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), _subject: "Event enquiry", _template: "table" }),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json() as { success?: boolean | string; message?: string };
  if (!response.ok) throw new Error("Contact submission failed");
  if (/activat|confirm your email/i.test(result.message ?? "")) return "activation-required";
  if (result.success !== true && result.success !== "true") throw new Error("Contact submission rejected");
  return "submitted";
}
