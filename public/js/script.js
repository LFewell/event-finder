

const apiKey = "MQQSELn5pJ4IejXfT0t5DgufSAGg3gZt"
const tmUrl = "https://app.ticketmaster.com/discovery/v2/";
var btn = $("#btn-search")
var events = $("#events")
var userInput = document.getElementById("input-search").value;
var myLatlng = {lat: 37.7751, lng: -122.4194};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatlng
  });


btn.on("click", function() {
  var userInput = document.getElementById("input-search").value
  getEvents();
  getNewLocation();
  function getEvents() {
    fetch(tmUrl + "events.json?" + "city=" + userInput + "&apikey=" + apiKey )
    .then((response) => response.json())
    .then(function(json) {
      console.log(json)
      showSearch(json);
      // initMapSearch(json);
      function showSearch(json) {
        document.getElementById("events").innerHTML = " ";
        for (var i=0; i<5; i++) {
          $("#events").append("<div class='card' style='width: 18rem'><img class='card-img-top' src="+json._embedded.events[i].images[0].url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+json._embedded.events[i].name+"</h5><p class='card-text'>"+json._embedded.events[i].promoter.description+"</p><a href='#' class='btn btn-primary'>Add to Favorites</a></div></div></li>"), events.childNodes;
        }
  
      }
    //   function initMapSearch(json) {
    //   var mapDiv = document.getElementById('map');
    //   var map = new google.maps.Map(mapDiv, {
    //     center: {lat: json._embedded.events._embedded.venues.location.latitude, lng: json._embedded.events._embedded.venues.location.longitude},
    //     zoom: 10
    //   });
    //   for(var i=0; i<5; i++) {
    //     addMarker(map, json._embedded.events[i]);
    //   }
    // }
    })

  }

})


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

    // // ORIGINAL CODE
    // location.innerHTML = "<span class='pale'>Latitude: " + position.coords.latitude + "</span>" +
    // "<br><span class='pale'>Longitude: " + position.coords.longitude + "</span>"; 
    // location.innerHTML = "<section class='row' style='width:90%'><div class='col-1'></div><div class='col-5 pale'>Latitude:  " + position.coords.latitude + "</div><div class='col-5 pale'>Longitude:  " + position.coords.longitude + " </div></section>" ;
    var latlon = position.coords.latitude + "," + position.coords.longitude;


    $.ajax({
      type:"GET",
      url: tmUrl + "events.json?apikey=" + apiKey + "&latlong=" +latlon,
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
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
  for(var i=0; i< 5; i++) {
    // This is where the cards are showing up. The commented-out line below is the original, working code
    // $("#events").append("<div class='d-flex flex-row'><div class='row-cols-5 card-group'><div class='card' style='width: 18rem'><img class='card-img-top' src="+json._embedded.events[i].images[0].url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+json._embedded.events[i].name+"</h5><p class='card-text'>"+json._embedded.events[i].promoter.description+"</p><a href='#' class='btn btn-primary'>Add to Favorites</a></div></div>");

    $("#events").append("<div class='card' style='height:auto'><img class='card-img-top' src="+json._embedded.events[i].images[0].url+" atl='event Image cap' /><div class='card-body d-flex flex-column'><p class='card-title'>"+json._embedded.events[i].name+"</p><p class='card-text'>"+json._embedded.events[i].promoter.description+"</p><p class='card-text'>"+json._embedded.events[i].dates.start.localDate+"</p><a href="+json._embedded.events[i].url+" class='align-self-end btn btn-lg btn-block btn-primary' style='margin-top: auto'>Buy Tickets!</a></div></div>");
  }
}




function getNewLocation() {
  //store city entered into a variable, put it in quotes, and add that to the geocode URL
  var city = document.getElementById("input-search").value;
  var cityInQuotes = "\"" + city + "\""
  var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+cityInQuotes+"&key=AIzaSyBGtuxJJ_8azkc7EEPAdlFLVd-eXk0mHzQ";
  //return JSON and
  $.get(geocodeURL,printCoordinates)
}

function printCoordinates(results) {
  if (results.status === "ZERO_RESULTS") {
    alert("Location not found. Try searching for a city or more specific location.")
} else {
  userSelectLat = results.results[0].geometry.location.lat;
  userSelectLng = results.results[0].geometry.location.lng;
  console.log('arrayresults = '+userSelectLat,userSelectLng);
  }
  //re-center map based on new location
  var relocate = new google.maps.LatLng(userSelectLat, userSelectLng);
  map.setCenter(relocate);
}





// trying to figure out what constants to add from the show events function
const addFavEvent = async (event) => {
    event.preventDefault();

    // values to input into the table from document query selector
    await fetch(`/api/event`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

// document
//     .querySelector('#events')
//     .addEventListener('submit', addFavEvent);


function initMap(position, json) {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
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
