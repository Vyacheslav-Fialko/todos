<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';

$login = $_POST['login'];
$password = $_POST['password'];
$error_fields = [];

if (empty($login)) {
    $error_fields[] = 'login';
}
if (empty($password)) {
    $error_fields[] = 'password';
}
$response;
if (!empty($error_fields)) {
    $response = [
        "status" => false,
        "type" => 1,
        "message" => 'empty fields',
        "fields" => $error_fields
    ];
} else {
    $login = user_enter($login);
    $password = md5(user_enter($password));
    $sql = "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'";
    $check_user = mysqli_query($connect, $sql);
    if (mysqli_num_rows($check_user) > 0) {
        $user = mysqli_fetch_assoc($check_user);
        $_SESSION['user'] = [
            'user_id' => $user['id'],
            'user_login' => $user['login']
        ];
        $response = [
            "status" => true
        ];
    } else {

        $response = [
            "status" => false,
            "message" => 'incorect login or password'
        ];
    }
}
echo json_encode($response);
