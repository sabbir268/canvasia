<?php
class Gallery
{
    public function uploadImage()
    {
        $file_name = $_FILES['image']['name'];
        $file_size =$_FILES['image']['size'];
        $file_tmp =$_FILES['image']['tmp_name'];
        try {
            $mv =  move_uploaded_file($file_tmp, "Gallery/".$file_name);
            echo "Success";
        } catch (\Throwable $th) {
            var_dump($th);
            throw $th;
        }
    }

    public function getImages()
    {
        $path    = '/Gallary';
        $files = scandir($path);
        $files = json_encode($files);
        echo $files;
    }
}
