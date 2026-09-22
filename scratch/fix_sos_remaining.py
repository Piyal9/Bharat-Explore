"""Fix remaining HTML files with hardcoded GPS chip and missing current-device option."""
import re
from pathlib import Path

base = Path(r"c:\Users\dines\Desktop\SIH\Bharat_Explore_SIH_Tourism")
excludes = {".venv", "node_modules", "__pycache__"}

# Fix GPS chip - using plain ASCII placeholder that JS will update
OLD_GPS_CHIP_TEXT = re.compile(
    r'(<div class="sos-gps-chip" id="sosGpsDisplay">)[\s\S]*?(</div>)',
    re.DOTALL
)

def is_old_gps_chip(m):
    inner = m.group(0)
    return 'Khardung La Pass' in inner or '34.2787' in inner

NEW_GPS_CHIP_REPLACEMENT = '<div class="sos-gps-chip" id="sosGpsDisplay">\n            \U0001F4CD <b>Acquiring device location...</b>\n          </div>'

count = 0
for html_file in sorted(base.rglob("*.html")):
    if any(ex in html_file.parts for ex in excludes):
        continue
    try:
        content = html_file.read_text(encoding="utf-8", errors="replace")
    except Exception as e:
        print(f"[SKIP] {html_file.name}: {e}")
        continue

    if "sosGpsDisplay" not in content:
        continue

    orig = content

    # Fix GPS chip only if it has Khardung La hardcoded
    if 'Khardung La Pass' in content and 'sosGpsDisplay' in content:
        # Find and replace the specific GPS display div
        content = re.sub(
            r'<div class="sos-gps-chip" id="sosGpsDisplay">\s*\n\s*[^\n]+Khardung La Pass[^\n]+\n\s*</div>',
            '<div class="sos-gps-chip" id="sosGpsDisplay">\n            \U0001F4CD <b>Acquiring device location...</b>\n          </div>',
            content
        )

    # Add current-device option if missing from sosSectorSelect
    if 'sosSectorSelect' in content and 'current-device' not in content:
        content = content.replace(
            '<select id="sosSectorSelect">',
            '<select id="sosSectorSelect">\n              <option value="current-device">\U0001F4CD Current Device Location (Auto GPS)</option>'
        )

    # Fix label
    content = content.replace(
        '<label for="sosSectorSelect">Select Himalayan Sector / Pass</label>',
        '<label for="sosSectorSelect">Override Location (Optional)</label>'
    )

    if content != orig:
        html_file.write_text(content, encoding="utf-8", errors="replace")
        count += 1
        print(f"[OK] Fixed: {html_file.relative_to(base)}")

print(f"\nDone: {count} files fixed.")
