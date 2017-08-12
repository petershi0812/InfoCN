<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>大行业概览</title>
<script type="text/javascript" src="../JS/Jquery/jquery1.9.1.js"></script>
<link rel="stylesheet" type="text/css" href="../JS/mainContent/style.css" />
<!-- 下拉菜单格式 -->
<link rel="stylesheet" type="text/css" href="../JS/mainContent/bootstrap/css/bootstrap.min.css" />
<script src="../JS/mainContent/bootstrap/js/bootstrap.min.js"></script>
<!-- ECharts单文件引入 -->
<script src="../JS/echarts/build/dist/echarts.js"></script>
<!-- JS引入 -->
<script src="Industry/js/renderIndustry.js"></script>
<%
if((String)session.getAttribute("username") == null){
	response.sendRedirect("../LoginRedirect");
}
//防止盗链
if(request.getHeader("Referer") == null){
	response.sendRedirect("../ErrorPage/errorPage.jsp");
}
%>

</head>
<body>
  <input type="hidden" value="<%=request.getParameter("treeid") + "|" + request.getParameter("nodeid")%>" id="rightspk"/> 	
	<!-- 图表 -->
	<div>
	<center>
		<div id="zyywsr"></div>	
		<div id="yylr"></div>		
	</center>
	</div>	
<script type="text/javascript">
$(function(){
	var _rootEl=document.compatMode=="CSS1Compat"?document.documentElement:document.body;/*得到当前窗体的根元素*/ 
	var document_body_client_width = _rootEl.clientWidth;
	var document_body_client_height = _rootEl.clientHeight;
	
	document.getElementById( "zyywsr" ).style.width = document_body_client_width*0.90;
	document.getElementById( "zyywsr" ).style.height = document_body_client_height * 0.48;
	document.getElementById( "yylr" ).style.width = document_body_client_width*0.9;
	document.getElementById( "yylr" ).style.height = document_body_client_height * 0.48;
	
	var rightspk  = document.getElementById('rightspk').value;	
	
	/*初始化设置*/
	renderIndustry(rightspk);	
    function renderIndustry(_rightspk){
		$.ajax({
			        url : 'AjaxRankIndustryPush?rightspk='+_rightspk,
			        type: "post",
			        success: function(data) {	        
						show_RankChart(eval("(" + data + ")"));
		        },
		        cache: false,
		        timeout: 5000
		    }); 
	}	
});
</script>
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
