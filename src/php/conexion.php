
<?php

$hostname= "localhost";
$username= "root";
$password= "root";
$database= "tour";
$port= 3306 ;
$conexion= new mysqli($hostname, $username, $password, $database,$port);
if (!$conexion) {
  echo "Error al conectar a la base de datos: " . mysqli_connect_error();
  exit;
}
else {
}
?>

