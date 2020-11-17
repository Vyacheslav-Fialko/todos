<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="./style/style.css">
    <title>Todo List</title>
</head>

<body>
    <header class="header">
        <h1 class=" header__title">simple todo list</h1>
        <h2 class="header__subtitle">from ruby garage</h2>
    </header>
    <main class="main" id="main">

    </main>
    <footer class="footer">
        <span class="footer__copy">&copy; Ruby Garage</span>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

    <script type="module" src="./js/main.js"></script>
</body>

</html>