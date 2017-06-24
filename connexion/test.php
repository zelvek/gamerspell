<?php


$test = "50";
$filename = "Mon_fichier";
$text = $test;

$open = fopen($filename.".php", "w"); /* tu as plusieurs mode d'ouverture regarde sur internet (W write, R read) */

fwrite($open, $text);
fclose($open);



 ?>
