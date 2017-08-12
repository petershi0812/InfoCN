<%@ page language="java" pageEncoding="GB2312"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
  	<meta http-equiv="Pragma" content="no-cache">
  	<meta http-equiv="Expires" content="0">
  	<meta http-equiv="Cache-Control" content="no-cache">  	  	  	  
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/style.css" />
	<script type="text/javascript" src="../EXT/extjs3.3.1/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ext-all.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/source/locale/ext-lang-zh_CN.js"></script>
</head>
  <%
     /*参数*/
  	String User_ID = URLDecoder.decode(request.getParameter("User_ID"),"UTF-8");
	System.out.print(User_ID);
   %>
<body>
aaaaaa
</body>	
</html>

