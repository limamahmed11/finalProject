<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// header("Access-Control-Allow-Origin: http://localhost:4200");

	// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    // Allow specific HTTP headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // Allow cookies to be sent or received from the client side
header("Access-Control-Allow-Credentials: true");

	// Set the maximum time, in seconds, that the preflight request can be cached
header("Access-Control-Max-Age: 86400");

$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'ecomm';

$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>