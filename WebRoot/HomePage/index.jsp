<%@ page language="java" pageEncoding="GB2312"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <title>InfoCn���ݹ���ƽ̨V1.0</title>    
    <meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
    <meta http-equiv="keywords" content="�Ϻ�����������Ϣ���޹�˾InfoCn���ݹ���ƽ̨">
    <meta http-equiv="description" content="InfoCn���ݹ���ƽ̨">
  	<meta http-equiv="Pragma" content="no-cache">
  	<meta http-equiv="Expires" content="0">
  	<meta http-equiv="Cache-Control" content="no-cache">  	  	  	  
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="../EXT/extjs3.3.1/style.css" />
	<script type="text/javascript" src="../EXT/extjs3.3.1/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/ext-all.js"></script>
	<script type="text/javascript" src="../EXT/extjs3.3.1/source/locale/ext-lang-zh_CN.js"></script>
	<link rel="shortcut icon" href="../image/Boot/favicon.ico" /> 
	<script type="text/javascript" src="../JS/Common_js_function/util.js"></script>	
		<script type="text/javascript" src="../JS/Common_js_function/industry_rightmenu.js"></script>	
</head>
  <%
    String User_ID = null;
    if((String)session.getAttribute("username") == null){
    	response.sendRedirect("../LoginRedirect");
    }else{
   	 	User_ID = (String)session.getAttribute("username");
    }
        	
   %>
<body >
	<div id = "top_panel_logo">
		<img id = "logo_img" style='margin-top:2px;margin-left:5px; width:130px;height:35px;' src = ../image/infocn-logo-transparent_2.png>				
		<div id = "logo_account" style="position:absolute;top:12px;left:150px;vertical-align:middle;">
			<img id = "logo_account_img" src = ../image/logo/mysetting.png width = 20px height = 20px style = "margin-top:2px;">
			<span id = "logo_account_id" style="margin-left:-5px;font-size:14px; font-family:����;"><%=User_ID%></span>
			<span id = "activeaccount" style="margin-left:10px;font-size:14px; font-family:����;"></span>			
		</div>
		<!--
		<div id = "horizontalscrolling" style="position:absolute;top:20px;left:450px;vertical-align:middle;">
			<table cellSpacing=0 cellPadding=0 width=100 align=center border=0>
				<tr>
					<td width=190 bgColor=#d6f6fd height=27></td>
					<td bgColor=#d6f6fd height=27>
						<marquee onmouseover=this.stop() onmouseout=this.start() scrollAmount=2 scrollDelay=60 width=580 height=20>        
							<a class="#" href="#" onclick="javascript:window.open('', 'newwindow')" title="\">��������Ĺ��Ч��1  [  7/13/2012]        
							<a class="#" href="#" onclick="javascript:window.open('', 'newwindow')" title="\">��������Ĺ��Ч��2  [  7/13/2012]        
							<a class="#" href="#" onclick="javascript:window.open('', 'newwindow')" title="\">��������Ĺ��Ч��3  [  7/10/2012]     
						</marquee>
					</td>
				</tr>
			</table>
		</div>
		-->		
		<!--
		<div id = "mail" style="position:absolute;top:12px;right:40px;vertical-align:middle;cursor:pointer;"title="����Ϣ">
			<img id = "mail_img" src = ../image/logo/mail.png  style = "margin-top:10px;">			
			<div style="float:right;margin-top:6px;margin-left:2px;color:red;font-size:10px"><b>(</b><span id = "mail_message" style="font-family:����;">10</span><b>)</b></div>
		</div>
		-->	
		<div style="position:absolute;top:20px;right:40px;vertical-align:middle;">
			<span id = "loginMTime" style="font-size:14px; font-family:����;"></span>			
		</div>						
		<div id = "logoout_account" style="position:absolute;top:20px;right:15px;vertical-align:middle;cursor:pointer;">
			<img id = "logoout_account_img" src = ../image/logo/loginout.png title="ע��ϵͳ">
		</div>	
	</div>
	<script type="text/javascript">
	   	var document_body_client_width = document.body.clientWidth;
		document.getElementById('logo_img').width= document_body_client_width * 0.15; 	      
	</script>		
	<div id = "centerPanel"></div>
	<div id = "West_Nativate_Tree_Div"></div>	
	<div id = "West_Nativate_EmergingIndustryTree_Div"></div>		
	<div id = "West_Nativate_AnnualHotIndustryTree_Div"></div>		
	<div id = "West_Nativate_AnalysisTree_Div"></div>	
	<div id = "West_Nativate_ReportTree_Div"></div>	
	<div id = "West_Nativate_InsightTree_Div"></div>
	<script type="text/javascript" src = "../EXT/extjs3.3.1/ux/TabCloseMenu.js"></script>		
	<script type="text/javascript" src = "../JS/index.js"></script>
	<!--����F12-->
  	<script> 
		document.onkeydown=function keyListener(e){ 
			e = e ? e : event; 
			if(e.keyCode == 123){ 
				//alert('��ʼʹ��:F12');
				return false;
			} 
		}		 
		/*window.onbeforeunload = function(){
          return leave();
     	}      
     	leave = function(){
     		return "�뿪ϵͳ";
     	}   
     	
		window.onfocus = function() {
			interval_output = setInterval(function() {
				alert("a");
			}, 1000);  
		};*/   				    					
	</script>						
</body>	
</html>

