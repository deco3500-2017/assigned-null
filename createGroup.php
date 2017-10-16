<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>Study Mates</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/profile-style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script src="js/jquery-min.js"></script>
    <!--<script type="text/javascript" src="js/checkLogin.js"></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>-->
    <!--<script type="text/javascript" src="js/changeLogin.js"></script>-->
    <link rel="icon" type="image/png" href="image/logo.png" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densitydpi=medium-dpi, user-scalable=0" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
	<?php include "nav.inc" ?>
	<div class="container">
		<form id="createGroup" method="post">
			<div class="row">
				<div class="col-xs-12 text-center">
					<h2> Create Group</h2>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="form-group" >
						<label for="Name">Group name </label>
						<input type="text" class="form-control" name="Name" id="name">
					</div>  
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="form-group" >
						<label for="Courses">Course </label>
						<select type="text" class="form-control"  name="Courses" id="courses">
						
						</select>
					</div>  
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="form-group" >
						<label for="Topic">Topic (optional) </label>
						<input type="text" class="form-control"   name="Topic" id="topic">
					</div>  
					<div class="col-xs-12 col-sm-6">
					<div class="col-xs-7 col-sm-7 col-sm-offset-1">
						<div class="form-group" >
							<label for="StartTime">From </label>
							<input type="text" class="form-control"  name="StartTime" id="startTime"  placeholder="xx:xx">
						</div>  
					</div>

					<div class="col-xs-5 col-sm-4 ">
						<div class="form-group">
							<label for="AM/PM"></label>
								<select class="form-control" name="AM/PM"id="am/pm" style="width: 80px; margin-top:5px; margin-left:-25px;">	
									<option>AM</option>
									<option>PM</option>
								</select>
						</div>  
					</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="col-xs-7 col-sm-7 col-sm-offset-1">
						<div class="form-group" >
							<label for="FinishTime">To </label>
							<input type="text" class="form-control" name="FinishTime" id="finishTime" placeholder="xx:xx">
						</div>  
					</div>

					<div class="col-xs-5 col-sm-4 ">
						<div class="form-group">
							<label for="AM/PM2"></label>
								<select class="form-control" name="AM/PM2" id="am/pm2" style="width: 80px; margin-top:5px; margin-left:-25px;">	
									<option>AM</option>
									<option>PM</option>
								</select>
						</div>  
					</div>
				</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="form-group" >
						<label for="Desc">Description </label>
						<textarea rows ="4" class="form-control"  name="Desc" id="desc"></textarea>
					</div>  
				</div>
				
				<div class="col-xs-12 col-sm-6">
					<div class="form-group" >
						<label for="name">Location</label>
						<select type="text" class="form-control"  name "Location" id="location">
						
						</select>
					</div>  
				</div>		
				<div class="col-xs-12 col-sm-6 ">
					<div class="form-group" >
						<label for="submit">Room Number</label>
						<input type="text" class="form-control"  id="room">
					</div>  
				</div>
				<div class="col-xs-12 col-sm-12">
					<div class="col-xs-4 col-sm-1 col-sm-offset-5 col-xs-offset-2">
						<div class="form-group" >
							<button type="text" class="btn "  id="clear">Clear</button>
						</div>  
					</div>
					<div class="col-xs-4 col-sm-5">
						<div class="form-group" >
							<button type="text" class="btn"  id="submit">Create</button>
						</div>  
					</div>
				</div>
			</div>
			
		</form>
	</div>
	<script>
var coursesBackup = ["Discrete Maths", "C++"];

var courses = ["Discrete Maths", "C++"];

var loc =  ["Forgan Smith (1)", "Axon Building (47)", "General Purpose South(78)"];

for (var i = 0; i< loc.length; i++){
	var html = "<option>" + loc[i]+ "</option>";
	$("#location").append(html);
}

function init(){
	var count = 0;
	$("#courses").empty();
	for (var i=0; i < courses.length; i++){
		if (courses[i] != null){
			$("#courses").append('<option id="c'+count+'" class="c col-sm-4 col-sm-offset-1"><p>'+courses[i]+'</p></option>');
			count++;
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

$('#clear').on("click", function(){
	startTime.val("");
	finishTime.val("");
});
</script>
</body>
</html>