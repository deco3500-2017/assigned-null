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
		<div class="row text-center justify-content-sm-center">
		<div class="col text-center" >
			<div id="info"> 
				<h2>Daniel Burke</h2>
				<p>Masters of Information Technology</p>
			</div>
		</div>
		</div>
		<div class="row text-center justify-content-sm-center">
		<div class="col text-center" >
			<div id="profilePic"> 
				<img src= "img/profilePic.jpg">
				<button class="btn"> Change </button>
			</div>
		</div>
		</div>
		<div class="row text-center justify-content-sm-center">
			<div class="col"  id ="courses">
				<h4>Active courses</h4>
				<ul>
				<li>DECO 2310</li>
				<li>CSSE 1230</li>
				<li>CSSE 1000</li>
				<li>CSSE 1500</li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>