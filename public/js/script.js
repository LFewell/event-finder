

const apiKey = "MQQSELn5pJ4IejXfT0t5DgufSAGg3gZt"
const tmUrl = "https://app.ticketmaster.com/discovery/v2/";
var btn = $("#btn-search")
var events = $("#events")


btn.on("click", function() {
  var userInput = document.getElementById("input-search").value
  getEvents();
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
    location.innerHTML = "<span class='pale'>Latitude: " + position.coords.latitude + "</span>" +
    "<br><span class='pale'>Longitude: " + position.coords.longitude + "</span>"; 
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

    $("#events").append("<div class='card' style='height:auto'><img class='card-img-top' src="+json._embedded.events[i].images[0].url+" atl='event Image cap' /><div class='card-body d-flex flex-column'><p class='card-title'>"+json._embedded.events[i].name+"</p><p class='card-text'>"+json._embedded.events[i].promoter.description+"</p><a href='#' class='align-self-end btn btn-lg btn-block btn-primary' style='margin-top: auto'>Add to Favorites</a></div></div>");
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
