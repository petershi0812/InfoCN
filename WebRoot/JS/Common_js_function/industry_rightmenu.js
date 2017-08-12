/***************************
     * ## 该页面所有配置函数
     *   @@fun_getRightmenu
     *   	# 1：行业年数据
     *   	# 2：行业月度数据
     *   	# 3：行业研究报告
     *      # 4：top20企业
     *      # 5：top30~50企业
****************************/  
/*返回column的数组*/
function fun_getRightmenu(_type,node,centerPanel,Random_Num,_treeid){
  	var node_id = node.id;
  	if(node_id.indexOf("_") && node_id.substring(0,1)=='I')
  		node_id = node_id.split("_")[0];	
	if(_type == 1){
	   return [{ 
           text : '行业年度数据', 
           iconCls : 'industry',
           handler : function() {  
           	  change = 'Year_' + node.attributes.change;
		      if(change){  
		      	Ext.get('content-iframe').dom.src = change; //重要语句
		      	var n = centerPanel.getComponent(change);      	
		        if (!n&&change&&change!="null") {		        
		     		var n = centerPanel.add({   
		    			id:change,   
		    			title:'<center>'+ '年度数据_' + node.text+'</center>',  
		    			closeAction : 'close',
		    			closable:true,  
		    			tabTip : '年度数据_' + node.text,
		    			html:'<iframe src=../CoreData/'+change+'?treeid='+_treeid+'&nodeid=' + node_id + '&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
		    			iconCls : 'tab'
		    		});           	      
		        }
		        	centerPanel.setActiveTab(n); 
		        	return true; 
		       }               	               
	        }               		
        }];		
	}
	else if(_type == 2){
		return [{ 
               text : '行业月度数据', 
               iconCls : 'industry',
               handler : function() {  
               	  change = 'GL_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //重要语句
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ '月度_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : '月度_' + node.text,
			    			html:'<iframe src=../CoreData/'+change+'?treeid='+_treeid+'&nodeid=' + node_id + '&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
			    			iconCls : 'tab'
			    		});           	      
			        }
			        	centerPanel.setActiveTab(n); 
			        	return true; 
			       }               	               
		        }               		
            }];		
	}
	else if(_type == 3){
		return [{ 
               text : '行业研究报告', 
               iconCls : 'paper',
               // 增加菜单点击事件 
               handler : function() {  
               	  change = 'paper_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //重要语句
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ '行业报告_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : '行业报告_' + node.text,
			    			html:'<iframe src=../CoreData/'+change+'?treeid='+_treeid+'&nodeid=' + node_id + '&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
			    			iconCls : 'tab'
			    		});           	      
			        }
			        	centerPanel.setActiveTab(n); 
			        	return true; 
			       }               	               
		        }               		
            }];				
	}
	else if(_type == 4){
		return [{ 
               text : 'top10企业', 
               iconCls : 'company',
               handler : function() {  
               	  change = 'TOP10_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //重要语句
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ 'top10企业_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : 'top10企业_' + node.text,
			    			html:'<iframe src=../CoreData/'+change+'?treeid='+_treeid+'&nodeid=' + node_id + '&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
			    			iconCls : 'tab'
			    		});           	      
			        }
			        	centerPanel.setActiveTab(n); 
			        	return true; 
			       }               	               
		        }               		
            }];
		
	}
	else if(_type == 5){
		return [{ 
               text : 'top30企业', 
               iconCls : 'company',
               handler : function() {  
               	  change = 'TOP50_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //重要语句
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ 'top30企业_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : 'top30企业_' + node.text,
			    			html:'<iframe src=../CoreData/'+change+'?treeid='+_treeid+'&nodeid=' + node_id + '&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
			    			iconCls : 'tab'
			    		});           	      
			        }
			        	centerPanel.setActiveTab(n); 
			        	return true; 
			       }               	               
		        }               		
            }];
	}
	else{
            /*,                
            { 
                   text : '行业概览',
                   iconCls : 'leaf',
                   handler : function() {                   
                   		Ext.MessageBox.prompt("请输入要修改菜单新名称","",function(e,text){
	                   		if(e=="ok") {
	                   			Ext.Ajax.request({
	                   				async:false, //解决后台操作与页面异步的问题
	                   				url : '././json/menudml_updateTreeNode.action?parentId='+node.id
	                   							+'&nodeName='+encodeURI(encodeURI(text)),
	                   				success : function(request) {
	                   					Ext.Msg.alert("提示:","菜单修改成功！");
	                   					treepanel.root.reload();
	                   					treepanel.root.expand(true, false);                					         				
	                   				},
	                   				failure : function(request) {
	                   					Ext.Msg.alert("提示:","菜单修改失败！");
	                   				}
	                   			});
	                   		}
                   	   });
                    }	                   
               }*/		
	}
	
	

}

