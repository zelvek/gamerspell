<?php
session_start();
unset($_SESSION["token"]);
unset($_SESSION["email"]);
header("Location: ../index.php");
 ?>
