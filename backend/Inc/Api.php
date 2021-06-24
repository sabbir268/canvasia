<?php
Router::create('/', function () {
    $gallary = new Gallery();
    $gallary->uploadImage($_FILES['image']);
});

// Router::create('/', function () {
//     $gallary = new Gallery();
//     $gallary->uploadImage($_FILES['image']);
// });
