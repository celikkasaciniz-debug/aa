import { Props } from "./types";
import { PhoneSVG, WhatsAppSVG } from "../../sub-components/icons";
import { buildTelHref, buildWhatsAppHref } from "../../utils/contact";

export function CkContactCta({
  title,
  text,
  phone,
  phoneLabel,
  whatsappLabel,
  whatsappMessage,
}: Props) {
  const telHref = buildTelHref(phone);
  const waHref = buildWhatsAppHref(phone, whatsappMessage);

  return (
    <section className="ck-cta">
      <div className="kombos-container">
        <div className="ck-cta__box">
          <div className="ck-cta__content">
            {title && <h2 className="ck-cta__title display-xs-semibold md:display-sm-semibold">{title}</h2>}
            {text && <p className="ck-cta__text text-md-regular">{text}</p>}
          </div>
          <div className="ck-cta__actions">
            {telHref && phoneLabel && (
              <a className="ck-cta__btn ck-cta__btn--phone text-md-semibold" href={telHref}>
                <PhoneSVG className="ck-cta__icon" />
                <span className="ck-cta__btn-text">
                  {phoneLabel}
                  {phone && <span className="ck-cta__btn-sub text-xs-medium">{phone}</span>}
                </span>
              </a>
            )}
            {waHref && whatsappLabel && (
              <a
                className="ck-cta__btn ck-cta__btn--wa text-md-semibold"
                href={waHref}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppSVG className="ck-cta__icon" />
                <span className="ck-cta__btn-text">{whatsappLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CkContactCta;
