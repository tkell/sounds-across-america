
function makeInfoWindowHtml(locationName, blurb, youtubeTitle, youtubeId) {
  return `
    <div>
      <p>${locationName}</p>
      <p>${blurb}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" title="${youtubeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
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
      content: makeInfoWindowHtml(m.locationName, m.blurb, m.youtubeTitle, m.youtubeId)
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
