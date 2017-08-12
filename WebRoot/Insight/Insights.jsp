<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <% 
	//防止盗链
	if(request.getHeader("Referer") == null){
		response.sendRedirect("../ErrorPage/errorPage.jsp");
	}  
  	String ReportName = request.getParameter("Insight_id"); 
  %>
    <script type="text/javascript" src="js/pdfobject.js"></script>
  </head> 
  <body>
  <input id = Report_input value = <%=ReportName %>  type="hidden"/>
    <script type="text/javascript">  
    var Insight_id = document.getElementById("Report_input").value;
    var url = "pdf/"+ Insight_id + ".pdf";
    window.onload = function (){
    	var success = new PDFObject({ url: url }).embed();
    };
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