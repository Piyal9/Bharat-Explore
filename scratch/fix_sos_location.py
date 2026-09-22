"""
Batch-update all HTML files:
1. Replace sector select with a version that has "current-device" as first/default option
2. Update the sosGpsDisplay chip default text to "Acquiring GPS..."
3. Update the sector select label to "Override Location (Optional)"
"""
import re
from pathlib import Path

base = Path(r"c:\Users\dines\Desktop\SIH\Bharat_Explore_SIH_Tourism")
excludes = {".venv", "node_modules", "__pycache__"}

# New sector select - current device first, then pass options
NEW_SECTOR_SELECT = '''<div class="sos-field">
            <label for="sosSectorSelect">Override Location (Optional)</label>
            <select id="sosSectorSelect">
              <option value="current-device">📍 Current Device Location (Auto GPS)</option>
              <option value="khardungla">Khardung La Pass (17,582 ft) - Leh Sector</option>
              <option value="changla">Chang La Pass (17,688 ft) - Pangong Route</option>
              <option value="tanglangla">Tanglang La Pass (17,480 ft) - Manali Hwy</option>
              <option value="zojila">Zoji La Pass (11,575 ft) - Srinagar-Leh Hwy</option>
              <option value="pangong">Pangong Tso Sector (14,270 ft)</option>
              <option value="nubra">Diskit / Nubra Valley (10,000 ft)</option>
              <option value="hanle">Hanle Dark Sky Reserve (14,900 ft)</option>
              <option value="leh">Leh District SNM Trauma Base (11,500 ft)</option>
            </select>
          </div>'''

# Old GPS display (Khardung La hardcoded)
OLD_GPS_CHIP = re.compile(
    r'<div class="sos-gps-chip" id="sosGpsDisplay">\s*📍 High-Altitude Sector: <b>Khardung La Pass</b> \(34\.2787, 77\.6047\)\s*</div>',
    re.DOTALL
)
NEW_GPS_CHIP = '<div class="sos-gps-chip" id="sosGpsDisplay">\n            📍 <b>Acquiring device location...</b>\n          </div>'

# Old sector select block (any variant)
OLD_SECTOR_BLOCK = re.compile(
    r'<div class="sos-field">\s*<label for="sosSectorSelect">.*?</label>\s*<select id="sosSectorSelect">.*?</select>\s*</div>',
    re.DOTALL
)

count = 0
for html_file in sorted(base.rglob("*.html")):
    if any(ex in html_file.parts for ex in excludes):
        continue
    content = html_file.read_text(encoding="utf-8")
    if "sosSectorSelect" not in content:
        continue

    orig = content

    # Fix GPS chip
    content = OLD_GPS_CHIP.sub(NEW_GPS_CHIP, content)

    # Fix sector select
    content = OLD_SECTOR_BLOCK.sub(NEW_SECTOR_SELECT, content)

    if content != orig:
        html_file.write_text(content, encoding="utf-8")
        count += 1
        print(f"[OK] Updated: {html_file.relative_to(base)}")

print(f"\nDone: {count} files updated.")
