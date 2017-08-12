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
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/RowExpander.js"></script>	
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/BufferView.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/CheckColumn.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/MultiSelect.js"></script>	
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/gridToExcel.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ux/CopyButton.js"></script>			
	
	<!-- common js function-->	
	<script type="text/javascript" src="../JS/Common_js_function/util.js"></script>
	<script type="text/javascript" src="../JS/Common_js_function/paper_industry_config.js"></script>	
    <!-- core js-->	
	<script type="text/javascript" src="Industry/paper_Industry.js"></script>
    <script type="text/javascript" src="../JS/Jquery/ZeroClipboard.js"></script>
    
	<style type="text/css">
	 #grid .x-grid3-row td,.x-grid3-summary-row td{ 
	 	line-height:25px;//控制GRID单元格高度 
	 	vertical-align:center;//单元格垂直居中 
	 	border-right: 1px solid #eceff6 !important;//控制表格列线 
	 	border-top: 1px solid #eceff6 !important;//控制表格行线 
	 }
	 </style>    	
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

