/***************************
     * ## ��ҳ���������ú���
     *   @@fun_getRightmenu
     *   	# 1����ҵ������
     *   	# 2����ҵ�¶�����
     *   	# 3����ҵ�о�����
     *      # 4��top20��ҵ
     *      # 5��top30~50��ҵ
****************************/  
/*����column������*/
function fun_getRightmenu(_type,node,centerPanel,Random_Num,_treeid){
  	var node_id = node.id;
  	if(node_id.indexOf("_") && node_id.substring(0,1)=='I')
  		node_id = node_id.split("_")[0];	
	if(_type == 1){
	   return [{ 
           text : '��ҵ�������', 
           iconCls : 'industry',
           handler : function() {  
           	  change = 'Year_' + node.attributes.change;
		      if(change){  
		      	Ext.get('content-iframe').dom.src = change; //��Ҫ���
		      	var n = centerPanel.getComponent(change);      	
		        if (!n&&change&&change!="null") {		        
		     		var n = centerPanel.add({   
		    			id:change,   
		    			title:'<center>'+ '�������_' + node.text+'</center>',  
		    			closeAction : 'close',
		    			closable:true,  
		    			tabTip : '�������_' + node.text,
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
               text : '��ҵ�¶�����', 
               iconCls : 'industry',
               handler : function() {  
               	  change = 'GL_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //��Ҫ���
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ '�¶�_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : '�¶�_' + node.text,
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
               text : '��ҵ�о�����', 
               iconCls : 'paper',
               // ���Ӳ˵�����¼� 
               handler : function() {  
               	  change = 'paper_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //��Ҫ���
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ '��ҵ����_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : '��ҵ����_' + node.text,
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
               text : 'top10��ҵ', 
               iconCls : 'company',
               handler : function() {  
               	  change = 'TOP10_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //��Ҫ���
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ 'top10��ҵ_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : 'top10��ҵ_' + node.text,
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
               text : 'top30��ҵ', 
               iconCls : 'company',
               handler : function() {  
               	  change = 'TOP50_' + node.attributes.change;
			      if(change){  
			      	Ext.get('content-iframe').dom.src = change; //��Ҫ���
			      	var n = centerPanel.getComponent(change);      	
			        if (!n&&change&&change!="null") {
			     		var n = centerPanel.add({   
			    			id:change,   
			    			title:'<center>'+ 'top30��ҵ_' + node.text+'</center>',  
			    			closeAction : 'close',
			    			closable:true,  
			    			tabTip : 'top30��ҵ_' + node.text,
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
                   text : '��ҵ����',
                   iconCls : 'leaf',
                   handler : function() {                   
                   		Ext.MessageBox.prompt("������Ҫ�޸Ĳ˵�������","",function(e,text){
	                   		if(e=="ok") {
	                   			Ext.Ajax.request({
	                   				async:false, //�����̨������ҳ���첽������
	                   				url : '././json/menudml_updateTreeNode.action?parentId='+node.id
	                   							+'&nodeName='+encodeURI(encodeURI(text)),
	                   				success : function(request) {
	                   					Ext.Msg.alert("��ʾ:","�˵��޸ĳɹ���");
	                   					treepanel.root.reload();
	                   					treepanel.root.expand(true, false);                					         				
	                   				},
	                   				failure : function(request) {
	                   					Ext.Msg.alert("��ʾ:","�˵��޸�ʧ�ܣ�");
	                   				}
	                   			});
	                   		}
                   	   });
                    }	                   
               }*/		
	}
	
	

}

