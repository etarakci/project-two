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
d3.json("static/data/json/police2.json", function(response) {
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
var dropdown = document.multiselect('#dropdown');
button.on("click", search);
form.on("submit",search);


function search() {

  markers.clearLayers();    // clear existing markers
  d3.event.preventDefault();

  var desc_sought = d3.select("#desc").property("value").toLowerCase();
  var name_sought = d3.select("#name").property("value").toLowerCase();
  var age_from = d3.select("#age_from").property("value")
  var age_to = d3.select("#age_to").property("value")
  if (age_to == "") {age_to = 120};   // if no max age specified, set at highest plausible value

  var races_selected = [...document.multiselect('#dropdown')._item];
  var races_sought = [];  // list of races to search for
  if (races_selected[0].selected) {races_sought.push("asian")};
  if (races_selected[1].selected) {races_sought.push("black")};
  if (races_selected[2].selected) {races_sought.push("hispanic")};
  if (races_selected[3].selected) {races_sought.push("native american")};
  if (races_selected[4].selected) {races_sought.push("pacific islander")};
  if (races_selected[5].selected) {races_sought.push("white")};
  if (races_selected[6].selected) {races_sought.push("unknown race")};


  for (var i = 0; i < response.length; i++) {

    desc = response[i].description_of_the_circumstances;
    if (desc==null) {desc = ""};
    if (desc.toLowerCase().search(desc_sought)===-1) {continue;} // skip entries that don't match description

    name = response[i].victim_name;
    if (name==null) {name = ""};
    if (name.toLowerCase().search(name_sought)===-1) {continue;} // skip entries that don't match name

    age = response[i].victim_age;
    if ((age < age_from || age > age_to) ||   // skip entries that don't match age span
      (age == null && (d3.select("#age_from").property("value") != "" ||  // skip entries whose age is null (unknown),
      d3.select("#age_to").property("value") != "")))                     // if user has entered an age from or to
      {continue;}

    race = response[i].victim_race.toLowerCase();
    if (races_sought.length != 0 && !races_sought.includes(race)) {continue;}

      // populate markers using same code as above, but we only get here if entry matches search terms
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

// TO DO
// change mapping from zip codes to address-based
// checkbox search by race: Asian, Black, Hispanic, Native American, Pacific Islander, White, Unknown Race
// reset button for search
