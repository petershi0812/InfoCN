<%@ page language="java" pageEncoding="UTF-8"%>
<html>  
<head> 
</head> 
<body> 
<script> 
	var t=3;//设定跳转的时间 
	setInterval("refer()",1000); //启动1秒定时 
	function refer(){ 
		if(t==0){ 
			//location="../portals.jsp";
			location = "../LoginRedirect";
		} 
		document.getElementById('show').innerHTML="请按正常途径登录系统,<font color = red>"+t+"</font>秒后跳转到登录界面!"; // 显示倒计时
		t--;
	} 
</script> 
<span id="show"></span> 
</body> 
</html>