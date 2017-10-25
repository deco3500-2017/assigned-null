<?php


session_start();
require_once "admin.php";

header('Content-Type: application/json');


    $db = connect_database();
    date_default_timezone_set('Australia/Brisbane');
    $date = date('Y-m-d H:i:s');
echo json_encode($date);