/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'Industry_year_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: true,dataIndex:"Year_id"},
				{header:"行业代码",align:'right',width: 80,sortable: true,dataIndex:"IndustryCode"},
				{header:"行业名称",align:'left',width: 200,sortable: true,dataIndex:"IndustryName"},
				{header:"行业大类",align:'center',width: 90,sortable: true,dataIndex:"IndustryDomain"},
				{header:'单位数[个]_期末',align:'right',width: 120,sortable: true,dataIndex:'dws_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'主营业务收入[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'zyywsr_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'主营业务收入[百分之一]_累计同比增速',align:'right',width: 240,sortable: true,dataIndex:'zyywsr_ljtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'利润总额[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'lrze_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'利润总额[千元]_累计同比增减额',align:'right',width: 240,sortable: true,dataIndex:'qylrze_ljtbzje',xtype:'numbercolumn',format : '0,00'},
				{header:'资产总计[千元]_期末',align:'right',width: 180,sortable: true,dataIndex:'zczl_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'资产总计[百分之一]_期末同比增速',align:'right',width: 240,sortable: true,dataIndex:'zczj_qmtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'资产负债率[百分之一]_期末',align:'right',width: 180,sortable: true,dataIndex:'zcfzl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'资本保值增值率[百分之一]_期末',align:'right',width: 240,sortable: true,dataIndex:'zcbzzzl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'亏损单位数[个]_期末',align:'right',width: 180,sortable: true,dataIndex:'ksdws_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'亏损企业亏损总额[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'ksze_lj',xtype:'numbercolumn',format : '0,00'},				
				{header:'出口交货值[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'ckjhz_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'销售利润率[百分之一]_累计',align:'right',width: 220,sortable: true,dataIndex:'xslrl_lj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'成本费用利润率[百分之一]_累计',align:'right',width: 240,sortable: true,dataIndex:'cbfylrl_lj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'主营业务成本[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'zyywcb_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'主营业务成本[百分之一]_累计同比增速',align:'right',width: 240,sortable: true,dataIndex:'zyywcb_ljtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'主营业务税金及附加[千元]_累计',align:'right',width: 180,sortable: true,dataIndex:'zyywsjjfj_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'流动资产平均余额[千元]_期末',align:'right',width: 180,sortable: true,dataIndex:'ldzcpjye_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'流动资产周转率[次]',align:'right',width: 180,sortable: true,dataIndex:'ldzczzl',xtype:'numbercolumn',format : '0,00.00'},
				{header:'产成品[千元]_期末',align:'right',width: 180,sortable: true,dataIndex:'ccp_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'产成品[百分之一]_期末同比增速',align:'right',width: 240,sortable: true,dataIndex:'ccp_qmtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'产成品资金占有率[百分之一]_期末',align:'right',width: 240,sortable: true,dataIndex:'ccczjzyl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'应收账款净额[千元]_期末',align:'right',width: 180,sortable: true,dataIndex:'yszkje_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'负债合计[千元]_期末',align:'right',width: 180,sortable: true,dataIndex:'fzhj_qm',xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;
	}	
}
