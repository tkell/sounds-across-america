
function makeInfoWindowHtml(locationName, blurb, youtubeTitle, youtubeId) {
  return `
    <div>
      <p class="location-name">${locationName}</p>
      <p class="location-blurb">${blurb}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}?fs=0&controls=0" title="${youtubeTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>
  `
}

let map;

function initMap() {

  let mapDisabled = false;
  const headerText = document.getElementById("header");
  headerText.onclick = function(){
    const lightbox = document.getElementById("lightbox");
    console.log(lightbox.style.display);
    if (lightbox.style.display === "none" || lightbox.style.display === "") {
      lightbox.style.display = "block";
      mapDisabled = true;
    } else {
      lightbox.style.display = "none";
      mapDisabled = false;
    }
  };




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
}

window.initMap = initMap;
