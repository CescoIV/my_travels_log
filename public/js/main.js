var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2
  });
}

$(document).ready(function() {
  console.log('application is running');
  initMap();
});