<?php
session_start();

require_once 'connect.php';
require_once 'functions.php';
$login = $_POST['login'];
$password = $_POST['password'];
$password_confirm = $_POST['passwordConfirm'];
$error_fields = [];

$response;

if (empty($login)) {
    $error_fields[] = 'login';
}

if (empty($password)) {
    $error_fields[] = 'password';
}

if (empty($password_confirm)) {
    $error_fields[] = 'passwordConfirm';
}

if (!empty($error_fields)) {
    $response = [
        "status" => false,
        "type" => true,
        "message" => 'empty fields',
        "fields" => $error_fields
    ];
} else {
    $login = user_enter($login);
    $password = user_enter($password);
    $password_confirm = user_enter($password_confirm);

    if ($password_confirm === $password) {
        $sql = "SELECT * FROM `users` WHERE `login` = '$login'";
        $check_user = mysqli_query($connect, $sql);
        if (mysqli_num_rows($check_user) > 0) {
            $response = [
                "status" => false,
                "type" => true,
                "message" => 'this login is used',
                "fields" => ['login']
            ];
        } else {
            $password = md5($password);
            $sql = "INSERT INTO `users`(`login`, `password`) VALUES ('$login','$password')";
            mysqli_query($connect, $sql);
            $_SESSION['user'] = [
                'user_id' => mysqli_insert_id($connect),
                'user_login' => $login
            ];
            $response = [
                "status" => true,
                "message" => 'you registration success'
            ];
        }
    } else {
        $response = [
            "status" => false,
            "type" => true,
            "message" => 'passwords not confirm',
            "fields" => ['password', 'passwordConfirm'],
        ];
    }
}
echo json_encode($response);
