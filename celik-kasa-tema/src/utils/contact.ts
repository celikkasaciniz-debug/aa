/** Normalises a Turkish phone number to digits with country code (e.g. "905414451548"). */
export function normalizePhone(phone?: string): string {
  const digits = (phone ?? "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("90")) return digits;
  if (digits.startsWith("0")) return `9${digits}`;
  return `90${digits}`;
}

/** wa.me link with an optional prefilled message; empty string when no number is set. */
export function buildWhatsAppHref(phone?: string, message?: string): string {
  const number = normalizePhone(phone);
  if (!number) return "";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

/** tel: link; empty string when no number is set. */
export function buildTelHref(phone?: string): string {
  const number = normalizePhone(phone);
  return number ? `tel:+${number}` : "";
}
