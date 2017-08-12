<%@ page language="java" pageEncoding="utf-8"%>
<%@ page import="java.net.URLDecoder" %>
<%
if((String)session.getAttribute("username") == null){
	response.sendRedirect("../../../LoginRedirect");
}
//防止盗链
if(request.getHeader("Referer") == null){
	response.sendRedirect("../../../ErrorPage/errorPage.jsp");
}

String companyname = URLDecoder.decode(request.getParameter("companyname"),"UTF-8");
String yearid = request.getParameter("yearid");

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />  
	<link rel="stylesheet" type="text/css" href="../../../EXT/extjs3.3.1/resources/css/ext-all.css" />
    <!-- overrides to base library -->
    <link rel="stylesheet" type="text/css" href="../../../EXT/extjs3.3.1/ux/css/Portal.css" />  		
	<link rel="stylesheet" type="text/css" href="../../../EXT/extjs3.3.1/style.css" />
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/ext-all.js"></script>

    <!-- extensions -->
    <script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/Portal.js"></script>
    <script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/PortalColumn.js"></script>
    <script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/Portlet.js"></script>
    <script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/numberFieldFormat.js"></script>    
    
	<!-- ext extensions-->
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/BufferView.js"></script>
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/CheckColumn.js"></script>
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/MultiSelect.js"></script>	
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/ux/gridToExcel.js"></script>

	<!-- chinese chartset-->
	<script type="text/javascript" src="../../../EXT/extjs3.3.1/source/locale/ext-lang-zh_CN.js"></script>
				
	<!-- common js function-->	
	<script type="text/javascript" src="../../../JS/Common_js_function/util.js"></script>
	
    <!-- echarts core js-->	
	<script type="text/javascript" src="../../../JS/echarts/build/dist/echarts.js"  charset="utf-8"></script>		
		
    <!-- core js-->	
	<script type="text/javascript" src="js/singlecompany.js"></script>
	
    <!-- chart core js-->
	<script type="text/javascript" src="chart/echart.js"></script>	

</head> 
  <body > 
	<input type="hidden" value="<%=companyname%>" id="companyname"/> 
	<input type="hidden" value="<%=yearid%>" id="yearid"/>    
	<!--禁用F12-->
  	<script> 
		document.onkeydown=function keyListener(e){ 
			e = e ? e : event; 
			if(e.keyCode == 123){ 
				//alert('开始使用:F12');
				return false;
			} 
		} 
	</script>
	  
  </body>
</html>

