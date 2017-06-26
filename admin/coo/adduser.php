<?php
//print_r($_POST);

//echo "<br>";
require "config.php";

try {
  $db = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PWD );
}catch(Exception $e){
  die("Erreur SQL : ".$e->getMessage() );
}




if( count($_POST)==9
&& !empty($_POST["image"])
&& !empty($_POST["name"])
&& !empty($_POST["email"])
&& !empty($_POST["email2"])
&& !empty($_POST["twitter"])
&& !empty($_POST["twitch"])
&& !empty($_POST["description"])
&& !empty($_POST["pass"])
&& !empty($_POST["pass2"])){

$error = false;
$_POST["name"] = trim($_POST["name"]);
$_POST["email"] = trim($_POST["email"]);
$_POST["email2"] = trim($_POST["email2"]);




if (strlen($_POST["name"])< 2 || strlen($_POST["name"])> 50  ){
  $error = true;

}
if (strlen($_POST["pass"])<8 || strlen($_POST["pass"])> 30) {
  $error = true;
}
if ($_POST["pass"] != $_POST["pass2"]) {
  $error = true;
}
if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
  $error = true;
}
if(!filter_var($_POST["email2"], FILTER_VALIDATE_EMAIL)){
  $error = true;
}
if($error == true) {



}else {







$query = $db->prepare("INSERT INTO redac (email, nom, email_sec, twitter, description, mdp, image) VALUES (:email, :nom, :email_sec, :twitter, :description, :mdp, :image)");
$pwd = password_hash($_POST["pass"], PASSWORD_DEFAULT);

  $query->execute([
"email" => $_POST["email"],
"nom" => $_POST["name"],
"email_sec" => $_POST["email2"],
"twitter" => $_POST["twitter"],
"description" => $_POST["description"],
"mdp" => $pwd,
"image" => $_POST["image"]]);

echo $query->errorInfo()[2];
header("Location: ../index.php");

}
}
