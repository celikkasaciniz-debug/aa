import { getDefaultSrc, createMediaSrcset } from "@ikas/bp-storefront";
import { Props } from "./types";
import { ArrowRightSVG, ShieldCheckSVG, WhatsAppSVG } from "../../sub-components/icons";
import { buildWhatsAppHref } from "../../utils/contact";

export function CkHero({
  eyebrow,
  title,
  subtitle,
  primaryLink,
  whatsappLabel,
  whatsappNumber,
  whatsappMessage,
  image,
  imageAlt,
  stat1Value,
  stat1Label,
  stat2Value,
  stat2Label,
  stat3Value,
  stat3Label,
}: Props) {
  const stats = [
    [stat1Value, stat1Label],
    [stat2Value, stat2Label],
    [stat3Value, stat3Label],
  ].filter(([value, label]) => value || label);

  const waHref = buildWhatsAppHref(whatsappNumber, whatsappMessage);
  const hasImage = image && !image.isVideo;

  return (
    <section className="ck-hero">
      <div className="kombos-container ck-hero__inner">
        <div className="ck-hero__content">
          {eyebrow && (
            <p className="ck-hero__eyebrow text-sm-semibold">
              <ShieldCheckSVG className="ck-hero__eyebrow-icon" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="ck-hero__title display-sm-semibold md:display-lg-semibold lg:display-xl-semibold">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="ck-hero__subtitle text-md-regular md:text-lg-regular">{subtitle}</p>
          )}

          <div className="ck-hero__actions">
            {primaryLink?.href && primaryLink.label && (
              <a
                className="ck-hero__btn ck-hero__btn--primary text-md-semibold"
                href={primaryLink.href}
                target={primaryLink.openInNewTab ? "_blank" : undefined}
                rel={primaryLink.openInNewTab ? "noopener" : undefined}
              >
                {primaryLink.label}
                <ArrowRightSVG className="ck-hero__btn-icon" />
              </a>
            )}
            {waHref && whatsappLabel && (
              <a
                className="ck-hero__btn ck-hero__btn--ghost text-md-semibold"
                href={waHref}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppSVG className="ck-hero__btn-icon" />
                {whatsappLabel}
              </a>
            )}
          </div>

          {stats.length > 0 && (
            <dl className="ck-hero__stats">
              {stats.map(([value, label], i) => (
                <div className="ck-hero__stat" key={i}>
                  <dt className="ck-hero__stat-label text-xs-medium md:text-sm-medium">{label}</dt>
                  <dd className="ck-hero__stat-value text-lg-semibold md:text-xl-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="ck-hero__media">
          <div className="ck-hero__glow" aria-hidden="true" />
          {hasImage && (
            <img
              className="ck-hero__img"
              src={getDefaultSrc(image)}
              srcSet={createMediaSrcset(image)}
              sizes="(min-width: 1024px) 40vw, 90vw"
              alt={imageAlt || image.altText || title || ""}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default CkHero;
