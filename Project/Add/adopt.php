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
  echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
  exit;
}

// Check if the form data was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"));
  $Name = $data->name;
  $Email = $data->email;
  $Phone = $data->phone;
  $Text = $data->text;
  // Insert the data into the database using a prepared statement
  $sql = "INSERT INTO formadopt (yourname, email, phone, text) 
  VALUES ('$Name', '$Email', '$Phone', '$Text')";
  
   if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Record created successfully']);
  } else {
    echo json_encode(['error' => 'Error: ' . $conn->error]);
  }

}

$conn->close();
