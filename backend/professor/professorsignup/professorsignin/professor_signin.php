<?php
session_start();

$conn = new mysqli("localhost", "root", "", "lms_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND role='professor'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['role'] = $user['role'];
        echo "Welcome Professor " . $user['first_name'] . "! You are signed in.";
        
    } else {
        echo "Invalid password!";
    }
} else {
    echo "No professor found with that email!";
}

$conn->close();
?>
