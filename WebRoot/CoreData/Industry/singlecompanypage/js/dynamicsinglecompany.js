/*************************************************************************************************************************************
* ## 动态产生--行业分析数据库
**************************************************************************************************************************************/
function renderCompanyInfo(id,dist){
	var pageheight = document.body.clientHeight;
	/***************************
     * ## 公司简介   
    ****************************/	   
    var companyBrief = new Ext.FormPanel({
        defaultType: 'textarea',
        bodyStyle:'padding:5 5 5 5',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid', 
                width : '99.5%',
                height:pageheight*0.27-55, // 180 - 126 = 54
                hideLabel:true,
                readOnly:true,
                value:dist['companybrief']
            }]
    });	    
   /***************************
     * ## 公司主要核心主财务指标   
   ****************************/	   
    var companyKeyIndicators = new Ext.FormPanel({
        labelWidth: 110, 
        defaultType: 'numberFieldFormat',
        bodyStyle:'padding:5 5 5 5',
        border:false,
        labelAlign:'right',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业收入(千元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][0]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业利润(千元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][1]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '资产总额(千元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][2]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '工业总产值(千元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][3]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '从业人数(千元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][4]
            }            
            ]
    });
    
   /***************************
     * ## 主营业务板块   
   ****************************/	   
    var companyBusiness = new Ext.FormPanel({
        labelWidth: 80, 
        defaultType: 'textfield',   
        border:false,
        labelAlign:'right',
        bodyStyle:'padding:5 5 5 5',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务1',
                width : '95%',
                readOnly:true,
                value:dist['major_activity'][0].replace("null","")
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务2',
                width : '95%',
                readOnly:true,
                value:dist['major_activity'][1].replace("null","")
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务3',
                width : '95%',
                readOnly:true,
                value:dist['major_activity'][2].replace("null","")
            }    
            ]
    });    
    
    
  /***************************
     * ## 公司主要信息    
   ****************************/	   
    var companyInfo = new Ext.FormPanel({
        labelWidth: 80, 
        defaultType: 'textfield',
        labelAlign:'right',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '工商注册号',
                readOnly:true,
                width : '95%',
                value:dist['companymajorinfo'].split("#")[0]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '组织机构代码',
                readOnly:true,
                width : '95%',
                value:dist['companymajorinfo'].split("#")[1]
            },            
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '公司名称',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[2]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '电话',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[3]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '公司地址',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[4]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册时间',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[5]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '邮箱',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[6]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '行业',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'].split("#")[7]
            }                     
            ]
    });    
    
   /***************************
     * ## 公司股权结构   
   ****************************/	   
    var companyStockInfo = new Ext.FormPanel({
        labelWidth: 100, 
        defaultType: 'textfield',
        labelAlign:'right',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '法人代表',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[0]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册资本',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[1]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '企业类型',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[2]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东1及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[3]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东2及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[4]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东3及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[5]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东4及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[6]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东5及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companyequity'].split("#")[7]
            }             
            ]
    }); 
    
   /***************************
     * ## 公司大事件   
   ****************************/
    var itemarr = dist['companyevent'].split("|");  
    //var itemCollection = new Ext.util.MixedCollection();
    var itemsarray = [];    
	for (var i=0;i<itemarr.length;i++)
	{
		itemdist = {
			    		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid;', 
			            fieldLabel: itemarr[i].split("#")[0],
			            width : '95%',
			            readOnly:true,
			            xtype : 'label', 
						html: "<span style='font-size:13px'><a style='color:#000000;text-decoration:none;' href='"+itemarr[i].split("#")[2]+"' target='_blank'>"+itemarr[i].split("#")[1]+"</a></span>"
			       }
		itemsarray.push(itemdist);        	
	}
	
    var companyEvents = new Ext.FormPanel({
        labelWidth: 80, 
        labelAlign:'right',
        border:false,
        bodyStyle:'padding:5 5 5 5'
    });  
    if(dist['companyevent'].indexOf("#")>0){
	    companyEvents.add(itemsarray);
	    companyEvents.doLayout();
    }
    
    radarchartContainer_id = "radarchartContainer" + id;
    piechartContainer_id = "piechartContainer" + id;
	/***************************
     * ## 单页整体布局  
    ****************************/	 
	var dynamicPanel = new Ext.Panel({			
		layout : 'column',
		//id:id,
		autoHeight:true,
		autoWeight:true,
		border:false,
		bodyStyle:'background-color:#FFFFFF;',
		items:[
		//first row
		{
            title: '公司简介',
            layout:'fit',				
			style:'padding:5px 5px 5px 5px',
			columnWidth:.665,
			autoScroll:true,
			height:pageheight*0.25,
			items:[companyBrief]
		},
		{
            title: '关键指标',
            layout:'fit',
			style:'padding:5px 5px 5px 5px',
			autoScroll:true,
			columnWidth:.335,
			height:pageheight*0.25,
			items:[companyKeyIndicators]   
		},		
        //second rows
        {
            columnWidth:.333,
            height:pageheight*0.35,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '主营构成',
                height:pageheight*0.35-10,                    
                layout:'fit',
                fill : true,
                border:false,
				html : "<div id = '"+piechartContainer_id+"' style='height:100%;width:100%;'></div>"
            }]
        },
        {
            columnWidth:.333,
            height:pageheight*0.35,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '行业地位',
                height:pageheight*0.35-10,
                border:false,
                html : "<div id = '"+radarchartContainer_id+"' style='height:100%;width:100%;'></div>"
            }]
        },
        {
            columnWidth:.333,
            height:pageheight*0.35,
            style:'padding:5px 5px 5px 5px',
            autoScroll:true,
            items:[{
                title: '主营业务板块',
                border:false,
                items:[companyBusiness]
            }]
        },
        //third rows
        {
            columnWidth:.333,
            height:pageheight*0.4-32,
            autoScroll:true,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '公司主要信息',
                border:false,
                items:[companyInfo]
            }]
        },
        {
            columnWidth:.333,
            autoScroll:true,
            height:pageheight*0.4-32,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '公司股权结构',
                border:false,
                items:[companyStockInfo]
            }]
        },
        {
            columnWidth:.333,
            autoScroll:true,
            height:pageheight*0.4-32,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '公司大事件',
                border:false,
                items:[companyEvents]  
            }]
        }        
		]		
	});        
	return dynamicPanel;	
}

/*************************************************************************************************************************************
* ## 动态产生--AI企业数据库
**************************************************************************************************************************************/
function renderPPCompanyInfo(id,dist,flag){
	var pageheight = document.body.clientHeight;
	tabpanel_id = "tabpanel" + id;
	if(flag == 'public'){
	    yysrpieContainer_id = "yysrpieContainer" + id;
	    srblrpieContainer_id = "srblpieContainer" + id;
	    yycbpieContainer_id = "yycbpieContainer" + id;
	    yylrpieContainer_id = "yylrpieContainer" + id;
	    mlrpieContainer_id = "mlrpieContainer" + id; 
	}
	else if(flag == 'private'){
	    ratiobarContainer_id = "ratiobarContainer" + id;
	    tuneroverratiobarContainer_id = "tuneroverratiobarContainer" + id;
	    roibarContainer_id = "roibarContainer" + id;
	}
	/***************************
     * ## 公司简介   
    ****************************/	   
    var companyBrief = new Ext.FormPanel({
        defaultType: 'textarea',
        bodyStyle:'padding:5 5 5 5',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid', 
                width : '99.5%',
                height:pageheight*0.27-55, // 180 - 126 = 54
                hideLabel:true,
                readOnly:true,
                value:dist['companybrief']
            }]
    });	
    
   /***************************
     * ## 公司主要核心主财务指标   
   ****************************/	   
    var companyKeyIndicators = new Ext.FormPanel({
        labelWidth: 100, 
        defaultType: 'textfield',
        bodyStyle:'padding:5 5 5 5',
        border:false,
        autoScroll:true,
        labelAlign:'right',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业收入(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][0]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业总成本(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][9]
            } ,            
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业成本(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][1]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业利润(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][2]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '销售毛利率',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][3]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: 'EBIT(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][4]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: 'EBITDA(万元)',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][5]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: 'EBIT Margin',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][6]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: 'ROIC',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][7]
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: 'ROS',
                readOnly:true,
                width : '95%',
                value:dist['key_indicators'][8]
            }           
            ]
    });
    
   /***************************
     * ## 主营业务构成
   ****************************/
    var companyBusinessInfo = new Ext.TabPanel();
    
    if(flag == 'public'){
	    companyBusinessInfo = new Ext.TabPanel({
	    	id:tabpanel_id,
	    	minTabWidth:25,
	    	tabWidth:60,
	    	resizeTab:true,
	        autoHeight:true,
	        activeTab:0, 
	        //deferredRender:false,
	        border:false,
	        animScroll:true,
	        enableTabScroll:true,
	        items:[
	       		{title:'营业收入(万元)',id:yysrpieContainer_id + '_0',autoScroll:true,html : "<div id = '"+yysrpieContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'收入比例',id:srblrpieContainer_id + '_1',autoScroll:true,html : "<div id = '"+srblrpieContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'营业成本(万元)',id:yycbpieContainer_id + '_2',autoScroll:true,html : "<div id = '"+yycbpieContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'营业利润(万元)',id:yylrpieContainer_id + '_3',autoScroll:true,html : "<div id = '"+yylrpieContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'毛利率',id:mlrpieContainer_id + '_4',autoScroll:true,html : "<div id = '"+mlrpieContainer_id+"' style='height:100%;width:100%;'></div>"}
	        ],
		    plugins:new Ext.ux.TabCloseMenu(),
		    defaults: {autoScroll:true},
			onTitleDblClick: function (e, target, o) {},
			listeners: {  
	        	'tabchange': function (tab, newc, oldc) {
	        		var poi = newc.id.split("_")[1];
					rendePiePPECharts(newc.id.split("_")[0],dist,poi);				
					companyBusinessInfo.setActiveTab(newc); 				
	        	}
	        }                            
	    }); 
    }
    else if(flag == 'private'){
	    companyBusinessInfo = new Ext.TabPanel({
	    	id:tabpanel_id,
	    	minTabWidth:25,
	    	tabWidth:60,
	    	resizeTab:true,
	        autoHeight:true,
	        activeTab:0, 
	        //deferredRender:false,
	        border:false,
	        //animScroll:true,
	        enableTabScroll:true,
	        items:[
	       		{title:'偿债能力分析',id:ratiobarContainer_id + '_0',autoScroll:true,html : "<div id = '"+ratiobarContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'运营能力分析(周转率)',id:tuneroverratiobarContainer_id + '_1',autoScroll:true,html : "<div id = '"+tuneroverratiobarContainer_id+"' style='height:100%;width:100%;'></div>"},
	       		{title:'盈利能力分析',id:roibarContainer_id + '_2',autoScroll:true,html : "<div id = '"+roibarContainer_id+"' style='height:100%;width:100%;'></div>"}
	        ],
		    plugins:new Ext.ux.TabCloseMenu(),
		    defaults: {autoScroll:true},
			onTitleDblClick: function (e, target, o) {},
			listeners: {  
	        	'tabchange': function (tab, newc, oldc) {
	        		var poi = newc.id.split("_")[1];
					rendeBarPPECharts(newc.id.split("_")[0],dist,poi);				
					companyBusinessInfo.setActiveTab(newc); 				
	        	}
	        }                            
	    });    	
    }
    
    
  /***************************
     * ## 公司主要信息    
   ****************************/	   
    var companyInfo = new Ext.FormPanel({
        labelWidth: 80, 
        defaultType: 'textfield',
        labelAlign:'right',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '工商注册号',
                readOnly:true,
                width : '95%',
                value:dist['companymajorinfo'][0]
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '组织机构代码',
                readOnly:true,
                width : '95%',
                value:dist['companymajorinfo'][1]
            },            
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '是否上市',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][2]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '电话',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][3]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '公司地址',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][4]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册时间',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][5]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '法人代表',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][6]
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '企业类型',
                width : '95%',
                readOnly:true,
                value:dist['companymajorinfo'][7]
            }]
    });   
    
   /***************************
     * ## 公司股权结构   
   ****************************/
    var companyStockInfo = new Ext.FormPanel({
        labelWidth: 110, 
        defaultType: 'textfield',
        labelAlign:'right',
        border:false,
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册资本',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][0].replace("null","")
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东1及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][1].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东2及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][2].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东3及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][3].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东4及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][4].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东5及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][5].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东6及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][6].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东7及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][7].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东8及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][8].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东9及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][9].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东10及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][10].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东11及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][11].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东12及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][12].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东13及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][13].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东14及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][14].replace("null","")
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东15及出资比例',
                width : '95%',
                readOnly:true,
                value:dist['companystockshare'][15].replace("null","")
            }        	  
            ]
    }); 
    
   /***************************
     * ## 公司大事件   
   ****************************/
    var itemarr = dist['companyevent'].split("|");  
    var itemsarray = [];    
	for (var i=0;i<itemarr.length;i++)
	{
		itemdist = {
			    		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid;', 
			            fieldLabel: itemarr[i].split("#")[0],
			            width : '95%',
			            readOnly:true,
			            xtype : 'label', 
						html: "<span style='font-size:13px'><a style='color:#000000;text-decoration:none;' href='"+itemarr[i].split("#")[2]+"' target='_blank'>"+itemarr[i].split("#")[1]+"</a></span>"
			       }
		itemsarray.push(itemdist);        	
	}	
    var companyEvents = new Ext.FormPanel({
        labelWidth: 70, 
        labelAlign:'right',
        border:false,
        autoScroll:true,
        bodyStyle:'padding:5 5 5 5'
    });  
    if(dist['companyevent'].indexOf("#")>0){
	    companyEvents.add(itemsarray);
	    companyEvents.doLayout();
    }
          
	/***************************
     * ## 单页整体布局  
    ****************************/	 
	var dynamicPanel = new Ext.Panel({			
		layout : 'column',
		autoHeight:true,
		autoWeight:true,
		border:false,
		bodyStyle:'background-color:#FFFFFF;',
		items:[
		//first row
		{
            title: '公司简介',
            layout:'fit',		
            collapsible:true,
			style:'padding:5px 5px 5px 5px',
			columnWidth:.73,
			autoScroll:true,
			height:pageheight*0.25,
			items:[companyBrief]
		},
		{	
            title: '关键指标',
            layout:'fit',
            collapsible:true,
			style:'padding:5px 0px 5px 5px',
			autoScroll:true,
			columnWidth:.25,
			height:pageheight*0.25,
			items:[companyKeyIndicators]   
		},	
        //second rows        
        {
            columnWidth:.48,
            height:pageheight*0.45,    
            collapsible:true,
            title: flag == 'public' ? '主营业务' : '财务指标',
            style:'padding:5px 5px 5px 5px',
            items:[{                
                border:false,
		        items:[companyBusinessInfo]
            }]
        },
		{
            columnWidth:.5,
            height:pageheight*0.45,    
            collapsible:true,
            title: '主营业务分类',
            autoScroll:true,
            style:'padding:5px 0px 5px 5px',
            items:[{                
                //height:pageheight*0.35-10,
                border:false,
		        html : "<center>" + dist['companybusinessinfo'] + "</center>"
            }]
        },        
        /*{
            columnWidth:.99,
            height:pageheight*0.35,
            style:'padding:5px 5px 5px 5px',
            items:[{
                title: '主营业务板块',
                height:pageheight*0.35-10,
                border:false,
                html : "bbbb"
            }]
        }, */       
        //third rows
        {
            columnWidth:.32,
            height:pageheight*0.4-32,
            autoScroll:true,
            collapsible:true,
            //collapsed:true,
            title: '公司主要信息',            
            style:'padding:5px 5px 5px 5px',
            items:[{
                border:false,
                items:[companyInfo]
            }]
        },
        {
            columnWidth:.32,
            autoScroll:true,
            collapsible:true,
            //collapsed:true,
            title: '公司股权结构',
            height:pageheight*0.4-32,
            style:'padding:5px 0px 5px 5px',
            items:[{
                border:false,
                items:[companyStockInfo]
            }]
        },        
        {
            columnWidth:.34,
            autoScroll:true,
            title: '公司大事件',
            collapsible:true,
            height:pageheight*0.4-32,
            style:'padding:5px 0px 5px 5px',
            items:[{                
                border:false,
                items:[companyEvents]  
            }]
        },
        //fourth rows
		{
            title: '专利',
            layout:'fit',		
            collapsible:true,
          	//collapsed:true,
			style:'padding:5px 5px 5px 5px',
			columnWidth:.98,
			autoScroll:true,
			height:pageheight*0.45,
			html : "<center>" + dist['companypatents'] + "</center>"
		}        
		]		
	});        
	return dynamicPanel;	
}