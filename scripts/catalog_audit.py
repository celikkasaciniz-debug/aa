"""Builds docs/catalog-audit.csv from a Shopify Admin API product export.

Usage: python3 scripts/catalog_audit.py backups/products-YYYY-MM-DD.json > docs/catalog-audit.csv
The export is the JSON returned by the products query used in Phase 0
(handle, title, status, variants with price/compareAtPrice/inventory, metafields, first media).
"""
import csv
import json
import sys

REQUIRED_KASA_KEYS = ["agirlik_kg", "dis_yukseklik_cm", "dis_genislik_cm", "dis_derinlik_cm", "govde_sac_mm", "kilit_tipi", "model_kodu"]

products = json.load(open(sys.argv[1]))["data"]["products"]["nodes"]

first_image = {}
for p in products:
    media = p["media"]["nodes"]
    url = media[0].get("image", {}).get("url", "") if media else ""
    first_image[p["handle"]] = url.split("?")[0]
by_image = {}
for handle, url in first_image.items():
    if url:
        by_image.setdefault(url, []).append(handle)

w = csv.writer(sys.stdout)
w.writerow(["handle", "title", "status", "variants", "price_tl", "compare_at_tl", "discount_pct", "stock", "inventory_policy", "sku", "missing_kasa_metafields", "same_main_photo_as", "flags"])
for p in products:
    vs = p["variants"]["nodes"]
    v0 = vs[0]
    price = float(v0["price"])
    cmp = float(v0["compareAtPrice"]) if v0["compareAtPrice"] else None
    pct = round(100 - 100 * price / cmp) if cmp and cmp > price else ""
    stock = [v["inventoryQuantity"] for v in vs]
    keys = {m["key"] for m in p["metafields"]["nodes"] if m["namespace"] == "kasa"}
    missing = [k for k in REQUIRED_KASA_KEYS if k not in keys]
    twins = [h for h in by_image.get(first_image[p["handle"]], []) if h != p["handle"]]
    flags = []
    if pct != "":
        flags.append("compare-at price shown (needs 10-day price evidence or removal)")
    if any(s is not None and s >= 99 for s in stock):
        flags.append("placeholder stock quantity")
    if any(s is not None and s < 0 for s in stock):
        flags.append("negative stock")
    if v0["inventoryPolicy"] == "CONTINUE":
        flags.append("sells when out of stock")
    if not any(v["sku"] for v in vs):
        flags.append("no SKU / model code")
    if price < 100:
        flags.append("price below 100 TL")
    if "–" in p["title"] or "—" in p["title"]:
        flags.append("dash in title")
    if twins:
        flags.append("shares main photo with another product")
    w.writerow([p["handle"], p["title"], p["status"], len(vs), f"{price:.0f}", f"{cmp:.0f}" if cmp else "", pct,
                " / ".join(str(s) for s in stock), v0["inventoryPolicy"], v0["sku"] or "",
                " ".join(missing), " ".join(twins), "; ".join(flags)])
