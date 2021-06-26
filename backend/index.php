<?php
// error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once('Inc/Router.php');
require_once('Controller/Gallery.php');


require_once('Api.php');

Router::dispatch($_SERVER['REQUEST_URI']);
