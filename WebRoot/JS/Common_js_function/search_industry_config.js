/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'search_Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,						
				{header:'单位名称',align:'left',width: 250,sortable: true,dataIndex:'dwmc1'},
				{header:'行业代码',align:'right',width: 80,sortable: true,dataIndex:'IndustryCode'},			
				{header:'EBITDA[千元]',align:'right',width: 110,sortable: true,dataIndex:'ebitda',xtype:'numbercolumn',format : '0,00'},
				{header:'ROI[百分之一]',align:'right',width: 110,sortable: true,dataIndex:'roi',xtype:'numbercolumn',format : '0,00.00'},
				{header:'ROA[百分之一]',align:'right',width: 110,sortable: true,dataIndex:'roa',xtype:'numbercolumn',format : '0,00.00'},
				{header:'净利润率[百分之一]',align:'right',width: 110,sortable: true,dataIndex:'mlrl',xtype:'numbercolumn',format : '0,00.00'},
				{header:'营业收入[千元]',align:'right',width: 110,sortable: true,dataIndex:'yysr',xtype:'numbercolumn',format : '0,00'},
				{header:'营业利润[千元]',align:'right',width: 110,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00'},				
				{header:'资产总计[千元]',align:'right',width: 110,sortable: true,dataIndex:'zjzj',xtype:'numbercolumn',format : '0,00'},
				{header:'工业总产值[千元]',align:'right',width: 120,sortable: true,dataIndex:'gyzcz',xtype:'numbercolumn',format : '0,00'},
				{header:'从业人数',align:'right',width: 100,sortable: true,dataIndex:'cyrs',xtype:'numbercolumn',format : '0,00'},
				{header:'主要业务活动1',align:'left',width: 180,sortable: true,dataIndex:'zyywhd1'},
				{header:'主要业务活动2',align:'left',width: 180,sortable: true,dataIndex:'zyywhd2'},
				{header:'主要业务活动3',align:'left',width: 180,sortable: true,dataIndex:'zyywhd3'},					
				{header:'省份',align:'left',width: 100,sortable: true,dataIndex:'Province'},
				{header:'地级市',align:'left',width: 100,sortable: true,dataIndex:'City'},
				{header:'开业年份',align:'right',width: 80,sortable: true,dataIndex:'kynf'},				
				{header:'登记注册类型',align:'left',width: 120,sortable: true,dataIndex:'djzclx_cn'},
				{header:'企业控股情况',align:'left',width: 120,sortable: true,dataIndex:'qykgqk_cn'},
								
				//{header:'年份',align:'right',width: 50,sortable: true,dataIndex:'Year_id'},
				{header:'组织机构代码',align:'left',width: 100,sortable: true,dataIndex:'zzjgdm'},
				{header:'行政区划代码',align:'right',width: 100,sortable: true,dataIndex:'AdminCode'},							
				{header:'区县市',align:'left',width: 100,sortable: true,dataIndex:'District'},
				{header:'街道',align:'left',width: 150,sortable: true,dataIndex:'Street'},
				{header:'居委会',align:'left',width: 150,sortable: true,dataIndex:'Committee'},			
				//{header:'单位名称详细',align:'left',width: 250,sortable: true,dataIndex:'dwmc2'},
				//{header:'行业代码',align:'right',width: 80,sortable: true,dataIndex:'IndustryCode'},
				//{header:'主要业务活动1',align:'left',width: 180,sortable: true,dataIndex:'zyywhd1'},
				//{header:'主要业务活动2',align:'left',width: 180,sortable: true,dataIndex:'zyywhd2'},
				//{header:'主要业务活动3',align:'left',width: 180,sortable: true,dataIndex:'zyywhd3'},
				{header:'详细地址',align:'left',width: 250,sortable: true,dataIndex:'xxdz'},
				{header:'法定代表人',align:'left',width: 100,sortable: true,dataIndex:'frdbr'},				
				{header:'开业月份',align:'right',width: 80,sortable: true,dataIndex:'kyyf'},
				{header:'长途区号',align:'right',width: 80,sortable: true,dataIndex:'ctqh'},
				{header:'固定电话',align:'right',width: 100,sortable: true,dataIndex:'gddh'},
				{header:'固话分机号',align:'right',width: 100,sortable: true,dataIndex:'ghfjh'},
				{header:'传真号码',align:'right',width: 100,sortable: true,dataIndex:'czhm'},
				{header:'传真分机号',align:'right',width: 100,sortable: true,dataIndex:'czfjh'},
				{header:'邮政编码',align:'right',width: 100,sortable: true,dataIndex:'zzbm'},
				//{header:'登记注册类型',align:'right',width: 100,sortable: true,dataIndex:'djzclx'},				
				//{header:'企业控股情况',align:'right',width: 100,sortable: true,dataIndex:'qykgqk'},				
				//{header:'隶属关系',align:'right',width: 100,sortable: true,dataIndex:'lsgx'},
				{header:'隶属关系',align:'left',width: 80,sortable: true,dataIndex:'lsgx_cn'},
				{header:'企业营业状态',align:'right',width: 100,sortable: true,dataIndex:'qyyyzt'},
				{header:'执行会计制度类别',align:'right',width: 120,sortable: true,dataIndex:'zxhjzdlb'},
				{header:'年初存货[千元]',align:'right',width: 120,sortable: true,dataIndex:'ncch',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_年初存货产成品[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_ccp1',xtype:'numbercolumn',format : '0,00'},
				{header:'流动资产合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_应收账款[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_yszk1',xtype:'numbercolumn',format : '0,00'},
				{header:'存货[千元]',align:'right',width: 120,sortable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_存货产成品[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_ccp2',xtype:'numbercolumn',format : '0,00'},
				{header:'固定资产合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'gdzchj',xtype:'numbercolumn',format : '0,00'},
				{header:'固定资产原价[千元]',align:'right',width: 120,sortable: true,dataIndex:'gdzcyj',xtype:'numbercolumn',format : '0,00'},
				{header:'累计折旧[千元]',align:'right',width: 120,sortable: true,dataIndex:'ljzj',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_本年折旧[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_bnzj',xtype:'numbercolumn',format : '0,00'},				
				{header:'流动负债合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_应付账款[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_yszk2',xtype:'numbercolumn',format : '0,00'},
				{header:'非流动负债合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'fldfzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'负债合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'所有者权益合计[千元]',align:'right',width: 120,sortable: true,dataIndex:'syzqyhj',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_实收资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_sszb',xtype:'numbercolumn',format : '0,00'},
				{header:'国家资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'gjzb',xtype:'numbercolumn',format : '0,00'},
				{header:'集体资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'jtzb',xtype:'numbercolumn',format : '0,00'},
				{header:'法人资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'frzb',xtype:'numbercolumn',format : '0,00'},
				{header:'个人资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'grzb',xtype:'numbercolumn',format : '0,00'},
				{header:'港澳台资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'gatzb',xtype:'numbercolumn',format : '0,00'},
				{header:'外商资本[千元]',align:'right',width: 120,sortable: true,dataIndex:'wszb',xtype:'numbercolumn',format : '0,00'},				
				{header:'其中_主营业务收入[千元]',align:'right',width: 180,sortable: true,dataIndex:'qz_zyywsr',xtype:'numbercolumn',format : '0,00'},
				{header:'营业成本[千元]',align:'right',width: 120,sortable: true,dataIndex:'yycb',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_主营业务成本[千元]',align:'right',width: 180,sortable: true,dataIndex:'qz_zyywcb',xtype:'numbercolumn',format : '0,00'},
				{header:'营业税金及附加[千元]',align:'right',width: 120,sortable: true,dataIndex:'yysjjfj',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_主营业务税金及附加[千元]',align:'right',width: 180,sortable: true,dataIndex:'qz_yysjjfj',xtype:'numbercolumn',format : '0,00'},
				{header:'其他业务利润[千元]',align:'right',width: 120,sortable: true,dataIndex:'qtywlr',xtype:'numbercolumn',format : '0,00'},
				{header:'销售费用[千元]',align:'right',width: 120,sortable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00'},
				{header:'管理费用[千元]',align:'right',width: 120,sortable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_税金[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_sj',xtype:'numbercolumn',format : '0,00'},
				{header:'财务费用[千元]',align:'right',width: 120,sortable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_利息收入[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_lxsr',xtype:'numbercolumn',format : '0,00'},
				{header:'利息支出[千元]',align:'right',width: 120,sortable: true,dataIndex:'lxzc',xtype:'numbercolumn',format : '0,00'},
				{header:'资产减值损失[千元]',align:'right',width: 120,sortable: true,dataIndex:'zcjzss',xtype:'numbercolumn',format : '0,00'},
				{header:'公允价值变动收益[千元]',align:'right',width: 120,sortable: true,dataIndex:'gxjzbdsy',xtype:'numbercolumn',format : '0,00'},
				{header:'投资收益[千元]',align:'right',width: 120,sortable: true,dataIndex:'tzsy',xtype:'numbercolumn',format : '0,00'},				
				{header:'营业外收入[千元]',align:'right',width: 120,sortable: true,dataIndex:'yywsr',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_补贴收入[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_btsr',xtype:'numbercolumn',format : '0,00'},
				{header:'营业外支出[千元]',align:'right',width: 120,sortable: true,dataIndex:'yywzc',xtype:'numbercolumn',format : '0,00'},
				{header:'利润总额[千元]',align:'right',width: 120,sortable: true,dataIndex:'ylze',xtype:'numbercolumn',format : '0,00'},
				{header:'应交所得税[千元]',align:'right',width: 120,sortable: true,dataIndex:'yjsds',xtype:'numbercolumn',format : '0,00'},
				{header:'应付职工薪酬[千元]',align:'right',width: 120,sortable: true,dataIndex:'yfzgxc',xtype:'numbercolumn',format : '0,00'},
				{header:'应交增值税[千元]',align:'right',width: 120,sortable: true,dataIndex:'yjzzs',xtype:'numbercolumn',format : '0,00'},				
				{header:'工业销售产值[千元]',align:'right',width: 120,sortable: true,dataIndex:'gyxscz',xtype:'numbercolumn',format : '0,00'},
				{header:'其中_出口交货值[千元]',align:'right',width: 120,sortable: true,dataIndex:'qz_ckjhz',xtype:'numbercolumn',format : '0,00'}								
			];	
		return grid_colModel_array;
	}
	
	function formatRank(value,metadata){
		if(value <=10){
			//metadata.attr = 'style="background-color:#ff0000"';
			return '<b><font color = red>' + value + '</font></b>';
		}
/*		else if(value>=30 && value<=40){
			return '<b><font color = blue>' + value + '</font></b>';
		}*/
		return value
	}
}

