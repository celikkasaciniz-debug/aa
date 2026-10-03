import { cx } from "../../utils/cx";
import { CaretRightSVG } from "../icons";
import { toAbsoluteUrl } from "../../utils/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface Props {
  items: BreadcrumbItem[];
  size?: "sm" | "xs";
  className?: string;
  /** Emit schema.org BreadcrumbList JSON-LD (rich results). */
  emitSchema?: boolean;
}

function breadcrumbSchema(items: BreadcrumbItem[]) {
  const linked = items.filter((item, i) => item.href || i === items.length - 1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: linked.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: toAbsoluteUrl(item.href) } : {}),
    })),
  };
}

export default function Breadcrumb({ items, size = "sm", className, emitSchema = true }: Props) {
  if (items.length === 0) return null;

  const typographyClass = size === "xs" ? "text-xs-medium" : "text-sm-medium";

  return (
    <nav className={cx("kombos-breadcrumb", className)} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.href ?? item.label} className="kombos-breadcrumb__item">
            {item.href ? (
              <a
                href={item.href}
                className={cx("kombos-breadcrumb__link", typographyClass, isLast && "kombos-breadcrumb__link--active")}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </a>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className={cx("kombos-breadcrumb__link", "kombos-breadcrumb__link-btn", typographyClass)}
              >
                {item.label}
              </button>
            ) : (
              <span className={cx("kombos-breadcrumb__current", typographyClass)} aria-current="page">
                {item.label}
              </span>
            )}
            {!isLast && (
              <span className={cx("kombos-breadcrumb__sep", size === "xs" && "kombos-breadcrumb__sep--xs")}>
                <CaretRightSVG />
              </span>
            )}
          </span>
        );
      })}
      {emitSchema && items.length > 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema(items)).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </nav>
  );
}
