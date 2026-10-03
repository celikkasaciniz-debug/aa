# Phase 0 summary (2026-10-03)

Read-only audit. Nothing live was changed. Details: audit-site.md, catalog-audit.csv, ads-audit.md, tracking.md, keyword-map.csv, redirects-internal.csv, NEEDS-CONFIRMATION.md, SESSION_LOG.md.

## Ten actions with the biggest expected effect on paid sales

| # | Action | Why | Area | Approval id |
| --- | --- | --- | --- | --- |
| 1 | Clean the Google Ads conversion data before any new spend: exclude 25 Sep, move Add To Cart and Begin Checkout to secondary, give phone and WhatsApp leads a real value | All 4 recorded purchases (70.004 TL) were test orders; bidding learned from them | Ads | ads-01, ads-02, ads-03 |
| 2 | Deactivate discount code `11990indrim` and set the unlisted 5 TL product to draft | The code makes every hotel safe free (16 orders at 0,00 TL); the 5 TL product is buyable by link | Shopify | hotfix-01 |
| 3 | Remove compare-at prices, "Sepette Ekstra İndirim" and discount badges unless documented | 34 of 45 active products; fines under the August 2026 rule; Google Ads policy risk | Legal | hotfix-02 |
| 4 | Remove or prove the fire certificate, "Türkiye geneline teslimat", "lider", "%100 Memnuniyet", production claims; fill every policy placeholder | Legal exposure and Merchant Center misrepresentation risk | Legal | hotfix-03 |
| 5 | Settle the PANZER and Premium duplicates and enter real specs per model (weight, size, steel) | Same photo at 65.000 and 100.000 TL destroys trust; specs are the core proof pillar | Catalog | catalog-01 |
| 6 | Close out the open cash-on-delivery orders (#1058, #1060, #1061: 306.000 TL) | Real buyers may be waiting; COD data is unusable until closed | Operations | ops-01 |
| 7 | Rebuild Search: shared negatives, "Presence", CPC cap, opening-hour schedule, intent ad groups pointing at collections | About 18% identified waste plus 23% out-of-area spend; homepage-only landing | Ads | ads-04 to ads-08 |
| 8 | Add `whatsapp_click` and `tel_click` events in the theme (secondary) and capture gclid into cart attributes and WhatsApp messages | Leads are the main sales path and are not reliably measured | Tracking | track-01 |
| 9 | Local SEO foundations: LocalBusiness schema, a real H1, clean page handles with 301s, readable menu labels, one review app, Turkish UI strings | Wins "çelik kasa istanbul" and district searches; fixes broken-looking URLs | SEO | seo-01 |
| 10 | Real photography to replace the 13 Gemini images and the shared product photos | The anti-AI rule and the trust problem are both solved only by real photos | Design | photo-01 |

## Decision needed: where the theme lives (rule 0.4.2)

The Shopify theme is not in Git; this repository holds an unrelated ikas theme. Recommendation: export the live theme files through the Admin API (read-only) into `shopify-theme/` on this branch, then work on an **unpublished duplicate theme** for previews. Creating the duplicate theme is a write to Shopify and needs approval (`APPROVED: theme-01`).

## Blocked

- Lighthouse, status codes, rendered schema, robots and sitemap: network access to celikkasaci.com (A1).
- Keyword volumes and Search Console data: A2, A3.
- The .com.tr redirect map: A1 or A2.

## Questions (MASTER_PROMPT section 18), shortest form

1. Opening hours and founding year?
2. Which models are produced in Avcılar?
3. Real stock and lead time per model?
4. Fire or burglary certificates as documents?
5. Delivery outside İstanbul: yes or no?
6. Company legal details for the footer and legal pages?
7. Are any current discounts real, dated campaigns?
8. Footer agency credit: keep or remove?
9. Who set up the phone and WhatsApp conversions, and how?
10. Photo and video shoot date?
11. English and Arabic later: interested?
12. Negotiation and discount policy?
13. PANZER vs Premium: different safes or duplicates?
14. Was the `11990indrim` code intentional?
