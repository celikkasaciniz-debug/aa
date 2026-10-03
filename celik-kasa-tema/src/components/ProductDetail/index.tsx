import {
  getIkasCategoryPathItemHref,
  getProductCategoryPath,
  getProductVariantMainImage,
  getSelectedProductVariant,
  IkasImage,
  isNotEmpty,
  IkasComponentRenderer,
  withRoutePrefix,
} from "@ikas/bp-storefront";
import { Props } from "./types";
import Breadcrumb from "../../sub-components/Breadcrumb";
import type { BreadcrumbItem } from "../../sub-components/Breadcrumb";
import ProductGallery from "./components/ProductGallery";
import ProductDetailNameFavorite from "../ProductDetailNameFavorite";
import ProductDetailPrices from "../ProductDetailPrices";
import ProductDetailProductGroup from "../ProductDetailProductGroup";
import ProductDetailBundleProduct from "../ProductDetailBundleProduct";
import ProductDetailVariant from "../ProductDetailVariant";
import ProductDetailOptionSet from "../ProductDetailOptionSet";
import ProductDetailAddToCart from "../ProductDetailAddToCart";
import ProductDetailBackInStock from "../ProductDetailBackInStock";
import ProductDetailOffer from "../ProductDetailOffer";
import ProductDetailDescription from "../ProductDetailDescription";
import CkProductAssurance from "../CkProductAssurance";

export function ProductDetail(props: Props) {
  const {
    product,
    components,
    aspectRatio,
    objectFit,
    bottomComponents,
    homepageText = "Ana Sayfa",
  } = props;
  const addToCartText = "Hemen Satın Al";
  const descriptionTitle = "Ürün Açıklaması";
  const assurancePhone = "+90 541 445 15 48";
  void components;
  if (!product) return null;

  const selectedVariant = getSelectedProductVariant(product);
  const mainProductImage = getProductVariantMainImage(selectedVariant);
  const mainImage = mainProductImage?.image;
  const variantImages = selectedVariant?.images;
  const images: IkasImage[] = variantImages?.length
    ? variantImages
        .map((pi: any) => pi.image)
        .filter((img: any): img is IkasImage => img != null)
    : mainImage
      ? [mainImage]
      : [];

  const categoryPath = getProductCategoryPath(product);

  return (
    <section className="kombos-pd">
      <div className="kombos-container kombos-pd__container">
        <Breadcrumb
          items={[
            {
              label: homepageText,
              href: withRoutePrefix("/"),
            } as BreadcrumbItem,
            ...(isNotEmpty(categoryPath)
              ? categoryPath.map(
                  (pathItem: any) =>
                    ({
                      label: pathItem.name,
                      href: getIkasCategoryPathItemHref(pathItem),
                    }) as BreadcrumbItem,
                )
              : []),
            { label: product.name } as BreadcrumbItem,
          ]}
          size="xs"
          className="kombos-pd__breadcrumb"
        />

        <div className="kombos-pd__layout">
          <ProductGallery
            images={images}
            productName={product.name}
            aspectRatio={aspectRatio}
            objectFit={objectFit}
          />

          {/*
            Core PDP blocks are rendered directly with the page product so they never depend on
            editor-side prop bindings (children placed via CLI arrive unbound).
          */}
          <div className="kombos-pd__info ck-pd-info">
            <ProductDetailNameFavorite product={product} hideFavoriteButton />
            <ProductDetailPrices product={product} />
            <ProductDetailProductGroup product={product} />
            <ProductDetailBundleProduct
              product={product}
              quantityLabel="Adet"
              outOfStockText="Stokta Yok"
              productContentTitle="Set İçeriği"
            />
            <ProductDetailVariant product={product} />
            <ProductDetailOptionSet
              product={product}
              selectPlaceholderText="Seçiniz"
              fileDropText="Dosya seçin veya buraya sürükleyin"
              uploadingText="Yükleniyor..."
              uploadFailedText="Yükleme başarısız"
              fileSizeErrorText="{fileName}: en fazla {maxSize}MB"
              fileTypeErrorText="{fileName}: {ext} dosya türüne izin verilmiyor"
              maxFilesErrorText="En fazla {max} dosya yüklenebilir"
              requiredFieldErrorText="Bu alan zorunludur"
              minLabelText="En az: "
              maxLabelText="En fazla: "
              fileFallbackNameText="Dosya"
            />
            <ProductDetailAddToCart
              product={product}
              addToCartButtonText={addToCartText}
              buyNow
              hideQuantityInput
              addingToCartText="Ödemeye yönlendiriliyor..."
              outOfStockText="Tükendi"
              errorMessage="Ürün sepete eklenemedi"
              optionSetErrorMessage="Lütfen zorunlu seçenekleri doldurun"
              updateCartButtonText="Güncelle"
              updatingCartText="Güncelleniyor..."
            />
            <ProductDetailBackInStock
              product={product}
              notifyButtonText="Stoğa Girince Haber Ver"
              reminderSavedText="Size haber vereceğiz"
              alreadySavedMessage="Zaten listedesiniz; ürün stoğa girince size e-posta göndereceğiz."
              savedMessage="Harika! Ürün stoğa girdiğinde size e-posta göndereceğiz."
              loginRequiredMessage="Size haber verebilmemiz için lütfen giriş yapın."
              errorMessage="Bir hata oluştu. Lütfen tekrar deneyin."
              modalTitle="Stoğa girince haber ver"
              modalDescription="E-posta adresinizi bırakın, ürün stoğa girdiği anda size haber verelim."
              emailLabel="E-posta"
              submitButtonText="Haber Ver"
              submittingText="Kaydediliyor..."
            />
            <CkProductAssurance
              product={product}
              deliveryTitle="0–6 iş günü teslimat"
              deliveryText="Tahmini süre teslimat adresinize göre değişir."
              installTitle="İstanbul içi ücretsiz kurulum"
              installText="Taşıma ve montajı uzman ekibimiz yapar."
              returnTitle="14 gün cayma hakkı"
              returnText="Değişim talepleriniz de kabul edilir."
              helpText="Ölçü, ağırlık veya kilit sistemi hakkında sorunuz mu var?"
              phone={assurancePhone}
              phoneLabel="Ara"
              whatsappLabel="WhatsApp"
              whatsappMessage="Merhaba, şu ürün hakkında bilgi almak istiyorum:"
            />
            <ProductDetailOffer
              product={product}
              addToCartTogetherText="Birlikte Sepete Ekle"
              addingToCartText="Ekleniyor..."
              offerInfoText="Seçili ürünleri birlikte sepete ekleyin, indirimden yararlanın."
              totalText="Toplam"
              advantageousTotalText="İndirimli Toplam"
              outOfStockText="Tükendi"
              addedToCartBannerText="Sepete eklendi"
              errorMessage="Ürün sepete eklenemedi"
              optionSetErrorMessage="Lütfen zorunlu seçenekleri doldurun"
            />
            <ProductDetailDescription product={product} title={descriptionTitle} defaultOpen />
          </div>
        </div>

        {bottomComponents && (
          <div className="kombos-pd__bottom">
            <IkasComponentRenderer
              id="product-detail-bottom"
              components={bottomComponents}
              parentProps={props}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;

// rev 2026-09-29 header v2 + description typography
// rev 2026-09-30 buy green
// rev 2026-09-30 breadcrumb abs url
