# New Search campaign, account 2404786286 (proposal, 4 October 2026)

Nothing here is applied. The MCP connection is read only; every change goes to the owner as click steps after `APPROVED: ads <id>`. Prices and weights come from Shopify (active products, 4 October 2026); facts from the site pages.

## 0. Account state today (read-only check, 4 September to 3 October 2026)

| Campaign | Status | Cost | Clicks | Reported conv. | Real outcome |
| --- | --- | --- | --- | --- | --- |
| Çelik Kasa (Search) | Paused | 7.550 TL | 302 | 13 | 0 sales; the "conversions" are test orders, add to cart and begin checkout |
| Performance Max-1 420$ | Paused | 1.770 TL | 132 | 0 | Spent on Display games and all of Türkiye |

Primary conversion actions now: Purchase, Begin Checkout, Add To Cart, Telefon Tıklamaları, Whatsapp Tıklamaları, Clicks to call. Add To Cart and Begin Checkout as primary is why the old campaign "converted" without selling.

## 1. Before launch (blocking)

| Id | Change | Why |
| --- | --- | --- |
| ads-02 | DROPPED 4 October 2026 by the owner: Add To Cart and Begin Checkout stay primary, because customers reach these steps and then finish the purchase by phone. Instead their fixed 1 TL value changes to a stage value (see ads-03) | Bidding still sees the steps that lead to phone sales |
| ads-01 | DROPPED 4 October 2026 by the owner: no data exclusion, the 25 September test orders stay in the learning data | The new campaign starts on Maximise clicks, which does not use conversion data; revisit before switching to Maximise conversions |
| ads-03 | Stage values instead of 1 TL: Add To Cart 250 TL, Begin Checkout 500 TL, Telefon and WhatsApp 1.000 TL (proposed, owner to confirm). Purchase keeps the order value | One buyer can fire cart, checkout and call: graded values keep a cart add from counting like a sale |
| ads-12 | Publish the development theme first | The ads land on the cleaned pages (no fixing or fire claims, prices and weights on the plate) |
| ads-13 | Test phone and WhatsApp tags with Tag Assistant after publish | The source of those two actions is unknown (`docs/tracking.md`) |

## 2. Campaign settings (ads-11)

- Name: `Search | İstanbul | Çelik kasa`. The old "Çelik Kasa" Search campaign and PMax stay paused (10 days of junk history, not worth keeping).
- Network: Google Search only. Search partners off, Display off.
- Location: İstanbul province, option "Presence: people in or regularly in your targeted locations". Language Turkish.
- Schedule: all day (shop open 24 hours, phone answered at any hour). Review hour-of-day after 2 weeks.
- Bidding: Maximise clicks with a 30 TL max CPC for the first 2 to 4 weeks; switch to Maximise conversions after about 30 real primary conversions in 30 days.
- Budget: 1.500 TL a day, owner decision 4 October 2026 (about 45.600 TL a month; about 50 to 60 clicks a day at 25 to 30 TL). Changes after that follow MASTER_PROMPT 10.6.
- Auto-applied recommendations: off.

## 3. Ad groups, keywords, landing pages

Exact `[ ]` and phrase `" "` match only.

| Ad group | Keywords | Final URL |
| --- | --- | --- |
| Genel | [çelik kasa], [çelik kasa fiyatları], "çelik kasa fiyatları", [istanbul çelik kasa], "çelik kasa istanbul", [para kasası], "para kasası fiyatları", "çelik kasa avcılar", [çelik kasa modelleri] | /collections/celik-kasa |
| Ev tipi | [ev tipi kasa], [ev tipi çelik kasa], "ev tipi çelik kasa", "ev için para kasası", "ev kasası", "ev için çelik kasa", "altın kasası", "şifreli çelik kasa" | /collections/ev-ofis-kasasi |
| Zırhlı | [zırhlı kasa], "zırhlı çelik kasa", "zırhlı kasa fiyatları", "panzer kasa" | /collections/zirhli-celik-kasa |
| Parmak izli | "parmak izli kasa", "parmak izli çelik kasa" | /collections/premium-ev-ofis-kasasi |
| Kuyumcu | "kuyumcu kasası", "kuyumcu çelik kasa", "kuyumcu çelik kasa fiyatları" ; "asansörlü kuyumcu kasası", "asansörlü çelik kasa" (own ad, asansörlü URL) | /collections/kuyumcu-kasalari, /collections/asansorlu-kuyumcu-kasasi |
| Ofis ve evrak | "ofis tipi çelik kasa", "evrak kasası", "dosya kasası", "ofis kasası" | /collections/dosya-kasalari |
| Marka | [çelik kasacı], [celikkasaci], "celikkasaci.com" | / |

Not included: otel kasası (no stock), "kasa fiyatları" (computer cases), any competitor brand.

## 4. Shared negative list (ads-04, extended)

Brands not sold: kale, yale, yıldırım, burak, korkmaz, yılmaz, massan, philips, valberg, nas, yuma, hakan, bauhaus, dilaver, balatlı. Used or rental: 2 el, ikinci el, sahibinden, letgo, kiralık. Wrong product: bilgisayar, pc, oyuncu, yazar kasa, pos, market, kasiyer, meyve, plastik, ahşap, bira, kamyon, tır, dorse, araba, oto, kapı, pencere, otel. Support and jobs: şifre sıfırlama, şifresi, nasıl açılır, nasıl, çilingir, tamir, iş ilanı, eleman. Review weekly from search terms.

## 5. Responsive search ads (lengths checked: headlines at most 30, descriptions at most 90)

Shared descriptions:
1. Ev ve ofis için çelik kasalar 20.000 TL'den. İstanbul içinde teslimat ve taşıma dahil.
2. Saat 15:00'e kadar verilen siparişler aynı gün teslim edilir. Tüm kasalarda 2 yıl garanti.
3. Marketteki hafif kasalar değil: 90 kg ve üzeri çelik gövde. Fiyatlar sitede açık.
4. Kartla ya da kapıda ödeme. Hangi model size uygun, emin değilseniz arayın.

Headlines per ad group:
- Genel: Çelik kasa 20.000 TL'den | İstanbul'a aynı gün teslimat | Merdivenden taşıma dahil | Avcılar'daki mağazadan | 2 yıl garanti, kapıda ödeme | 90 kg ile 350 kg arası | Şifreli ve anahtarlı modeller | Fiyatlar sitede açık | Çelik Kasacı, Avcılar | Mağazamız 24 saat açık | İstanbul çelik kasa fiyatları | Saat 15:00'e kadar sipariş
- Ev tipi: Ev tipi kasa 20.000 TL'den | Ev için çelik kasa | 55 cm ve 70 cm ev kasaları | 90 kg'dan başlayan gövde | plus the shared delivery, carrying, guarantee and lock headlines
- Zırhlı: Zırhlı kasa 75.000 TL'den | Zırhlı çelik kasa modelleri | PANZER zırhlı seri | plus shared
- Parmak izli: Parmak izli kasa 60.000 TL'den | Parmak izli çelik kasa | Şifre, parmak izi, anahtar | plus shared
- Kuyumcu: Kuyumcu kasası 175.000 TL'den | Asansörlü vitrin kasası | Kuyumcu ve iş yeri kasaları | Ölçü için arayın | plus shared
- Ofis ve evrak: Evrak kasası 26.000 TL'den | Dosya ve evrak kasaları | Ofis tipi çelik kasa | plus shared

Not used: fire resistance, certificates, own production, fixing, "en", discounts.

## 6. Assets (ads-10)

- Sitelinks: Ev tipi kasalar, Zırhlı kasalar, Parmak izli kasalar, Kuyumcu kasaları, Teslimat ve kurulum, İletişim.
- Callouts: Aynı gün teslimat, Merdivenden taşıma dahil, 2 yıl garanti, Kapıda ödeme, Mağaza 24 saat açık, Avcılar'da mağaza.
- Structured snippet, Türler: Ev tipi, Ofis tipi, Zırhlı, Parmak izli, Kuyumcu, Dosya ve evrak.
- Call asset: 0541 445 15 48, all hours.
- Location asset: link the Google Business Profile (owner step).
- Price assets: Ev tipi 20.000 TL'den, Zırhlı 75.000 TL'den, Parmak izli 60.000 TL'den, Evrak kasası 26.000 TL'den, Kuyumcu 175.000 TL'den. Recheck against Shopify weekly.
- Images: none until real photos exist (no generated images in ads).

## 7. After launch

Weekly report in `docs/ads-proposals/YYYY-WW.md`: search terms, new negatives, impression share, cost per real lead and sale, price drift. Merchant Center and Shopping only after the feed check (ads-09).
