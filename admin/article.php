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
                            Dashboard <small>écrire un article</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i>   écrire un article
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->


                <!-- /.row -->


                <!-- /.row -->
                <script src="css/ckeditor/ckeditor.js"></script>


                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-plus fa-fw"></i>Article</h3>
                            </div>
                            <div class="panel-body">

<?php
require "./coo/config.php";

try {
  $db = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PWD );
}catch(Exception $e){
  die("Erreur SQL : ".$e->getMessage() );
}

$yolo = $db->query('SELECT nom FROM jeux');


$yolo = $yolo->fetchAll(PDO::FETCH_COLUMN);
echo $db->errorInfo()[2];


//print_r($yolo);
 ?>


<form class="" action="table.php" method="post">

  <div class="form-group">
<label>Titre de L'article</label>
<input id="titre" class="form-control" placeholder="Titre de L'article">
</div>
  <div class="form-group">

  <textarea id="editor1" name="editor1" rows="8" cols="80"></textarea>
    </div>
  <div class="form-group">


  <label>Le jeux en Question</label>
<select id="jeux" class="form-control">
<?php
foreach ($yolo as $key => $value) {
  echo "<option>".$value."</option>";
}

 ?>

  </optgroup>

</select></div>


<input type="submit" class="btn btn-primary" name="" value="Envoyer l'article">




</form>





<?php

?>


<script>
       CKEDITOR.replace( 'editor1' );
   </script>

                            </div>
                        </div>
                    </div>


                <!-- /.row -->





                    <?php





                     ?>




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
