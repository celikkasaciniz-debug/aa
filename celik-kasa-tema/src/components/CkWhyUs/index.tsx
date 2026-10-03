import { getDefaultSrc, createMediaSrcset } from "@ikas/bp-storefront";
import { Props } from "./types";
import { CheckSVG, KeySVG, LockSVG, PhoneSVG, WrenchSVG } from "../../sub-components/icons";

export function CkWhyUs({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  f1Title,
  f1Text,
  f2Title,
  f2Text,
  f3Title,
  f3Text,
  f4Title,
  f4Text,
}: Props) {
  const features = [
    { Icon: CheckSVG, title: f1Title, text: f1Text },
    { Icon: KeySVG, title: f2Title, text: f2Text },
    { Icon: WrenchSVG, title: f3Title, text: f3Text },
    { Icon: PhoneSVG, title: f4Title, text: f4Text },
  ].filter((f) => f.title);

  const hasImage = image && !image.isVideo;

  return (
    <section className="ck-why">
      <div className="kombos-container ck-why__inner">
        <div className="ck-why__media">
          {hasImage ? (
            <img
              className="ck-why__img"
              src={getDefaultSrc(image)}
              srcSet={createMediaSrcset(image)}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt={imageAlt || image.altText || ""}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="ck-why__visual" aria-hidden="true">
              <LockSVG className="ck-why__visual-icon" />
            </div>
          )}
        </div>

        <div className="ck-why__content">
          {eyebrow && <p className="ck-why__eyebrow text-sm-semibold">{eyebrow}</p>}
          {title && <h2 className="ck-why__title display-xs-semibold md:display-sm-semibold">{title}</h2>}
          {subtitle && <p className="ck-why__subtitle text-md-regular">{subtitle}</p>}

          <ul className="ck-why__list">
            {features.map(({ Icon, title: ft, text }, i) => (
              <li className="ck-why__item" key={i}>
                <span className="ck-why__icon">
                  <Icon />
                </span>
                <span className="ck-why__item-body">
                  <h3 className="ck-why__item-title text-md-semibold">{ft}</h3>
                  {text && <p className="ck-why__item-text text-sm-regular">{text}</p>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CkWhyUs;
