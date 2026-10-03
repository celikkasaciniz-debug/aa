/** Canonical storefront origin — used for absolute URLs in structured data (JSON-LD). */
export const SITE_ORIGIN = "https://celikkasamerkezi.com";

/** Turn a site-relative path into an absolute URL on the canonical origin. */
export function toAbsoluteUrl(href: string): string {
  if (/^https?:\/\//i.test(href)) return href;
  return SITE_ORIGIN + (href.startsWith("/") ? href : `/${href}`);
}
