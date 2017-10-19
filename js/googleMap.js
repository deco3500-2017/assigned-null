
//I have used this code with another course
var autoComplete;
var locationJson;
var map;
var coords = {lat: 41.85, lng: -87.65};

/**
       * The CenterControl adds a filter as a model
       * @constructor
       */
      function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to access filters';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Filter';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: Allow filter
        controlUI.addEventListener('click', function() {
         $('#myModal').modal('show');
		 
        });

      }

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
        var plus = '<input type="image" onClick="groupInfo()" src="img/plus.png" height="25" width="25"/>';
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
        });
	}
}

function groupInfo(){
window.location.href = "groupProfile.html";
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
	
	// Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);
		
        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
		
		var container = document.createElement('div');
		var div = document.createElement('div');
		var div2 = document.createElement('div');
		var legend = document.createElement('div')
		legend.index = 2;
		legend.id="legend";
		$('body').append(legend);
		container.className="legendContainer";
		legend.appendChild(container);
		
		div.className = "legendItem";
		div2.className = "legendItem";
		div2.innerHTML = '<img src="img/yellow_marker.png"><p>Upcoming</p> ';
		container.appendChild(div2);
		div.innerHTML = '<img src="img/green_marker.png"><p>Current</p> ';
		container.appendChild(div);
		map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById('legend'));
		
	getAllLocations(map);
	make_random_people(30, map);
}
