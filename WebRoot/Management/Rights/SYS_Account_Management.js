Ext.onReady(function(){ 
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
    var isECRightedit = 0; //判断用户复制导出权限是否更改
   /***************************
     * ## center用户grid
   ****************************/  
	var sysgrid_store = new Ext.data.Store({
		autoLoad: {params:{sql:'text'}},  //必须要
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
			/*{header:"编码",align:'right',width: 50,sortable: true,dataIndex:"ID"},*/
			{header:"用户名",align:'left',width: 80,sortable: true,dataIndex:"Account"},
			{header:"公司名称",align:'left',width: 150,sortable: true,dataIndex:"Company"},
			{header:"部门",align:'left',width: 110,sortable: true,dataIndex:"Department"},
			{header:"岗位",align:'left',width: 150,sortable: true,dataIndex:"Post"},
			{header:"联系方式",align:'left',width: 100,sortable: true,dataIndex:"Telphone"},
			{header:"Email",align:'right',width: 180,sortable: true,dataIndex:"Email"},
			{header:"注册时间",align:'right',width: 130,sortable: true,dataIndex:"RegisterDate"},
			{header:"最近软件开通时间",align:'right',width: 130,sortable: true,dataIndex:"OpenDate"},
			{header:"账户有效时间(S)",align:'right',width: 130,sortable: true,dataIndex:"AvailableTime",
				editor: new Ext.form.TextField({allowBlank: false})},
			{header:"最近软件关闭时间",align:'right',width: 130,sortable: true,dataIndex:"CloseDate"},
			{header:"每月导出次数",align:'right',width: 100,sortable: true,dataIndex:"ExportObs",
				editor: new Ext.form.TextField({allowBlank: false})},
			{header:"每月累计导出行数",align:'right',width: 120,sortable: true,dataIndex:"ExportRows",
				editor: new Ext.form.TextField({allowBlank: false})},	
			{header:"每月累计复制行数",align:'right',width: 120,sortable: true,dataIndex:"CopyRows",
				editor: new Ext.form.TextField({allowBlank: false})},				
			{xtype: 'checkcolumn',header:"是否开通软件",align:'right',width: 100,sortable: true,dataIndex:"IsOpenSoftware"}		
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
			'工具栏： ',
			'-',{text:'修改导出复制权限',iconCls:'edit',handler:fun_saveaccount},			
			'-',{text:'删除无用用户<b>[内部]</b>',iconCls:'delete',handler:fun_deleteaccount},
			'-',{text:'刷新页面',iconCls:'refresh',handler:fun_refreshpage},
			'-',{text:'开关闭软件',iconCls:'computer',handler:fun_opensw},
			'-',{text:'重置用户指纹标签',iconCls:'fingerprint',handler:fun_clearfingerprint}
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
					if(e.column>=12 && e.column <=14){//复制导出action
						isECRightedit = 1;
					}					
				}
		   	}
        }
	});
	
   /***************************
     * ## 整体布局
   ****************************/
   new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {				
      	  	title : '<font size = 2>用户信息一览</font>',
			region : 'center',
			margins:'0 3 3 0',
            cmargins: '0 3 3 3',
			layout:'fit',
			items:[sys_grid]
		  }
      	]
      }); 
      
   /***************************
     * ## 页面所有函数
     *  @@fun_saveaccount: 修改保存用户信息
     *  @@fun_opensw: 开通软件
     *  @@fun_deleteaccount:  删除无用用户信息
     *  @@fun_refreshpage: 刷新页面
     *  @@fun_clearfingerprint:重置指纹标签
   ****************************/    
   function fun_saveaccount(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('提示','请先选择用户!') ;
	    }
	    else if(selected_rows>1){
	    	Ext.Msg.alert('提示','只能选择一个用户进行保存!') ;
	    }
	    else{
		    Ext.MessageBox.confirm('提示','确定修改用户导出复制权限?',callback);
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
								Ext.Msg.alert('提示','修改成功!');
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
		   			Ext.Msg.alert('错误','失败!');
		   		}
		    }
	    }
   }
   
   function fun_opensw(){   
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
		var row_selection = select_model.getSelected();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('提示','请先选择用户!') ;
	    }
	    else if(selected_rows>1){
	    	Ext.Msg.alert('提示','只能选择一个用户进行保存!') ;
	    }
	    /*else if(row_selection.get('IsOpenSoftware') != '1' || row_selection.get('IsOpenSoftware') != 'true'){
   			Ext.Msg.alert('提示','该用户还没有开通，不能设置!');
   		}*/
	    else{
		    Ext.MessageBox.confirm('提示','修改信息?',callback);
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
								Ext.Msg.alert('提示','修改成功!');
								fun_refreshpage();
							}
							else if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
						}				
					});
		   		}else{
		   			Ext.Msg.alert('错误','失败!');
		   		}
		    }
	    }	    
   }
   function fun_deleteaccount(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('提示','请先选择用户!') ;
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
		    Ext.MessageBox.confirm('提示','确定修改保存现有用户信息?',callback);
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
								Ext.Msg.alert('提示','删除成功!');
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
	    	Ext.Msg.alert('提示','请先选择用户!') ;
	    }
	    else{
	    	record = select_model.getSelected();
	    	username = record.get("Account");	    	
		    Ext.MessageBox.confirm('提示','确定需要重置指纹标签?',callback);
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
								Ext.Msg.alert('提示','重置成功!');
							}
							else if(trim(response.responseText) == "failure"){
								Ext.Msg.alert('提示','重置失败!');
							}
						}				
					});				
		   		}
		    }	    	
	    }
   }
   
    
   
      
      
    
	
	
});