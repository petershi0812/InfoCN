<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>行业概览</title>
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
		<div id="zyywsr_lj"></div>	
		<div id="qylrze_ljtbzje" style="margin-top:-20px;"></div>
	</center>
	</div>	
<script type="text/javascript">
$(function(){
	var _rootEl=document.compatMode=="CSS1Compat"?document.documentElement:document.body;/*得到当前窗体的根元素*/ 
	var document_body_client_width = _rootEl.clientWidth;
	var document_body_client_height = _rootEl.clientHeight;
	
	document.getElementById( "zyywsr_lj" ).style.width = document_body_client_width*0.85;
	document.getElementById( "zyywsr_lj" ).style.height = document_body_client_height * 0.5;
	document.getElementById( "qylrze_ljtbzje" ).style.width = document_body_client_width*0.85;
	document.getElementById( "qylrze_ljtbzje" ).style.height = document_body_client_height * 0.5;
	
	var rightspk  = document.getElementById('rightspk').value;	

	/*初始化设置*/
	renderIndustry(rightspk);	
    function renderIndustry(_rightspk){
		$.ajax({
			        url : 'AjaxDetailedIndustryPush?rightspk='+_rightspk,
			        type: "post",
			        success: function(data) {	        
						show_Chart(eval("(" + data + ")"));
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
