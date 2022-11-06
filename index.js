let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 36.8278, lng: -92.7187},
    zoom: 5,
  });

  for (let i = 0; i < markers.length; i++) {
    const m = markers[i];
    const infoWindow = new google.maps.InfoWindow({
      content: m.html
    });

    const marker = new google.maps.Marker({
      position: m.position,
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
