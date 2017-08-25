function InputCheck(RegForm)
{
pass(1,RegForm.password.value);
 reepass(1,RegForm.repass.value);
 mail(RegForm.email.value);
 userna(1,RegForm.username.value);

if (RegForm.invite.value != "kkkk")
  {document.getElementById("itail").innerHTML="Wrong!!!";
  document.getElementById("itail").style.color="red";
  }
  else{
    document.getElementById("itail").innerHTML="Right~~~";
    document.getElementById("itail").style.color="green";
  }
  if (document.getElementById("utail").style.color=="green"&&document.getElementById("itail").style.color=="green"&&document.getElementById("mtail").style.color=="green"&&      document.getElementById("ptail").style.color=="green"&&document.getElementById("rptail").style.color=="green"
    )
  return(true);
else return(false);
  
}
function invt(){
  if(document.getElementById("itail").style.color=="red")
  {  document.getElementById("itail").innerHTML="";
    document.getElementById("invite").value="";
  }
}
var password='';
function pass(status,str){
  if(status==0){
    document.getElementById("ptail").innerHTML="  密码6-15位分大小写";
    document.getElementById("ptail").style.color="grey";
    document.getElementById("password").value="";
    //return;
  }
else if (status==1){
  if(str.length==0){document.getElementById("ptail").innerHTML=" 请填写密码！";
    document.getElementById("ptail").style.color="red";
    return;
  }
  if(str.length<6||str.length>15){
    document.getElementById("ptail").innerHTML=" 密码有误！";
    document.getElementById("ptail").style.color="red";
  }
  else{
    document.getElementById("ptail").innerHTML=" Correct!";
    document.getElementById("ptail").style.color="green";
    password=str;
//alert("PASSWORD:"+password);
      }

    }

}

function reepass(status,str){
  if(status==0){
        document.getElementById("repass").value="";
  }
  else if(status==1){
    if(document.getElementById("ptail").style.color!="green")
    {
      document.getElementById("rptail").innerHTML="  密码有误！";
      document.getElementById("rptail").style.color="red";
    }
    else if(str==password){
          document.getElementById("rptail").innerHTML="  Correct!";
          document.getElementById("rptail").style.color="green";
    
    }
    else{
          document.getElementById("rptail").innerHTML="  Wrong! Check it!";
          document.getElementById("rptail").style.color="red";
    
    }
  }

}

function mail(str){
  if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str))
  {document.getElementById("mtail").innerHTML="  Correct format!";
          document.getElementById("mtail").style.color="green";

  }
  else{document.getElementById("mtail").innerHTML="  Wrong format!";
          document.getElementById("mtail").style.color="red";

  }
}




function userna(status,str)
{
  if(status==0)
  {
    document.getElementById("utail").innerHTML="  必填，3-15字符长度，支持汉字、字母、数字及'_'";
    document.getElementById("utail").style.color="grey";
    //return;
  }


  if(status==1){
  if(str.length==0)
  {
    document.getElementById("utail").innerHTML="  如输入字符不能为空!";
    document.getElementById("utail").style.color="red";
    return;
  }
  
////创建ajax对象aj1

 var aj1=new ajax("POST","usercheck.php","username="+str,function (resText) {
        if (resText == "forbid") {
          document.getElementById("utail").style.color = "red";
          document.getElementById("utail").innerHTML = "错误：用户名不符合规定。";
        } else if (resText == "already have") {
          document.getElementById("utail").style.color = "red";
          document.getElementById("utail").innerHTML = "用户名已被使用";
        } else if(resText=="1"){
          document.getElementById("utail").style.color = "green";
          document.getElementById("utail").innerHTML = "可以使用";
        }
          else{
            alert("未知错误");
          }
      }
      ,true);

    }
}

