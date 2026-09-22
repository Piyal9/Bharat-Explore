"""Remove navSosBtn from all HTML files in the project."""
import re
from pathlib import Path

base = Path(r"c:\Users\dines\Desktop\SIH\Bharat_Explore_SIH_Tourism")
excludes = {".venv", "node_modules", "__pycache__"}

# Pattern matches both multiline and single-line navSosBtn buttons
pattern = re.compile(
    r'\s*<button[^>]*id=["\']navSosBtn["\'][^>]*>.*?</button>\s*',
    re.DOTALL
)

count = 0
for html_file in sorted(base.rglob("*.html")):
    if any(ex in html_file.parts for ex in excludes):
        continue
    content = html_file.read_text(encoding="utf-8")
    if "navSosBtn" in content:
        new_content = pattern.sub("\n", content)
        if new_content != content:
            html_file.write_text(new_content, encoding="utf-8")
            count += 1
            print(f"[OK] Removed navSosBtn from: {html_file.relative_to(base)}")

print(f"\nDone: {count} files cleaned.")
