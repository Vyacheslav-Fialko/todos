<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$project = user_enter($_POST['name']);
$user_id = $_SESSION['user']['user_id'];
$error_fields = [];

if (empty($project)) {
    $error_fields[] = 'addProject';
}
if (empty($error_fields)) {
    $sql = "INSERT INTO `projects`(`name`, `user_id`) VALUES ('$project','$user_id')";
    mysqli_query($connect, $sql);
    $response = [
        'status' => true
    ];
} else {
    $response = [
        "status" => false,
        "type" => true,
        "message" => 'empty fields',
        "fields" => $error_fields
    ];
}
echo json_encode($response);
