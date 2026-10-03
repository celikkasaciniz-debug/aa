# Site audit, celikkasaci.com (Phase 0, 2026-10-03)

Source: Shopify Admin API (theme files, products, collections, pages, blog, menus, redirects, policies, discounts, files, app list). Live HTTP was blocked from this environment, so status codes, rendered HTML, page weight and Lighthouse scores are **not measured** (NEEDS-CONFIRMATION A1).

## 1. Inventory

| Type | Count | Notes |
| --- | --- | --- |
| Products | 60 (45 active, 14 draft, 1 unlisted) | See catalog-audit.csv |
| Collections | 13 | All have SEO title and description, except Otel Kasaları has no body description |
| Pages | 11 | 3 with broken handles (combining dot), 1 with a typo, 1 empty, 4 duplicating policies |
| Blog | 1 (`/blogs/bloglar`), 3 articles, all published 7 Jan 2025 | |
| Shopify policies | 6 | 3 contain unfilled placeholders |
| URL redirects | 17 | 1 chain, 1 that can never fire |
| Theme | MR WEB DESIGN-DW (izleme düzeltmesi), Dawn based, id 142811758792, last updated 2026-10-02 | Not in Git |

## 2. Legal and trust risks (MASTER_PROMPT 2.1), confirmed

1. **Compare-at prices:** 34 of 45 active products, 5% to 37% (Premium 65 cm and 75 cm show 37% and 36%). Every product has the same pattern of a round compare-at price about 10% above, which reads as permanent strikethrough pricing.
2. **"Sepette Ekstra İndirim"** on every product card (`settings.card_campaign_enabled = true`). No matching automatic cart discount exists. The only discount is code `11990indrim`.
3. **Discount code `11990indrim`:** 11.990 TL off hotel safes, active, no end date. Hotel safes cost 3.000 to 6.500 TL, so it makes them free (16 orders with a 0,00 TL total, #1038 to #1053).
4. **Fire certification claim** in the homepage FAQ and capacity tile "Zırhlı + Yangına Dayanıklı". No certificate files found in Shopify Files.
5. **Delivery area:** FAQ says "Türkiye geneline teslimat yapıyoruz"; shipping policy says same-day İstanbul.
6. **"%100 Memnuniyet Garantisi"** in the hero trust items; not defined on any policy page.
7. **Unverifiable claims:** "Türkiye'nin lider çelik kasa üreticisi" (Çelik Kasa collection), "Türkiye'nin en güvenilir çelik kasa markası" (page `celik-kasa`), "Kendi Üretim Tesisimiz", "15+ Yıl".
8. **Payment claim:** FAQ promises "havale/EFT"; no bank transfer payments appear in orders.
9. **Legal pages:**
   - Terms of service still contain `[INSERT ...]` placeholders and unlinked `[İADE POLİTİKASINA GİDEN BAĞLANTI]`, `[GİZLİLİK POLİTİKASINA GİDEN BAĞLANTI]`.
   - Privacy policy: `[KARGO_FİRMASI_ADI]`, `[ÖDEME_SAĞLAYICISI_ADI ...]` (should name PayTR).
   - Refund policy: "Son güncelleme: [TARİH GİRİLECEK]".
   - Legal notice says the contract is formed when payment is completed, which does not fit cash on delivery.
   - "Ön Bİlgilendirme Sözleşmesi" (typo, and should be "Ön Bilgilendirme Formu"); KVKK handle `kisisel-veirlerin-korunmasi-kanunu`.
   - Footer menu "Policy" has two `#` links (Kargo Politikası, Hizmet Şartları).
   - "Ön Bİlgilendirme Sözleşmesi" appears in two menus (footer and COLLECTIONS-MR).
10. **Stock:** placeholder quantities (1000, 1111, 11111, 999, 100) on 20+ products; hotel safes oversold (0 to -4) with "continue selling".
11. **Unlisted 5 TL product** reachable by direct link (copy of the 60 cm safe, compare-at 80.000 TL).

## 3. Looks AI-made (MASTER_PROMPT 2.2), confirmed

- **13 files named `Gemini_Generated_Image_*`** in Shopify Files, all with empty alt text. Used in the hero slider (desktop and mobile) and the "Kategori Kartları" section (currently disabled).
- Hero copy "Değerli Olan Her Şeyi Çelik Güvencesiyle Koruyun" (banned phrase 3.4).
- Trust items: "%100 Memnuniyet Garantisi", "Ücretsiz Kurulum", "Kendi Üretim Tesisimiz".
- Product cards show the vendor ("Çelik Kasacı") on every card (`show_vendor: true` in collection, featured collection and product templates).
- English UI strings: "Customers are saying", "Let customers speak for us", "Trusted by our customers", "Real reviews from verified shoppers", "Customer Reviews", "Write a Review", "You may also like", "Share".
- ALL CAPS labels: "EN ÇOK SATANLAR", "MÜŞTERİ YORUMLARIMIZ", "BÜYÜK BOY ÇELİK KASA".
- Product titles use en dashes ("PANZER 70 cm Zırhlı Çelik Kasa – 300 KG"), against rule 0.4.10.

## 4. Catalog and duplicate content

- **Same photo, different product and price:** the main photo of PANZER 70 cm (100.000 TL), Premium 70 cm (65.000 TL) and Premium 75 cm (70.000 TL) is the same file. The 85, 105, 65 and 75 cm PANZER and Premium pairs, and the 2060 and 2055 Super and Premium pairs, have identical alt text sequences, which suggests the same photos uploaded twice. Duplicate content for search, and a trust problem for buyers.
- **No SKUs or model codes** on any variant.
- **No spec metafields** (weight, dimensions, steel). `product_type` is empty on all 60 products.
- **Price oddities** (MASTER_PROMPT 1.3), confirmed in data. Premium 55, 60 and 65 cm are 60.000 TL each; PANZER 70 and 75 are 100.000 TL each; the 1150 kg jeweller safe (170.000 TL) is cheaper than the 150 cm banko (175.000 TL); 105 cm models range from 26.000 to 185.000 TL.
- Two typos in titles: "Çift Kapaplı", "3 Kapaplı".

## 5. Images and alt text

- **Competitor brands in alt text** (trademark stuffing): "otel kasa kale kasa", "otel kale kasa fiyatları", "70cm yale celik kasa", "70cm siyah yale celik kasa", "metalik kale kasa fiyatları", "siyah celik kale kasa", "orwl kilitli kasa".
- **Keyword stuffed or misleading alt text:** "çelik kasa - otel kasa şifresini unuttum", "otel elektronik kasa şifre unuttum", "celik kasa açma", "otel parmak izli kasa" (on a key-lock model).
- **Typos:** "siyaah", "siayaah", "sireli", "metalk", "zirlhi", "ofic", "1015cm", "font view", "53x47x33v", "Kasa1".
- **Prompt leftovers:** alt text starting with `Ana Görsel: "...`, `Kilit Detayı: "...`.

## 6. URLs, redirects, navigation

- **Broken page handles** (combining dot from lower-casing "İ"): `/pages/i%CC%87letisim`, `/pages/i%CC%87ade-ve-i%CC%87ptal-politikasi`, `/pages/on-bi%CC%87lgilendirme-sozlesmesi`. Linked from four menus.
- **Redirect chain:** `/products/85-cm-zirhli-kasa-500-kg` goes to `/products/85-cm-zirhli-kasa-450-kg`, which goes to `/products/85-cm-zirhli-kasa`.
- **Redirect that never fires:** `/collections/all` to `/collections/celik-kasa`. Shopify only applies redirects to paths that would 404, and `/collections/all` exists. The hero buttons link to `/collections/all`.
- **Main menu labels are raw handles in lower case:** "ev ofis kasasi", "premium ev ofis kasasi", "zirhli celik kasa", "kuyumcu kasalari". No hotel, delivery or contact items. "bize Ulaşın" under Hakkımızda.
- **Collection name and handle mismatches:** "Ev Tipi Şifreli Güvenlik Kasası" is `70-celik-kasa`; "Kompakt Para ve Belge Kasası" is `55cm-celik-kasa`; "Kuyumcu Kasası" is `banko-kuyumcu-kasalari`.
- **Cannibalisation:** page `/pages/celik-kasa` ("Çelik Kasa | Ev ve Ofis İçin Güvenli Kasalar") competes with `/collections/celik-kasa` for the same primary keyword. Page `/pages/istanbul-celik-kasa` is titled "Aynı Gün Hemen Teslimat" and repeats the shipping policy.
- **Policies duplicated as pages:** Mesafeli Satış Sözleşmesi, KVKK, İade ve İptal, Ön Bilgilendirme.
- **Empty page:** "Sıkça Sorulan Sorular" (`/pages/sikca-sorulan-sorular`) has no body.
- **Blog:** handle `bloglar`; article handle `kasanizi-nasil-guvende-tutarsiniz` does not match its title (about changing the code).

## 7. Structured data and meta (from theme code)

| Template | Present | Missing or wrong |
| --- | --- | --- |
| All pages (header) | Organization (name, logo, sameAs), WebSite with SearchAction on home | No LocalBusiness or Store: address, geo, telephone, openingHours, areaServed |
| Home | FAQPage JSON-LD from the FAQ section | FAQ answers contain the unverified fire and delivery claims |
| Product | `{{ product \| structured_data }}` (Shopify default Product and Offer) | No weight, sku, brand detail, shipping or return policy; no BreadcrumbList |
| Collection, article | Shopify defaults | No BreadcrumbList |
| Meta | Dawn `meta-tags` snippet: og and twitter tags | `og:image` uses an `http:` URL |
| H1 on home | The logo (shop name only) | The hero headline is not a heading |

The "Webrex: AI SEO, Schema" app is installed and may inject a second set of schema. This needs a rendered-page check (A1).

## 8. Apps and scripts (from the Admin API app list and theme app embeds)

| App | Theme footprint | Note |
| --- | --- | --- |
| Google & YouTube | App embed (store widget, LEFT_BOTTOM) | Purchase conversions and Merchant Center feed. Not in the app list returned to this connector, so the list below is incomplete. |
| Google Reviews (Trustify) | App embed, floating badge, homepage carousel, compact rating on product | One of two review apps |
| Loovly Review | Card ratings embed, homepage and collection carousels, product reviews | Second review app; English headings |
| Webrex: AI SEO, Schema | Unknown until rendered | Possible duplicate schema |
| Inbox (Shopify chat) | App embed, disabled | |
| PrintFlow, Forms, Flow, Messaging, Knowledge Base, Translate & Adapt, Search & Discovery | None seen in theme | Check usage and cost |
| Custom apps "kod", "cli" | None seen | Created by the store; check permissions (section 8.10) |

Homepage also loads an uploaded MP4 and a YouTube video in the same video section.

## 9. Not measured (blocked)

Status codes, rendered HTML, page weight, Lighthouse and Core Web Vitals for the five key templates, `robots.txt`, `sitemap.xml`, the .com.tr site. Unblocked by A1.
