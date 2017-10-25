<?php


session_start();
require_once "uq/auth.php";
auth_require();
header('Content-Type: application/json');
echo json_encode(auth_get_payload());