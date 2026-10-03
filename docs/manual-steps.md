# Manual steps for the owner (2026-10-03)

These changes are approved but cannot be made from the Claude session. Each step is a few clicks.

## 1. Remove compare-at ("before") prices (hotfix-02, MASTER_PROMPT 2.1)

Why: since 1 August 2026 a crossed-out price must be the lowest price of the 10 days before the discount, with campaign dates shown. No price history exists, so the prompt says remove them.

1. Shopify Admin > Products.
2. Tick the box at the top to select all products, then **Bulk edit**.
3. Click **Columns** and add **Compare-at price**.
4. Clear every value in the Compare-at price column (leave the cell empty).
5. **Save**.

The current values are kept in `docs/catalog-audit.csv` (column `compare_at_tl`) so they can be restored if a documented campaign starts later.

## 2. Fill the policy placeholders

Shopify Admin > Settings > Policies. Edit each policy and replace the text on the left with the text on the right. Have a lawyer read the final versions (MASTER_PROMPT section 12).

### Terms of service (Hizmet şartları)

| Find | Replace with |
| --- | --- |
| `[İADE POLİTİKASINA GİDEN BAĞLANTI]` and `[İADE POLİTİKASINA BAĞLANTI]` | a link to `/policies/refund-policy` with the text "İade ve İptal Politikası" |
| `[GİZLİLİK POLİTİKASINA GİDEN BAĞLANTI]` | a link to `/policies/privacy-policy` with the text "Gizlilik Politikası" |
| `istanbulparakasa@gmail.com` (both places) | `satis@celikkasaci.com` |
| `[INSERT TRADING NAME]` | `Muhammed Erdal Taşdemir (Çelik Kasacı)` |
| `[INSERT BUSINESS ADDRESS]` | `Cihangir Mah. Bebe Sk. No: 8 B, 34310 Avcılar / İstanbul` |
| `[INSERT BUSINESS PHONE NUMBER]` | `0541 445 15 48` |
| `[INSERT VAT NUMBER]` | `Vergi Dairesi / No: Avcılar / 8270610126` |
| `[INSERT BUSINESS REGISTRATION NUMBER]` | delete the line until the MERSİS number is known |

### Privacy policy (Gizlilik politikası)

| Find | Replace with |
| --- | --- |
| `[KARGO_FİRMASI_ADI]` | `SATICI'nın anlaşmalı nakliye ve kurulum ekibi` |
| `[ÖDEME_SAĞLAYICISI_ADI — örn. Shopify Payments / iyzico / PayTR]` | `PayTR` |

### Refund policy (Para iade politikası)

| Find | Replace with |
| --- | --- |
| `[TARİH GİRİLECEK]` | `3 Ekim 2026` |

## 3. Google Ads (ads-01, ads-02, ads-03), account 240-478-6286

1. **ads-01:** Tools > Budgets and bidding > Data exclusions > + > name "Test siparişleri", 25 Sep 2026 00:00 to 25 Sep 2026 23:59, campaign types Search and Performance Max > Save.
2. **ads-02:** Goals > Conversions > Summary > Google Shopping App Add To Cart > Edit > Secondary > Save. Repeat for Google Shopping App Begin Checkout.
3. **ads-03 (MASTER_PROMPT 9.2):** set **Telefon Tıklamaları** and **Whatsapp Tıklamaları** to **Secondary** the same way. Button taps are not proof of a lead; they become useful inputs again once offline qualified leads are imported (9.3).

After these steps the only primary conversion is a real purchase. Search should stay on Maximise clicks with a CPC cap until real conversions accumulate (10.6).
