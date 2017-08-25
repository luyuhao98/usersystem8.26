<?php
header("Content-Type:text/html; charset=utf-8"); 
//echo "<script>alert('fuck!')</script>";

$username = htmlspecialchars($_POST['username']);


if(!preg_match('/^[\w\x80-\xff]{3,15}$/', $username)){
	exit( "forbid");
}
//包含数据库连接文件
include('conn.php');

//检测用户名
$check_query = $dbh->query("select uid from user where username='$username' limit 1");

if($result = $check_query->fetch()){

	exit('already have');

}
exit('1');


?>
