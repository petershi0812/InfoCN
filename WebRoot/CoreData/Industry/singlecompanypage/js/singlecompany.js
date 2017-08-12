Ext.onReady(function(){
	var companyname = document.getElementById('companyname').value ;
	var yearid = document.getElementById('yearid').value ;
	var pageheight = document.body.clientHeight;
   /***************************
     * ## 公司简介   
   ****************************/	   
    var companyBrief = new Ext.FormPanel({
        defaultType: 'textarea',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid', 
                width : '99.5%',
                height:pageheight*0.27-54, // 180 - 126 = 54
                hideLabel:true,
                readOnly:true,
                value:'河南中联交通产业发展有限公司成立于2011年9月，位于信阳明港产业集聚区，区位优势独特，毗邻京港澳高速、沪陕高速、107国道、京港高铁明港站，距新郑机场2小时车程，武汉天河机场仅1.5小时车程，交通便捷。公司占地510亩，注册资金15000万元，固定资产投资8亿元，员工千余人。于2012年9月建成投产，拥有高速护栏、镀锌制品生产线40条，具备100万吨的年生产能力。公司专业生产、销售高速公路安全防护设施产品（包括立柱、二波三波护栏板、标志杆、隔离栅，以及与之相配套的产品），以及铁制大小件的生产和热镀锌加工、静电喷塑和纳米加工，各种规格的镀锌角钢、槽钢、扁钢、圆钢等镀锌制品，另承接来料加工业务。公司拥有专业的交通安全设施工程施工队伍，具备丰富的招投标和工程施工经验，生产工艺、设备装置、检测手段、计量能力等方面均达到较高的水平。产品广泛应用于高速公路、铁路、城建、石油、水煤气以及低压流体、建筑外墙装饰项目领域。公司所生产的各种产品均执行国家规定的质量标准，其中高速公路护栏执行JT/T281-2007、JT/T457-2007和GB/T18226-2000标准标准。公司集聚了行业中优秀的生产能力、广泛的销售网络、一流的人才队伍，为中国基础设施建设贡献一份力量。'
            }]
    });
   /***************************
     * ## 公司主要核心主财务指标   
   ****************************/	   
    var companyKeyIndicators = new Ext.FormPanel({
        labelWidth: 110, 
        defaultType: 'numberFieldFormat',
        labelAlign:'right',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业收入(千元)',
                readOnly:true,
                width : '95%',
                value:'2775112'
            } ,
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '营业利润(千元)',
                readOnly:true,
                width : '95%',
                value:'52669'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '资产总额(千元)',
                readOnly:true,
                width : '95%',
                value:'210610'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '工业总产值(千元)',
                readOnly:true,
                width : '95%',
                value:'2803143'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '从业人数(千元)',
                readOnly:true,
                width : '95%',
                value:'306'
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
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '工商注册号',
                readOnly:true,
                width : '95%',
                value:'411500000011708'
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '组织机构代码',
                readOnly:true,
                width : '95%',
                value:'581748403'
            },            
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '公司名称',
                width : '95%',
                readOnly:true,
                value:'河南中联制管有限公司'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '电话',
                width : '95%',
                readOnly:true,
                value:'0376-7686785'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '公司地址',
                width : '95%',
                readOnly:true,
                value:'信阳市明港镇建设路明港产业集聚区'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册时间',
                width : '95%',
                readOnly:true,
                value:'2011-09-06'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '邮箱',
                width : '95%',
                readOnly:true,
                value:'526841183@qq.com'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '行业',
                width : '95%',
                readOnly:true,
                value:'3311金属结构制造'
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
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '法人代表',
                width : '95%',
                readOnly:true,
                value:'马加保'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '注册资本',
                width : '95%',
                readOnly:true,
                value:'15000万元'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '企业类型',
                width : '95%',
                readOnly:true,
                value:'有限责任公司(自然人投资或控股)'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东1及出资比例',
                width : '95%',
                readOnly:true,
                value:'马加保（60%）'
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东2及出资比例',
                width : '95%',
                readOnly:true,
                value:'唐益忠（40%）'
            },  
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '股东3及出资比例',
                width : '95%',
                readOnly:true,
                value:''
            }     
            ]
    });
    
     
   /***************************
     * ## 公司主营业务  
   ****************************/	   
    var companyBusiness = new Ext.FormPanel({
        labelWidth: 100, 
        defaultType: 'textfield',
        labelAlign:'right',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务1',
                width : '95%',
                readOnly:true,
                value:'镀锌管'
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务2',
                width : '95%',
                readOnly:true,
                value:''
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: #000000 1px solid;', 
                fieldLabel: '主要业务3',
                width : '95%',
                readOnly:true,
                value:''
            }    
            ]
    });
           
   /***************************
     * ## 公司大事件   
   ****************************/	   
    var companyEvents = new Ext.FormPanel({
        labelWidth: 80, 
        labelAlign:'right',
        style:'padding:5px 0px 0px 0px',
        items: [
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid;', 
                fieldLabel: '2015/08/13',
                width : '95%',
                readOnly:true,
                xtype : 'label', 
				html: "<span style='font-size:13px'><a style='color:#000000;text-decoration:none;' href='http://www.hnzlgs.cn/index.php?m=content&c=index&a=show&catid=14&id=154' target='_blank'>河南中联新建喷镀车间顺利投产</a></span>"
            },
        	{
        		style:'background:none; border-right: 0px solid;border-top: 0px solid;border-left: 0px solid;border-bottom: 0px solid;', 
                fieldLabel: '2015/05/11',
                width : '95%',
                readOnly:true,
                xtype : 'label', 
				html: "<span style='font-size:13px'><a style='color:#000000;text-decoration:none;' href='http://www.hnzlgs.cn/index.php?m=content&c=index&a=show&catid=14&id=155' target='_blank'>信阳市第二十五次产业集聚区重点项目攻坚督导协调例会</a></span>"
            }             
            ]
    });    
    
    
    
    var tools = [{
        handler: function(){
            Ext.Msg.alert('Message', 'The Settings tool was clicked.');
        }
    }];

    var viewport = new Ext.Viewport({
        layout:'border',
        items:[
        {
            xtype:'portal',
            region:'center',
            //margins:'35 5 5 0',
            items:[
            //first rows
			{
                columnWidth:.665,
                style:'padding:10px 5px 5px 10px',
                height:pageheight*0.27,
                items:[{
                    title: '公司简介',
                    layout:'fit',
                    tools: tools,
                    //frame:true,
                    items:[companyBrief]
                }]
            },  
			{
                columnWidth:.335,
                height:pageheight*0.27,
                style:'padding:10px 5px 5px 2px',
                items:[{
                    title: '关键指标',
                    layout:'fit',
                    tools: tools,
                    items:[companyKeyIndicators]                   
                }]
            },
            //second rows
            {
                columnWidth:.33,
                height:pageheight*0.35,
                style:'padding:2px 0px 5px 10px',
                items:[{
                    title: '主营构成',
                    height:pageheight*0.35-10,                    
                    layout:'fit',
                    fill : true,
					html : "<div id = 'piechartContainer' style='height:100%;width:100%;'></div>"
                }]
            },
            {
                columnWidth:.33,
                height:pageheight*0.35,
                style:'padding:2px 0px 5px 5px',
                items:[{
                    title: '行业地位',
                    height:pageheight*0.35-10, 
                    tools: tools,
                    html : "<div id = 'radarchartContainer' style='height:100%;width:100%;'></div>"
                }]
            },
            {
                columnWidth:.335,
                height:pageheight*0.35,
                style:'padding:2px 0px 5px 5px',
                items:[{
                    title: '主营业务板块',
                    tools: tools,
                    items:[companyBusiness]
                }]
            },
            //third rows
            {
                columnWidth:.33,
                height:pageheight*0.37,
                style:'padding:5px 0px 5px 10px',
                items:[{
                    title: '公司主要信息',
                    layout:'fit',
                    tools: tools,
                    frame:true,
                    items:[companyInfo]
                }]
            },
            {
                columnWidth:.33,
                height:pageheight*0.37,
                style:'padding:5px 0px 5px 5px',
                items:[{
                    title: '公司股权结构',
                    tools: tools,
                    frame:true,
                    items:[companyStockInfo]
                }]
            },
            {
                columnWidth:.335,
                height:pageheight*0.37,
                style:'padding:5px 0px 5px 5px',
                items:[{
                    title: '公司大事件',
                    tools: tools,
                    items:[companyEvents]  
                }]
            }            
            ]
        }]
    });
    
	
   /***************************
     * ## 主营业务饼图 
   ****************************/		
	//renderCharts("piechartContainer",'pie2d',2.1);    
    rendepieECharts(); 
    
   /***************************
     * ## 行业地位雷达图 
   ****************************/		    
    renderradarECharts();     
    

    
});

