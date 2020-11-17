<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$project = $_POST['project-name'];
$id = $_POST['id'];
$error_fields = [];

if (empty($project)) {
    $error_fields[] = 'editProjectModal';
}
if (empty($id)) {
    $error_fields[] = 'editProjectModal';
}


if (empty($error_fields)) {
    $sql = "UPDATE `projects` SET `name`='$project' WHERE `id`='$id'";
    $res = mysqli_query($connect, $sql) ;
    if($res){
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