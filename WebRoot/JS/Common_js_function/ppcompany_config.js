/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'ppcompany_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,						
				{header:'单位名称',align:'left',width: 200,sortable: true,dataIndex:'dwmc1'},
				{header:'工商注册号',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gszch'},
				{header:'组织机构代码',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'zzjgdm'},
				{header:'是否上市',align:'left',width: 100,sortable: true,dataIndex:'ispp'},
				{header:'股票名称',align:'left',width: 100,sortable: true,dataIndex:'gpmc'},
				{header:'电话',align:'right',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'dh'},
				{header:'公司地址',align:'left',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gzdz'},
				{header:'注册时间',align:'right',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'zcsj'},
				{header:'法人代表',align:'left',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'frdb'},
				{header:'营业收入[万元]',align:'right',width: 180,sortable: true,dataIndex:'yysr',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'营业总成本[万元]',align:'right',width: 180,sortable: true,dataIndex:'yyzcb',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'营业成本[万元]',align:'right',width: 180,sortable: true,dataIndex:'yycb',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'营业利润[万元]',align:'right',width: 180,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'销售毛利率',align:'right',width: 180,sortable: true,dataIndex:'xsmll',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBIT[万元]',align:'right',width: 180,sortable: true,dataIndex:'ebit',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBITDA[万元]',align:'right',width: 180,sortable: true,dataIndex:'ebitda',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBIT Margin',align:'right',width: 180,sortable: true,dataIndex:'ebitmargin',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'ROIC',align:'right',width: 180,sortable: true,dataIndex:'roic',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'ROS',align:'right',width: 180,sortable: true,dataIndex:'ros',xtype:'numbercolumn',format : '0,00.0000'},			
				{header:'注册资本',align:'left',width: 150,sortable: true,dataIndex:'zczb'},
				{header:'企业类型',align:'left',width: 200,sortable: true,dataIndex:'qylx'},
				{header:'股东1及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd1jczbl'},
				{header:'股东2及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd2jczbl'},
				{header:'股东3及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd3jczbl'},
				{header:'股东4及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd4jczbl'},
				{header:'股东5及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd5jczbl'},
				{header:'股东6及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd6jczbl'},
				{header:'股东7及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd7jczbl'},
				{header:'股东8及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd8jczbl'},
				{header:'股东9及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd9jczbl'},
				{header:'股东10及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd10jczbl'},
				{header:'股东11及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd11jczbl'},
				{header:'股东12及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd12jczbl'},
				{header:'股东13及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,hidden:true,hideable: true,dataIndex:'gd13jczbl'},
				{header:'股东14及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd14jczbl'},
				{header:'股东15及出资比例',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd15jczbl'},
				{header:'公司简介',align:'left',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gsjj'},
				{header:'流动资产合计',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'存货',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00.00'},
				{header:'流动负债合计',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'资产总计',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'zchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'负债合计',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'应收帐款',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'yszk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'应付帐款',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'yfzk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'固定资产',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gdzc',xtype:'numbercolumn',format : '0,00.00'},
				{header:'净利润',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'jlr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'所有者权益合计',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'syzqy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'销售费用',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'管理费用',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'财务费用',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00.00'}				
			];	
		return grid_colModel_array;
	}
}

