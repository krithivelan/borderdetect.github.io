var geoID=null;
function startWatch(){
	
	var positionOptions = {};
	positionOptions.enableHighAccuracy = false;
	positionOptions.timeout = Infinity;
	positionOptions.maximumAge = 0;

	geoID = window.navigator.geolocation.watchPosition(handleData,handleError, positionOptions);
}

function stopWatch(){
	window.navigator.geolocation.clearWatch(geoID);
}

function handleData(geoData){

	//document.querySelector("#error").innerHTML = "yey !"
	//console.log(geoData);
	document.querySelector("#timestamp").value = geoData.timestamp;
	document.querySelector("#accuracy").value = geoData.coords.accuracy;
	document.querySelector("#altitude").value = geoData.coords.altitude;
	document.querySelector("#altitudeAccuracy").value = geoData.coords.altitudeAccuracy;
	document.querySelector("#heading").value = geoData.coords.heading;
	document.querySelector("#latitude").value = geoData.coords.latitude;
	document.querySelector("#longitude").value = geoData.coords.longitude;
	document.querySelector("#speed").value = geoData.coords.speed;
	
	var lat = geoData.coords.latitude;
	var lon = geoData.coords.longitude;
	
	var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(10.92, 76.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(geoData.coords.latitude, geoData.coords.longitude),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker) {
        return function() {
          infowindow.setContent("<h1>"+lat+"<br>"+lon+"</h1>");
          infowindow.open(map, marker);
        }
      })(marker));

}

function handleError(error){
	document.querySelector("#error").innerHTML = error.message;
}
