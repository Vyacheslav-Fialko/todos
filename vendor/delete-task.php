<?php
require_once 'connect.php';
require_once 'functions.php';

$id = user_enter($_POST['id']);
$sql = "DELETE FROM `tasks` WHERE `id` = '$id'";
$res = mysqli_query($connect, $sql);
echo json_encode($res);
