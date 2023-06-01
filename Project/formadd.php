<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if the form data was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"));
  $fullname = $data->fullname;
  $email = $data->email;
  $message = $data->message;

  // Insert the data into the database
  $sql = "INSERT INTO comments (fullname, email, message)
  VALUES ('$fullname', '$email', '$message')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Record created successfully']);
  } else {
    echo json_encode(['message' => 'Error: ' . $conn->error]);
  }
}

$conn->close();
?>
