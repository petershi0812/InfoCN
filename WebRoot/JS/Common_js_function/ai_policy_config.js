/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'ai_policy_dataset'){
		var grid_colModel_array =			
			[					
				new Ext.grid.RowNumberer(),	
				//_grid_sm,
				{header:'��������',align:'left',width: 450,sortable: true,dataIndex:'PaperName'}
			];	
		return grid_colModel_array;
	}	
}
