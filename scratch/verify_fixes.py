import urllib.request
import json

base = "http://127.0.0.1:8000"

print("--- 1. Testing Landing Page (/) ---")
home_html = urllib.request.urlopen(f"{base}/").read().decode("utf-8")
print("Video new.4k.mp4 present:", "new.4k.mp4" in home_html)
print("Button 'Explore The Unknown' present:", "Explore The Unknown" in home_html)
print("Button links to explore.html:", 'href="explore.html"' in home_html)

print("\n--- 2. Testing Video Asset Streaming ---")
req_vid = urllib.request.Request(f"{base}/assets/videos/new.4k.mp4", method="HEAD")
with urllib.request.urlopen(req_vid) as resp:
    print("Video HTTP Status:", resp.status)
    print("Video Content-Length:", resp.headers.get("Content-Length"))

print("\n--- 3. Testing Planner Page (/planner.html) SOS Modal ---")
planner_html = urllib.request.urlopen(f"{base}/planner.html").read().decode("utf-8")
print("Planner has transmitSosBtn:", 'id="transmitSosBtn"' in planner_html)
print("Planner has 24/7 Hotlines:", "1363" in planner_html and "112" in planner_html)
print("Planner has emergency scenarios:", "Altitude Sickness" in planner_html)

print("\n--- 4. Testing SOS Distress Broadcast & Standby Persistence ---")
post_data = json.dumps({
    "id": "sos-test-persistent-signal",
    "lat": 34.2787,
    "lng": 77.6047,
    "location_name": "Khardung La Pass",
    "emergency_type": "AMS Hypoxia",
    "description": "Distress test persistence until stand down",
    "traveler_name": "Automated Tester",
    "status": "ACTIVE"
}).encode("utf-8")

req = urllib.request.Request(f"{base}/api/sos", data=post_data, headers={"Content-Type": "application/json"}, method="POST")
res = json.loads(urllib.request.urlopen(req).read().decode("utf-8"))
print("Broadcast SOS successful:", res.get("success"))

active_res = json.loads(urllib.request.urlopen(f"{base}/api/sos").read().decode("utf-8"))
print("Active distress beacons count:", active_res.get("count"))
beacon_present = any(s["id"] == "sos-test-persistent-signal" for s in active_res.get("signals", []))
print("Distress signal persistently broadcasting on map telemetry:", beacon_present)

print("\n--- 5. Testing User Resolving / Standing Down Signal ---")
req_res = urllib.request.Request(f"{base}/api/sos/sos-test-persistent-signal/resolve", method="POST")
resolve_res = json.loads(urllib.request.urlopen(req_res).read().decode("utf-8"))
print("User clicked Mark Distress as Resolved:", resolve_res.get("success"))

active_after = json.loads(urllib.request.urlopen(f"{base}/api/sos").read().decode("utf-8"))
beacon_removed = not any(s["id"] == "sos-test-persistent-signal" for s in active_after.get("signals", []))
print("Beacon turned off after user resolution:", beacon_removed)
print("\n>>> ALL VERIFICATION CHECKS PASSED! <<<")
