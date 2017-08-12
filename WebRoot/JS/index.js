Ext.onReady(function(){
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
   /***************************
     * ## 模糊筛选框的tips
   ****************************/    
	var updateTip = function(field){  
	    if(field.rendered){  
	        field.getEl().dom.setAttribute("ext:qtip", "输入'all或所有'还原树");  
	    }  
	};  	
   /***************************
     * ## 获取登录用户名
   ****************************/
    var Logo_Account = Ext.getDom("logo_account_id").innerText;  
   
   /***************************
     * ## 树点击事件参数
   ****************************/    
	var Transfer_Control = 0;
    var Random_Num=Math.floor(Math.random()*100000);  //solve iframe not refresh in time
 	var SearchTextFieldWidth = 113;
 	var activeaccording_id = 1;
   /***************************
     * ## 基础数据库中的树形结构
     * 	%% West_Nativate_Tree_One,Panel_ID:West_Nativate_Tree_Div
   ****************************/
    var West_Nativate_Loader_One= new Ext.tree.TreeLoader({ 
    	dataUrl : 'GetSysFunctiontree?flag=0'
    }); 
	var West_Nativate_Root_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_Loader_One
	});
    var West_Nativate_Tree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_Tree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_Tree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_Loader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_Root_One/*,
		listeners: {
	        'beforeload': function(){
	            loading = new Ext.LoadMask(Ext.get(this.getEl()),{
	               msg : 'Loading...',
	               removeMask : true// 完成后移除
	            });            
	            loading.show();
        	},
	        'afterload': function(){loading.hide();}
	    }*/        
    });
    West_Nativate_Tree_One.render();      
	West_Nativate_Tree_One.on('click', function (node){
      if(node.attributes.change){  
      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
      	var n = centerPanel.getComponent(node.attributes.change);      	
        if (!n&&node.attributes.change&&node.attributes.change!="null") {
        	if(Transfer_Control == 0){ 
        		var treeid = 1;
         		var n = centerPanel.add({   
        			id:node.attributes.change,   
        			title:'<center>'+node.text+'</center>',  
        			closeAction : 'close',
        			closable:true,  
        			tabTip : node.text,
        			html:'<iframe src=../CoreData/'+node.attributes.change+'?treeid=1&nodeid='+node.id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
        			iconCls : 'tab',
        			listeners:{
        				beforeclose:function(p){
        					var activeTab = centerPanel.getActiveTab();        					
        					fun_SaveloginTime(activeTab.id);
        				}
        			}
        		});           	
        	}
        	else if(Transfer_Control == 1){ 
         		var n = centerPanel.add({   
        			id:node.attributes.change,   
        			title:'<center>'+node.text+'</center>',  
        			closeAction : 'close',
        			closable:true,  
        			tabTip : node.text,
        			html:'<iframe src=../Province/'+node.attributes.change+'?Province='+encodeURI(encodeURI(node.text))+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
        			iconCls : 'tab'
        		}); 
        	}         
        }
        	centerPanel.setActiveTab(n); 
        	return true; 
      }
      else{ 
       		node.toggle(); 
      }                               
	});    
    
   /***************************
     * ## 新兴行业热点板块区的树形结构
     * 	%% West_Nativate_EmergingIndustryTree_One,Panel_ID:West_EmergingIndustryTree_Div    
   ****************************/
	/*
    var West_Nativate_EmergingIndustryLoader_One= new Ext.tree.TreeLoader({ 
    	dataUrl : 'GetEmergingIndustrySysFunctiontree?flag=0'
    }); 
	var West_Nativate_EmergingIndustryRoot_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_EmergingIndustryLoader_One
	});
    var West_Nativate_EmergingIndustryTree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_EmergingIndustryTree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_EmergingIndustryTree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_EmergingIndustryLoader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_EmergingIndustryRoot_One       
    });
    West_Nativate_EmergingIndustryTree_One.render();
	West_Nativate_EmergingIndustryTree_One.on('click', function (node){
	  var node_id = node.id;
	  if(node_id.indexOf("_"))
	  	node_id = node_id.split("_")[0];	  
      if(node.attributes.change){  
      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
      	var n = centerPanel.getComponent(node.attributes.change);      	
        if (!n&&node.attributes.change&&node.attributes.change!="null") {
    		var treeid = 11;
     		var n = centerPanel.add({   
    			id:node.attributes.change,   
    			title:'<center>'+node.text+'</center>',  
    			closeAction : 'close',
    			closable:true,  
    			tabTip : node.text,
    			html:'<iframe src=../CoreData/'+node.attributes.change+'?treeid=11&nodeid='+node_id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
    			iconCls : 'tab',
    			listeners:{
    				beforeclose:function(p){
    					var activeTab = centerPanel.getActiveTab();        					
    					fun_SaveloginTime(activeTab.id);
    				}
    			}
    		});           	       
        }
        	centerPanel.setActiveTab(n); 
        	return true; 
      }
      else{ 
       		node.toggle(); 
      }                               
	});
	*/
	
   /***************************
     * ## 年度热点行业板块区的树形结构
     * 	%% West_Nativate_AnnualHotIndustryTree_One,Panel_ID:West_AnnualHotIndustryTree_Div    
   ****************************/	
    /*var West_Nativate_AnnualHotIndustryLoader_One= new Ext.tree.TreeLoader({ 
    	dataUrl : 'GetAnnualHotIndustrySysFunctiontree?flag=0'
    }); 
	var West_Nativate_AnnualHotIndustryRoot_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_AnnualHotIndustryLoader_One
	});
    var West_Nativate_AnnualHotIndustryTree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_AnnualHotIndustryTree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_AnnualHotIndustryTree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_AnnualHotIndustryLoader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_AnnualHotIndustryLoader_One       
    });
    West_Nativate_AnnualHotIndustryTree_One.render(); 
	West_Nativate_AnnualHotIndustryTree_One.on('click', function (node){
      if(node.attributes.change){  
      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
      	var n = centerPanel.getComponent(node.attributes.change);      	
        if (!n&&node.attributes.change&&node.attributes.change!="null") {
    		var treeid = 999;
     		var n = centerPanel.add({   
    			id:node.attributes.change,   
    			title:'<center>'+node.text+'</center>',  
    			closeAction : 'close',
    			closable:true,  
    			tabTip : node.text,
    			html:'<iframe src=../CoreData/'+node.attributes.change+'?treeid=999&nodeid='+node.id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
    			iconCls : 'tab',
    			listeners:{
    				beforeclose:function(p){
    					var activeTab = centerPanel.getActiveTab();        					
    					fun_SaveloginTime(activeTab.id);
    				}
    			}
    		});           	       
        }
        	centerPanel.setActiveTab(n); 
        	return true; 
      }
      else{ 
       		node.toggle(); 
      }                               
	});  
	*/     
   /***************************   
     * ##数据整合区的树形结构
     *  %%West_Nativate_AnalysisTree_One,Panel_ID:West_Nativate_AnalysisTree_Div
   ****************************/
	/*
    var West_Nativate_AnalysisLoader_One= new Ext.tree.TreeLoader({  
        dataUrl : 'GetAnalysisSysFunctiontree?flag=0'
        }); 
	var West_Nativate_AnalysisRoot_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_AnalysisLoader_One
		});
    var West_Nativate_AnalysisTree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_AnalysisTree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_AnalysisTree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_AnalysisLoader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_AnalysisRoot_One
    });
    West_Nativate_AnalysisTree_One.render(); 
    
	West_Nativate_AnalysisTree_One.on('click', function (node){
      if(node.attributes.change){  
      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
      	var n = centerPanel.getComponent(node.attributes.change);      	
        if (!n&&node.attributes.change&&node.attributes.change!="null") {
        	var treeid = 2;
     		var n = centerPanel.add({   
    			id:node.attributes.change,   
    			title:'<center>'+node.text+'</center>',  
    			closeAction : 'close',
    			closable:true,  
    			tabTip : node.text,
    			html:'<iframe src=../CoreAnalysisData/'+node.attributes.change+'?treeid=2&nodeid='+node.id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
    			iconCls : 'tab'
    		});           	      
        }
        	centerPanel.setActiveTab(n); 
        	return true; 
       }
       else{ 
       		node.toggle(); 
       }                               
	 }); 
	 */
        
   /***************************
     * ##治疗领域行业分析研究的树形结构【Deprecated】
     * 	%% West_Nativate_ReportTree_One,Panel_ID:West_Nativate_ReportTree_Div
   ****************************/    
    /*
    var West_Nativate_ReportLoader_One= new Ext.tree.TreeLoader({  
        dataUrl : 'GetReportSysFunctiontree?flag=0'
        }); 
	var West_Nativate_ReportRoot_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_ReportLoader_One
		});
    var West_Nativate_ReportTree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_ReportTree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_ReportTree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_ReportLoader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_ReportRoot_One
    });
    West_Nativate_ReportTree_One.render(); 
    
	West_Nativate_ReportTree_One.on('click', function (node){
		if(node.attributes.change){  
	      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
	      	var page_change = node.attributes.change;
	      	var n = centerPanel.getComponent(node.attributes.change);
	      	var flag = node.attributes.flag; 
	      	var Chapter_id = page_change;
	        if (!n && page_change && page_change!="null") {
	        	var treeid = 3;
	        	if(flag == 1){
		     		var n = centerPanel.add({   
		    			id:page_change,   
		    			title:'<center>'+node.text+'</center>',  
		    			closeAction : 'close',
		    			closable:true,  
		    			tabTip : node.text,
		    			html:'<iframe src=../Reports/Report.jsp?Chapter_id='+Chapter_id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
		    			iconCls : 'tab'
		    		}); 
	        	}
	        	else if(flag == 100){
		     		var n = centerPanel.add({   
		    			id:page_change,   
		    			title:'<center>'+node.text+'</center>',  
		    			closeAction : 'close',
		    			closable:true,  
		    			tabTip : node.text,
		    			html:'<iframe src=../Reports/Special_Subjects/'+page_change+'?Chapter_id='+Chapter_id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
		    			iconCls : 'tab'
		    		}); 	        		
	        	}
	        }
        	centerPanel.setActiveTab(n); 
        	return true; 
       }
       else{ 
       		node.toggle(); 
       }        
	 });    
    */ 
    
   /***************************
     * ##鉴智洞察的树形结构【Deprecated】
     * 	%% West_Nativate_InsightTree_One,Panel_ID:West_Nativate_InsightTree_Div
   ****************************/    
   /*
    var West_Nativate_InsightLoader_One= new Ext.tree.TreeLoader({  
        dataUrl : 'GetInsightSysFunctiontree?flag=0'
        }); 
	var West_Nativate_InsightRoot_One=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:West_Nativate_InsightLoader_One
		});
    var West_Nativate_InsightTree_One=new Ext.tree.TreePanel({        
        renderTo:"West_Nativate_InsightTree_Div",//如果使用renderTo，则不能使用setRootNode()方法，需要在TreePanel中设置root属性
        id : 'West_Nativate_InsightTree_One',
        plain:true,
        baseCls:"x-plain",
        loader:West_Nativate_InsightLoader_One,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:West_Nativate_InsightRoot_One
    });
    West_Nativate_InsightTree_One.render(); 
    
	West_Nativate_InsightTree_One.on('click', function (node){
		if(node.attributes.change){  
	      	Ext.get('content-iframe').dom.src = node.attributes.change; //重要语句
	      	var page_change = node.attributes.change;
	      	var n = centerPanel.getComponent(node.attributes.change);
	      	var flag = node.attributes.flag; 
	      	var Insight_id = page_change.replace(".jsp","");
	        if (!n && page_change && page_change!="null") {
	        	var treeid = 4;
	     		var n = centerPanel.add({   
	    			id:page_change,   
	    			title:'<center>'+node.text+'</center>',  
	    			closeAction : 'close',
	    			closable:true,  
	    			tabTip : node.text,
	    			html:'<iframe src=../Insight/Insights.jsp?Insight_id='+Insight_id+'&Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
	    			iconCls : 'tab'
	    		}); 	        
	        }
        	centerPanel.setActiveTab(n); 
        	return true; 
       }
       else{ 
       		node.toggle(); 
       }        
	 });    
        
    */       
   /***************************
     * ## 主页是地图导航    
   ****************************/
    var centerPanel = new Ext.TabPanel({
	    renderTo:'centerPanel',
	    resizeTabs:true, // turn on tab resizing
	    minTabWidth: 100,	    
	    tabWidth:200,
	    activeTab: 0,
	    enableTabScroll:true,
	    plugins:new Ext.ux.TabCloseMenu(),
	    defaults: {autoScroll:true},
		onTitleDblClick: function (e, target, o) { 
			var t = this.findTargets(e); 	
			if(t.item.id != 'content-iframe'){
			    if (t.item.fireEvent('beforeclose', t.item) !== false) { 		
			    	t.item.fireEvent('close', t.item); 	
			    	this.remove(t.item);
				}
			}
		}	    
	    /*items:[{
	            title: '<center>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp页</center>',
	            id:'content-iframe', 
	            html: '<iframe id="content-iframe" frameborder="no" style="width:100%;height:100%" src="map.jsp?subjectid=1" scrolling="yes"></iframe>',
	            iconCls : 'tab',
	            tabTip   : '首页'
	        }]*/
	});        		

 	    
   /***************************
     * ## 首页整体布局
     * 	@@： West是主要导航
     * 		%%: Tbar_One是基础数据库的工具栏
     * 		%%: Tbar_Two是新兴行业数据库的工具栏
     * 		%%: Tbar_Three是年度热点的工具栏
     * 	@@： North是公司logo以及用户登录名
     * 	@@： CenterPanel是地图导航
   ****************************/	    
   var Tbar_One=new Ext.Toolbar({plain:true,id:'Tbar_One'});     
   Tbar_One.add(       	   
	   '-',{xtype:'tbspacer'},{xtype:'tbspacer'},
	   {xtype : 'textfield',emptyText:"关键字查找表",id :'Search_One',width:113,
	   		listeners: {
				specialkey:function(textfield,e){
					if (e.getKey() == e.ENTER) {
						var params = replaceAll(textfield.getValue()," ","");
						if(params.length>0)
							AsyncLoadTreeRoot('search',replaceAll(textfield.getValue()," ",""),1);
					}
				},
				blur : function(textfield){},
		        render : updateTip,  
		        change : updateTip  				
	   		}
	   },
	   '->',
	   {xtype:'tbspacer'},
	   '-',{tooltip: '刷新',iconCls: 'database_refresh',id:'overall',handler : function(){AsyncLoadTreeRoot('refresh',replaceAll("all"," ",""),1);}},
	   '-',{tooltip: 'Expand All',iconCls: 'icon-expand-all',id:'root_expand',handler : function(){ExpColTreeRoot('expand',1);}},
	   '-',{tooltip: 'Collapse All',iconCls: 'icon-collapse-all',id:'root_collapse',handler : function(){ExpColTreeRoot('collapse',1);}},
	   '->'/*,
	   {text:'切换',tooltip: '切换导航',iconCls: 'tag',id:'data_view_tree',handler:DataView_Transfer}
	   */
	);
	
   var Tbar_Two=new Ext.Toolbar({plain:true,id:'Tbar_Two'});     
   Tbar_Two.add(       	   
	   '-',{xtype:'tbspacer'},{xtype:'tbspacer'},
	   {xtype : 'textfield',emptyText:"关键字查找表",id :'Search_Two',width:113,
	   		listeners: {
				specialkey:function(textfield,e){
					if (e.getKey() == e.ENTER) {
						var params = replaceAll(textfield.getValue()," ","");
						if(params.length>0)
							AsyncLoadTreeRoot('search',replaceAll(textfield.getValue()," ",""),11);
					}
				},
				blur : function(textfield){},
		        render : updateTip,  
		        change : updateTip  				
	   		}
	   },
	   '->',
	   {xtype:'tbspacer'},
	   '-',{tooltip: '刷新',iconCls: 'database_refresh',id:'emergingindustry',handler : function(){AsyncLoadTreeRoot('refresh',replaceAll("all"," ",""),11);}},
	   '-',{tooltip: 'Expand All',iconCls: 'icon-expand-all',id:'emergingindustry_root_expand',handler : function(){ExpColTreeRoot('expand',11);}},
	   '-',{tooltip: 'Collapse All',iconCls: 'icon-collapse-all',id:'emergingindustry_root_collapse',handler : function(){ExpColTreeRoot('collapse',11);}}
	);
	
   var Tbar_Three=new Ext.Toolbar({plain:true,id:'Tbar_Three'});     
   Tbar_Three.add(       	   
	   '-',{xtype:'tbspacer'},{xtype:'tbspacer'},
	   {xtype : 'textfield',emptyText:"关键字查找表",id :'Search_Three',width:113,
	   		listeners: {
				specialkey:function(textfield,e){
					if (e.getKey() == e.ENTER) {
						var params = replaceAll(textfield.getValue()," ","");
						if(params.length>0)
							AsyncLoadTreeRoot('search',replaceAll(textfield.getValue()," ",""),999);
					}
				},
				blur : function(textfield){},
		        render : updateTip,  
		        change : updateTip  				
	   		}
	   },
	   '->',
	   {xtype:'tbspacer'},
	   '-',{tooltip: '刷新',iconCls: 'database_refresh',id:'annualhotindustry',handler : function(){AsyncLoadTreeRoot('refresh',replaceAll("all"," ",""),999);}},
	   '-',{tooltip: 'Expand All',iconCls: 'icon-expand-all',id:'annualhotindustry_root_expand',handler : function(){ExpColTreeRoot('expand',999);}},
	   '-',{tooltip: 'Collapse All',iconCls: 'icon-collapse-all',id:'annualhotindustry_root_collapse',handler : function(){ExpColTreeRoot('collapse',999);}}
	);	
			
    /*var Transfer_Control = 0; */ 
    function DataView_Transfer(){
        if(Transfer_Control ==0){
        	West_Nativate_Tree_One.loader.dataUrl='GetTransferSysFunctiontree';        	
    		West_Nativate_Tree_One.getRootNode().reload();
    		Transfer_Control = 1;
    		expand_rootnode(West_Nativate_Tree_One);
        }else{
			West_Nativate_Tree_One.loader.dataUrl='GetSysFunctiontree';            
    		West_Nativate_Tree_One.getRootNode().reload();
    		Transfer_Control = 0;	
    		expand_rootnode(West_Nativate_Tree_One);
        }	            
	}		
    var Viewport = new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {
      	    region : 'north',      	    
      	    margins:'1 3 0 3', 
      	    contentEl : 'top_panel_logo',
      	    height:42
      	  },
      	  {
      	  	region : 'west',
      	  	width : 225,
      	  	split : true,
      	  	collapsible:true,
      	  	layout:'accordion',	
      	  	id:'portaccount',
      	  	margins:'0 0 3 3',
            cmargins: '0 3 3 3',
            layoutConfig:{
	            animate:true,
	            fill:true},
      	  	title : '<font size = 2>功能导航栏</font>',
      	  	items: [
      	  	  {
                title:'基础数据区',
                border:false,
                tbar : Tbar_One,
                items:[West_Nativate_Tree_One],
                containerScroll: true,
      	  		autoScroll:true, 
                iconCls:'viewport1',
                listeners : {
	            	'expand' : function(p){
	            		activeaccording_id = 1;
	            		Ext.getCmp('Search_One').setWidth(SearchTextFieldWidth);	            		
	            		//SearchTextFieldWidth = Ext.getCmp('West_Nativate_Tree_One').getWidth();
	            	}	            	
                }
              }
              /*,
			  {
                title:'新兴行业热点版块区',
                border:false,
                tbar:Tbar_Two,
                items:[West_Nativate_EmergingIndustryTree_One],
                containerScroll: true,
      	  		autoScroll:true,
                iconCls:'viewport6',
	            listeners : {
	            	'expand' : function(p){
  						expand_rootnode(West_Nativate_EmergingIndustryTree_One);
  						activeaccording_id = 11;
	            		Ext.getCmp('Search_Two').setWidth(SearchTextFieldWidth);	            		
	            		//SearchTextFieldWidth = Ext.getCmp('West_Nativate_EmergingIndustryTree_One').getWidth();  						
	            	}
	            }
              }*/,
              /*
			  {
                title:'<font color="#ff6633">年度热点行业</font>',
                border:false,
                tbar:Tbar_Three,
                items:[West_Nativate_AnnualHotIndustryTree_One],
                containerScroll: true,
      	  		autoScroll:true,
                iconCls:'viewport_annual',
	            listeners : {
	            	'expand' : function(p){
  						expand_rootnode(West_Nativate_AnnualHotIndustryTree_One);
  						activeaccording_id = 999;
	            		Ext.getCmp('Search_Three').setWidth(SearchTextFieldWidth);	            		
	            		//SearchTextFieldWidth = Ext.getCmp('West_Nativate_AnnualHotIndustryTree_One').getWidth();  						
	            	}
	            }
              }*/
              /*,              
              {
                title:'数据整合区',
                border:false,
                items:[West_Nativate_AnalysisTree_One],
                containerScroll: true,
      	  		autoScroll:true,
                iconCls:'viewport2',
	            listeners : {
	            	'expand' : function(p){
  						expand_rootnode(West_Nativate_AnalysisTree_One);		            
	            	},
	            	'afterRender' : function(){}
	            }                
              } */           
              /*{
                title:'高技术产业研究',
                border:false,
                //items:[West_Nativate_AnalysisTree_One],
                containerScroll: true,
      	  		autoScroll:true,
                iconCls:'viewport6',
	            listeners : {
	            	'expand' : function(p){
  						//expand_rootnode(West_Nativate_AnalysisTree_One);		            
	            	}
	            }
              },              
              {
                title:'治疗领域行业分析研究',
                border:false,
                containerScroll: true,
      	  		autoScroll:true, 
      	  		//html:'<iframe src=../Reports/Reports.jsp width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
                iconCls:'viewport3',
                items:[West_Nativate_ReportTree_One],
	            listeners : {
	            	'expand' : function(p){
  						expand_rootnode(West_Nativate_ReportTree_One);		            
	            	}
	            }                
              },           
              {
                title:'鉴智洞察',
                border:false,
                containerScroll: true,
      	  		autoScroll:true,                
                items:[West_Nativate_InsightTree_One],
                iconCls:'viewport4',
	            listeners : {
	            	'expand' : function(p){
  						expand_rootnode(West_Nativate_InsightTree_One);		            
	            	}
	            }                 
              }
              {
                title:'个人管理',
                border:false,
                containerScroll: true,
      	  		autoScroll:true,                
                iconCls:'viewport5'                 
              }*/              
      	  	]},
      	  {				
			region : 'center',
			margins:'0 3 3 0',
            cmargins: '0 3 3 3',
			layout:'fit',
            items:[centerPanel]
		  }	  
      	]
      });
                        
   /***************************
     * ## 左侧树的过滤树
     * 	@@： add fieldtext event to filter tree
     * 	@@： should put this last to load china_tree panel. Or pull errors.
   ****************************/	
	/* var tree = West_Nativate_Tree_One;
     var filter = new Ext.tree.TreeFilter(tree,{
     	clearBlank  :true,
     	autoClear : true
     });
     var hiddenPkgs = [];
     var field = Ext.get('Search_One');
     field.addListener('keyup',function(e){
     	var text = field.dom.value;
     	Ext.each(hiddenPkgs, function(n){
     		n.ui.show(); 
     	});
     	if(!text){
     		filter.clear();
     		return;
     	}
     	tree.expandAll();
     	var re = new RegExp(Ext.escapeRe(text),'i');
     	filter.filterBy(function(n){
     		return !n.isLeaf() || re.test(n.text);
     	});
     	niddenPkgs = [];
     	tree.getRootNode().cascade(function(n){
     		if(!n.isLeaf() && n.ui.ctNode.offsetHeight <3){
     			n.ui.hide();
     			hiddenPkgs.push(n);
     		}
     	});
     });
     */   
     
   /***************************
     * ## 默认展开第一层树
   ****************************/
   function expand_rootnode(_treegrid){
		_treegrid.getRootNode().expand(false, true, function() {  
		    var childNodes = _treegrid.getRootNode().childNodes;  
			for(var i=0;i<childNodes.length;i++){
				var path = childNodes[i].getPath('id');
				_treegrid.expandPath(path,"id");
			}
		}); 
   }
   expand_rootnode(West_Nativate_Tree_One);
   //expand_rootnode(West_Nativate_EmergingIndustryTree_One);
   //expand_rootnode(West_Nativate_AnnualHotIndustryTree_One);
		
   /**************************
    * ##动态加载数节点
   ***************************/
   function AsyncLoadTreeRoot(flag,_params,_treeid){
   		loadMarsk.show();
   		var Tree; 
   		if(_treeid == 1) Tree = West_Nativate_Tree_One;
   		else if(_treeid == 11) Tree = West_Nativate_EmergingIndustryTree_One;
   		else if(_treeid == 999) Tree = West_Nativate_AnnualHotIndustryTree_One;		
	    var WestLoad= new Ext.tree.TreeLoader({ 
	    	dataUrl : 'GetSysSearchingFunctiontree?treeid='+_treeid+'&params=' + encodeURI(encodeURI(_params))
	    }); 
		var WestRoot=new Ext.tree.AsyncTreeNode({
			expanded:true,
			loader:WestLoad
		});
		Tree.setRootNode(WestRoot); 
		WestRoot.expand(false,false);
		if(flag == 'refresh'){
			WestRoot.expand(false,false);
			expand_rootnode(Tree);
		}
		else if(flag == 'search'){			
			WestRoot.expand(true,false);
		}		
	   	WestLoad.addListener('load',function(){loadMarsk.hide();});
   }
   
   /**************************
    * ##expand/collase树
   ***************************/
   function ExpColTreeRoot(action,_treeid){
   		var Tree; 
   		if(_treeid == 1) Tree = West_Nativate_Tree_One;
   		else if(_treeid == 11) Tree = West_Nativate_EmergingIndustryTree_One;
   		else if(_treeid == 999) Tree = West_Nativate_AnnualHotIndustryTree_One;	
   		if(action == 'expand')
   			Tree.root.expand(true);
   		else if(action == 'collapse')
   			Tree.root.collapse(true);
   }
               
   /***************************
     * ## 注销按钮事件
   ****************************/
   	Ext.get("logoout_account_img").on("click",function(){
   		Ext.MessageBox.confirm('提示','确定需要注销关闭系统?',callback);
   		function callback(id){
   			if(id == 'yes'){
   				window.location.href = '../LoginRedirect';
   			}
   		}
   	});
   	
   /***************************
     * ## 消息按钮事件
   ****************************/
   	/*
   	Ext.get("mail").on("click",function(){
   		window.location.href = '../LoginRedirect';
   	}); 
   	*/
      
   /***************************
     * ## 权限判断是否是超级用户,需要系统管理模块
   ****************************/
	Ext.Ajax.request( {  
		url  : '../GetSuperAdmin',
		method : 'post', 
		success : function(response, options) {
			var panelstr = trim(response.responseText);
			if(panelstr.length>0){
				CreateSystemManamentTreePanel();
				Ext.getCmp('portaccount').add(eval(panelstr));
   				Ext.getCmp('portaccount').doLayout(); 
			}
		}
	});
	
	function CreateSystemManamentTreePanel(){
		if (Ext.getCmp("West_SM_Tree_One") != undefined) {
		    Ext.getCmp("West_SM_Tree_One").remove();
		}
	    var West_SM_Loader_One= new Ext.tree.TreeLoader({ 
	    	dataUrl : 'GetSysManagementSysFunctiontree'
	    }); 
		var West_SM_Root_One=new Ext.tree.AsyncTreeNode({
			expanded:true,
			loader:West_SM_Loader_One
		});
	    var West_SM_Tree_One=new Ext.tree.TreePanel({
	        id : 'West_SM_Tree_One',
	        plain:true,
	        baseCls:'x-plain',
	        loader:West_SM_Loader_One,
	        frame:true,
	        autoHeight:true,
	        autoWidth:true,	
	        autoScroll:true, 
	        animate:true, 
	        enableDD:false, 	        
	        containerScroll: true, 
	        border:false,
	        rootVisible:false,
	        root:West_SM_Root_One
	    }); 
	    
		West_SM_Tree_One.on('click', function (node){
	      if(node.attributes.change){  
	      	Ext.get('content-iframe').dom.src = node.attributes.change; 
	      	var n = centerPanel.getComponent(node.attributes.change);      	
	        if (!n&&node.attributes.change&&node.attributes.change!="null") { 
	     		var n = centerPanel.add({   
	    			id:node.attributes.change,   
	    			title:'<center>'+node.text+'</center>',  
	    			closeAction : 'close',
	    			closable:true,  
	    			tabTip : node.text,
	    			html:'<iframe src=../Management/'+node.attributes.change+'?Random_Num='+Random_Num+' width="100%" height="100%" frameborder="no" scrolling="yes"></iframe>',
	    			iconCls : 'tab'
	    		});           	      
	        }
	        	centerPanel.setActiveTab(n); 
	        	return true; 
	       }
	       else{ 
	       		node.toggle(); 
	       }                               
		 }); 
	}
		
	/*******************************
	 * ## 记录登录时间   
	********************************/
	var c = 0;
	var updateMsg = function(){
		c = c + 1;
		document.getElementById('loginMTime').innerHTML = "已登录:" + c + "(秒)";
    }
    var task = {
        run: updateMsg,
        interval: 1000
    }
    var runner = new Ext.util.TaskRunner();
    runner.start(task);
    
    
   /***************************
     * ## 保存tab登录时长
   ****************************/  	
	function fun_SaveloginTime(id){
		;
		//alert(centerPanel.get(1).id);
		/*Ext.Ajax.request({      
			 url: 'SaveloginTime',
			 params: {tabStr : id},  
             callback : function(options, success, response) {}
        });
        */        		
	}
	
	/*******************************
	 * ## 提示关闭事件
	********************************/    
    /*window.onbeforeunload = function(){
    	var tabStr = '';
    	for(var i = 1; i<centerPanel.items.getCount(); i++){
    		if(i == centerPanel.items.getCount()-1) tabStr = tabStr + centerPanel.get(i).id;
    		else tabStr = tabStr + centerPanel.get(i).id + ',';
    	}
		Ext.Ajax.request({      
			 url: 'SaveloginTime',      
			 params: {tabStr : tabStr},    
             callback : function(options, success, response) {}
        });        	
    	return "确定需要关闭浏览器?";
    }*/
	
	/*******************************
	 * ## 对基础数据区的叶子节点右键事件开始
	********************************/	
    West_Nativate_Tree_One.on('contextmenu', function(node, event) {// 声明菜单类型     	
		Ext.Ajax.request({      
			 url  : 'GetSysIndustryRightMenu_Rights',
			 method : 'post', 
             callback: function(options,success,response){
             		c_rights = response.responseText;
             		show(node,event,c_rights,1);
             }							            					            
        });        
	  event.preventDefault();// 阻止浏览器默认右键菜单显示      
	});
    /*West_Nativate_EmergingIndustryTree_One.on('contextmenu', function(node, event) {// 声明菜单类型     	
		Ext.Ajax.request({      
			 url  : 'GetSysIndustryRightMenu_Rights',
			 method : 'post', 
             callback: function(options,success,response){
             		c_rights = response.responseText;
             		show(node,event,c_rights,11);
             }							            					            
        });        
	  event.preventDefault();// 阻止浏览器默认右键菜单显示      
	});
	*/
    /*West_Nativate_AnnualHotIndustryTree_One.on('contextmenu', function(node, event) {// 声明菜单类型     	
		Ext.Ajax.request({      
			 url  : 'GetSysIndustryRightMenu_Rights',
			 method : 'post', 
             callback: function(options,success,response){
             		c_rights = response.responseText;
             		show(node,event,c_rights,999);
             }							            					            
        });        
	  event.preventDefault();// 阻止浏览器默认右键菜单显示      
	});*/
	
	function show(node,event,c_rights,_treeid){
	  if(node.isLeaf() && node.id.substring(0,1) == 'I' && node.id.substring(3,5) != '00' && node.id.substring(4,5) != '0') {
	  		var childNodeClickMenu = new Ext.menu.Menu({});
	  		childNodeClickMenu.addItem(fun_getRightmenu(2,node,centerPanel,Random_Num,_treeid));
	  		childNodeClickMenu.addItem(fun_getRightmenu(1,node,centerPanel,Random_Num,_treeid));
	  		if(c_rights == 0){
	  			childNodeClickMenu.addItem(fun_getRightmenu(4,node,centerPanel,Random_Num,_treeid));
	  			childNodeClickMenu.addItem(fun_getRightmenu(5,node,centerPanel,Random_Num,_treeid));
	  		}
	  		else if(c_rights != -999){
	  			childNodeClickMenu.addItem(fun_getRightmenu(c_rights,node,centerPanel,Random_Num,_treeid));	
	  		}
		 	childNodeClickMenu.showAt(event.getPoint());//menu的showAt，不要忘记			 		     
       }
       else if(node.isLeaf() && node.id.substring(0,1) == 'I' && node.id.substring(3,5) != '00' && node.id.substring(4,5) == '0'){
	  		var childNodeClickMenu = new Ext.menu.Menu({});
	  		childNodeClickMenu.addItem(fun_getRightmenu(2,node,centerPanel,Random_Num,_treeid));
	  		childNodeClickMenu.addItem(fun_getRightmenu(1,node,centerPanel,Random_Num,_treeid));
	  		childNodeClickMenu.addItem(fun_getRightmenu(3,node,centerPanel,Random_Num,_treeid));
	  		if(c_rights == 0){
	  			childNodeClickMenu.addItem(fun_getRightmenu(4,node,centerPanel,Random_Num,_treeid));
	  			childNodeClickMenu.addItem(fun_getRightmenu(5,node,centerPanel,Random_Num,_treeid));
	  		}
	  		else if(c_rights != -999){
	  			childNodeClickMenu.addItem(fun_getRightmenu(c_rights,node,centerPanel,Random_Num,_treeid));	
	  		}
		 	childNodeClickMenu.showAt(event.getPoint());		 		     
       }
       else if(node.isLeaf() && node.id.substring(0,1) == 's'){
	  		var childNodeClickMenu = new Ext.menu.Menu({});
	  		childNodeClickMenu.addItem(fun_getRightmenu(1,node,centerPanel,Random_Num,_treeid));
		 	childNodeClickMenu.showAt(event.getPoint());		 		            
       }
       else if(node.isLeaf() && node.id.substring(0,1) == 't'){ 
	  		var childNodeClickMenu = new Ext.menu.Menu({});
	  		childNodeClickMenu.addItem(fun_getRightmenu(1,node,centerPanel,Random_Num,_treeid));	 
		 	childNodeClickMenu.showAt(event.getPoint());		 		            
       }       
       else if(node.isLeaf() && node.id.substring(0,1) == 'I' && node.id.substring(3,5) == '00'){
	  		var childNodeClickMenu = new Ext.menu.Menu({});
	  		childNodeClickMenu.addItem(fun_getRightmenu(2,node,centerPanel,Random_Num,_treeid));
	  		childNodeClickMenu.addItem(fun_getRightmenu(1,node,centerPanel,Random_Num,_treeid));		  	
		 	childNodeClickMenu.showAt(event.getPoint());			 		     
       }
    }
		
	/*******************************
	 * ## 控制首页展示
	********************************/	
	firsttabpage = centerPanel.add(
		/*{
            title: '<center>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp页</center>',
            id:'content-iframe', 
            html: '<iframe id="content-iframe" frameborder="no" style="width:100%;height:100%" src="map.jsp?subjectid=1" scrolling="yes"></iframe>',
            iconCls : 'tab',
            tabTip   : '首页'
	    }
		{
            title: '<center>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp页</center>',
            id:'content-iframe', 
            html: '<iframe id="content-iframe" frameborder="no" style="width:100%;height:100%" src="industry.jsp?industrycode=1700" scrolling="yes"></iframe>',
            iconCls : 'tab',
            tabTip   : '首页'
	    }*/
		//AI主界面
		{
            title: '<center>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp页</center>',
            id:'content-iframe', 
            html: '<iframe id="content-iframe" frameborder="no" style="width:100%;height:100%" src="AI/CREADEV.html" scrolling="no"></iframe>',
            iconCls : 'tab',
            tabTip   : '首页'
	    }	    
    );
    centerPanel.setActiveTab(firsttabpage);
	
	/*******************************
	 * ## 初始化加载mask
	********************************/
	var loadMarsk = new Ext.LoadMask(Ext.getBody(),
	{
        msg : '初始化数据,请稍等...',
        removeMask : true
    });
    loadMarsk.show();    
	West_Nativate_Loader_One.addListener('load',function(){
		loadMarsk.hide();
	});
	
	/*******************************
	 * ## 定时获取在线人数  
	********************************/
	if(Logo_Account == "管理员"){
		var activeaccount_updateMsg = function(){
			Ext.Ajax.request({      
				 url  : '../ActionController/GetActiveAccount.jsp',
				 method : 'post', 
	             callback: function(options,success,response){
	             	var c = response.responseText; 
	             	if(c ==0)
	             		document.getElementById('activeaccount').innerHTML = "";
	             	else
	             		document.getElementById('activeaccount').innerHTML = "(当前在线人数:" + c + "人)";
	             }							            					            
	        });	
	    }
	    var activeaccount_task = {
	        run: activeaccount_updateMsg,
	        interval: 5000
	    }
	    var activeaccount_runner = new Ext.util.TaskRunner();
	    activeaccount_runner.start(activeaccount_task);	
	}
	
   /***************************
     * ## splitbar bodyresize事件
     * 	@@： 动态设定Search_One/Search_Two textfield的长度
   ****************************/      
 	Ext.getCmp('portaccount').on("bodyresize",function(){
 		if(activeaccording_id == 1){
 			SearchTextFieldWidth = Ext.getCmp('West_Nativate_Tree_One').getWidth() - 105;
  			Ext.getCmp('Search_One').setWidth(SearchTextFieldWidth);  			
 		}
  		else if(activeaccording_id == 11){
  			SearchTextFieldWidth = Ext.getCmp('West_Nativate_EmergingIndustryTree_One').getWidth() - 105;
  			Ext.getCmp('Search_Two').setWidth(SearchTextFieldWidth);  			  		
  		}
  		else if(activeaccording_id == 999){
  			SearchTextFieldWidth = Ext.getCmp('West_Nativate_AnnualHotIndustryTree_One').getWidth() - 105;
  			Ext.getCmp('Search_Three').setWidth(SearchTextFieldWidth);  			  	
  		}
  	});	
   	
		  
});