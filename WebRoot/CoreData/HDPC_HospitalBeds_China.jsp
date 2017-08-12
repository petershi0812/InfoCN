<%@ page language="java" pageEncoding="gb2312"%>
<%
if((String)session.getAttribute("username") == null){
	response.sendRedirect("../LoginRedirect");
}
//防止盗链
if(request.getHeader("Referer") == null){
	response.sendRedirect("../ErrorPage/errorPage.jsp");
}
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />  
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/resources/css/ext-all.css" />		
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/style.css" />
	<script type="text/javascript" src="../EXT/extjs3.3.1/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ext-all.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/source/locale/ext-lang-zh_CN.js"></script>
	<!-- ext extensions-->
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/BufferView.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/CheckColumn.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/MultiSelect.js"></script>	
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/gridToExcel.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/CopyButton.js"></script>			
	<!-- common js function-->	
	<script type="text/javascript" src="../JS/Common_js_function/util.js"></script>
	<script type="text/javascript" src="../JS/Common_js_function/config.js"></script>	
    <!-- core js-->	
	<script type="text/javascript" src="HPC/China/HDPC_HospitalBeds_China.js"></script>
	<!-- fusioncharts js--> 
	<script type="text/javascript" src="../JS/fusioncharts/fusioncharts.js"></script>
	<script type="text/javascript" src="../JS/fusioncharts/themes/fusioncharts.theme.fint.js"></script>	
    <!-- chart core js-->
	<script type="text/javascript" src="HPC/chart/chart.js"></script>
    <script type="text/javascript" src="../JS/Jquery/ZeroClipboard.js"></script>	

</head> 
  <body >
  <input type="hidden" value="<%=request.getParameter("treeid") + "|" + request.getParameter("nodeid")%>" id="rightspk"/>   
  <div id = 'grid_div'></div>
  <div id = 'large_showcolumn_panel_tree'></div>
  <div id = 'large_filter_panel_tree'></div>
  <div id = 'large_newcolumn_panel_tree'></div> 
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

