// "Problematic Globals"
let map;
let mapDisabled = false;

function makeInfoWindowHtml(locationName, latLon, blurb, youtubeTitle, youtubeId) {
  return `
    <div>
      <p class="location-name">${locationName}</p>
      <p class="latlon-blurb">${latLon}</p>
      <p class="location-blurb">${blurb}</p>
      <iframe class="iframe-yt-embed" width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}?rel=0" title="${youtubeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>
  `
}

function toggleMap() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox.style.display === "none" || lightbox.style.display === "") {
    lightbox.style.display = "block";
    mapDisabled = true;
  } else {
    lightbox.style.display = "none";
    mapDisabled = false;
  }
}

function makeLatLonString(marker) {
    let latDir = 'N';
    if (marker.position.lat < 0) {
      latDir = 'S';
    }
    const roundedLat = Math.round(Math.abs(marker.position.lat) * 100) / 100;
    const latStr = `${roundedLat}${latDir}`;

    let lonDir = 'E';
    if (marker.position.lng < 0) {
      lonDir = 'W';
    }
    const roundedLng = Math.round(Math.abs(marker.position.lng) * 100) / 100;
    const lngStr = `${roundedLng}${lonDir}`;

    return `(${latStr}, ${lngStr})`;
}

// Entrypoint
function initMap() {
  const headerText = document.getElementById("header");
  headerText.onclick = toggleMap;
  const footerButton = document.getElementById("footer-info");
  footerButton.onclick = toggleMap;
  const closeButton = document.getElementById("close-button");
  closeButton.onclick = toggleMap;

  map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    center: {lat: 36.8278, lng: -92.7187},
    zoom: 5,
    options: {gestureHandling: 'greedy'},
    styles: mapStyle
  });

  const now = new Date();
  for (let i = 0; i < markers.length; i++) {
    const m = markers[i];
    const releaseDate = new Date(m.releaseDate);
    if (releaseDate > now) {
      continue;
    }

    const latLon = makeLatLonString(m);
    const infoWindow = new google.maps.InfoWindow({
      content: makeInfoWindowHtml(m.locationName, latLon, m.blurb, m.youtubeTitle, m.youtubeId)
    });

    const marker = new google.maps.Marker({
      position: m.position,
      icon: m.icon,
      map: map,
    });

    marker.addListener("click", () => {
      if (mapDisabled === false) {
        infoWindow.open({ anchor: marker, map,});
      }
    });

  }
  // display the lightbox on "load"
  lightbox.style.display = "block";
  mapDisabled = true;
}

window.initMap = initMap;
