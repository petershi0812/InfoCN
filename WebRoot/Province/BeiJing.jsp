<%@ page language="java" pageEncoding="GB2312"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <title> ������</title>
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
        <!-- Ʒ���б�ʼ -->
        <div class="brand-list">
            <div class="brand-bd cle" id="brand-waterfall">
                <!-- ѭ����ĸģ�� item -->
                <div class="item" id="brand-a">
                    <h3>A.&nbsp;NBS������ݿ�ģ��</h3>
					<dl>
					    <dt>�ؼ���</dt>
					    <dd><a href="#" >GDP���˾�GDP</a></dd>
					    <dd>CSSӦ��</dd>
					    <dd>CSS hacks</dd>
					    <dt>������</dt>
					    <dd>CSS����</dd>
					    <dd>CSSӦ��</dd>
					    <dd>CSS hacks</dd>
					    <dt>�ֵ�</dt>
					    <dd>CSS����</dd>
					    <dd>CSSӦ��</dd>
					    <dd>CSS hacks</dd>										    										    
					</dl>
               </div>
                <div class="item" id="brand-b">
                    <h3>B.&nbsp;����ί�ۺ����ݿ�</h3>
					<dl>
					    <dt>�ؼ���</dt>
					    <dd><a href="#" >������ҽ������������</a></dd>
						<dd><a href="#" >������ҽ������������λ��</a></dd>
						<dd><a href="#" >������ҽ����������ҽʦ��</a></dd>
						<dd><a href="#" >�ֵ���ҽԺ�ȼ����</a></dd>
						<dd><a href="#" >����ҽ�ƻ��������֧��</a></dd>
						<dd><a href="#" >����ҽ�ƻ������ƺͳ�Ժ�˴���</a></dd>
					    <dt>������</dt>
					    <dd><a href="#" >������ҽ������������</a></dd>
						<dd><a href="#" >������ҽ������������λ��</a></dd>
						<dd><a href="#" >������ҽ����������ҽʦ��</a></dd>
						<dd><a href="#" >�ֵ���ҽԺ�ȼ����</a></dd>
						<dd><a href="#" >����ҽ�ƻ��������֧��</a></dd>	
						<dd><a href="#" >����ҽ�ƻ������ƺͳ�Ժ�˴���</a></dd>														    										    
					</dl>
               </div>               
                <div class="item" id="brand-c">
                    <h3>C.&nbsp;MOH���ݿ�</h3>
					<dl>
					    <dd><a href="#" >����ίȫ��ҽԺ���ݿ�</a></dd>									    										    
					</dl>
               </div> 
                <div class="item" id="brand-d">
                    <h3>D.&nbsp;�ֿ����ݿ�</h3>
					<dl>
					    <dt>�ؼ���</dt>
					    <dd><a href="#" >�ֿƴ�λ���ݿ�</a></dd>
						<dd><a href="#" >�ֿ�ҽʦ���ݿ�</a></dd>
					    <dt>������</dt>
					    <dd><a href="#" >�ֿ��ż������ݿ�</a></dd>									    										    
					</dl>
                </div>
                <div class="item" id="brand-e">
                    <h3>E.&nbsp;MCCSC���ݿ�</h3>
					<dl>
					    <dd><a href="#" >����ίȫ�����ױ���Ժ���ݿ�</a></dd>									    										    
					</dl>
               </div>                
               <div class="item" id="brand-f">
                    <h3>F.&nbsp;CHC���ݿ�</h3>
					<dl>
					    <dd><a href="#" >���������������Ĵ�λ������Ա�����ݿ�</a></dd>									    										    
					    <dd><a href="#" >������������������֧���ݿ�</a></dd>									    										    
					    <dd><a href="#" >�����������������������ݿ�</a></dd>									    										    					    					    
					</dl>
                </div>
                <div class="item" id="brand-g">
                    <h3>G.&nbsp;�ּ������ݿ�</h3>
					<dl>
					    <dd><a href="#" >����ί�ּ������ݿ�</a></dd>									    										    
					</dl>
               </div>                                        
            </div>
        </div>
        <!-- Ʒ���б� end -->
    </div>
            
	<script type="text/javascript" src="../JS/Jquery/jquery1.9.1.js"></script>
	<script type="text/javascript" src="js/cascade.js"></script>	
    <script>
        $('#brand-waterfall').cascade();
    </script>
</body>	
</html>

