# Needs confirmation

Fields stay hidden on the site until confirmed. Owner: Muhammed unless noted.

## Business facts

| # | Item | What we see now | Needed |
| --- | --- | --- | --- |
| 1 | Opening hours | Shop policy and contact page: Mon to Fri 09:00 to 18:00, Sat 09:00 to 13:00, Sun closed. Master prompt: Mon to Sat 09:00 to 21:00 on the old site. Google Ads schedule: every day 09:00 to 21:00. | ANSWERED 2026-10-03: phone answered at any hour, website 24/7. 2026-10-04: hours tables removed from İletişim and Teslimat pages, which now say "call before visiting". 2026-10-04 owner: shop open 24 hours; İletişim, Hakkımızda and Teslimat pages now say "Mağazamız 24 saat açıktır". STILL NEEDED: owner to update the shipping/refund policy text that still says "Pazartesi, Cuma 09:00, 18:00" (no policy write scope), and set 24 hours in Google Business Profile |
| 2 | Founding year | Homepage trust plate "15+ Yıl Üretim Tecrübesi"; FAQ "15 yılı aşkın tecrübe" | Year (2008 or 2009) |
| 3 | Production | 2026-10-04: removed from Hakkımızda. Still in product descriptions. Homepage "Kendi Üretim Tesisimiz", FAQ "Avcılar'daki kendi tesisimizde", collection text "Türkiye'nin lider çelik kasa üreticisi" | Which models are made in Avcılar, which are bought in, from whom |
| 4 | Fire certificates | 17 product descriptions also claim fire resistance (spec-hints.csv). FAQ: "Premium ve Zırhlı seri modellerimiz yangına dayanıklı sertifikalıdır". Capacity tile: "Zırhlı + Yangına Dayanıklı" | Certificate files per model (standard, test body, number), or removal |
| 5 | Delivery outside İstanbul | FAQ: "Türkiye geneline teslimat yapıyoruz". PMax ran in 40+ provinces. | Yes or no, and terms |
| 6 | Legal details | Owner name and tax number appear in policies. Terms of service still contain `[INSERT TRADING NAME]`, `[INSERT BUSINESS ADDRESS]`, `[INSERT BUSINESS PHONE NUMBER]`, `[INSERT BUSINESS REGISTRATION NUMBER]`, `[INSERT VAT NUMBER]`, `[İADE POLİTİKASINA GİDEN BAĞLANTI]`. Privacy policy contains `[KARGO_FİRMASI_ADI]` and `[ÖDEME_SAĞLAYICISI_ADI ...]`. Refund policy contains `[TARİH GİRİLECEK]`. | Company title, tax office and number, MERSİS, chamber, cargo partner, ETBİS status |
| 7 | Discounts | 34 of 45 active products show a compare-at price (5% to 37% off). Theme setting `card_campaign_text` = "Sepette Ekstra İndirim" on all cards. Homepage block text "Sepette 10.000 TL Ekstra İndirim" (section currently disabled). | ANSWERED 2026-10-03: owner says all are real. STILL NEEDED: per product, the campaign start date, end date and the lowest price of the 10 days before it began, as evidence. Without dates on the page they do not meet the August 2026 rule |
| 8 | Stock and lead time | Placeholder quantities (1000, 1111, 11111, 999, 100). Hotel safes at 0 to -4 with "continue selling". | Real stock, or "Sipariş üzerine, X gün" per model |
| 9 | Specs per model | 2026-10-04: outer size, inner size and weight copied from the product descriptions into `kasa` fields for 30 products where title and description agree (`docs/spec-hints.csv`). Not copied: (PANZER 70 cm resolved 2026-10-04: owner confirmed 300 kg, description and kasa field set to 300). 22x43x40cm otel kasası size (description says 25x25x35); 150 cm kuyumcu kasası (description gives 60 cm height and "75 to 90 kg"); 2125 weight (description says 20 lbs). Identical specs at different prices: Premium 105 cm (120.000 TL) and 105 cm 350 kg (175.000 TL, owner is correcting this product himself) both 105x60x57, inner 72x47x33, 350 kg; 85 cm Premium (85.000 TL), 85 cm PANZER (120.000 TL) and 85 cm 250 kg (85.000 TL) all 85x60x56, inner 53x47x33; 65 and 75 cm Premium and PANZER pairs have the same outer and inner sizes. No steel thickness, lock, bolts or fixing copied (only 2 descriptions give them). 15 products have no size in the description. | Muhammed: check every row of spec-hints.csv, then fill steel thickness, lock type, bolts, fixing in spec-intake.csv. Say what physically differs between the PANZER, Premium and plain pairs |
| 10 | PANZER vs Premium | 70 cm PANZER (100.000 TL), 70 cm Premium (65.000 TL) and 75 cm Premium (70.000 TL) use the identical main photo. 85, 105, 65 and 75 cm PANZER and Premium pairs, and 2060 and 2055 Super and Premium pairs, use identical image alt text sequences. | ANSWERED 2026-10-03: different safes. STILL NEEDED: their own photos and specs per model |
| 11 | Discount code `11990indrim` | Active since 15 Jan 2025, no end date: 11.990 TL off hotel safes, once per order. Hotel safes cost 3.000 to 6.500 TL, so the code makes them free. 16 orders between #1038 and #1053 have a 0,00 TL total. | DONE 2026-10-03: deactivated (hotfix-01) |
| 12 | Unlisted product at 5 TL | `60-cm-sifreli-celik-kasa-kompakt-yuksek-guvenlikli-ev-ve-ofis-kasasi-copy`: UNLISTED, price 5 TL, compare-at 80.000 TL, stock 9, reachable by direct link | DONE 2026-10-03: set to draft (hotfix-01) |
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

| 2026-10-04 | Floor or wall fixing | Owner: "sabitlenir kasa yok, satmıyoruz". All fixing claims removed from pages, collections, products, homepage hero, FAQ and footer text. | Owner: what does "kurulum" include? The site now says carrying up the stairs, placing the safe where you want, setting the first code. Legal pages (Mesafeli satış, Ön bilgilendirme, İade) still say "kurulum/montaj"; a lawyer or the owner should decide whether "montaj" stays |
