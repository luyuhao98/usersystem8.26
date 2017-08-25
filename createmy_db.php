<?php
header("Content-Type:text/html; charset=utf-8"); 

$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='my_db';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='19980129';          //对应的密码
$dsn="$dbms:host=$host";

try
{
$dbh=new PDO($dsn,$user,$pass,array(PDO::ATTR_PERSISTENT=>true));
$dbh->exec("DROP DATABASE my_db");
$dbh->exec("CREATE DATABASE my_db");
$dbh->exec("use my_db");


$sql="
CREATE TABLE user (
 uid int(8) unsigned NOT NULL auto_increment,
  username char(15) NOT NULL default '',
  password char(32) NOT NULL default '',
  email varchar(40) NOT NULL default '',
  regdate int(10) unsigned NOT NULL default '0',
  PRIMARY KEY  (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
";
$dbh->exec($sql);
$dbh=NULL;
echo "SUCCEED TO CREATE DB";
}
catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() );
}

?>