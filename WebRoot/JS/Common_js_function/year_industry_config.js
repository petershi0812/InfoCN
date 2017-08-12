/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 80,sortable: true,dataIndex:"Year_id"},
				{header:"行业代码",align:'right',width: 80,sortable: true,dataIndex:"IndustryCode"},	
				{header:"行业名称",align:'left',width: 180,sortable: true,dataIndex:"IndustryName"},			
				{header:'企业单位数[个]',align:'right',width: 120,sortable: true,dataIndex:'qydws',xtype:'numbercolumn',format : '0,00'},
				{header:'工业销售产值[亿]',align:'right',width: 120,sortable: true,dataIndex:'gyxscz',xtype:'numbercolumn',format : '0,00.00'},
				{header:'出口交货值[亿]',align:'right',width: 120,sortable: true,dataIndex:'ckjhz',xtype:'numbercolumn',format : '0,00.00'},
				{header:'资产总计[亿]',align:'right',width: 120,sortable: true,dataIndex:'zczj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'固定资产合计[亿]',align:'right',width: 120,sortable: true,dataIndex:'gdzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'固定资产原价[亿]',align:'right',width: 120,sortable: true,dataIndex:'gdzcyj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'累计折旧[亿]',align:'right',width: 120,sortable: true,dataIndex:'ljzj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'流动资产合计[亿]',align:'right',width: 120,sortable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'其中_应收账款[亿]',align:'right',width: 120,sortable: true,dataIndex:'yszk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'存货[亿]',align:'right',width: 120,sortable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00.00'},
				{header:'其中_存货产成品[亿]',align:'right',width: 120,sortable: true,dataIndex:'ccp',xtype:'numbercolumn',format : '0,00.00'},
				{header:'负债合计[亿]',align:'right',width: 120,sortable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'流动负债合计[亿]',align:'right',width: 120,sortable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'其中_应付账款[亿]',align:'right',width: 120,sortable: true,dataIndex:'yfzk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'所有者权益合计[亿]',align:'right',width: 120,sortable: true,dataIndex:'syzqyhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'其中_实收资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'qz_sszb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'国家资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'gjzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'集体资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'jtzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'法人资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'frzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'个人资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'grzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'港澳台资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'gatzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'外商资本[亿]',align:'right',width: 120,sortable: true,dataIndex:'wszb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'主营业务收入[亿]',align:'right',width: 120,sortable: true,dataIndex:'zyywsr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'主营业务成本[亿]',align:'right',width: 120,sortable: true,dataIndex:'zyywcb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'主营业务税金及附加[亿]',align:'right',width: 120,sortable: true,dataIndex:'zyywsjjfj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'销售费用[亿]',align:'right',width: 120,sortable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'管理费用[亿]',align:'right',width: 120,sortable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'其中_税金[亿]',align:'right',width: 120,sortable: true,dataIndex:'qz_sj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'财务费用[亿]',align:'right',width: 120,sortable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'利息收入[亿]',align:'right',width: 120,sortable: true,dataIndex:'lxsr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'利息支出[亿]',align:'right',width: 120,sortable: true,dataIndex:'xlzc',xtype:'numbercolumn',format : '0,00.00'},
				{header:'投资收益[亿]',align:'right',width: 120,sortable: true,dataIndex:'tzsy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'营业利润[亿]',align:'right',width: 120,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'利润总额[亿]',align:'right',width: 120,sortable: true,dataIndex:'lrze',xtype:'numbercolumn',format : '0,00.00'},
				{header:'亏损企业亏损额[亿]',align:'right',width: 120,sortable: true,dataIndex:'ksqykse',xtype:'numbercolumn',format : '0,00.00'},
				{header:'应交增值税[亿]',align:'right',width: 120,sortable: true,dataIndex:'yjzzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'所得税费用[亿]',align:'right',width: 120,sortable: true,dataIndex:'sdsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'平均用工人数[万]',align:'right',width: 120,sortable: true,dataIndex:'pjygrs',xtype:'numbercolumn',format : '0,00'}			
			];	
		return grid_colModel_array;
	}	
}
