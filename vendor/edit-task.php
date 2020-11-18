<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$id = $_POST['id'];
$error_fields = [];

if (empty($id)) {
    $error_fields[] = 'editTaskModalw';
}

$update_field = [];
foreach ($_POST as $key => $value) {
    $update_field[] = "$key = '$value'";
}
$field = implode(', ', $update_field);

$response;
if (empty($error_fields)) {
    $sql = "UPDATE `tasks` SET $field WHERE `id`='$id'";
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
