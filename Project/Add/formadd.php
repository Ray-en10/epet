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
  $Owner = $data->owner;
  $Email = $data->email;
  $Phone = $data->phone;
  $Name = $data->name;
  $Type = $data->type;
  $Race = $data->race;
  $Age = $data->age;
  $Color = $data->color;
  $Description = $data->description;
  $Image = $data->image;

  // Insert the data into the database using a prepared statement
  $sql = "INSERT INTO animals (owner, email, phone, name, type, race, age, color, description, image) 
  VALUES ('$Owner', '$Email', '$Phone', '$Name', '$Type', '$Name', '$Race', '$Age', '$Color', '$Description' , '$Image')";
  
   if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Record created successfully']);
  } else {
    echo json_encode(['error' => 'Error: ' . $conn->error]);
  }

}

$conn->close();
