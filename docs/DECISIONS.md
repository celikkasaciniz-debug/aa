# Decisions

| Date | Decision | By | Notes |
| --- | --- | --- | --- |
| 2026-10-03 | Discount code `11990indrim` was intentional but is retired | Owner | Deactivated, not deleted, so its order history stays |
| 2026-10-03 | PANZER and Premium models are different safes | Owner | Consequence: each needs its own photos and its own specs. The shared photos stay a Phase 3 task (photo shot list) and are listed in catalog-audit.csv |
| 2026-10-03 | Compare-at prices are reported as real | Owner | Since 1 Aug 2026 the "before" price must be the lowest price applied in the 10 days before the discount began, and campaign dates must be shown. Evidence (price history per product) is still needed before the hotfix-02 decision; see NEEDS-CONFIRMATION 7 |
| 2026-10-03 | Phone is answered at any hour; the website is open 24/7 | Owner | Ads schedule can stay all day. Shop visiting hours for the address, LocalBusiness schema and policies still need one answer (NEEDS-CONFIRMATION 1) |
| 2026-10-03 | Theme source of truth is `shopify-theme/` in this repository; previews run on unpublished theme 142814806216 | Naj (theme-01) | Changes are pushed to the unpublished theme only. Publishing is a separate approval |
| 2026-10-03 | JSON theme files do not match Shopify's MD5 checksum after export | Claude | Shopify re-serialises JSON templates and locales when serving them. All 316 non-JSON files match exactly. Not a data loss |
| 2026-10-03 | hotfix-02 (removing compare-at prices from 34 active products) is on hold | Claude | The session's safety check blocked a store-wide live price change after the owner said the discounts are real. Needs an explicit yes or the price history. Backup of current values is ready to be written when it goes ahead |
| 2026-10-03 | Contact events are published but not sent to Google Ads | Claude | The existing "Telefon Tıklamaları" and "Whatsapp Tıklamaları" actions have an unknown source; sending a second signal could double count. Connect only after the Tag Assistant test (tracking.md, finding 4) |
| 2026-10-03 | Compare-at removal, policy placeholders and Google Ads goal changes are done by the owner | Claude | Store-wide price change blocked by the session safety check twice; policies need the `write_legal_policies` scope this connection lacks; Google Ads tool is read-only. Steps in docs/manual-steps.md |
| 2026-10-03 | ads-03 follows MASTER_PROMPT 9.2: phone and WhatsApp taps become secondary instead of getting a value | Owner via prompt | Re-evaluate when offline lead import exists |
| 2026-10-03 | Development theme is now 142814871752; the old working copy 142814806216 is live | Owner published | CLAUDE.md updated |
| 2026-10-03 | Design tokens adjusted for contrast: `--celik` #5E666E (was #6B737B, 4,0:1), new `--pirinc-koyu` #7A5E2A for link text, WhatsApp label #0B3D2E | Claude | Brief's values failed WCAG AA for text; see design-system.md |
| 2026-10-03 | Google Ads work moves to the end; the site is finished first | Owner ("google ads en sona kalsın") | ads-01/02/03 stay in manual-steps.md; the Ads rebuild waits until the site phases are done |
| 2026-10-03 | Direction A "Kasa plakası" is built on the development theme | Claude, per owner "do what is better and recommended" | Recommended in design-system.md. Publishing is the owner's step |
| 2026-10-03 | IBM Plex Sans Condensed SemiBold replaces Barlow Condensed for plate numerals and headings | Claude | Both IBM Plex families are in Shopify's font library (served from Shopify's CDN, Turkish glyphs included); Barlow Condensed is not, so it would need self-hosting. Keeps the site at one type family |
| 2026-10-04 | Product descriptions count as Shopify data for size and weight, but only where they agree with the title; certificates, fire resistance, steel and lock claims are not copied | Claude | Descriptions contradict titles in 4 products and repeat unverified claims; Muhammed confirms spec-hints.csv before the dev theme is published |
