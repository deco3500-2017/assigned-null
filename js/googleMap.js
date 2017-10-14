
//I have used this code with another course
var autoComplete;
var locationJson;

function getAllLocations(map){
	$.get('https://study-mates.uqcloud.net/backend/locations.php', function (response) {
        var json = response;
        
   		for (var i = json.length - 1; i >= 0; i--) {
   			var id = json[i].meetingID;
   			var lat = parseFloat(json[i].meetLat);
   			var long = parseFloat(json[i].meetLong);
   			drawMarkersOnMap(id, lat, long, map);
   			
   		}
   	});
}

function make_random_people(num_people, map){
	var greenmarker = {
			url: "../img/green_marker.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(0, 32)
	};
	var yellowmarker = {
			url: "../img/yellow_marker.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(0, 32)
	};
	var redmarker = {
			url: "../img/red_marker.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(0, 32)
	};
	var markers = [greenmarker, yellowmarker, redmarker];
	var subjects = ['CSSE2310', 'DECO3801', 'CSSE1001', 'INFS1200', 'DECO3500', 'ENGG1100', 'MATH2000'];
	for(var i = 0; i<25;i++){
		var num_of_people = ((Math.floor((Math.random() * 20))).toString());
        

        
		var latitude = parseFloat((Math.random() * (-27.494230 - (-27.501235)) + (-27.501235)).toFixed(6));
		var longitude = parseFloat((Math.random() * (153.016272 - 153.010135) + 153.010135).toFixed(6));
		var chooseMarker = Math.floor((Math.random() * 3));
		var startTime = Math.floor((Math.random() * 9)) + 8;
		var endTime = startTime + (Math.floor((Math.random() * 2))) + 1;
		var chooseSubject = Math.floor((Math.random() * 7));
		
		var myLatLng = {lat: latitude, lng: longitude};
		var marker = new google.maps.Marker({
          	position: myLatLng,
          	map: map,
          	id : latitude+',' +longitude,
          	icon: markers[chooseMarker],
          	title: latitude+','+longitude
        });
        marker.content = '<div id="content">'+
        	'<p><b>Meeting:</b> ' + subjects[chooseSubject] + '</p>' +
            '<p><b>Meeting ID:</b> ' + i + '</p>' +
            '<p><b>Start Time:</b> ' + startTime + ':00' + '</p>' +
            '<p><b>End Time:</b> ' + endTime + ':00' + '</p>' +
            '<p><b>Group Size:</b> ' + num_of_people + '</p>' +
            '</div>';
			var infowindow = new google.maps.InfoWindow();
		marker.addListener('click', function() {
          infowindow.setContent(this.content);
    		infowindow.open(map,this);
        });
	}
}


function drawMarkersOnMap(id, latitude, longitude, map){
        console.log(latitude, longitude);
        

		var myLatLng = {lat: latitude, lng: longitude};
		var marker = new google.maps.Marker({
          	position: myLatLng,
          	map: map,
          	id : id,
          	title: latitude+','+longitude
        });
        
		console.log(myLatLng);
}

/*Uses HTML5 geoLocation to get the current location of the user.*/
function getCurrentLocation() {
	if (!navigator.geolocation) {
		alert("GeoLocation is not supported by browser.");
		return;
	}
	return navigator.geolocation.getCurrentPosition(coordinates,
		displayErrorMessage);
}


function initMap() {
	//create a map object and specify the DOM element for display

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -27.4969306, lng: 153.0120301},
		zoom: 16
	});
	
	getAllLocations(map);
	make_random_people(30, map);
}
