#!/usr/bin/env bash
# Regenerates the social banners, favicons and logo in public/ from scripts/brand-assets/*.html.
# Requires Google Chrome (headless) and Python 3 with Pillow. Run from the project root.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC="$PWD/scripts/brand-assets"
TMP="$(mktemp -d)"
CHROME="${CHROME:-google-chrome}"

shot() { # url width height out
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --default-background-color=00000000 --virtual-time-budget=8000 \
    --window-size="$2,$3" --screenshot="$4" "$1" >/dev/null 2>&1
}

shot "file://$SRC/og.html" 1200 630 "$TMP/og.png"
shot "file://$SRC/icon.html" 512 512 "$TMP/icon.png"
shot "file://$SRC/icon.html#maskable" 512 512 "$TMP/maskable.png"

python3 - "$TMP" <<'PY'
import sys
from PIL import Image
tmp = sys.argv[1]
og = Image.open(f"{tmp}/og.png").convert("RGB")
og.save("public/og-image.jpg", quality=90, optimize=True, progressive=True)
og.save("public/twitter-card.jpg", quality=90, optimize=True, progressive=True)
icon = Image.open(f"{tmp}/icon.png").convert("RGBA")
icon.save("public/logo.png", optimize=True)
icon.save("public/favicon-512.png", optimize=True)
for size, name in [(192, "favicon-192.png"), (180, "apple-touch-icon.png"), (32, "favicon-32.png")]:
    icon.resize((size, size), Image.LANCZOS).save(f"public/{name}", optimize=True)
# iOS ignores transparency on touch icons — flatten onto the brand red
touch = Image.new("RGBA", (180, 180), (192, 21, 48, 255))
touch.alpha_composite(icon.resize((180, 180), Image.LANCZOS))
touch.convert("RGB").save("public/apple-touch-icon.png", optimize=True)
icon.resize((48, 48), Image.LANCZOS).save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
Image.open(f"{tmp}/maskable.png").convert("RGB").save("public/maskable-512.png", optimize=True)
print("brand assets written to public/")
PY
rm -rf "$TMP"
