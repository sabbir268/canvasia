<?php
Router::get('/', function () {
    $gallary = new Gallery();
    $gallary->uploadImage($_FILES['image']);
});

Router::post('/', function () {
    $gallary = new Gallery();
    $gallary->uploadImage($_FILES['image']);
});
