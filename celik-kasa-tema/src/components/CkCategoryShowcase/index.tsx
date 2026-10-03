import {
  getDefaultSrc,
  createMediaSrcset,
  getIkasCategoryHref,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import { ArrowRightSVG, LockSVG } from "../../sub-components/icons";
import { toPlainText, truncate } from "../../utils/text";

/** Short label for the compact mobile row: "Zırhlı Çelik Kasalar" → "Zırhlı" */
function shortCategoryName(name: string): string {
  const short = name.replace(/\s+(çelik\s+)?kasa(lar|ları|sı)?$/i, "").trim();
  return short || name;
}

export function CkCategoryShowcase({
  eyebrow,
  title,
  subtitle,
  categories,
  linkLabel,
}: Props) {
  const list = (categories?.data ?? []).filter((c) => c && getIkasCategoryHref(c));
  if (list.length === 0) return null;

  return (
    <section className="ck-cats">
      <div className="kombos-container ck-cats__inner">
        <header className="ck-cats__header">
          {eyebrow && <p className="ck-cats__eyebrow text-sm-semibold">{eyebrow}</p>}
          {title && <h2 className="ck-cats__title display-xs-semibold md:display-sm-semibold">{title}</h2>}
          {subtitle && <p className="ck-cats__subtitle text-md-regular">{subtitle}</p>}
        </header>

        <ul className="ck-cats__grid">
          {list.map((category) => {
            const href = getIkasCategoryHref(category);
            const image = category.image && !category.image.isVideo ? category.image : null;
            const summary = truncate(toPlainText(category.description), 120);
            return (
              <li className="ck-cats__item" key={category.id}>
                <a className="ck-cats__card" href={href}>
                  <span className="ck-cats__media">
                    {image ? (
                      <img
                        className="ck-cats__img"
                        src={getDefaultSrc(image)}
                        srcSet={createMediaSrcset(image)}
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 20vw"
                        alt={image.altText || category.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="ck-cats__placeholder" aria-hidden="true">
                        <LockSVG />
                      </span>
                    )}
                  </span>
                  <span className="ck-cats__body">
                    <h3 className="ck-cats__name text-lg-semibold">
                      <span className="ck-cats__name-full">{category.name}</span>
                      <span className="ck-cats__name-short" aria-hidden="true">
                        {shortCategoryName(category.name)}
                      </span>
                    </h3>
                    {summary && <span className="ck-cats__desc text-sm-regular">{summary}</span>}
                    {linkLabel && (
                      <span className="ck-cats__link text-sm-semibold">
                        {linkLabel}
                        <ArrowRightSVG className="ck-cats__link-icon" />
                      </span>
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default CkCategoryShowcase;
// rev 2026-09-30 5-col
