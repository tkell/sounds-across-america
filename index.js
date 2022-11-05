let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.397, lng: 150.644 },
    zoom: 6,
  });
}

window.initMap = initMap;
