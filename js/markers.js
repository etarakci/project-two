// Creating map object
var map = L.map("map", {
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
}).addTo(map);

// Grab the data with d3
d3.json("json/police2.json", function(response) {
  // Create a new marker cluster group

  var markers = L.markerClusterGroup();

  for (var i = 0; i < response.length; i++) {

    var zipcode = response[i].zipcode;

    if (ziptable[zipcode]) {
      coordinates = ziptable[zipcode]  // table of zip codes to coordinates is in ziptable.js

      // pop-up text: victim's name, linking to URL of news article if available, and photo if available
      if (response[i].link_to_news_article_or_photo) {
        popupText = "<a target='_blank' href="+response[i].link_to_news_article_or_photo+">"+response[i].victim_name+"</a>"}
        else {
          popupText = response[i].victim_name
        }
      if (response[i].url_image_of_victim) {
        popupText += "<br><img src='"+response[i].url_image_of_victim+"' width='100' onerror='this.style.display=\"none\"'/>"
      }
      popupText += "<br>"+response[i].description_of_the_circumstances;

      markers.addLayer(L.marker(coordinates).bindPopup(popupText));
}}

  // Add our marker cluster layer to the map
  map.addLayer(markers);

  var markersSearch = L.markerClusterGroup();
  map.addLayer(markersSearch);


var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", search);
form.on("submit",search);

function search() {

  markers.clearLayers();    // clear existing markers

  d3.event.preventDefault();
  var inputElement = d3.select("#form-input");
  var term = inputElement.property("value");

  for (var i = 0; i < response.length; i++) {

    text = Object.values(response[i]).toString().toLowerCase();
    if(text.search(term.toLowerCase())===-1) {continue;}

    var zipcode = response[i].zipcode;
    if (ziptable[zipcode]) {
      coordinates = ziptable[zipcode]
      if (response[i].link_to_news_article_or_photo) {
        popupText = "<a target='_blank' href="+response[i].link_to_news_article_or_photo+">"+response[i].victim_name+"</a>"}
        else { popupText = response[i].victim_name }
      if (response[i].url_image_of_victim) {
        popupText += "<br><img src='"+response[i].url_image_of_victim+"' width='100' onerror='this.style.display=\"none\"'/>"
      }
      popupText += "<br>"+response[i].description_of_the_circumstances;

      markers.addLayer(L.marker(coordinates).bindPopup(popupText));
}}

  map.addLayer(markers);
}   // end of search function


});

// to do: change mapping from zip codes to address-based 
