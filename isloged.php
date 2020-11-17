<?php
session_start();
if(isset($_SESSION['user'])){
    $response = [
        'isloged' => true
    ];
} else {
    $response = [
        'isloged' => false
    ];
}
echo json_encode($response);