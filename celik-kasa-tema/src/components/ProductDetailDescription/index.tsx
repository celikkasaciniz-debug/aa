import {
  getFormattedMarginTopSize,
  getFormattedMarginBottomSize,
  IkasComponentRenderer,
} from "@ikas/bp-storefront";
import CollapsibleGroup from "../../sub-components/CollapsibleGroup";
import { Props } from "./types";
import { useProductContext } from "../../utils/productContext";

export function ProductDetailDescription(props: Props) {
  const {
    product: productProp,
    title = "Product Details",
    defaultOpen = false,
    mobileMarginTop,
    mobileMarginBottom,
    desktopMarginTop,
    desktopMarginBottom,
    components,
  } = props;
  const product = productProp ?? useProductContext();
  if (!product) return null;

  const hasDescription = !!product?.description;
  const hasComponents = Array.isArray(components) && components.length > 0;

  if (!hasDescription && !hasComponents) return null;

  return (
    <div
      className="kombos-pd-desc"
      style={{
        "--mobile-mt": getFormattedMarginTopSize(mobileMarginTop),
        "--mobile-mb": getFormattedMarginBottomSize(mobileMarginBottom),
        "--desktop-mt": getFormattedMarginTopSize(desktopMarginTop),
        "--desktop-mb": getFormattedMarginBottomSize(desktopMarginBottom),
      }}
    >
      {hasDescription && (
        <CollapsibleGroup title={title} defaultOpen={defaultOpen}>
          <div
            className="kombos-pd-desc__body kombos-richtext"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </CollapsibleGroup>
      )}
      {hasComponents && (
        <IkasComponentRenderer
          id="product-detail-description"
          components={components}
          parentProps={props}
        />
      )}
    </div>
  );
}

export default ProductDetailDescription;

// rev 2026-09-29 header v2 + description typography
