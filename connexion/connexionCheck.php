<?php

session_start();

require "functions.php";


try{
    $db = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME , DB_USER, DB_PWD); // /!\ connection à la base de données /!\
}catch(Exception $e){
  die("Erreur SQL : ".$e->getMessage() );
}


$query = $db->prepare('SELECT is_delete FROM redac WHERE email = :email;');
  $query->execute(["email" =>$_POST["email"]] );

if($query->fetch()["Is_delete"] != 1){

  $query = $db->prepare('SELECT mdp FROM redac WHERE email = :email;');
    $query->execute(["email" =>$_POST["email"]] );


$query = $query->fetchAll(PDO::FETCH_ASSOC);


    if( password_verify($_POST["mdp"], $query["0"]["mdp"])){



    $_SESSION["email"] = $_POST["email"];
    $_SESSION["token"] = generateAccesToken($_SESSION["email"]);



echo "tet";


      header('Location: ../admin/index.php');
    }else {
  header('Location: ../index.php');


  }

}else {
      header('Location: ../index.php');
  }
