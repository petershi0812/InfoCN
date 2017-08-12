/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'paper_Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:'报告名称',align:'left',width: 450,sortable: true,dataIndex:'PaperName'},
				{header:'报告出版时间',align:'right',width: 80,sortable: true,dataIndex:'PaperPublic'},
				{header:'报告页数',align:'right',width: 80,sortable: true,dataIndex:'PaperPages',xtype:'numbercolumn',format : '0,00'},
				{header:'报告图表数',align:'right',width: 80,sortable: true,dataIndex:'PaperCharts',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
}
