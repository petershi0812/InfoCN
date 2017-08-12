<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <script type="text/javascript" src="../../../JS/Jquery/jquery1.9.js"  charset="utf-8"></script>  
    <script type="text/javascript" src="../../../JS/Common_js_function/util.js"  charset="utf-8"></script>        
<%
String Caption = URLDecoder.decode(request.getParameter("caption"),"UTF-8");
String sql = URLDecoder.decode(request.getParameter("sql"),"UTF-8");
//System.out.println(sql);
%>    
  	
</head> 
<body>
<input type="hidden" value="<%=Caption%>" id="caption"/> 
<input type="hidden" value="<%=sql%>" id="sql"/>     
<div id = 'mapContainer' style='height:100%;width:100%;'></div>  
    <!-- echarts core js-->	
	<script type="text/javascript" src="../../../JS/echarts/build/dist/echarts.js"  charset="utf-8"></script>
    <!-- chart core js-->	
	<script type="text/javascript" src="map.js"  charset="utf-8" ></script>	
	<script type="text/javascript">
	    var caption = document.getElementById('caption').value ;
	    var sql  =document.getElementById('sql').value; 	    
	    if(sql.replace("$","").length >0){  
		$.ajax({
		        //url: "../../../ActionController/DiseaseMorbidityAction/Disease_Morbidity.jsp?sql="+encodeURI(encodeURI(sql)),
		        url: 'GetDiseaseMorbidityMap?sql='+encodeURI(encodeURI(sql)),
		        type: "post",
		        success: function(data) {
		           var data_arr = data.split("@");
		           var rangemax = Math.ceil(parseFloat(trim(data_arr[1])));          
		           renderMap(caption,eval(trim(data_arr[0])),rangemax); 
		        },
		        cache: false,
		        timeout: 5000
		    }); 
		}
		else{		 	    	    	    
	    	var data = [];//"[{name:'南京市',value:100},{name:'上海市',value:10},{name:'北京市',value:20},{name:'天津市',value:30},{name:'重庆市',value:40},{name:'杭州市',value:60},{name:'大连市',value:70}]";
	    	renderMap(caption,data,100); 
	    }		
	</script>		  
</body>
</html>

