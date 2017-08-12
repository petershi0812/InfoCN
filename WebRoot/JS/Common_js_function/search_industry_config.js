/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'search_Industry_dataset'){
		var grid_colModel_array =			
			[					
				_grid_sm,						
				{header:'��λ����',align:'left',width: 250,sortable: true,dataIndex:'dwmc1'},
				{header:'��ҵ����',align:'right',width: 80,sortable: true,dataIndex:'IndustryCode'},			
				{header:'EBITDA[ǧԪ]',align:'right',width: 110,sortable: true,dataIndex:'ebitda',xtype:'numbercolumn',format : '0,00'},
				{header:'ROI[�ٷ�֮һ]',align:'right',width: 110,sortable: true,dataIndex:'roi',xtype:'numbercolumn',format : '0,00.00'},
				{header:'ROA[�ٷ�֮һ]',align:'right',width: 110,sortable: true,dataIndex:'roa',xtype:'numbercolumn',format : '0,00.00'},
				{header:'��������[�ٷ�֮һ]',align:'right',width: 110,sortable: true,dataIndex:'mlrl',xtype:'numbercolumn',format : '0,00.00'},
				{header:'Ӫҵ����[ǧԪ]',align:'right',width: 110,sortable: true,dataIndex:'yysr',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӫҵ����[ǧԪ]',align:'right',width: 110,sortable: true,dataIndex:'yylr',xtype:'numbercolumn',format : '0,00'},				
				{header:'�ʲ��ܼ�[ǧԪ]',align:'right',width: 110,sortable: true,dataIndex:'zjzj',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�ܲ�ֵ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gyzcz',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ����',align:'right',width: 100,sortable: true,dataIndex:'cyrs',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ҫҵ��1',align:'left',width: 180,sortable: true,dataIndex:'zyywhd1'},
				{header:'��Ҫҵ��2',align:'left',width: 180,sortable: true,dataIndex:'zyywhd2'},
				{header:'��Ҫҵ��3',align:'left',width: 180,sortable: true,dataIndex:'zyywhd3'},					
				{header:'ʡ��',align:'left',width: 100,sortable: true,dataIndex:'Province'},
				{header:'�ؼ���',align:'left',width: 100,sortable: true,dataIndex:'City'},
				{header:'��ҵ���',align:'right',width: 80,sortable: true,dataIndex:'kynf'},				
				{header:'�Ǽ�ע������',align:'left',width: 120,sortable: true,dataIndex:'djzclx_cn'},
				{header:'��ҵ�ع����',align:'left',width: 120,sortable: true,dataIndex:'qykgqk_cn'},
								
				//{header:'���',align:'right',width: 50,sortable: true,dataIndex:'Year_id'},
				{header:'��֯��������',align:'left',width: 100,sortable: true,dataIndex:'zzjgdm'},
				{header:'������������',align:'right',width: 100,sortable: true,dataIndex:'AdminCode'},							
				{header:'������',align:'left',width: 100,sortable: true,dataIndex:'District'},
				{header:'�ֵ�',align:'left',width: 150,sortable: true,dataIndex:'Street'},
				{header:'��ί��',align:'left',width: 150,sortable: true,dataIndex:'Committee'},			
				//{header:'��λ������ϸ',align:'left',width: 250,sortable: true,dataIndex:'dwmc2'},
				//{header:'��ҵ����',align:'right',width: 80,sortable: true,dataIndex:'IndustryCode'},
				//{header:'��Ҫҵ��1',align:'left',width: 180,sortable: true,dataIndex:'zyywhd1'},
				//{header:'��Ҫҵ��2',align:'left',width: 180,sortable: true,dataIndex:'zyywhd2'},
				//{header:'��Ҫҵ��3',align:'left',width: 180,sortable: true,dataIndex:'zyywhd3'},
				{header:'��ϸ��ַ',align:'left',width: 250,sortable: true,dataIndex:'xxdz'},
				{header:'����������',align:'left',width: 100,sortable: true,dataIndex:'frdbr'},				
				{header:'��ҵ�·�',align:'right',width: 80,sortable: true,dataIndex:'kyyf'},
				{header:'��;����',align:'right',width: 80,sortable: true,dataIndex:'ctqh'},
				{header:'�̶��绰',align:'right',width: 100,sortable: true,dataIndex:'gddh'},
				{header:'�̻��ֻ���',align:'right',width: 100,sortable: true,dataIndex:'ghfjh'},
				{header:'�������',align:'right',width: 100,sortable: true,dataIndex:'czhm'},
				{header:'����ֻ���',align:'right',width: 100,sortable: true,dataIndex:'czfjh'},
				{header:'��������',align:'right',width: 100,sortable: true,dataIndex:'zzbm'},
				//{header:'�Ǽ�ע������',align:'right',width: 100,sortable: true,dataIndex:'djzclx'},				
				//{header:'��ҵ�ع����',align:'right',width: 100,sortable: true,dataIndex:'qykgqk'},				
				//{header:'������ϵ',align:'right',width: 100,sortable: true,dataIndex:'lsgx'},
				{header:'������ϵ',align:'left',width: 80,sortable: true,dataIndex:'lsgx_cn'},
				{header:'��ҵӪҵ״̬',align:'right',width: 100,sortable: true,dataIndex:'qyyyzt'},
				{header:'ִ�л���ƶ����',align:'right',width: 120,sortable: true,dataIndex:'zxhjzdlb'},
				{header:'������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ncch',xtype:'numbercolumn',format : '0,00'},
				{header:'����_����������Ʒ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_ccp1',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʲ��ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ldzchj',xtype:'numbercolumn',format : '0,00'},
				{header:'����_Ӧ���˿�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_yszk1',xtype:'numbercolumn',format : '0,00'},
				{header:'���[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ch',xtype:'numbercolumn',format : '0,00'},
				{header:'����_�������Ʒ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_ccp2',xtype:'numbercolumn',format : '0,00'},
				{header:'�̶��ʲ��ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gdzchj',xtype:'numbercolumn',format : '0,00'},
				{header:'�̶��ʲ�ԭ��[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gdzcyj',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۼ��۾�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ljzj',xtype:'numbercolumn',format : '0,00'},
				{header:'����_�����۾�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_bnzj',xtype:'numbercolumn',format : '0,00'},				
				{header:'������ծ�ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ldfzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'����_Ӧ���˿�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_yszk2',xtype:'numbercolumn',format : '0,00'},
				{header:'��������ծ�ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'fldfzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'��ծ�ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'fzhj',xtype:'numbercolumn',format : '0,00'},
				{header:'������Ȩ��ϼ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'syzqyhj',xtype:'numbercolumn',format : '0,00'},
				{header:'����_ʵ���ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_sszb',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gjzb',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'jtzb',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'frzb',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'grzb',xtype:'numbercolumn',format : '0,00'},
				{header:'�۰�̨�ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gatzb',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'wszb',xtype:'numbercolumn',format : '0,00'},				
				{header:'����_��Ӫҵ������[ǧԪ]',align:'right',width: 180,sortable: true,dataIndex:'qz_zyywsr',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӫҵ�ɱ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yycb',xtype:'numbercolumn',format : '0,00'},
				{header:'����_��Ӫҵ��ɱ�[ǧԪ]',align:'right',width: 180,sortable: true,dataIndex:'qz_zyywcb',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӫҵ˰�𼰸���[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yysjjfj',xtype:'numbercolumn',format : '0,00'},
				{header:'����_��Ӫҵ��˰�𼰸���[ǧԪ]',align:'right',width: 180,sortable: true,dataIndex:'qz_yysjjfj',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҵ������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qtywlr',xtype:'numbercolumn',format : '0,00'},
				{header:'���۷���[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'xsfy',xtype:'numbercolumn',format : '0,00'},
				{header:'�������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'glfy',xtype:'numbercolumn',format : '0,00'},
				{header:'����_˰��[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_sj',xtype:'numbercolumn',format : '0,00'},
				{header:'�������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'cwfy',xtype:'numbercolumn',format : '0,00'},
				{header:'����_��Ϣ����[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_lxsr',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ϣ֧��[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'lxzc',xtype:'numbercolumn',format : '0,00'},
				{header:'�ʲ���ֵ��ʧ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'zcjzss',xtype:'numbercolumn',format : '0,00'},
				{header:'���ʼ�ֵ�䶯����[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gxjzbdsy',xtype:'numbercolumn',format : '0,00'},
				{header:'Ͷ������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'tzsy',xtype:'numbercolumn',format : '0,00'},				
				{header:'Ӫҵ������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yywsr',xtype:'numbercolumn',format : '0,00'},
				{header:'����_��������[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_btsr',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӫҵ��֧��[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yywzc',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ܶ�[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'ylze',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӧ������˰[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yjsds',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӧ��ְ��н��[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yfzgxc',xtype:'numbercolumn',format : '0,00'},
				{header:'Ӧ����ֵ˰[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'yjzzs',xtype:'numbercolumn',format : '0,00'},				
				{header:'��ҵ���۲�ֵ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'gyxscz',xtype:'numbercolumn',format : '0,00'},
				{header:'����_���ڽ���ֵ[ǧԪ]',align:'right',width: 120,sortable: true,dataIndex:'qz_ckjhz',xtype:'numbercolumn',format : '0,00'}								
			];	
		return grid_colModel_array;
	}
	
	function formatRank(value,metadata){
		if(value <=10){
			//metadata.attr = 'style="background-color:#ff0000"';
			return '<b><font color = red>' + value + '</font></b>';
		}
/*		else if(value>=30 && value<=40){
			return '<b><font color = blue>' + value + '</font></b>';
		}*/
		return value
	}
}

