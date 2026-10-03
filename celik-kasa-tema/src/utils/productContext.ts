import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { IkasProduct } from "@ikas/bp-storefront";

/**
 * Parent sections (ProductDetail, ProductSlider, CategoryList, SearchModal, AccountFavorites)
 * provide the current product here. Child components fall back to it when their own `product`
 * prop has not been bound in the editor, so product cards and the PDP always render.
 */
export const ProductContext = createContext<IkasProduct | null>(null);

export function useProductContext(): IkasProduct | null {
  return useContext(ProductContext);
}
