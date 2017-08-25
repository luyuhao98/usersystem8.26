<?php
header("Content-Type:text/html; charset=utf-8"); 

session_start();

//检测是否登录，若没登录则转向登录界面
if(!isset($_SESSION['userid'])){
	header("Location:login.html");
	exit();
}

//包含数据库连接文件
include('conn.php');

$userid = $_SESSION['userid'];
$username = $_SESSION['username'];
$check_query = $dbh->query("select * from user where uid=$userid limit 1");
$row = $check_query->fetch();
echo '用户信息：<br />';
echo '用户ID：',$userid,'<br />';
echo '用户名：',$username,'<br />';
echo '邮箱：',$row['email'],'<br />';
echo '注册日期：',date("Y-m-d H:i:s", $row['regdate']),'<br />';
echo '<a href="login.php?action=logout">注销</a> 登录<br />';
?>