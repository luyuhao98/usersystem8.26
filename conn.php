<?php
header("Content-Type:text/html; charset=utf-8"); 

$dbms='mysql';     //���ݿ�����
$host='localhost'; //���ݿ�������
$dbName='my_db';    //ʹ�õ����ݿ�
$user='root';      //���ݿ������û���
$pass='19980129';          //��Ӧ������
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