/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'Industry_year_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: true,dataIndex:"Year_id"},
				{header:"��ҵ����",align:'right',width: 80,sortable: true,dataIndex:"IndustryCode"},
				{header:"��ҵ����",align:'left',width: 200,sortable: true,dataIndex:"IndustryName"},
				{header:"��ҵ����",align:'center',width: 90,sortable: true,dataIndex:"IndustryDomain"},
				{header:'��λ��[��]_��ĩ',align:'right',width: 120,sortable: true,dataIndex:'dws_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ӫҵ������[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'zyywsr_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ӫҵ������[�ٷ�֮һ]_�ۼ�ͬ������',align:'right',width: 240,sortable: true,dataIndex:'zyywsr_ljtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�����ܶ�[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'lrze_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ܶ�[ǧԪ]_�ۼ�ͬ��������',align:'right',width: 240,sortable: true,dataIndex:'qylrze_ljtbzje',xtype:'numbercolumn',format : '0,00'},
				{header:'�ʲ��ܼ�[ǧԪ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'zczl_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'�ʲ��ܼ�[�ٷ�֮һ]_��ĩͬ������',align:'right',width: 240,sortable: true,dataIndex:'zczj_qmtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ʲ���ծ��[�ٷ�֮һ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'zcfzl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ʱ���ֵ��ֵ��[�ٷ�֮һ]_��ĩ',align:'right',width: 240,sortable: true,dataIndex:'zcbzzzl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����λ��[��]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'ksdws_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'������ҵ�����ܶ�[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'ksze_lj',xtype:'numbercolumn',format : '0,00'},				
				{header:'���ڽ���ֵ[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'ckjhz_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'����������[�ٷ�֮һ]_�ۼ�',align:'right',width: 220,sortable: true,dataIndex:'xslrl_lj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ɱ�����������[�ٷ�֮һ]_�ۼ�',align:'right',width: 240,sortable: true,dataIndex:'cbfylrl_lj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ӫҵ��ɱ�[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'zyywcb_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ӫҵ��ɱ�[�ٷ�֮һ]_�ۼ�ͬ������',align:'right',width: 240,sortable: true,dataIndex:'zyywcb_ljtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��Ӫҵ��˰�𼰸���[ǧԪ]_�ۼ�',align:'right',width: 180,sortable: true,dataIndex:'zyywsjjfj_lj',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʲ�ƽ�����[ǧԪ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'ldzcpjye_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʲ���ת��[��]',align:'right',width: 180,sortable: true,dataIndex:'ldzczzl',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����Ʒ[ǧԪ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'ccp_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ʒ[�ٷ�֮һ]_��ĩͬ������',align:'right',width: 240,sortable: true,dataIndex:'ccp_qmtbzs',xtype:'numbercolumn',format : '0,00.00'},
				{header:'����Ʒ�ʽ�ռ����[�ٷ�֮һ]_��ĩ',align:'right',width: 240,sortable: true,dataIndex:'ccczjzyl_qm',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӧ���˿��[ǧԪ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'yszkje_qm',xtype:'numbercolumn',format : '0,00'},
				{header:'��ծ�ϼ�[ǧԪ]_��ĩ',align:'right',width: 180,sortable: true,dataIndex:'fzhj_qm',xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;
	}	
}
