import {
  IkasNavigationLink,
  IkasComponentRenderer,
  createMediaSrcset,
  getDefaultSrc,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import {
  IkasLogoSVG,
  LockSVG,
  PhoneSVG,
  WhatsAppSVG,
  MapPin1SVG,
} from "../../sub-components/icons";
import { buildTelHref, buildWhatsAppHref, normalizePhone } from "../../utils/contact";
import { toPlainText } from "../../utils/text";

/** Escapes "<" so the JSON-LD payload can never close its <script> tag early. */
function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function Footer(props: Props) {
  const {
    logo,
    description,
    copyrightText = "© 2026 Çelik Kasa Merkezi. Tüm hakları saklıdır.",
    linkColor,
    linkHoverColor,
    contactTitle = "İletişim Bilgileri",
    contactEmail,
    contactPhone,
    footerLinks,
    socialMediaIcons,
    brandName,
    siteUrl,
    addressText,
    emitOrganizationSchema = true,
    floatingContact = true,
    whatsappNumber,
    whatsappMessage,
    whatsappLabel = "WhatsApp'tan yazın",
    phoneLabel = "Hemen arayın",
    schemaName,
    streetAddress,
    postalCode,
    addressLocality,
    addressRegion,
    latitude,
    longitude,
    mapUrl,
    open24h = false,
  } = props;

  // skip link columns whose target could not be resolved (empty label) instead of rendering blank headings
  const columns = (footerLinks?.links ?? []).filter((c: IkasNavigationLink) => !!c.label);
  const hasContact = !!(contactEmail || contactPhone || addressText);
  const hasSocials = socialMediaIcons?.length > 0;

  const telHref = buildTelHref(contactPhone);
  const waHref = buildWhatsAppHref(whatsappNumber || contactPhone, whatsappMessage);

  const phoneDigits = normalizePhone(contactPhone);
  const lat = latitude ? parseFloat(latitude) : NaN;
  const lng = longitude ? parseFloat(longitude) : NaN;
  const displayName = schemaName || brandName;
  const schema =
    emitOrganizationSchema && displayName
      ? {
          "@context": "https://schema.org",
          "@type": "Store",
          name: displayName,
          ...(schemaName && brandName && schemaName !== brandName ? { alternateName: brandName } : {}),
          ...(siteUrl ? { url: siteUrl, "@id": `${siteUrl.replace(/\/$/, "")}/#store` } : {}),
          ...(description ? { description: toPlainText(description) } : {}),
          ...(phoneDigits ? { telephone: `+${phoneDigits}` } : {}),
          ...(contactEmail ? { email: contactEmail } : {}),
          ...(logo ? { logo: getDefaultSrc(logo), image: getDefaultSrc(logo) } : {}),
          ...(streetAddress || addressLocality
            ? {
                address: {
                  "@type": "PostalAddress",
                  ...(streetAddress ? { streetAddress } : {}),
                  ...(addressLocality ? { addressLocality } : {}),
                  ...(addressRegion ? { addressRegion } : {}),
                  ...(postalCode ? { postalCode } : {}),
                  addressCountry: "TR",
                },
              }
            : {}),
          ...(!isNaN(lat) && !isNaN(lng)
            ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } }
            : {}),
          ...(mapUrl ? { hasMap: mapUrl, sameAs: [mapUrl] } : {}),
          ...(open24h
            ? {
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                  },
                ],
              }
            : {}),
          ...(addressRegion ? { areaServed: { "@type": "City", name: addressRegion } } : {}),
          currenciesAccepted: "TRY",
        }
      : null;

  return (
    <footer
      className="kombos-footer"
      style={{
        ...(linkColor ? { "--footer-link-color": linkColor } : {}),
        ...(linkHoverColor ? { "--footer-link-hover-color": linkHoverColor } : {}),
      }}
    >
      <div className="kombos-footer__wrapper kombos-container">
        <div className="kombos-footer__top">
          {/* Brand column */}
          <div className="kombos-footer__brand">
            {logo ? (
              <div className="kombos-footer__logo-wrap">
                <img
                  src={getDefaultSrc(logo)}
                  srcSet={createMediaSrcset(logo)}
                  sizes="96px"
                  alt={logo?.altText || brandName || "Logo"}
                  className="kombos-footer__logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              brandName && (
                <p className="ck-footer-wordmark text-lg-semibold">
                  <span className="ck-footer-wordmark__mark" aria-hidden="true">
                    <LockSVG />
                  </span>
                  {brandName}
                </p>
              )
            )}

            {description && (
              <div
                className="kombos-footer__desc text-sm-regular"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {hasSocials && (
              <div className="kombos-footer__socials">
                <IkasComponentRenderer
                  id="footer-socials"
                  components={socialMediaIcons}
                  parentProps={props}
                />
              </div>
            )}
          </div>

          {/* Link columns */}
          {(columns.length > 0 || hasContact) && (
            <div className="kombos-footer__columns">
              {columns.map((column: IkasNavigationLink, i: number) => (
                <div key={i} className="kombos-footer__col">
                  <p className="kombos-footer__col-title text-sm-semibold">{column.label}</p>
                  {column.subLinks?.filter((l: IkasNavigationLink) => !!l.label).length > 0 && (
                    <nav className="kombos-footer__col-links" aria-label={column.label}>
                      {column.subLinks.filter((l: IkasNavigationLink) => !!l.label).map((link: IkasNavigationLink, j: number) => (
                        <a
                          key={j}
                          href={link.href}
                          className="kombos-footer__col-link text-sm-regular"
                          target={link.openInNewTab ? "_blank" : undefined}
                          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  )}
                </div>
              ))}

              {/* Contact column */}
              {hasContact && (
                <div className="kombos-footer__col">
                  <p className="kombos-footer__col-title text-sm-semibold">{contactTitle}</p>
                  <address className="kombos-footer__col-links ck-footer-contact">
                    {telHref && (
                      <a href={telHref} className="kombos-footer__col-link ck-footer-contact__row text-sm-regular">
                        <PhoneSVG className="ck-footer-contact__icon" />
                        {contactPhone}
                      </a>
                    )}
                    {waHref && (
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener"
                        className="kombos-footer__col-link ck-footer-contact__row text-sm-regular"
                      >
                        <WhatsAppSVG className="ck-footer-contact__icon" />
                        {whatsappLabel}
                      </a>
                    )}
                    {contactEmail && (
                      <a
                        href={`mailto:${contactEmail}`}
                        className="kombos-footer__col-link ck-footer-contact__row text-sm-regular"
                      >
                        {contactEmail}
                      </a>
                    )}
                    {addressText && (
                      <span className="ck-footer-contact__row ck-footer-contact__text text-sm-regular">
                        <MapPin1SVG className="ck-footer-contact__icon" />
                        {addressText}
                      </span>
                    )}
                  </address>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="kombos-footer__bottom">
          <div
            className="kombos-footer__copyright text-xs-regular"
            dangerouslySetInnerHTML={{ __html: copyrightText }}
          />
          <div className="kombos-footer__badge">
            <IkasLogoSVG className="kombos-footer__badge-logo" />
            <span className="kombos-footer__badge-text text-xs-medium">Powered by ikas E-Commerce.</span>
          </div>
        </div>
      </div>

      {/* Floating contact buttons (every page — footer is global) */}
      {floatingContact && (waHref || telHref) && (
        <div className="ck-float">
          {telHref && (
            <a className="ck-float__btn ck-float__btn--phone" href={telHref} aria-label={phoneLabel} title={phoneLabel}>
              <PhoneSVG />
            </a>
          )}
          {waHref && (
            <a
              className="ck-float__btn ck-float__btn--wa"
              href={waHref}
              target="_blank"
              rel="noopener"
              aria-label={whatsappLabel}
              title={whatsappLabel}
            >
              <WhatsAppSVG />
            </a>
          )}
        </div>
      )}

      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schema) }} />
      )}
    </footer>
  );
}

export default Footer;
// rev 2026-09-30 logo size
// rev 2026-09-30 float call blue
