/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'ppcompany_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,						
				{header:'��λ����',align:'left',width: 200,sortable: true,dataIndex:'dwmc1'},
				{header:'����ע���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gszch'},
				{header:'��֯��������',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'zzjgdm'},
				{header:'�Ƿ�����',align:'left',width: 100,sortable: true,dataIndex:'ispp'},
				{header:'��Ʊ����',align:'left',width: 100,sortable: true,dataIndex:'gpmc'},
				{header:'�绰',align:'right',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'dh'},
				{header:'��˾��ַ',align:'left',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gzdz'},
				{header:'ע��ʱ��',align:'right',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'zcsj'},
				{header:'���˴���',align:'left',width: 100,sortable: true,hidden:true,hideable: true,dataIndex:'frdb'},
				{header:'Ӫҵ����[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'yysr',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'Ӫҵ�ܳɱ�[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'yyzcb',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'Ӫҵ�ɱ�[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'yycb',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'Ӫҵ����[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'����ë����',align:'right',width: 180,sortable: true,dataIndex:'xsmll',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBIT[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'ebit',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBITDA[��Ԫ]',align:'right',width: 180,sortable: true,dataIndex:'ebitda',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'EBIT Margin',align:'right',width: 180,sortable: true,dataIndex:'ebitmargin',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'ROIC',align:'right',width: 180,sortable: true,dataIndex:'roic',xtype:'numbercolumn',format : '0,00.0000'},
				{header:'ROS',align:'right',width: 180,sortable: true,dataIndex:'ros',xtype:'numbercolumn',format : '0,00.0000'},			
				{header:'ע���ʱ�',align:'left',width: 150,sortable: true,dataIndex:'zczb'},
				{header:'��ҵ����',align:'left',width: 200,sortable: true,dataIndex:'qylx'},
				{header:'�ɶ�1�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd1jczbl'},
				{header:'�ɶ�2�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd2jczbl'},
				{header:'�ɶ�3�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd3jczbl'},
				{header:'�ɶ�4�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd4jczbl'},
				{header:'�ɶ�5�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd5jczbl'},
				{header:'�ɶ�6�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd6jczbl'},
				{header:'�ɶ�7�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd7jczbl'},
				{header:'�ɶ�8�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd8jczbl'},
				{header:'�ɶ�9�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd9jczbl'},
				{header:'�ɶ�10�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd10jczbl'},
				{header:'�ɶ�11�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd11jczbl'},
				{header:'�ɶ�12�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd12jczbl'},
				{header:'�ɶ�13�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,hidden:true,hideable: true,dataIndex:'gd13jczbl'},
				{header:'�ɶ�14�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd14jczbl'},
				{header:'�ɶ�15�����ʱ���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gd15jczbl'},
				{header:'��˾���',align:'left',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gsjj'},
				{header:'�����ʲ��ϼ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������ծ�ϼ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�ʲ��ܼ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'zchj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��ծ�ϼ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӧ���ʿ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'yszk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӧ���ʿ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'yfzk',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�̶��ʲ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'gdzc',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'jlr',xtype:'numbercolumn',format : '0,00.00'},
				{header:'������Ȩ��ϼ�',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'syzqy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'���۷���',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�������',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00.00'},
				{header:'�������',align:'right',width: 180,sortable: true,hidden:true,hideable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00.00'}				
			];	
		return grid_colModel_array;
	}
}

