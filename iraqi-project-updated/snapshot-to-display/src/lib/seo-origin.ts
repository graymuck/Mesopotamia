import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { siteOrigin } from "./seo";
export const getSeoOrigin = createServerFn({ method: "GET" }).handler(() =>
  siteOrigin(getRequestUrl({ xForwardedHost: false, xForwardedProto: false }).href, process.env["SITE_URL"]),
);
