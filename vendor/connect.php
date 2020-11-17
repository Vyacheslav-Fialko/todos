<?php
    $connect = mysqli_connect('localhost', 'root', '', 'ruby_garage');
    if (!$connect) {
        die;
    }