// "Problematic Globals"
let map;
let mapDisabled = false;

function makeInfoWindowHtml(locationName, blurb, youtubeTitle, youtubeId) {
  return `
    <div>
      <p class="location-name">${locationName}</p>
      <p class="location-blurb">${blurb}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}?" title="${youtubeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
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
    styles: mapStyle
  });

  for (let i = 0; i < markers.length; i++) {
    const m = markers[i];
    const infoWindow = new google.maps.InfoWindow({
      content: makeInfoWindowHtml(m.locationName, m.blurb, m.youtubeTitle, m.youtubeId)
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
