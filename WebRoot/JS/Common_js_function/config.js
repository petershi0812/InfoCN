/***************************
     * ## ��ҳ���������ú���
     *   @@fun_grid_colModel_config(_grid_sm)���������column����
****************************/  
/*����column������*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'MOH'){
		var grid_colModel_array =			
			[
				_grid_sm,	
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"ҽԺ�ȴ�",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"} ,
				{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,
				{header:"ҽԺ����",align:'left',width: 100,sortable: false,dataIndex:"Hop_Type"} ,
				//{header:"ҽԺ����_Link",align:'left',width: 50,sortable: false,dataIndex:"Hop_Type_Link"} ,				
				//{header:"��ַ",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"�ʱ�",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"�绰",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"����ʱ��",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"ע���ʽ�",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"Ժ��",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				{header:"��������[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				{header:"����ҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"סԺ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				{header:"סԺҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"WM_Income",xtype:'numbercolumn'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				{header:"ҩƷ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"WM_Outcome",xtype:'numbercolumn'},
				{header:"ִҵ[����]ҽʦ",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"��λ��",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				{header:"�������˴���",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ�����˴���",align:'right',width: 120,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'},
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'MCCSC'){
		var grid_colModel_array =			
			[
				_grid_sm,	
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				//{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level"} ,
				//{header:"ҽԺ�ȴ�",align:'left',width: 60,sortable: false,dataIndex:"Grade"} ,
				//{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,			
				//{header:"��ַ",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"�ʱ�",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"�绰",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"����ʱ��",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"ע���ʽ�",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"Ժ��",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				{header:"��������[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				{header:"����ҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"סԺ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				{header:"סԺҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				{header:"ҩƷ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"ִҵ[����]ҽʦ",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"��λ��",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�������˴���",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == '�ֿƴ�λ'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"Ԥ��������",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"ȫ��ҽ�ƿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"�ڿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����ʺ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ�����ݿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲���",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"�ط�����",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"�˶�ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ����",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҽ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���˿�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"�س���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ŀ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"���ÿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ��Ͽ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"��ʹ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"��֢ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == '�ֿ�ҽʦ'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"Ԥ��������",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"ȫ��ҽ�ƿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"�ڿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����ʺ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ�����ݿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲���",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"�ط�����",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"�˶�ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ����",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},			
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anesthesiology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽѧ�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_MedicalLaboratory",xtype:'numbercolumn',format : '0,00'},
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofPathology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽѧӰ���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Radiology",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҽ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ��Ͽ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;				
	}
	else if(_type == '�ֿ��ż���_�ؼ���'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"Ԥ��������",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"ȫ��ҽ�ƿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"�ڿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����ʺ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ�����ݿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲���",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"�ط�����",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"�˶�ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ����",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҽ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���˿�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"�س���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ŀ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"���ÿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ��Ͽ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"��ʹ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"��֢ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;			
	}	
	else if(_type == '�ֿ��ż���'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"Ԥ��������",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"ȫ��ҽ�ƿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"�ڿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����ʺ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ�����ݿ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"�����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲���",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"�ط�����",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"������",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"�˶�ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ����",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҽ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"���˿�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"�س���",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ŀ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"���ÿ�",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ��Ͽ�",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"��ʹ��",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"��֢ҽѧ��",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"����",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;			
	}
	else if(_type == '����'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"��������",align:'left',width: 190,sortable: false,dataIndex:"Disease_Name"}	,
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ��������",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Healing",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ��ת����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Improving",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժδ������",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_NotHealing",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ��������",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Death",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ������",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Healing_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��Ժ��ת��",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Improving_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��Ժδ����",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_NotHealing_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��Ժ������",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Death_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"סԺ����[��Ԫ]",align:'right',width: 150,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00.00'}
			];	
		return grid_colModel_array;			
	}
	else if(_type == 'MOHDisease'){
		var grid_colModel_array =			
			[
				new Ext.grid.RowNumberer({width:30}),	
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				//{header:"ʡ��",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				//{header:"�ؼ���",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"ҽԺ�ȴ�",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"} ,
				//{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,
				//{header:"ҽԺ����",align:'left',width: 100,sortable: false,dataIndex:"Hop_Type"} ,
				//{header:"ҽԺ����_Link",align:'left',width: 50,sortable: false,dataIndex:"Hop_Type_Link"} ,				
				//{header:"��ַ",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"�ʱ�",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"�绰",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"����ʱ��",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"ע���ʽ�",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"Ժ��",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				//{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				//{header:"����ҩƷ����",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				//{header:"סԺ����",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				//{header:"סԺҩƷ����",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				//{header:"��ҩ����",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"WM_Income",xtype:'numbercolumn'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				//{header:"ҩƷ֧��",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"WM_Outcome",xtype:'numbercolumn'},
				//{header:"��ҩ֧��",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"ִҵ[����]ҽʦ",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"��λ��",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				//{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�������˴���",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				//{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'}
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ�����˴���",align:'right',width: 120,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;			
	}
	else if(_type == 'CHC��λ'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 100,sortable: false,dataIndex:"District"},	
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Num_of_MedicalEstablishment",xtype:'numbercolumn',format : '0,00'},
				{header:"��λ��",align:'right',width: 120,sortable: false,dataIndex:"Num_of_Bed"},
				{header:"ִҵ[����]ҽʦ",align:'right',width: 150,sortable: false,dataIndex:"Num_of_Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"ע��Ϊȫ��ҽѧרҵ",align:'right',width: 150,sortable: false,dataIndex:"Num_of_GeneralMedicalProfession",xtype:'numbercolumn',format : '0,00'},
				{header:"ȡ����ѵ�ϸ�֤",align:'right',width: 150,sortable: false,dataIndex:"Num_of_ObtainTrainingCertificate",xtype:'numbercolumn',format : '0,00'},
				{header:"ע�Ụʿ",align:'right',width: 120,sortable: false,dataIndex:"Num_of_RegisteredNurse",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'CHC��֧'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 100,sortable: false,dataIndex:"District"},	
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��������[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"����ҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"סԺ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"סԺҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"����ҩ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"ҩƷ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"��������֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00.00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'CHC����'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 100,sortable: false,dataIndex:"District"},
				{header:"�������˴���",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"��_ԤԼ�����˴���",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}			
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Institutions_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Institutions_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"������",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_Doctors_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Doctors_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"������",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"ҽԺ�ȴ�",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"},				
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_HOPLevel_Only_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,				
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"������",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"ҽԺ����",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"ҽԺ�ȴ�",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"},				
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_Only_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"������",align:'left',width: 100,sortable: false,dataIndex:"District"}	,				
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'HPC_MH_Bed_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Bed_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"������",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺС��",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"��ǻҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"���Ǻ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ѫ�ܲ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ؿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ѪҺ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͯҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ⱦ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"Ƥ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��˲�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"��粡ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ְҵ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ǿ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"�������ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"����������������",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"���ﲿ",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"ר�Ƽ�������Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ��վ",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"���ױ���Ժ",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_SZ_ByType_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"��������[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҩ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"ҩƷ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"��������֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_SZ_ByType_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"ҽ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"��������[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺҩƷ����[��]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҩ������[��]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҩ����[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"ҽ��֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"ҩƷ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"��ҩ֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"��������֧��[��]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_ZL_ByType_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"�������˴���",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"ԤԼ�����˴���",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_ZL_ByType_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"�������˴���",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"�ż����˴�",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"ԤԼ�����˴���",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��������",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == '�ֿ�ҽʦ��'){
		var grid_colModel_array =			
			[					
				//_grid_sm,
				new Ext.grid.RowNumberer(),  
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id",hidden:true,hideable: true},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode",hidden:true,hideable: true},
				//{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				//{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				//{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Name",hidden:true,hideable: true},
				{header:"һ������",align:'left',width: 60,sortable: false,dataIndex:"FirstLevel_Depart"},
				{header:"��������",align:'left',width: 90,sortable: false,dataIndex:"SecondLevel_Depart"},
				{header:"<center>ҽʦ����</center>",align:'right',width: 70,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format:'0'}	
			];
		return grid_colModel_array;			
	}
	else if(_type == '�ֿ�ҽʦ�б�'){
		var grid_colModel_array =			
			[					
				//_grid_sm,
				new Ext.grid.RowNumberer(),  
				//{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id",hidden:true,hideable: true},
				//{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode",hidden:true,hideable: true},
				//{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				//{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				//{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				//{header:"ҽԺ����",align:'left',width: 150,sortable: false,dataIndex:"Hop_Name",hidden:true,hideable: true},
				{header:"ҽʦ����",align:'left',width: 100,sortable: false,dataIndex:"Physician_Name"},
				{header:"ҽʦ����",align:'left',width: 100,sortable: false,dataIndex:"Physician_Type"},
				{header:"ְ��",align:'left',width: 100,sortable: false,dataIndex:"Physician_Title"}	
			];
		return grid_colModel_array;			
	}
	else if(_type == 'סԺ������'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 100,sortable: false,dataIndex:"District"},
				{header:"ҽԺ����",align:'left',width: 80,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"ҽԺ�ȴ�",align:'left',width: 100,sortable: false,dataIndex:"Grade_Link"} ,			
				{header:"��Ժ����",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ�����˴���",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'סԺ������_������'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 100,sortable: false,dataIndex:"District"},			
				{header:"��Ժ����",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ�����˴���",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_����������ҽԺ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"һ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"δ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������˽��ҽԺ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"һ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"δ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽԺ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"һ��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"δ����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"����Ժ",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_�й�ҽԺ�ȼ�_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"ҽԺ����",align:'left',width: 100,sortable: false,dataIndex:"HopLevel_Segments"},				
				{header:"ҽԺ�ܼ�",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"�ۺ�ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"��ҽҽԺ",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽ���ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"����ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"ר��ҽԺ",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽԺסԺ����_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Incharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����_����",align:'right',width: 150,sortable: false,dataIndex:"Incharged_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����_��Ӫ",align:'right',width: 150,sortable: false,dataIndex:"Incharged_Patients_Private",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����_����",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"��Ժ����_��Ӫ",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients_Private",xtype:'numbercolumn',format : '0,00'},								
				{header:"סԺ���������˴���",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ���������˴���_����",align:'right',width: 180,sortable: false,dataIndex:"Operations_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"סԺ���������˴���_��Ӫ",align:'right',width: 180,sortable: false,dataIndex:"Operations_Private",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽԺ�������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"������[��]",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"������_����[��]",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"������_��Ӫ[��]",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients_Private",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_����ҽԺ�����סԺ�����˾�ҽҩ����_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"���ﲡ�˴ξ�ҽҩ��",align:'right',width: 180,sortable: false,dataIndex:"OutpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"���ﲡ�˴ξ�ҩ��",align:'right',width: 180,sortable: false,dataIndex:"OutpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"���ﲡ�˴ξ�����",align:'right',width: 180,sortable: false,dataIndex:"OutpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�ҽҩ��",align:'right',width: 180,sortable: false,dataIndex:"InpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�ҩ��",align:'right',width: 180,sortable: false,dataIndex:"InpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�����",align:'right',width: 180,sortable: false,dataIndex:"InpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�������",align:'right',width: 180,sortable: false,dataIndex:"InpatientOperationsExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_���ع���ҽԺ�����סԺ�����˾�ҽҩ����_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"���ﲡ�˴ξ�ҽҩ��",align:'right',width: 180,sortable: false,dataIndex:"OutpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"���ﲡ�˴ξ�ҩ��",align:'right',width: 180,sortable: false,dataIndex:"OutpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"���ﲡ�˴ξ�����",align:'right',width: 180,sortable: false,dataIndex:"OutpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�ҽҩ��",align:'right',width: 180,sortable: false,dataIndex:"InpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�ҩ��",align:'right',width: 180,sortable: false,dataIndex:"InpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�����",align:'right',width: 180,sortable: false,dataIndex:"InpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"סԺ�����˾�������",align:'right',width: 180,sortable: false,dataIndex:"InpatientOperationsExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��ĩ���˿ں�GDP_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'��ס�˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�����˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'Urban_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ���˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'rural_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'Birth_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'Death_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ȼ������',align:'right',width: 180,sortable: false,dataIndex:'Natural_Growth_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'GDP[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��һ��ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'PromaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڶ���ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'TertiaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��һ��ҵ����',align:'right',width: 180,sortable: false,dataIndex:'PromaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڶ���ҵ����',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������ҵ����',align:'right',width: 180,sortable: false,dataIndex:'TertiaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�GDP',align:'right',width: 180,sortable: false,dataIndex:'GDPyCapita',xtype:'numbercolumn',format : '0,00.0'}								
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��ĩ���˿ں�GDP_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"�������[ƽ������]",align:'right',width: 180,sortable: false,dataIndex:"Area",xtype:'numbercolumn',format : '0,00'},
				{header:"��ס�˿�[��]",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"�����˿�[��]",align:'right',width: 180,sortable: false,dataIndex:"Registered_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"����ܻ���[��]",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds",xtype:'numbercolumn',format : '0,00'},				
				{header:"GRP[��]",align:'right',width: 180,sortable: false,dataIndex:"GRP",xtype:'numbercolumn',format : '0,00'},
				{header:"�˾��ط�������ֵ",align:'right',width: 180,sortable: false,dataIndex:"PerGRP",xtype:'numbercolumn',format : '0,00'},
				{header:"����������ֵ������",align:'right',width: 180,sortable: false,dataIndex:"GRPGR",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��һ��ҵ����",align:'right',width: 180,sortable: false,dataIndex:"PromaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�ڶ���ҵ����",align:'right',width: 180,sortable: false,dataIndex:"SecondaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"������ҵ����",align:'right',width: 180,sortable: false,dataIndex:"TertiaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��ĩ���˿ںͼ�ͥ����_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"���س���",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"��ס�˿�",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"��ס�˿�_��",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_M",xtype:'numbercolumn',format : '0,00'},
				{header:"��ס�˿�_Ů",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_F",xtype:'numbercolumn',format : '0,00'},				
				{header:"�����˿�",align:'right',width: 180,sortable: false,dataIndex:"Registered_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"�����˿�",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_Town",xtype:'numbercolumn',format : '0,00'},
				{header:"����˿�",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_Country",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͥ����",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds",xtype:'numbercolumn',format : '0,00'},
				{header:"��ͥ��_�˿���",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds_Pop",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_�����ܷ���_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"�����ܷ���_������Դ��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧��",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�������֧��",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧��",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�����ܷ���_����[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"THE_Urban",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�����ܷ���_ũ��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"THE_Rural",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�˾���������",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�˾���������_����",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita_Urban",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�˾���������_ũ��",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita_Rural",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�����ܷ���ռGDP�ٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"THE_Pct",xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_�����������ܷ���_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:"�����ܷ���_������Դ��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�������֧��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧��[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��������֧�����ɰٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�����ܷ���ռGDP�ٷֱ�",align:'right',width: 180,sortable: false,dataIndex:"THE_Pct",xtype:'numbercolumn',format : '0,00.0'}	,
				{header:"�˾���������",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita",xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_�����������ܷ�������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:"�����ܷ���_���ڻ�����[��Ԫ]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"ҽԺ",align:'right',width: 180,sortable: false,dataIndex:"TEH_Hop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����ҽԺ",align:'right',width: 180,sortable: false,dataIndex:"TEH_CityHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"��ҽԺ",align:'right',width: 180,sortable: false,dataIndex:"TEH_CountryHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����������������",align:'right',width: 180,sortable: false,dataIndex:"TEH_CHCHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����Ժ",align:'right',width: 180,sortable: false,dataIndex:"TEH_HealthCenter",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����ҽԺ",align:'right',width: 180,sortable: false,dataIndex:"TEH_OthersHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"�������",align:'right',width: 180,sortable: false,dataIndex:"TEH_OutpatientService",xtype:'numbercolumn',format : '0,00.0'},
				{header:"ҩƷ���ۻ���",align:'right',width: 180,sortable: false,dataIndex:"TEH_DrugSales",xtype:'numbercolumn',format : '0,00.0'},
				{header:"������������",align:'right',width: 180,sortable: false,dataIndex:"TEH_PublicHealth",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����������ҽ�Ʊ��չ������",align:'right',width: 180,sortable: false,dataIndex:"TEH_HealthAdmin",xtype:'numbercolumn',format : '0,00.0'},
				{header:"����",align:'right',width: 180,sortable: false,dataIndex:"TEH_Others",xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_�����˿ں�GDP_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'GDP[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��һ��ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP_PrimaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڶ���ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڶ���ҵ_��ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryManufactureIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڶ���ҵ_����ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryArchitectureIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������ҵ[��]',align:'right',width: 180,sortable: false,dataIndex:'GDP_TertiaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�GDP',align:'right',width: 180,sortable: false,dataIndex:'GDPyCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ס�˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_M',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_M_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Ů��[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_F',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Ů��_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_F_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Urban',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_Urban_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Rural',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_Rural_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'BirthRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'DeathRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ȼ������',align:'right',width: 180,sortable: false,dataIndex:'NaturalGrowthRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�㵽ʮ�����˿���[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�㵽ʮ�����˿���_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ʮ�嵽��ʮ�����˿���[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ʮ�嵽��ʮ�����˿���_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ʮ���������˿���[��]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ʮ���������˿���_����',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older_Pct',xtype:'numbercolumn',format : '0,00.0'}							
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_������������֧��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'��������֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'GovernmentHCExp',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ����������֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'MedicalandHealthservicesEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ�Ʊ���֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'MedicalandHealthcaresEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'AdminManagementAffairsEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˿���ƻ���������֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'FamilyPlanningAffairsEXP',xtype:'numbercolumn',format : '0,00.0'}						
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_����������ҽ�Ʊ���֧��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'��������˾����ֽ�����֧��',align:'right',width: 200,sortable: false,dataIndex:'Urban_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������˾�ҽ�Ʊ���֧��',align:'right',width: 200,sortable: false,dataIndex:'Urban_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�������ҽ�Ʊ���֧��ռ������֧��ռ��',align:'right',width: 250,sortable: false,dataIndex:'Urban_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�������֧��',align:'right',width: 200,sortable: false,dataIndex:'Rural_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�ҽ�Ʊ���֧��',align:'right',width: 200,sortable: false,dataIndex:'Rural_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ�����ҽ�Ʊ���֧��ռ������֧��ռ��',align:'right',width: 250,sortable: false,dataIndex:'Rural_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'}						
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_�������������ҽ�Ʊ���֧��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'��������˾����ֽ�����֧��',align:'right',width: 200,sortable: false,dataIndex:'Urban_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������˾�ҽ�Ʊ���֧��',align:'right',width: 200,sortable: false,dataIndex:'Urban_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�������ҽ�Ʊ���֧��ռ������֧��ռ��',align:'right',width: 250,sortable: false,dataIndex:'Urban_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�������֧��',align:'right',width: 200,sortable: false,dataIndex:'Rural_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�ҽ�Ʊ���֧��',align:'right',width: 200,sortable: false,dataIndex:'Rural_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ�����ҽ�Ʊ���֧��ռ������֧��ռ��',align:'right',width: 250,sortable: false,dataIndex:'Rural_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_����ҽ������������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'�ܼ�',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ҽԺ�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۺ�ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'ר��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ�����������ϼ�',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ժ',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'��������',align:'right',width: 180,sortable: false,dataIndex:'VillageHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'���ﲿ��',align:'right',width: 180,sortable: false,dataIndex:'Clinic',xtype:'numbercolumn',format : '0,00'},
				{header:'רҵ���������������ϼ�',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ԥ����������',align:'right',width: 180,sortable: false,dataIndex:'CDC',xtype:'numbercolumn',format : '0,00'},
				{header:'ר�Ƽ�������Ժ��վ',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00'},
				{header:'���ױ���Ժ��վ',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ල��',align:'right',width: 180,sortable: false,dataIndex:'InVS',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������Ա��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ[����]ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'����ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽ�ƻ�����λ��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'�ܼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽԺ�ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۺ�ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר��ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ�����������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������վ[��]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������Ժ[��]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'רҵ���������������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ױ���Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר�Ƽ�������Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ����������[��]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_���������Ҫ����������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"��������",align:'left',width: 190,sortable: false,dataIndex:"Disease_Name"},
				{header:"����",align:'left',width: 70,sortable: false,dataIndex:"UrbanOrRural"},
				{header:'�ܼ�������[ʮ���֮һ]',align:'right',width: 180,sortable: false,dataIndex:'Death_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ɰٷֱ�',align:'right',width: 180,sortable: false,dataIndex:'Death_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������',align:'right',width: 180,sortable: false,dataIndex:'Death_M_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ɰٷֱ�',align:'right',width: 180,sortable: false,dataIndex:'Death_M_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Ů��������',align:'right',width: 180,sortable: false,dataIndex:'Death_F_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ɰٷֱ�',align:'right',width: 180,sortable: false,dataIndex:'Death_F_Pct',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '�������������������'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'��������',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'����ѭ��������',align:'right',width: 180,sortable: false,dataIndex:'CPB_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '�����������������������'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'���������ಡ����������',align:'right',width: 180,sortable: false,dataIndex:'CHD_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'�����Ĥ������',align:'right',width: 180,sortable: false,dataIndex:'VDH_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'��״������·��ֲCABG������',align:'right',width: 200,sortable: false,dataIndex:'CABG_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'������Ѫ��������',align:'right',width: 180,sortable: false,dataIndex:'Aorta_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'����ѭ��_IABP������',align:'right',width: 180,sortable: false,dataIndex:'IABP_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'����ѭ��_ECMO������',align:'right',width: 180,sortable: false,dataIndex:'ECMO_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'������ֲ����������',align:'right',width: 180,sortable: false,dataIndex:'HeartTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'������ֲ����������',align:'right',width: 180,sortable: false,dataIndex:'LungTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'�ķ���ֲ����������',align:'right',width: 180,sortable: false,dataIndex:'Cardiopulmonary_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '������������Ѫ�����������'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'���������ಡ����������',align:'right',width: 180,sortable: false,dataIndex:'CHD_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'������Ѫ��������',align:'right',width: 180,sortable: false,dataIndex:'Aorta_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'������ֲ����������',align:'right',width: 180,sortable: false,dataIndex:'HeartTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'ECMO������',align:'right',width: 180,sortable: false,dataIndex:'ECMO_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_���갴��λ������ҽԺ��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:'ҽԺ����',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'�㵽49��',align:'right',width: 180,sortable: false,dataIndex:'Beds_0to49',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʮ��99��',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'һ�ٵ�199��',align:'right',width: 180,sortable: false,dataIndex:'Beds_100to199',xtype:'numbercolumn',format : '0,00'},
				{header:'���ٵ�299��',align:'right',width: 180,sortable: false,dataIndex:'Beds_200to299',xtype:'numbercolumn',format : '0,00'},
				{header:'���ٵ�399��',align:'right',width: 180,sortable: false,dataIndex:'Beds_300to399',xtype:'numbercolumn',format : '0,00'},
				{header:'�İٵ�499��',align:'right',width: 180,sortable: false,dataIndex:'Beds_400to499',xtype:'numbercolumn',format : '0,00'},
				{header:'��ٵ�799��',align:'right',width: 180,sortable: false,dataIndex:'Beds_500to799',xtype:'numbercolumn',format : '0,00'},
				{header:'�˰��ż�����',align:'right',width: 180,sortable: false,dataIndex:'Beds_800above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������λ������ҽԺ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'�㵽49��',align:'right',width: 180,sortable: false,dataIndex:'Beds_0to49',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʮ��99��',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'һ�ٵ�199��',align:'right',width: 180,sortable: false,dataIndex:'Beds_100to199',xtype:'numbercolumn',format : '0,00'},
				{header:'���ٵ�299��',align:'right',width: 180,sortable: false,dataIndex:'Beds_200to299',xtype:'numbercolumn',format : '0,00'},
				{header:'���ٵ�399��',align:'right',width: 180,sortable: false,dataIndex:'Beds_300to399',xtype:'numbercolumn',format : '0,00'},
				{header:'�İٵ�499��',align:'right',width: 180,sortable: false,dataIndex:'Beds_400to499',xtype:'numbercolumn',format : '0,00'},
				{header:'��ٵ�799��',align:'right',width: 180,sortable: false,dataIndex:'Beds_500to799',xtype:'numbercolumn',format : '0,00'},
				{header:'�˰��ż�����',align:'right',width: 180,sortable: false,dataIndex:'Beds_800above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������λ������CHC��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'Beds_0',xtype:'numbercolumn',format : '0,00'},
				{header:'һ��9��',align:'right',width: 180,sortable: false,dataIndex:'Beds_1to9',xtype:'numbercolumn',format : '0,00'},
				{header:'ʮ��29��',align:'right',width: 180,sortable: false,dataIndex:'Beds_10to29',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʮ��49��',align:'right',width: 180,sortable: false,dataIndex:'Beds_30to49',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʮ��99��',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'һ���ż�����',align:'right',width: 180,sortable: false,dataIndex:'Beds_100above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������������Ա��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ[����]ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽԺ������Ա��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ[����]ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������ҽ��������Ա��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ[����]ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������������������վ������Ա��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ[����]ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽ�ƻ�����λ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ҽԺ�ϼ�',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۺ�ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ���ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'ר��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ժ',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ�����������ϼ�',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ժ',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'רҵ���������������ϼ�',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'ר�Ƽ�������Ժ��վ',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00'},
				{header:'���ױ���Ժ��վ',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ����������',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽԺ�ֿƴ�λ��_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�ܼ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'Ԥ��������',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00'},
				{header:'ȫ��ҽ�ƿ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00'},
				{header:'�ڿ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00'},
				{header:'���',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۿ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʺ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00'},
				{header:'��ǻ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00'},
				{header:'Ƥ����',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00'},
				{header:'ҽ�����ݿ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00'},
				{header:'�����',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ⱦ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00'},
				{header:'��˲���',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ��Ͽ�',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'HDPC_����ҽԺ������֧��_China'){
		var grid_colModel_array =			
			[						
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:'ҽԺ����',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'������[��]',align:'right',width: 180,sortable: false,dataIndex:'Total_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������[��]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ������[��]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Total_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������Ŀ����֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ��֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ա����[��]',align:'right',width: 180,sortable: false,dataIndex:'Personnel_Outcome',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽ�ƻ���������֧��_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'������[��]',align:'right',width: 180,sortable: false,dataIndex:'Total_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������[��]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ������[��]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Total_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������Ŀ����֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ��֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ա����[��]',align:'right',width: 180,sortable: false,dataIndex:'Personnel_Outcome',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'HDPC_����30�ּ���ƽ��סԺҽҩ����_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'��������',align:'left',width: 150,sortable: false,dataIndex:'Disease_Name'},
				{header:'��Ժ����',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00'},
				{header:'ƽ��סԺ��',align:'right',width: 180,sortable: false,dataIndex:'AverageLengthofStay',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�ҽҩ��',align:'right',width: 180,sortable: false,dataIndex:'MedicalExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�ҩ��',align:'right',width: 180,sortable: false,dataIndex:'DrugExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�����',align:'right',width: 180,sortable: false,dataIndex:'TreatmentExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾����Ʒ�',align:'right',width: 180,sortable: false,dataIndex:'InspectionExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾�������',align:'right',width: 180,sortable: false,dataIndex:'OperationsExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�˾��������Ϸ�',align:'right',width: 180,sortable: false,dataIndex:'HygienicMaterialExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽ���������������˴���_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'�������˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽԺ�ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۺ�ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ���ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר��ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����Ժ[��]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ�����������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������վ[��]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������[��]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������Ժ[��]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'רҵ���������������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ױ���Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר�Ƽ�������Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ����������[��]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽԺ��CHC����������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'ҽԺ����',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'�����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ż����˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�۲������۲�����[��]',align:'right',width: 180,sortable: false,dataIndex:'ObservationCases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�����������[��]',align:'right',width: 180,sortable: false,dataIndex:'HealthCheckNumber',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ﲡ����',align:'right',width: 180,sortable: false,dataIndex:'EmergencyCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�۲��Ҳ�����',align:'right',width: 180,sortable: false,dataIndex:'ObservationCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽʦ�վ����������˴�',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}																	
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽ��������������������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 100,sortable: false,dataIndex:"Province"},				
				{header:'�����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ż����˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�۲������۲�����[��]',align:'right',width: 180,sortable: false,dataIndex:'ObservationCases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�����������[��]',align:'right',width: 180,sortable: false,dataIndex:'HealthCheckNumber',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ﲡ����',align:'right',width: 180,sortable: false,dataIndex:'EmergencyCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�۲��Ҳ�����',align:'right',width: 180,sortable: false,dataIndex:'ObservationCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽʦ�վ����������˴�',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}																	
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽԺ�����˴���_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'�����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ί�ۺ�ҽԺ�����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ί��ҽҽԺ�����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients_HDPC_TraHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ż����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ί�ۺ�ҽԺ�ż����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ί��ҽҽԺ�ż����˴���[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients_HDPC_TradHop',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_������ҽԺ�ֿ��ż����˴���_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'���ż����˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Ԥ��������[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ȫ��ҽ�ƿ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ڿ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۿ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�����ʺ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ǻ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Ƥ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽ�����ݿ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�����[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ⱦ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��˲���[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽѧ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽѧ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ְҵ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_OccupationalMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽѧ��[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ��Ͽ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����[��]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'HDPC_����ҽ�ƻ�����Ժ����_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'����Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽԺ�ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۺ�ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ���ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר��ҽԺ[��]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����Ժ[��]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ�����������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������վ[��]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������[��]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������Ժ[��]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'רҵ���������������ϼ�[��]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ױ���Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר�Ƽ�������Ժ��վ[��]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ����������[��]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_�������ҽԺ��CHCסԺ�������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'ҽԺ����',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'סԺ���������˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'CaseFatalityRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ÿ����Ժ����',align:'right',width: 180,sortable: false,dataIndex:'DischargedPatientsPerBed',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ÿ���ż�����Ժ����',align:'right',width: 180,sortable: false,dataIndex:'InpatientsPerHundred',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽʦ�վ�����סԺ����',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_������ҽ����������סԺ�������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'סԺ���������˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'CaseFatalityRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ÿ����Ժ����',align:'right',width: 180,sortable: false,dataIndex:'DischargedPatientsPerBed',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ÿ���ż�����Ժ����',align:'right',width: 180,sortable: false,dataIndex:'InpatientsPerHundred',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ҽʦ�վ�����סԺ����',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����ҽԺ��Ժ����_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00'},
				{header:'����ί�ۺ�ҽԺ��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00'},
				{header:'����ί��ҽҽԺ��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients_HDPC_TraHop',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_������ҽԺ�ֿƳ�Ժ����_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�ܳ�Ժ����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'Ԥ��������[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00'},
				{header:'ȫ��ҽ�ƿ�[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00'},
				{header:'�ڿ�[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00'},
				{header:'���[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00'},
				{header:'����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00'},
				{header:'������[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۿ�[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ʺ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00'},
				{header:'��ǻ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00'},
				{header:'Ƥ����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00'},
				{header:'ҽ�����ݿ�[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00'},
				{header:'�����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ⱦ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00'},
				{header:'��˲���[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00'},
				{header:'������[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00'},
				{header:'ְҵ����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_OccupationalMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽѧ��[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ��Ͽ�[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'����[ǧ]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'HDPC_����������ҽ�ƹ������_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'MCIs',xtype:'numbercolumn',format : '0,00'},
				{header:'��λ��',align:'right',width: 180,sortable: false,dataIndex:'Beds',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ա��',align:'right',width: 180,sortable: false,dataIndex:'Persons',xtype:'numbercolumn',format : '0,00'},
				{header:'�����˴�[��]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ժ����[��]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'HDPC_����������������������վҽ�Ʒ������_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'���������������������˴�[��]',align:'right',width: 250,sortable: false,dataIndex:'CHC_Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������������Ժ����[��]',align:'right',width: 250,sortable: false,dataIndex:'CHC_Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���������������Ĳ���ʹ����',align:'right',width: 200,sortable: false,dataIndex:'CHC_HospitalBedsRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������ƽ��סԺ��',align:'right',width: 200,sortable: false,dataIndex:'CHC_AverageLengthofStay',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������ҽʦ�վ����������˴�',align:'right',width: 250,sortable: false,dataIndex:'CHC_PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����������������ҽʦ�վ�����סԺ����',align:'right',width: 250,sortable: false,dataIndex:'CHC_PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������վ�����˴�[��]',align:'right',width: 200,sortable: false,dataIndex:'CHS_Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'������������վҽʦ�վ����������˴�',align:'right',width: 250,sortable: false,dataIndex:'CHS_PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_��������ˮ��ˮ���õ����_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��ˮ����[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterSupply',xtype:'numbercolumn',format : '0,00'},
				{header:'����������ˮ��[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterConsumptionforResidential',xtype:'numbercolumn',format : '0,00'},
				{header:'ȫ����õ���[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�õ� [��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'ElectricityConsumptionforIndustrial',xtype:'numbercolumn',format : '0,00'},
				{header:'������������õ�[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_��������ˮ��ˮ���õ����_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ˮ����[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterSupply',xtype:'numbercolumn',format : '0,00'},
				{header:'����������ˮ��[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterConsumptionforResidential',xtype:'numbercolumn',format : '0,00'},
				{header:'ȫ����õ���[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�õ� [��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'ElectricityConsumptionforIndustrial',xtype:'numbercolumn',format : '0,00'},
				{header:'������������õ�[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'NBS_����������ָ��_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��ҵ��ˮ�ŷ���[���]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofWastewaterDischarged',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�������������[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideProduced',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ���������ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�̷۳��ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_����������ָ��_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ҵ��ˮ�ŷ���[���]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofWastewaterDischarged',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�������������[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideProduced',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ���������ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�̷۳��ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_���������䷽ʽ�Ļ������Ϳ�����_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��������[��]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·�ÿ�����[��]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·������[��]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'ˮ�˿�����[��]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ú��տ�����[��]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��������[���]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·��������[���]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·������[���]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'ˮ�˻�����[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ú��ջ�������[���]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_���������䷽ʽ�Ļ������Ϳ�����_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��������[��]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·�ÿ�����[��]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·������[��]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'ˮ�˿�����[��]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ú��տ�����[��]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��������[���]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·��������[���]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·������[���]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'ˮ�˻�����[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ú��ջ�������[���]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_������������ۼ�����_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�������Ʒ�����ܶ�[��]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'},
				{header:'����ʵ��ʹ�����ʽ��[����Ԫ]',align:'right',width: 200,sortable: false,dataIndex:'ForeignCapitalActuallyUtilized',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_������������ۼ�����_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'�������Ʒ�����ܶ�[��]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'},
				{header:'����ʵ��ʹ�����ʽ��[����Ԫ]',align:'right',width: 200,sortable: false,dataIndex:'ForeignCapitalActuallyUtilized',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_������ְ��ƽ�����ʼ���ᱣ��ָ��_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'ְ��ƽ������',align:'right',width: 180,sortable: false,dataIndex:'StaffsAvgWages',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ְ���������ϱ��ղα�����',align:'right',width: 200,sortable: false,dataIndex:'PensionInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'�������ҽ�Ʊ��ղα�����',align:'right',width: 180,sortable: false,dataIndex:'MedicalCareInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'ʧҵ���ղα�����',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentInsurance',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_������ְ��ƽ�����ʼ���ᱣ��ָ��_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'ְ��ƽ������',align:'right',width: 180,sortable: false,dataIndex:'StaffsAvgWages',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ְ���������ϱ��ղα�����',align:'right',width: 200,sortable: false,dataIndex:'PensionInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'�������ҽ�Ʊ��ղα�����',align:'right',width: 180,sortable: false,dataIndex:'MedicalCareInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'ʧҵ���ղα�����',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentInsurance',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_�������ҽԺ��CHC��Ա��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'ҽԺ����',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ_����ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʦ',align:'right',width: 180,sortable: false,dataIndex:'Technician',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�ؼ��л���ָ��_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'��ҵ���������ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'���������ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofNOxEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҵ�̷۳��ŷ���[��]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_�ؼ����õ����_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'ȫ����õ���[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'������������õ�[��ǧ��ʱ]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�ؼ��ؼ��л���ͳ������_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'�������',align:'right',width: 180,sortable: false,dataIndex:'Area',xtype:'numbercolumn',format : '0,00'},
				{header:'�����˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'Registered_Population',xtype:'numbercolumn',format : '0,00'},
				{header:'��һ��ҵ����ֵ[��]',align:'right',width: 180,sortable: false,dataIndex:'PrimaryIndustry_valueadd',xtype:'numbercolumn',format : '0,00'},
				{header:'�ڶ���ҵ����ֵ[��]',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry_valueadd',xtype:'numbercolumn',format : '0,00'},
				{header:'������������[��]',align:'right',width: 180,sortable: false,dataIndex:'PublicRevenue',xtype:'numbercolumn',format : '0,00'},
				{header:'��������֧��[��]',align:'right',width: 180,sortable: false,dataIndex:'PublicExpenditure',xtype:'numbercolumn',format : '0,00'},
				{header:'�����������[��]',align:'right',width: 180,sortable: false,dataIndex:'SavingsDeposit',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʳ�ܲ���[��]',align:'right',width: 180,sortable: false,dataIndex:'GrainYeild',xtype:'numbercolumn',format : '0,00'},
				{header:'�޻�����[��]',align:'right',width: 180,sortable: false,dataIndex:'CottonYield',xtype:'numbercolumn',format : '0,00'},
				{header:'���ϲ���[��]',align:'right',width: 180,sortable: false,dataIndex:'OilYield',xtype:'numbercolumn',format : '0,00'},
				{header:'�������[��]',align:'right',width: 180,sortable: false,dataIndex:'MeatYield',xtype:'numbercolumn',format : '0,00'},
				{header:'�̶��ʲ�Ͷ�ʶ�[��]',align:'right',width: 180,sortable: false,dataIndex:'FixedAssets',xtype:'numbercolumn',format : '0,00'},
				{header:'�̶��绰��ĩ�û�',align:'right',width: 180,sortable: false,dataIndex:'FixedTel',xtype:'numbercolumn',format : '0,00'},
				{header:'��ͨ��ѧ��Уѧ����',align:'right',width: 180,sortable: false,dataIndex:'SecondarySchools',xtype:'numbercolumn',format : '0,00'},
				{header:'Сѧ��Уѧ����',align:'right',width: 180,sortable: false,dataIndex:'PrimarySchools',xtype:'numbercolumn',format : '0,00'},
				{header:'ҽ������������λ��',align:'right',width: 180,sortable: false,dataIndex:'HealthCareBeds',xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_�ؼ����������Ʒ�����ܶ�_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'�������Ʒ�����ܶ�[��]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_����������Ͷ����ҵ����������ܶ�_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'������[����Ԫ]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����[����Ԫ]',align:'right',width: 180,sortable: false,dataIndex:'Exports',xtype:'numbercolumn',format : '0,00'},
				{header:'����[����Ԫ]',align:'right',width: 180,sortable: false,dataIndex:'Imports',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�����������˾���֧���_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��֧������',align:'right',width: 180,sortable: false,dataIndex:'DisposableIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ��֧������',align:'right',width: 180,sortable: false,dataIndex:'CashDisposableIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����֧��',align:'right',width: 180,sortable: false,dataIndex:'ConsumptionExpenses',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��',align:'right',width: 180,sortable: false,dataIndex:'CashConsumptionExpenses',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�����������Ѽ۸�ָ������Ʒ���ۼ۸�ָ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��������ָ��',align:'right',width: 180,sortable: false,dataIndex:'CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����_��������ָ��',align:'right',width: 180,sortable: false,dataIndex:'Urban_CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ��_��������ָ��',align:'right',width: 180,sortable: false,dataIndex:'Rural_CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��Ʒ���ۼ۸�ָ��',align:'right',width: 180,sortable: false,dataIndex:'PRI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����_��Ʒ���ۼ۸�ָ��',align:'right',width: 180,sortable: false,dataIndex:'Urban_RPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ��_��Ʒ���ۼ۸�ָ��',align:'right',width: 180,sortable: false,dataIndex:'Rural_RPI',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_��������������ˮƽ_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�����˾�����ˮƽ',align:'right',width: 180,sortable: false,dataIndex:'ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'ũ������˾�����ˮƽ',align:'right',width: 180,sortable: false,dataIndex:'Rural_ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'��������˾�����ˮƽ',align:'right',width: 180,sortable: false,dataIndex:'Urban_ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'�����������ˮƽ�Ա�',align:'right',width: 180,sortable: false,dataIndex:'Comparsion_CE',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�����������ҵ��Աƽ������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�����ҵ��Աƽ������',align:'right',width: 180,sortable: false,dataIndex:'TotalWages',xtype:'numbercolumn',format : '0,00'},
				{header:'�����ڸ�ְ����ҵ��Աƽ������',align:'right',width: 200,sortable: false,dataIndex:'StaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'������ҵ��ҵ��Աƽ������',align:'right',width: 180,sortable: false,dataIndex:'StateStaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'�������ҵ��Աƽ������',align:'right',width: 180,sortable: false,dataIndex:'CollectedStaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'������λ��ҵ��Աƽ������',align:'right',width: 180,sortable: false,dataIndex:'OthersStaffWages',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��������������˾���֧������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'��֧������',align:'right',width: 180,sortable: false,dataIndex:'DepositIncome',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_��������������˾��ֽ�����֧��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�ֽ�����֧��',align:'right',width: 180,sortable: false,dataIndex:'Total_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_ʳƷ',align:'right',width: 180,sortable: false,dataIndex:'Food_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_����',align:'right',width: 180,sortable: false,dataIndex:'Clothing_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ס',align:'right',width: 180,sortable: false,dataIndex:'Residence_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ͥ�豸��Ʒ',align:'right',width: 180,sortable: false,dataIndex:'Facilities_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ͨͨѶ',align:'right',width: 180,sortable: false,dataIndex:'TransCom_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_�Ľ�����',align:'right',width: 180,sortable: false,dataIndex:'Education_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_ҽ�Ʊ���',align:'right',width: 180,sortable: false,dataIndex:'HeathCare_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_����',align:'right',width: 180,sortable: false,dataIndex:'Others_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_����������ʧҵ��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'ʧҵ��',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentRate',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_������ũ������˾�������_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'������',align:'right',width: 180,sortable: false,dataIndex:'PureIncome',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_������ũ������˾��ֽ�����֧��_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�ֽ�����֧��',align:'right',width: 180,sortable: false,dataIndex:'Total_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_ʳƷ',align:'right',width: 180,sortable: false,dataIndex:'Food_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_����',align:'right',width: 180,sortable: false,dataIndex:'Clothing_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ס',align:'right',width: 180,sortable: false,dataIndex:'Residence_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ͥ�豸��Ʒ',align:'right',width: 180,sortable: false,dataIndex:'Facilities_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_��ͨͨѶ',align:'right',width: 180,sortable: false,dataIndex:'TransCom_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_�Ľ�����',align:'right',width: 180,sortable: false,dataIndex:'Education_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_ҽ�Ʊ���',align:'right',width: 180,sortable: false,dataIndex:'HeathCare_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ֽ�����֧��_����',align:'right',width: 180,sortable: false,dataIndex:'Others_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_2010��������˿��ղ�_Street'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'�ؼ���',align:'left',width: 90,sortable: false,dataIndex:'City'},
				{header:'���س���',align:'left',width: 90,sortable: false,dataIndex:'District'},
				{header:'�ֵ�',align:'left',width: 120,sortable: false,dataIndex:'Street'},
				{header:'��ס�˿�',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00'},
				{header:'��ס�˿�_��',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population_M',xtype:'numbercolumn',format : '0,00'},
				{header:'��ס�˿�_Ů',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population_F',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds',xtype:'numbercolumn',format : '0,00'},
				{header:'����_��',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds_M',xtype:'numbercolumn',format : '0,00'},
				{header:'����_Ů',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds_F',xtype:'numbercolumn',format : '0,00'},
				{header:'�㵽14��',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood',xtype:'numbercolumn',format : '0,00'},
				{header:'ʮ���굽65��',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth',xtype:'numbercolumn',format : '0,00'},
				{header:'��ʮ��������',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older',xtype:'numbercolumn',format : '0,00'},
				{header:'�����˿�',align:'right',width: 180,sortable: false,dataIndex:'Registered_Population',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_�������ҽԺ������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'ҽԺ����',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ӪҽԺ',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'һ��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۺ�ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ���ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'ר��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ժ',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������ҽ������������_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'PublicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ӫ',align:'right',width: 180,sortable: false,dataIndex:'PrivateMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ժ',align:'right',width: 180,sortable: false,dataIndex:'HealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'�ֵ�������',align:'right',width: 180,sortable: false,dataIndex:'StreetHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ժ',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'��������',align:'right',width: 180,sortable: false,dataIndex:'VillageClinic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ﲿ',align:'right',width: 180,sortable: false,dataIndex:'Policlinic',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'Clinic',xtype:'numbercolumn',format : '0,00'}							
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_�������ҽԺ��Ա��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"ά��",align:'right',width: 50,sortable: false,dataIndex:"Dimension"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ_����ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'����ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_����������ҽ������������Ա��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"ά��",align:'right',width: 50,sortable: false,dataIndex:"Dimension"},				
				{header:'������Ա',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����������Ա',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵ_����ҽʦ',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'ִҵҽʦ',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'ע�Ụʿ',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'ҩʦ',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'����ʦ',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_�������ҽԺ��λ��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'ҽԺ����',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ӪҽԺ',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'һ��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'�ۺ�ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'��ҽҽԺ',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽ���ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'����ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'ר��ҽԺ',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ժ',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_����������ҽ������������λ��_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'����ҽ�ƻ�������',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����',align:'right',width: 180,sortable: false,dataIndex:'PublicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'��Ӫ',align:'right',width: 180,sortable: false,dataIndex:'PrivateMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00'},
				{header:'����������������',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'������������վ',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ժ',align:'right',width: 180,sortable: false,dataIndex:'HealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'�ֵ�������',align:'right',width: 180,sortable: false,dataIndex:'StreetHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ժ',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'���ﲿ',align:'right',width: 180,sortable: false,dataIndex:'Policlinic',xtype:'numbercolumn',format : '0,00'},
				{header:'����վ',align:'right',width: 180,sortable: false,dataIndex:'NursingStation',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_�������ҽԺ�����˴���_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'�ܼ�[����]',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ӪҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'һ��ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۺ�ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ���ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר��ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����Ժ[����]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_�������ҽԺ��Ժ����_China1'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'����Ժ����[����]',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ӪҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'һ��ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'�ۺ�ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ҽҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽ���ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ר��ҽԺ[����]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'����Ժ[����]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_���������н����õ�״��_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'���н����õ����[ƽ������]',align:'right',width: 180,sortable: false,dataIndex:'csjzyd',xtype:'numbercolumn',format : '0,00'},
				{header:'��ס�õ����[ƽ������]',align:'right',width: 180,sortable: false,dataIndex:'jzydmj',xtype:'numbercolumn',format : '0,00'},
				{header:'���н����õ�ռ�����������',align:'right',width: 180,sortable: false,dataIndex:'csjzydzb',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�������ط�����������֧״��_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'������������[��]',align:'right',width: 180,sortable: false,dataIndex:'ggzzsr',xtype:'numbercolumn',format : '0,00'},
				{header:'��������֧��',align:'right',width: 180,sortable: false,dataIndex:'ggzzzc',xtype:'numbercolumn',format : '0,00'},
				{header:'��ѧ����֧��',align:'right',width: 180,sortable: false,dataIndex:'kxjszc',xtype:'numbercolumn',format : '0,00'},
				{header:'����֧��',align:'right',width: 180,sortable: false,dataIndex:'jyzc',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��������ĩ���ڻ�����������_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ĩ���ڻ�������Ҹ��������[��]',align:'right',width: 200,sortable: false,dataIndex:'nmjrjgrbmgxckye',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ҵ��������',align:'right',width: 180,sortable: false,dataIndex:'jmrmbccccye',xtype:'numbercolumn',format : '0,00'},
				{header:'��ĩ���ڻ�������Ҹ���������',align:'right',width: 200,sortable: false,dataIndex:'nmjrjgrbmgxdkye',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_��������ģ���Ϲ�ҵ�ܲ�ֵ_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ҵ�ܲ�ֵ[��]',align:'right',width: 180,sortable: false,dataIndex:'gzzcz',xtype:'numbercolumn',format : '0,00'},
				{header:'������ҵ',align:'right',width: 180,sortable: false,dataIndex:'nzqy',xtype:'numbercolumn',format : '0,00'},
				{header:'�۰�̨��Ͷ����ҵ',align:'right',width: 180,sortable: false,dataIndex:'gatstzqy',xtype:'numbercolumn',format : '0,00'},
				{header:'����Ͷ����ҵ',align:'right',width: 180,sortable: false,dataIndex:'wstzqy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�����������䷽ʽ����Ŀ�����_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��������[����]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��·�ÿ�����[����]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��·������[����]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ˮ�˿�����[����]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���ú��տ�����[����]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'NBS_�����������䷽ʽ����Ļ�����_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��������[���]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��·��������[���]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'��·������[���]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'ˮ�˻�����[���]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'���ú��ջ�������[��]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_��������Уѧ����_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ͨ�ߵ�ѧУ[��]',align:'right',width: 180,sortable: false,dataIndex:'ptgdxx',xtype:'numbercolumn',format : '0,00'},
				{header:'����[��]',align:'right',width: 180,sortable: false,dataIndex:'gz',xtype:'numbercolumn',format : '0,00'},
				{header:'�е�ְҵ����ѧУ[��]',align:'right',width: 180,sortable: false,dataIndex:'zdzyjyxx',xtype:'numbercolumn',format : '0,00'},
				{header:'��ͨ��ѧ[����]',align:'right',width: 180,sortable: false,dataIndex:'ptzx',xtype:'numbercolumn',format : '0,00.0'},
				{header:'Сѧ[����]',align:'right',width: 180,sortable: false,dataIndex:'xx',xtype:'numbercolumn',format : '0,00.0'},
				{header:'���˸ߵ�ѧУ��Уѧ����[��]',align:'right',width: 180,sortable: false,dataIndex:'crgdxyzxxss',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_��������·������������������⳵ӵ�����_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��ĩʵ�г��е�·���[��ƽ����]',align:'right',width: 180,sortable: false,dataIndex:'nmsycsdlmj',xtype:'numbercolumn',format : '0,00'},
				{header:'��ĩʵ�й�������Ӫ�˳�����[��]',align:'right',width: 180,sortable: false,dataIndex:'nmsyggqcyycsl',xtype:'numbercolumn',format : '0,00'},
				{header:'ȫ�깫��������������[���˴�]',align:'right',width: 180,sortable: false,dataIndex:'qnggqckyzl',xtype:'numbercolumn',format : '0,00'},
				{header:'��ĩʵ�г���������[��]',align:'right',width: 180,sortable: false,dataIndex:'nmsyczqc',xtype:'numbercolumn',format : '0,00'},
				{header:'ÿ����ӵ�й�������[��]',align:'right',width: 180,sortable: false,dataIndex:'mwryyggqc',xtype:'numbercolumn',format : '0,00'},
				{header:'�˾����е�·���[ƽ����]',align:'right',width: 180,sortable: false,dataIndex:'rjcsdlmj',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_������ú����Һ��ʯ������Ӧ���������_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'��������[��������]',align:'right',width: 180,sortable: false,dataIndex:'gqzl',xtype:'numbercolumn',format : '0,00'},
				{header:'������ͥ����[��������]',align:'right',width: 180,sortable: false,dataIndex:'gqjtyl',xtype:'numbercolumn',format : '0,00'},
				{header:'�����˿�[��]',width: 180,sortable: false,dataIndex:'gqrk',xtype:'numbercolumn',format : '0,00'},
				{header:'Һ��ʯ������������[��]',align:'right',width: 180,sortable: false,dataIndex:'yhsyqzl',xtype:'numbercolumn',format : '0,00'},
				{header:'Һ������ͥ����[��]',align:'right',width: 180,sortable: false,dataIndex:'yhqjtyl',xtype:'numbercolumn',format : '0,00'},
				{header:'��Һ�����˿�[��]',align:'right',width: 180,sortable: false,dataIndex:'yyhqrk',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'NBS_�ؼ���GDP_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'GDP[��Ԫ]',align:'right',width: 180,sortable: false,dataIndex:'gdp',xtype:'numbercolumn',format : '0,00'},
				{header:'��һ��ҵ',align:'right',width: 180,sortable: false,dataIndex:'dycy',xtype:'numbercolumn',format : '0,00'},
				{header:'�ڶ���ҵ',align:'right',width: 180,sortable: false,dataIndex:'decy',xtype:'numbercolumn',format : '0,00'},
				{header:'������ҵ',align:'right',width: 180,sortable: false,dataIndex:'dscy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_�ؼ��й���������֧_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'������������[��Ԫ]',align:'right',width: 180,sortable: false,dataIndex:'ggczsr',xtype:'numbercolumn',format : '0,00'},
				{header:'����˰��',align:'right',width: 180,sortable: false,dataIndex:'gxsr',xtype:'numbercolumn',format : '0,00'},
				{header:'��������֧��',align:'right',width: 180,sortable: false,dataIndex:'ggczzc',xtype:'numbercolumn',format : '0,00'},
				{header:'��ѧ����֧��',align:'right',width: 180,sortable: false,dataIndex:'kxjszc',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�ؼ�����ĩ���ڻ�����������_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'��ĩ���ڻ�������Ҹ��������[��]',align:'right',width: 180,sortable: false,dataIndex:'nmjrjgrbmgxckye',xtype:'numbercolumn',format : '0,00'},
				{header:'��������Ҵ��������',align:'right',width: 180,sortable: false,dataIndex:'jmrmbccccye',xtype:'numbercolumn',format : '0,00'},
				{header:'��ĩ���ڻ�������Ҹ���������',align:'right',width: 180,sortable: false,dataIndex:'nmjrjgrbmgxdkye',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_�ؼ����Ͷ�����ҵ״��_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'�ڶ���ҵ',align:'right',width: 180,sortable: false,dataIndex:'decy',xtype:'numbercolumn',format : '0,00'},
				{header:'������ҵ',align:'right',width: 180,sortable: false,dataIndex:'dscy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_�ؼ����˿�״��_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'�����˿�(����)',align:'right',width: 180,sortable: false,dataIndex:'hjrk',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��ĩ�ܻ���(��)',align:'right',width: 180,sortable: false,dataIndex:'nmzhs',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_�ؼ��й�ģ���Ϲ�ҵ��ҵ���_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'��ģ���Ϲ�ҵ��ҵ��λ�� (����',align:'right',width: 180,sortable: false,dataIndex:'qysl',xtype:'numbercolumn',format : '0,00'},
				{header:'��ģ���Ϲ�ҵ�ܲ�ֵ (��Ԫ��',align:'right',width: 180,sortable: false,dataIndex:'zcz',xtype:'numbercolumn',format : '0,00'},
				{header:'��ģ���Ϲ�ҵ��ҵ��Ӫҵ������ (��Ԫ)',align:'right',width: 180,sortable: false,dataIndex:'yyywsr',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_�ؼ�����Уѧ����_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"���س���",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'��ͨ��ѧ��Уѧ����',align:'right',width: 180,sortable: false,dataIndex:'pyzxzxxss',xtype:'numbercolumn',format : '0,00'},
				{header:'Сѧ��Уѧ����',align:'right',width: 180,sortable: false,dataIndex:'xxzxxss',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_��������֧�����������֧��_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"���",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"������������",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"ʡ��",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"�ؼ���",align:'left',width: 120,sortable: false,dataIndex:"City"},				
				{header:'ũ������˾���֧������',align:'right',width: 180,sortable: false,dataIndex:'Rural_DepositIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�����֧��',align:'right',width: 180,sortable: false,dataIndex:'Rural_ConsumptionExp',xtype:'numbercolumn',format : '0,00.0'},
				{header:'ũ������˾�����֧��',align:'right',width: 180,sortable: false,dataIndex:'Urban_DepositIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'��������˾�����֧��',align:'right',width: 180,sortable: false,dataIndex:'Urban_ConsumptionExp',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	
	
	
	
	
}
