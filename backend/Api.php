<?php
Router::create('/upload', function () {
    Gallery::uploadImage();
});

Router::create('/get-all', function () {
    $gallary = new Gallery();
    $gallary->getImages();
});
