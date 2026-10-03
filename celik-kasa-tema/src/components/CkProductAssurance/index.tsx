import { Props } from "./types";
import {
  PhoneSVG,
  RefreshSVG,
  TruckSVG,
  WhatsAppSVG,
  WrenchSVG,
} from "../../sub-components/icons";
import { buildTelHref, buildWhatsAppHref } from "../../utils/contact";
import { useProductContext } from "../../utils/productContext";

export function CkProductAssurance({
  deliveryTitle,
  deliveryText,
  installTitle,
  installText,
  returnTitle,
  returnText,
  helpText,
  phone,
  phoneLabel,
  whatsappLabel,
  whatsappMessage,
  product: productProp,
}: Props) {
  const product = productProp ?? useProductContext();
  const rows = [
    { Icon: TruckSVG, title: deliveryTitle, text: deliveryText },
    { Icon: WrenchSVG, title: installTitle, text: installText },
    { Icon: RefreshSVG, title: returnTitle, text: returnText },
  ].filter((r) => r.title);

  const message = [whatsappMessage, product?.name].filter(Boolean).join(" ");
  const telHref = buildTelHref(phone);
  const waHref = buildWhatsAppHref(phone, message);

  return (
    <div className="ck-assure">
      {rows.length > 0 && (
        <ul className="ck-assure__list">
          {rows.map(({ Icon, title, text }, i) => (
            <li className="ck-assure__row" key={i}>
              <span className="ck-assure__icon">
                <Icon />
              </span>
              <span className="ck-assure__body">
                <span className="ck-assure__title text-sm-semibold">{title}</span>
                {text && <span className="ck-assure__text text-xs-regular">{text}</span>}
              </span>
            </li>
          ))}
        </ul>
      )}

      {(telHref || waHref) && (
        <div className="ck-assure__help">
          {helpText && <p className="ck-assure__help-text text-sm-medium">{helpText}</p>}
          <div className="ck-assure__actions">
            {telHref && phoneLabel && (
              <a className="ck-assure__btn ck-assure__btn--phone text-sm-semibold" href={telHref}>
                <PhoneSVG className="ck-assure__btn-icon" />
                {phoneLabel}
              </a>
            )}
            {waHref && whatsappLabel && (
              <a
                className="ck-assure__btn ck-assure__btn--wa text-sm-semibold"
                href={waHref}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppSVG className="ck-assure__btn-icon" />
                {whatsappLabel}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CkProductAssurance;
// rev 2026-09-30 call blue
