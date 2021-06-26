<?php
class Gallery
{
    public static function uploadImage()
    {
        $file_name = $_FILES['image']['name'];
        $file_size =$_FILES['image']['size'];
        $file_tmp =$_FILES['image']['tmp_name'];
        try {
            $mv =  move_uploaded_file($file_tmp, "Gallery/".$file_name);
            $file['src'] = "http://localhost:8888/Gallery/".$file_name;
            $file['name'] = $file_name;
            echo json_encode($file);
        } catch (\Throwable $th) {
            var_dump($th);
            throw $th;
        }
    }

    public function getImages()
    {
        $path    = dirname(__FILE__) .'/../Gallery';
        $allFiles = scandir($path);
        $files = array_diff($allFiles, array('.', '..'));
        $res = [];
        foreach ($files as $key => $value) {
            $fl['src'] =  "http://localhost:8888/Gallery/".$value;
            $fl['name'] = $value;
            array_push($res, $fl);
        }
        echo json_encode($res);
    }
}
