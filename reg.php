<?php

header("Content-Type:text/html; charset=utf-8"); 

if(!isset($_POST['submit'])){
	exit('非法访问!');
}

$username = $_POST['username'];
echo $username;
$password = $_POST['password'];
$email = $_POST['email'];
//注册信息判断

//包含数据库连接文件
include('conn.php');

//写入数据
$password = MD5($password);
date_default_timezone_set("Asia/Shanghai");
$regdate = time();
$sql = "INSERT INTO user(username,password,email,regdate)VALUES('$username','$password','$email',$regdate)";
try{
	$dbh->query($sql);
	exit('用户注册成功！点击此处 <a href="login.html">登录</a>');
} catch(PDOException $e)
{
	echo '抱歉！添加数据失败：',$e->getMessage(),'<br />';
	echo '点击此处 <a href="javascript:history.back(-1);">重试</a> ';
}
?>
