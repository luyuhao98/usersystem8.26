<?php
header("Content-Type:text/html; charset=utf-8"); 

session_start();


if($_GET['action'] == "logout"){
	unset($_SESSION['userid']);
	unset($_SESSION['username']);
	echo '注销登录成功！点击此处 <a href="login.html">登录</a>';
	exit;
}

if(!isset($_POST['submit'])){
	exit('非法访问!');
}
$username = htmlspecialchars($_POST['username']);
$password = MD5($_POST['password']);

include('conn.php');

$check_query = $dbh->query("select uid from user where username='$username' and password='$password' limit 1");

if($result = $check_query->fetch()){


	$_SESSION['username'] = $username;
	$_SESSION['userid'] = $result['uid'];
	echo $username.' 欢迎你！进入 <a href="my.php">用户中心</a><br />';
	echo '点击此处 <a href="login.php?action=logout">注销</a> 登录！<br />';

}
 else {
	exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
}

?>