// Creating map object
var myMap = L.map("map", {
  center: [40.7, -97],
  zoom: 4
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Grab the data with d3
d3.json("json/police2.json", function(response) {
  // Create a new marker cluster group

  var markers = L.markerClusterGroup();

  for (var i = 0; i < response.length; i++) {

    var zipcode = response[i].zipcode;

    if (ziptable[zipcode]) {
      coordinates = ziptable[zipcode]
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker(coordinates));
}
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
