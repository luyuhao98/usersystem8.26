<?php
header("Content-Type:text/html; charset=utf-8"); 
//echo "<script>alert('fuck!')</script>";

$username = htmlspecialchars($_POST['username']);
//exit($_POST['password']);
$password = MD5($_POST['password']);

include('conn.php');

//检测用户名
$check_query = $dbh->query("select uid from user where username='$username' limit 1");

if($result = $check_query->fetch()){
	

	$check_query = $dbh->query("select uid from user where username='$username' and password='$password' limit 1");
	if($result= $check_query->fetch())
		exit('1');
	
	else exit("perror");


}

else{
exit('nouser');
}
exit('error');
?>
