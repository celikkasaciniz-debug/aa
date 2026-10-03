import {
  getFormattedMarginTopSize,
  getFormattedMarginBottomSize,
  getSelectedProductVariant,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import { useProductContext } from "../../utils/productContext";

export function ProductDetailSku({
  product: productProp,
  productCodeLabel = "Product Code:",
  mobileMarginTop,
  mobileMarginBottom,
  desktopMarginTop,
  desktopMarginBottom,
}: Props) {
  const product = productProp ?? useProductContext();
  if (!product) return null;

  const selectedVariant = getSelectedProductVariant(product);
  const sku = selectedVariant?.sku;

  if (!sku) return null;

  return (
    <p
      className="kombos-pd-sku__text text-sm-medium"
      style={{
        "--mobile-mt": getFormattedMarginTopSize(mobileMarginTop),
        "--mobile-mb": getFormattedMarginBottomSize(mobileMarginBottom),
        "--desktop-mt": getFormattedMarginTopSize(desktopMarginTop),
        "--desktop-mb": getFormattedMarginBottomSize(desktopMarginBottom),
      }}
    >
      {productCodeLabel} {sku}
    </p>
  );
}

export default ProductDetailSku;
