<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>行业导航</title>
<script type="text/javascript" src="../JS/Jquery/jquery1.9.1.js"></script>
<link rel="stylesheet" type="text/css" href="../JS/mainContent/style.css" />
<!-- 下拉菜单格式 -->
<link rel="stylesheet" type="text/css" href="../JS/mainContent/bootstrap/css/bootstrap.min.css" />
<script src="../JS/mainContent/bootstrap/js/bootstrap.min.js"></script>
<!-- ECharts单文件引入 -->
<script src="../JS/echarts/build/dist/echarts.js"></script>
<!-- JS引入 -->
<script src="Industry/Industry.js"></script>

<%
if((String)session.getAttribute("username") == null){
	response.sendRedirect("../LoginRedirect");
}
//防止盗链
if(request.getHeader("Referer") == null){
	response.sendRedirect("../ErrorPage/errorPage.jsp");
}
%>
<%
	String industrycode = request.getParameter("industrycode");	
%>
</head>
<body>
	<input type="hidden" value="<%=industrycode%>" id="industrycode"/>  
	<!-- 专题选择下拉菜(top10 industry order by income) -->
    <div class="container" style="position:absolute;bottom:10px;left:10px;">
          <div class="dropup" style="display:inline-block" >
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              	行业选择	
            	<span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
				<li value='1700'><a href='#'>纺织业</a></li>
				<li value='3100'><a href='#'>黑色金属冶炼和压延加工业</a></li>
				<li value='3200'><a href='#'>有色金属冶炼和压延加工业</a></li>
				<li value='3300'><a href='#'>金属制品业</a></li>
				<li value='3400'><a href='#'>通用设备制造业</a></li>
				<li value='3500'><a href='#'>专用设备制造业</a></li>
				<li value='3600'><a href='#'>汽车制造业</a></li>
				<li value='3800'><a href='#'>电气机械和器材制造业</a></li>
				<li value='3900'><a href='#'>计算机、通信和其他电子设备制造业</a></li>
				<li value='4400'><a href='#'>电力、热力生产和供应业</a></li>                          
            </ul>
          </div>
	</div>
	
	<!-- 图表 -->
	<div>
	<center>
		<div id="zyywsr_lj"></div>	
		<div id="xslrl_lj" style="margin-top:-20px;"></div>	
	</center>
	</div>	
<script type="text/javascript">
$(function(){
	var _rootEl=document.compatMode=="CSS1Compat"?document.documentElement:document.body;/*得到当前窗体的根元素*/ 
	var document_body_client_width = _rootEl.clientWidth;
	var document_body_client_height = _rootEl.clientHeight;
	
	document.getElementById( "zyywsr_lj" ).style.width = document_body_client_width*0.85;
	document.getElementById( "zyywsr_lj" ).style.height = document_body_client_height * 0.5;
	document.getElementById( "xslrl_lj" ).style.width = document_body_client_width*0.85;
	document.getElementById( "xslrl_lj" ).style.height = document_body_client_height * 0.5;
	
	var industrycode  =document.getElementById('industrycode').value;	
	$("li").click(function(){
	   industrycode = $(this).val().toString();
	   if(industrycode.length == 3) industrycode = '0' + industrycode; //处理第一个数字是0的情况
	   renderIndustry(industrycode);
	});			
	
	/*初始化设置*/
	renderIndustry(industrycode);	
    function renderIndustry(_industrycode){
		$.ajax({
			        url : 'AjaxIndustryPush?industrycode='+_industrycode,
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
