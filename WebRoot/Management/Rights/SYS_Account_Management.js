Ext.onReady(function(){ 
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
    var isECRightedit = 0; //�ж��û����Ƶ���Ȩ���Ƿ����
   /***************************
     * ## center�û�grid
   ****************************/  
	var sysgrid_store = new Ext.data.Store({
		autoLoad: {params:{sql:'text'}},  //����Ҫ
		reader: new Ext.data.JsonReader(),
		proxy : new Ext.data.HttpProxy({
			url : 'GetAccountAllGridstore'
		})
	});
		
	var sysgrid_sm = new Ext.grid.CheckboxSelectionModel();   	
	var sysgrid_colModel= new Ext.grid.ColumnModel(
		[
			new Ext.grid.RowNumberer(),
		    sysgrid_sm,
			/*{header:"����",align:'right',width: 50,sortable: true,dataIndex:"ID"},*/
			{header:"�û���",align:'left',width: 80,sortable: true,dataIndex:"Account"},
			{header:"��˾����",align:'left',width: 150,sortable: true,dataIndex:"Company"},
			{header:"����",align:'left',width: 110,sortable: true,dataIndex:"Department"},
			{header:"��λ",align:'left',width: 150,sortable: true,dataIndex:"Post"},
			{header:"��ϵ��ʽ",align:'left',width: 100,sortable: true,dataIndex:"Telphone"},
			{header:"Email",align:'right',width: 180,sortable: true,dataIndex:"Email"},
			{header:"ע��ʱ��",align:'right',width: 130,sortable: true,dataIndex:"RegisterDate"},
			{header:"��������ͨʱ��",align:'right',width: 130,sortable: true,dataIndex:"OpenDate"},
			{header:"�˻���Чʱ��(S)",align:'right',width: 130,sortable: true,dataIndex:"AvailableTime",
				editor: new Ext.form.TextField({allowBlank: false})},
			{header:"�������ر�ʱ��",align:'right',width: 130,sortable: true,dataIndex:"CloseDate"},
			{header:"ÿ�µ�������",align:'right',width: 100,sortable: true,dataIndex:"ExportObs",
				editor: new Ext.form.TextField({allowBlank: false})},
			{header:"ÿ���ۼƵ�������",align:'right',width: 120,sortable: true,dataIndex:"ExportRows",
				editor: new Ext.form.TextField({allowBlank: false})},	
			{header:"ÿ���ۼƸ�������",align:'right',width: 120,sortable: true,dataIndex:"CopyRows",
				editor: new Ext.form.TextField({allowBlank: false})},				
			{xtype: 'checkcolumn',header:"�Ƿ�ͨ���",align:'right',width: 100,sortable: true,dataIndex:"IsOpenSoftware"}		
		]);
			
	var sys_grid = new Ext.grid.EditorGridPanel({	
	    id:'sys_grid',
		frame:false,
		clicksToEdit: 1,
		sm: sysgrid_sm,
	    cm: sysgrid_colModel,
	    border : false,
		tbar : [			
			'-',
			'�������� ',
			'-',{text:'�޸ĵ�������Ȩ��',iconCls:'edit',handler:fun_saveaccount},			
			'-',{text:'ɾ�������û�<b>[�ڲ�]</b>',iconCls:'delete',handler:fun_deleteaccount},
			'-',{text:'ˢ��ҳ��',iconCls:'refresh',handler:fun_refreshpage},
			'-',{text:'���ر����',iconCls:'computer',handler:fun_opensw},
			'-',{text:'�����û�ָ�Ʊ�ǩ',iconCls:'fingerprint',handler:fun_clearfingerprint}
		],
	    loadMask: true,	 		    
	    store:sysgrid_store,
		autoScroll:true,		
		stripeRows:true,
		containerScroll:true,
		trackMouseOver:true,
		view: new Ext.ux.grid.BufferView({  	         
	      	rowHeight: 20,  
	        scrollDelay: true,  
	        forceFit: false   
      	}),
        listeners:{
        	scope:this,
			rowclick : function(grid,rowIndex,e) {},
			afteredit: function(e){
				if(e.value != e.originalValue){					
					if(e.column>=12 && e.column <=14){//���Ƶ���action
						isECRightedit = 1;
					}					
				}
		   	}
        }
	});
	
   /***************************
     * ## ���岼��
   ****************************/
   new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {				
      	  	title : '<font size = 2>�û���Ϣһ��</font>',
			region : 'center',
			margins:'0 3 3 0',
            cmargins: '0 3 3 3',
			layout:'fit',
			items:[sys_grid]
		  }
      	]
      }); 
      
   /***************************
     * ## ҳ�����к���
     *  @@fun_saveaccount: �޸ı����û���Ϣ
     *  @@fun_opensw: ��ͨ���
     *  @@fun_deleteaccount:  ɾ�������û���Ϣ
     *  @@fun_refreshpage: ˢ��ҳ��
     *  @@fun_clearfingerprint:����ָ�Ʊ�ǩ
   ****************************/    
   function fun_saveaccount(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    else if(selected_rows>1){
	    	Ext.Msg.alert('��ʾ','ֻ��ѡ��һ���û����б���!') ;
	    }
	    else{
		    Ext.MessageBox.confirm('��ʾ','ȷ���޸��û���������Ȩ��?',callback);
		    function callback(id){
		   		if(id == 'yes' && isECRightedit == 1){
		   			var row_selection = select_model.getSelected();
		   			if(row_selection.get('IsOpenSoftware') == '1' || row_selection.get('IsOpenSoftware') == 'true'){
		   				isopsw = 1;
		   			}
		   			else{
		   				isopsw = 0;
		   			}		   			
					Ext.Ajax.request({ 
						url  : 'SaveAccounts',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),											
							exportobs : row_selection.get('ExportObs'),
							exportrows : row_selection.get('ExportRows'),
							copyrows : row_selection.get('CopyRows')									
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "success"){
								sysgrid_store.commitChanges();
								Ext.Msg.alert('��ʾ','�޸ĳɹ�!');
								fun_refreshpage();								
							}
							else if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
						}				
					});
					isECRightedit = 0;
		   		}
		   		else{
		   			Ext.Msg.alert('����','ʧ��!');
		   		}
		    }
	    }
   }
   
   function fun_opensw(){   
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
		var row_selection = select_model.getSelected();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    else if(selected_rows>1){
	    	Ext.Msg.alert('��ʾ','ֻ��ѡ��һ���û����б���!') ;
	    }
	    /*else if(row_selection.get('IsOpenSoftware') != '1' || row_selection.get('IsOpenSoftware') != 'true'){
   			Ext.Msg.alert('��ʾ','���û���û�п�ͨ����������!');
   		}*/
	    else{
		    Ext.MessageBox.confirm('��ʾ','�޸���Ϣ?',callback);
		    function callback(id){
		   		if(id == 'yes'){		   					   		
		   			if(row_selection.get('IsOpenSoftware') == '1' || row_selection.get('IsOpenSoftware') == 'true'){
		   				isopsw = 1;
		   			}
		   			else{
		   				isopsw = 0;
		   			}
					Ext.Ajax.request({ 
						url  : 'SaveOpensw',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),	
							email: row_selection.get('Email'),
							accountname : row_selection.get('Account'),
							opendate : row_selection.get('OpenDate'),
							availabletime: row_selection.get('AvailableTime'),
							closedate : row_selection.get('CloseDate'),					
							IsOpSW : isopsw	
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "success"){
								sysgrid_store.commitChanges();
								Ext.Msg.alert('��ʾ','�޸ĳɹ�!');
								fun_refreshpage();
							}
							else if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
						}				
					});
		   		}else{
		   			Ext.Msg.alert('����','ʧ��!');
		   		}
		    }
	    }	    
   }
   function fun_deleteaccount(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    else{
		    var userid='';
		    var record;
		    if(selected_rows == 1){
		    	record = select_model.getSelected();
		    	userid = record.get("ID") + '|';
		    }
		    else{
		    	record = select_model.getSelections();
		    	for(var i = 0;i<record.length;i++){
		    		userid = userid + record[i].get("ID") + '|';
		    	}		    	
		    }		    
		    Ext.MessageBox.confirm('��ʾ','ȷ���޸ı��������û���Ϣ?',callback);
		    function callback(id){
		   		if(id == 'yes'){
					Ext.Ajax.request({ 
						url  : 'DeleteAccounts',
						method : 'post', 
						params : { 
							userid : userid
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "success"){
								sysgrid_store.remove(record);
								Ext.Msg.alert('��ʾ','ɾ���ɹ�!');
							}
							else if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
						}				
					});				
		   		}
		    }
	    }	       	
   }
   
   function fun_refreshpage(){
   		sysgrid_store.reload();
   }
   
   function fun_clearfingerprint(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    else{
	    	record = select_model.getSelected();
	    	username = record.get("Account");	    	
		    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ����ָ�Ʊ�ǩ?',callback);
		    function callback(id){
		   		if(id == 'yes'){
					Ext.Ajax.request({ 
						url  : 'ClearFingerPrint',
						method : 'post', 
						params : { 
							username : username
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "success"){
								Ext.Msg.alert('��ʾ','���óɹ�!');
							}
							else if(trim(response.responseText) == "failure"){
								Ext.Msg.alert('��ʾ','����ʧ��!');
							}
						}				
					});				
		   		}
		    }	    	
	    }
   }
   
    
   
      
      
    
	
	
});