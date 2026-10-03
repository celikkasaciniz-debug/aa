import { useState } from "preact/hooks";
import { Props } from "./types";
import { cx } from "../../utils/cx";

/**
 * Long-form SEO copy. The full text is always in the server-rendered HTML (crawlable);
 * collapsing is purely visual via max-height, so search engines still read everything.
 */
export function CkSeoText({
  title,
  content,
  collapsedHeight = 220,
  readMoreLabel,
  readLessLabel,
  isPageTitle = false,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  if (!content && !title) return null;

  const collapsible = collapsedHeight > 0;
  const isCollapsed = collapsible && !expanded;

  return (
    <section className={cx("ck-seo", isPageTitle && "ck-seo--page")}>
      <div className="kombos-container ck-seo__inner">
        {title &&
          (isPageTitle ? (
            <h1 className="ck-seo__title ck-seo__title--page display-sm-semibold lg:display-md-semibold">
              {title}
            </h1>
          ) : (
            <h2 className="ck-seo__title display-xs-semibold">{title}</h2>
          ))}
        {content && (
          <div
            className={cx("ck-seo__body", isCollapsed && "ck-seo__body--collapsed")}
            style={isCollapsed ? { maxHeight: `${collapsedHeight / 16}rem` } : undefined}
          >
            <div
              className="ck-seo__content kombos-richtext text-md-regular"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}
        {content && collapsible && readMoreLabel && (
          <button
            type="button"
            className="ck-seo__toggle text-sm-semibold"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? readLessLabel || readMoreLabel : readMoreLabel}
          </button>
        )}
      </div>
    </section>
  );
}

export default CkSeoText;

// rev 2026-09-29 header v2 + description typography
