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
            var_dump($mv);
            return 'success';
        } catch (\Throwable $th) {
            var_dump($th);
            throw $th;
        }
    }
}
