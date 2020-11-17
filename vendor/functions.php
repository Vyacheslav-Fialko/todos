<?php
function user_enter ($var)
{
    $res = trim(htmlspecialchars($var));
    return $res;
}