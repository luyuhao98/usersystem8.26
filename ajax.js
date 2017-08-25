//////////////////创建ajax类///////////////////
function ajax(method,url,poststr,onsuccess,async)
    { 
      var xmlHttp=null;
      this.async=async;  
      this.method=method;
      this.url=url;
      this.poststr=poststr;
      this.srhname= "Content-Type";// HTTP 请求的头部 可以根据需要进行修改
      this.srhvalue="application/x-www-form-urlencoded";// HTTP 请求的头部 可以根据需要进行修改
        try
         {
         // Firefox, Opera 8.0+, Safari
         xmlHttp=new XMLHttpRequest();
         
         }
        catch (e)
         {
         // Internet Explorer
         try
          {
          xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
                    }
         catch (e)
          {
          xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
         }
         //point
      xmlHttp.open(this.method,this.url,this.async);
      xmlHttp.setRequestHeader(this.srhname,this.srhvalue);
      xmlHttp.send(poststr); 
if(this.async){
      xmlHttp.onreadystatechange = function ()
      {
        if (xmlHttp.readyState == 4)
        {
          if (xmlHttp.status == 200)
          /*
          xmlHttp.status==0 ,本地响应成功.0表示本地

          如果在本地运行(如：C:\\ajax\\ helloworld.htm)，
          那么status属性不管是在”成功”还是”页面未找到”的情况下，都返回的是0。
          也就是说没有通过Web服务器形式的Ajax请求返回值都是0;

          所以测试请用服务器形式：127.0.0.1 登录*/
          {
            onsuccess(xmlHttp.responseText);//成功时逻辑操作
          }
          else
          {
            alert(xmlHttp.status);//失败是逻辑操作
          }
         }
        }      
    }

else{
  onsuccess(xmlHttp.responseText);
    }    
}

/*

[1]如果用GET传输
  ajax: ajax('GET','usercheck.php','',function(){......}) 
  //这里注意第三个参数为‘’ 或 null(必须小写！)
  point:xmlhttp.open("GET","usercheck.php?username="+str+"&sid="+Math.random(),true);
        xmlhttp.send(); 

  如果用POST传输
  ajax: ajax('POST','usercheck.php','username='+str,function(){......})
  point:xmlhttp.open("POST","usercheck.php",true);
  (必须加→→→→→)  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");


[2]关于xmlhttp.setRequestHeader()：
    
  setRequestHeader(header,value)
  向请求添加 HTTP 头。header: 规定头的名称 value: 规定头的值
  CONTENT-TYPE:application/x-www-form-urlencoded含义是表示客户端提交给服务器文本内容的编码方式 是URL编码，即除了标准字符外，每字节以双字节16进制前加个“%”表示
  2、当然还有其他编码方式,如：CONTENT-TYPE:multipart/form-data 
  至于：Content-length 就是表示提交的数据字节大小 

拓展:
    function getServerInfo(){
    if(xmlHttp.readyState==4){
    var headers =  xmlHttp.getAllResponseHeaders();
    //获取所有响应头信息
    alert(headers);
    //获取指定的响应头里面的信息
    //获取时间
    //alert(xmlHttp.getResponseHeader("Date"));
    //获取服务器
    //alert(xmlHttp.getResponseHeader("Server"));
    //获取服务器脚本版本
    //alert(xmlHttp.getResponseHeader("X-Powered-By"));
    //获取相应头长度
    //alert(xmlHttp.getResponseHeader("Content-Length"));
    //获取链接状态
    //alert(xmlHttp.getResponseHeader("Connection"));
    //获取文档类型
    //alert(xmlHttp.getResponseHeader("Content-Type"));
    //获取连接持续时间
    //alert(xmlHttp.getResponseHeader("Keep-Alive"));
    document.myform.time.value = xmlHttp.responseText;
    }
    }
///////////////////////////////////
异步范例：

 var aj1=new ajax("POST","usercheck.php","username="+str,function (resText) {
        if (resText == "forbid") {
          document.getElementById("utail").style.color = "red";
          document.getElementById("utail").innerHTML = "错误：用户名不符合规定。";
        } else if (resText == "already have") {
          document.getElementById("utail").style.color = "red";
          document.getElementById("utail").innerHTML = "用户名已被使用";
        } else {
          document.getElementById("utail").style.color = "green";
          document.getElementById("utail").innerHTML = "可以使用";
        }
      }
      ,true);

    }
}
//////////////////////////////////
同步范例：



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
      alert(tf+"high!!!")
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

注：ajax 修改全局变量，必须用同步传输 async=false；
并且，同步传输时，xmlHttp.onreadystatechange = function ()函数失效,
直接在xmlHttp.send()后加onsuccess(xmlHttp.responseText);

*/
