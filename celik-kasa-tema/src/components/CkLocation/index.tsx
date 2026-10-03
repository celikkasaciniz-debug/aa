import { Props } from "./types";
import { MapPin1SVG, PhoneSVG, ArrowRightSVG } from "../../sub-components/icons";
import { buildTelHref } from "../../utils/contact";

export function CkLocation({
  eyebrow,
  title,
  text,
  businessName,
  address,
  phone,
  hours,
  latitude,
  longitude,
  mapQuery,
  directionsUrl,
  directionsLabel,
  callLabel,
  mapTitle,
}: Props) {
  const query = mapQuery || [latitude, longitude].filter(Boolean).join(",");
  const center = latitude && longitude ? `&ll=${latitude},${longitude}` : "";
  const embedSrc = query
    ? `https://maps.google.com/maps?q=${encodeURIComponent(query)}${center}&z=16&hl=tr&output=embed`
    : "";
  const telHref = buildTelHref(phone);

  return (
    <section className="ck-loc">
      <div className="kombos-container ck-loc__inner">
        <div className="ck-loc__content">
          {eyebrow && <p className="ck-loc__eyebrow text-sm-semibold">{eyebrow}</p>}
          {title && <h2 className="ck-loc__title display-xs-semibold md:display-sm-semibold">{title}</h2>}
          {text && <p className="ck-loc__text text-md-regular">{text}</p>}

          <address className="ck-loc__card">
            {businessName && <span className="ck-loc__name text-lg-semibold">{businessName}</span>}
            {address && (
              <span className="ck-loc__row text-md-regular">
                <MapPin1SVG className="ck-loc__icon" />
                {address}
              </span>
            )}
            {telHref && (
              <a className="ck-loc__row ck-loc__link text-md-regular" href={telHref}>
                <PhoneSVG className="ck-loc__icon" />
                {phone}
              </a>
            )}
            {hours && (
              <span className="ck-loc__hours text-sm-semibold">
                <span className="ck-loc__dot" aria-hidden="true" />
                {hours}
              </span>
            )}
          </address>

          <div className="ck-loc__actions">
            {directionsUrl && directionsLabel && (
              <a
                className="ck-loc__btn ck-loc__btn--primary text-md-semibold"
                href={directionsUrl}
                target="_blank"
                rel="noopener"
              >
                {directionsLabel}
                <ArrowRightSVG className="ck-loc__btn-icon" />
              </a>
            )}
            {telHref && callLabel && (
              <a className="ck-loc__btn ck-loc__btn--ghost text-md-semibold" href={telHref}>
                <PhoneSVG className="ck-loc__btn-icon" />
                {callLabel}
              </a>
            )}
          </div>
        </div>

        {embedSrc && (
          <div className="ck-loc__map">
            <iframe
              className="ck-loc__iframe"
              src={embedSrc}
              title={mapTitle || businessName || "Google Haritalar"}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default CkLocation;
