# Tracking (Phase 0, verified read-only, 2026-10-03)

## What fires and how it is counted

| Conversion action | Source | Primary | Counting | Window | Value | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Google Shopping App Purchase | Google & YouTube app (AW-18469730986) | Yes | Every | 30 days | Order value, ex KDV | Works. Counted 4 on 25 Sep 2026, value 70.004,50 TL = order #1073 (84.000 TL incl. KDV, cash on delivery, pending) + three 1,80 TL test orders. All test traffic. |
| Google Shopping App Begin Checkout | App | Yes | One | 30 days | Fixed 1 TL | Should be secondary |
| Google Shopping App Add To Cart | App | Yes | One | 30 days | Fixed 1 TL | Should be secondary |
| Google Shopping App Page View, View Item, Search, Add Payment Info | App | No | Every | 30 days | | Fine as secondary |
| Telefon Tıklamaları | Website (AW-18469730986/AbzyCN_d54IdEKr1hudE) | Yes | One | 30 days | 1 TL | Recorded 4 (24 to 28 Sep). No code for it exists in the theme. Source unknown. |
| Whatsapp Tıklamaları | Website (AW-18469730986/1KmKCN3254IdEKr1hudE) | Yes | One | 30 days | 1 TL | Recorded 1 (25 Sep). Same as above. |
| Clicks to call | Google hosted | Primary flag, but excluded from Conversions | Every | 30 days | | Counts taps on ad call buttons, not calls |
| GA4 imports (purchase, click, qualify_lead, close_convert_lead) | GA4 | No | | 90 days | | Hidden. No GA4 event is primary. |
| YouTube subscriptions, follow-on views | YouTube | No | | | | Harmless |

Account settings: auto-tagging on; conversion tracking managed in this account; customer data terms accepted; enhanced conversions for leads on; enhanced conversions for web not verifiable through this API. Attribution: data-driven.

## Findings

1. **Purchase is counted once** now. The duplicate custom pixel ("Google Ads Satın Alma") was removed on 2 Oct 2026 (backup in `celikkasaci-yedek/`). No GA4 purchase import is active.
2. **Test orders train the bidding.** All 4 recorded purchases are tests. No data exclusion exists for 25 Sep.
3. **Cash on delivery orders fire a purchase at order time,** before any money is collected. Unpaid or fake COD orders count as sales.
4. **Phone and WhatsApp tracking has no visible source.** The floating buttons (`sections/floating-contact.liquid`) and the hero "Hemen Ara" link have no click handlers. No GTM embed is in the theme. The deleted GTM pixel listened for `phone_click` and `whatsapp_click` events that the theme never sends. Possibly a Google tag click rule configured in Google Ads. Must be tested with Tag Assistant (needs a browser on a machine that can reach the site).
5. **Leads are valued at 1 TL** while purchases carry full value; PMax used value-based bidding.
6. **No offline import** of WhatsApp, phone, cash or transfer sales exists.
7. **No click ID capture** (gclid, gbraid, wbraid) into cart attributes or WhatsApp messages.

## Missing against the target state (MASTER_PROMPT 9.2)

- `whatsapp_click` and `tel_click` events from the theme, as secondary.
- Add To Cart and Begin Checkout moved to secondary.
- Offline paid-sale and qualified-lead imports.
- Consent banner using the Customer Privacy API.
