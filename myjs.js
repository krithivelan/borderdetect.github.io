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
}

function handleError(error){
	document.querySelector("#error").innerHTML = error.message;
}
