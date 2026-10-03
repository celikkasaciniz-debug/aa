import { Props } from "./types";
import VariantBadge from "../../sub-components/VariantBadge";
import { useProductContext } from "../../utils/productContext";

export function CardProductVariants({ product: productProp }: Props) {
  const product = productProp ?? useProductContext();
  if (!product) return null;

  return <VariantBadge product={product} size="s" scrollable disableRoute />;
}

export default CardProductVariants;
