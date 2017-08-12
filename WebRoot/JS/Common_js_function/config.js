/***************************
     * ## 该页面所有配置函数
     *   @@fun_grid_colModel_config(_grid_sm)：主界面的column配置
****************************/  
/*返回column的数组*/
function fun_grid_colModel_config(_type,_grid_sm){
	if(_type == 'MOH'){
		var grid_colModel_array =			
			[
				_grid_sm,	
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院名称",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				{header:"医院级别",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"医院等次",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"} ,
				{header:"医院性质",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,
				{header:"医院类型",align:'left',width: 100,sortable: false,dataIndex:"Hop_Type"} ,
				//{header:"医院类型_Link",align:'left',width: 50,sortable: false,dataIndex:"Hop_Type_Link"} ,				
				//{header:"地址",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"邮编",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"电话",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"成立时间",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"注册资金",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"院长",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				{header:"门诊收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				{header:"门诊药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"住院收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				{header:"住院药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"中药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"西药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"WM_Income",xtype:'numbercolumn'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				{header:"药品支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"中药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"西药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"WM_Outcome",xtype:'numbercolumn'},
				{header:"执业[助理]医师",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"床位数",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				{header:"总诊疗人次数",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"住院手术人次数",align:'right',width: 120,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'},
				{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'MCCSC'){
		var grid_colModel_array =			
			[
				_grid_sm,	
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院名称",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				//{header:"医院级别",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level"} ,
				//{header:"医院等次",align:'left',width: 60,sortable: false,dataIndex:"Grade"} ,
				//{header:"医院性质",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,			
				//{header:"地址",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"邮编",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"电话",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"成立时间",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"注册资金",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"院长",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				{header:"门诊收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				{header:"门诊药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"住院收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				{header:"住院药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				{header:"中药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				{header:"药品支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"中药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"执业[助理]医师",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"床位数",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"总诊疗人次数",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == '分科床位'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"总计",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"预防保健科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"全科医疗科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"内科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"外科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"儿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻咽喉科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗美容科",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"精神科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"传染科",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"地方病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"急诊医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"运动医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"中医科",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"骨伤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"肛肠科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"针灸科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"推拿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合科",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"疼痛科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"重症医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"其他",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == '分科医师'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"总计",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"预防保健科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"全科医疗科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"内科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"外科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"儿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻咽喉科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗美容科",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"精神科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"传染科",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"地方病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"急诊医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"运动医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},			
				{header:"麻醉科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anesthesiology",xtype:'numbercolumn',format : '0,00'},
				{header:"医学检验科",align:'right',width: 70,sortable: false,dataIndex:"Depart_MedicalLaboratory",xtype:'numbercolumn',format : '0,00'},
				{header:"病理科",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofPathology",xtype:'numbercolumn',format : '0,00'},
				{header:"医学影像科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Radiology",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"中医科",align:'right',width: 100,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合科",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"其他",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;				
	}
	else if(_type == '分科门急诊_地级市'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"总计",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"预防保健科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"全科医疗科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"内科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"外科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"儿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻咽喉科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗美容科",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"精神科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"传染科",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"地方病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"急诊医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"运动医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"中医科",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"骨伤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"肛肠科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"针灸科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"推拿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合科",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"疼痛科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"重症医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"其他",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;			
	}	
	else if(_type == '分科门急诊'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"总计",align:'right',width: 100,sortable: false,dataIndex:"Depart_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"预防保健科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Preventivehealthcare",xtype:'numbercolumn',format : '0,00'},
				{header:"全科医疗科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Generalpractice",xtype:'numbercolumn',format : '0,00'},
				{header:"内科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Medicine",xtype:'numbercolumn',format : '0,00'},
				{header:"外科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Surgical",xtype:'numbercolumn',format : '0,00'},
				{header:"儿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pediatrics",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科",align:'right',width: 70,sortable: false,dataIndex:"Depart_ObstetricsandGynecology",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Ophthalmology",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻咽喉科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Otorhinolaryngology",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Stomatology",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Dermatology",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗美容科",align:'right',width: 100,sortable: false,dataIndex:"Depart_MedicalCosmetology",xtype:'numbercolumn',format : '0,00'},
				{header:"精神科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Psychiatric",xtype:'numbercolumn',format : '0,00'},
				{header:"传染科",align:'right',width: 70,sortable: false,dataIndex:"Depart_DepartmentofInfectiousDiseases",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_TuberculosisDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"地方病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_EndemicDiseasesBranch",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Oncology",xtype:'numbercolumn',format : '0,00'},
				{header:"急诊医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EmergencyMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_Rehabilitation",xtype:'numbercolumn',format : '0,00'},
				{header:"运动医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_SportsMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病科",align:'right',width: 80,sortable: false,dataIndex:"Depart_OccupationalDivision",xtype:'numbercolumn',format : '0,00'},
				{header:"中医科",align:'right',width: 70,sortable: false,dataIndex:"Depart_TraditionalChineseMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"骨伤科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Orthopedics",xtype:'numbercolumn',format : '0,00'},
				{header:"肛肠科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Anorectal",xtype:'numbercolumn',format : '0,00'},
				{header:"针灸科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Acupuncture",xtype:'numbercolumn',format : '0,00'},
				{header:"推拿科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Massagedepartment",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_EthnicMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合科",align:'right',width: 100,sortable: false,dataIndex:"Depart_IntegratedMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"疼痛科",align:'right',width: 70,sortable: false,dataIndex:"Depart_Pains",xtype:'numbercolumn',format : '0,00'},
				{header:"重症医学科",align:'right',width: 100,sortable: false,dataIndex:"Depart_CriticalCareMedicine",xtype:'numbercolumn',format : '0,00'},
				{header:"其他",align:'right',width: 70,sortable: false,dataIndex:"Depart_Others",xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;			
	}
	else if(_type == '疾病'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"疾病名称",align:'left',width: 190,sortable: false,dataIndex:"Disease_Name"}	,
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院治愈人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Healing",xtype:'numbercolumn',format : '0,00'},
				{header:"出院好转人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Improving",xtype:'numbercolumn',format : '0,00'},
				{header:"出院未愈人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_NotHealing",xtype:'numbercolumn',format : '0,00'},
				{header:"出院死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients_Death",xtype:'numbercolumn',format : '0,00'},
				{header:"出院治愈率",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Healing_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"出院好转率",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Improving_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"出院未愈率",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_NotHealing_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"出院死亡率",align:'right',width: 90,sortable: false,dataIndex:"Discharged_Patients_Death_Pct",xtype:'numbercolumn',format : '0,00.00'},
				{header:"住院收入[万元]",align:'right',width: 150,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00.00'}
			];	
		return grid_colModel_array;			
	}
	else if(_type == 'MOHDisease'){
		var grid_colModel_array =			
			[
				new Ext.grid.RowNumberer({width:30}),	
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				//{header:"省份",align:'left',width: 70,sortable: false,dataIndex:"Province"},
				//{header:"地级市",align:'left',width: 70,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院名称",align:'left',width: 200,sortable: false,dataIndex:"Hop_Name"} ,
				{header:"医院级别",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"医院等次",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"} ,
				//{header:"医院性质",align:'left',width: 60,sortable: false,dataIndex:"Property"} ,
				//{header:"医院类型",align:'left',width: 100,sortable: false,dataIndex:"Hop_Type"} ,
				//{header:"医院类型_Link",align:'left',width: 50,sortable: false,dataIndex:"Hop_Type_Link"} ,				
				//{header:"地址",align:'left',width: 250,sortable: false,dataIndex:"Address_id"} ,
				//{header:"邮编",align:'left',width: 50,sortable: false,dataIndex:"Code"} ,
				//{header:"电话",align:'left',width: 80,sortable: false,dataIndex:"Telephone"} ,
				//{header:"成立时间",align:'left',width: 60,sortable: false,dataIndex:"Launch_Date"} ,
				//{header:"注册资金",align:'left',width: 80,sortable: false,dataIndex:"Captial"} ,
				//{header:"院长",align:'left',width: 80,sortable: false,dataIndex:"Dean"} ,				
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn'},
				//{header:"门诊收入",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn'},
				//{header:"门诊药品收入",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn'},
				//{header:"住院收入",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn'},
				//{header:"住院药品收入",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn'},
				//{header:"中药收入",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn'},
				{header:"西药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"WM_Income",xtype:'numbercolumn'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn'},
				//{header:"药品支出",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn'},
				{header:"西药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"WM_Outcome",xtype:'numbercolumn'},
				//{header:"中药支出",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn'},
				{header:"执业[助理]医师",align:'right',width: 120,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"床位数",align:'right',width: 100,sortable: false,dataIndex:"Bed",xtype:'numbercolumn',format : '0,00'},
				//{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"总诊疗人次数",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				//{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'}
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"住院手术人次数",align:'right',width: 120,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}				
			];	
		return grid_colModel_array;			
	}
	else if(_type == 'CHC床位'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 100,sortable: false,dataIndex:"District"},	
				{header:"机构个数",align:'right',width: 100,sortable: false,dataIndex:"Num_of_MedicalEstablishment",xtype:'numbercolumn',format : '0,00'},
				{header:"床位数",align:'right',width: 120,sortable: false,dataIndex:"Num_of_Bed"},
				{header:"执业[助理]医师",align:'right',width: 150,sortable: false,dataIndex:"Num_of_Physician",xtype:'numbercolumn',format : '0,00'},
				{header:"注册为全科医学专业",align:'right',width: 150,sortable: false,dataIndex:"Num_of_GeneralMedicalProfession",xtype:'numbercolumn',format : '0,00'},
				{header:"取得培训合格证",align:'right',width: 150,sortable: false,dataIndex:"Num_of_ObtainTrainingCertificate",xtype:'numbercolumn',format : '0,00'},
				{header:"注册护士",align:'right',width: 120,sortable: false,dataIndex:"Num_of_RegisteredNurse",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'CHC收支'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 100,sortable: false,dataIndex:"District"},	
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"门诊收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"门诊药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"住院收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"住院药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"中药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"基本药物收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00.00'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"药品支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"中药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00.00'},
				{header:"公共卫生支出[万]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00.00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'CHC诊疗'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 100,sortable: false,dataIndex:"District"},
				{header:"总诊疗人次数",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"内_预约诊疗人次数",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}			
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Institutions_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Institutions_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县市",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_Doctors_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Doctors_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县市",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院级别",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"医院等次",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"},				
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_HOPLevel_Only_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,				
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县市",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"医院级别",align:'left',width: 60,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"医院等次",align:'left',width: 60,sortable: false,dataIndex:"Grade_Link"},				
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HPC_MH_HOPLevel_Only_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县市",align:'left',width: 100,sortable: false,dataIndex:"District"}	,				
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'HPC_MH_Bed_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_Bed_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县市",align:'left',width: 100,sortable: false,dataIndex:"District"}	,
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hospital_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院小计",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"口腔医院",align:'right',width: 100,sortable: false,dataIndex:"DentalHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"眼科医院",align:'right',width: 100,sortable: false,dataIndex:"EyeHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"耳鼻喉科医院",align:'right',width: 100,sortable: false,dataIndex:"ENTHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"肿瘤医院",align:'right',width: 100,sortable: false,dataIndex:"CancerHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"心血管病医院",align:'right',width: 100,sortable: false,dataIndex:"CardiovascularHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"胸科医院",align:'right',width: 100,sortable: false,dataIndex:"ChestHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"血液病医院",align:'right',width: 100,sortable: false,dataIndex:"BloodDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"妇产科医院",align:'right',width: 100,sortable: false,dataIndex:"ObstetricsandGynecologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"儿童医院",align:'right',width: 100,sortable: false,dataIndex:"ChildrensHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"精神病医院",align:'right',width: 100,sortable: false,dataIndex:"PsychiatricHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"传染病医院",align:'right',width: 100,sortable: false,dataIndex:"InfectiousDiseasesHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"皮肤病医院",align:'right',width: 100,sortable: false,dataIndex:"DermatologyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"结核病医院",align:'right',width: 100,sortable: false,dataIndex:"TuberculosisHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"麻风病医院",align:'right',width: 100,sortable: false,dataIndex:"LeprosyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"职业病医院",align:'right',width: 100,sortable: false,dataIndex:"OccupationalDiseaseHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"骨科医院",align:'right',width: 100,sortable: false,dataIndex:"OrthopaedicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"康复医院",align:'right',width: 100,sortable: false,dataIndex:"RehabilitationHospital",xtype:'numbercolumn',format : '0,00'},				
				{header:"整形外科医院",align:'right',width: 100,sortable: false,dataIndex:"PlasticSurgeryHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"美容医院",align:'right',width: 100,sortable: false,dataIndex:"BeautyHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"其他专科医院",align:'right',width: 100,sortable: false,dataIndex:"Otherhospital",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'},
				{header:"社区卫生服务中心",align:'right',width: 100,sortable: false,dataIndex:"CommunityHealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"卫生院",align:'right',width: 100,sortable: false,dataIndex:"HealthCenter",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊部",align:'right',width: 100,sortable: false,dataIndex:"Clinic",xtype:'numbercolumn',format : '0,00'},
				{header:"专科疾病防治院所站",align:'right',width: 100,sortable: false,dataIndex:"DiseasePreventionstation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院所站",align:'right',width: 100,sortable: false,dataIndex:"MCHInstitutesStation",xtype:'numbercolumn',format : '0,00'},
				{header:"妇幼保健院",align:'right',width: 100,sortable: false,dataIndex:"MCH",xtype:'numbercolumn',format : '0,00'},
				{header:"疗养院",align:'right',width: 100,sortable: false,dataIndex:"NursingHome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_SZ_ByType_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院类型",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"住院收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"住院药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"基本药物收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"中药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"药品支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"中药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"公共卫生支出[万]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_SZ_ByType_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院类型",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"医疗收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"门诊药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Outpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"住院收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"住院药品收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Inpatient_Drug_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"基本药物收入[万]",align:'right',width: 100,sortable: false,dataIndex:"Essentialdrugs_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"中药收入[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Income",xtype:'numbercolumn',format : '0,00'},
				{header:"医疗支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Total_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"药品支出[万]",align:'right',width: 100,sortable: false,dataIndex:"Drug_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"中药支出[万]",align:'right',width: 100,sortable: false,dataIndex:"TCM_Outcome",xtype:'numbercolumn',format : '0,00'},
				{header:"公共卫生支出[万]",align:'right',width: 100,sortable: false,dataIndex:"PublicHealth_Outcome",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_ZL_ByType_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"医院类型",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"总诊疗人次数",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"预约诊疗人次数",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HPC_MH_ZL_ByType_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院类型",align:'left',width: 150,sortable: false,dataIndex:"Hop_Type"} ,
				{header:"总诊疗人次数",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"门急诊人次",align:'right',width: 100,sortable: false,dataIndex:"Outpatients",xtype:'numbercolumn',format : '0,00'},
				{header:"预约诊疗人次数",align:'right',width: 150,sortable: false,dataIndex:"ClinicAppointment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"死亡人数",align:'right',width: 100,sortable: false,dataIndex:"Dead_Patients",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == '分科医师数'){
		var grid_colModel_array =			
			[					
				//_grid_sm,
				new Ext.grid.RowNumberer(),  
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id",hidden:true,hideable: true},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode",hidden:true,hideable: true},
				//{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				//{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				//{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"医院名称",align:'left',width: 150,sortable: false,dataIndex:"Hop_Name",hidden:true,hideable: true},
				{header:"一级科室",align:'left',width: 60,sortable: false,dataIndex:"FirstLevel_Depart"},
				{header:"二级科室",align:'left',width: 90,sortable: false,dataIndex:"SecondLevel_Depart"},
				{header:"<center>医师数量</center>",align:'right',width: 70,sortable: false,dataIndex:"Physician",xtype:'numbercolumn',format:'0'}	
			];
		return grid_colModel_array;			
	}
	else if(_type == '分科医师列表'){
		var grid_colModel_array =			
			[					
				//_grid_sm,
				new Ext.grid.RowNumberer(),  
				//{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id",hidden:true,hideable: true},
				//{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode",hidden:true,hideable: true},
				//{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				//{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				//{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				//{header:"医院名称",align:'left',width: 150,sortable: false,dataIndex:"Hop_Name",hidden:true,hideable: true},
				{header:"医师名字",align:'left',width: 100,sortable: false,dataIndex:"Physician_Name"},
				{header:"医师类型",align:'left',width: 100,sortable: false,dataIndex:"Physician_Type"},
				{header:"职称",align:'left',width: 100,sortable: false,dataIndex:"Physician_Title"}	
			];
		return grid_colModel_array;			
	}
	else if(_type == '住院手术量'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 100,sortable: false,dataIndex:"District"},
				{header:"医院级别",align:'left',width: 80,sortable: false,dataIndex:"Grade_Level_Link"} ,
				{header:"医院等次",align:'left',width: 100,sortable: false,dataIndex:"Grade_Link"} ,			
				{header:"出院人数",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"住院手术人次数",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == '住院手术量_区县市'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 100,sortable: false,dataIndex:"District"},			
				{header:"出院人数",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"住院手术人次数",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_各地区公立医院数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"三级医院",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"二级医院",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"一级医院",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"未评级医院",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区私立医院数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"三级医院",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"二级医院",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"一级医院",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"未评级医院",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医院数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"三级医院",align:'right',width: 100,sortable: false,dataIndex:"ThreeLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"二级医院",align:'right',width: 100,sortable: false,dataIndex:"SecondLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"一级医院",align:'right',width: 100,sortable: false,dataIndex:"OneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"未评级医院",align:'right',width: 100,sortable: false,dataIndex:"NoneLevelHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'},
				{header:"护理院",align:'right',width: 100,sortable: false,dataIndex:"NursingHomes",xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_中国医院等级_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"医院分类",align:'left',width: 100,sortable: false,dataIndex:"HopLevel_Segments"},				
				{header:"医院总计",align:'right',width: 100,sortable: false,dataIndex:"Hop_Total",xtype:'numbercolumn',format : '0,00'},
				{header:"综合医院",align:'right',width: 100,sortable: false,dataIndex:"GeneralHospital",xtype:'numbercolumn',format : '0,00'},								
				{header:"中医医院",align:'right',width: 100,sortable: false,dataIndex:"ChineseMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"中西医结合医院",align:'right',width: 100,sortable: false,dataIndex:"IntegrativeMedicineHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"民族医院",align:'right',width: 100,sortable: false,dataIndex:"EthnicHospital",xtype:'numbercolumn',format : '0,00'},
				{header:"专科医院",align:'right',width: 100,sortable: false,dataIndex:"SpecialHospital_Subtotal",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地医院住院服务_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"入院人数",align:'right',width: 100,sortable: false,dataIndex:"Incharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"入院人数_公立",align:'right',width: 150,sortable: false,dataIndex:"Incharged_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"入院人数_民营",align:'right',width: 150,sortable: false,dataIndex:"Incharged_Patients_Private",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数",align:'right',width: 100,sortable: false,dataIndex:"Discharged_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数_公立",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"出院人数_民营",align:'right',width: 150,sortable: false,dataIndex:"Discharged_Patients_Private",xtype:'numbercolumn',format : '0,00'},								
				{header:"住院病人手术人次数",align:'right',width: 150,sortable: false,dataIndex:"Operations",xtype:'numbercolumn',format : '0,00'},
				{header:"住院病人手术人次数_公立",align:'right',width: 180,sortable: false,dataIndex:"Operations_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"住院病人手术人次数_民营",align:'right',width: 180,sortable: false,dataIndex:"Operations_Private",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地医院门诊服务_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"诊疗量[万]",align:'right',width: 100,sortable: false,dataIndex:"Treatment_Patients",xtype:'numbercolumn',format : '0,00'},
				{header:"诊疗量_公立[万]",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients_Public",xtype:'numbercolumn',format : '0,00'},
				{header:"诊疗量_民营[万]",align:'right',width: 150,sortable: false,dataIndex:"Treatment_Patients_Private",xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_各地医院门诊和住院病人人均医药费用_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"门诊病人次均医药费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"门诊病人次均药费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"门诊病人次均检查费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均医药费",align:'right',width: 180,sortable: false,dataIndex:"InpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均药费",align:'right',width: 180,sortable: false,dataIndex:"InpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均检查费",align:'right',width: 180,sortable: false,dataIndex:"InpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均手术费",align:'right',width: 180,sortable: false,dataIndex:"InpatientOperationsExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地公立医院门诊和住院病人人均医药费用_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},
				{header:"门诊病人次均医药费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"门诊病人次均药费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"门诊病人次均检查费",align:'right',width: 180,sortable: false,dataIndex:"OutpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均医药费",align:'right',width: 180,sortable: false,dataIndex:"InpatientMedicalExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均药费",align:'right',width: 180,sortable: false,dataIndex:"InpatientDrugExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均检查费",align:'right',width: 180,sortable: false,dataIndex:"InpatientInspectionExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"住院病人人均手术费",align:'right',width: 180,sortable: false,dataIndex:"InpatientOperationsExpensesPerPop",xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_年末总人口和GDP_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'常住人口[万]',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇人口[万]',align:'right',width: 180,sortable: false,dataIndex:'Urban_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村人口[万]',align:'right',width: 180,sortable: false,dataIndex:'rural_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'出生率',align:'right',width: 180,sortable: false,dataIndex:'Birth_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'死亡率',align:'right',width: 180,sortable: false,dataIndex:'Death_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'自然增长率',align:'right',width: 180,sortable: false,dataIndex:'Natural_Growth_Rate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'GDP[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第一产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'PromaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第二产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第三产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'TertiaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第一产业比重',align:'right',width: 180,sortable: false,dataIndex:'PromaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第二产业比重',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第三产业比重',align:'right',width: 180,sortable: false,dataIndex:'TertiaryIndustry_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均GDP',align:'right',width: 180,sortable: false,dataIndex:'GDPyCapita',xtype:'numbercolumn',format : '0,00.0'}								
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_年末总人口和GDP_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"土地面积[平方公里]",align:'right',width: 180,sortable: false,dataIndex:"Area",xtype:'numbercolumn',format : '0,00'},
				{header:"常住人口[万]",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"户籍人口[万]",align:'right',width: 180,sortable: false,dataIndex:"Registered_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"年底总户数[万]",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds",xtype:'numbercolumn',format : '0,00'},				
				{header:"GRP[亿]",align:'right',width: 180,sortable: false,dataIndex:"GRP",xtype:'numbercolumn',format : '0,00'},
				{header:"人均地方生产总值",align:'right',width: 180,sortable: false,dataIndex:"PerGRP",xtype:'numbercolumn',format : '0,00'},
				{header:"地区生产总值增长率",align:'right',width: 180,sortable: false,dataIndex:"GRPGR",xtype:'numbercolumn',format : '0,00.0'},
				{header:"第一产业比重",align:'right',width: 180,sortable: false,dataIndex:"PromaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"第二产业比重",align:'right',width: 180,sortable: false,dataIndex:"SecondaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"第三产业比重",align:'right',width: 180,sortable: false,dataIndex:"TertiaryIndustry_Pct",xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_年末总人口和家庭户数_District'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 100,sortable: false,dataIndex:"City"}	,
				{header:"区县城市",align:'left',width: 70,sortable: false,dataIndex:"District"},
				{header:"常住人口",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"常住人口_男",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_M",xtype:'numbercolumn',format : '0,00'},
				{header:"常住人口_女",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_F",xtype:'numbercolumn',format : '0,00'},				
				{header:"户籍人口",align:'right',width: 180,sortable: false,dataIndex:"Registered_Population",xtype:'numbercolumn',format : '0,00'},
				{header:"城镇人口",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_Town",xtype:'numbercolumn',format : '0,00'},
				{header:"乡村人口",align:'right',width: 180,sortable: false,dataIndex:"Year_end_Population_Country",xtype:'numbercolumn',format : '0,00'},
				{header:"家庭户数",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds",xtype:'numbercolumn',format : '0,00'},
				{header:"家庭户_人口数",align:'right',width: 180,sortable: false,dataIndex:"TotalHouseholds_Pop",xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_卫生总费用_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"卫生总费用_基于来源法[亿元]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"政府卫生支出",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"社会卫生支出",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"个人卫生支出",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"政府卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"社会卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"个人卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生总费用_城市[亿元]",align:'right',width: 180,sortable: false,dataIndex:"THE_Urban",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生总费用_农村[亿元]",align:'right',width: 180,sortable: false,dataIndex:"THE_Rural",xtype:'numbercolumn',format : '0,00.0'},
				{header:"人均卫生费用",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita",xtype:'numbercolumn',format : '0,00.0'},
				{header:"人均卫生费用_城市",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita_Urban",xtype:'numbercolumn',format : '0,00.0'},
				{header:"人均卫生费用_农村",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita_Rural",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生总费用占GDP百分比",align:'right',width: 180,sortable: false,dataIndex:"THE_Pct",xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区卫生总费用_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:"卫生总费用_基于来源法[亿元]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"政府卫生支出[亿元]",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"社会卫生支出[亿元]",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"个人卫生支出[亿元]",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp",xtype:'numbercolumn',format : '0,00.0'},
				{header:"政府卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"GovernmentHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"社会卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"SocialHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"个人卫生支出构成百分比",align:'right',width: 180,sortable: false,dataIndex:"IndividualHCExp_Pct",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生总费用占GDP百分比",align:'right',width: 180,sortable: false,dataIndex:"THE_Pct",xtype:'numbercolumn',format : '0,00.0'}	,
				{header:"人均卫生费用",align:'right',width: 180,sortable: false,dataIndex:"TEHByCapita",xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_各地区卫生总费用流向_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:"卫生总费用_基于机构法[亿元]",align:'right',width: 180,sortable: false,dataIndex:"TEH",xtype:'numbercolumn',format : '0,00.0'},
				{header:"医院",align:'right',width: 180,sortable: false,dataIndex:"TEH_Hop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"城市医院",align:'right',width: 180,sortable: false,dataIndex:"TEH_CityHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"县医院",align:'right',width: 180,sortable: false,dataIndex:"TEH_CountryHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"社区卫生服务中心",align:'right',width: 180,sortable: false,dataIndex:"TEH_CHCHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生院",align:'right',width: 180,sortable: false,dataIndex:"TEH_HealthCenter",xtype:'numbercolumn',format : '0,00.0'},
				{header:"其他医院",align:'right',width: 180,sortable: false,dataIndex:"TEH_OthersHop",xtype:'numbercolumn',format : '0,00.0'},
				{header:"门诊机构",align:'right',width: 180,sortable: false,dataIndex:"TEH_OutpatientService",xtype:'numbercolumn',format : '0,00.0'},
				{header:"药品零售机构",align:'right',width: 180,sortable: false,dataIndex:"TEH_DrugSales",xtype:'numbercolumn',format : '0,00.0'},
				{header:"公共卫生机构",align:'right',width: 180,sortable: false,dataIndex:"TEH_PublicHealth",xtype:'numbercolumn',format : '0,00.0'},
				{header:"卫生行政和医疗保险管理机构",align:'right',width: 180,sortable: false,dataIndex:"TEH_HealthAdmin",xtype:'numbercolumn',format : '0,00.0'},
				{header:"其他",align:'right',width: 180,sortable: false,dataIndex:"TEH_Others",xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_历年人口和GDP_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'GDP[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第一产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP_PrimaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第二产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第二产业_工业[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryManufactureIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第二产业_建筑业[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP_SecondaryArchitectureIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'第三产业[亿]',align:'right',width: 180,sortable: false,dataIndex:'GDP_TertiaryIndustry',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均GDP',align:'right',width: 180,sortable: false,dataIndex:'GDPyCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'常住人口[万]',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00.0'},
				{header:'男性[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_M',xtype:'numbercolumn',format : '0,00.0'},
				{header:'男性_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_M_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'女性[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_F',xtype:'numbercolumn',format : '0,00.0'},
				{header:'女性_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_F_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Urban',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_Urban_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'乡村[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Rural',xtype:'numbercolumn',format : '0,00.0'},
				{header:'乡村_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_Rural_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'出生率',align:'right',width: 180,sortable: false,dataIndex:'BirthRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'死亡率',align:'right',width: 180,sortable: false,dataIndex:'DeathRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'自然增长率',align:'right',width: 180,sortable: false,dataIndex:'NaturalGrowthRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'零到十四岁人口数[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood',xtype:'numbercolumn',format : '0,00.0'},
				{header:'零到十四岁人口数_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'十五到六十四岁人口数[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth',xtype:'numbercolumn',format : '0,00.0'},
				{header:'十五到六十四岁人口数_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'六十五岁以上人口数[万]',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older',xtype:'numbercolumn',format : '0,00.0'},
				{header:'六十五岁以上人口数_比重',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older_Pct',xtype:'numbercolumn',format : '0,00.0'}							
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_历年政府卫生支出_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'政府卫生支出[亿]',align:'right',width: 180,sortable: false,dataIndex:'GovernmentHCExp',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗卫生服务支出[亿]',align:'right',width: 180,sortable: false,dataIndex:'MedicalandHealthservicesEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗保障支出[亿]',align:'right',width: 180,sortable: false,dataIndex:'MedicalandHealthcaresEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'行政管理事务支出[亿]',align:'right',width: 180,sortable: false,dataIndex:'AdminManagementAffairsEXP',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人口与计划生育事务支出[亿]',align:'right',width: 180,sortable: false,dataIndex:'FamilyPlanningAffairsEXP',xtype:'numbercolumn',format : '0,00.0'}						
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_历年城乡居民医疗保健支出_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},				
				{header:'城镇居民人均年现金消费支出',align:'right',width: 200,sortable: false,dataIndex:'Urban_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇居民人均医疗保健支出',align:'right',width: 200,sortable: false,dataIndex:'Urban_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇居民医疗保健支出占消费性支出占比',align:'right',width: 250,sortable: false,dataIndex:'Urban_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均年消费支出',align:'right',width: 200,sortable: false,dataIndex:'Rural_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均医疗保健支出',align:'right',width: 200,sortable: false,dataIndex:'Rural_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民医疗保健支出占消费性支出占比',align:'right',width: 250,sortable: false,dataIndex:'Rural_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'}						
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区城乡居民医疗保健支出_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'城镇居民人均年现金消费支出',align:'right',width: 200,sortable: false,dataIndex:'Urban_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇居民人均医疗保健支出',align:'right',width: 200,sortable: false,dataIndex:'Urban_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇居民医疗保健支出占消费性支出占比',align:'right',width: 250,sortable: false,dataIndex:'Urban_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均年消费支出',align:'right',width: 200,sortable: false,dataIndex:'Rural_CashExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均医疗保健支出',align:'right',width: 200,sortable: false,dataIndex:'Rural_HealthCareExpByCapita',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民医疗保健支出占消费性支出占比',align:'right',width: 250,sortable: false,dataIndex:'Rural_HealthCareExpByCapita_Pct',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_历年医疗卫生机构数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'总计',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'医院合计',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'综合医院',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中医医院',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'专科医院',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'基层医疗卫生机构合计',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'乡镇卫生院',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'村卫生室',align:'right',width: 180,sortable: false,dataIndex:'VillageHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'门诊部所',align:'right',width: 180,sortable: false,dataIndex:'Clinic',xtype:'numbercolumn',format : '0,00'},
				{header:'专业公共卫生机构数合计',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'疾病预防控制中心',align:'right',width: 180,sortable: false,dataIndex:'CDC',xtype:'numbercolumn',format : '0,00'},
				{header:'专科疾病防治院所站',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00'},
				{header:'妇幼保健院所站',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生监督所',align:'right',width: 180,sortable: false,dataIndex:'InVS',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年卫生人员数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业[助理]医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'检验师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年医疗机构床位数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:'总计[万]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医院合计[万]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'综合医院[万]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医医院[万]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科医院[万]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'基层医疗卫生机构合计[万]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心站[万]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'乡镇卫生院[万]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专业公共卫生机构数合计[万]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'妇幼保健院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科疾病防治院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'其他医疗卫生机构[万]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年居民主要疾病死亡率_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"疾病名称",align:'left',width: 190,sortable: false,dataIndex:"Disease_Name"},
				{header:"地域",align:'left',width: 70,sortable: false,dataIndex:"UrbanOrRural"},
				{header:'总计死亡率[十万分之一]',align:'right',width: 180,sortable: false,dataIndex:'Death_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'构成百分比',align:'right',width: 180,sortable: false,dataIndex:'Death_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'男性死亡率',align:'right',width: 180,sortable: false,dataIndex:'Death_M_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'构成百分比',align:'right',width: 180,sortable: false,dataIndex:'Death_M_Pct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'女性死亡率',align:'right',width: 180,sortable: false,dataIndex:'Death_F_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'构成百分比',align:'right',width: 180,sortable: false,dataIndex:'Death_F_Pct',xtype:'numbercolumn',format : '0,00.0'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '各地区心脏外科手术量'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'总手术量',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'体外循环手术量',align:'right',width: 180,sortable: false,dataIndex:'CPB_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '各地区各类心脏外科手术量'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'先天性心脏病矫治手术量',align:'right',width: 180,sortable: false,dataIndex:'CHD_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'心脏瓣膜手术量',align:'right',width: 180,sortable: false,dataIndex:'VDH_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'冠状动脉旁路移植CABG手术量',align:'right',width: 200,sortable: false,dataIndex:'CABG_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'主动脉血管手术量',align:'right',width: 180,sortable: false,dataIndex:'Aorta_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'辅助循环_IABP手术量',align:'right',width: 180,sortable: false,dataIndex:'IABP_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'辅助循环_ECMO手术量',align:'right',width: 180,sortable: false,dataIndex:'ECMO_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'心脏移植手术手术量',align:'right',width: 180,sortable: false,dataIndex:'HeartTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'肺脏移植手术手术量',align:'right',width: 180,sortable: false,dataIndex:'LungTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'心肺移植手术手术量',align:'right',width: 180,sortable: false,dataIndex:'Cardiopulmonary_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == '各地区各类心血管外科手术量'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},	
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'先天性心脏病矫治手术量',align:'right',width: 180,sortable: false,dataIndex:'CHD_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'主动脉血管手术量',align:'right',width: 180,sortable: false,dataIndex:'Aorta_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'心脏移植手术手术量',align:'right',width: 180,sortable: false,dataIndex:'HeartTransplant_Operations',xtype:'numbercolumn',format : '0,00'},
				{header:'ECMO手术量',align:'right',width: 180,sortable: false,dataIndex:'ECMO_Operations',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年按床位数分组医院数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:'医院类型',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'合计',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'零到49张',align:'right',width: 180,sortable: false,dataIndex:'Beds_0to49',xtype:'numbercolumn',format : '0,00'},
				{header:'五十到99张',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'一百到199张',align:'right',width: 180,sortable: false,dataIndex:'Beds_100to199',xtype:'numbercolumn',format : '0,00'},
				{header:'二百到299张',align:'right',width: 180,sortable: false,dataIndex:'Beds_200to299',xtype:'numbercolumn',format : '0,00'},
				{header:'三百到399张',align:'right',width: 180,sortable: false,dataIndex:'Beds_300to399',xtype:'numbercolumn',format : '0,00'},
				{header:'四百到499张',align:'right',width: 180,sortable: false,dataIndex:'Beds_400to499',xtype:'numbercolumn',format : '0,00'},
				{header:'五百到799张',align:'right',width: 180,sortable: false,dataIndex:'Beds_500to799',xtype:'numbercolumn',format : '0,00'},
				{header:'八百张及以上',align:'right',width: 180,sortable: false,dataIndex:'Beds_800above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区按床位数分组医院数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'合计',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'零到49张',align:'right',width: 180,sortable: false,dataIndex:'Beds_0to49',xtype:'numbercolumn',format : '0,00'},
				{header:'五十到99张',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'一百到199张',align:'right',width: 180,sortable: false,dataIndex:'Beds_100to199',xtype:'numbercolumn',format : '0,00'},
				{header:'二百到299张',align:'right',width: 180,sortable: false,dataIndex:'Beds_200to299',xtype:'numbercolumn',format : '0,00'},
				{header:'三百到399张',align:'right',width: 180,sortable: false,dataIndex:'Beds_300to399',xtype:'numbercolumn',format : '0,00'},
				{header:'四百到499张',align:'right',width: 180,sortable: false,dataIndex:'Beds_400to499',xtype:'numbercolumn',format : '0,00'},
				{header:'五百到799张',align:'right',width: 180,sortable: false,dataIndex:'Beds_500to799',xtype:'numbercolumn',format : '0,00'},
				{header:'八百张及以上',align:'right',width: 180,sortable: false,dataIndex:'Beds_800above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区按床位数分组CHC数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},
				{header:'合计',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'零张',align:'right',width: 180,sortable: false,dataIndex:'Beds_0',xtype:'numbercolumn',format : '0,00'},
				{header:'一到9张',align:'right',width: 180,sortable: false,dataIndex:'Beds_1to9',xtype:'numbercolumn',format : '0,00'},
				{header:'十到29张',align:'right',width: 180,sortable: false,dataIndex:'Beds_10to29',xtype:'numbercolumn',format : '0,00'},
				{header:'三十到49张',align:'right',width: 180,sortable: false,dataIndex:'Beds_30to49',xtype:'numbercolumn',format : '0,00'},
				{header:'五十到99张',align:'right',width: 180,sortable: false,dataIndex:'Beds_50to99',xtype:'numbercolumn',format : '0,00'},
				{header:'一百张及以上',align:'right',width: 180,sortable: false,dataIndex:'Beds_100above',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区卫生人员数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业[助理]医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'技师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医院卫生人员数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业[助理]医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'技师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区基层医疗卫生人员数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业[助理]医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'技师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区社区卫生服务中心站卫生人员数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业[助理]医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'技师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医疗机构床位数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 120,sortable: false,dataIndex:"Province"},				
				{header:'合计',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'医院合计',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'综合医院',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中医医院',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中西医结合医院',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'民族医院',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'专科医院',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'护理院',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'},
				{header:'基层医疗卫生机构合计',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'乡镇卫生院',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'专业公共卫生机构数合计',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'专科疾病防治院所站',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00'},
				{header:'妇幼保健院所站',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00'},
				{header:'其他医疗卫生机构',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00'}									
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医院分科床位数_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'总计',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'预防保健科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00'},
				{header:'全科医疗科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00'},
				{header:'内科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00'},
				{header:'外科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00'},
				{header:'儿科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00'},
				{header:'妇产科',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00'},
				{header:'眼科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00'},
				{header:'耳鼻咽喉科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00'},
				{header:'口腔科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00'},
				{header:'皮肤科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00'},
				{header:'医疗美容科',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00'},
				{header:'精神科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00'},
				{header:'传染科',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00'},
				{header:'结核病科',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00'},
				{header:'肿瘤科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00'},
				{header:'急诊医学科',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'康复医学科',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00'},
				{header:'中医科',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'民族医学科',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'中西医结合科',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'其他',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'HDPC_历年医院收入与支出_China'){
		var grid_colModel_array =			
			[						
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},			
				{header:'医院类型',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'总收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Total_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'财政补贴收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'总支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Total_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'财政项目补贴支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人员经费[万]',align:'right',width: 180,sortable: false,dataIndex:'Personnel_Outcome',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医疗机构收入与支出_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'总收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Total_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'财政补贴收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗收入[万]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Income',xtype:'numbercolumn',format : '0,00.0'},
				{header:'总支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Total_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'财政项目补贴支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Subsidies_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗支出[万]',align:'right',width: 180,sortable: false,dataIndex:'Medical_Outcome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人员经费[万]',align:'right',width: 180,sortable: false,dataIndex:'Personnel_Outcome',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'HDPC_历年30种疾病平均住院医药费用_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'疾病名称',align:'left',width: 150,sortable: false,dataIndex:'Disease_Name'},
				{header:'出院人数',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00'},
				{header:'平均住院日',align:'right',width: 180,sortable: false,dataIndex:'AverageLengthofStay',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均医药费',align:'right',width: 180,sortable: false,dataIndex:'MedicalExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均药费',align:'right',width: 180,sortable: false,dataIndex:'DrugExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均检查费',align:'right',width: 180,sortable: false,dataIndex:'TreatmentExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均治疗费',align:'right',width: 180,sortable: false,dataIndex:'InspectionExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均手术费',align:'right',width: 180,sortable: false,dataIndex:'OperationsExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'人均卫生材料费',align:'right',width: 180,sortable: false,dataIndex:'HygienicMaterialExpensesPerPop',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年医疗卫生机构诊疗人次数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'总诊疗人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医院合计[万]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'综合医院[万]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医医院[万]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中西医结合医院[万]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民族医院[万]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科医院[万]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'护理院[万]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'},
				{header:'基层医疗卫生机构合计[万]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心站[万]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心[万]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'乡镇卫生院[万]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专业公共卫生机构数合计[万]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'妇幼保健院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科疾病防治院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'其他医疗卫生机构[万]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年医院和CHC门诊服务情况_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'医院类型',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'诊疗人次数[万]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'门急诊人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'观察室留观病例数[万]',align:'right',width: 180,sortable: false,dataIndex:'ObservationCases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'健康检查人数[万]',align:'right',width: 180,sortable: false,dataIndex:'HealthCheckNumber',xtype:'numbercolumn',format : '0,00.0'},
				{header:'急诊病死率',align:'right',width: 180,sortable: false,dataIndex:'EmergencyCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'观察室病死率',align:'right',width: 180,sortable: false,dataIndex:'ObservationCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医师日均担负诊疗人次',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}																	
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医疗卫生机构门诊服务情况_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 100,sortable: false,dataIndex:"Province"},				
				{header:'诊疗人次数[万]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'门急诊人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'观察室留观病例数[万]',align:'right',width: 180,sortable: false,dataIndex:'ObservationCases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'健康检查人数[万]',align:'right',width: 180,sortable: false,dataIndex:'HealthCheckNumber',xtype:'numbercolumn',format : '0,00.0'},
				{header:'急诊病死率',align:'right',width: 180,sortable: false,dataIndex:'EmergencyCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'观察室病死率',align:'right',width: 180,sortable: false,dataIndex:'ObservationCasePct',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医师日均担负诊疗人次',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}																	
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年医院诊疗人次数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'诊疗人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'卫计委综合医院诊疗人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'卫计委中医医院诊疗人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Treatment_Patients_HDPC_TraHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'门急诊人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'卫计委综合医院门急诊人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00.0'},
				{header:'卫计委中医医院门急诊人次数[亿]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients_HDPC_TradHop',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_各地区医院分科门急诊人次数_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'总门急诊人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'预防保健科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00.0'},
				{header:'全科医疗科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00.0'},
				{header:'内科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'外科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00.0'},
				{header:'儿科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00.0'},
				{header:'妇产科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'眼科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'耳鼻咽喉科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'口腔科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'皮肤科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医疗美容科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'精神科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00.0'},
				{header:'传染科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00.0'},
				{header:'结核病科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00.0'},
				{header:'肿瘤科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00.0'},
				{header:'急诊医学科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'康复医学科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'职业病科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_OccupationalMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民族医学科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中西医结合科[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00.0'},
				{header:'其他[万]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'HDPC_历年医疗机构入院人数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'总入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医院合计[万]',align:'right',width: 180,sortable: false,dataIndex:'Hospital_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'综合医院[万]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医医院[万]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中西医结合医院[万]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民族医院[万]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科医院[万]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'护理院[万]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'},
				{header:'基层医疗卫生机构合计[万]',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心站[万]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心[万]',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'乡镇卫生院[万]',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专业公共卫生机构数合计[万]',align:'right',width: 180,sortable: false,dataIndex:'MajorPublicHealthInstitutions',xtype:'numbercolumn',format : '0,00.0'},
				{header:'妇幼保健院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'MCHInstitutesStation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科疾病防治院所站[万]',align:'right',width: 180,sortable: false,dataIndex:'DiseasePreventionstation',xtype:'numbercolumn',format : '0,00.0'},
				{header:'其他医疗卫生机构[万]',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00.0'}																
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_历年各类医院和CHC住院服务情况_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'医院类型',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'出院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'住院病人手术人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00.0'},
				{header:'病死率',align:'right',width: 180,sortable: false,dataIndex:'CaseFatalityRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'每床出院人数',align:'right',width: 180,sortable: false,dataIndex:'DischargedPatientsPerBed',xtype:'numbercolumn',format : '0,00.0'},
				{header:'每百门急诊入院人数',align:'right',width: 180,sortable: false,dataIndex:'InpatientsPerHundred',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医师日均担负住院床日',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_各地区医疗卫生机构住院服务情况_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'出院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Discharged_Patients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'住院病人手术人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Operations',xtype:'numbercolumn',format : '0,00.0'},
				{header:'病死率',align:'right',width: 180,sortable: false,dataIndex:'CaseFatalityRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'每床出院人数',align:'right',width: 180,sortable: false,dataIndex:'DischargedPatientsPerBed',xtype:'numbercolumn',format : '0,00.0'},
				{header:'每百门急诊入院人数',align:'right',width: 180,sortable: false,dataIndex:'InpatientsPerHundred',xtype:'numbercolumn',format : '0,00.0'},
				{header:'医师日均担负住院床日',align:'right',width: 180,sortable: false,dataIndex:'PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年医院入院人数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00'},
				{header:'卫计委综合医院入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients_HDPC_GenHop',xtype:'numbercolumn',format : '0,00'},
				{header:'卫计委中医医院入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients_HDPC_TraHop',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_各地区医院分科出院人数_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'总出院人数[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'预防保健科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Preventivehealthcare',xtype:'numbercolumn',format : '0,00'},
				{header:'全科医疗科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Generalpractice',xtype:'numbercolumn',format : '0,00'},
				{header:'内科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Medicine',xtype:'numbercolumn',format : '0,00'},
				{header:'外科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Surgical',xtype:'numbercolumn',format : '0,00'},
				{header:'儿科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Pediatrics',xtype:'numbercolumn',format : '0,00'},
				{header:'妇产科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_ObstetricsandGynecology',xtype:'numbercolumn',format : '0,00'},
				{header:'眼科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Ophthalmology',xtype:'numbercolumn',format : '0,00'},
				{header:'耳鼻咽喉科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Otorhinolaryngology',xtype:'numbercolumn',format : '0,00'},
				{header:'口腔科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Stomatology',xtype:'numbercolumn',format : '0,00'},
				{header:'皮肤科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Dermatology',xtype:'numbercolumn',format : '0,00'},
				{header:'医疗美容科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_MedicalCosmetology',xtype:'numbercolumn',format : '0,00'},
				{header:'精神科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Psychiatric',xtype:'numbercolumn',format : '0,00'},
				{header:'传染科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_DepartmentofInfectiousDiseases',xtype:'numbercolumn',format : '0,00'},
				{header:'结核病科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TuberculosisDivision',xtype:'numbercolumn',format : '0,00'},
				{header:'肿瘤科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Oncology',xtype:'numbercolumn',format : '0,00'},
				{header:'急诊医学科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EmergencyMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'康复医学科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Rehabilitation',xtype:'numbercolumn',format : '0,00'},
				{header:'职业病科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_OccupationalMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'中医科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_TraditionalChineseMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'民族医学科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_EthnicMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'中西医结合科[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_IntegratedMedicine',xtype:'numbercolumn',format : '0,00'},
				{header:'其他[千]',align:'right',width: 180,sortable: false,dataIndex:'Depart_Others',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'HDPC_各地区基层医疗工作情况_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'机构数',align:'right',width: 180,sortable: false,dataIndex:'MCIs',xtype:'numbercolumn',format : '0,00'},
				{header:'床位数',align:'right',width: 180,sortable: false,dataIndex:'Beds',xtype:'numbercolumn',format : '0,00'},
				{header:'人员数',align:'right',width: 180,sortable: false,dataIndex:'Persons',xtype:'numbercolumn',format : '0,00'},
				{header:'诊疗人次[万]',align:'right',width: 180,sortable: false,dataIndex:'Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'入院人数[万]',align:'right',width: 180,sortable: false,dataIndex:'Inpatients',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'HDPC_各地区社区卫生服务中心站医疗服务情况_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'社区卫生服务中心诊疗人次[万]',align:'right',width: 250,sortable: false,dataIndex:'CHC_Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心入院人数[万]',align:'right',width: 250,sortable: false,dataIndex:'CHC_Inpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心病床使用率',align:'right',width: 200,sortable: false,dataIndex:'CHC_HospitalBedsRate',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心平均住院日',align:'right',width: 200,sortable: false,dataIndex:'CHC_AverageLengthofStay',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心医师日均担负诊疗人次',align:'right',width: 250,sortable: false,dataIndex:'CHC_PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务中心医师日均担负住院床日',align:'right',width: 250,sortable: false,dataIndex:'CHC_PhysiciansBedDaily',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务站诊疗人次[万]',align:'right',width: 200,sortable: false,dataIndex:'CHS_Outpatients',xtype:'numbercolumn',format : '0,00.0'},
				{header:'社区卫生服务站医师日均担负诊疗人次',align:'right',width: 250,sortable: false,dataIndex:'CHS_PhysiciansDailyVisits',xtype:'numbercolumn',format : '0,00.0'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区供水用水及用电情况_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'供水总量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterSupply',xtype:'numbercolumn',format : '0,00'},
				{header:'居民生活用水量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterConsumptionforResidential',xtype:'numbercolumn',format : '0,00'},
				{header:'全社会用电量[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'工业用电 [万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'ElectricityConsumptionforIndustrial',xtype:'numbercolumn',format : '0,00'},
				{header:'城乡居民生活用电[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_各地区供水用水及用电情况_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'供水总量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterSupply',xtype:'numbercolumn',format : '0,00'},
				{header:'居民生活用水量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterConsumptionforResidential',xtype:'numbercolumn',format : '0,00'},
				{header:'全社会用电量[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'工业用电 [万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'ElectricityConsumptionforIndustrial',xtype:'numbercolumn',format : '0,00'},
				{header:'城乡居民生活用电[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}		
	else if(_type == 'NBS_各地区环境指标_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'工业废水排放量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofWastewaterDischarged',xtype:'numbercolumn',format : '0,00'},
				{header:'工业二氧化硫产生量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideProduced',xtype:'numbercolumn',format : '0,00'},
				{header:'工业二氧化硫排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'工业烟粉尘排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区环境指标_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'工业废水排放量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofWastewaterDischarged',xtype:'numbercolumn',format : '0,00'},
				{header:'工业二氧化硫产生量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideProduced',xtype:'numbercolumn',format : '0,00'},
				{header:'工业二氧化硫排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'工业烟粉尘排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_各地区运输方式的货物量和客运量_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'客运总量[万]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'铁路旅客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'公路客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'水运客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'民用航空客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'货运总量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'铁路货物运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'公路货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'水运货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'民用航空货邮运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区运输方式的货物量和客运量_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'客运总量[万]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'铁路旅客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'公路客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'水运客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'民用航空客运量[万]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'货运总量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'铁路货物运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'公路货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'水运货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'民用航空货邮运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}	
	else if(_type == 'NBS_各地区社会零售及外资_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'社会消费品零售总额[万]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'},
				{header:'当年实际使用外资金额[万美元]',align:'right',width: 200,sortable: false,dataIndex:'ForeignCapitalActuallyUtilized',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区社会零售及外资_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'社会消费品零售总额[万]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'},
				{header:'当年实际使用外资金额[万美元]',align:'right',width: 200,sortable: false,dataIndex:'ForeignCapitalActuallyUtilized',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区职工平均工资及社会保障指标_Province'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'职工平均工资',align:'right',width: 180,sortable: false,dataIndex:'StaffsAvgWages',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇职工基本养老保险参保人数',align:'right',width: 200,sortable: false,dataIndex:'PensionInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'城镇基本医疗保险参保人数',align:'right',width: 180,sortable: false,dataIndex:'MedicalCareInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'失业保险参保人数',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentInsurance',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_各地区职工平均工资及社会保障指标_City'){
		var grid_colModel_array =			
			[
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'职工平均工资',align:'right',width: 180,sortable: false,dataIndex:'StaffsAvgWages',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇职工基本养老保险参保人数',align:'right',width: 200,sortable: false,dataIndex:'PensionInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'城镇基本医疗保险参保人数',align:'right',width: 180,sortable: false,dataIndex:'MedicalCareInsurance',xtype:'numbercolumn',format : '0,00'},
				{header:'失业保险参保人数',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentInsurance',xtype:'numbercolumn',format : '0,00'}
			];	
		return grid_colModel_array;
	}
	else if(_type == 'NBS_历年各类医院和CHC人员数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'医院类型',align:'left',width: 180,sortable: false,dataIndex:'Hop_Type'},
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业_助理医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'技师',align:'right',width: 180,sortable: false,dataIndex:'Technician',xtype:'numbercolumn',format : '0,00'},
				{header:'其他',align:'right',width: 180,sortable: false,dataIndex:'Others',xtype:'numbercolumn',format : '0,00'}																				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_县级市环境指标_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'工业二氧化硫排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofSulphurDioxideEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'氮氧化物排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofNOxEmission',xtype:'numbercolumn',format : '0,00'},
				{header:'工业烟粉尘排放量[吨]',align:'right',width: 180,sortable: false,dataIndex:'VolumeofIndustrialEmission',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_县级市用电情况_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'全社会用电量[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'AnnualElectricityConsumption',xtype:'numbercolumn',format : '0,00'},
				{header:'城乡居民生活用电[万千瓦时]',align:'right',width: 180,sortable: false,dataIndex:'HouseholdElectricityConsumption',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_县及县级市基本统计资料_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'土地面积',align:'right',width: 180,sortable: false,dataIndex:'Area',xtype:'numbercolumn',format : '0,00'},
				{header:'户籍人口[万]',align:'right',width: 180,sortable: false,dataIndex:'Registered_Population',xtype:'numbercolumn',format : '0,00'},
				{header:'第一产业增加值[万]',align:'right',width: 180,sortable: false,dataIndex:'PrimaryIndustry_valueadd',xtype:'numbercolumn',format : '0,00'},
				{header:'第二产业增加值[万]',align:'right',width: 180,sortable: false,dataIndex:'SecondaryIndustry_valueadd',xtype:'numbercolumn',format : '0,00'},
				{header:'公共财政收入[万]',align:'right',width: 180,sortable: false,dataIndex:'PublicRevenue',xtype:'numbercolumn',format : '0,00'},
				{header:'公共财政支出[万]',align:'right',width: 180,sortable: false,dataIndex:'PublicExpenditure',xtype:'numbercolumn',format : '0,00'},
				{header:'居民储蓄存款余额[万]',align:'right',width: 180,sortable: false,dataIndex:'SavingsDeposit',xtype:'numbercolumn',format : '0,00'},
				{header:'粮食总产量[吨]',align:'right',width: 180,sortable: false,dataIndex:'GrainYeild',xtype:'numbercolumn',format : '0,00'},
				{header:'棉花产量[吨]',align:'right',width: 180,sortable: false,dataIndex:'CottonYield',xtype:'numbercolumn',format : '0,00'},
				{header:'油料产量[吨]',align:'right',width: 180,sortable: false,dataIndex:'OilYield',xtype:'numbercolumn',format : '0,00'},
				{header:'肉类产量[吨]',align:'right',width: 180,sortable: false,dataIndex:'MeatYield',xtype:'numbercolumn',format : '0,00'},
				{header:'固定资产投资额[万]',align:'right',width: 180,sortable: false,dataIndex:'FixedAssets',xtype:'numbercolumn',format : '0,00'},
				{header:'固定电话年末用户',align:'right',width: 180,sortable: false,dataIndex:'FixedTel',xtype:'numbercolumn',format : '0,00'},
				{header:'普通中学在校学生数',align:'right',width: 180,sortable: false,dataIndex:'SecondarySchools',xtype:'numbercolumn',format : '0,00'},
				{header:'小学在校学生数',align:'right',width: 180,sortable: false,dataIndex:'PrimarySchools',xtype:'numbercolumn',format : '0,00'},
				{header:'医疗卫生机构床位数',align:'right',width: 180,sortable: false,dataIndex:'HealthCareBeds',xtype:'numbercolumn',format : '0,00'}											
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_县级市社会消费品零售总额_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'社会消费品零售总额[万]',align:'right',width: 180,sortable: false,dataIndex:'TotalRetailSales',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区外商投资企业货物进出口总额_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'进出口[万美元]',align:'right',width: 180,sortable: false,dataIndex:'Total',xtype:'numbercolumn',format : '0,00'},
				{header:'出口[万美元]',align:'right',width: 180,sortable: false,dataIndex:'Exports',xtype:'numbercolumn',format : '0,00'},
				{header:'进口[万美元]',align:'right',width: 180,sortable: false,dataIndex:'Imports',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区居民人均收支情况_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'可支配收入',align:'right',width: 180,sortable: false,dataIndex:'DisposableIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金可支配收入',align:'right',width: 180,sortable: false,dataIndex:'CashDisposableIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'消费支出',align:'right',width: 180,sortable: false,dataIndex:'ConsumptionExpenses',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出',align:'right',width: 180,sortable: false,dataIndex:'CashConsumptionExpenses',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_地区居民消费价格指数和商品零售价格指数_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'居民消费指数',align:'right',width: 180,sortable: false,dataIndex:'CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城市_居民消费指数',align:'right',width: 180,sortable: false,dataIndex:'Urban_CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村_居民消费指数',align:'right',width: 180,sortable: false,dataIndex:'Rural_CPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'商品零售价格指数',align:'right',width: 180,sortable: false,dataIndex:'PRI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城市_商品零售价格指数',align:'right',width: 180,sortable: false,dataIndex:'Urban_RPI',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村_商品零售价格指数',align:'right',width: 180,sortable: false,dataIndex:'Rural_RPI',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区居民消费水平_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'居民人均消费水平',align:'right',width: 180,sortable: false,dataIndex:'ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'农村居民人均消费水平',align:'right',width: 180,sortable: false,dataIndex:'Rural_ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'城镇居民人均消费水平',align:'right',width: 180,sortable: false,dataIndex:'Urban_ConsumptionExp',xtype:'numbercolumn',format : '0,00'},
				{header:'城乡居民消费水平对比',align:'right',width: 180,sortable: false,dataIndex:'Comparsion_CE',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区城镇就业人员平均工资_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'城镇就业人员平均工资',align:'right',width: 180,sortable: false,dataIndex:'TotalWages',xtype:'numbercolumn',format : '0,00'},
				{header:'城镇在岗职工就业人员平均工资',align:'right',width: 200,sortable: false,dataIndex:'StaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'国有企业就业人员平均工资',align:'right',width: 180,sortable: false,dataIndex:'StateStaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'城镇集体就业人员平均工资',align:'right',width: 180,sortable: false,dataIndex:'CollectedStaffWages',xtype:'numbercolumn',format : '0,00'},
				{header:'其他单位就业人员平均工资',align:'right',width: 180,sortable: false,dataIndex:'OthersStaffWages',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区城镇居民人均可支配收入_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'可支配收入',align:'right',width: 180,sortable: false,dataIndex:'DepositIncome',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区城镇居民人均现金消费支出_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'现金消费支出',align:'right',width: 180,sortable: false,dataIndex:'Total_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_食品',align:'right',width: 180,sortable: false,dataIndex:'Food_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_衣着',align:'right',width: 180,sortable: false,dataIndex:'Clothing_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_居住',align:'right',width: 180,sortable: false,dataIndex:'Residence_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_家庭设备用品',align:'right',width: 180,sortable: false,dataIndex:'Facilities_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_交通通讯',align:'right',width: 180,sortable: false,dataIndex:'TransCom_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_文教娱乐',align:'right',width: 180,sortable: false,dataIndex:'Education_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_医疗保健',align:'right',width: 180,sortable: false,dataIndex:'HeathCare_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_其他',align:'right',width: 180,sortable: false,dataIndex:'Others_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区城镇失业率_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'失业率',align:'right',width: 180,sortable: false,dataIndex:'UnemploymentRate',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区农村居民人均纯收入_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'纯收入',align:'right',width: 180,sortable: false,dataIndex:'PureIncome',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区农村居民人均现金消费支出_Province'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'现金消费支出',align:'right',width: 180,sortable: false,dataIndex:'Total_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_食品',align:'right',width: 180,sortable: false,dataIndex:'Food_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_衣着',align:'right',width: 180,sortable: false,dataIndex:'Clothing_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_居住',align:'right',width: 180,sortable: false,dataIndex:'Residence_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_家庭设备用品',align:'right',width: 180,sortable: false,dataIndex:'Facilities_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_交通通讯',align:'right',width: 180,sortable: false,dataIndex:'TransCom_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_文教娱乐',align:'right',width: 180,sortable: false,dataIndex:'Education_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_医疗保健',align:'right',width: 180,sortable: false,dataIndex:'HeathCare_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'},
				{header:'现金消费支出_其他',align:'right',width: 180,sortable: false,dataIndex:'Others_CashExpenditure',xtype:'numbercolumn',format : '0,00.0'}				
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_2010年第六次人口普查_Street'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:'地级市',align:'left',width: 90,sortable: false,dataIndex:'City'},
				{header:'区县城市',align:'left',width: 90,sortable: false,dataIndex:'District'},
				{header:'街道',align:'left',width: 120,sortable: false,dataIndex:'Street'},
				{header:'常住人口',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population',xtype:'numbercolumn',format : '0,00'},
				{header:'常住人口_男',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population_M',xtype:'numbercolumn',format : '0,00'},
				{header:'常住人口_女',align:'right',width: 180,sortable: false,dataIndex:'Year_end_Population_F',xtype:'numbercolumn',format : '0,00'},
				{header:'户数',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds',xtype:'numbercolumn',format : '0,00'},
				{header:'户数_男',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds_M',xtype:'numbercolumn',format : '0,00'},
				{header:'户数_女',align:'right',width: 180,sortable: false,dataIndex:'TotalHouseholds_F',xtype:'numbercolumn',format : '0,00'},
				{header:'零到14岁',align:'right',width: 180,sortable: false,dataIndex:'YEP_Childhood',xtype:'numbercolumn',format : '0,00'},
				{header:'十五岁到65岁',align:'right',width: 180,sortable: false,dataIndex:'YEP_Youth',xtype:'numbercolumn',format : '0,00'},
				{header:'六十五岁以上',align:'right',width: 180,sortable: false,dataIndex:'YEP_Older',xtype:'numbercolumn',format : '0,00'},
				{header:'户籍人口',align:'right',width: 180,sortable: false,dataIndex:'Registered_Population',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年各类医院机构数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'医院总数',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'公立医院',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'民营医院',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'三级医院',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'二级医院',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'一级医院',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'综合医院',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中医医院',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中西医结合医院',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'民族医院',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'专科医院',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'护理院',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年各类基层医疗卫生机构数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'公立',align:'right',width: 180,sortable: false,dataIndex:'PublicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'民营',align:'right',width: 180,sortable: false,dataIndex:'PrivateMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生院',align:'right',width: 180,sortable: false,dataIndex:'HealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'街道卫生脘',align:'right',width: 180,sortable: false,dataIndex:'StreetHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'乡镇卫生院',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'村卫生室',align:'right',width: 180,sortable: false,dataIndex:'VillageClinic',xtype:'numbercolumn',format : '0,00'},
				{header:'门诊部',align:'right',width: 180,sortable: false,dataIndex:'Policlinic',xtype:'numbercolumn',format : '0,00'},
				{header:'诊所',align:'right',width: 180,sortable: false,dataIndex:'Clinic',xtype:'numbercolumn',format : '0,00'}							
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年各类医院人员数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"维度",align:'right',width: 50,sortable: false,dataIndex:"Dimension"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业_助理医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'检验师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_历年各类基层医疗卫生机构人员数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"维度",align:'right',width: 50,sortable: false,dataIndex:"Dimension"},				
				{header:'卫生人员',align:'right',width: 180,sortable: false,dataIndex:'Health_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生技术人员',align:'right',width: 180,sortable: false,dataIndex:'HospitalWorkers_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'执业_助理医师',align:'right',width: 180,sortable: false,dataIndex:'PhysicianincludingAid',xtype:'numbercolumn',format : '0,00'},
				{header:'执业医师',align:'right',width: 180,sortable: false,dataIndex:'Physician',xtype:'numbercolumn',format : '0,00'},
				{header:'注册护士',align:'right',width: 180,sortable: false,dataIndex:'RegisteredNurse',xtype:'numbercolumn',format : '0,00'},
				{header:'药师',align:'right',width: 180,sortable: false,dataIndex:'Pharmacist',xtype:'numbercolumn',format : '0,00'},
				{header:'检验师',align:'right',width: 180,sortable: false,dataIndex:'Docimaster',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_历年各类医院床位数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'医院总数',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00'},
				{header:'公立医院',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'民营医院',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'三级医院',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'二级医院',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'一级医院',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'综合医院',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中医医院',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'中西医结合医院',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'民族医院',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00'},
				{header:'专科医院',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00'},
				{header:'护理院',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年各类基层医疗卫生机构床位数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'基层医疗机构总数',align:'right',width: 180,sortable: false,dataIndex:'BasicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'公立',align:'right',width: 180,sortable: false,dataIndex:'PublicMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'民营',align:'right',width: 180,sortable: false,dataIndex:'PrivateMedicalInstitutions',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCS',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务中心',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'社区卫生服务站',align:'right',width: 180,sortable: false,dataIndex:'CommunityHealthStation',xtype:'numbercolumn',format : '0,00'},
				{header:'卫生院',align:'right',width: 180,sortable: false,dataIndex:'HealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'街道卫生脘',align:'right',width: 180,sortable: false,dataIndex:'StreetHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'乡镇卫生院',align:'right',width: 180,sortable: false,dataIndex:'TownHealthCenter',xtype:'numbercolumn',format : '0,00'},
				{header:'门诊部',align:'right',width: 180,sortable: false,dataIndex:'Policlinic',xtype:'numbercolumn',format : '0,00'},
				{header:'护理站',align:'right',width: 180,sortable: false,dataIndex:'NursingStation',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'HDPC_历年各类医院诊疗人次数_China'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'总计[万人]',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'公立医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民营医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'三级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'二级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'一级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'综合医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中西医结合医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民族医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'护理院[万人]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'HDPC_历年各类医院入院人数_China1'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:'总入院人数[万人]',align:'right',width: 180,sortable: false,dataIndex:'Hop_Total',xtype:'numbercolumn',format : '0,00.0'},
				{header:'公立医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'PublicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民营医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'PrivateHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'三级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'ThreeLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'二级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'SecondLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'一级医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'OneLevelHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'综合医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'GeneralHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中医医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'ChineseMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'中西医结合医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'IntegrativeMedicineHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民族医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'EthnicHospital',xtype:'numbercolumn',format : '0,00.0'},
				{header:'专科医院[万人]',align:'right',width: 180,sortable: false,dataIndex:'SpecialHospital_Subtotal',xtype:'numbercolumn',format : '0,00.0'},
				{header:'护理院[万人]',align:'right',width: 180,sortable: false,dataIndex:'NursingHomes',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区城市建设用地状况_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'城市建设用地面积[平方公里]',align:'right',width: 180,sortable: false,dataIndex:'csjzyd',xtype:'numbercolumn',format : '0,00'},
				{header:'居住用地面积[平方公里]',align:'right',width: 180,sortable: false,dataIndex:'jzydmj',xtype:'numbercolumn',format : '0,00'},
				{header:'城市建设用地占市区面积比重',align:'right',width: 180,sortable: false,dataIndex:'csjzydzb',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区地方公共财政收支状况_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'公共财政收入[万]',align:'right',width: 180,sortable: false,dataIndex:'ggzzsr',xtype:'numbercolumn',format : '0,00'},
				{header:'公共财政支出',align:'right',width: 180,sortable: false,dataIndex:'ggzzzc',xtype:'numbercolumn',format : '0,00'},
				{header:'科学技术支出',align:'right',width: 180,sortable: false,dataIndex:'kxjszc',xtype:'numbercolumn',format : '0,00'},
				{header:'教育支出',align:'right',width: 180,sortable: false,dataIndex:'jyzc',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区年末金融机构存贷款余额_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'年末金融机构人民币各项存款余额[万]',align:'right',width: 200,sortable: false,dataIndex:'nmjrjgrbmgxckye',xtype:'numbercolumn',format : '0,00'},
				{header:'居民人民币储蓄存款余额',align:'right',width: 180,sortable: false,dataIndex:'jmrmbccccye',xtype:'numbercolumn',format : '0,00'},
				{header:'年末金融机构人民币各项贷款余额',align:'right',width: 200,sortable: false,dataIndex:'nmjrjgrbmgxdkye',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区规模以上工业总产值_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'工业总产值[万]',align:'right',width: 180,sortable: false,dataIndex:'gzzcz',xtype:'numbercolumn',format : '0,00'},
				{header:'内资企业',align:'right',width: 180,sortable: false,dataIndex:'nzqy',xtype:'numbercolumn',format : '0,00'},
				{header:'港澳台商投资企业',align:'right',width: 180,sortable: false,dataIndex:'gatstzqy',xtype:'numbercolumn',format : '0,00'},
				{header:'外商投资企业',align:'right',width: 180,sortable: false,dataIndex:'wstzqy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区按运输方式分类的客运量_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'客运总量[万人]',align:'right',width: 180,sortable: false,dataIndex:'TotalPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'铁路旅客运量[万人]',align:'right',width: 180,sortable: false,dataIndex:'RailwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'公路客运量[万人]',align:'right',width: 180,sortable: false,dataIndex:'HighwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'水运客运量[万人]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayPassengerTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'民用航空客运量[万人]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationPassengerTraffic',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'NBS_各地区按运输方式分类的货运量_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'货运总量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'TotalFreightTraffic',xtype:'numbercolumn',format : '0,00.0'},
				{header:'铁路货物运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'RailwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'公路货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'HighwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'水运货运量[万吨]',align:'right',width: 180,sortable: false,dataIndex:'WaterwayFreightTraffic',xtype:'numbercolumn',format : '0,00'},
				{header:'民用航空货邮运量[吨]',align:'right',width: 180,sortable: false,dataIndex:'CivilAviationFreightTraffic',xtype:'numbercolumn',format : '0,00'}				
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_各地区在校学生数_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'普通高等学校[人]',align:'right',width: 180,sortable: false,dataIndex:'ptgdxx',xtype:'numbercolumn',format : '0,00'},
				{header:'高中[人]',align:'right',width: 180,sortable: false,dataIndex:'gz',xtype:'numbercolumn',format : '0,00'},
				{header:'中等职业教育学校[人]',align:'right',width: 180,sortable: false,dataIndex:'zdzyjyxx',xtype:'numbercolumn',format : '0,00'},
				{header:'普通中学[万人]',align:'right',width: 180,sortable: false,dataIndex:'ptzx',xtype:'numbercolumn',format : '0,00.0'},
				{header:'小学[万人]',align:'right',width: 180,sortable: false,dataIndex:'xx',xtype:'numbercolumn',format : '0,00.0'},
				{header:'成人高等学校在校学生数[人]',align:'right',width: 180,sortable: false,dataIndex:'crgdxyzxxss',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区道路面积及公共汽车、出租车拥有情况_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'年末实有城市道路面积[万平方米]',align:'right',width: 180,sortable: false,dataIndex:'nmsycsdlmj',xtype:'numbercolumn',format : '0,00'},
				{header:'年末实有公共汽车营运车辆数[辆]',align:'right',width: 180,sortable: false,dataIndex:'nmsyggqcyycsl',xtype:'numbercolumn',format : '0,00'},
				{header:'全年公共汽车客运总量[万人次]',align:'right',width: 180,sortable: false,dataIndex:'qnggqckyzl',xtype:'numbercolumn',format : '0,00'},
				{header:'年末实有出租汽车数[辆]',align:'right',width: 180,sortable: false,dataIndex:'nmsyczqc',xtype:'numbercolumn',format : '0,00'},
				{header:'每万人拥有公共汽车[辆]',align:'right',width: 180,sortable: false,dataIndex:'mwryyggqc',xtype:'numbercolumn',format : '0,00'},
				{header:'人均城市道路面积[平方米]',align:'right',width: 180,sortable: false,dataIndex:'rjcsdlmj',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_各地区煤气及液化石油气供应及利用情况_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,		
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:'供气总量[万立方米]',align:'right',width: 180,sortable: false,dataIndex:'gqzl',xtype:'numbercolumn',format : '0,00'},
				{header:'供气家庭用量[万立方米]',align:'right',width: 180,sortable: false,dataIndex:'gqjtyl',xtype:'numbercolumn',format : '0,00'},
				{header:'供气人口[人]',width: 180,sortable: false,dataIndex:'gqrk',xtype:'numbercolumn',format : '0,00'},
				{header:'液化石油气供气总量[吨]',align:'right',width: 180,sortable: false,dataIndex:'yhsyqzl',xtype:'numbercolumn',format : '0,00'},
				{header:'液化气家庭用量[吨]',align:'right',width: 180,sortable: false,dataIndex:'yhqjtyl',xtype:'numbercolumn',format : '0,00'},
				{header:'用液化气人口[人]',align:'right',width: 180,sortable: false,dataIndex:'yyhqrk',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}		
	else if(_type == 'NBS_县级市GDP_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'GDP[万元]',align:'right',width: 180,sortable: false,dataIndex:'gdp',xtype:'numbercolumn',format : '0,00'},
				{header:'第一产业',align:'right',width: 180,sortable: false,dataIndex:'dycy',xtype:'numbercolumn',format : '0,00'},
				{header:'第二产业',align:'right',width: 180,sortable: false,dataIndex:'decy',xtype:'numbercolumn',format : '0,00'},
				{header:'第三产业',align:'right',width: 180,sortable: false,dataIndex:'dscy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}	
	else if(_type == 'NBS_县级市公共财政收支_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'公共财政收入[万元]',align:'right',width: 180,sortable: false,dataIndex:'ggczsr',xtype:'numbercolumn',format : '0,00'},
				{header:'各项税收',align:'right',width: 180,sortable: false,dataIndex:'gxsr',xtype:'numbercolumn',format : '0,00'},
				{header:'公共财政支出',align:'right',width: 180,sortable: false,dataIndex:'ggczzc',xtype:'numbercolumn',format : '0,00'},
				{header:'科学技术支出',align:'right',width: 180,sortable: false,dataIndex:'kxjszc',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_县级市年末金融机构存贷款余额_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'年末金融机构人民币各项存款余额[万]',align:'right',width: 180,sortable: false,dataIndex:'nmjrjgrbmgxckye',xtype:'numbercolumn',format : '0,00'},
				{header:'居民人民币储蓄存款余额',align:'right',width: 180,sortable: false,dataIndex:'jmrmbccccye',xtype:'numbercolumn',format : '0,00'},
				{header:'年末金融机构人民币各项贷款余额',align:'right',width: 180,sortable: false,dataIndex:'nmjrjgrbmgxdkye',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_县级市劳动力就业状况_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'第二产业',align:'right',width: 180,sortable: false,dataIndex:'decy',xtype:'numbercolumn',format : '0,00'},
				{header:'第三产业',align:'right',width: 180,sortable: false,dataIndex:'dscy',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_县级市人口状况_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'户籍人口(万人)',align:'right',width: 180,sortable: false,dataIndex:'hjrk',xtype:'numbercolumn',format : '0,00.0'},
				{header:'年末总户数(户)',align:'right',width: 180,sortable: false,dataIndex:'nmzhs',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_县级市规模以上工业企业情况_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'规模以上工业企业单位数 (个）',align:'right',width: 180,sortable: false,dataIndex:'qysl',xtype:'numbercolumn',format : '0,00'},
				{header:'规模以上工业总产值 (万元）',align:'right',width: 180,sortable: false,dataIndex:'zcz',xtype:'numbercolumn',format : '0,00'},
				{header:'规模以上工业企业主营业务收入 (万元)',align:'right',width: 180,sortable: false,dataIndex:'yyywsr',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}			
	else if(_type == 'NBS_县级市在校学生数_Country'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},
				{header:"区县城市",align:'left',width: 120,sortable: false,dataIndex:"District"},				
				{header:'普通中学在校学生数',align:'right',width: 180,sortable: false,dataIndex:'pyzxzxxss',xtype:'numbercolumn',format : '0,00'},
				{header:'小学在校学生数',align:'right',width: 180,sortable: false,dataIndex:'xxzxxss',xtype:'numbercolumn',format : '0,00'}
			];
		return grid_colModel_array;			
	}
	else if(_type == 'NBS_各地区可支配收入和消费支出_City'){
		var grid_colModel_array =			
			[					
				_grid_sm,
				{header:"年份",align:'right',width: 50,sortable: false,dataIndex:"Year_id"},
				{header:"行政区划代码",align:'right',width: 100,sortable: false,dataIndex:"AdminCode"},
				{header:"省份",align:'left',width: 90,sortable: false,dataIndex:"Province"},
				{header:"地级市",align:'left',width: 120,sortable: false,dataIndex:"City"},				
				{header:'农村居民人均可支配收入',align:'right',width: 180,sortable: false,dataIndex:'Rural_DepositIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均消费支出',align:'right',width: 180,sortable: false,dataIndex:'Rural_ConsumptionExp',xtype:'numbercolumn',format : '0,00.0'},
				{header:'农村居民人均消费支出',align:'right',width: 180,sortable: false,dataIndex:'Urban_DepositIncome',xtype:'numbercolumn',format : '0,00.0'},
				{header:'城镇居民人均消费支出',align:'right',width: 180,sortable: false,dataIndex:'Urban_ConsumptionExp',xtype:'numbercolumn',format : '0,00.0'}
			];
		return grid_colModel_array;			
	}	
	
	
	
	
	
}
