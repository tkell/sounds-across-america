function makeInfoWindowHtml(locationName, quote, song, videoUrl) {
  return `
    <div>
      <p>${locationName}</p>
      <p>${quote}</p>
      <p><a href="${videoUrl}" target="_blank">${song}</p>
    </div>
  `
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    center: {lat: 36.8278, lng: -92.7187},
    zoom: 5,
  });

  for (let i = 0; i < markers.length; i++) {
    const m = markers[i];
    const infoWindow = new google.maps.InfoWindow({
      content: makeInfoWindowHtml(m.locationName, m.song, m.quote, m.videoUrl)
    });

    const marker = new google.maps.Marker({
      position: m.position,
      icon: m.icon,
      map: map,
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  }
}

window.initMap = initMap;
