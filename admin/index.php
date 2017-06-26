<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ADMIN - TGCM</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
<?php require "indexmenu.php";




?>

            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Dashboard <small>GamerSpell</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->


                <!-- /.row -->


                <!-- /.row -->


                <div class="row">
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-plus fa-fw"></i> Ajouter un redac</h3>
                            </div>
                            <div class="panel-body">

<form class="" action="coo/adduser.php" method="post">


  <table>
    <tr>
<td>Une image de Profil </td>
<td><input type="text" name="image" value="" placeholder="Image de Profil"></td>
    </tr>

    <tr>
<td>Nom :</td>
<td><input type="text" name="name" value="" placeholder="nom"></td>
    </tr>
<tr>
      <td>Email de Connexion</td>
      <td><input type="email" name="email" value="" placeholder="Email de Connexion"></td>
    </tr>

<tr>
  <tr>
        <td>Email Public</td>
        <td><input type="email" name="email2" value="" placeholder="Email Public"></td>
      </tr>

  <tr>
  <td>Twitter</td>
  <td><input type="text" name="twitter" value="" placeholder="twitter"></td>
</tr>
<tr>
  <td>twitch / youtube</td>
  <td><input type="text" name="twitch" value="" placeholder="le nom de votre chaine twitch"></td>
</tr>

<tr>
  <td>Description</td>
  <td><input type="text" name="description" value="" placeholder="une Courte Description"></td>
</tr>
<tr>
  <td>Mot de passe</td>
  <td><input type="password" name="pass" value="" placeholder="mot de passe"></td>
</tr>
<tr>
  <td>Mot de passe 2</td>
  <td><input type="password" name="pass2" value="" placeholder="mot de passe 2"></td>
</tr>

<tr>
  <td><input type="submit" class="btn btn-success"  name="" value="Ajouter"></td>
</tr>

  </table>

</form>

                            </div>
                        </div>
                    </div>


                <!-- /.row -->




                <div class="row">
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i> Changer ses données</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-donut-chart"></div>
                                <div class="text-right">









                                </div>
                            </div>
                        </div>
                    </div>

  </div>






                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> ajouter un jeux</h3>
                            </div>
                            <div class="panel-body">





                              <form class="" action="index.php" method="post">


                                <table>
                                  <tr>
                              <td>Le jeux : &nbsp;&nbsp;</td>
                              <td><input type="text" name="nbtjeux" value="" placeholder="le jeux en question"></td>
                                  </tr>

                                  <tr>
                                    <td><input type="submit" class="btn btn-success"  name="" value="Ajouter"></td>
                                  </tr>
                            </table>



<?php


if (isset($_POST["nbtjeux"])) {


  require "/coo/config.php";

  try {
    $db = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PWD );
  }catch(Exception $e){
    die("Erreur SQL : ".$e->getMessage() );
  }




$query = $db->prepare("SELECT nom from jeux WHERE nom=:nom;");


$query->execute([

  "nom" => $_POST["nbtjeux"]]);

  echo $query->errorInfo()[2];


  $query = $query->fetchAll(PDO::FETCH_ASSOC);


if ($query == NULL ) {



//print_r($query);

$query = $db->prepare("INSERT INTO jeux (nom) VALUES (:nom)");

  $query->execute([
    "nom" =>$_POST["nbtjeux"]  ]);

mkdir("../article/".$_POST["nbtjeux"]."","0777");

echo "je jeux a été ajouté ";








}else {

//  echo count($query);
  //  print_r($query);



  echo "le jeux existe dejà";


}


}


 ?>







                              </form>






























                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Transactions Panel</h3>
                            </div>
                            <div class="panel-body">



                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="js/plugins/morris/raphael.min.js"></script>
    <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>

</body>

</html>
