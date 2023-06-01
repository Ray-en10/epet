<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$db = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

$query1 = "SELECT name, password FROM user WHERE name = '{$data['name']}'";
$result1 = mysqli_query($db, $query1);
$user1 = mysqli_fetch_assoc($result1);

$query2 = "SELECT name, password FROM user_add WHERE name = '{$data['name']}'";
$result2 = mysqli_query($db, $query2);
$user2 = mysqli_fetch_assoc($result2);

$response = [];

if ($user1) {
  $response['userExists'] = true;
  $response['passwordMatch'] = $data['password'] === $user1['password'];
} else if ($user2) {
  $response['userExists'] = true;
  $response['passwordMatch'] = $data['password'] === $user2['password'];
} else {
  $response['userExists'] = false;
}

echo json_encode($response);

mysqli_close($db);
?>
