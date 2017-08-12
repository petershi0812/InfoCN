<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
<script type="text/javascript" src="../../JS/Jquery/jquery1.9.js"  charset="utf-8"></script> 
<script type="text/javascript" src="../../JS/echarts/build/dist/echarts.js"  charset="gb2312"></script>
<script type="text/javascript" src="city_map/map.js" charset="gb2312" ></script>
</head>
<%
	String province = URLDecoder.decode(request.getParameter("province_id"),"UTF-8");  	
	String subjectid = request.getParameter("subjectid");  
	String maptitle = URLDecoder.decode(request.getParameter("maptitle"),"UTF-8");
	//System.out.println(maptitle);		
%>

<body style="padding-left:10px;">
<input type="hidden" value="<%=province%>" id="province"/>
<input type="hidden" value="<%=maptitle%>" id="maptitle"/> 
<input type="hidden" value="<%=subjectid%>" id="subjectid"/>  
<div id = 'mapContainer' style='height:100%;width:60%;'></div>
<div id="iframe_grid" style="height:90%;width:40%;position:absolute;top:50px;right:15px">
	<iframe frameborder="no" style="width:100%;height:100%" src=city_grid/map_grid.jsp?flag=1&province=<%=province%>&subjectid=<%=subjectid%>&maptitle=<%=maptitle%> scrolling="no"></iframe>
</div>
<a href="../map.jsp?subjectid=<%=subjectid%>" title="返回主页"><img src="../../EXT/extjs3.3.1/images/map_return_2.png" style="z-index:999;position:absolute;top:15px;right:35px;vertical-align:middle;cursor:pointer;"/></a> 
<a href="" onclick="window.location.reload();" title="刷新"><img src="../../EXT/extjs3.3.1/images/gtk_refresh.png" style="z-index:999;position:absolute;top:15px;right:75px;vertical-align:middle;cursor:pointer;"/></a>
<script type="text/javascript">
   var province  =document.getElementById('province').value;
   var maptitle  =document.getElementById('maptitle').value;
   var subjectid  =document.getElementById('subjectid').value; 	    
   if(province.replace("$","").length >0){          
		$.ajax({
		        //url: "../../ActionController/HPPushAction/Map_AjaxPush_City.jsp?subjectid="+subjectid+"&province="+encodeURI(encodeURI(province)),
		        url: 'AjaxMapPush?subjectid='+subjectid+'&province='+encodeURI(encodeURI(province)),		        
		        type: "post",
		        success: function(data) {
		           var data_arr = data.split("@");		           
		           var province = data_arr[1].replace(/(^\s*)|(\s*$)/g, "");
		           var rangemax = Math.ceil(parseFloat(data_arr[2].replace(/(^\s*)|(\s*$)/g, ""))); 
		           var rangemin = Math.ceil(parseFloat(data_arr[3].replace(/(^\s*)|(\s*$)/g, "")));    
		           renderMap(province,eval(data_arr[0].replace(/(^\s*)|(\s*$)/g, "")),rangemax,rangemin,maptitle,subjectid); 
		        },
		        cache: true
		        //timeout: 1500
		    }); 
	}
</script>	
</body>	
</html>

