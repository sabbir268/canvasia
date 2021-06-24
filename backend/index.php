<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once('gallery.php');

$gallary = new Gallery();

if (isset($_POST)) {
    // var_dump($_FILES['image']);
    $gallary->uploadImage($_FILES['image']);
}

// if (isset($_GET)) {
//     echo "Fuck";
// }
