<?php


session_start();
require_once "admin.php";

header('Content-Type: application/json');

	// date_default_timezone_set('Australia/Brisbane');
 //    $date_comp = date('Y/m/d H:i:s');
 //    //$date_comp = new DateTime(date);

    $db = connect_database();
    $statment = $db->prepare("SELECT * FROM groupMeeting");
    $statment->execute();
    $result= $statment->fetchAll(PDO::FETCH_ASSOC);
    // for($i=0; $i < 2; $i++) {
    // 	$date_one = new DateTime($result[i]['startTime']);
    // 	$date_two = new DateTime($result[i]['endTime']);
    // 	if($date_comp < $date_one){
    // 		$result[i]['takes_place'] = "0";
    // 	} else if(($date_comp > $date_one) && ($date_comp < $date_two)) {
    // 		$result[i]['takes_place'] = "1";
    // 	} else {
    // 		$result[i]['takes_place'] = "2";
    // 	}
    // }
    echo json_encode($result);
