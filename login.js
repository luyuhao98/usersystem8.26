function InputCheck(LoginForm)
{var tf= false;


var aj1=new ajax("POST","logincheck.php",'username='+LoginForm.username.value+'&password='+LoginForm.password.value,function(resText){
    if(resText=='nouser'){
      alert("无此用户!");
      
    }
    else if(resText=="perror"){
      alert("密码错误！");
      
    }
    else if(resText=='1')
    { tf = true;
   //   alert(tf+"high!!!")
    }

    else{
        alert(resText);
      }
    }
    ,false);
  //alert(aj1.async+"   async");
  //alert(tf);
  
  return tf;
}
/*ajax 修改全局变量，必须用同步传输 async=false；
并且，同步传输时，xmlHttp.onreadystatechange = function ()函数失效,
直接在xmlHttp.send()后加onsuccess(xmlHttp.responseText);

*/
