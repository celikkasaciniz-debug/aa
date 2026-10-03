# Çelik Kasacı (celikkasaci.com)

Shopify store for a steel safe seller in Avcılar, İstanbul. The full brief is `docs/MASTER_PROMPT.md`; this file is the short version every session follows. Where they differ, MASTER_PROMPT wins.

## Repository

- `shopify-theme/`: the Shopify theme (Dawn based). Source of truth for theme code.
- `docs/`: audit, plans, logs. Start with `docs/PHASE0-SUMMARY.md`, `docs/NEEDS-CONFIRMATION.md`, `docs/CHANGELOG.md`, `docs/DECISIONS.md`, `docs/manual-steps.md`.
- `scripts/`: report and check scripts (`catalog_audit.py`). `backups/`: Admin API exports.
- `celik-kasa-tema/`: an old ikas theme, not used by the Shopify store. Do not edit unless asked.

## Themes

| Role | Name | Id |
| --- | --- | --- |
| Live (MAIN) | Celik Kasaci - calisma kopyasi | 142814806216 |
| Development (unpublished) | Celik Kasaci - gelistirme | 142814871752 |

Edit in `shopify-theme/`, push only to the development theme with `themeFilesUpsert`, send the preview link `https://celikkasaci.com/?preview_theme_id=142814871752`. Publishing is the owner's step. JSON templates and `config/settings_data.json` are also changed by the theme editor: re-export them from the live theme before editing.

## Tools

- Shopify Admin API (Shopify connector): read and write. Theme writes only to unpublished themes. No `write_legal_policies` scope: policy text is edited by the owner.
- Google Ads (`google-ads` MCP): read only. Ad account 2404786286. Changes go to the owner as click steps.
- Kling AI (`kling` MCP): charged per job; use only as allowed below.
- The container cannot reach celikkasaci.com over HTTP (network policy), so no Lighthouse or rendered checks from here.

## Working rules (MASTER_PROMPT 0.4)

1. Plan, then wait for `APPROVED: <id>`. Small fixes inside an approved phase need no new approval.
2. Never edit the live theme. Work on the development theme; publishing is a separate approval.
3. Redirect before you move: no handle change without a 301 in the same change.
4. Never invent facts. Weights, steel, certificates, founding year, production, delivery times and prices come from Shopify data or from Muhammed. Unknown goes to `docs/NEEDS-CONFIRMATION.md` and stays hidden on the site.
5. Google Ads changes need `APPROVED: ads <id>`. Reports are always allowed.
6. Log every change in `docs/CHANGELOG.md` and every decision in `docs/DECISIONS.md`.
7. Small commits, one concern each.
8. Customer-facing text is Turkish, written like a careful native writer.
9. No em dashes or en dashes anywhere (copy, metadata, ads, documents). Use commas, colons, full stops, or a vertical bar in page titles.
10. Ask one short question with a recommended answer when a decision affects money, law, brand or live data.

## Voice (MASTER_PROMPT 3)

- Positioning: heavy, floor-fixed steel safes in İstanbul; same-day delivery, stair carrying and installation included.
- Plain Turkish, "siz", short sentences, the number first ("300 kg, 6 mm gövde sacı").
- Calm about crime; never frighten.
- Sentence case. No ALL CAPS labels.
- Banned: "değerli olan her şey", "güvenliğiniz bizim önceliğimiz", "en kaliteli", "en iyi", "en ucuz", "lider", "önde gelen", "mükemmel çözüm", "profesyonel çözümler", "son teknoloji", "eşsiz", "kusursuz", "üstün", "hayalinizdeki", "dijital çağda", "huzurlu uykular", "ile tanışın", "yolculuğumuz", "çözüm ortağınız", "sektörün öncüsü", "kalite ve güvenin adresi", "fark yaratan", "her zaman yanınızdayız"; reflex "Keşfedin" or "Hemen inceleyin" buttons; exclamation marks or emojis in headings; rhetorical question headings; adjective triplets; one accented word in a headline; arrows on buttons.
- Formatting: 20.000 TL, 5,0; "TL" not "₺"; non-breaking space between number and unit; dates as "1 Ekim 2026".
- Labels: "WhatsApp'tan sor", "Ara: 0541 445 15 48", "Sepete ekle", "Ödemeye geç", "Ücretsiz keşif iste", "Toplu fiyat iste", "Servis talebi oluştur".

## Design (MASTER_PROMPT 4, details in `docs/design-system.md`)

- One signature element: the "kasa plakası" spec plate. Everything else quiet: left aligned, real photos, borders only where they carry information.
- Avoid the generated-page defaults: cream plus serif plus terracotta, near-black plus acid accent, identical rounded cards, ALL CAPS eyebrows, middle-dot metadata, 01/02/03 markers on non-sequences, scroll entrance animations, gradient blobs, icon trios, trust badge walls, fake counters, any AI imagery.
- Two type families with full Turkish glyphs. Not Inter, Space Grotesk, Playfair Display, Poppins or Montserrat.
- Motion only in answer to an action, and respect `prefers-reduced-motion`.

## Kling AI policy (MASTER_PROMPT 4.8)

Allowed: abstract textures without product or people, obvious explanatory motion graphics, storyboards, social edits of real footage. Not allowed: generating or enhancing product images, interiors, deliveries, people, customers or reviews; any generated visual on product pages, in Merchant Center or in Google Ads. Log every output in `docs/generated-media.md`.

## Before showing any page: the 20-point rubric (MASTER_PROMPT 17)

Real photos only; a specific fact in every section; no copy that fits a competitor; no banned phrases; no dashes, arrows or heading emojis; no ALL CAPS; no accented headline word; numbers only on real sequences; no identical icon card grids; no scroll animations; one signature element; at most two type families; token colours only; prices and claims match data; real people only with consent; reads naturally aloud in Turkish; on mobile the product page shows price, weight, WhatsApp and call in the first screen; unknown fields hidden; one clear next action per page; one decorative element removed before handover.

## Google Ads MCP setup

`.mcp.json` registers `google-ads` (pinned in `scripts/google-ads-mcp.sh`). Credentials come from environment variables in the cloud environment settings, never the repo: `GOOGLE_ADS_ADC_JSON` (authorized_user ADC with the `adwords` scope), optional `GOOGLE_CLOUD_PROJECT` (defaults to able-balm-510520-v4). Leave `GOOGLE_ADS_DEVELOPER_TOKEN` and `GOOGLE_ADS_LOGIN_CUSTOMER_ID` unset. `kling` is a remote HTTP server; the network policy must allow `kling.ai`.
