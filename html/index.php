<!DOCTYPE html>
<html>

<head>
    <title>Study Mates</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/index-style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script src="js/jquery-min.js"></script>
    
    <!--<script type="text/javascript" src="js/checkLogin.js"></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDaa2tLApi588iV8xS40lj2NLH3IKEtkdk&callback=initMap" async defer></script>
    <!--<script type="text/javascript" src="js/changeLogin.js"></script>-->
    <link rel="icon" type="image/png" href="image/logo.png" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densitydpi=medium-dpi, user-scalable=0" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="js/googleMap.js"></script>
</head>

<body onLoad="initMap();">
<?php include "nav.inc"; ?>

    <div id="map" ></div>
    <div id="signout" class="overlay"></div>

 <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header  text-center">
			<button type="button" class="close" data-dismiss="modal">&times;</button>
			<h4 class="modal-title">Filter</h4>
        </div>
        <div class="modal-body">
			<form id="filter" method="post">
			<div class="row text-center ">
				<p> Courses</p>
					<div id="courses" class="col-sm-10 col-sm-offset-1">
				</div>
				<div class="col-sm-12">
					<div class="col-sm-4 col-xs-6 col-sm-offset-4 col-xs-offset-3">
						<button id="resetCourses" class="btn"> Reset</button>
					</div>
				</div>
			</div>
			<div class="row  text-center">
				<p> Topics</p>
				<div id="topics" class="col-sm-10 col-sm-offset-1">

				</div>
				<div class="col-sm-4 col-xs-6 col-sm-offset-2">
					<button id="clear" class="btn"> Clear</button>
				</div>
				<div class="col-sm-4 col-xs-6">
					<button class="btn">Add</button>
				</div>		
			</div>
			</div>
				
			
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<div class="col-xs-7 col-sm-7 col-sm-offset-1">
						<div class="form-group" >
							<label for="startTime">From </label>
							<input type="text" class="form-control"  id="startTime" placeholder="xx:xx">
						</div>  
					</div>


					<div class="col-xs-5 col-sm-4 ">
						<div class="form-group">
							<label for="am/pm"></label>
							<select class="form-control" id="am/pm" style="width: 80px; margin-top:5px; margin-left:-25px;">	
								<option>AM</option>
								<option>PM</option>
							</select>
						</div>  
					</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="col-xs-7 col-sm-7 col-sm-offset-1">
						<div class="form-group" >
							<label for="finishTime">To </label>
							<input type="text" class="form-control "  id="finishTime" placeholder="xx:xx">
						</div>  
					</div>

					<div class="col-xs-5 col-sm-4 ">
						<div class="form-group">
							<label for="am/pm"></label>
							<select class="form-control" id="am/pm" style="width: 80px; margin-top:5px; margin-left:-25px;">	
								<option>AM</option>
								<option>PM</option>
							</select>
						</div>  
					</div>
				</div>
				<div class="col-sm-11 col-sm-offset-1">
					<div class="col-sm-4 col-xs-6 col-sm-offset-4 col-xs-offset-3">
						<button id="set" class="btn"> set</button>
					</div>
				</div>		
			</form>
			</div>
      </div>    
    </div>
  </div>
<script>
var coursesBackup = ["Discrete Maths", "C++"];

var courses = ["Discrete Maths", "C++"];
var topics = ["graph theory", "pointers"];

function init(){
	var count = 0;
	$("#courses").empty();
	$("#topics").empty();
	for (var i=0; i < courses.length; i++){
		if (courses[i] != null){
			$("#courses").append('<div id="c'+count+'" class="c col-sm-4 col-sm-offset-1"><p>'+courses[i]+'<span class="glyphicon glyphicon-remove-sign red"></span></p></div>');
			count++;
		}
	}
	count = 0;
	for (var i=0; i < topics.length; i++){
		if (topics[i] != null){
		$("#topics").append('<div id="t'+count+'" class="t col-sm-4 col-sm-offset-1"><p>'+topics[i]+'<span class="glyphicon glyphicon-remove-sign red"></span></p></div>');
		}
	}
}

init();

$('#startTime').on("keyup", function(){
	for (var i=0; i < $('#startTime').val().length; i++){
		if ($('#startTime').val()[i] ==":"){
			var str = $('#startTime').val().substr(0,i) + $('#startTime').val().substr(i+1);
			$('#startTime').val(str);
		}
	}
	if ($('#startTime').val().length >4){
		var str = $('#startTime').val().substr(0,4);
		$('#startTime').val(str);
	}
	if ($('#startTime').val()[0] >1){
		var str = "1"+ $('#startTime').val().substr(1);
		$('#startTime').val(str);
	}
	
	if ($('#startTime').val()[1] >1){
		var str = $('#startTime').val().substr(0, 1) +"1"+ $('#startTime').val().substr(2);
		$('#startTime').val(str);
	}
	
	if ($('#startTime').val()[3] >5){
		var str = $('#startTime').val().substr(0, 2) +"5"+ $('#startTime').val().substr(3);
		$('#startTime').val(str);
	}
	
	
	if ($('#startTime').val().length ==4){
		var str = $('#startTime').val().substr(0, 2) + ":" + $('#startTime').val().substr(2);
		$('#startTime').val(str);
	}
});

$('#finishTime').on("keyup", function(){
	for (var i=0; i < $('#finishTime').val().length; i++){
		if ($('#finishTime').val()[i] ==":"){
			var str = $('#finishTime').val().substr(0,i) + $('#finishTime').val().substr(i+1);
			$('#finishTime').val(str);
		}
	}
	if ($('#finishTime').val().length >4){
		var str = $('#finishTime').val().substr(0,4);
		$('#finishTime').val(str);
	}
	if ($('#finishTime').val()[0] >1){
		var str = "1"+ $('#finishTime').val().substr(1);
		$('#finishTime').val(str);
	}
	
	if ($('#finishTime').val()[1] >1){
		var str = $('#finishTime').val().substr(0, 1) +"1"+ $('#finishTime').val().substr(2);
		$('#finishTime').val(str);
	}
	
	if ($('#finishTime').val()[3] >5){
		var str = $('#finishTime').val().substr(0, 2) +"5"+ $('#finishTime').val().substr(3);
		$('#finishTime').val(str);
	}
	
	
	if ($('#finishTime').val().length ==4){
		var str = $('#finishTime').val().substr(0, 2) + ":" + $('#finishTime').val().substr(2);
		$('#finishTime').val(str);
	}
});

$('#filter').on("click", ".c", function(){
	for (var i=0; i < courses.length; i++){
		var index = this.id.substr(1);
		if ($('.c').eq(index).text() ==  courses[i]) {
			courses[i] = null;
		}
	}
	init();
});

$('#filter').on("click", ".t", function(){
	for (var i=0; i < topics.length; i++){
		var index = this.id.substr(1);
		if ($('.t').eq(index).text() ==  topics[i]) {
			topics[i] = null;
		}
	}
	init();
});

$('#filter').on("click", '#resetCourses' ,function(){
	courses = coursesBackup.slice();
	init();
	return false;
});

$('#filter').on("click", '#clear' ,function(){
	topics = [];
	init();
	return false;
});

</script>
</body>


</html>
