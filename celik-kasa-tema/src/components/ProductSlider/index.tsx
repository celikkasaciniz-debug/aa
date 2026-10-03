import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "preact/hooks";
import {
  getProductOptionSet,
  IkasComponentRenderer,
} from "@ikas/bp-storefront";
import ProductCard from "../../sub-components/ProductCard";
import SliderArrow from "../../sub-components/SliderArrow";
import { Props } from "./types";
import { ProductContext } from "../../utils/productContext";
import { cx } from "../../utils/cx";

const COLUMNS_MAP: Record<string, number> = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
};

export function ProductSlider(props: Props) {
  const {
    productList,
    title,
    addToCartText = "Add to Cart",
    addedToCartText = "Added to Cart",
    outOfStockText = "Sold Out",
    goToProductText = "View Product",
    desktopColumns,
    aspectRatio,
    objectFit,
    hideAddToCartButton,
    components,
    gridLayout = false,
    subtitle,
  } = props;

  const cols = COLUMNS_MAP[desktopColumns ?? ""] ?? 4;
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 1);
    setCanScrollRight(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(track);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const products = productList?.data ?? [];

  useEffect(() => {
    products.forEach((p) => {
      if (!p.productOptionSet) getProductOptionSet(p);
    });
  }, [products.length]);

  const productCardSizes = useMemo(() => {
    const desktopGaps = (cols - 1) * 24;
    return `(max-width: 767px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 80px) / 2), calc((100vw - ${144 + desktopGaps}px) / ${cols})`;
  }, [cols]);

  if (!productList) return null;

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = direction === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={cx("kombos-product-slider", gridLayout && "kombos-product-slider--grid")}>
      <div className="kombos-product-slider__wrapper kombos-container">
        {(title || subtitle) && (
          <div className="kombos-product-slider__head">
            {title && (
              <h2 className="kombos-product-slider__title display-xs-medium md:display-sm-medium">
                {title}
              </h2>
            )}
            {subtitle && <p className="kombos-product-slider__subtitle text-md-regular">{subtitle}</p>}
          </div>
        )}

        <div className="kombos-product-slider__slider">
          {!gridLayout && (
          <SliderArrow
            direction="left"
            className="kombos-product-slider__arrow kombos-product-slider__arrow--left"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          />
          )}

          <div
            className="kombos-product-slider__track"
            ref={trackRef}
            style={{ "--columns": cols }}
          >
            {products.map((product, index) => (
              <div key={product.id} className="kombos-product-slider__card">
                <ProductCard
                  product={product}
                  addToCartText={addToCartText}
                  addedToCartText={addedToCartText}
                  outOfStockText={outOfStockText}
                  goToProductText={goToProductText}
                  aspectRatio={aspectRatio}
                  objectFit={objectFit}
                  sizes={productCardSizes}
                  hideAddToCartButton={hideAddToCartButton}
                  priority={index < (gridLayout ? cols : 4)}
                />
                <ProductContext.Provider value={product ?? null}>
                  <IkasComponentRenderer
                    id={`product-slider-product-${product.id}`}
                    components={components}
                    parentProps={props}
                    map={{
                      product,
                    }}
                    className="kombos-product-slider__card-content"
                  />
                </ProductContext.Provider>
              </div>
            ))}
          </div>

          {!gridLayout && (
          <SliderArrow
            direction="right"
            className="kombos-product-slider__arrow kombos-product-slider__arrow--right"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
