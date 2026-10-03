# Needs confirmation

Fields stay hidden on the site until confirmed. Owner: Muhammed unless noted.

## Business facts

| # | Item | What we see now | Needed |
| --- | --- | --- | --- |
| 1 | Opening hours | Shop policy and contact page: Mon to Fri 09:00 to 18:00, Sat 09:00 to 13:00, Sun closed. Master prompt: Mon to Sat 09:00 to 21:00 on the old site. Google Ads schedule: every day 09:00 to 21:00. | One set of hours for site, Business Profile and ads schedule |
| 2 | Founding year | Homepage trust plate "15+ Yıl Üretim Tecrübesi"; FAQ "15 yılı aşkın tecrübe" | Year (2008 or 2009) |
| 3 | Production | Homepage "Kendi Üretim Tesisimiz", FAQ "Avcılar'daki kendi tesisimizde", collection text "Türkiye'nin lider çelik kasa üreticisi" | Which models are made in Avcılar, which are bought in, from whom |
| 4 | Fire certificates | FAQ: "Premium ve Zırhlı seri modellerimiz yangına dayanıklı sertifikalıdır". Capacity tile: "Zırhlı + Yangına Dayanıklı" | Certificate files per model (standard, test body, number), or removal |
| 5 | Delivery outside İstanbul | FAQ: "Türkiye geneline teslimat yapıyoruz". PMax ran in 40+ provinces. | Yes or no, and terms |
| 6 | Legal details | Owner name and tax number appear in policies. Terms of service still contain `[INSERT TRADING NAME]`, `[INSERT BUSINESS ADDRESS]`, `[INSERT BUSINESS PHONE NUMBER]`, `[INSERT BUSINESS REGISTRATION NUMBER]`, `[INSERT VAT NUMBER]`, `[İADE POLİTİKASINA GİDEN BAĞLANTI]`. Privacy policy contains `[KARGO_FİRMASI_ADI]` and `[ÖDEME_SAĞLAYICISI_ADI ...]`. Refund policy contains `[TARİH GİRİLECEK]`. | Company title, tax office and number, MERSİS, chamber, cargo partner, ETBİS status |
| 7 | Discounts | 34 of 45 active products show a compare-at price (5% to 37% off). Theme setting `card_campaign_text` = "Sepette Ekstra İndirim" on all cards. Homepage block text "Sepette 10.000 TL Ekstra İndirim" (section currently disabled). | Are any of these real, dated campaigns with the lowest 10-day prior price on file? If not, remove (section 2.1) |
| 8 | Stock and lead time | Placeholder quantities (1000, 1111, 11111, 999, 100). Hotel safes at 0 to -4 with "continue selling". | Real stock, or "Sipariş üzerine, X gün" per model |
| 9 | Specs per model | No `kasa` metafields exist. Weight appears only in some titles. | Weight, outer and inner dimensions, steel thickness, lock, bolts, fixing per model |
| 10 | PANZER vs Premium | 70 cm PANZER (100.000 TL), 70 cm Premium (65.000 TL) and 75 cm Premium (70.000 TL) use the identical main photo. 85, 105, 65 and 75 cm PANZER and Premium pairs, and 2060 and 2055 Super and Premium pairs, use identical image alt text sequences. | Are these different safes? If yes, real photos per model. If no, merge with redirects |
| 11 | Discount code `11990indrim` | Active since 15 Jan 2025, no end date: 11.990 TL off hotel safes, once per order. Hotel safes cost 3.000 to 6.500 TL, so the code makes them free. 16 orders between #1038 and #1053 have a 0,00 TL total. | Was this intended? Recommendation: deactivate (Phase 1 hotfix, needs approval) |
| 12 | Unlisted product at 5 TL | `60-cm-sifreli-celik-kasa-kompakt-yuksek-guvenlikli-ev-ve-ofis-kasasi-copy`: UNLISTED, price 5 TL, compare-at 80.000 TL, stock 9, reachable by direct link | Test product? Recommendation: set to draft |
| 13 | COD orders | #1058 (102.000 TL), #1060 (84.000 TL), #1061 (120.000 TL): cash on delivery, pending, unfulfilled | Delivered and paid? Mark paid and fulfilled, or cancel |
| 14 | Payment methods | FAQ promises havale/EFT. Orders show only PayTR and Cash on Delivery. | Is a bank transfer method set up? IBAN and company title |
| 15 | Reviews | Loovly review widgets and a Google Reviews importer are both active. | Are on-site reviews genuine? Live Google rating and count |
| 16 | Facebook link | Theme setting `social_facebook_link` points to Instagram | Real Facebook page URL, or remove |
| 17 | Conversion setup ownership | Purchase via Google & YouTube app. Phone and WhatsApp conversions exist but no code for them is in the theme. | Who set up "Telefon Tıklamaları" and "Whatsapp Tıklamaları", and how (see tracking.md) |

## Access needed (owner: Naj)

| # | Access | Unblocks |
| --- | --- | --- |
| A1 | Allow celikkasaci.com and celikkasaci.com.tr in the cloud environment network settings, or run the measurement steps on a local machine | Status codes, Lighthouse, page weight, rendered schema, .com.tr sitemap export |
| A2 | Search Console API access for both domains | Queries and pages for keyword-map.csv, cannibalisation check, .com.tr URL export |
| A3 | Keyword Planner access (a write-capable Google Ads API client, or a manual export from the Google Ads UI) | Search volumes and bids for keyword-map.csv |
| A4 | Shopify CLI login, or approval to export the theme through the Admin API into Git | A versioned theme branch (rule 0.4.2) |
