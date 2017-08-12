/***************************
  * ## 获取fingerprint
****************************/
var fpR;  //获取fingerprint
var fp = new Fingerprint2();    
fp.get(function(result) {
	fpR = result;
});
      	
//定义验证码控件
Ext.define('CheckCode',{
    extend: 'Ext.form.field.Text', 
    alias: 'widget.checkcode',
    inputTyle:'codefield',
    codeUrl:Ext.BLANK_IMAGE_URL,
    isLoader:true,
    onRender:function(ct,position){
        this.callParent(arguments);
        this.codeEl = ct.createChild({ tag: 'img', src: Ext.BLANK_IMAGE_URL,title:'看不清'});
        this.codeEl.addCls('x-form-code');
        this.codeEl.on('click', this.loadCodeImg, this);        
        if (this.isLoader) this.loadCodeImg();
    },
    alignErrorIcon: function() {
        this.errorIcon.alignTo(this.codeEl, 'tl-tr', [2, 0]);
    },
    loadCodeImg: function() {
        this.codeEl.set({ src: this.codeUrl + '?id=' + Math.random() });
    }
}); 

Ext.onReady(function() { 
	 var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	 if (userAgent.indexOf("Chrome") <= -1){
	 	Ext.Msg.alert('提示','请使用Chrome浏览器!');
	 }
     else{     	     
		 var checkcode = Ext.create('CheckCode',{
		 	cls : 'checkimage',
		    fieldLabel : '验证码',
		    name : 'CheckCode',
		    id : 'checkcode',
	        labelWidth:65,  
	        labelAlign:'right',  
	        emptyText:'填写验证码',    
	        blankText:"验证码不能为空，请填写！",
	        allowBlank: false,
		    isLoader:true,
		    codeUrl: 'getCode',
		    width : 180,
			listeners: {  
		        specialkey: function(field,e){    
		            if (e.getKey()==Ext.EventObject.ENTER){    
		                onload();
		            }  
		        }
			}
	    });                
	                
	    var userLoginPanel = Ext.create('Ext.panel.Panel', {  
	        border : false,   
	        items:{  
	            xtype : 'tabpanel',  
	            id : 'loginTabs',  
	            activeTab : 0,  
	            height : 180,  
	            border : false,  
	            items:[{  
	                title : "登录",  
	                xtype : 'form',  
	                id : 'loginForm',  
	                defaults : {  
	                    width : 280,  
	                    margin: '10 0 0 70'  
	                },  
	                defaultType : 'textfield',  
	                labelWidth : 40,  
	                items: [{  
	                    fieldLabel: '账   号',  
	                    cls : 'loginuser',  
	                    name: 'username',
	                    id: 'username',
	                    labelAlign:'right',  
	                    labelWidth:65,  
	                    maxLength : 30,  
	                    emptyText:'请在这里填写用户名/邮箱地址',  
	                    maxLengthText : '用户名的最大长度为30个字符',  
	                    blankText:"用户名不能为空，请填写！",
	                    allowBlank: false ,
						listeners: {  
					        specialkey: function(field,e){    
					            if (e.getKey()==Ext.EventObject.ENTER){    
					                onload();
					            }  
					        }
						}                    
	                },{  
	                    fieldLabel: '密   码',  
	                    cls : 'loginkey',  
	                    name: 'password', 
	                    id:'password',
	                    inputType:"password",  
	                    labelWidth:65,  
	                    labelAlign:'right',  
	                    emptyText:'请在这里填写密码',  
	                    maxLengthText :'密码长度不能超过20',  
	                    maxLength : 20,  
	                    blankText:"密码不能为空，请填写！",
	                    allowBlank: false ,
						listeners: {  
					        specialkey: function(field,e){    
					            if (e.getKey()==Ext.EventObject.ENTER){    
					                onload();
					            }  
					        }
						}                    
	                }, 
					checkcode,
	                {  
	                    id : 'id_reg_panel',  
	                    xtype : 'panel',  
	                    border : false,  
	                    hidden : true,  
	                    html : "<span id='messageTip' style='color:red'> </span>"  
	                }]  
	            }, {  
	                title : '关于',  
	                contentEl : 'aboutInfoCn' 
	            }]            
	        }  
	    }); 
	        
	    var imageLoginPanel = Ext.create('Ext.panel.Panel', {  
	    	layout : 'border',
	        border : false, 
	        items : [
			{
				region : 'north',
				height : 250,
				fill : true,
	      		layout : 'fit',
	      		html:'<iframe src=login/navigation/navigationlogo.jsp width="100%" height="100%" frameborder="no" scrolling="no"></iframe>'
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',
				items : [userLoginPanel]
			}						
			]
	    });	    
	      
	    Ext.create('Ext.window.Window', {  
	        width : 650,  
	        height : 450,  
	        layout: 'fit',  
	        plain : true,  
	        modal : true,  
	        maximizable : false,  
	        draggable : false,  
	        closable : false,  
	        resizable : false,  
	        items: [
	        	imageLoginPanel        	
	        ],
	        buttons: [
	        {  
	            text: '注册',  
	            iconCls : 'register',  
	            handler: function() {
	            	RegisterWindow.show();            
	            }  
	        },
	        {  
	            text: '重置',  
	            iconCls : 'reset',  
	            handler: function(){
	            	Ext.getCmp('loginForm').form.reset();
	            	Ext.getCmp('checkcode').loadCodeImg();
	            }  
	        }, 
	        {  
	            text: '忘记密码',  
	            iconCls : 'findpassword',  
	            handler: function() {
	            	ForgetPasswordWindow.show();            
	            }  
	        }, 	        
	         {
	        	text:'登录',
				iconCls : 'login',
				handler: onload
	         }        
	         ]  
	    }).show(); 
	    	    
	   /***************************
	     * ## 注册界面
	   ****************************/
	   var checkemailvalidationFlg = true; //防止注册的时候重复提交
	   var RegisterFormPanel =  Ext.create('Ext.form.Panel', {
	        title: '欢迎注册',
	        bodyStyle: 'padding:10px 10px 0',
	        width: 400,
	        id : 'RegisterFormPanel',
	        fieldDefaults: {
	            labelAlign: 'top'
	        },
	        defaults: {
	            border: false,
	            xtype: 'panel',
	            flex: 1,
	            layout: 'anchor'
	        },
	        layout: 'hbox',
	        items: [ 
	        {
	            items: [
	            {
	                xtype:'textfield',
	                fieldLabel: '公司名称',
	                anchor: '100%',
	                emptyText:'请在这里填写公司名称', 
	                maxLength : 60,  
	                maxLengthText : '公司名称的最大长度为60个字符',                  
	                blankText:"公司名称不能为空，请填写！",
	                allowBlank: false ,                
	                id: 'company',
	                name : 'company'
	            }, 
	            {
	                xtype:'textfield',
	                fieldLabel: '公司地址',
	                anchor: '100%',
	                maxLength : 1000,  
	                maxLengthText : '公司名称的最大长度为1000个字符',	                
	                emptyText:'请在这里填写公司地址',                
	                allowBlank: false ,                
	                id: 'companyaddress',
	                name : 'companyaddress'
	            }, 	            
	            {
	                xtype:'textfield',
	                fieldLabel: '所在部门',
	                anchor: '100%',
	                maxLength : 50,  
	                maxLengthText : '最大长度为50个字符',	                
	                emptyText:'请在这里填写所在部门',    
	                blankText:"部门不能为空，请填写！",
	                allowBlank: false ,                 
	                id: 'department',
	                name : 'department'
	            },  
	            {
	                xtype:'textfield',
	                fieldLabel: '所在岗位',
	                anchor: '100%',
	                maxLength : 50,  
	                maxLengthText : '最大长度为50个字符',	 	                
	                emptyText:'请在这里填写所在岗位',    
	                blankText:"岗位不能为空，请填写！",
	                allowBlank: false ,                 
	                id: 'post',
	                name : 'post'
	            },             
	            {
	                xtype:'button',
	                text: '获取邀请码',
	                style:'margin-top:20px;float:right;',
	                anchor: '25%',                               
	                id: 'confirmbutton',
	                name : 'confirmbutton',
					listeners: {  
				        click: function(){				   				        	
				            if(Ext.getCmp('email').isValid() && checkemailvalidationFlg == true){
				            	var email = Ext.getCmp('email').getValue().replace(/^\s+|\s+$/g,"")
					        	var emailPost = email.split('@')[1].toLowerCase();					        	
					    		Ext.Ajax.request({      
					    			 url: 'GetEmailValidation',
						             params: {email:email}, 
						             callback: function(options,success,response){
						             	var rs = response.responseText;
						             	if(rs == 'duplicate') Ext.Msg.alert('提示','邮箱地址已存在!');
						             	else if(rs == 'failure') Ext.Msg.alert('提示','邮件发送失败,请确认邮件地址!');
						             	else{
						             		checkemailvalidationFlg = false;
						             		Ext.Msg.alert('提示','邮件发送成功!');
						             	}
						             }							            					            
						        });
						        
					        	/*if(emailPost.indexOf("qq")>=0 || emailPost.indexOf("163")>=0 || emailPost.indexOf("126")>=0 || emailPost.indexOf("sina")>=0 || emailPost.indexOf("gmail")>=0 || emailPost.indexOf("foxmail")>=0 || emailPost.indexOf("hotmail")>=0)
					        		Ext.Msg.alert('提示','请输入正确的企业邮箱!');
				        		else{
						    		Ext.Ajax.request({      
						    			 url: 'GetEmailValidation',
							             params: {email:email}, 
							             callback: function(options,success,response){
							             	var rs = response.responseText;
							             	if(rs == 'duplicate') Ext.Msg.alert('提示','邮箱地址已存在!');
							             	else if(rs == 'failure') Ext.Msg.alert('提示','邮件发送失败,请确认邮件地址!');
							             	else{
							             		checkemailvalidationFlg = false;
							             		Ext.Msg.alert('提示','邮件发送成功!');
							             	}
							             }							            					            
							        });	
				        		}*/
				            }
				            else if(checkemailvalidationFlg == false){
				            	Ext.Msg.alert('提示','请勿重复注册!');
				            }
				        }
					}                 
	            },              
	            {
	                xtype:'textfield',
	                fieldLabel: 'Email',
	                anchor: '70%',
	                maxLength : 50,  
	                maxLengthText : '最大长度为50个字符',	 	                
	                emptyText:'请在这里填写Email',  
	                blankText:"Email不能为空，请填写！",
	                allowBlank: false ,                
	                id: 'email',
	                vtype:'email',
	                name : 'email'
	            },           
	            {
	                xtype:'textfield',
	                fieldLabel: '确认邀请码',
	                anchor: '40%',
	                style:'margin-left:-5px;margin-top:5px;',
	                labelWidth:75,  
	                labelAlign:'right',                               
	                id: 'confirmpassword',
	                name : 'confirmpassword'
	            },
	            {
	                xtype:'textfield',
	                fieldLabel: '联系方式',
	                anchor: '100%',
	                emptyText:'请在这里填写联系方式',  
	                maxLengthText :'长度不能超过20',  
	                maxLength : 20,  
	                blankText:"联系方式不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'telphone',
	                name : 'telphone'
	            },	            
	            {
	                xtype:'textfield',
	                fieldLabel: '用户名',
	                anchor: '100%',
	                emptyText:'请在这里填写用户名',  
	                maxLengthText :'用户名长度不能超过30',  
	                maxLength : 30,  
	                blankText:"用户名不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'account',
	                name : 'account'
	            },            
	            {
	                xtype:'textfield',
	                fieldLabel: '密码',
	                anchor: '100%',
	                emptyText:'请在这里填写密码',  
	                maxLengthText :'密码长度不能超过20',  
	                maxLength : 20,  
	                blankText:"密码不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'userpassword',
	                inputType: 'password',
	                name : 'password'
	            },
	            {
	                xtype:'textfield',
	                fieldLabel: '确认密码',
	                anchor: '100%',
	                emptyText:'请在这里确认密码',  
	                maxLengthText :'密码长度不能超过20',  
	                maxLength : 20,  
	                blankText:"密码不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'userrepassword',                
	                inputType: 'password',
					listeners: {  
				        blur: function(){    
				        	if(Ext.getCmp('userpassword').getValue().replace(/^\s+|\s+$/g,"") != Ext.getCmp('userrepassword').getValue().replace(/^\s+|\s+$/g,"")){
				        		Ext.Msg.alert('提示','两次密码输入不对!');				        		
				        	}
				        }				        
					}				        
	            }]
	        }],
	        buttons: ['->', {
	            text: '注册',
	            iconCls : 'save',  
	            handler: onregister            
	        }, 
	        {
	            text: '关闭',  
	            iconCls : 'close',  
	            handler: function() {RegisterWindow.hide();}          	            
	        }
	        ]
	    });
	    var RegisterWindow = Ext.create('Ext.window.Window', {  
	        width : 400,  
	        height : 580,  
	        layout: 'fit',  
	        plain : true,  
	        modal : true,  
	        maximizable : false,  
	        draggable : false,  
	        closable : false,  
	        resizable : false,  
	        items: [RegisterFormPanel] 
	    }); 
	    
	   /***************************
	     * ## 忘记密码界面
	   ****************************/
	   var ForgetPasswordFormPanel =  Ext.create('Ext.form.Panel', {
	        title: '忘记密码',
	        bodyStyle: 'padding:10px 10px 0',
	        width: 400,
	        id : 'ForgetPasswordFormPanel',
	        fieldDefaults: {
	            labelAlign: 'top'
	        },
	        defaults: {
	            border: false,
	            xtype: 'panel',
	            flex: 1,
	            layout: 'anchor'
	        },
	        layout: 'hbox',
	        items: [ 
	        {
	            items: [	                        
	            {
	                xtype:'button',
	                text: '获取邀请码',
	                style:'margin-top:20px;float:right;',
	                anchor: '25%',                               
					listeners: {  
				        click: function(){				   				        	
				            if(Ext.getCmp('forgetpasswordemail').isValid()){
				            	var email = Ext.getCmp('forgetpasswordemail').getValue().replace(/^\s+|\s+$/g,"")
					        	var emailPost = email.split('@')[1].toLowerCase();					        	
					    		Ext.Ajax.request({      
					    			 url: 'GetForgetPasswordEmailValidation',
						             params: {email:email}, 
						             callback: function(options,success,response){
						             	var rs = response.responseText;
						             	if(rs == 'error') Ext.Msg.alert('提示','系统中不存在该邮箱地址');
						             	else if(rs == 'failure') Ext.Msg.alert('提示','邮件发送失败,请确认邮件地址!');
						             	else{						             		
						             		Ext.Msg.alert('提示','邮件发送成功!');
						             	}
						             }							            					            
						        });						        
				            }
				            else{
				            	Ext.Msg.alert('提示','请输入正确的email地址');
				            }
				        }
					}                 
	            },              
	            {
	                xtype:'textfield',
	                fieldLabel: 'Email',
	                anchor: '70%',
	                maxLength : 50,  
	                maxLengthText : '最大长度为50个字符',	 	                
	                emptyText:'请在这里填写Email',  
	                blankText:"Email不能为空，请填写！",
	                allowBlank: false ,                
	                id: 'forgetpasswordemail',
	                vtype:'email',
	                name : 'forgetpasswordemail'
	            },           
	            {
	                xtype:'textfield',
	                fieldLabel: '确认邀请码',
	                anchor: '40%',
	                style:'margin-left:-5px;margin-top:5px;',
	                labelWidth:75,  
	                labelAlign:'right',                               
	                id: 'confirmvalidatecode',
	                name : 'confirmvalidatecode'
	            },	                        
	            {
	                xtype:'textfield',
	                fieldLabel: '新密码',
	                anchor: '100%',
	                emptyText:'请在这里填写密码',  
	                maxLengthText :'密码长度不能超过20',  
	                maxLength : 20,  
	                blankText:"密码不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'forgetpassword',
	                inputType: 'password',
	                name : 'forgetpassword'
	            },
	            {
	                xtype:'textfield',
	                fieldLabel: '确认新密码',
	                anchor: '100%',
	                emptyText:'请在这里确认密码',  
	                maxLengthText :'密码长度不能超过20',  
	                maxLength : 20,  
	                blankText:"密码不能为空，请填写！",
	                allowBlank: false ,                  
	                id: 'forgetrepassword',                
	                inputType: 'password',
					listeners: {  
				        blur: function(){    
				        	if(Ext.getCmp('forgetpassword').getValue().replace(/^\s+|\s+$/g,"") != Ext.getCmp('forgetrepassword').getValue().replace(/^\s+|\s+$/g,"")){
				        		Ext.Msg.alert('提示','两次密码输入不对!');				        		
				        	}
				        }				        
					}				        
	            }]
	        }],
	        buttons: ['->', {
	            text: '保存',
	            iconCls : 'save',  
	            handler: onresetpassword           
	        }, 
	        {
	            text: '关闭',  
	            iconCls : 'close',  
	            handler: function() {ForgetPasswordWindow.hide();}          	            
	        }
	        ]
	    });	    
	    var ForgetPasswordWindow = Ext.create('Ext.window.Window', {  
	        width : 400,  
	        height : 300,  
	        layout: 'fit',  
	        plain : true,  
	        modal : true,  
	        maximizable : false,  
	        draggable : false,  
	        closable : false,  
	        resizable : false,  
	        items: [ForgetPasswordFormPanel] 
	    });	    
	    
	    
	   /***************************
	     * ## 登录函数(checkSubmitFlg:避免表单重复提交)
	   ****************************/  
	    var checkSubmitFlg = true;
	    function onload(){
			 var form = Ext.getCmp('loginForm');
			 if(form.isValid() && checkSubmitFlg == true){
			 	 var cookie = getCookie('infocnUID');
			 	 var checkcode = Ext.getCmp('checkcode').getValue();
				 form.submit({
					 clientValidation:true,
					 waitMsg:'请稍候',
					 waitTitle:'正在验证登录',
					 wait : true,
				     progress:true, //此属性证明这是一个进度条
				     closable:false,				 
					 url:'CheckAccount',
					 method:'post',			
					 params:{checkcode:checkcode,cookie:cookie,fpR:fpR},						 
					 success:function(form,action){	
					 	checkSubmitFlg = false;
					 	//Setcookie('infocnUID',hex_md5(Ext.getCmp('username').getValue()));  	
						window.location.href = "HomePage/index.jsp";	 
					 },
					 failure:function(form,action){
					 	 errorcode = action.result.errorflag;
						 Ext.MessageBox.show({
		                     width:150,
		                     title:"登录失败",
		                     buttons: Ext.MessageBox.OK,
		                     msg:action.result.msg
		                 });
		                 if(errorcode == '0'){
		                 	Ext.getCmp('password').reset();
		                 }
		                 Ext.getCmp('checkcode').loadCodeImg();
		                 Ext.getCmp('checkcode').reset();
					 }        					 	
				});
			 }  	    
	    }
	    
	   /***************************
	     * ## 注册函数(checkRegisterFlg:避免表单重复提交)
	   ****************************/ 
	    var checkRegisterFlg = true;
	    function onregister(){
			 var form = Ext.getCmp('RegisterFormPanel');
			 if(checkRegisterFlg == false){
				Ext.MessageBox.show({
                     width:150,
                     title:"提示",
                     buttons: Ext.MessageBox.OK,
                     msg:'<center><strong>不能重复注册</strong><p>请刷新页面,继续注册!</center>'
                 });
			 }
			 else if(form.isValid() && checkRegisterFlg == true){
			 	 //var accountmd5 = hex_md5(Ext.getCmp('account').getValue());
				 form.submit({
					 clientValidation:true,
					 waitMsg:'请稍候',
					 waitTitle:'正在注册',
					 wait : true,
				     progress:true, //此属性证明这是一个进度条
				     closable:false,				 
					 url:'RegisterAccount',
					 method:'post',			
					 params:{fpR:fpR,cookie:getCookie("infocnUID")},					 
					 success:function(form,action){					
						//Setcookie('infocnUID',accountmd5);  //写入cookie	 					 	
					 	checkRegisterFlg = false;
					 	Ext.getCmp('RegisterFormPanel').form.reset();
					 	RegisterWindow.hide();
						Ext.MessageBox.show({
		                     width:150,
		                     title:"注册成功",
		                     buttons: Ext.MessageBox.OK,
		                     msg:'<center><strong>您的信息已经提交!</strong><p>我们会尽快给您配置数据<p>如有问题直接拨打电话:021-53560303</center>'
		                 });
		                 checkemailvalidationFlg = true;
					 },
					 failure:function(form,action){
					 	 checkemailvalidationFlg = true;
						 Ext.MessageBox.show({
		                     width:150,
		                     title:"注册失败",
		                     buttons: Ext.MessageBox.OK,
		                     msg:action.result.msg
		                 });
		                 if(action.result.error == '1'){
		                 	Ext.getCmp('confirmpassword').reset();
		                 	Ext.getCmp('confirmpassword').focus(true,true);
		                 }
		                 else{
		                 	Ext.getCmp('RegisterFormPanel').form.reset();
		                 }
					 }        					 	
				});
			 }  	    
	    }
	    
	   /***************************
	     * ## 忘记密码函数
	   ****************************/ 
	    function onresetpassword(){
			 var form = Ext.getCmp('ForgetPasswordFormPanel');
			 if(form.isValid()){
				 form.submit({
					 clientValidation:true,
					 waitMsg:'请稍候',
					 waitTitle:'正在修改',
					 wait : true,
				     progress:true, //此属性证明这是一个进度条
				     closable:false,				 
					 url:'ResetPassword',
					 method:'post',							 
					 success:function(form,action){						 					 	
					 	Ext.getCmp('ForgetPasswordFormPanel').form.reset();
					 	ForgetPasswordWindow.hide();
						Ext.Msg.alert('提示','修改成功!');
					 },
					 failure:function(form,action){
					 	 Ext.MessageBox.show({
		                     width:150,
		                     title:"注册失败",
		                     buttons: Ext.MessageBox.OK,
		                     msg:action.result.msg
		                 });
					 }        					 	
				});
			 }  	    
	    }	     
     }    
});  