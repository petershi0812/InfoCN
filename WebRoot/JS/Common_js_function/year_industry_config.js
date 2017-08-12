/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 80,sortable: true,dataIndex:"Year_id"},
				{header:"��ҵ����",align:'right',width: 80,sortable: true,dataIndex:"IndustryCode"},	
				{header:"��ҵ����",align:'left',width: 180,sortable: true,dataIndex:"IndustryName"},			
				{header:'��ҵ��λ��[��]',align:'right',width: 120,sortable: true,dataIndex:'qydws',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ���۲�ֵ[��]',align:'right',width: 120,sortable: true,dataIndex:'gyxscz',xtype:'numbercolumn',format : '0,00.00'},
				{header:'���ڽ���ֵ[��]',align:'right',width: 120,sortable: true,dataIndex:'ckjhz',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ʲ��ܼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'zczj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�̶��ʲ��ϼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'gdzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�̶��ʲ�ԭ��[��]',align:'right',width: 120,sortable: true,dataIndex:'gdzcyj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ۼ��۾�[��]',align:'right',width: 120,sortable: true,dataIndex:'ljzj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʲ��ϼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����_Ӧ���˿�[��]',align:'right',width: 120,sortable: true,dataIndex:'yszk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'���[��]',align:'right',width: 120,sortable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����_�������Ʒ[��]',align:'right',width: 120,sortable: true,dataIndex:'ccp',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��ծ�ϼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������ծ�ϼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����_Ӧ���˿�[��]',align:'right',width: 120,sortable: true,dataIndex:'yfzk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������Ȩ��ϼ�[��]',align:'right',width: 120,sortable: true,dataIndex:'syzqyhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����_ʵ���ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'qz_sszb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'gjzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'jtzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'frzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'grzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�۰�̨�ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'gatzb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ʱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'wszb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ӫҵ������[��]',align:'right',width: 120,sortable: true,dataIndex:'zyywsr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ӫҵ��ɱ�[��]',align:'right',width: 120,sortable: true,dataIndex:'zyywcb',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ӫҵ��˰�𼰸���[��]',align:'right',width: 120,sortable: true,dataIndex:'zyywsjjfj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'���۷���[��]',align:'right',width: 120,sortable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�������[��]',align:'right',width: 120,sortable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����_˰��[��]',align:'right',width: 120,sortable: true,dataIndex:'qz_sj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�������[��]',align:'right',width: 120,sortable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ϣ����[��]',align:'right',width: 120,sortable: true,dataIndex:'lxsr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ϣ֧��[��]',align:'right',width: 120,sortable: true,dataIndex:'xlzc',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ͷ������[��]',align:'right',width: 120,sortable: true,dataIndex:'tzsy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӫҵ����[��]',align:'right',width: 120,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ܶ�[��]',align:'right',width: 120,sortable: true,dataIndex:'lrze',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������ҵ�����[��]',align:'right',width: 120,sortable: true,dataIndex:'ksqykse',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӧ����ֵ˰[��]',align:'right',width: 120,sortable: true,dataIndex:'yjzzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����˰����[��]',align:'right',width: 120,sortable: true,dataIndex:'sdsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'ƽ���ù�����[��]',align:'right',width: 120,sortable: true,dataIndex:'pjygrs',xtype:'numbercolumn',format : '0,00'}			
			];	
		return grid_colModel_array;
	}	
}
