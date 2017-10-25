
//I have used this code with another course
var autoComplete;
var locationJson;

// function getUQ(){
// 	$.get('https://study-mates.uqcloud.net/backend/get_uq.php', function (response) {
// 		var json = response;
// 		console.log(json);
// 		$('#signin').text(json.name);
// 		for(var i = 0; i < json.groups.length; i++) {
// 			if(json.groups[i].search("2017-2") != -1) {
// 				var temp = json.groups[i];
// 				var temp1 = temp.replace("labs:", " ");
// 				var temp2 = temp1.replace("-2017-2", " ");
// 				$("#nav-bar").append('<li><a href="">'+temp2+'</a></li>');
// 				console.log(json.groups[i]);
// 			}
// 		}
// 		return json;
// });
// }

function compareTime(){
	$.get('https://study-mates.uqcloud.net/backend/get_time.php', function (response) {
		var json = response;
		console.log(json);
		return json;
});
}

function getAllLocations(map){
	$.get('https://study-mates.uqcloud.net/backend/locations.php', function (response) {
        var json = response;
        $.get('https://study-mates.uqcloud.net/backend/get_time.php', function (time) {
        	console.log(time);
   		for (var i = json.length - 1; i >= 0; i--) {
   			var id = json[i].meetingID;
   			var group = json[i].groupID;
   			var lat = parseFloat(json[i].meetLat);
   			var long = parseFloat(json[i].meetLong);
   			var start = json[i].startTime;
   			var end = json[i].endTime;
   			var buildingNo = json[i].buildingNo;
   			var roomNo = json[i].roomNo;
   			var groupSize = json[i].groupSize;
   			var descr = json[i].meetingDescription;
   			console.log(time, start, end);
   			var current = -1;
   			if(time < start) {
   				current = 0;
   			} else if (time > end){
   				current = 1;
   			} else {
   				current = 2;
   			}
   			drawMarkersOnMap(id, lat, long, map, group, start, end, buildingNo, roomNo, groupSize, current, descr);	
   		}
   	});
    });
}

function make_random_people(num_people, map){
	var greenmarker = {
			url: "../img/green_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var yellowmarker = {
			url: "../img/yellow_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var redmarker = {
			url: "../img/red_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var markers = [greenmarker, redmarker, yellowmarker];
	var subjects = ['CSSE2310', 'DECO3801', 'CSSE1001', 'INFS1200', 'DECO3500', 'ENGG1100', 'MATH2000'];
	for(var i = 0; i<125;i++){
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
        var plus = '<a href="meetings.html"><img src="img/plus.png" height="25" width="25"/></a>';
        marker.content = '<div id="content">'+
        	'<p><b>Group Name:</b> ' + 'Group Name' + '</p>'  +
        	'<p><b>Meeting:</b> ' + subjects[chooseSubject] + '</p>' +
        	'<p><b>Description:</b> ' + 'Basic Description Here' + '</p>' +
            '<p><b>Meeting ID:</b> ' + i + '</p>' +
            '<p><b>Start Time:</b> ' + startTime + ':00' + '</p>' +
            '<p><b>End Time:</b> ' + endTime + ':00' + '</p>' +
            '<p><b>Building No:</b> ' + '70' + '</p>' +
            '<p><b>Room No:</b> ' + '101' + '</p>' +
            '<pre><b>Group Size:</b> ' + num_of_people +'      ' + plus +'</pre>' +
            '</div>';
		var infowindow = new google.maps.InfoWindow();
		marker.addListener('click', function() {
          infowindow.setContent(this.content);
    		infowindow.open(map,this);
    		displayRoute(latitude ,longitude, map);
        });
        google.maps.event.addListener(map, "click", function(event){
        	infowindow.close();
        });
	}
}

//idea from stack overflow
function displayRoute(latitude, longitude, map) {
	
    var start = new google.maps.LatLng(-27.499524, 153.015146);
    var end = new google.maps.LatLng(latitude, longitude);

    var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.TravelMode.WALKING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
        google.maps.event.addListener(map, "click", function(event){
        	directionsDisplay.setMap();
    		});
    });
    
}

function drawMarkersOnMap(id, latitude, longitude, map, group, startTime, endTime, buildingNo, roomNo, num_of_people, chooseMarker, descr){

		//var chooseMarker = Math.floor((Math.random() * 3));
		//var chooseSubject = Math.floor((Math.random() * 7));
		//var button = '<button type="button" onclick="displayRoute('+latitude+','+ longitude+','+ map + ')"> Get Directions </button>';
		//console.log(button);
		var greenmarker = {
			url: "../img/green_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var yellowmarker = {
			url: "../img/yellow_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var redmarker = {
			url: "../img/red_bubble.png",
			scaledSize: new google.maps.Size(20, 20),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(10, 10)
		};
		var markers = [greenmarker, redmarker, yellowmarker];
		var myLatLng = {lat: latitude, lng: longitude};
		var marker = new google.maps.Marker({
          	position: myLatLng,
          	map: map,
          	id : id,
          	icon: markers[chooseMarker],
          	title: latitude+','+longitude
        });
        var plus = '<a href="group.html">' + '<img src="img/plus.png" height="25" width="25"/>' +'</a>';
        marker.content = '<div id="content">'+
        	'<p><b>Group Name:</b> ' + 'Group Name' + '</p>'  +
        	'<p><b>Meeting:</b> ' + 'DECO3500' + '</p>' +
        	'<p><b>Description:</b> ' + descr + '</p>' +
            '<p><b>Meeting ID:</b> ' + id + '</p>' +
            '<p><b>Start Time:</b> ' + startTime + ':00' + '</p>' +
            '<p><b>End Time:</b> ' + endTime + ':00' + '</p>' +
            '<p><b>Building No:</b> ' + buildingNo + '</p>' +
            '<p><b>Room No:</b> ' + roomNo + '</p>' +
            '<pre><b>Group Size:</b> ' + num_of_people +'      ' + plus +'</pre>' + 
            '</div>';// + button;
			var infowindow = new google.maps.InfoWindow();
		marker.addListener('click', function() {
          infowindow.setContent(this.content);
    		infowindow.open(map,this);
    		displayRoute(latitude ,longitude, map);
        });
        google.maps.event.addListener(map, "click", function(event){
        	infowindow.close();
        });
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

function userLocation(map){
	var personmarker = {
			url: "../img/personmarker.png",
			scaledSize: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(25, 25)
	};
	//var latitude = parseFloat("-27.4994803").toFixed(7);
	//var longitude = parseFloat("153.0131042").toFixed(7);
	var myLatLng = {lat: -27.499524, lng: 153.015146};
		var marker = new google.maps.Marker({
          	position: myLatLng,
          	map: map,
          	id : "you",
          	icon: personmarker,
          	title: "you"
        });
}

function initMap() {
	//create a map object and specify the DOM element for display

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -27.499024, lng: 153.015146},
		zoom: 17
	});
	
	getAllLocations(map);
	//make_random_people(30, map);
	userLocation(map);
	//getUQ();
}

