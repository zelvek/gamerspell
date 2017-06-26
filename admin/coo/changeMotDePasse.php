<?php
session_start();
$_SESSION["erreur"] = "erreur";

//print_r($_POST);

//echo "<br>";
require "config.php";

try {
  $db = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PWD );
}catch(Exception $e){
  die("Erreur SQL : ".$e->getMessage() );
}




if( count($_POST)==2
&& !empty($_POST["pass"])
&& !empty($_POST["pass2"])){

$error = false;


if (strlen($_POST["pass"])<8 || strlen($_POST["pass"])> 30) {
  $error = true;
}
if ($_POST["pass"] != $_POST["pass2"]) {
  $error = true;

header("Location: ../index.php");
}else {







  $query = $db->prepare("UPDATE redac SET mdp = :mdp WHERE email = :email");
  $pwd = password_hash($_POST["pass"], PASSWORD_DEFAULT);

  $query->execute([
"email" => $_SESSION["email"],
"mdp" => $pwd
]);

echo $query->errorInfo()[2];
header("Location: ../index.php");

}
}
