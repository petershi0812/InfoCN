/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'paper_Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:'��������',align:'left',width: 450,sortable: true,dataIndex:'PaperName'},
				{header:'�������ʱ��',align:'right',width: 80,sortable: true,dataIndex:'PaperPublic'},
				{header:'����ҳ��',align:'right',width: 80,sortable: true,dataIndex:'PaperPages',xtype:'numbercolumn',format : '0,00'},
				{header:'����ͼ����',align:'right',width: 80,sortable: true,dataIndex:'PaperCharts',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
}
