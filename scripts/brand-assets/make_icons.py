"""Generates every brand image in public/ from the two source files supplied by the firm:
  public/SakshiYadavAndCoFavicon.webp  (SY monogram on black)
  public/SakshiYadavAndCoLogo.webp     (full lock-up, transparent)
Usage: python3 scripts/brand-assets/make_icons.py   (run from the project root)
"""
import os
from PIL import Image, ImageDraw

PUB = 'public'
FAV_SRC = f'{PUB}/SakshiYadavAndCoFavicon.webp'
LOGO_SRC = f'{PUB}/SakshiYadavAndCoLogo.webp'


# ─── 1. Monogram: remove the black background ────────────────
def transparent_mark():
    im = Image.open(FAV_SRC).convert('RGB')
    px = im.load(); w, h = im.size
    out = Image.new('RGBA', (w, h)); op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            m = max(r, g, b)
            a = 0.0 if m < 18 else min(1.0, (m - 18) / 100.0)
            if a == 0:
                op[x, y] = (0, 0, 0, 0)
                continue
            # un-premultiply against black so anti-aliased edges keep the true red
            op[x, y] = (min(255, int(r / a)), min(255, int(g / a)), min(255, int(b / a)), int(a * 255))
    out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())
    cw, ch = out.size
    side = max(cw, ch)
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.alpha_composite(out, ((side - cw) // 2, (side - ch) // 2))
    return sq


def tile(mark, size, inner=0.74, radius=0.22, border=True, rounded=True):
    """Mark on a white (rounded) square — the favicon treatment."""
    S = size * 4
    t = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(t)
    if rounded:
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * radius), fill=(255, 255, 255, 255),
                            outline=(226, 222, 223, 255) if border else None,
                            width=max(4, S // 128) if border else 0)
    else:
        d.rectangle([0, 0, S - 1, S - 1], fill=(255, 255, 255, 255))
    m = int(S * inner)
    t.alpha_composite(mark.resize((m, m), Image.LANCZOS), ((S - m) // 2, (S - m) // 2))
    return t.resize((size, size), Image.LANCZOS)


# ─── 2. Lock-up: trimmed light-background and dark-background versions ──
def lockups():
    im = Image.open(LOGO_SRC).convert('RGBA')
    im = im.crop(im.getchannel('A').getbbox())
    W, H = im.size

    def save(img, stem):
        img.resize((1200, round(H * 1200 / W)), Image.LANCZOS).save(f'{PUB}/{stem}.webp', quality=90, method=6)

    save(im, 'logo-full')
    im.resize((600, round(H * 600 / W)), Image.LANCZOS).save(f'{PUB}/logo-full.png', optimize=True)

    # Dark-background variant: maroon wordmark -> white, "& Co." -> lighter red, tagline + divider -> soft white
    a = im.getchannel('A'); px = im.load()
    cols = [sum(1 for y in range(H) if a.getpixel((x, y)) > 128) for x in range(W)]
    div = max(range(int(W * 0.15), int(W * 0.35)), key=lambda x: cols[x])
    rows = [sum(1 for x in range(div + 10, W) if px[x, y][3] > 128) for y in range(H)]
    gap = next(y for y in range(int(H * 0.55), H) if rows[y] == 0)
    tag = next(y for y in range(gap, H) if rows[y] > 0)
    for y in range(H):
        for x in range(div - 6, W):
            r, g, b, al = px[x, y]
            if al == 0:
                continue
            if y >= tag or abs(x - div) <= 6:
                px[x, y] = (255, 255, 255, int(al * 0.72))
            elif r < 125:
                px[x, y] = (255, 255, 255, al)
            else:
                px[x, y] = (236, 104, 124, al)
    save(im, 'logo-full-light')


if __name__ == '__main__':
    mark = transparent_mark()
    mark.resize((512, 512), Image.LANCZOS).save(f'{PUB}/sy-mark.png', optimize=True)
    mark.resize((256, 256), Image.LANCZOS).save(f'{PUB}/sy-mark.webp', quality=92, method=6)

    big = tile(mark, 512)
    for name in ('favicon-512.png', 'favicon.png', 'logo.png'):
        big.save(f'{PUB}/{name}', optimize=True)
    tile(mark, 192).save(f'{PUB}/favicon-192.png', optimize=True)
    tile(mark, 48, inner=0.8).save(f'{PUB}/favicon-48.png', optimize=True)
    tile(mark, 32, inner=0.82, border=False).save(f'{PUB}/favicon-32.png', optimize=True)
    tile(mark, 16, inner=0.86, border=False).save(f'{PUB}/favicon-16.png', optimize=True)
    # iOS rounds touch icons itself and ignores transparency
    tile(mark, 180, inner=0.72, border=False, rounded=False).convert('RGB').save(f'{PUB}/apple-touch-icon.png', optimize=True)
    # Maskable: full-bleed white with the mark inside the 80% safe zone
    tile(mark, 512, inner=0.6, border=False, rounded=False).convert('RGB').save(f'{PUB}/maskable-512.png', optimize=True)
    tile(mark, 256, inner=0.82, border=False).save(f'{PUB}/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    lockups()
    print('icons + logos written to public/')
