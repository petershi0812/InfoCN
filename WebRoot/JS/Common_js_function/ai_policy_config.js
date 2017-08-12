/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'ai_policy_dataset'){
		var grid_colModel_array =			
			[					
				new Ext.grid.RowNumberer(),	
				//_grid_sm,
				{header:'报告名称',align:'left',width: 450,sortable: true,dataIndex:'PaperName'}
			];	
		return grid_colModel_array;
	}	
}
