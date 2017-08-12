Ext.onReady(function(){ 
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
   /***************************
     * ## center用户grid
   ****************************/  
	var sysgrid_store = new Ext.data.Store({
		autoLoad: {params:{start:0,limit:300}},
		reader: new Ext.data.JsonReader(),
		proxy : new Ext.data.HttpProxy({
			url : 'GetSoftwareInfoAllGridstore'
		})
	});
	
	var sysgrid_sm = new Ext.grid.CheckboxSelectionModel();   	
	var sysgrid_colModel= new Ext.grid.ColumnModel(
		[
			new Ext.grid.RowNumberer({width:30}),
		    sysgrid_sm,
			/*{header:"编码",align:'right',width: 50,sortable: true,dataIndex:"Account_Id"},*/
			{header:"用户名",align:'left',width: 80,sortable: true,dataIndex:"Account"},
			{header:"公司名称",align:'left',width: 150,sortable: true,dataIndex:"Company"},
			{header:"部门",align:'left',width: 110,sortable: true,dataIndex:"Department"},
			{header:"岗位",align:'left',width: 110,sortable: true,dataIndex:"Post"},
			{header:"最近软件开通时间",align:'right',width: 130,sortable: true,dataIndex:"OpenDate"},
			{header:"账户有效时间(S)",align:'right',width: 130,sortable: true,dataIndex:"AvailableTime"},
			{header:"最近软件关闭时间",align:'right',width: 130,sortable: true,dataIndex:"CloseDate"},			
			{xtype: 'checkcolumn',header:"是否开通软件",align:'right',width: 100,sortable: true,dataIndex:"IsOpenSoftware"},
			{header:"更新时间",align:'right',width: 130,sortable: true,dataIndex:"UpdateDate"}			
		]);
    var sysgrid_pagetoolbar = new Ext.PagingToolbar({
		    store: sysgrid_store,
		    pageSize:300,
		    displayInfo:true,
		    displayMsg :'第{0}条到{1}条，一共{2}条',
	        onFirstLayout : function(){//增加这个配置
                if(this.dsLoaded){
                    this.onLoad.apply(this, this.dsLoaded);
                }
                /*if(this.rendered && this.refresh){
                    this.refresh.hide();
                }*/
	        }
	});
	var sys_grid = new Ext.grid.GridPanel({	
	    id:'sys_grid',
		frame:false,
		sm: sysgrid_sm,
	    cm: sysgrid_colModel,
	    border : false,
		tbar : [			
			'-',
			'工具栏： ',
			'-',{text:'刷新页面',iconCls:'refresh',handler:fun_refreshpage}
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
        bbar: sysgrid_pagetoolbar
	});
	
   /***************************
     * ## 整体布局
   ****************************/
   new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {				
      	  	title : '<font size = 2>软件开关信息一览</font>',
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
     *  @@fun_refreshpage
   ****************************/
   function fun_refreshpage(){
   		sysgrid_store.reload();
   }      
   
   
   
      
});