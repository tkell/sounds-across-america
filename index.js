let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 36.8278, lng: -92.7187},
    zoom: 5,
  });

  const marker = new google.maps.Marker({
    position: {lat: 37.344, lng: -100.031},
    map: map,
  });
}

window.initMap = initMap;
