<%@ page language="java" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>主页地图导航</title>
<script type="text/javascript" src="../JS/Jquery/jquery1.9.1.js"></script>
<script type="text/javascript" src="../JS/mainContent/js/lib/raphael-min.js"></script>
<script type="text/javascript" src="../JS/mainContent/js/res/chinaMapConfig.js"></script>
<script type="text/javascript" src="../JS/mainContent/js/map.js"></script>
<link rel="stylesheet" type="text/css" href="../JS/mainContent/style.css" />
<!-- 下拉菜单格式 -->
<link rel="stylesheet" type="text/css" href="../JS/mainContent/bootstrap/css/bootstrap.min.css" />
<script src="../JS/mainContent/bootstrap/js/bootstrap.min.js"></script>
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
	String subjectid = request.getParameter("subjectid");	
%>
</head>
<body>
	<input type="hidden" value="<%=subjectid%>" id="subjectid"/>  
	<!-- 专题选择下拉菜 -->
    <div class="container" style="position:absolute;bottom:10px;left:10px;">
          <div class="dropup" style="display:inline-block">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              	专题选择	
            	<span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li value="1"><a href="#">2013年中国医院诊疗人次排名</a></li>
              <li value="2"><a href="#">2013年中国医院药品费用排名</a></li>
              <li value="3"><a href="#">2013年中国医院人均医疗费用排名</a></li>
              <li value="4"><a href="#">2013年中国医院住院手术人次数排名</a></li>              
              <li value="5"><a href="#">2013年中国医院药占比排名</a></li>
              <li value="6"><a href="#">2013年中国医院医疗收入排名</a></li>                            
            </ul>
          </div>
	</div>

	<!-- 地图 -->
	<div style="padding-top:3px;">
	<center>
		<div style="font-size:22px;font-family:楷体;"><b><span id = 'map_title'></span></b></div>
		<div class="regionMap" id='RegionMap'"></div>		
		<div id="MapColor" style="position:absolute;bottom:10px;right:10px; width:20px; height:200px; background:url(../JS/mainContent/images/map_color.png);background-repeat:no-repeat;"></div>
	</center>
	</div>

<script type="text/javascript">
$(function(){
	var _rootEl=document.compatMode=="CSS1Compat"?document.documentElement:document.body;/*得到当前窗体的根元素*/ 
	var document_body_client_width = _rootEl.clientWidth;
	var document_body_client_height = _rootEl.clientHeight;
	var subjectid  =document.getElementById('subjectid').value;
	$("li").click(function(){
	   subjectid = $(this).val();
	   renderMap(subjectid);
	});	
	/*初始化设置*/
	renderMap(subjectid);	
    function renderMap(_subjectid){   
		$.ajax({
		        //url: "../ActionController/HPPushAction/AjaxPush.jsp?subjectid="+_subjectid,
		        url : 'AjaxPush?subjectid='+_subjectid,
		        type: "post",
		        success: function(data) {
		            var map_title = data.split('@')[0];
		            $('#map_title').html(map_title);
		            var map_data = data.split('@')[1];	        	
					show_map("(" + map_data + ")",map_title);
		        },
		        cache: false,
		        timeout: 5000
		    });  
		          
		function show_map(data_map,map_title){		
			var mapObj = {};
			//var stateColorList = ['003399', '0058B0', '0071E1', '1C8DFF', '51A8FF', '82C0FF', 'AAD5ee', 'AAD5FF'];		
			$('#RegionMap').SVGMap({
				external: mapObj,
				mapName: 'china',
				stateColorList : ['073763','2770B5', '429DD4', '5AABDA', '1C8DFF', '70B3DD', 'C6E1F4', 'EDF2F6'],
				mapWidth:  document_body_client_width/1.5, //700
				mapHeight: document_body_client_height/1.08, //600
				stateData: eval(data_map),
				stateTipWidth : 140,
				clickCallback : function(mapData, obj){
					window.location.href="Province/Show_City.jsp?subjectid="+_subjectid+"&maptitle="+encodeURI(encodeURI(map_title))+"&province_id="+encodeURI(encodeURI(mapData[obj.id].Province)); 
				},	
				stateTipHtml: function (mapData, obj) {
					var _value = mapData[obj.id].value;
					var _idx = mapData[obj.id].index;
					var active = '';
					_idx <= 4 ? active = 'active' : active = '';
					var tipStr = '<div class="mapInfo"><i class="' + active + '">' + _idx + '</i><span>' + obj.name + '</span><b>' + _value + '</b></div>';
					return tipStr;
				}
			});	
		}
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
