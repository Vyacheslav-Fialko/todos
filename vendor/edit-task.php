<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$id = $_POST['id'];
$error_fields = [];

if(isset($_POST['task-name'])){
    $task = $_POST['task-name'];
    $field = 'name';
if (empty($task)) {
    $error_fields[] = 'editTasktModal';
}
}

if (isset($_POST['status'])) {
    $task = $_POST['status'] == 'true' ? 1 : 0;
    $field = 'status';
}

if (empty($id)) {
    $error_fields[] = 'editTaskModalw';
}


$response;
if (empty($error_fields)) {
    $sql = "UPDATE `tasks` SET " . $field . " = '$task' WHERE `id`='$id'";
    $res = mysqli_query($connect, $sql);
    if ($res) {
        $response = [
            "status" => true
        ];
    }
} else {
    $response = [
        "status" => false,
        "type" => true,
        "message" => 'empty fields',
        "fields" => $error_fields
    ];
}

echo json_encode($response);
