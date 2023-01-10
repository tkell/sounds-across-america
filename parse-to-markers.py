import json
import re

locations = []
line_regex = re.compile(r"(\w+, \w\w) (\d+\.\d+), (-\d+\.\d+)")
with open("markers-so-far.txt", "r") as f:
    for line in f.readlines():
        m = line_regex.match(line)
        if m:
            loc_tuple = (m.group(1), m.group(2), m.group(3))
            locations.append(loc_tuple)

markers = []
for loc_tuple in locations:
    locationName = loc_tuple[0]
    lat = round(float(loc_tuple[1]), 3)
    lon = round(float(loc_tuple[2]), 3)
    marker = {
        "position": {"lat": lat, "lng": lon},
        "locationName": locationName,
        "blurb": "--",
        "youtubeId": "H8lU-sW5Z7g",
        "youtubeTitle": "Almost Invisible",
        "icon": "images/diamond.svg",
    }
    markers.append(marker)

with open("auto-markers.js", "w") as f:
    json.dump(markers, f, indent=4)
