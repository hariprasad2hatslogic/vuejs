<?php 
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
function db_connect($type=""){

  $host="localhost";
  $username="root";
  $password="root";
  $dbname="vuejs";
  $connection = mysqli_connect($host, $username, $password, $dbname) or die(mysqli_connect_errno());
  return $connection;
}
?>