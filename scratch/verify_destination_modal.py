import re
import sys
from pathlib import Path

def test_destination_modal_feature():
    base_dir = Path(r"c:\Users\dines\Desktop\SIH\Bharat_Explore_SIH_Tourism")
    app_js = (base_dir / "js" / "app.js").read_text(encoding="utf-8")
    style_css = (base_dir / "css" / "style.css").read_text(encoding="utf-8")
    explore_html = (base_dir / "html" / "explore.html").read_text(encoding="utf-8")
    home_html = (base_dir / "html" / "home.html").read_text(encoding="utf-8")
    root_home_html = (base_dir / "home.html").read_text(encoding="utf-8")

    errors = []

    # 1. Check JS functions and data structures
    required_js_symbols = [
        "DESTINATION_EXTENDED_INTEL",
        "getEnrichedDestination",
        "showDestination",
        "closeDestinationModal",
        "toggleDestAudioTour",
        "pledgeModalEcoBadge",
        "supportModalFood",
        "toggleSaveModalDestination",
        "planDestinationTour",
        "viewDestinationOnMap",
        "askDestinationAI",
        "formatAiMarkdown"
    ]
    for sym in required_js_symbols:
        if sym not in app_js:
            errors.append(f"Missing JS symbol: {sym}")

    # 2. Check CSS classes
    required_css_classes = [
        ".dest-details-modal",
        ".dest-modal-card",
        ".dest-modal-hero",
        ".dest-audio-bar",
        ".dest-telemetry-bento",
        ".telemetry-card",
        ".ams-meter-bar",
        ".dest-story-box",
        ".dest-highlights-grid",
        ".dest-cuisine-grid",
        ".dest-pledges-box",
        ".dest-ai-hub",
        ".dest-modal-actions-dock"
    ]
    for cls in required_css_classes:
        if cls not in style_css:
            errors.append(f"Missing CSS class: {cls}")

    # 3. Check HTML files for destinationModal container
    for name, content in [("html/explore.html", explore_html), ("html/home.html", home_html), ("home.html", root_home_html)]:
        if 'id="destinationModal"' not in content:
            errors.append(f"Missing #destinationModal in {name}")
        if 'id="destinationModalContent"' not in content:
            errors.append(f"Missing #destinationModalContent in {name}")

    # 4. Check destinations defined in DESTINATION_EXTENDED_INTEL
    intel_match = re.search(r'const DESTINATION_EXTENDED_INTEL = \{(.*?)\n\};', app_js, re.DOTALL)
    if intel_match:
        intel_text = intel_match.group(1)
        expected_dests = ["pangong", "hanle", "turtuk", "sham", "nubra", "khardung", "tsomoriri", "leh", "shanti", "hemis", "zanskar", "spiti"]
        for d in expected_dests:
            if f"{d}:" not in intel_text:
                errors.append(f"Missing destination in DESTINATION_EXTENDED_INTEL: {d}")
    else:
        errors.append("Could not find DESTINATION_EXTENDED_INTEL object in js/app.js")

    if errors:
        print("FAILURES FOUND:")
        for err in errors:
            print(f"  - {err}")
        sys.exit(1)
    else:
        print("ALL VERIFICATIONS PASSED SUCCESSFULLY!")
        print(f"- Verified {len(required_js_symbols)} JS symbols & intelligence engines.")
        print(f"- Verified {len(required_css_classes)} Glassmorphic Bento-grid CSS selectors.")
        print(f"- Verified HTML modals across explore.html, home.html, and root home.html.")

if __name__ == "__main__":
    test_destination_modal_feature()
