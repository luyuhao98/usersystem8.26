<?php
header("Content-Type:text/html; charset=utf-8"); 

$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='my_db';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='19980129';          //对应的密码
$dsn="$dbms:host=$host;dbname=$dbName";

try
{
$dbh=new PDO($dsn,$user,$pass);
$dbh->exec("set names utf8");

}
catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() );
}

?>