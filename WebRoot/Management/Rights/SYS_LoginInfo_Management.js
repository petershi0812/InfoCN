Ext.onReady(function(){ 
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
   /***************************
     * ## center�û�grid
   ****************************/  
	var sysgrid_store = new Ext.data.Store({
		autoLoad: {params:{start:0,limit:300}},
		reader: new Ext.data.JsonReader(),
		proxy : new Ext.data.HttpProxy({
			url : 'GetSoftwareLoginInfoAllGridstore'
		})
	});
	
	var sysgrid_sm = new Ext.grid.CheckboxSelectionModel();   	
	var sysgrid_colModel= new Ext.grid.ColumnModel(
		[
			new Ext.grid.RowNumberer({width:30}),
		    sysgrid_sm,
			{header:"�û���",align:'left',width: 100,sortable: true,dataIndex:"Account"},
			{header:"�û���¼ʱ��",align:'right',width: 150,sortable: true,dataIndex:"logintime"},
			{header:"��˾����",align:'left',width: 170,sortable: true,dataIndex:"Company"},
			{header:"��ϵ�绰",align:'right',width: 150,sortable: true,dataIndex:"Telphone"},
			{header:"�û�email",align:'left',width: 170,sortable: true,dataIndex:"email"},
			{header:"��˾��ַ",align:'left',width: 350,sortable: true,dataIndex:"CompanyAddress"}					
		]);
    var sysgrid_pagetoolbar = new Ext.PagingToolbar({
		    store: sysgrid_store,
		    pageSize:300,
		    displayInfo:true,
		    displayMsg :'��{0}����{1}����һ��{2}��',
	        onFirstLayout : function(){//�����������
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
		/*tbar : [			
			'-',
			'�������� ',
			'-',{text:'ˢ��ҳ��',iconCls:'refresh',handler:fun_refreshpage}
		],*/
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
     * ## ���岼��
   ****************************/
   new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {				
      	  	title : '<font size = 2>�û���¼��Ϣһ��</font>',
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
     *  @@fun_refreshpage
   ****************************/
   function fun_refreshpage(){   	
   		sysgrid_store.reload();
   }      
      
	/*******************************
	 * ## ��ʱˢ��
	********************************/
    var activeaccount_task = {
        run: fun_refreshpage,
        interval: 10000
    }
    var activeaccount_runner = new Ext.util.TaskRunner();
    activeaccount_runner.start(activeaccount_task);   
   
   
      
});