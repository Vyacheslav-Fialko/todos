<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$task = user_enter($_POST['task-name']);
$project_id = user_enter($_POST['id']);
$error_fields = [];

if (empty($task)) {
    $error_fields[] = 'add-task__input-'. $project_id;
}
if (empty($error_fields)) {
    $sql = "INSERT INTO `tasks`(`name`, `status`, `project_id`) VALUES ('$task',false,'$project_id')";
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
