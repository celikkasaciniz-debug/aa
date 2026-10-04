"""Pull the spec values already written in product descriptions and compare
them with the product titles. Output: docs/spec-hints.csv for Muhammed to
confirm. Nothing here is written to Shopify; descriptions contradict titles
in places, so every value needs a yes before it becomes a kasa metafield.

Input: backups/product-descriptions-*.json (handle, title, description).
"""
import csv
import glob
import re

import json

src = sorted(glob.glob('backups/product-descriptions-*.json'))[-1]
products = json.load(open(src, encoding='utf-8'))

NUM = r'(\d+(?:[.,]\d+)?)'


def first(pattern, text):
    m = re.search(pattern, text, re.I)
    return m.group(1).replace(',', '.') if m else ''


def dims(text):
    """Return (outer, inner) as (h, w, d) tuples. A description lists the
    outer size first; a second Yükseklik/Genişlik/Derinlik block preceded by
    an "İç" heading is the inner size."""
    def triple(t):
        return (first(r'Yükseklik\s*:\s*' + NUM + r'\s*cm', t),
                first(r'(?:Genişlik|Uzunluk)\s*:\s*' + NUM + r'\s*cm', t),
                first(r'Derinlik\s*:\s*' + NUM + r'\s*cm', t))
    m = re.search(r'İç\s+(?:Ölçü|Boyut)\w*\s*:?\s*(?=Yükseklik|Genişlik|Derinlik)', text)
    if m:
        return triple(text[:m.start()]), triple(text[m.end():])
    return triple(text), ('', '', '')


rows = []
for p in products:
    t, d = p['title'], p['description'] or ''
    (dh, dw, dd), (ih, iw, idp) = dims(d)
    kg = first(r'Ağırlık\s*:\s*' + NUM + r'\s*kg', d)
    door = first(r'Kapı\s+Kalınlığı\s*:\s*[^\d]{0,30}' + NUM + r'\s*mm', d) or first(NUM + r'\s*mm\s+kalınlığında(?:ki)?\s+(?:bir\s+)?kapı', d)
    wall = first(r'Dış\s+Duvar\s+Kalınlığı\s*:\s*[^\d]{0,30}' + NUM + r'\s*mm', d) or first(r'Duvar\s+Kalınlığı\s*:\s*[^\d]{0,30}' + NUM + r'\s*mm', d)
    surgu = first(r'(\d+)\s*[×x]\s*\d+\s*mm\s*Çaplı\s*Sürgü', d)
    surgu_cap = first(r'\d+\s*[×x]\s*(\d+)\s*mm\s*Çaplı\s*Sürgü', d)
    raf = first(r'(\d+)\s*(?:adet\s*)?(?:ayarlanabilir\s*)?raf', d)
    garanti = first(r'(\d+)\s*yıl(?:lık)?\s*(?:üretici\s*)?garanti', d)
    title_kg = first(NUM + r'\s*KG', t)
    title_cm = first(NUM + r'\s*cm', t)
    notes = []
    title_size = re.search(r'(\d+)\s*x\s*(\d+)\s*x\s*(\d+)', t)
    if title_size and dh and sorted(title_size.groups()) != sorted([dh, dw, dd]):
        notes.append('size: title ' + 'x'.join(title_size.groups()) + f', description {dh}x{dw}x{dd}')
    if kg and title_kg and float(kg) != float(title_kg):
        notes.append(f'weight: title {title_kg} kg, description {kg} kg')
    if dh and title_cm and not title_size and float(dh) != float(title_cm):
        notes.append(f'height: title {title_cm} cm, description {dh} cm')
    if re.search(r'yangın', d, re.I):
        notes.append('description claims fire resistance; no certificate on file')
    if re.search(r'parmak\s*izi', d + t, re.I):
        notes.append('fingerprint lock mentioned; confirm')
    rows.append({
        'handle': p['handle'], 'title': t,
        'dis_yukseklik_cm': dh, 'dis_genislik_cm': dw, 'dis_derinlik_cm': dd,
        'ic_yukseklik_cm': ih, 'ic_genislik_cm': iw, 'ic_derinlik_cm': idp,
        'agirlik_kg': kg or title_kg, 'agirlik_kaynak': 'description' if kg else ('title' if title_kg else ''),
        'kapi_sac_mm': door, 'govde_sac_mm': wall,
        'surgu_adet': surgu, 'surgu_cap_mm': surgu_cap, 'raf_adet': raf, 'garanti_yil': garanti,
        'conflicts_and_checks': '; '.join(notes),
    })

rows.sort(key=lambda r: r['handle'])
with open('docs/spec-hints.csv', 'w', newline='', encoding='utf-8') as f:
    w = csv.DictWriter(f, fieldnames=rows[0].keys())
    w.writeheader()
    w.writerows(rows)
print(len(rows), 'products;', sum(1 for r in rows if 'weight:' in r['conflicts_and_checks'] or 'height:' in r['conflicts_and_checks']), 'with a title/description conflict')
