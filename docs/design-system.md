# Design system proposal (Phase 1, for Naj to choose)

Status: PROPOSAL. Nothing here is built yet. Choose A, B or C (or a mix) with `APPROVED: design-A` (or B, C).

All three directions share the MASTER_PROMPT layout rules: left-aligned text, 12/4 column grid with 7/5 and 8/4 splits, real photography carrying the page, tables as first-class elements, a sticky mobile bar with price, WhatsApp and call, no scroll animations, 2 px radius on controls, 0 on photos, no shadows except the sticky bar.

## Direction A: "Kasa plakası" (recommended)

The riveted maker's plate on a safe door. Boldness is spent only on the plate; everything else is quiet.

### Colour tokens (contrast checked, WCAG 2.2)

| Token | Value | Use | Check |
| --- | --- | --- | --- |
| `--grafit` | #2A2E33 | Text, dark surfaces | 11,4:1 on Galvaniz, 13,7:1 on white |
| `--celik` | #5E666E | Secondary text, table rules | 4,9:1 on Galvaniz. Changed from the brief's #6B737B, which is 4,0:1 and fails for body text |
| `--galvaniz` | #E8EBED | Page background (cool grey, not cream) | |
| `--beyaz` | #FFFFFF | Behind product photography only | |
| `--pirinc` | #9C7A3C | Plate details, rivets, focus ring, rules | 3,3:1 on Galvaniz: fine for non-text UI (3:1), **not** for text |
| `--pirinc-koyu` | #7A5E2A | Key links and the only accented text | 5,1:1 on Galvaniz. Added because `--pirinc` fails as text |
| `--whatsapp` | #25D366 | WhatsApp button background only | Label in #0B3D2E (6,2:1). White text on #25D366 is 2,0:1 and fails |
| `--hata` | #B42318 | Errors | 6,6:1 on white |

### Type

- Text and interface: **IBM Plex Sans** (400, 500, 600). Full Turkish glyphs.
- Plate numerals and large headings: **Barlow Condensed SemiBold** (600).
- Scale 1,25 from a 17 px body: 17 / 21 / 27 / 33 / 41 px. Line height 1,55 for body, 1,15 for display. Max line length 72 characters.
- Self-host WOFF2 subsets (latin, latin-ext) with `font-display: swap` unless both exist in Shopify's font library. Check Ç Ğ İ ı Ö Ş Ü in every weight before shipping.
- Today the site loads Archivo plus a separate Archivo 700 for the announcement bar. A replaces both, so the font count stays at two.

### The plate component

```
+-----------------------------------------+
| o                                     o |
|   PZ-70-A                               |
|   300 kg   |   70 cm   |   6 mm sac     |
| o                                     o |
+-----------------------------------------+
```

- Brushed-metal tone from a two-stop linear gradient between #D9DDE0 and #C4C9CD (the only gradient on the site, because it depicts a material), 1 px `--pirinc` border, two rivet dots per side.
- Numerals in Barlow Condensed, units in Plex Sans. Fields come from `kasa` metafields; a missing field hides its cell.
- One motion moment: on first view on the product page, the numbers settle once (opacity and 4 px translate, 240 ms). Off under `prefers-reduced-motion`.

### Scale drawing

An SVG drawn from `dis_yukseklik_cm` and `dis_genislik_cm` next to a 175 cm person outline, in `--grafit` strokes at 1,5 px, no fill. Hidden when dimensions are missing.

### Wireframes (mobile first)

Home
```
[logo]                         [Ara] [WhatsApp]
-----------------------------------------------
| REAL PHOTO: 300 kg safe on a stairwell      |
-----------------------------------------------
İstanbul'a aynı gün çelik kasa:
taşıma ve sabitleme dahil.
[WhatsApp'tan sor]  [Ara: 0541 445 15 48]
İstanbul içi aynı gün teslim; taşıma ve sabitleme fiyata dahil.

Google 5,0 (n yorum, link) | Avcılar mağaza, Mağazada görün | Kapıda ödeme

Neye ihtiyacınız var?            (photo + "20.000 TL'den, 50 ile 100 kg")
[Ev ve ofis] [Zırhlı] [Premium] [Kuyumcu] [Otel]

Ağırlık farkı: 25 kg kutu ile 300 kg sabit kasa (table, link to guide)
Çok satanlar: product rows with plate + price
Teslimat nasıl işler: 1 Sipariş 2 Arama 3 Saat 4 Merdiven 5 Sabitleme 6 Teslim
Gerçek yorumlar (first name, district, date)
Rehberler (3)
Adres, saat, harita (click to load)
[sticky: WhatsApp | Ara]
```

Collection
```
Zırhlı Çelik Kasa Fiyatları ve Modelleri
11 model, 70.000 TL'den, 250 ile 600 kg. İstanbul içi aynı gün teslim ve kurulum dahil.
[Ölçü] [Ağırlık] [Kilit] [Fiyat]           [Sırala: Fiyat artan]
| Model | cm | kg | sac | kilit | fiyat |   (comparison table, sortable)
Ağırlık merdiveni: ----o----o------o------o--- kg
Product grid: photo, plate, price
Bu kategori için not + rehber linki
3 to 5 real questions
Komşu kategoriler
```

Product
```
PANZER 70 cm Zırhlı Çelik Kasa, 300 kg, Anahtarlı
[REAL PHOTO GALLERY]                [PLATE: 300 kg | 70 cm | 6 mm sac]
100.000 TL, KDV dahil                [scale drawing]
Bugün 15:00'e kadar sipariş: aynı gün teslim (İstanbul)
[Sepete ekle] [WhatsApp'tan sor] [Ara]
Google 5,0 link | Avcılar'da görebilirsiniz | 2 yıl garanti
Kasam asansöre sığar mı? (fit checker)
Spec table (empty rows hidden)
Hangisini seçmeliyim? cheaper | stronger
Teslimat ve kurulum | Ödeme seçenekleri
Sorular | Yorumlar
[sticky: 100.000 TL | WhatsApp | Ara]
```

## Direction B: "Sevkiyat bandı" (the delivery crew)

The brand is the crew that carries 300 kg up the stairs: straps, yellow load tape, the delivery docket.

| Token | Value | Use |
| --- | --- | --- |
| Grafit | #2A2E33 | Text |
| Beton | #E6E6E3 | Background |
| Bant sarısı | #E3B505 | Only on delivery information: the same-day line, the delivery steps, the district estimator. Always as a background behind Grafit text (7,1:1), never as text |
| Kayış | #4A5560 | Secondary text (6,1:1 on Beton) |

- Type: **Archivo** (already on the site, so no new font cost) for text, **Archivo Narrow SemiBold** for numbers.
- Signature: a "sevkiyat fişi" (delivery docket) block on product and home pages: district, delivery window, crew size, floor, stair or lift. Generated from the delivery rules Muhammed sets.
- Home opens with the delivery sequence as the hero (real video), then categories.
- Risk: yellow on grey can read as construction or hazard. It must stay limited to delivery facts.

## Direction C: "Kasa kapısı" (the classic safe door)

The deep enamel and brass of the safes in older İstanbul shops.

| Token | Value | Use |
| --- | --- | --- |
| Lacivert | #1F3A5F | Header, footer, plate |
| Kağıt | #F2F4F5 | Background (cool, not cream) |
| Pirinç | #C9A227 | Plate details on Lacivert (4,8:1) |
| Grafit | #2A2E33 | Text |

- Type: **Fira Sans** and **Fira Sans Condensed**.
- Signature: the plate in Lacivert with brass lettering.
- Risk: navy plus gold drifts toward a generic "luxury" template and suits jewellers more than home buyers.

## Self-review against MASTER_PROMPT 4.2

| Default to avoid | A | B | C | Notes |
| --- | --- | --- | --- | --- |
| Cream background, serif display, terracotta accent | Avoided | Avoided | Avoided | All backgrounds are cool greys; no serif |
| Near-black with one acid accent | Avoided | At risk | Avoided | B's yellow is limited to delivery facts to stay clear of it |
| Broadsheet hairlines everywhere | Avoided | Avoided | Avoided | Borders only in tables and the plate |
| Identical rounded cards, one shadow, gradient washes | Avoided | Avoided | Avoided | Photos unboxed; one material gradient in A's plate only |
| ALL CAPS eyebrows, middle-dot metadata, monospace labels, arrows | Avoided | Avoided | Avoided | Current site uses "İstanbul · Kendi Üretim Tesisimiz" and ALL CAPS headings; both are removed |
| One accented headline word | Avoided | Avoided | Avoided | |
| 01/02/03 on non-sequences | Avoided | Avoided | Avoided | Numbers only on the delivery steps |
| Scroll entrance animations | Avoided | Avoided | Avoided | Current theme has `animations_reveal_on_scroll: true`; turn it off |
| Icon trios, badge walls, fake counters, AI imagery | Avoided | Avoided | Avoided | Requires the real photo shoot (`docs/photo-shotlist.md`) |

What changed after review: the brief's `--celik` (#6B737B) and `--pirinc` as link text failed contrast and were replaced; white on the WhatsApp green failed and was replaced; B's yellow was limited to one information type.

## Recommendation

A. It is the only direction whose signature element carries real buying information (weight, size, steel), which is exactly what separates these safes from light marketplace boxes. It needs the `kasa` metafields filled to work, so it pairs with the catalog work.
