import {
  getDisplayedProductGroups,
  getFormattedMarginTopSize,
  getFormattedMarginBottomSize,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import { BadgeImage, BadgeText } from "../../sub-components/Badge";
import { useProductContext } from "../../utils/productContext";

export function ProductDetailProductGroup({
  product: productProp,
  mobileMarginTop,
  mobileMarginBottom,
  desktopMarginTop,
  desktopMarginBottom,
}: Props) {
  const product = productProp ?? useProductContext();
  if (!product) return null;

  const groups = getDisplayedProductGroups(product);
  if (!groups.length) return null;

  return (
    <div
      className="kombos-pd-product-group"
      style={{
        "--mobile-mt": getFormattedMarginTopSize(mobileMarginTop),
        "--mobile-mb": getFormattedMarginBottomSize(mobileMarginBottom),
        "--desktop-mt": getFormattedMarginTopSize(desktopMarginTop),
        "--desktop-mb": getFormattedMarginBottomSize(desktopMarginBottom),
      }}
    >
      {groups.map((group) => {
        const selected = group.items.find((i) => i.isSelected);

        return (
          <div key={group.name} className="kombos-pd-product-group__group">
            <span className="kombos-pd-product-group__label text-sm-medium">
              {group.name}
              {selected && <span> - {selected.value}</span>}
            </span>
            <div className="kombos-pd-product-group__row">
              {group.items.map((item) =>
                item.image ? (
                  <BadgeImage
                    key={item.value}
                    image={item.image}
                    alt={item.value}
                    sizes="64px"
                    variantImg
                    size="l"
                    selected={item.isSelected}
                    href={item.href}
                    title={item.value}
                  />
                ) : (
                  <BadgeText
                    key={item.value}
                    size="l"
                    selected={item.isSelected}
                    href={item.href}
                    title={item.value}
                  >
                    {item.value}
                  </BadgeText>
                ),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailProductGroup;
