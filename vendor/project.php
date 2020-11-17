<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$user_id = $_SESSION['user']['user_id'];
$login = $_SESSION['user']['user_login'];
$sql = "SELECT * FROM `projects` WHERE `user_id` = '$user_id'";
$check_projects = mysqli_query($connect, $sql);
if($check_projects){
    while ($row = mysqli_fetch_assoc($check_projects)) {
        $project_id = $row['id'];
        $sql = "SELECT * FROM `tasks` WHERE `project_id` = '$project_id'";
        $check_tasks = mysqli_query($connect, $sql);
        if($check_tasks){
            while ($task = mysqli_fetch_assoc($check_tasks)){
                $row['tasks'][] = $task;
            }
        }
        $res[] = $row;
    }
}
echo json_encode($res);