<%@ page language="java" pageEncoding="GB2312"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <title> 北京市</title>
    <meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
  	<meta http-equiv="Pragma" content="no-cache">
  	<meta http-equiv="Expires" content="0">
  	<meta http-equiv="Cache-Control" content="no-cache">  	  	  	  
	<link rel="stylesheet" type="text/css" href="css/cascade.css">
	
</head>
  <%
  	//String User_ID = URLDecoder.decode(request.getParameter("User_ID"),"UTF-8");
  	//String Province = URLDecoder.decode(request.getParameter("Province"),"UTF-8");  	  	
	//System.out.println(User_ID);
	//System.out.println(Province);	
   %>
<body>
    <div id="wrapper">
        <!-- 品牌列表开始 -->
        <div class="brand-list">
            <div class="brand-bd cle" id="brand-waterfall">
                <!-- 循环字母模块 item -->
                <div class="item" id="brand-a">
                    <h3>A.&nbsp;NBS宏观数据库模块</h3>
					<dl>
					    <dt>地级市</dt>
					    <dd><a href="#" >GDP和人均GDP</a></dd>
					    <dd>CSS应用</dd>
					    <dd>CSS hacks</dd>
					    <dt>区县市</dt>
					    <dd>CSS概念</dd>
					    <dd>CSS应用</dd>
					    <dd>CSS hacks</dd>
					    <dt>街道</dt>
					    <dd>CSS概念</dd>
					    <dd>CSS应用</dd>
					    <dd>CSS hacks</dd>										    										    
					</dl>
               </div>
                <div class="item" id="brand-b">
                    <h3>B.&nbsp;卫计委综合数据库</h3>
					<dl>
					    <dt>地级市</dt>
					    <dd><a href="#" >各地区医疗卫生机构数</a></dd>
						<dd><a href="#" >各地区医疗卫生机构床位数</a></dd>
						<dd><a href="#" >各地区医疗卫生机构医师数</a></dd>
						<dd><a href="#" >分地区医院等级情况</a></dd>
						<dd><a href="#" >各类医疗机构收入和支出</a></dd>
						<dd><a href="#" >各类医疗机构诊疗和出院人次数</a></dd>
					    <dt>区县市</dt>
					    <dd><a href="#" >各地区医疗卫生机构数</a></dd>
						<dd><a href="#" >各地区医疗卫生机构床位数</a></dd>
						<dd><a href="#" >各地区医疗卫生机构医师数</a></dd>
						<dd><a href="#" >分地区医院等级情况</a></dd>
						<dd><a href="#" >各类医疗机构收入和支出</a></dd>	
						<dd><a href="#" >各类医疗机构诊疗和出院人次数</a></dd>														    										    
					</dl>
               </div>               
                <div class="item" id="brand-c">
                    <h3>C.&nbsp;MOH数据库</h3>
					<dl>
					    <dd><a href="#" >卫计委全国医院数据库</a></dd>									    										    
					</dl>
               </div> 
                <div class="item" id="brand-d">
                    <h3>D.&nbsp;分科数据库</h3>
					<dl>
					    <dt>地级市</dt>
					    <dd><a href="#" >分科床位数据库</a></dd>
						<dd><a href="#" >分科医师数据库</a></dd>
					    <dt>区县市</dt>
					    <dd><a href="#" >分科门急诊数据库</a></dd>									    										    
					</dl>
                </div>
                <div class="item" id="brand-e">
                    <h3>E.&nbsp;MCCSC数据库</h3>
					<dl>
					    <dd><a href="#" >卫计委全国妇幼保健院数据库</a></dd>									    										    
					</dl>
               </div>                
               <div class="item" id="brand-f">
                    <h3>F.&nbsp;CHC数据库</h3>
					<dl>
					    <dd><a href="#" >社区卫生服务中心床位机构人员数数据库</a></dd>									    										    
					    <dd><a href="#" >社区卫生服务中心收支数据库</a></dd>									    										    
					    <dd><a href="#" >社区卫生服务中心诊疗数据库</a></dd>									    										    					    					    
					</dl>
                </div>
                <div class="item" id="brand-g">
                    <h3>G.&nbsp;分疾病数据库</h3>
					<dl>
					    <dd><a href="#" >卫计委分疾病数据库</a></dd>									    										    
					</dl>
               </div>                                        
            </div>
        </div>
        <!-- 品牌列表 end -->
    </div>
            
	<script type="text/javascript" src="../JS/Jquery/jquery1.9.1.js"></script>
	<script type="text/javascript" src="js/cascade.js"></script>	
    <script>
        $('#brand-waterfall').cascade();
    </script>
</body>	
</html>

