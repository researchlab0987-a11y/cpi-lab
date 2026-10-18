"""Turn the downloaded Google Sites pages into readable Markdown (text, images, links).

Usage: python -I extract.py   (reads html/*.html, writes md/*.md)
"""
import html
import os
import re
from html.parser import HTMLParser

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'html')
OUT = os.path.join(HERE, 'md')
os.makedirs(OUT, exist_ok=True)

BLOCK = {'p', 'div', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'tr', 'section', 'figure'}
SKIP = {'script', 'style', 'noscript', 'svg', 'head'}


class Extract(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.skip = 0
        self.in_main = False
        self.depth_main = 0
        self.href = None
        self.images = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP:
            self.skip += 1
            return
        if tag in BLOCK:
            self.parts.append('\n')
        if tag in ('h1', 'h2', 'h3', 'h4'):
            self.parts.append('#' * int(tag[1]) + ' ')
        if tag == 'li':
            self.parts.append('- ')
        if tag == 'a' and a.get('href'):
            self.href = a['href']
        if tag == 'img':
            src = a.get('src') or a.get('data-src') or ''
            if src and 'googleusercontent' in src or 'sitesv-images' in src:
                self.images.append(src)
                self.parts.append(f'\n![image]({src})\n')
        if tag == 'iframe' and a.get('src'):
            self.parts.append(f"\n[embed]({a['src']})\n")

    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
            return
        if tag == 'a':
            self.href = None
        if tag in BLOCK:
            self.parts.append('\n')

    def handle_data(self, data):
        if self.skip:
            return
        text = data.strip()
        if not text:
            return
        if self.href and not self.href.startswith('#'):
            self.links.append((text, self.href))
            self.parts.append(f' [{text}]({self.href}) ')
        else:
            self.parts.append(' ' + text + ' ')


NOISE = re.compile(r'^(Skip to main content|Skip to navigation|Search this site|Report abuse|Page details|Page updated.*|Google Sites|Embedded Files|This site uses cookies.*|Learn more|Got it)$', re.I)

for name in sorted(os.listdir(SRC)):
    if not name.endswith('.html'):
        continue
    raw = open(os.path.join(SRC, name), encoding='utf-8', errors='ignore').read()
    # Google Sites puts page content inside <div role="main"> ... keep from there if present
    m = re.search(r'role="main"', raw)
    body = raw[m.start() - 200:] if m else raw
    p = Extract()
    p.feed(body)
    text = ''.join(p.parts)
    text = re.sub(r'[ \t]+', ' ', text)
    lines = [l.strip() for l in text.split('\n')]
    lines = [l for l in lines if l and not NOISE.match(l)]
    # collapse duplicates that Google Sites repeats (nav rendered twice)
    out = []
    for l in lines:
        if out and out[-1] == l:
            continue
        out.append(l)
    md = '\n'.join(out)
    title = os.path.splitext(name)[0]
    open(os.path.join(OUT, title + '.md'), 'w', encoding='utf-8').write(f'<!-- source: https://sites.google.com/view/tahsina-cpi-lab/{title} -->\n\n' + md + '\n')
    print(f'{title}: {len(out)} lines, {len(set(p.images))} images, {len(p.links)} links')
