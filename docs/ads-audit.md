# Google Ads audit, account 2404786286 (Phase 0, read-only, 2026-10-03)

## 1. Account history

The account has only 10 days of spend: 23 Sep to 2 Oct 2026. Both campaigns were created on 23 Sep by istanbulparakasa@gmail.com. Performance Max was paused on 25 Sep 10:01 and Search on 2 Oct 10:39. Both are paused now.

| Campaign | Type | Bidding | Daily budget | Cost | Clicks | CTR | Avg CPC | Reported conv. | Real outcome |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Çelik Kasa | Search | Maximise clicks, no CPC cap | 1.224 TL | 7.550 TL | 302 | 8,3% | 25,0 TL | 9 (70.004 TL) | 0 sales; 4 phone and 1 WhatsApp click |
| Performance Max-1 420$ | PMax with Merchant Center 5550182047 | Maximise conversion value | 500 TL | 1.770 TL | 132 | 1,2% | 13,4 TL | 0 | 0 |
| **Total** | | | | **9.320 TL** | **434** | | | | |

## 2. Search campaign "Çelik Kasa"

- **Structure:** one ad group ("Reklam grubu 1"), 18 phrase-match keywords, one responsive search ad (strength Good, approved), final URL `https://celikkasaci.com/` for everything.
- **Targeting:** İstanbul (province), Turkish, Google Search only (no partners, no Display). Location option "Presence or interest": 1.738 TL (23%) came from people outside İstanbul. Schedule every day 09:00 to 21:00, which includes Sunday and evenings when the shop is closed (policy hours: weekdays to 18:00, Saturday to 13:00).
- **Negative keywords:** none at campaign, ad group or account level.
- **Impression share:** 66%; lost to budget 32%; lost to rank 2%. Budget is not the constraint: waste is.
- **Quality Score:** 5 to 8 on the main keywords; landing page experience "below average" on all "ev tipi" and "ev kasası" keywords and on "istanbul çelik kasa".
- **Devices:** mobile 6.170 TL and all 9 reported conversions; desktop 1.333 TL, 0.
- **Hours:** 09:00 was the most expensive hour (35,6 TL per click, 0 conversions).
- **Ad copy:** "Hemen Arayın Bilgi Alın", "Kuyumcu Tipi Çelik Kasalar", "Yangına Dayanıklı Kasalar" (certification claim), "İstanbul Üreticiden Çelik Kasa" (production claim). No price in headlines.

### Search terms (visible terms only; Google hides low-volume ones)

| Wasted intent | Examples | Cost |
| --- | --- | --- |
| Competitor brands | kale (10 variants, 389 TL), yıldırım, burak, korkmaz, yale, yılmaz, massan, philips, valberg, nas, yuma, hakan, bauhaus, dilaver, balatlı | ~912 TL |
| Second hand | 2 el, ikinci el, sahibinden, letgo | ~369 TL |
| Support questions | kale çelik kasa şifre sıfırlama, çelik kasa şifresi nasıl değişir | ~49 TL |
| Wrong product | bilgisayar kasa fiyatları, el kasası | ~35 TL |
| **Identified waste** | | **~1.365 TL (18% of Search)** |

The keyword "kasa fiyatları" spent 1.432 TL for 62 clicks and 0 conversions, and matches computer cases.

## 3. Performance Max "Performance Max-1 420$"

- Ran about 40 hours. No location targeting: all of Türkiye (Ankara, İzmir, Antalya, Bursa, Ordu, ...). Only 459 TL in İstanbul.
- Networks: Search 944 TL, Display 812 TL, YouTube 14 TL. Display placements are mobile games (Block Blast, Candy Crush, My Talking Tom, Okey, Vita Mahjong) and sites like masal-oku.tr.
- Asset group ad strength POOR; status NOT_ELIGIBLE now.
- Products: top spend "Büyük Otel Kasası 50x35x31 cm" (313 TL, stock -2). Every product appears twice in the feed (`shopify_zz_...` and `shopify_tr_...` item IDs). Feed titles differ from current Shopify titles.

## 4. Assets

Only a business logo (campaign level). No sitelinks, callouts, structured snippets, price, call or location assets at account or campaign level.

## 5. Settings

- Auto-applied recommendations: no subscriptions found (good).
- Final URLs: all point to celikkasaci.com (none to .com.tr).
- Auction insights and change history beyond 15 Sep: not needed (account started 23 Sep).

## 6. Proposals (not applied; each needs `APPROVED: ads <id>`)

| Id | Change | Expected effect |
| --- | --- | --- |
| ads-01 | Data exclusion for 25 Sep 2026, Search and PMax | Stops test orders from training bids |
| ads-02 | Add To Cart and Begin Checkout to secondary | Conversions mean purchases and leads only |
| ads-03 | Lead values: Telefon and WhatsApp at an agreed TL value | Leads stop being worth 1 TL |
| ads-04 | Shared negative list: brands not sold, 2 el, ikinci el, sahibinden, letgo, bilgisayar, yazar, kapı, pencere, kamyon, meyve, kiralık, şifre sıfırlama, nasıl açılır | About 18% less waste |
| ads-05 | Location option "Presence" on both campaigns | About 23% of Search spend moves to people in İstanbul |
| ads-06 | Max CPC cap about 30 TL on Search | Caps 09:00 spikes |
| ads-07 | Ad schedule to confirmed opening hours | Calls get answered |
| ads-08 | Split into intent ad groups with matching landing pages (section 10.3) | Better Quality Score, cheaper clicks |
| ads-09 | Keep PMax paused; propose Standard Shopping for İstanbul after the feed is fixed | Stops Display waste |
| ads-10 | Add sitelinks, callouts, call asset (opening hours), location asset | Higher CTR at no cost |
