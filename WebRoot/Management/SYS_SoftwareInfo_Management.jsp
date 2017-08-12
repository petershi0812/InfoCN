<%@ page language="java" pageEncoding="gb2312"%>
<%
if((String)session.getAttribute("username") == null){
	response.sendRedirect("../LoginRedirect");
}
else if(!session.getAttribute("username").equals("管理员")){
	response.sendRedirect("../LoginRedirect");
}
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> 
  	<meta http-equiv="Pragma" content="no-cache">
  	<meta http-equiv="Expires" content="0">
  	<meta http-equiv="Cache-Control" content="no-cache">    		      
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/resources/css/ext-all.css" />		
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/style.css" />
	<script type="text/javascript" src="../EXT/extjs3.3.1/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ext-all.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/source/locale/ext-lang-zh_CN.js"></script>
	<!-- ext extensions-->
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/BufferView.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/CheckColumn.js"></script>
	<!-- common js function-->	
	<script type="text/javascript" src="../JS/Common_js_function/util.js"></script>	
    <!-- core js-->	
	<script type="text/javascript" src="Rights/SYS_SoftwareInfo_Management.js"></script>
</head> 
  <body>
  </body>
</html>

