require("dotenv").config();

const apiKey = process.env.TM_APIKEY;
const tmUrl = "https://app.ticketmaster.com/discovery/v2/";


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        var location = document.getElementById("location");
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var location = document.getElementById("location");
    location.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    var latlon = position.coords.latitude + "," + position.coords.longitude;


    $.ajax({
      type:"GET",
      url: tmUrl + "events.json?apikey=" + apiKey + "&latlong=" +latlon,
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
                  var events = document.getElementById("events");
                  events.innerHTML = json.page.totalElements + " events found.";
                  showEvents(json);
                  initMap(position, json);
               },
      error: function(xhr, status, err) {
                  console.log(err);
               }
    });

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            location.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            location.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            location.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            location.innerHTML = "An unknown error occurred."
            break;
    }
}


function showEvents(json) {
  for(var i=0; i<json.page.size; i++) {
    $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
  }
}


function initMap(position, json) {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: 10
  });
  for(var i=0; i<json.page.size; i++) {
    addMarker(map, json._embedded.events[i]);
  }
}

function addMarker(map, event) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
    map: map
  });
  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
  console.log(marker);
}




getLocation();
