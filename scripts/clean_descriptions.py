"""Remove unverified claims, marketing superlatives, emojis and dashes from
product descriptions (MASTER_PROMPT 2.2, 3). Works on blocks: a <p>, <li> or
heading that makes a claim nobody has documented (fire, heat, water,
explosion, moisture, torch or drill resistance, concrete fill, certificates)
is dropped whole; softer superlatives are cut word by word. Headings left
without content and empty lists are removed afterwards.

Input: backups/product-descriptions-html-*.json. Output: JSON of
{id, handle, old, new} to stdout file given as argv[1].
"""
import glob
import json
import re
import sys

src = sorted(glob.glob('backups/product-descriptions-html-*.json'))[-1]
products = json.load(open(src, encoding='utf-8'))

CLAIM = re.compile(
    r'yang[ıi]n|[ıi]s[ıi]ya|[ıi]s[ıi]\b|[ıi]s[ıi] |s[ıi]cakl[ıi]k|patlama|su ge[çc]irmez|suya dayan|neme\b|nem |nemden|'
    r'oksijen|matkap|delin|kesme|kesici|sertifika|beton|C30|imk[âa]ns[ıi]z|'
    r'toza dayan|toz ve su|IP6\d|hava (?:ko[şs]ul|[şs]art)|ta[şs][ıi]nabilir|hafif|[çc]anta|gezgin|k[öo]p[üu]k|lbs\b|'
    r'alev|standart(?:lar)?[ıi]na|[üu]retebiliriz|[üu]retilebilir|elle yap[ıi]l[ıi]r|[öo]nceli[ğg]imiz|sald[ıi]r[ıi]y[ıi] engeller|delme|a[şs][ıi]lmaz|benzersiz|e[şs]siz|tan[ıi][şs][ıi]n|zirvesi|s[ıi]f[ıi]ra yak[ıi]n', re.I)
SOFT = [
    (r'\bmaksimum\s+', ''), (r'\bMaksimum\s+', ''),
    (r'\büstün\s+', ''), (r'\bÜstün\s+', ''),
    (r'(?i)en üst düzeye çıkarır', 'artırır'), (r'(?i)\s*ile [^<]{0,80}en üst düzeye çıkarın,?', ''), (r'(?i)son teknoloji(?: ürünü)?\s+', ''), (r'(?i)en (?:yüksek|üst) düzeyde\s+', ''), (r'eşyalarınız düzeyde korunur', 'eşyalarınız korunur'),
    (r'(?i)\b(?:en )?üst (?:düzey|seviye)(?:de|deki|nde|ye|yi)?\s+', ''),
    (r'mükemmeldir', 'uygundur'), (r'\bmükemmel\s+', 'uygun '), (r'\bMükemmel\s+', 'Uygun '),
    (r'\bkusursuz\s+', ''), (r'son teknoloji(?: ürünü)?\s+', ''), (r'\ben iyi\s+', ''),
    (r'\ben çok tercih edilen\s+', ''),
]
EMOJI = re.compile('[\u2328\U0001F300-\U0001FAFF☀-➿⭐️]\\s*')
BLOCK = re.compile(r'<(p|li|h[1-6])\b[^>]*>.*?</\1>', re.S | re.I)


HEADING = re.compile(r'<h([1-6])[^>]*>(?:(?!</?h[1-6]).)*?</h\1>\s*', re.S)


def drop_empty_headings(html):
    """Remove a heading that is followed only by a heading of the same or a
    higher level (or by nothing), so a section with no content left goes."""
    while True:
        for m in HEADING.finditer(html):
            nxt = re.match(r'<h([1-6])', html[m.end():])
            if m.end() == len(html) or (nxt and int(nxt.group(1)) <= int(m.group(1))):
                html = html[:m.start()] + html[m.end():]
                break
        else:
            return html


def clean(html):
    html = html or ''

    def drop_claims(m):
        text = re.sub(r'<[^>]+>', ' ', m.group(0))
        return '' if CLAIM.search(text) else m.group(0)

    html = BLOCK.sub(drop_claims, html)
    for a, b in SOFT:
        html = re.sub(a, b, html)
    html = EMOJI.sub('', html)
    html = html.replace(' – ', ', ').replace(' — ', ', ').replace('–', ', ').replace('—', ', ')
    # empty lists and list items, then headings with nothing after them
    for _ in range(3):
        html = re.sub(r'<li>\s*</li>', '', html)
        html = re.sub(r'<ul>\s*</ul>|<ol>\s*</ol>', '', html)
        html = re.sub(r'<p>\s*(?:<br\s*/?>\s*)*</p>', '', html)
        html = drop_empty_headings(html)
    html = re.sub(r'\n{3,}', '\n\n', html).strip()
    # a soft cut can leave a sentence starting in lower case after <strong>
    html = re.sub(r'(<(?:li|p)>\s*)([a-zçğıöşü])', lambda m: m.group(1) + m.group(2).upper(), html)
    html = re.sub(r'(<strong>\s*)([a-zçğıöşü])', lambda m: m.group(1) + m.group(2).upper(), html)
    return html


out = []
for p in products:
    new = clean(p['descriptionHtml'])
    if new != (p['descriptionHtml'] or '').strip():
        out.append({'id': p['id'], 'handle': p['handle'], 'old': p['descriptionHtml'], 'new': new})
json.dump(out, open(sys.argv[1], 'w', encoding='utf-8'), ensure_ascii=False)
print(len(out), 'of', len(products), 'descriptions change')
left = [o['handle'] for o in out if CLAIM.search(re.sub(r'<[^>]+>', ' ', o['new']))]
print('claims left:', left)
