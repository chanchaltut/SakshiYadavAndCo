#!/usr/bin/env bash
# Regenerates every brand image in public/ from the firm's source artwork
# (public/SakshiYadavAndCoFavicon.webp + public/SakshiYadavAndCoLogo.webp):
#   favicons, apple-touch / maskable icons, transparent SY mark, light & dark logo lock-ups,
#   and the Open Graph / Twitter share image (rendered from scripts/brand-assets/og.html).
# Requires Google Chrome (headless) and Python 3 with Pillow. Run from the project root.
set -euo pipefail
cd "$(dirname "$0")/.."
TMP="$(mktemp -d)"
CHROME="${CHROME:-google-chrome}"

python3 scripts/brand-assets/make_icons.py

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --virtual-time-budget=8000 \
  --window-size=1200,630 --screenshot="$TMP/og.png" "file://$PWD/scripts/brand-assets/og.html" >/dev/null 2>&1

python3 - "$TMP" <<'PY'
import sys
from PIL import Image
og = Image.open(f"{sys.argv[1]}/og.png").convert("RGB")
for name in ("og-image.jpg", "twitter-card.jpg"):
    og.save(f"public/{name}", quality=88, optimize=True, progressive=True)
print("share images written to public/")
PY
rm -rf "$TMP"
