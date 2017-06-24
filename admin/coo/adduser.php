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







  $query = $db->prepare("INSERT INTO streamer (email, nom, email_sec, twitter, description, mdp, image) VALUES (:email, :nom, :email_sec, :twitter, :description, :mdp, :image)");
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
$fichier = fopen("user/".$_POST["name"].".php",'w+');
if($fichier == false){
die("La création du fichier a échoué");
}else {
  $ecris = "<!DOCTYPE html>
  	<!-- MAIN IMAGE SECTION -->
  	<div id=\"serviceswrap\">
  		<div class=\"container\">
  			<div class=\"row\">
  				<div class=\"col-lg-8 col-lg-offset-2\">
  					<h2>".$_POST["name"]."<br/>

  					</h2>
  				</div>
  			</div><!-- row -->
  		</div><!-- /container -->
  	</div><!-- /headerwrap -->




    <div class=\"container\">
      <div class=\"row mt\">
        <div class=\"col-lg-8\">

          <script  src= \"http://player.twitch.tv/js/embed/v1.js\"></script>
          <div id=\"SamplePlayerDivID\"></div>
          <script type=\"text/javascript\">
            var options = {
              width: 854,
              height: 480,
              channel:\" ".$_POST["twitch"]." \",

            };
            var player = new Twitch.Player(\"SamplePlayerDivID\", options);
            player.setVolume(0.5);
          </script>

    <?php

    //tgcmtv

    //mdp : tgcm2017


    ?>

        </div>
        <div class=\"col-lg-3 col-lg-offset-1\">

          <iframe class=\"div1\" frameborder=\"0\"
                  scrolling=\"no\"
                  id=\"chat_embed\"
                  src=\"https://www.twitch.tv/".$_POST["twitch"]."/chat\"
                  height=\"500\"
                  width=\"350\"
                  scrolling=\"yes\">
          </iframe>

        </div>
      </div>

    </div>




  	<!-- PROCESS SECTION -->
      <div class=\"container\">
        <div class=\"row mt\">
  		  <div class=\"col-lg-8\">
  		  	<h1>".$_POST["name"]."</h1>
  		  	<hr>
  		  	<h3><b>Qui suis-je  ? </b></h3>
  		  	<p>".$_POST["description"]."</div><!-- col-lg-8 -->
  		  <div class=\"col-lg-4\">
  			<ul class=\"process effect-2\" id=\"process\">
  				<li><img src=".$_POST["image"]."></li>

  			</ul>
  		  </div><!-- col-lg-4 -->
        </div><!-- /row -->
      </div><!-- /.container -->








      <section id=\"contact\"></section>
      <div class=\"ddpg\">
        <div class=\"container\">
          <div class=\"row\">
            <div class=\"col-lg-4 dg\">
              <p class=\"centered\"><a href=\"http://www.twitch.tv/\"".$_POST["twitch"]."/><i class='fa fa-twitch aa'></i></a></p>
            </div>
            <div class=\"col-lg-4 lg\">
              <p class=\"centered\"><a href=".$_POST["twitter"]."><i class=\"fa fa-twitter aa\"></i></a></p>
            </div>
            <div class=\"col-lg-4 dg\">
              <p class=\"centered\"><a href=\"#\"><i class=\"fa fa-youtube-play aa\"></i></a></p>
            </div>
          </div><!-- row -->
        </div><!-- container -->
      </div><!-- Social Footer -->






  	<!-- SERVICES SECTION -->

  	<!-- CLIENTS LOGOS -->

    <div id=\"call\">
      <div class=\"container\">
        <div class=\"row\">
          <h3>Vous voulez me soutenir ?</h3>
          <div class=\"col-lg-8 col-lg-offset-2\">
            <p>Un petit don est toujours apprécié et nous servira à payer les serveurs et nous payer une bière</p>
            <p><button type=\"button\" class=\"btn btn-green btn-lg\">Faire un Don</button></p>
          </div>
        </div><!-- row -->
      </div><!-- container -->
    </div><!-- Call to action -->

  	<!-- CALL TO ACTION -->

    <style>
    i{
    color: grey;
      }
      i:hover{
      color: black;
        }
        .aa{

          font-size: 60px !important;


        }
  #contact{




  }
</style>";

fputs($fichier, $ecris);

fclose($fichier);

}

}
}
