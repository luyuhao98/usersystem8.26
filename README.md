# usersystem8.26
一个简易的基于ajax的用户注册登录模型

能实现在不刷新页面的情况下 检测用户名是否重名，检验重复输入密码，验证登录等功能
 
首先 请先修改createmy_db.php与conn.php的如下部分。
（不用说也是改成自己的数据库信息啦）
$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='my_db';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='19980129';          //对应的密玛
 
其次 reg.html,reg.php,login.html,login.php还有my.php是可以在浏览器打开的。
分别代表着注册页面，注册成功页面，登录页面，登录成功页面，以及个人信息页面。
然而，在打开所有上述文件之前，请先运行createmy_db.php！
然而，在打开所有上述文件之前，请先运行createmy_db.php！
然而，在打开所有上述文件之前，请先运行createmy_db.php！
这是个建库文件。
 
最后 ，很重要的一点。因为ajax的缘故：
请务必把源文件放在服务器文件夹内并用访问服务器的方式打开！
例如 ：127.0.0.1/usersystem8.26/reg.html (正确)
file://var/www/html/usersystem8.26/reg.html(错误)
否则将看不到诸如“用户名已存在”之类的效果。
 
哦哦 ，还有注册验证码是kkkk，在reg.js里可以改。
