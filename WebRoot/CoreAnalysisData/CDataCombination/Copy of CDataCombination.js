Ext.onReady(function(){
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
   /***************************
     * ## ģ��ɸѡ���tips
   ****************************/    
	var updateTip = function(field){  
	    if(field.rendered){  
	        field.getEl().dom.setAttribute("ext:qtip", "����'All������'��ԭ��");  
	    }  
	};     
    /***************************
     * @@rightspk: Ȩ��ֵ
    ***************************/
    var rightspk = document.getElementById("rightspk").value;
   /***************************
     * ## ȫ�ֱ���
     *	@@ pageSize �� ��ҳ��
     *  @@ exportRowNum: ��������
     *  @@ copyRowNum: ��������
     *	@@ tablename : ���ݱ���������
     *  @@ tablesortflag : ���ݱ�������
     *  @@ dimension : ���ݱ��ά��
     *  @@ fieldstr_point: ����ָ����ʹ�����ָ�ʽdataindex����ʼ��
     *  @@ dbname : ���ݱ�������
     *  @@ cdcombination_sql �� �ϲ���sql���
     *  @@ sort_module_sql : ����ģ��sql���
     *  @@ filter_module_sql : ����ģ��sql���
     *  @@ newcolumn_module_sql: �����ֶ�ģ��sql���
     *  @@ summary_module_sql: �������ģ��sql���
     *     $$summary_sortpanel_module_sql: �������ģ��������sql���
     *     $$summary_filterpanel_module_sql �������ģ����ɸѡsql���
     *  @@ SelectionPoint: ������ģ���й�ʽ�ı���Ĺ��λ��
     *  @@ activeaccording_id: ͼ����panel��id
     *  @@ drillleastlevel: ͼ����ϸ��ά��
     *  @@ single_index: �ڽ��ͼ�У��ж��Ƿ����ظ���ָ���趨ͼ�� 
     *  @@ crows: ���ظ��Ƶ�����
     *  @@ sysfunStr: ѡ������ݿ⣬�������ƺ͵�������
   ****************************/
    var pageSize = 200;
	var exportRowNum;
	var copyRowNum;    
    var tablename = "";
    var tablesortflag = 0;
    var dimension = "";
    var fieldstr_point;
    var dbname = "";
    var cdcombination_sql = ' ';//�ո�ǳ���Ҫ
    var sort_module_sql = ' ';  //�ո�ǳ���Ҫ
    var filter_module_sql = ' '; //�ո�ǳ���Ҫ
    var newcolumn_module_sql = ' '; //�ո�ǳ���Ҫ
    var summary_module_sql = ' '  //�ո�ǳ���Ҫ
    var summary_sortpanel_module_sql = ' '  //�ո�ǳ���Ҫ
    var summary_filterpanel_module_sql = ' '  //�ո�ǳ���Ҫ    
    var SelectionPoint = 0;
	var activeaccording_id = 0.0;
	var drillleastlevel = ' ';
	var single_index = 0;   
	var crows = 0;	
	var sysfunStr = '';
   /****************************
     * ## ���ݼ����gridpanel
     * 	%% firstGrid �� �������е����ݼ�
     *  %% secondGrid �� �Ѿ�ѡ�����е����ݼ�
     *  %% thirdGrid �� ��ʾ�Ѿ�ѡ������ݼ����ֶ�
   ****************************/
	Ext.Ajax.request({      
		 url: 'GetCombinationData',    
         callback : function(options, success, response) {   
            if(success){ 
            	myData = trim(response.responseText);  
            	runscript(eval(myData));
            }else {		                	
             	Ext.MessageBox.alert('����',"������ˢ��");   
            }   
        }
    });
    function runscript(myData){		
		var fields = [
			{name: 'name', mapping : 'name'},
			{name: 'dimension', mapping : 'dimension'},
			{name: 'ref_name', mapping : 'ref_name'},
			{name: 'sortflag', mapping : 'sortflag'},
			{name: 'fieldstr_point', mapping : 'fieldstr_point'},
			{name: 'dbname', mapping : 'dbname'}
		];
	    var firstGridStore = new Ext.data.JsonStore({
	        fields : fields,
			data   : myData,
			root   : 'records'
	    });
		var cols = [		
			{header: "���ݼ���",align:'left',width: 200,dataIndex: 'name',menuDisabled:true,sortable: false,renderer:change},
			{header: "ϸ�̶ֳ�",align:'right',width: 75,dataIndex: 'dimension',menuDisabled:true,sortable:false},
			{header: "����gridcolumn_return",hidden:true,sortable: false, dataIndex: 'ref_name',hideable: true},
			{header: "���������ǩ",hidden:true,sortable: false, dataIndex: 'sortflag',hideable: true},
			{header: "������ֵ��ʼ��",hidden:true,sortable: false, dataIndex: 'fieldstr_point',hideable: true},
			{header: "����dbname",hidden:true,sortable: false, dataIndex: 'dbname',hideable: true}
		];
	    function change(val) {
	        if (val.indexOf('-')<0) {
	            return '<span style="font-weight:bold">' + val + '</span>';
	        }
	        return val;
	    }    
	    var firstGrid = new Ext.grid.GridPanel({
		    ddGroup : 'secondGridDDGroup',
	        store : firstGridStore,
	        columns : cols,
		    enableDragDrop : true,	   
		    autoWidth:true,
			autoScroll:true,       
			frame:false,   
			border : false,
			stripeRows:true        
	    });
	
	    var secondGridStore = new Ext.data.JsonStore({
	        fields : fields,
			root   : 'records'
	    });
	    var secondGrid = new Ext.grid.GridPanel({
		    ddGroup          : 'firstGridDDGroup',
	        store            : secondGridStore,
	        columns : cols,
		    enableDragDrop : true,	   
		    autoWidth:true,
			autoScroll:true,       
			frame:false,   
			border : false,
			stripeRows:true,   
	        title : '��ѡ������ݿ�'
	    }); 
	    
		secondGrid.addListener('rowdblclick', rowdblclickFn);
		function rowdblclickFn(grid, rowIndex, e) {
			var data = secondGridStore.data.items[rowIndex].data;
			tablename = data.name;
			tablesortflag = data.sortflag;
			dimension = data.dimension;
			if(dimension == "������" || dimension == "���س���") drillleastlevel = "district";
			else if(dimension == "�ؼ���") drillleastlevel = "city";
			else if(dimension == "ʡ��") drillleastlevel = "province";
			else if(dimension == "�й�") drillleastlevel = "china";
			fieldstr_point = data.fieldstr_point;
			dbname = data.dbname;
			var grid_colModel_array = fun_grid_colModel_config(data.ref_name,"grid_sm");		
			dbcolumnselection_win.show();
			dbcolumnselection_win.setTitle(replaceAll(data.name,'--','') + "-����ѡ��");		
			//checkcolumn����thirdgrid���г�ʼ��
			var p = thirdGridStore.getCount(); 
			var fieldname = "";
			var field_array = [];
			for(var i = 0;i<p;i++){
				if(thirdGridStore.data.items[i].data.name == tablename){
					fieldname = thirdGridStore.data.items[i].data.field;
					break;
				}
			}
			fieldname = fieldname + "+";
			field_array = fieldname.split("+");	
			if(grid_colModel_array != undefined){			
				//�������ݿ������
				var mid_str="";
				for(var i=fieldstr_point; i<grid_colModel_array.length;i++){
					if(i==grid_colModel_array.length){
						if(isInArray(grid_colModel_array[i].header,field_array)){
							mid_str = mid_str + "{name:'"+grid_colModel_array[i].header+"',field:'"+grid_colModel_array[i].dataIndex+"',isselected:true}"
						}
						else{
							mid_str = mid_str + "{name:'"+grid_colModel_array[i].header+"',field:'"+grid_colModel_array[i].dataIndex+"',isselected:false}"
						}
					}
					else{
						if(isInArray(grid_colModel_array[i].header,field_array)){
							mid_str = mid_str + "{name:'"+grid_colModel_array[i].header+"',field:'"+grid_colModel_array[i].dataIndex+"',isselected:true},"
						}
						else{
							mid_str = mid_str + "{name:'"+grid_colModel_array[i].header+"',field:'"+grid_colModel_array[i].dataIndex+"',isselected:false},"
						}
					}
				}
				var griddata = "({records:["+mid_str+"]})";	
				dbcolumnselection_gridstore.loadData(eval(griddata));
			}
		}
				
	    var thirdGridStore = new Ext.data.JsonStore({
	        fields : [
					{name: 'name', mapping : 'name'},
					{name : 'dimension',mapping : 'dimension'},
					{name: 'field', mapping : 'field'},
					{name: 'dataindex', mapping : 'dataindex'},
					{name: 'sortflag', mapping : 'sortflag'},
					{name: 'dbname', mapping : 'dbname'}
				],
			root   : 'records'
	    });
		var thirdGridcols = [
			new Ext.grid.RowNumberer(),	
			{header: "���ݼ���",dataIndex: 'name',width:200,menuDisabled:true,sortable: false},
			{header: "ϸ�̶ֳ�",dataIndex: 'dimension',width:100,menuDisabled:true,sortable: false},
			{header: "ѡ������",dataIndex: 'field',width:500,menuDisabled:true,sortable: false},
			{header: "��������dataindex",hidden:true,sortable: false, dataIndex: 'dataindex',hideable: true},
			{header: "����sortflag",hidden:true,sortable: false, dataIndex: 'sortflag',hideable: true},
			{header: "�������ݱ�����",hidden:true,sortable: false, dataIndex: 'dbname',hideable: true}
		];   
	    var thirdGrid = new Ext.grid.GridPanel({
	        store : thirdGridStore,
	        columns : thirdGridcols,  
	        autoScroll:true, 	        
		    //autoExpandColumn:3,
			frame:false,   
			border : false,
			stripeRows:true,
			title : '��ѡ�����ݿ����&nbsp;(ע�⣺��Ҫͬһϸ�̶ֳ�)'
	    });
	    
	   /***************************
	     * ##���ݱ��ָ����ѡ��win panel
	   ****************************/ 
	   var dbcolumnselection_gridstore = new Ext.data.JsonStore({
	        fields : [
	        		{name: 'name', mapping : 'name'},
					{name: 'field', mapping : 'field'},
					{name: 'isselected', mapping : 'isselected'}
				],
			root   : 'records'
	    });
		var dbcolumnselection_gridcolumn = [
			new Ext.grid.RowNumberer(),
			{header: "ѡ������",dataIndex: 'name',menuDisabled:true,sortable: false},
			{header: "ѡ��dataindex",dataIndex: 'field',menuDisabled:true,hidden:true,sortable:false,hideable:true},
			{xtype: 'checkcolumn',header:'�Ƿ�ѡ��',dataIndex: 'isselected',width: 70,menuDisabled:true,sortable: false}		
		];   
	    var dbcolumnselection_grid = new Ext.grid.EditorGridPanel({
	        store : dbcolumnselection_gridstore,
	        columns : dbcolumnselection_gridcolumn,  	    
		    //viewConfig: {forceFit: true},
		    autoExpandColumn:1,
			frame:false,   
			border : false,
			bbar : [
				'->',
				'-',
				{xtype : 'button',text : 'ȷ��',tooltip:'ȷ��ѡ�������',iconCls:'accept',handler:fun_dbcolumnselected}
			],			
			stripeRows:true
	    });
	    
		var dbcolumnselection_win = new Ext.Window({ 
	        width : 450,       
	        height: 350, 
	        resizable:false,
	        //maximizable :true,
	        //collapsible : true, 
	        closeAction: 'hide',
	        modal : true,
	        plain : true, 
	        defaults : {              
				border : false  
			}, 	
			fill : true,
	  		layout : 'fit',  		
			items  :[dbcolumnselection_grid]  
		});    
	    		
	   /***************************
	     * ## �����ܽ���ʵ��
	     * 	@@ large_sort_win : �����ܽ���ʵ��
	     * 	@@ large_sort_panel : �����ܽ���ָ��grid
	   ****************************/
		var editorfield_combox_store = new Ext.data.SimpleStore({
		   fields:['field','field_id'],
		   autoLoad : true,
		   data : []
		   });	
		
		var editorfield_combox = new Ext.form.ComboBox({
		    	selectOnFocus:true,
		    	id:'editorfiled_combox',
		    	width :220,             
		        allowBlank:false,
		        editable : false, 
		        store:editorfield_combox_store,
		        mode: 'local',
		        typeAhead : true,
		        triggerAction: 'all',
		        displayField: 'field', 
		        valueField : 'field_id',
		        forceSelection: true,
		        resizable:false
		}); 
	
		var editorfield_sort_combox_store = new Ext.data.SimpleStore({
		   fields:['order_field','order_field_id'],
		   autoLoad : true, 
		   data : [['����','DESC'],['����',' ASC']]
		   });	
		
		var editorfield_sort_combox = new Ext.form.ComboBox({
		    	selectOnFocus:true,
		    	id:'editorfield_sort_combox',
		    	width :220,             
		        allowBlank:false,
		        editable : false, 
		        store:editorfield_sort_combox_store,
		        mode: 'local',
		        typeAhead : true,
		        triggerAction: 'all',
		        displayField: 'order_field', 
		        valueField : 'order_field_id',
		        forceSelection: true,
		        lazyRender: true,
		        resizable:false
		});
	
		var large_sort_panel_sm = new Ext.grid.CheckboxSelectionModel(); 
		var large_sort_panel_cm = new Ext.grid.ColumnModel({
		    defaults : {
		    	sortable: true           
		    },
		    columns:[
				new Ext.grid.RowNumberer(),	    
		        large_sort_panel_sm,
				{header:'Column',dataIndex:'default_id',width : 100,align :'center',sortable:false,hideable: false},
				{header: 'ָ����',dataIndex: 'find_field',width: 200,align : 'center',sortable:false,hideable: false,
		         	editor:editorfield_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = editorfield_combox_store.find('field_id',value);  
	                    if(index!=-1){  
	                    	return editorfield_combox_store.getAt(index).data.field;  
	                    }  
	                    return value;  
	                }         
		        },     
				{header: '����',dataIndex: 'Order_type',width: 80,align : 'center',sortable : false, hideable : false,
				 editor : editorfield_sort_combox,
		         renderer: function(value,metadata,record){  
		 		   		var index = editorfield_sort_combox_store.find('order_field_id',value);  
		                if(index!=-1){  
		                	return editorfield_sort_combox_store.getAt(index).data.order_field;  
		                }  
		                return value;  
		            }         
		        }     
			]
		});
	     
		var large_sort_panel_bar =new Ext.Toolbar({
	       plain:true,
	       id:'large_sort_panel_bar'
		}); 
		large_sort_panel_bar.add(       
	       {xtype : 'tbspacer'},'-',
	       {text : '��������',tooltip : '������������',iconCls : 'add',handler : fun_sort_add},
	       '-',
	       {xtype : 'tbspacer'},
	       {text : 'ɾ������',tooltip : 'ɾ������',iconCls : 'delete',handler : fun_sort_del},
	       '-',{xtype : 'tbspacer'},
	       {iconCls : 'arrow_up',text : '����',tooltip : 'ѡ��������������',handler : fun_sort_moveup},
	       {xtype : 'tbspacer'},
	       {iconCls : 'arrow_down',text : '����',tooltip :'ѡ��������������',handler : fun_sort_movedown},
	       '-',{xtype : 'tbspacer'},'->',
	       {text : 'ȷ��',iconCls : 'accept',tooltip:'ȷ������',handler : fun_sort_submit},
	       {xtype : 'tbspacer'},
	       {text : 'ȡ��',iconCls : 'deldt',tooltip : '���������������',handler : fun_sort_cancel},
	       {xtype : 'tbspacer'}
		);    
		
		var large_sort_panel_store = new Ext.data.Store({ 
			autoDestroy: true,
			proxy : new Ext.data.HttpProxy({  
				url:''  
			}),  
			reader:new Ext.data.JsonReader({  
				totalProperty:'totalProperty',  
				root:'root' },
				[  
					{name:'find_field'},    
					{name:'Order_type'}
				])  
		});
		
		var large_sort_panel = new Ext.grid.EditorGridPanel({  
			id : 'large_sort_panel',
		 	tbar : large_sort_panel_bar,
			sm:large_sort_panel_sm,  
			cm:large_sort_panel_cm,  
			clicksToEdit: 1,
			store:large_sort_panel_store  
		});  
		
		var large_sort_win = new Ext.Window({ 
		        title : '����', 
		        width : 450,       
		        height: 250, 
		        resizable:false,
		        //maximizable :true,
		        collapsible : true, 
		        //closable : false,
		        closeAction: 'hide',
		        autoScroll:true,
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_sort_panel]  
		});
		
		/***************************
	     * ## ɸѡ���ܽ���ʵ��
	     * 	@@large_filter_panel��ɸѡ����
	     *  @@large_filter_panel_tree��ҽԺ��ָ����
	     *  @@large_filter_panel_gridpanel: �Զ�������
	     *  @@large_filter_panel_onlyread_gridpanel: ��ʾ�Ѿ����õ�����
	   ****************************/ 		   
		var large_filter_panel_tree = new Ext.tree.TreePanel({ 
			id:'large_filter_panel_tree',        
		    el : 'large_filter_panel_tree',// ��������ӵ�һ��ָ����div��,�ǳ���Ҫ���Զ�����ID
		    plain:true,
		    baseCls:"x-plain",
		    frame:true,
		    autoScroll:true, 
		    animate:true, 
		    enableDD:false, 
		    containerScroll: true, 
		    border:false,
		    rootVisible:true   
		});   
	   
		Ext.getCmp('large_filter_panel_tree').on('click',function(node){	      
			if(node.leaf){
				var text = node.attributes.text;
				var id = node.attributes.id;		
				var dataindex = node.attributes.name;		
				var i = large_filter_panel_gridpanel_store.getCount();	
		       	var row = new Ext.data.Record({ 
		       	   	either: 'and',  //Ĭ����and
		           	filter_field: text,	
		           	filter_type : '=',
		           	contents : '',
		           	dataindex : dataindex,
		           	sort_flag: id          
		       	});
		       	large_filter_panel_gridpanel.stopEditing();        
		       	large_filter_panel_gridpanel_store.insert(i,row);
		       	large_filter_panel_gridpanel.startEditing(0,1);
		       	large_filter_panel_gridpanel_store.commitChanges();
		       	large_filter_panel_gridpanel_store.sort('sort_flag', 'ASC');	
			}
		});
	
		var either_combox_store = new Ext.data.SimpleStore({
		   fields:['either_type','either_type_id'],
		   autoLoad : true,
		   data : [['��','and'],['��',' or']]  //����ORǰ����ո�,Ϊ�˳��Ⱥ�andһ�£�Ϊ�����ȡ�ַ�����׼��
		   });	
		
		var either_combox = new Ext.form.ComboBox({
		    	selectOnFocus:true,
		    	id:'either_combox',
		    	width :80,      
		    	listWidth : 50,
		        allowBlank:false,
		        editable : false, 
		        store:either_combox_store,
		        mode: 'local',
		        typeAhead : true,
		        triggerAction: 'all',
		        displayField: 'either_type', 
		        valueField : 'either_type_id',
		        forceSelection: true,
		        resizable:false
		});
		
		var filtertype_combox_store = new Ext.data.SimpleStore({
		   fields:['math_type','math_type_id'],
		   autoLoad : true,
		   data : [['����','>'],['���ڵ���','>='],['����','='],['������','<>'],['С��','<'],['С�ڵ���','<='],['����','like'],['������','not like'],['��ͷ��','#like'],['��ͷ����','#not like'],['��β��','@like'],['��β����','@not like']]
		   });	
		
		var filtertype_combox = new Ext.form.ComboBox({
		    	selectOnFocus:true,
		    	id:'filtertype_combox',
		    	width :80,             
		        allowBlank:false,
		        editable : false, 
		        store:filtertype_combox_store,
		        mode: 'local',
		        typeAhead : true,
		        triggerAction: 'all',
		        displayField: 'math_type', 
		        valueField : 'math_type_id',
		        forceSelection: true,
		        resizable:false
		});
		
		var contents_textfield = new Ext.form.TextField({
	       	allowBlank: false,
	       	id:'contents_name'
	    });		
				
		var large_filter_panel_gridpanel_store = new Ext.data.JsonStore({
			fields : [
						{name: 'either', mapping : 'either'},
						{name: 'filter_field', mapping : 'filter_field'},
						{name: 'filter_type',mapping : 'filter_type'},
						{name: 'contents', mapping : 'contents'},
						{name: 'dataindex', mapping : 'dataindex'},
						{name: 'sort_flag', mapping : 'sort_flag'}
					],
			root   : 'records'
		});
		
		var large_filter_panel_gridpanel_sm = new Ext.grid.CheckboxSelectionModel(); 
		var large_filter_panel_gridpanel_cm=new Ext.grid.ColumnModel({
		    columns:[	       
		    	new Ext.grid.RowNumberer(),	 
		    	{header: '��/��',dataIndex: 'either',width: 50,align : 'center',sortable:false,hideable: false,
		         	editor:either_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = either_combox_store.find('either_type_id',value);  
	                    if(index!=-1){  
	                    	return either_combox_store.getAt(index).data.either_type;  
	                    }  
	                    return value;  
	                }         
		        },	        
		    	{header: '��Ҫָ��',dataIndex: 'filter_field',width: 110,align : 'center',sortable:false,hideable: false},    	
		    	{header: '��������',dataIndex: 'filter_type',width: 60,align : 'center',sortable:false,hideable: false,
		         	editor:filtertype_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = filtertype_combox_store.find('math_type_id',value);  
	                    if(index!=-1){  
	                    	return filtertype_combox_store.getAt(index).data.math_type;  
	                    }  
	                    return value;  
	                }         
		        },	        
				{header:'<center>��������</center>',dataIndex:'contents',width : 100,align :'right',sortable : false,hideable: false,
					editor : contents_textfield,
					renderer: function(value,metadata,record){
						if(!isNaN(value)) return Ext.util.Format.number(value, '0,000.00');
						else return value;
					}
				},
				{header:'����dataindex',dataIndex:'dataindex',hidden : true,hideable: false},			
				{header:'����sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
			]
		});
		var large_filter_panel_gridpanel = new Ext.grid.EditorGridPanel({   
			cm : large_filter_panel_gridpanel_cm, 
			sm : large_filter_panel_gridpanel_sm,	
			id : 'large_filter_panel_gridpanel',
			border : false,
			clicksToEdit: 1,		
			store:large_filter_panel_gridpanel_store,
			autoExpandColumn:4,
			viewConfig: {forceFit: false}
		}); 
		
		Ext.getCmp('large_filter_panel_gridpanel').on('afteredit',function(e){
			fun_readonly_showconditions();  //��ͨ�ú�������ɾ����ť����ͬ���ĺ���
		});
				
		var large_filter_panel_onlyread_gridpanel_store = new Ext.data.JsonStore({
			fields : [
						{name: 'filter_field', mapping : 'filter_field'},
						{name: 'CH_conditions', mapping : 'CH_conditions'},
						{name: 'EN_conditions', mapping : 'EN_conditions'},
						{name: 'sort_flag', mapping : 'sort_flag'}
					],
			root   : 'records'
		});
		
		var large_filter_panel_onlyread_gridpanel_sm = new Ext.grid.CheckboxSelectionModel(); 
		var large_filter_panel_onlyread_gridpanel_cm=new Ext.grid.ColumnModel({
		    columns:[	       
		    	new Ext.grid.RowNumberer(),  
		    	{header:'����',dataIndex:'filter_field',hidden : true,hideable: false},
				{header:'<center>���õ�����</center>',dataIndex:'CH_conditions',width : 100,align :'left',sortable : false,hideable: false} ,
				{header:'��������',width : 100,dataIndex:'EN_conditions',align :'left',sortable : false,hideable: false,hidden : true} ,
				{header:'����sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
			]
		});
		var large_filter_panel_onlyread_gridpanel = new Ext.grid.EditorGridPanel({   
			cm : large_filter_panel_onlyread_gridpanel_cm, 
			sm : large_filter_panel_onlyread_gridpanel_sm,	
			id : 'large_filter_panel_onlyread_gridpanel',
			border : false,		
			clicksToEdit: 1,		
			store:large_filter_panel_onlyread_gridpanel_store,
			viewConfig: {forceFit: true}
		});
		
	    var show_filterresult_panel =new Ext.Panel({
	        title: '�Ѿ����õ�����',       
	        border : false,
	        layout:'fit',
	        items : [large_filter_panel_onlyread_gridpanel]
	    });
		
		var large_filter_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				title : '����ָ��',
				region : 'west',
				width : 180,
				fill : true,
	      		layout : 'fit',
	      		split : true,
	      		collapsible:true,
	      		collapseMode: 'mini',
				items : [large_filter_panel_tree]
			},
			{
				title : '�Զ�������',
				region : 'center',
				fill : true,
	      		layout : 'fit',
				tbar : [
					{xtype : 'button',text : 'ɾ��',tooltip:'ɾ��ѡ�е�ɸѡ����',iconCls : 'sel_left',id : 'large_filter_panel_removesingle',handler : fun_filter_remove},
					'-',
					{xtype : 'button',text : '���',tooltip:'������е�ɸѡ����',iconCls :'select_clear',id : 'large_filter_panel_clear',handler : fun_filter_clear},
					'->','-',
					{xtype : 'button',text : 'ȷ��',tooltip:'ɸѡ',iconCls :'accept',id : 'large_filter_panel_submit',handler : fun_filter_submit}
	
				],
				items : [
				{
					layout : 'border',
					border : false,
					items : [
					{
						region : 'north',
						fill : true,
						height : 200,
			      		layout : 'fit',	
			      		split: true,
			      		items:[large_filter_panel_gridpanel]					
					},
					{
						region : 'center',
						fill : true,
			      		layout : 'fit',			      		
			      		items:[show_filterresult_panel]	
					}]
				}]
			}]
		});
		
		var large_filter_panel = new Ext.Window({ 
		        title : 'ɸѡ', 
		        width : 650,  
		        height: 420, 
		        resizable:true,
		        //collapsible : true, 
		        //closable : false,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_filter_panel]  
		});
		
		
	   /***************************
	     * ## �����н���ʵ��
	     * 	@@large_newcolumn_panel�� �����Զ�����win
	     *  @@large_newcolumn_panel_tree: ��ʾ��ֵָ���tree
	     *  @@show_newcolumn_panel : ��ʾ�Ѿ������еĹ�ʽ 
	   ****************************/   
		var large_newcolumn_panel_tree = new Ext.tree.TreePanel({ 
			id:'large_newcolumn_panel_tree',        
		    el : 'large_newcolumn_panel_tree',// ��������ӵ�һ��ָ����div��,�ǳ���Ҫ���Զ�����ID
		    plain:true,
		    baseCls:"x-plain",
		    frame:true,
		    autoScroll:true, 
		    animate:true, 
		    enableDD:false, 
		    containerScroll: true, 
		    border:false,
		    rootVisible:true	    
		});
	
		Ext.getCmp('large_newcolumn_panel_tree').on('click',function(node){	      
			if(node.leaf){
				var id = node.attributes.id;			
				/*�����ı�textformula*/
				var text = node.attributes.text;
				var this_formulatext = Ext.getCmp('large_newcolumn_panel_textformula').getValue();
				var input_text = this_formulatext.substring(0,SelectionPoint) + text + this_formulatext.substring(SelectionPoint,this_formulatext.length);
				Ext.getCmp('large_newcolumn_panel_textformula').setValue(input_text);
				SelectionPoint = SelectionPoint + text.length;	
			}
		});	
	    				
		var large_newcolumn_panel_onlyread_gridpanel_store = new Ext.data.JsonStore({
			fields : [
						{name: 'new_field', mapping : 'new_field'},
						{name: 'CH_formula', mapping : 'CH_formula'},
						{name: 'EN_formula', mapping : 'EN_formula'},
						{name: 'sort_flag', mapping : 'sort_flag'}
					],
			root   : 'records'
		});	
		var large_newcolumn_panel_onlyread_gridpanel_sm = new Ext.grid.CheckboxSelectionModel(); 
		var large_newcolumn_panel_onlyread_gridpanel_cm=new Ext.grid.ColumnModel({
		    columns:[	       
		    	new Ext.grid.RowNumberer(),//�Զ��к�	    
		    	{header:'�����ֶ�',width : 40,dataIndex:'new_field',align :'center',sortable : false,hideable: false} ,
				{header:'<center>�ֶι�ʽ</center>',dataIndex:'CH_formula',width : 100,align :'left',sortable : false,hideable: false} ,
				{header:'���ع�ʽ',width : 100,dataIndex:'EN_formula',align :'left',sortable : false,hideable: false,hidden : true} ,
				{header:'����sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
			]
		});
		var large_newcolumn_panel_onlyread_gridpanel = new Ext.grid.EditorGridPanel({   
			cm : large_newcolumn_panel_onlyread_gridpanel_cm, 
			sm : large_newcolumn_panel_onlyread_gridpanel_sm,	
			id : 'large_newcolumn_panel_onlyread_gridpanel',
			border : false,		
			clicksToEdit: 1,		
			store:large_newcolumn_panel_onlyread_gridpanel_store,
			viewConfig: {forceFit: true}
		});
	    var show_newcolumn_panel =new Ext.Panel({       
	        border : false,
	        layout:'fit',
	        items : [large_newcolumn_panel_onlyread_gridpanel]
	    });
	    
		var large_newcolumn_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				title : '����ָ��',
				region : 'west',
				width : 180,
				fill : true,		
	      		layout : 'fit',
	      		split : true,
	      		collapseMode: 'mini',
				items : [large_newcolumn_panel_tree]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',
				items : [
				{
					layout : 'border',
					border : false,
					items : [
					{
						region : 'north',
						fill : true,
						border : false,
						height :160, 
			      		layout : 'fit',
			      		items:[{
			                layout: 'form',
			                labelAlign: 'top',
			                border : false,
			                bbar : [
			                	'->','-',
				                {xtype : 'button',text : '����',tooltip:'��ʱ�������������Զ���ָ��',iconCls : 'add',handler : fun_newcolumn_add},
				                {xtype : 'button',text : 'ɾ��',tooltip:'��ʱ��������ɾ��ѡ���Զ���ָ��',iconCls : 'delete',handler : fun_newcolumn_delete},
				                '-', 
				                {xtype : 'button',text : '�ر�',tooltip:'�رո�ҳ��',iconCls : 'deldt',handler : fun_newcolumn_close}
			                ],
			                bodyStyle:'padding:3px 0 0 3px',
			                items: [{
			                    xtype:'textfield',
			                    allowBlank : true,
			                    blankText: '������Ϊ��',		                    
				                emptyText:'����ĸ����',
			                    fieldLabel: '����',
			                    id: 'large_newcolumn_panel_textname',
			                    anchor:'98%',
			                    listeners : {
			                    	'blur' : function(e){
			                    		if(this.getValue().length !=0){
				                    		if(fun_gridfieldname_exists(this.getValue(),Ext.getCmp("CDCombination_gridpanel"))){
				                    			Ext.Msg.alert('��ʾ','�����ظ�!');			          
				                    			this.focus(true);
				                    		}
				                    		if(!isCHENChar(this.getValue())){
				                    			Ext.Msg.alert('����','�������ĸ����!');			          
				                    			this.focus(true);
				                    		}
			                    		}
			                    	}
			                    }
			                }, {
			                    xtype:'textfield',
			                    fieldLabel: '��ʽ',
				                emptyText:'����(,+,-,*,/,)�����������', 
				                blankText: '������Ϊ��',
			                    id: 'large_newcolumn_panel_textformula',
			                    anchor:'98%',
			                    listeners:{
			                    	'focus' : function(){},
			                    	'keyup' : function(field, e){},
			                    	'blur' : function(){
			                    		SelectionPoint = Ext.getDom('large_newcolumn_panel_textformula').selectionStart;
			                    	}
			                    }
			                }, 
						    {
				            xtype: 'buttongroup',
				            border : false,
				            width : 100,
				            defaults: {  
								handler: function btnClick(btn){								
									var this_formulatext = Ext.getCmp('large_newcolumn_panel_textformula').getValue();
									var input_text = this_formulatext.substring(0,SelectionPoint) + btn.symbol + this_formulatext.substring(SelectionPoint,this_formulatext.length);
									Ext.getCmp('large_newcolumn_panel_textformula').setValue(input_text);
									SelectionPoint = SelectionPoint + btn.symbol.length;	
								}							
							},
				            columns: 6,
				            items: [
				            	{text: '(',width : 25,tooltip:'ǰ����',symbol: '(' },
				            	{text: ')',width : 25,tooltip:'������',symbol: ')',style : 'margin-left : 5px;'  },
				            	{text: '+',width : 25,tooltip:'��',symbol: '+',style : 'margin-left : 5px;'  },
				            	{text: '-',width : 25,tooltip:'��',symbol: '-',style : 'margin-left : 5px;'  },
				            	{text: '��',width : 25,tooltip:'��',symbol: '/',style : 'margin-left : 5px;'  },
				            	{text: '*',width : 25,tooltip:'��',symbol: '*',style : 'margin-left : 5px;'  }]
				            }
			                ]		      		
			      		}]					
					},
					{
						region : 'center',
						fill : true,
						border : false,
			      		layout : 'fit',			      		
			      		items:[show_newcolumn_panel]	
					}]
				}]
			}]
		});
			 
		var large_newcolumn_panel = new Ext.Window({ 
		        title : '�����Զ�����', 
		        width : 550,  
		        height: 310, 
		        resizable:true,
		        //collapsible : true, 
		        //closable : false,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_newcolumn_panel]  
		});		
		
	   /***************************
	     * ##������ܽ���ʵ��
	     * 	@@large_summary_panel�� �������win
	     *  @@dynamic_panel�� ������̬grid
	   ****************************/
		var large_summary_panel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_groupvalue_store  = new Ext.data.SimpleStore({
			fields: ['valuename','valueindex']
		});
		var large_summary_panel_grouptype_store  = new Ext.data.SimpleStore({
			fields: ['typename','typeindex'],
			data : [["����","count"],["���","sum"],["ƽ��ֵ","avg"],["���ֵ","max"],["��Сֵ","min"]]		
		});		
		
		var large_summary_panel = new Ext.FormPanel({  
	        labelAlign: 'left',
	        border : true,
	        frame : false,
	        labelWidth : 75,     
	        bodyStyle:'padding:5px',
	        bbar : [
	        	{xtype : 'tbspacer'},
	            {
	                xtype:'splitbutton',
	                text: '������ɸѡ',
	                iconCls:'sortandfilter',
	                menu: [
		                {text: '����',iconCls: 'small_sort',tooltip:'��ʾ����Ի���һ���Ը��ݶ��������������',handler:fun_summary_sort},
		                '-', 
		                {text: 'ɸѡ',tooltip:'��ʾɸѡ�Ի���,��ָ������Զ���ɸѡ',iconCls : 'small_filter',handler:fun_summary_filter},
		                {text: 'ȡ��ɸѡ',tooltip:'ȡ���������ɸѡ����������',iconCls : 'clear_filter',handler:fun_summary_filterclear}
	                ]
	            },	 
	            '-',
	            {xtype : 'CopyButton',text : '����',id : 'summary_copybutton',tooltip:'����',iconCls : 'copy_small'},
	            '-',
	        	{xtype : 'button',text : '����',id : 'large_summary_panel_export',tooltip:'����excel',iconCls : 'export_small',handler : fun_summary_export},        	
	            '->',
	            '-',
		        {xtype : 'button',text : 'ȷ��',tooltip:'ȷ��',id : 'large_summary_panel_submit',iconCls : 'accept',handler : fun_summary_submit},
		        {xtype : 'button',text : 'ȫ��ɾ��',tooltip:'ɾ��������ܽ��',id : 'large_summary_panel_clear',iconCls : 'select_clear',handler : fun_summary_removeall},
		        {xtype : 'button',text : 'ȡ��',tooltip:'�رշ������ҳ��',id : 'large_summary_panel_cancel',iconCls : 'deldt',handler:fun_summary_cancel}        
	        ],
	        items: [{
	        	xtype : 'combo',           
	            selectOnFocus:true,
	            store:large_summary_panel_groupname_store,
	            mode:'local',
	            triggerAction: 'all',
	            allowBlank:true,
	            displayField: 'dataname',
	            valueField : 'dataindex',
	            forceSelection: false,
	            resizable:true,
	            allowBlank : false,
	            blankText: '������Ϊ��',
	            emptyText:'ѡ������ֶ�',
	            fieldLabel: '�����ֶ�',
	            id: 'large_summary_panel_groupname',
	            anchor:'85%',
	            listeners : {
	            	scope:this,
	            	change:function(){
	    				summary_sortpanel_module_sql = ' '  
	    				summary_filterpanel_module_sql = ' '          		
	            	}     
	            }
	        }, {
	        	xtype : 'multiSelect',           
	            selectOnFocus:true,
	            store:large_summary_panel_groupvalue_store,
	            mode:'local',
	            triggerAction: 'all',
	            allowBlank:true,
	            displayField: 'valuename',
	            valueField : 'valueindex',
	            forceSelection: false,
	            resizable:true,
	            allowBlank : false,
	            blankText: '������Ϊ��',
	            emptyText:'ѡ������ֶ�',
	            fieldLabel: 'ѡ��������',
	            id: 'large_summary_panel_valuename',
	            anchor:'85%',
	            listeners : {
	            	scope:this,
	            	change:function(){
	    				summary_sortpanel_module_sql = ' '  
	    				summary_filterpanel_module_sql = ' '          		
	            	}     
	            }
	        },
			{
	        	xtype : 'combo',           
	            selectOnFocus:true,
	            store:large_summary_panel_grouptype_store,
	            mode:'local',
	            triggerAction: 'all',
	            allowBlank:true,
	            displayField: 'typename',
	            valueField : 'typeindex',
	            forceSelection: false,
	            resizable:true,
	            allowBlank : false,
	            blankText: '������Ϊ��',
	            emptyText:'���ܷ�ʽ',
	            fieldLabel: '���ܷ�ʽ',
	            id: 'large_summary_panel_type',
	            anchor:'85%',
	            listeners : {
	            	scope:this,
	            	change:function(){
	    				summary_sortpanel_module_sql = ' '  
	    				summary_filterpanel_module_sql = ' '          		
	            	}     
	            }
	        }]
		});	
	 	
		var large_summary_innerpanel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items:[
				{
						region : 'north',
						fill : true,
						border : false,
						height :115, 
			      		layout : 'fit',
			      		items:[large_summary_panel]
				},
				{
						region : 'center',
						fill : true,
						id:'dynamic_panel',
						border : false,
			      		layout : 'fit'
				}
				
			]		
		});
			
		var large_summary_panel = new Ext.Window({ 
		        title : '�������', 
		        width : 850,  
		        height: 450, 
		        resizable:true,
		        maximizable : true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_summary_innerpanel]  
		});				
			
	   /***************************
	     * ##������ܹ������������ʵ��
	     * 	@@large_summary_panel_sortwinpanel: windows����
	     *  @@large_summary_panel_sortpanel�� formpanel����
	   ****************************/
		var large_summary_panel_sortpanel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_sortpanel_grouptype_store  = new Ext.data.SimpleStore({
			fields: ['sortname','sortindex'],
			data : [["����","asc"],["����","desc"]]		
		});		
		
		var large_summary_panel_sortpanel = new Ext.FormPanel({  
	        labelAlign: 'top',
	        border : true,
	        frame : true,    
	        bodyStyle:'padding:5px',
	        buttonAlign: 'center',
	        items: [{
	        	xtype : 'combo',           
	            selectOnFocus:true,
	            store:large_summary_panel_sortpanel_groupname_store,
	            mode:'local',
	            triggerAction: 'all',
	            allowBlank:true,
	            displayField: 'dataname',
	            valueField : 'dataindex',
	            forceSelection: false,
	            resizable:true,
	            allowBlank : false,
	            blankText: '������Ϊ��',
	            emptyText:'ѡ�������ֶ�',
	            fieldLabel: '�����ֶ�',
	            id: 'large_summary_panel_sortpanel_groupname',
	            anchor:'95%',
	            listeners : {}
	        }, 
			{
	        	xtype : 'combo',           
	            selectOnFocus:true,
	            store:large_summary_panel_sortpanel_grouptype_store,
	            mode:'local',
	            triggerAction: 'all',
	            allowBlank:true,
	            displayField: 'sortname',
	            valueField : 'sortindex',
	            forceSelection: false,
	            resizable:true,
	            allowBlank : false,
	            blankText: '������Ϊ��',
	            emptyText:'����ʽ',
	            fieldLabel: '����ʽ',
	            id: 'large_summary_panel_sortpanel_type',
	            anchor:'95%',
	            listeners : {}
	        }],
	        buttons : [
	        	{text : 'ȷ��',tooltip:'ȷ������',id : 'large_summary_panel_sortpanel_submit',iconCls : 'accept',handler : fun_summary_sortpanel_submit},
		        {text : 'ȡ��',tooltip:'�رս���',id : 'large_summary_panel_sortpanel_cancel',iconCls : 'deldt',handler:fun_summary_sortpanel_cancel}  
	        ]
		});	
			
		var large_summary_panel_sortwinpanel = new Ext.Window({ 
		        title : '����', 
		        width : 250,  
		        height: 200, 
		        resizable:false,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_summary_panel_sortpanel]  
		});	
	
	   /***************************
	     * ##������ܹ�����ɸѡ����ʵ��
	     * 	@@large_summary_panel_filterwinpanel: windows����
	     *  @@large_summary_panel_filterpanel�� formpanel����
	   ****************************/
		var large_summary_panel_filterpanel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_filterpanel_groupmath_store  = new Ext.data.SimpleStore({
			fields: ['mathtype','mathid'],
			data : [["����",">"],["���ڵ���",">="],["����","="],['������','<>'],["С��","<"],["С�ڵ���","<="]]		
		});		
		
		var large_summary_panel_filterpanel = new Ext.FormPanel({  
	        border : true,
	        frame : true,    
	        bodyStyle:'padding:5px',
	        buttonAlign: 'center',
	        items: [
	        {
	        	layout:'column',
	        	items:[
	        	{
		        	columnWidth:.4,
		        	layout: 'form',
		        	labelAlign: 'top',
		        	items: [
						{
				        	xtype : 'combo',           
				            selectOnFocus:true,
				            store:large_summary_panel_filterpanel_groupname_store,
				            mode:'local',
				            triggerAction: 'all',
				            allowBlank:true,
				            displayField: 'dataname',
				            valueField : 'dataindex',
				            forceSelection: false,
				            resizable:true,
				            allowBlank : false,
				            blankText: '������Ϊ��',
				            emptyText:'ѡ��ɸѡ�ֶ�',
				            fieldLabel: 'ɸѡ�ֶ�1',
				            id: 'large_summary_panel_filterpanel_groupname1',
				            width : 120
		        		},     		
						{
				        	xtype : 'combo',           
				            selectOnFocus:true,
				            store:large_summary_panel_filterpanel_groupmath_store,
				            mode:'local',
				            triggerAction: 'all',
				            allowBlank:true,
				            displayField: 'mathtype',
				            valueField : 'mathid',
				            forceSelection: false,
				            resizable:true,
				            allowBlank : false,
				            blankText: '������Ϊ��',
				            emptyText:'��������',
				            fieldLabel: '��������1',
				            id: 'large_summary_panel_filterpanel_groupmath1',
				            width : 80
				        },
				        {
		                    xtype:'textfield',
		                    allowBlank : false,
		                    blankText: '������Ϊ��',		                    
			                emptyText:'��������',
		                    fieldLabel: 'ɸѡ����1',
		                    id: 'large_summary_panel_filterpanel_textfield1',
		                    width : 100	        	
				        }        		
	        		]
	        	},
	        	{
		        	columnWidth:.2,
		        	layout: 'form',
		        	labelAlign: 'top',
		        	style : 'margin-left:15px',
		        	items: [ 
		        		{xtype:'radio',boxLabel:'��',name:'fieldtype',id : 'state',inputValue:'and'},
		        		{xtype:'radio',boxLabel:'��',name:'fieldtype',inputValue:'or',checked: true}		        		       
			        ]
	        	},
	        	{
	        		columnWidth:.4,
	        		layout:'form',
	        		labelAlign: 'top',
	        		items:[
						{
				        	xtype : 'combo',           
				            selectOnFocus:true,
				            store:large_summary_panel_filterpanel_groupname_store,
				            mode:'local',
				            triggerAction: 'all',
				            allowBlank:true,
				            displayField: 'dataname',
				            valueField : 'dataindex',
				            forceSelection: false,
				            resizable:true,
				            allowBlank : false,
				            blankText: '������Ϊ��',
				            emptyText:'ѡ��ɸѡ�ֶ�',
				            fieldLabel: 'ɸѡ�ֶ�2',
				            id: 'large_summary_panel_filterpanel_groupname2',
				            width : 120
		        		},     		
						{
				        	xtype : 'combo',           
				            selectOnFocus:true,
				            store:large_summary_panel_filterpanel_groupmath_store,
				            mode:'local',
				            triggerAction: 'all',
				            allowBlank:true,
				            displayField: 'mathtype',
				            valueField : 'mathid',
				            forceSelection: false,
				            resizable:true,
				            allowBlank : false,
				            blankText: '������Ϊ��',
				            emptyText:'��������',
				            fieldLabel: '��������2',
				            id: 'large_summary_panel_filterpanel_groupmath2',
				            width : 80
				        },
				        {
		                    xtype:'textfield',	
		                    allowBlank : false,
		                    blankText: '������Ϊ��',
			                emptyText:'��������',
		                    fieldLabel: 'ɸѡ����2',
		                    id: 'large_summary_panel_filterpanel_textfield2',
		                    width : 100
				        }          		
	        		]
	        	}]
	        }],
	        buttons : [
	        	{text : 'ȷ��',tooltip:'ȷ��ɸѡ',id : 'large_summary_panel_filterpanel_submit',iconCls : 'accept',handler : fun_summary_filterpanel_submit},
		        {text : 'ȡ��',tooltip:'�ر�ҳ��',id : 'large_summary_panel_filterpanel_cancel',iconCls : 'deldt',handler:fun_summary_filterpanel_cancel}  
	        ]
		});	
		
		var large_summary_panel_filterwinpanel = new Ext.Window({ 
		        title : 'ɸѡ', 
		        width : 360,  
		        height: 230, 
		        resizable:false,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
				items  :[large_summary_panel_filterpanel]  
		});				
		
	   /***************************
	     * ## ����ͼ����ʵ��
	   ****************************/
		//var barchart_fb = new Ext.ux.ColorField({id:'barchart_fb',width:100,value: '#6d9eeb',msgTarget: 'qtip'});    
		var barchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'barchart_tbar'
		}); 
		barchart_tbar.add(
		    //'��ɫ:',barchart_fb,
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'barchart_label',
				checked:false
			},
		   '-',
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'barchart_summit',handler : barchart_summit}
		);  	
		
		var barchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlebarchart_accordingpanel',
		        bbar : barchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'��ά�����α�',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlebarchart_panel',
			            iconCls:'chart_bar_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 0.0;
			            		if(drillleastlevel == 'china')
			            			render_singlebarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else 
			            			render_singlebarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlebarchart_panel').remove(Ext.getCmp('singlebarchart_form'));
			            		Ext.getCmp('singlebarchart_panel').add(Ext.getCmp('singlebarchart_form'));
								Ext.getCmp('singlebarchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 0.0;
			            		if(drillleastlevel == 'china')
			            			render_singlebarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else 
			            			render_singlebarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            			
			            		//render_singlebarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlebarchart_panel').add(Ext.getCmp('singlebarchart_form'));
								Ext.getCmp('singlebarchart_panel').doLayout(); 		            					            		
			            	}
			            }
			        },
					{
			            title:'��ά�����α�',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multibarchart_panel',
			            iconCls:'chart_bar_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 0.1;	
			            		if(drillleastlevel == 'china')
			            			render_multibarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multibarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('multibarchart_panel').remove(Ext.getCmp('multibarchart_form'));
			            		Ext.getCmp('multibarchart_panel').add(Ext.getCmp('multibarchart_form'));
								Ext.getCmp('multibarchart_panel').doLayout(); 
								
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'barchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var barchart_winpanel = new Ext.Window({ 
		        title : '����ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [barchart_inner_panel]
			    //items:[{html: '<iframe id="content-iframe" frameborder="no" style="width:100%;height:100%" src="Disease/chart/barchart.jsp" scrolling="yes"></iframe>'}] 
		});
	
		
	   /***************************
	     * ## ����ͼ����ʵ��
	   ****************************/     
		var columnchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'columnchart_tbar'
		}); 
		columnchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'columnchart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'columnchart_summit',handler : columnchart_summit}
		);  	
		
		var columnchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlecolumnchart_accordingpanel',
		        bbar : columnchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'��ά������ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlecolumnchart_panel',
			            iconCls:'chart_column_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 1.0;
			            		if(drillleastlevel == 'china')
			            			render_singlecolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlecolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            			
			            		Ext.getCmp('singlecolumnchart_panel').remove(Ext.getCmp('singlecolumnchart_form'));
			            		Ext.getCmp('singlecolumnchart_panel').add(Ext.getCmp('singlecolumnchart_form'));
								Ext.getCmp('singlecolumnchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 1.0;
			            		if(drillleastlevel == 'china')
			            			render_singlecolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlecolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            			
			            		//render_singlecolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlecolumnchart_panel').add(Ext.getCmp('singlecolumnchart_form'));
								Ext.getCmp('singlecolumnchart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        },
					{
			            title:'��ά������ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multicolumnchart_panel',
			            iconCls:'chart_column_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 1.1;	
			            		if(drillleastlevel == 'china')
			            			render_multicolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multicolumnchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('multicolumnchart_panel').remove(Ext.getCmp('multicolumnchart_form'));
			            		Ext.getCmp('multicolumnchart_panel').add(Ext.getCmp('multicolumnchart_form'));
								Ext.getCmp('multicolumnchart_panel').doLayout(); 
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'columnchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var columnchart_winpanel = new Ext.Window({ 
		        title : '����ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [columnchart_inner_panel] 
		});
	
	   /***************************
	     * ## ����ͼ����ʵ��
	   ****************************/     
		var linechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'linechart_tbar'
		}); 
		linechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'linechart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'linechart_summit',handler : linechart_summit}
		);  	
		
		var linechart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlelinechart_accordingpanel',
		        bbar : linechart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'��ά������ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlelinechart_panel',
			            iconCls:'chart_line_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 2.0;
			            		if(drillleastlevel == 'china')
			            			render_singlelinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlelinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singlelinechart_panel').remove(Ext.getCmp('singlelinechart_form'));
			            		Ext.getCmp('singlelinechart_panel').add(Ext.getCmp('singlelinechart_form'));
								Ext.getCmp('singlelinechart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 2.0;
			            		if(drillleastlevel == 'china')
			            			render_singlelinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlelinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);			            		
			            		//render_singlelinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlelinechart_panel').add(Ext.getCmp('singlelinechart_form'));
								Ext.getCmp('singlelinechart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        },
					{
			            title:'��ά������ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multilinechart_panel',
			            iconCls:'chart_line_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 2.1;	
			            		if(drillleastlevel == 'china')
			            			render_multilinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multilinechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            			
			            		Ext.getCmp('multilinechart_panel').remove(Ext.getCmp('multilinechart_form'));
			            		Ext.getCmp('multilinechart_panel').add(Ext.getCmp('multilinechart_form'));
								Ext.getCmp('multilinechart_panel').doLayout(); 
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'linechartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var linechart_winpanel = new Ext.Window({ 
		        title : '����ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [linechart_inner_panel]
		});	
		
	   /***************************
	     * ## ���ͼ����ʵ��
	   ****************************/     
		var areachart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'areachart_tbar'
		}); 
		areachart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'areachart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'areachart_summit',handler : areachart_summit}
		);  	
		
		var areachart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singleareachart_accordingpanel',
		        bbar : areachart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'��ά�����ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singleareachart_panel',
			            iconCls:'area_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 3.0;
			            		if(drillleastlevel == 'china')
			            			render_singleareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singleareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singleareachart_panel').remove(Ext.getCmp('singleareachart_form'));
			            		Ext.getCmp('singleareachart_panel').add(Ext.getCmp('singleareachart_form'));
								Ext.getCmp('singleareachart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 3.0;
			            		if(drillleastlevel == 'china')
			            			render_singleareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singleareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_singleareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singleareachart_panel').add(Ext.getCmp('singleareachart_form'));
								Ext.getCmp('singleareachart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        },
					{
			            title:'��ά�����ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multiareachart_panel',
			            iconCls:'area_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 3.1;
			            		if(drillleastlevel == 'china')
			            			render_multiareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multiareachart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('multiareachart_panel').remove(Ext.getCmp('multiareachart_form'));
			            		Ext.getCmp('multiareachart_panel').add(Ext.getCmp('multiareachart_form'));
								Ext.getCmp('multiareachart_panel').doLayout(); 
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'areachartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var areachart_winpanel = new Ext.Window({ 
		        title : '���ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [areachart_inner_panel]
		});	
		
	  /***************************
	     * ## ��ͼ����ʵ��
	   ****************************/     
		var piechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'piechart_tbar'
		}); 
		piechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'piechart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'piechart_summit',handler : piechart_summit}
		);  	
		
		var piechart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlepiechart_accordingpanel',
		        bbar : piechart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'��ά�ȱ�ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlepiechart_panel',
			            iconCls:'pie_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 4.0;
			            		if(drillleastlevel == 'china')
			            			render_singlepiechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlepiechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            			
			            		Ext.getCmp('singlepiechart_panel').remove(Ext.getCmp('singlepiechart_form'));
			            		Ext.getCmp('singlepiechart_panel').add(Ext.getCmp('singlepiechart_form'));
								Ext.getCmp('singlepiechart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 4.0;
			            		if(drillleastlevel == 'china')
			            			render_singlepiechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlepiechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            						            		
			            		//render_singlepiechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlepiechart_panel').add(Ext.getCmp('singlepiechart_form'));
								Ext.getCmp('singlepiechart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'piechartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var piechart_winpanel = new Ext.Window({ 
		        title : '��ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [piechart_inner_panel]
		});
		
	   /***************************
	     * ## ɢ��ͼ����ʵ��
	   ****************************/     
		var scatterchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'scatterchart_tbar'
		}); 
		scatterchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾ�ع���', 
			    style: 'margin-top:-8px;',
				id: 'scatterchart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'scatterchart_summit',handler : scatterchart_summit}
		);  	
		
		var scatterchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlescatterchart_accordingpanel',
		        bbar : scatterchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'ɢ��ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlescatterchart_panel',
			            iconCls:'scatter_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 5.0;
			            		if(drillleastlevel == 'china')
			            			render_scatterchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_scatterchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singlescatterchart_panel').remove(Ext.getCmp('singlescatterchart_form'));
			            		Ext.getCmp('singlescatterchart_panel').add(Ext.getCmp('singlescatterchart_form'));
								Ext.getCmp('singlescatterchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 5.0;
			            		if(drillleastlevel == 'china')
			            			render_scatterchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_scatterchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_scatterchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlescatterchart_panel').add(Ext.getCmp('singlescatterchart_form'));
								Ext.getCmp('singlescatterchart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'scatterchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var scatterchart_winpanel = new Ext.Window({ 
		        title : 'ɢ��ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [scatterchart_inner_panel]
		});	
		
	  /***************************
	     * ## Բ��ͼ����ʵ��
	   ****************************/     
		var doughnutchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'doughnutchart_tbar'
		}); 
		doughnutchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'doughnutchart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'doughnutchart_summit',handler : doughnutchart_summit}
		);  	
		
		var doughnutchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singledoughnutchart_accordingpanel',
		        bbar : doughnutchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'Բ��ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singledoughnutchart_panel',
			            iconCls:'round_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 6.0;
			            		if(drillleastlevel == 'china')
			            			render_singledoughnutchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singledoughnutchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singledoughnutchart_panel').remove(Ext.getCmp('singledoughnutchart_form'));
			            		Ext.getCmp('singledoughnutchart_panel').add(Ext.getCmp('singledoughnutchart_form'));
								Ext.getCmp('singledoughnutchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 6.0;
			            		if(drillleastlevel == 'china')
			            			render_singledoughnutchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singledoughnutchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_singledoughnutchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singledoughnutchart_panel').add(Ext.getCmp('singledoughnutchart_form'));
								Ext.getCmp('singledoughnutchart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'doughnutchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var doughnutchart_winpanel = new Ext.Window({ 
		        title : 'Բ��ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [doughnutchart_inner_panel]
		});
		
	   /***************************
	     * ## ����ͼ����ʵ��
	   ****************************/     
		var bubblechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'bubblechart_tbar'
		}); 
		bubblechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾ����', 
			    style: 'margin-top:-8px;',
				id: 'bubblechart_quadrant',
				checked:false
			},
			'-',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'bubblechart_label',
				checked:false
			},
		   '-',	
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'bubblechart_summit',handler : bubblechart_summit}
		);  	
		
		var bubblechart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlebubblechart_accordingpanel',
		        bbar : bubblechart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'����ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlebubblechart_panel',
			            iconCls:'bubble_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 7.0;
			            		if(drillleastlevel == 'china')
			            			render_singlebubblechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlebubblechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singlebubblechart_panel').remove(Ext.getCmp('singlebubblechart_form'));
			            		Ext.getCmp('singlebubblechart_panel').add(Ext.getCmp('singlebubblechart_form'));
								Ext.getCmp('singlebubblechart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 7.0;
			            		if(drillleastlevel == 'china')
			            			render_singlebubblechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlebubblechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_singlebubblechart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlebubblechart_panel').add(Ext.getCmp('singlebubblechart_form'));
								Ext.getCmp('singlebubblechart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'bubblechartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var bubblechart_winpanel = new Ext.Window({ 
		        title : '����ͼ', 
		        width : 750,  
		        height: 420, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [bubblechart_inner_panel]
		});	
		
	  /***************************
	     * ## �״�ͼ����ʵ��
	   ****************************/ 
		var radarchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'radarchart_tbar'
		}); 
		radarchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '��ʾֵ', 
			    style: 'margin-top:-8px;',
				id: 'radarchart_label',
				checked:false
			},
		   '-',
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'radarchart_summit',handler : radarchart_summit}
		);  	
		
		var radarchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 215,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singleradarchart_accordingpanel',
		        bbar : radarchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'�״�ͼ',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multiradarchart_panel',
			            iconCls:'radar_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 8.0;	
			            		if(drillleastlevel == 'china')
			            			render_multiradarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multiradarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('multiradarchart_panel').remove(Ext.getCmp('multiradarchart_form'));
			            		Ext.getCmp('multiradarchart_panel').add(Ext.getCmp('multiradarchart_form'));
								Ext.getCmp('multiradarchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 8.0;
			            		if(drillleastlevel == 'china')
			            			render_multiradarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multiradarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_multiradarchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('multiradarchart_panel').add(Ext.getCmp('multiradarchart_form'));
								Ext.getCmp('multiradarchart_panel').doLayout(); 		            				            		
			            	}		            	
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'radarchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var radarchart_winpanel = new Ext.Window({ 
		        title : '�״�ͼ', 
		        width : 750,  
		        height: 400, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plugins: new Ext.ux.WindowAlwaysOnTop(),
		        plain : true, 
		        defaults : {              
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [radarchart_inner_panel]
		});	
		
	  /***************************
	     * ## ���ͼ����ʵ��
	   ****************************/ 
		var combinedchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'combinedchart_tbar'
		}); 
		combinedchart_tbar.add(
			'->',
		   '-',
	       {text : '����ͼ��',tooltip : '����ͼ��',iconCls : 'chartshow',id : 'combinedchart_summit',handler : combinedchart_summit}
		);  	
		
		var combinedchart_inner_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				region : 'west',
				width : 235,
				fill : true,
	      		layout : 'accordion',
	      		split : true,
		        layoutConfig:{
		            animate:true
		        },   
		        id : 'singlecombinedchart_accordingpanel',
		        bbar : combinedchart_tbar,
	      		collapseMode: 'mini',
				items :[
					{
			            title:'���ͼ(ֻ������)',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'singlecombinedchart_panel',
			            iconCls:'combined_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 9.0;
			            		if(drillleastlevel == 'china')
			            			render_singlecombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlecombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('singlecombinedchart_panel').remove(Ext.getCmp('singlecombinedchart_form'));
			            		Ext.getCmp('singlecombinedchart_panel').add(Ext.getCmp('singlecombinedchart_form'));
								Ext.getCmp('singlecombinedchart_panel').doLayout(); 
			            	},
			            	'afterRender' : function(){
			            		activeaccording_id = 9.0;
			            		if(drillleastlevel == 'china')
			            			render_singlecombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_singlecombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		
			            		//render_singlecombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);
			            		Ext.getCmp('singlecombinedchart_panel').add(Ext.getCmp('singlecombinedchart_form'));
								Ext.getCmp('singlecombinedchart_panel').doLayout(); 		            		
			            		
			            	}
			            }
			        },
					{
			            title:'���ͼ(��������)',
			            autoScroll:true,
			            border:false,
			            forceFit : true,
			            id : 'multicombinedchart_panel',
			            iconCls:'combined_chart_edit',
			            listeners : {
			            	'expand' : function(p){
			            		activeaccording_id = 9.1;
			            		if(drillleastlevel == 'china')
			            			render_multicombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point);
			            		else
			            			render_multicombinedchart(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1);

			            		Ext.getCmp('multicombinedchart_panel').remove(Ext.getCmp('multicombinedchart_form'));
			            		Ext.getCmp('multicombinedchart_panel').add(Ext.getCmp('multicombinedchart_form'));
								Ext.getCmp('multicombinedchart_panel').doLayout(); 
			            	}
			            }
			        }		        
				]
			},
			{
				region : 'center',
				fill : true,
	      		layout : 'fit',      		
				html : "<div id = 'combinedchartContainer' style='height:100%;width:100%;padding-right:5px'></div>"
			}
			]
		});	
		
		var combinedchart_winpanel = new Ext.Window({ 
		        title : '���ͼ', 
		        width : 770,  
		        height: 470, 
		        resizable:true,
		        maximizable :true,
		        closeAction: 'hide',
		        modal : true,
		        plain : true, 
		        defaults : {       	       
					border : false  
				}, 	
				fill : true,
	      		layout : 'fit',
	      		items : [combinedchart_inner_panel]
		});	
		
	   /***************************
	     * ## ���岼��
	   ****************************/   
	   var tbar=new Ext.Toolbar({
	       plain:true,
	       id:'tbar'
	   }); 
	   tbar.add(       	   
		   '-',{xtype:'tbspacer'},{xtype:'tbspacer'},
		   {xtype : 'textfield',emptyText:"�ؼ��ֲ��ұ�",id :'Search_Transfer',width : 140,
		   		listeners: {
					specialkey:function(textfield,e){
						if (e.getKey() == e.ENTER) {
							var params = replaceAll(textfield.getValue()," ","");
							if(params.length>0)
								ReloadGridStore(replaceAll(textfield.getValue()," ",""));
						}
					},
					blur : function(textfield){},
			        render : updateTip,  
			        change : updateTip  				
		   		}
		   },
		   {text:'����',iconCls:'search',
		   	handler:function(){
   				var params = replaceAll(Ext.getCmp('Search_Transfer').getValue()," ","");
				if(params.length>0)
					ReloadGridStore(replaceAll(Ext.getCmp('Search_Transfer').getValue()," ",""));
			}}
		);
	
	    var Viewport = new Ext.Viewport({
	      	layout : 'border',      	
	      	items : [
	      	  {
	      	  	region : 'west',
	      	  	width : 300,
	      	  	title : '���е����ݿ�',
	      	  	split : true,
	      	  	collapsible:true,
	      	  	collapseMode: 'mini',
	      	  	//containerScroll: true,
	      	  	//autoScroll:true, 	
	      	  	tbar: tbar,
	      	  	margins:'0 0 3 3',
	            cmargins: '0 3 3 3',
	            layoutConfig:{
		            animate:true,
		            fill:true},
				layout : 'fit',		            
	      	    items : [firstGrid]
	      	  },
	      	  {				
				region : 'center',
				margins:'0 3 3 0',
	            cmargins: '0 3 3 3',
				layout:'fit',
				items : [
				{
					layout : 'border',
					border : false,
					items : [
					{
						region : 'north',
						fill : true,
						height : 200,
			      		layout : 'fit',	
			      		split: true,
			      		border : true,
						bbar : [
						    '-',
						    {xtype : 'button',text : '����',id : 'cdcombination_sort',tooltip:'����',iconCls : 'small_sort',handler : fun_cdc_sort},
						    ' ',
						    {xtype : 'button',text : 'ɸѡ',id : 'cdcombination_filter',tooltip:'ɸѡ',iconCls : 'small_filter',handler : fun_cdc_filter},
							'-',
							{xtype : 'button',text : 'ȡ��ɸѡ',id : 'cdcombination_clearfilter',tooltip:'ȡ��ɸѡ����������',iconCls : 'clear_filter',handler : fun_cdc_clearfilter},
							'-',
							{xtype : 'button',text : '�������',id : 'cdcombination_summary',tooltip:'���ܶ�������ָ����',iconCls : 'data_summary_small',handler : fun_cdc_summary},						
							'-',
						    {xtype : 'button',text : '������',id : 'cdcombination_newcolumn',tooltip:'�Զ��幹��������',iconCls : 'add_column_small',handler : fun_cdc_newcolumn},					    
						    '-',            
				            {
				                xtype:'splitbutton',
				                text: 'ͼ��',
				                iconCls:'other_chart',
				                menu: [ 
					            	{text: '����ͼ',iconCls: 'bar_chart',handler : fun_barchart},
					            	{text: '����ͼ',iconCls: 'line_chart',handler : fun_linechart},
					            	{text: '��ͼ',iconCls: 'pie_chart',handler : fun_piechart},
					            	{text: '����ͼ',iconCls: 'column_chart',handler : fun_columnchart},
					            	{text: '���ͼ',iconCls: 'area_chart',handler : fun_areachart},
					            	{text: 'ɢ��ͼ',iconCls: 'scatter_chart',handler : fun_scatterchart},
					            	{text: '���ͼ',iconCls: 'combined_chart',handler : fun_combinedchart},
					            	{text: '�״�ͼ',iconCls: 'radar_chart',handler : fun_radarchart},
					            	{text: '����ͼ',iconCls: 'bubble_chart',handler : fun_bubblechart},
					            	{text: 'Բ��ͼ',iconCls: 'round_chart',handler : fun_doughnutchart}
				                ]
				            },
				            '-',					    
						    {xtype : 'button',text : '����',id : 'cdcombination_export',tooltip:'����excel',iconCls : 'export_small',handler : fun_cdc_export},
						    '-',
							{xtype : 'CopyButton',text : '����',id : 'cdcombination_copybutton',tooltip:'����',iconCls : 'copy_small'},
							'-',
							'->','-',
							{xtype : 'button',text : 'ȷ��',tooltip:'�����ϲ����ݼ�',iconCls :'accept',id : 'cdcombination_submit',handler:fun_cdc_submit},
					        {xtype : 'button',text : 'ȫ��ɾ��',tooltip:'ɾ���ϲ����ݼ�',id : 'cdcombination_clear',iconCls : 'select_clear',handler : fun_cdc_removeall}						
			
						],		      		
						items : [
						{
							layout : {
								type : 'border',
								align: 'stretch'						
							},
							border : false,
							items : [
							{
								region : 'west',
								width: 300,
								fill : true,
					      		layout : 'fit',	
					      		split: true,        									      	
					      		items:[secondGrid]					
							},
							{
								region : 'center',
								//flex : 2.5,
								fill : true,
					      		layout : 'fit',			      		
					      		items:[thirdGrid]	
							}]
						}]		      		
					},
					{
						region : 'center',
						id : 'dynamic_gridpanel',
						fill : true,
			      		layout : 'fit'			      		
			      		//items:[show_filterresult_panel]	
					}]
				}]
			  }]
	      });  
	                  
	   /***************************
	     * ## �������ݿ���������ݿ�֮�����϶�
	   ****************************/
	    var firstGridDropTargetEl =  firstGrid.getView().scroller.dom;
	    var firstGridDropTarget = new Ext.dd.DropTarget(firstGridDropTargetEl, {
	        ddGroup    : 'firstGridDDGroup',
	        notifyDrop : function(ddSource, e, data){
	        	var records =  ddSource.dragData.selections;
	        	if(records.length == 1){
	                if(records[0].get('name').indexOf('-')>=0){
	                	Ext.each(records, ddSource.grid.store.remove, ddSource.grid.store);
	                	//firstGrid.store.add(records);
	                	firstGrid.store.sort('sortflag', 'ASC');
	                }	                
					var p = thirdGridStore.getCount(); 
		    		for(var i = 0;i<p;i++){
		    			if(thirdGridStore.data.items[i].data.name == records[0].get('name')){
		    				thirdGridStore.removeAt(i);
		    				break;
		    			}
		    		}  
	        	}
	        	else{
		        	Ext.each(records, ddSource.grid.store.remove, ddSource.grid.store);
		        	//firstGrid.store.add(records);
		        	firstGrid.store.sort('sortflag', 'ASC');	        	
	        		for(var i = 0;i<records.length;i++){   
						var p = thirdGridStore.getCount(); 
			    		for(var j=0; j<p; j++){
			    			if(thirdGridStore.data.items[j].data.name == records[i].get('name')){
			    				thirdGridStore.removeAt(j);
			    				break;
			    			}
			    		}         			
	        		}            			        
	        	}
		    	cdcombination_sql = ' ';
				if (Ext.getCmp("CDCombination_gridpanel_store") != undefined) {
				    Ext.getCmp("CDCombination_gridpanel_store").remove();
				}
				if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
				    Ext.getCmp("CDCombination_gridpanel").destroy();
				}
				if (Ext.getCmp("CDCombination_gridpanel_PagingToolbar") != undefined) {
				    Ext.getCmp("CDCombination_gridpanel_PagingToolbar").destroy();
				}
				if (Ext.getCmp("CDCombination_gridpanel_rightMenu") != undefined) {
				    Ext.getCmp("CDCombination_gridpanel_rightMenu").destroy();
				}
    			sort_module_sql = ' ';
    			filter_module_sql = ' '; 
    			newcolumn_module_sql = ' ';
				cdcombination_sql = ' ';	
				large_sort_panel_store.removeAll();
				large_filter_panel_gridpanel_store.removeAll();
				large_filter_panel_onlyread_gridpanel_store.removeAll();
				large_newcolumn_panel_onlyread_gridpanel_store.removeAll();	
					
	        }
	    });
	    var secondGridDropTargetEl = secondGrid.getView().scroller.dom;
	    var secondGridDropTarget = new Ext.dd.DropTarget(secondGridDropTargetEl, {
	            ddGroup    : 'secondGridDDGroup',
	            notifyDrop : function(ddSource, e, data){
	            	var records =  ddSource.dragData.selections; 
	            	if(records.length == 1){
						if(records[0].get('name').indexOf('-')>=0){ 
		                	//Ext.each(records, ddSource.grid.store.remove, ddSource.grid.store);
							if(secondGrid.store.getCount()==0){
								secondGrid.store.add(records);
							}
							else{
								var index = 0;
								secondGrid.store.each(function(record) {
									if(record.get('dbname') == records[0].get("dbname")){
										index = 1;
										return false;
									}
									else index = 0;
								});
							}
							if(index == 0){
								secondGrid.store.add(records);
		                		secondGrid.store.sort('sortflag', 'ASC');
							}
						}
	            	}
	            	else{
	            		for(var i = 0;i<records.length;i++){
							if(records[i].get('name').indexOf('-')>=0){ 
			                	//Ext.each(records[i], ddSource.grid.store.remove, ddSource.grid.store);
								if(secondGrid.store.getCount()==0){
									secondGrid.store.add(records[i]);
								}
								else{
									var index = 0;
									secondGrid.store.each(function(record) {
										if(record.get('dbname') == records[i].get("dbname")){
											index = 1;
											return false;
										}
										else index = 0;
									});
								}
								if(index == 0){
									secondGrid.store.add(records[i]);
			                		secondGrid.store.sort('sortflag', 'ASC');
								}                								   
							}            			
	            		}            		
	            	}
	            }/*,
	            notifyEnter : function(ddSource, e, data) {},
	            notifyOver : function(ddSource, e, data) {}	*/							
	    }); 
	       
	   /***************************
	     * ## ��ҳ�����л�������
	     * 	 @@fun_dbcolumnselected: ѡ�����ݱ������
	     * 	 @@fun_cdc_sort : ��̬����gridpanel������ť
	     *   	$$fun_sort_cancel: ����ģ����ȡ����ť
	     *   	$$fun_sort_add: ����ģ���¼���������ť
	     *   	$$fun_sort_del: ����ģ����ɾ��������ť
	     *   	$$fun_sort_moveup: ����ģ�������ư�ť
	     *   	$$fun_sort_movedown: ����ģ�������ư�ť
	     *   	$$fun_sort_submit: ����ģ�����ύ��ť
	     *   @@fun_cdc_filter: ��̬����gridpanel��ɸѡ��ť
	     *   	$$fun_filter_clear: ɸѡģ������հ�ť
	     *   	$$fun_filter_remove: ɸѡģ����ɾ����ť
	     *   	$$fun_filter_submit: ɸѡģ����ȷ����ť 
	     *   @@fun_cdc_clearfilter: ��̬����gridpanel��ȡ��ɸѡ��ť
	     *   @@fun_cdc_newcolumn: ��̬����gridpanel���Զ����а�ť
	     *   	$$fun_newcolumn_close: ������ģ���¹رհ�ť
	     *   	$$fun_newcolumn_submit: ������ģ����ȷ����ť
	     *   	$$fun_newcolumn_add: ������ģ����������ť  
	     *   	$$fun_newcolumn_delete: ������ģ����ɾ����ť 
	     *   @@fun_cdc_summary: �����������ܰ�ť
	     *      $$fun_summary_sort: �������ģ������ť
	     *      	&&fun_summary_sortpanel_cancel: �������ģ������ť�µ�ȡ����ť
	     *          &&fun_summary_sortpanel_submit: �������ģ������ť�µ�ȷ����ť
	     *      $$fun_summary_filter: �������ģ��ɸѡ��ť
	     *      	&&fun_summary_filterpanel_cancel: �������ģ��ɸѡ��ť�µ�ȡ����ť
	     *          &&fun_summary_filterpanel_submit: �������ģ��ɸѡ��ť�µ�ȷ����ť 
	     *      $$fun_summary_filterclear: �������ģ��ȡ��ɸѡ��ť
	     *      $$fun_summary_newcolumn: �������ģ�������а�ť
	     *      $$fun_summary_export: �������ģ�鵼����ť
	     *   	$$fun_summary_cancel: �������ģ����ȡ����ť 
	     *      $$fun_summary_submit: �������ģ����ȷ����ť 
	     *      $$fun_summary_removeall: �������ģ����ȫ��ɾ����ť 
	     *      $$Create_SummaryGridPanel_Remote(_database,_jsonmsg,_pageSize,_sql): ���ܺ�������̬����gridpanel
	     *   @@fun_cdc_export: ��̬����gridpanel�ĵ�����ť
	     * 	 @@fun_cdc_submit: ��̬����gridpanel���ύ��ť
	     * 	 @@fun_cdc_removeall: ��̬����gridpanel��ȫ��ɾ����ť
	     *   @@Create_GridPanel_Remote(_database,_jsonmsg,_pageSize,_sql): ���ܺ�������̬����gridpanel
	     *   @@ReloadGridStore(textvalue): ���ģ��ɸѡ
	     * ## grid���Ҽ�ʵ��copy+paste
	     *   @@fun_cdcombination_cell_copy_nav:����cell
	     * 		$$fun_cell_copy(_grid,_buttonid) 
	     *   @@fun_cdcombination_row_copy_nav����row
	     *  	$$fun_row_copy(_grid,_buttonid)
	     *   @@fun_cdcombination_row_copy_header_nav���ƴ���ͷ��row
	     *  	$$fun_row_copy_header(_grid,_buttonid)
	     * ## ��ҳ������ͼ����
	     *   @@fun_barchart: ����������ͼ��ť
	     *   	$$barchart_summit: ����ͼ�ύ��ť
	     *      $$fun_winpanel_resize: ʹ��echarts��ʱ���á���Ҫ��
	     *   @@fun_columnchart: ����������ͼ��ť
	     *   	$$columnchart_summit: ����ͼ�ύ��ť
	     *   @@fun_linechart: ����������ͼ��ť
	     *   	$$linechart_summit: ����ͼ�ύ��ť
	     *   @@fun_areachart: ���������ͼ��ť
	     *   	$$areachart_summit: ���ͼ�ύ��ť
	     *   @@fun_piechart: �������ͼ��ť
	     *   	$$piechart_summit: ��ͼ�ύ��ť
	     *   @@fun_scatterchart: ������ɢ��ͼ��ť
	     *   	$$scatterchart_summit: ɢ��ͼ�ύ��ť
	     *   @@fun_doughnutchart: ������Բ��ͼ��ť
	     *   	$$doughnutchart_summit: Բ��ͼ�ύ��ť
	     *   @@fun_bubblechart: ����������ͼ��ť
	     *   	$$bubblechart_summit: ����ͼ�ύ��ť
	     *   @@fun_radarchart: �������״�ͼ��ť
	     *   	$$radarchart_summit: �״�ͼ�ύ��ť
	     *   @@fun_combinedchart: ��������ͼ��ť
	     *   	$$combinedchart_summit: ���ͼ�ύ��ť
	   ****************************/      
	    function fun_dbcolumnselected(){
	    	var store_count = dbcolumnselection_gridstore.getCount();
	    	var p = 0;
	    	var field_array = [],name_array = [];
	    	for(var i=0;i<store_count;i++){
				if(dbcolumnselection_gridstore.data.items[i].data.isselected){
					p = p + 1;	
					field_array.push(dbcolumnselection_gridstore.data.items[i].data.field);
					name_array.push(dbcolumnselection_gridstore.data.items[i].data.name);
				}			
	    	}
	    	if(p == 0){
	    		Ext.Msg.alert('��ʾ','û��ѡ����!');
	    	}
	    	else{
				var p = thirdGridStore.getCount(); 
	    		for(var i = 0;i<p;i++){
	    			if(thirdGridStore.data.items[i].data.name == tablename){
	    				thirdGridStore.removeAt(i);
	    				break;
	    			}
	    		}    		    	
				var mid_str="";
				var name_str="",field_str="";
				for(var i=0; i<name_array.length;i++){
					name_str = name_str + "+" + name_array[i];
					field_str = field_str + "+" + field_array[i];		
				}
				name_str = trim(name_str.substring(1,name_str.length));
				field_str = trim(field_str.substring(1,field_str.length));					
					
		       	var row = new Ext.data.Record({ 
		       	   	name : tablename,  //Ĭ����and
		       	   	dimension : dimension,
		           	field : name_str,	
		           	dataindex : field_str,
		           	sortflag : tablesortflag,
		           	dbname : dbname
		       	});	  
		       	var i = thirdGridStore.getCount();
		       	thirdGridStore.insert(i,row);
		       	thirdGridStore.sort('sortflag', 'ASC');
		       	thirdGridStore.commitChanges();
				dbcolumnselection_win.hide();		
	    	}
	    }
	    
	    function fun_cdc_sort(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {		
		    	var data = fun_combox_listname(Ext.getCmp("CDCombination_gridpanel"));
		    	editorfield_combox_store.loadData(eval(data));
		    	large_sort_win.show();		
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�����!');
			}
	   	}
	   	
		function fun_sort_cancel(){
		    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ�����������?',callback);
		    function callback(id){
		   		if(id == 'yes'){
				    var i = large_sort_panel_store.getCount();
				    if (i>0){
						large_sort_panel_store.removeAll();
						large_sort_panel_store.commitChanges();
				    }
				    sort_module_sql = ' ';
				    large_sort_win.hide();
		   		}
		    }
		}	
		
		function fun_sort_add(){
			large_sort_panel_store.commitChanges();
			var i = large_sort_panel_store.getCount();	
			var select_model =large_sort_panel.getSelectionModel();
			if(i == 0){
		       var row = new Ext.data.Record({ 
		       	   default_id : '��Ҫ�ؼ���',
		           find_field:'���',	         
		           Order_type:'����'           
		       });
			}else{
		       var row = new Ext.data.Record({ 
		       	   default_id : '��Ҫ�ؼ���',
		           find_field:'���',          
		           Order_type:'����'       	     
		       });		
			}		
			var selected_rows = select_model.getCount();
			if(selected_rows == 0){
		       large_sort_panel.stopEditing();        
		       large_sort_panel_store.insert(i,row);  //�ڵ�һ�в�����һ�� ����ĵ��ö�����store  
		       large_sort_panel.startEditing(0,1);   //����һ�п�ʼ�༭
			}else{
				var seletedGrid = select_model.getSelected();
				var rowid = large_sort_panel_store.indexOf(seletedGrid)+1;
		        large_sort_panel.stopEditing();        
		        large_sort_panel_store.insert(rowid,row);  //�ڵ�һ�в�����һ�� ����ĵ��ö�����store  
		        large_sort_panel.startEditing(0,1);   //����һ�п�ʼ�༭		
			}      
			large_sort_panel_store.commitChanges();
		}
		
		function fun_sort_del(){
			large_sort_panel_store.commitChanges();		
			var store_count = large_sort_panel_store.getCount();
			var select_model =large_sort_panel.getSelectionModel();
			var selected_rows = select_model.getCount();
			if(selected_rows == 0){
				Ext.Msg.alert('����','��ѡ��Ҫɾ������������!');
			}
			else if(selected_rows == 1){	
			    var single_var = select_model.getSelected();
				var rowid = large_sort_panel_store.indexOf(single_var);
				if(store_count >1){
					if(rowid == 0){
				   		large_sort_panel_store.getAt(1).set('default_id','��Ҫ�ؼ���');
					}			
					large_sort_panel_store.remove(single_var);
				}
				else{
					large_sort_panel_store.remove(single_var);
				}
			}
			else if(selected_rows>1 && selected_rows != store_count){
				var single_vars = select_model.getSelections();
				if(single_vars[0].get('default_id')=='��Ҫ�ؼ���'){
					large_sort_panel_store.remove(single_vars);
					large_sort_panel_store.commitChanges();
					large_sort_panel_store.getAt(0).set('default_id','��Ҫ�ؼ���');
				}else{
					large_sort_panel_store.remove(single_vars);
				}		
			}else{
				large_sort_panel_store.remove(select_model.getSelections());
			}
			large_sort_panel_store.commitChanges();
		}	
	
		function fun_sort_moveup(){	
		    if(large_sort_panel_store.getCount() > 1){			
				var select_model =large_sort_panel.getSelectionModel();
			    var selected_rows = select_model.getCount();
			    if(selected_rows<=0){;}
			    else if(selected_rows>1){
			    	Ext.Msg.alert('��ʾ','һ��ֻ��ѡ��һ��!');
			    }
			    else{
			    	large_sort_panel_store.commitChanges();
			    	var single_var = select_model.getSelected();
					var rowIndex = large_sort_panel_store.indexOf(single_var);
					if(rowIndex == 0){
						return false; 
					}
					else{
						var data = large_sort_panel_store.data.items[rowIndex].data;
						var record = new Ext.data.Record({ 
			   				default_id:data.default_id, 
			        		find_field: data.find_field, 
			        		Order_type:data.Order_type });
			        	if(rowIndex == 1){
			        		large_sort_panel_store.removeAt(rowIndex);  
			            	large_sort_panel_store.insert(rowIndex - 1, record);  
			            	large_sort_panel.getSelectionModel().selectRow(rowIndex - 1);
			        		large_sort_panel_store.getAt(rowIndex).set('default_id','��Ҫ�ؼ���');
			        		large_sort_panel_store.getAt(rowIndex-1).set('default_id','��Ҫ�ؼ���');
			        	}else{        	
			        		large_sort_panel_store.removeAt(rowIndex);  
			            	large_sort_panel_store.insert(rowIndex - 1, record);  
			            	large_sort_panel.getSelectionModel().selectRow(rowIndex - 1);
			        	}
			    	}
			    	large_sort_panel_store.commitChanges();
				}			
			}
		}
		
		function fun_sort_movedown(){
		    if(large_sort_panel_store.getCount() > 1){			
				large_sort_panel_store.commitChanges();
				var store_count = large_sort_panel_store.getCount();
				var select_model =large_sort_panel.getSelectionModel();
			    var selected_rows = select_model.getCount();
			    if(selected_rows<=0){;}
			    else if(selected_rows>1){
			    	Ext.Msg.alert('��ʾ','һ��ֻ��ѡ��һ��!');
			    }
			    else{
			    	var single_var = select_model.getSelected();
					var rowIndex = large_sort_panel_store.indexOf(single_var);
					if(rowIndex == (store_count-1)){
						return false;
					}
					else{
						var data = large_sort_panel_store.data.items[rowIndex].data;
						var record = new Ext.data.Record({ 
			   				default_id:data.default_id, 
			        		find_field: data.find_field,
			        		Order_type:data.Order_type });
			        	if(rowIndex == 0){
			        		large_sort_panel_store.removeAt(rowIndex);  
			            	large_sort_panel_store.insert(rowIndex + 1, record);  
			            	large_sort_panel.getSelectionModel().selectRow(rowIndex + 1);
			        		large_sort_panel_store.getAt(rowIndex+1).set('default_id','��Ҫ�ؼ���');
			        		large_sort_panel_store.getAt(rowIndex).set('default_id','��Ҫ�ؼ���');
			        	}else{        	
			        		large_sort_panel_store.removeAt(rowIndex);  
			            	large_sort_panel_store.insert(rowIndex + 1, record);  
			            	large_sort_panel.getSelectionModel().selectRow(rowIndex + 1);
			        	}
			    	}
			    	large_sort_panel_store.commitChanges();
				}	
			}
		}
	
		function fun_sort_submit(){					
			large_sort_panel_store.commitChanges();
			var store_count = large_sort_panel_store.getCount();
			var sort_field_array = [];
			var order_field_array = [];
			if(store_count > 0 ){
				for(var i = 0 ; i <= store_count - 1; i++){
					var field_data = large_sort_panel_store.data.items[i].data.find_field;
					var order_data = large_sort_panel_store.data.items[i].data.Order_type;
					sort_field_array.push(field_data);
					order_field_array.push(order_data);
				}
				if(isRepeat(sort_field_array)){
					Ext.Msg.alert('����','���б����������ɾ���ظ�������������Ȼ������!');
				}
				else{
					var sql_str='';
					for(var i = 0 ; i <= store_count-1 ; i++){
						var textformula = fun_newcolumn_dataindexformula('EN_formula',sort_field_array[i],'new_field',large_newcolumn_panel_onlyread_gridpanel_store);
						if(textformula.length>0){
							sql_str = sql_str + ' (' +textformula+ ') ' ;
						}
						else{
							if(sort_field_array[i] == '���'){sql_str = sql_str + ' year_id ';}
							else{sql_str = sql_str + ' ' + sort_field_array[i] + ' ';}
						}
						if(order_field_array[i] == '����'){sql_str = sql_str + ' desc, ';}
						else{sql_str = sql_str + order_field_array[i] + ', ';}
						
					}
					sql_str = ' order by ' + sql_str.substring(0,sql_str.length-2);
					sort_module_sql = sql_str;
					var virtual_dbname = cdcombination_sql;//"(" + cdcombination_sql + ") as cdc_temp_inner";
					grid_store_reload(Ext.getCmp("CDCombination_gridpanel").store,pageSize,Ext.getCmp("CDCombination_gridpanel_PagingToolbar"),virtual_dbname,sort_module_sql + '@' + filter_module_sql + '@' + newcolumn_module_sql);
					large_sort_win.hide();			
				}
			}
			else{
				if(sort_module_sql.length>0) sort_module_sql = ' ';
				large_sort_win.hide();	
			}
		}
		
		function fun_cdc_clearfilter(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
			    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫȡ��ɸѡ��?',callback);
			    function callback(id){
			   		if(id == 'yes'){	        
				    	filter_module_sql = ' ';  
				    	//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
				    	var virtual_dbname = cdcombination_sql;
				    	grid_store_reload(Ext.getCmp("CDCombination_gridpanel").store,pageSize,Ext.getCmp("CDCombination_gridpanel_PagingToolbar"),virtual_dbname,sort_module_sql + '@' + filter_module_sql + '@' + newcolumn_module_sql);  	
				    	if(large_filter_panel_onlyread_gridpanel_store.getCount()>0) large_filter_panel_onlyread_gridpanel_store.removeAll();
				    	if(large_filter_panel_gridpanel_store.getCount()>0) large_filter_panel_gridpanel_store.removeAll();
		    		}
			    }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ȡ��ɸѡ!');
			}		
		}
	    
	    function fun_cdc_filter(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
					var large_filter_panel_tree_root=new Ext.tree.AsyncTreeNode({   
					        id:"root",     
					        expanded:true,
				        	text :'ָ��' ,      	
				        	children : eval(fun_tree_listname(Ext.getCmp("CDCombination_gridpanel")))		       
					});	
					large_filter_panel_tree.setRootNode(large_filter_panel_tree_root); 			
					large_filter_panel.show();	
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ɸѡ!');
			}
		}	
		
		function fun_filter_clear(){
			Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ���������?',callback);
			function callback(id){
				if(id == 'yes'){
					large_filter_panel_gridpanel_store.removeAll();
					large_filter_panel_gridpanel_store.commitChanges();
					large_filter_panel_onlyread_gridpanel_store.removeAll();
					large_filter_panel_onlyread_gridpanel_store.commitChanges();
					filter_module_sql = ' ';
				}
			}
		}
		
		function fun_filter_remove(){		
			var select_model = large_filter_panel_gridpanel.getSelectionModel();
		    var selected_rows = select_model.getCount();	  
		    if(selected_rows > 0){
		    	if(selected_rows == 1){
					var record = select_model.getSelected();
					large_filter_panel_gridpanel_store.remove(record);												
				}
				else{
					var records = select_model.getSelections();
					large_filter_panel_gridpanel_store.remove(records);
				}
				fun_readonly_showconditions();
				large_filter_panel_gridpanel_store.commitChanges();
		    }
		    else{
		    	Ext.Msg.alert('����','��ѡ����Ҫɾ��������!');
		    }
		}
		
		function fun_filter_submit(){
			large_filter_panel_gridpanel_store.commitChanges();
			var store_count = large_filter_panel_gridpanel_store.getCount();
			var either_data_array = [];
			var dataindex_data_array = [];		
			var filter_type_data_array = [];
			var contents_data_array = [];				
			if(store_count > 0 ){
				var sql_str = " "; 
				for(var i = 0 ; i <= store_count - 1; i++){
					var either_data = large_filter_panel_gridpanel_store.data.items[i].data.either;
					var dataindex_data = large_filter_panel_gridpanel_store.data.items[i].data.dataindex;	//����ֵ			
					var filter_type_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_type;
					var contents_data = large_filter_panel_gridpanel_store.data.items[i].data.contents;	
					either_data_array.push(either_data);
					dataindex_data_array.push(dataindex_data);
					filter_type_data_array.push(filter_type_data);				
					contents_data_array.push(contents_data);							
				}			
				/*�ж����������Ƿ��п�ֵ*/		
				var _contents_blank = 0;			
				for(var i = 0; i <= contents_data_array.length-1;i++){
					if(contents_data_array[i].replace(" ","").length == 0) _contents_blank = _contents_blank + 1;	
				}			
				if(_contents_blank>0){
					Ext.Msg.alert('����','��������������!');
				}
				else{
					var sql_str = ' ';
					var store_count = large_filter_panel_onlyread_gridpanel_store.getCount();
					for(var i = 0; i<=store_count-1;i++){
						var find_field = large_filter_panel_onlyread_gridpanel_store.data.items[i].data.filter_field;
						var textformula = fun_newcolumn_dataindexformula('EN_formula',find_field,'new_field',large_newcolumn_panel_onlyread_gridpanel_store);
						if(textformula.length>0){
							var replace_en_conditions = large_filter_panel_onlyread_gridpanel_store.data.items[i].data.EN_conditions
							replace_en_conditions = replace_en_conditions.replace(find_field,"( "+textformula+") ");
							sql_str = sql_str + ' ('+ replace_en_conditions + ') and ';
						}else{
							sql_str = sql_str + ' ('+ large_filter_panel_onlyread_gridpanel_store.data.items[i].data.EN_conditions + ') and ';	
						}						
					}
					sql_str = sql_str.substring(0,sql_str.length-4);
					filter_module_sql = sql_str;
					//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var virtual_dbname = cdcombination_sql;
					grid_store_reload(Ext.getCmp("CDCombination_gridpanel").store,pageSize,Ext.getCmp("CDCombination_gridpanel_PagingToolbar"),virtual_dbname,sort_module_sql + '@' + filter_module_sql + '@' + newcolumn_module_sql);
					large_filter_panel.hide();									
				}	
			}
			else{
				filter_module_sql = ' ';
				//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
				var virtual_dbname = cdcombination_sql;
				grid_store_reload(Ext.getCmp("CDCombination_gridpanel").store,pageSize,Ext.getCmp("CDCombination_gridpanel_PagingToolbar"),virtual_dbname,sort_module_sql + '@' + filter_module_sql + '@' + newcolumn_module_sql);
				large_filter_panel.hide();	
			}
		}	
		
		function fun_readonly_showconditions(){
			large_filter_panel_onlyread_gridpanel_store.removeAll();			
			var store_count = large_filter_panel_gridpanel_store.getCount();
			var either_data_EN_array = [];
			var either_data_CH_array = [];
			var dataindex_data_array = [];
			var filter_field_data_array = [];		
			var math_type_EN_data_array = [];
			var math_type_CH_data_array = [];
			var contents_data_array = [];
			var sort_data_array = [];		
			for(var i = 0;i<=store_count-1;i++){
				/*��\��*/
				var either_data_EN_data = large_filter_panel_gridpanel_store.data.items[i].data.either;
				var either_data_CH_data = either_combox_store.getAt(either_combox_store.find('either_type_id',either_data_EN_data)).data.either_type;
				either_data_EN_array.push(either_data_EN_data);
				either_data_CH_array.push(either_data_CH_data);
				/*ָ��*/					
				var filter_field_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_field;
				var dataindex_data = large_filter_panel_gridpanel_store.data.items[i].data.dataindex;
				filter_field_data_array.push(filter_field_data);
				dataindex_data_array.push(dataindex_data);
				/*��ѧ����*/	
				var math_type_EN_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_type;
				var math_type_CH_data = filtertype_combox_store.getAt(filtertype_combox_store.find('math_type_id',math_type_EN_data)).data.math_type;
				math_type_EN_data_array.push(math_type_EN_data);
				math_type_CH_data_array.push(math_type_CH_data);
				/*����*/
				var contents_data = large_filter_panel_gridpanel_store.data.items[i].data.contents;
				contents_data_array.push(contents_data);
				/*���*/
				var sort_data = large_filter_panel_gridpanel_store.data.items[i].data.sort_flag;
				sort_data_array.push(sort_data);
			}
			/*ʵ�ַ���readonlygrid��*/		
			for(var i = 0;i<=store_count-1;i++){	
				var en_sql_str = ' ',ch_sql_str = ' ';
				var _count = countInArray(filter_field_data_array[i],filter_field_data_array)
				if(_count>1 ){/*�ֶ����ظ�*/
					if(i == store_count-1 || dataindex_data_array[i] != dataindex_data_array[i+1]){ //���һ��
						for(var k = i - _count +1 ; k <= i ; k++){
							if(fun_gridcolumnindex(dataindex_data_array[i],Ext.getCmp("CDCombination_gridpanel"))>=fieldstr_point){/*���ָ�ʽ*/   //�ո�ʹ�������ַ��滻
								if(filter_field_data_array[k].indexOf("��������")>=0 || filter_field_data_array[k].indexOf("ҽԺ����")>=0)
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " '" + contents_data_array[k] + "' ";
								else
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " " + contents_data_array[k] + " ";							
							}
							else{
								if(math_type_CH_data_array[i] == '����' || math_type_CH_data_array[i] == '������'){ 
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " '%" + contents_data_array[k] +"%' ";								
								}
								else if(math_type_CH_data_array[i] == '��ͷ��' || math_type_CH_data_array[i] == '��ͷ����'){ 
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k].substring(1,math_type_EN_data_array[k].length) +  " '" + contents_data_array[k] +"%' ";								
								}	
								else if(math_type_CH_data_array[i] == '��β��' || math_type_CH_data_array[i] == '��β����'){ 
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k].substring(1,math_type_EN_data_array[k].length) +  " '%" + contents_data_array[k] +"' ";								
								}								
								else{
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " '" + contents_data_array[k] + "' ";																
								}
							}
							ch_sql_str = ch_sql_str + either_data_CH_array[k]+ filter_field_data_array[k]+ math_type_CH_data_array[k]+"'"+contents_data_array[k]+"'";
						}
						en_sql_str = en_sql_str.substring(4,en_sql_str.length);
						ch_sql_str = ch_sql_str.substring(2,ch_sql_str.length);
						/*����Readonlypanel*/
						var k = large_filter_panel_onlyread_gridpanel_store.getCount();
						for(var j = 0 ; j<=k-1; j++){
							if(large_filter_panel_onlyread_gridpanel_store.getAt(j).get('sort_flag') == sort_data_array[i]){
								large_filter_panel_onlyread_gridpanel_store.removeAt(j);					
							}
						}																			
				       	var row = new Ext.data.Record({ 
				       		filter_field : filter_field_data_array[i],
				       	   	CH_conditions: ch_sql_str,  
				       	   	EN_conditions: en_sql_str,
				           	sort_flag: sort_data_array[i]        
				       	});
				       	large_filter_panel_onlyread_gridpanel.stopEditing();        
				       	large_filter_panel_onlyread_gridpanel_store.insert(k,row);  //�ڵ�һ�в�����һ�� ����ĵ��ö�����store  
				       	large_filter_panel_onlyread_gridpanel.startEditing(0,1);   //����һ�п�ʼ�༭
				       	large_filter_panel_onlyread_gridpanel_store.commitChanges();
				       	large_filter_panel_onlyread_gridpanel_store.sort('sort_flag', 'ASC');	   		       	
					}										
				}else{/*�ֶ�û���ظ�*/								
					if(fun_gridcolumnindex(dataindex_data_array[i],Ext.getCmp("CDCombination_gridpanel"))>=fieldstr_point){/*���ָ�ʽ*/   //�ո�ʹ�������ַ��滻
						if(filter_field_data_array[i].indexOf("��������")>=0 || filter_field_data_array[i].indexOf("ҽԺ����")>=0)
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '" + contents_data_array[i] + "' ";
						else
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " " + contents_data_array[i];
					}					
					else{/*�ַ���ʽ*/
						if(math_type_CH_data_array[i] == '����' || math_type_CH_data_array[i] == '������'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '%" + contents_data_array[i] +"%' ";					
						}
						else if(math_type_CH_data_array[i] == '��ͷ��' || math_type_CH_data_array[i] == '��ͷ����'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i].substring(1,math_type_EN_data_array[i].length) +  " '" + contents_data_array[i] +"%' ";					
						}
						else if(math_type_CH_data_array[i] == '��β��' || math_type_CH_data_array[i] == '��β����'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i].substring(1,math_type_EN_data_array[i].length) +  " '%" + contents_data_array[i] +"' ";					
						}							
						else{
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '" + contents_data_array[i] + "' ";						
						}					
					}
					ch_sql_str = filter_field_data_array[i] + math_type_CH_data_array[i] +"'"+contents_data_array[i]+"'";	
					
					/*����Readonlypanel*/
					var k = large_filter_panel_onlyread_gridpanel_store.getCount();
					for(var j = 0 ; j<=k-1; j++){
						if(large_filter_panel_onlyread_gridpanel_store.getAt(j).get('sort_flag') == sort_data_array[i]){
							large_filter_panel_onlyread_gridpanel_store.removeAt(j);					
						}
					}																			
			       	var row = new Ext.data.Record({ 
			       		filter_field : filter_field_data_array[i],
			       	   	CH_conditions: ch_sql_str,  
			       	   	EN_conditions: en_sql_str,
			           	sort_flag: sort_data_array[i]        
			       	});
			       	large_filter_panel_onlyread_gridpanel.stopEditing();        
			       	large_filter_panel_onlyread_gridpanel_store.insert(k,row);  //�ڵ�һ�в�����һ�� ����ĵ��ö�����store  
			       	large_filter_panel_onlyread_gridpanel.startEditing(0,1);   //����һ�п�ʼ�༭
			       	large_filter_panel_onlyread_gridpanel_store.commitChanges();
			       	large_filter_panel_onlyread_gridpanel_store.sort('sort_flag', 'ASC');	       								
				}			
			}	
		}
		    
		function fun_cdc_newcolumn(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {	
				large_newcolumn_panel.show();	
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�������!');
			}		
		}
		
		function fun_newcolumn_close(){		
			large_newcolumn_panel.hide();
		}
		
		function fun_newcolumn_submit(){
			var store_count = large_newcolumn_panel_onlyread_gridpanel_store.getCount()
			if(store_count != 0){
				var sql_str = ' ';
				for(var i = 0 ;i<=store_count -1 ; i++){
					var data = large_newcolumn_panel_onlyread_gridpanel_store.data.items[i].data;
					var fieldname = data.new_field;
					var EN_formula = data.EN_formula;
					if(i == store_count-1) sql_str = sql_str + "(" + EN_formula + ") as " + fieldname + "";
					else sql_str = sql_str + "(" + EN_formula + ") as " + fieldname + ", ";
					/*������*/ 
					if(!fun_gridfieldname_exists(trim(fieldname),Ext.getCmp("CDCombination_gridpanel"))){
						var new_field = "{header:'"+fieldname+"',align:'right',width: 100,xtype:'numbercolumn',format : '0,00.00',sortable:true,hideable:false,dataIndex:'"+fieldname+"'}";
						Ext.getCmp("CDCombination_gridpanel").addColumn(eval("(" + new_field + ")"));	
					}
				}
				newcolumn_module_sql = sql_str; 		
				//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
				var virtual_dbname = cdcombination_sql;
				grid_store_reload(Ext.getCmp("CDCombination_gridpanel").store,pageSize,Ext.getCmp("CDCombination_gridpanel_PagingToolbar"),virtual_dbname,sort_module_sql + '@' + filter_module_sql + '@' + newcolumn_module_sql);
			}
			else{
				Ext.Msg.alert('��ʾ','û���������ֶ�!');
			}		
		}
		
	   function fun_newcolumn_add(){
	    	var text_fieldname = Ext.getCmp('large_newcolumn_panel_textname').getValue();
	    	if(trim(text_fieldname) == '������Ϊ��' || trim(text_fieldname).length == 0){
	    		Ext.Msg.alert('����','���Ʋ���Ϊ��!');
	    	}
	    	else{
		    	var text_rawvalue = Ext.getCmp('large_newcolumn_panel_textformula').getValue();
		    	var text_dbrawvalue = text_rawvalue;
		    	var text_validation_value = text_rawvalue;
		    	var text_value = text_rawvalue;    	
		    	if(text_value != '����(,+,-,*,/,)�����������' || trim(text_rawvalue).length != 0){
		    		/*����������������滻*/
		    		if(text_value.indexOf('(')>=0){
		    			text_value = text_value.replace(/\(/g," ");
		    		}
		    		if(text_value.indexOf(')')>=0){
		    			text_value = text_value.replace(/\)/g," ");
		    		}
		    		if(text_value.indexOf('+')>=0){
		    			text_value = text_value.replace(/\+/g," ");
		    		}
		    		if(text_value.indexOf('-')>=0){
		    			text_value = text_value.replace(/\-/g," ");
		    		}
		    		if(text_value.indexOf('*')>=0){
		    			text_value = text_value.replace(/\*/g," ");
		    		}
		    		if(text_value.indexOf('/')>=0){
		    			text_value = text_value.replace(/\//g," ");
		    		}
		    		var text_array = trim(multi_trim_one(text_value)).split(" ");
		    		var j = 0;    		
		    		for(var k = 0 ; k <text_array.length;k++){    
		    			if(!fun_gridfieldname_exists(trim(text_array[k]),Ext.getCmp("CDCombination_gridpanel")) && isNaN(trim(text_array[k]))){
		    				j = 1;
		    			}
		    		}
		    		if(j == 1){
		    			Ext.Msg.alert('��ʽ����','����ָ�����!'); 
		    		}
		    		else{
		    			/*��ָ���滻Ϊ���֣����к�̨��֤*/
			    		for(k = 0 ; k <text_array.length;k++){
			    			if(fun_gridfieldname_exists(trim(text_array[k]),Ext.getCmp("CDCombination_gridpanel"))){
			    				text_validation_value = text_validation_value.replace(text_array[k],1); //���ڼ���
			    			}
			    		}
			    		/*��̨��֤��ʽ*/
			    		Ext.Ajax.request({      
				             url: '../ActionController/ExpressionJexl.jsp',        
				             params: {Exp : text_validation_value},      
				             callback : function(options, success, response) {   
				                if(success){ 
				                	if(trim(response.responseText) == "Error"){
				                		Ext.MessageBox.alert('����',"��ʽ�д���,����!"); 	
				                	}else{		                		
										/*�����滻Ϊ���ݿ�ָ��*/
							    		for(k = 0 ; k <text_array.length;k++){
							    			if(fun_gridfieldname_exists(trim(text_array[k]),Ext.getCmp("CDCombination_gridpanel"))){
							    				var dataindex = fun_treenodetext_dataindex(text_array[k],Ext.getCmp('large_newcolumn_panel_tree').getRootNode());
							    				text_dbrawvalue = text_dbrawvalue.replace(text_array[k],"CAST("+dataindex+" as decimal(24,2))"); 
							    			}
							    		}						    		
							    		/*�����ֶι�ʽչʾҳ��*/
							    		var sort_id =  Ext.getCmp("CDCombination_gridpanel").getColumnModel().getColumnCount(); //0��checkbox
							    		var i = large_newcolumn_panel_onlyread_gridpanel_store.getCount();						    		
							    		var record = new Ext.data.Record({ 
								       	   new_field : text_fieldname,
								           CH_formula: text_rawvalue,       
								           EN_formula: text_dbrawvalue,
								           sort_flag : sort_id
								       	});
								        large_newcolumn_panel_onlyread_gridpanel.stopEditing();        
								        large_newcolumn_panel_onlyread_gridpanel_store.insert(i,record);  //�ڵ�һ�в�����һ�� ����ĵ��ö�����store  
								        large_newcolumn_panel_onlyread_gridpanel.startEditing(0,1);   //����һ�п�ʼ�༭
								        large_newcolumn_panel_onlyread_gridpanel_store.commitChanges();							       
								        /*�����������*/
								        Ext.getCmp('large_newcolumn_panel_textname').reset();
								        Ext.getCmp('large_newcolumn_panel_textformula').reset();
								        /*�ύ*/
										fun_newcolumn_submit();							        
				                	}		                    		                   
				                }else {		                	
				                 	Ext.MessageBox.alert('����',"��ʽ�д���,����!");   
				                }   
				            }
				        }); 
		    		}	
		    	}
	    	}
	    }
	    
	    function fun_newcolumn_delete(){
			var store_count = large_newcolumn_panel_onlyread_gridpanel_store.getCount();
			var select_model =large_newcolumn_panel_onlyread_gridpanel.getSelectionModel();
			var selected_rows = select_model.getCount(); 
			if(selected_rows == 0){
				Ext.Msg.alert('����','��ѡ��Ҫɾ�����Զ�����!');
			}
			else{
				Ext.MessageBox.confirm('��ʾ','ȷ����Ҫɾ����������?',callback);
	    		function callback(id){
		   			if(id == 'yes'){
						if(selected_rows == 1){	
						    var record = select_model.getSelected();
						    large_newcolumn_panel_onlyread_gridpanel_store.remove(record);
						    /*ɾ��������ģ���е�������*/
						    Ext.getCmp("CDCombination_gridpanel").removeColumn(record.get('new_field'));
						    /*ɾ������ģ���е�������*/
						    for(var i = 0 ;i<=large_sort_panel_store.getCount()-1;i++){
						    	var data = large_sort_panel_store.data.items[i].data;
						    	if(data.find_field == record.get('new_field')){
						    		large_sort_panel_store.removeAt(i);
						    	}
						    }
						    if(large_sort_panel_store.getCount()>0){
						    	large_sort_panel_store.getAt(0).set('default_id','��Ҫ�ؼ���');
						    }
						    /*ɾ��ɸѡģ���е�������*/
						    for(var i = 0 ;i<=large_filter_panel_gridpanel_store.getCount()-1;i++){
						    	var data = large_filter_panel_gridpanel_store.data.items[i].data;
						    	if(data.filter_field == record.get('new_field')){
						    		large_filter_panel_gridpanel_store.removeAt(i);
						    		fun_readonly_showconditions();
						    	}
						    }		    	    		    		    		 
						}
						else if(selected_rows > 1){
						    var records = select_model.getSelections();
						    large_newcolumn_panel_onlyread_gridpanel_store.remove(records);		
						    /*ɾ��������*/
						    for(var i = 0 ;i <=records.length-1;i++){
						    	Ext.getCmp("CDCombination_gridpanel").removeColumn(records[i].get('new_field'));
						    	/*ɾ������ģ���е�������*/
							    for(var j = 0 ;j<=large_sort_panel_store.getCount()-1;j++){
							    	var data = large_sort_panel_store.data.items[j].data;
							    	if(data.find_field == records[i].get('new_field')){
							    		large_sort_panel_store.removeAt(j);			    		
							    	}
							    }
							    if(large_sort_panel_store.getCount()>0){
							    	large_sort_panel_store.getAt(0).set('default_id','��Ҫ�ؼ���');
							    }
							    /*ɾ��ɸѡģ���е�������*/
							    for(var j = 0 ;j<=large_filter_panel_gridpanel_store.getCount()-1;j++){
							    	var data = large_filter_panel_gridpanel_store.data.items[j].data;
							    	if(data.filter_field == records[i].get('new_field')){
							    		large_filter_panel_gridpanel_store.removeAt(j);
							    		fun_readonly_showconditions();
							    	}
							    }			    
						    }			
						}		   					
		   			}
	    		}
			}	
	    }
	    
	    function fun_cdc_summary(){
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
	    		if(drillleastlevel == "china"){
			    	/*���ط�������ֶ�combox*/ 
			    	large_summary_panel_groupname_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��"))); 
			    	/*���ط�����ܷ�ʽcombox*/
			    	large_summary_panel_groupvalue_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    	}
		    	else{
			    	/*���ط�������ֶ�combox*/ 
			    	large_summary_panel_groupname_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��"))); 
			    	/*���ط�����ܷ�ʽcombox*/
			    	large_summary_panel_groupvalue_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			    		
		    	}
		 	    Ext.getCmp('large_summary_panel_groupname').reset();
		    	Ext.getCmp('large_summary_panel_valuename').reset();
		    	Ext.getCmp('large_summary_panel_type').reset();
		    	summary_module_sql = ' ';
		    	summary_sortpanel_module_sql = ' ';  
		    	summary_filterpanel_module_sql = ' ';  
		    	if(Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined){
		    		Ext.getCmp("large_summary_panel_showresult_gridpanel").destroy();	    
		    	}
		    	large_summary_panel.show();
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݷ������!');
			}    	
	    }
	    
	    function fun_summary_cancel(){
	    	large_summary_panel.hide();
	    }
	    
	    function fun_summary_removeall(){
			Ext.MessageBox.confirm('��ʾ','ȷ����Ҫɾ�������?',callback);
			function callback(id){
				if(id == 'yes'){
			 	    Ext.getCmp('large_summary_panel_groupname').reset();
			    	Ext.getCmp('large_summary_panel_valuename').reset();
			    	Ext.getCmp('large_summary_panel_type').reset();
			    	summary_module_sql = ' ';
			    	summary_sortpanel_module_sql = ' ';
			    	summary_filterpanel_module_sql = ' ';
					if (Ext.getCmp("large_summary_panel_showresult_gridpanel_store") != undefined) {
					    Ext.getCmp("large_summary_panel_showresult_gridpanel_store").remove();
					}
					if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
					    Ext.getCmp("large_summary_panel_showresult_gridpanel").destroy();
					}
					if (Ext.getCmp("GroupBy_PagingToolbar") != undefined) {
					    Ext.getCmp("GroupBy_PagingToolbar").destroy();
					}				
				}
			}    	    	  
	    }
	    
	    function fun_summary_submit(){ 
	    	/*���ɸѡ������sql*/
			Ext.getCmp('large_summary_panel_sortpanel_groupname').reset();
			Ext.getCmp('large_summary_panel_sortpanel_type').reset();				
			Ext.getCmp('large_summary_panel_filterpanel_textfield1').reset();
			Ext.getCmp('large_summary_panel_filterpanel_textfield2').reset();
			Ext.getCmp('large_summary_panel_filterpanel_groupname1').reset();
			Ext.getCmp('large_summary_panel_filterpanel_groupname2').reset();
			Ext.getCmp('large_summary_panel_filterpanel_groupmath1').reset();
			Ext.getCmp('large_summary_panel_filterpanel_groupmath2').reset();
	    	summary_sortpanel_module_sql = ' ';
	    	summary_filterpanel_module_sql = ' ';		
			/*��ʼ�������*/		
	    	var combox_valuename =  Ext.getCmp('large_summary_panel_groupname').getValue();
	    	var combox_displayname =  Ext.getCmp('large_summary_panel_groupname').getRawValue();
	    	var combox_valuefield = Ext.getCmp('large_summary_panel_valuename').getValue();
	    	var combox_displayfield = Ext.getCmp('large_summary_panel_valuename').getRawValue();    	
	    	var combox_type = Ext.getCmp('large_summary_panel_type').getValue();
	    	var combox_CNtype = Ext.getCmp('large_summary_panel_type').getRawValue();  
	    		/*ȥ��[��]��[����]*/
	    	combox_displayfield = replaceAll(combox_displayfield,"\\[ƽ������\\]","");	
			combox_displayfield = replaceAll(combox_displayfield,"\\[ʮ��֮һ\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[���\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[��\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[��ǧ��ʱ\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[��Ԫ\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[��\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[����Ԫ\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[��Ԫ\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[��\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[����\\]","������");  	    	
	    	if(trim(combox_valuename).length == 0 || trim(combox_valuefield).length == 0 || trim(combox_type).length == 0){
	    		Ext.Msg.alert('��ʾ','�ֶβ�����Ϊ��!');
	    	}
	    	else{
	    		var jsoncolumnmodel = '',sql_str = '';
	    		if(combox_valuefield.indexOf(',')>=0){    			
	    			var textvalue_array = combox_valuefield.split(',');
	    			var textdisplay_array = combox_displayfield.split(',');
	    			for(var i = 0 ;i <=textvalue_array.length -1 ; i++){
	    				if(i == textvalue_array.length - 1){
	    					sql_str = sql_str + combox_type + "(" + textvalue_array[i] + ") as " + textdisplay_array[i] + "_" + combox_type;
	    					jsoncolumnmodel = jsoncolumnmodel + "{header: '"+textdisplay_array[i] + '_' + combox_CNtype+"',dataIndex: '"+trim(textdisplay_array[i]) + '_' + trim(combox_type)+"',align : 'right',width:150,xtype:'numbercolumn',format : '0,00.0',sortable: true}";
	    				}
	    				else{
	    					sql_str = sql_str + combox_type + "(" + textvalue_array[i] + ") as " + textdisplay_array[i] + "_" + combox_type + ",";
	    					jsoncolumnmodel = jsoncolumnmodel + "{header: '"+textdisplay_array[i] + '_' + combox_CNtype+"',dataIndex: '"+trim(textdisplay_array[i]) + '_' + trim(combox_type)+"',align : 'right',width:150,xtype:'numbercolumn',format : '0,00.0',sortable: true},";
	    				}
	    			}
	    			sql_str = combox_valuename + "," + sql_str;
	    		}
	    		else{
	    			sql_str = combox_valuename + "," + combox_type + "(" + combox_valuefield + ") as " + combox_displayfield + "_" + combox_type;
	    			jsoncolumnmodel = "{header: '"+ combox_displayfield + '_' + combox_CNtype+"',dataIndex: '"+ trim(combox_displayfield) + '_' + trim(combox_type)+"',width:150,align : 'right',xtype:'numbercolumn',format : '0,00.0',sortable: true}";
	    		}
		    	/*��̬����gridpanel*/
	    		summary_module_sql = sql_str; 
	    		if("ʡ��".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '������������',dataIndex:'admincode_temp',width:90,sortable: true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}
	    		else if("�ؼ���".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '������������',dataIndex:'admincode_temp',width:90,sortable: true},{header: 'ʡ��',dataIndex:'province',width:90,sortable: true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}
	    		else if("������@���س���".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '������������',dataIndex:'admincode_temp',width:90,sortable: true},{header:'ʡ��',dataIndex:'province',width:90,sortable:true},{header:'�ؼ���',dataIndex:'city',width:90,sortable:true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}    		
	    		else{
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";	
	    		} 
	    		//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
	    		var virtual_dbname = cdcombination_sql;
	    		var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;
				Create_SummaryGridPanel_Remote(virtual_dbname,columnnamedataindex,pageSize,sql);//����Ӧ�øĳ�numberpoint�����������
	    	}    	
	    }          
					
		function Create_SummaryGridPanel_Remote(_database,_columndataindex,_pageSize,_sql) {
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel_store") != undefined) {
			    Ext.getCmp("large_summary_panel_showresult_gridpanel_store").remove();
			}
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
			    Ext.getCmp("large_summary_panel_showresult_gridpanel").destroy();
			}
			if (Ext.getCmp("GroupBy_PagingToolbar") != undefined) {
			    Ext.getCmp("GroupBy_PagingToolbar").destroy();
			}	
			if (Ext.getCmp("summary_rightMenu") != undefined) {
			    Ext.getCmp("summary_rightMenu").destroy();
			}		
			
			var large_summary_panel_showresult_gridpanel_store = new Ext.data.Store({//���÷������ݼ�
				id : 'large_summary_panel_showresult_gridpanel_store',
				autoLoad: {params:{start:0,limit:_pageSize}},
				reader: new Ext.data.JsonReader(),
				proxy : new Ext.data.HttpProxy({
					url : 'GetCDCombinationGridstoreGroupByPage'
				})
			});
			
			large_summary_panel_showresult_gridpanel_store.on('beforeload', function(store,options) 
			{ 
				var new_params={sql:_sql,dbname:_database}; 
				Ext.apply(options.params,new_params); 
			});
			    
		    var GroupBy_PagingToolbar = new Ext.PagingToolbar({
		    		id  :'GroupBy_PagingToolbar',
				    store: large_summary_panel_showresult_gridpanel_store,
				    pageSize:_pageSize,
				    displayInfo:true,
				    displayMsg :'��{0}��-{1}����һ��{2}��',
			        onFirstLayout : function(){//�����������
		                if(this.dsLoaded){
		                    this.onLoad.apply(this, this.dsLoaded);
		                }
		                if(this.rendered && this.refresh){
		                    this.refresh.hide();
		                }
			        }		    
			});
			
			/*GroupBy_PagingToolbar.add(
		       '-',
		       '���:',
		       {id:'text_plus',text:'111'},
		       {xtype : 'tbspacer'},
		       'ƽ��ֵ:',
		       {id:'text_avg',text:'11'},
		       {xtype : 'tbspacer'},
		       '���ֵ:',
		       {id:'text_max',text:'11'},
		       '��Сֵ:',
		       {id:'text_min',text:'11'}       
			);*/
			
			var large_summary_panel_showresult_gridpanel = new Ext.grid.GridPanel({
			    id: "large_summary_panel_showresult_gridpanel",
			    autoScroll: true,
			    border: true,
			    //viewConfig: {forceFit: true},
			    bbar : GroupBy_PagingToolbar,
			    loadMask: true,	
				stripeRows:true,
				containerScroll:true,
				trackMouseOver:true,		    
			    cm: new Ext.grid.ColumnModel(eval("("+_columndataindex + ")")),
			    store: large_summary_panel_showresult_gridpanel_store
			});
			Ext.getCmp('dynamic_panel').add(large_summary_panel_showresult_gridpanel)
			Ext.getCmp('dynamic_panel').doLayout(); 
			
			var summary_rightMenu = new Ext.menu.Menu( {  
		    id : 'summary_rightMenu',  
		    items : [
		    	{  
			        text:'��Ԫ����ظ�������',  
			        iconCls:'cellcopy',
			        tooltip:'���֮�󣬵���������ϵĸ��ư�ť������ְ',
			        handler:fun_summary_cell_copy_nav  
			    },
		    '-',
		    	{  
			        text:'���м��ظ�������',  
			        iconCls:'copy',
			        tooltip:'���֮�󣬵���������ϵĸ��ư�ť������ְ',
			        handler:fun_summary_row_copy_nav  
			    },
		    	{  	        
			        text:'���м��ظ���(������ͷ)����',  
			        iconCls:'copy_header',
			        handler:fun_summary_row_copy_header_nav
			    }]  
			});
			
			large_summary_panel_showresult_gridpanel.addListener('rowcontextmenu', summaryrightClickFn);
			function summaryrightClickFn(grid, rowIndex, e) {  
			    e.preventDefault();  
			    summary_rightMenu.showAt(e.getXY()); 
			}	
			
			large_summary_panel_showresult_gridpanel.addListener('cellcontextmenu',summarycellclick);  
			function summarycellclick(grid, rowIndex, columnIndex, e) {
				columnindex = columnIndex;
			}
					
			function fun_summary_cell_copy_nav(){
				fun_cell_copy(large_summary_panel_showresult_gridpanel,"summary_copybutton");
			}
			
			function fun_summary_row_copy_nav(){
				fun_row_copy(large_summary_panel_showresult_gridpanel,"summary_copybutton");
			}
			
			function fun_summary_row_copy_header_nav(){
				fun_row_copy_header(large_summary_panel_showresult_gridpanel,"summary_copybutton");
			}					
		}
		
		function fun_summary_export(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {	
				//export rights
				Ext.Ajax.request({      
					 url: 'GetCDCexportRows',
			         params: {rights:rightspk},      
			         callback : function(options, success, response) {   
			            if(success){ 
			            	var erows = Ext.getCmp('large_summary_panel_showresult_gridpanel').store.getCount();
			            	var data = trim(response.responseText);	
			            	exportRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɵ�����
			            	var exportedRows = trim(data.split("@")[1]);  //�����Ѿ���������
			            	var exportedObs =  trim(data.split("@")[2]);  //�����Ѿ���������	
			            	var exportRowsOfRights = parseInt(trim(data.split("@")[3]));  //Ȩ�޵��µ�������
			            	var exportObsOfRights = parseInt(trim(data.split("@")[4]));   //Ȩ�޵��µ�������	            	
			            	if(exportedObs == ''){
								if(erows > exportRowNum){
									Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܵ���'+exportRowNum+'��!');
								}
								else{
								    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ����?',callback);
								    function callback(id){
								   		if(id == 'yes'){
										  exported(Ext.getCmp('large_summary_panel_showresult_gridpanel')); 
											//record export rows						
								    		Ext.Ajax.request({      
								    			 url: 'SaveCDCExportActions',
									             params: {rights:rightspk,exportbutton:5,exportedrows:erows,sysfunid:sysfunStr},      
									             callback : function(options, success, response) {}
									        });							  
								   		}
								    }
								}
			            	}
			            	else{	
				            	var exportedRows = parseInt(trim(data.split("@")[1])); 
				            	var exportedObs = parseInt(trim(data.split("@")[2])); 	            		
								if(erows > exportRowNum){
									Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܵ���'+exportRowNum+'��!');
								}	            	
				            	else if(exportedObs+1 > exportObsOfRights){
				            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
				            	}
				            	else if(exportedRows+erows > exportRowsOfRights){
				            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
				            	}
								else{		   						
								    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ����?',callback);
								    function callback(id){
								   		if(id == 'yes'){
										  exported(Ext.getCmp('large_summary_panel_showresult_gridpanel')); 
											//record export rows						
								    		Ext.Ajax.request({      
								    			 url: 'SaveCDCExportActions',
									             params: {rights:rightspk,exportbutton:5,exportedrows:erows,sysfunid:sysfunStr},      
									             callback : function(options, success, response) {}
									        });							  
								   		}
								    }				       								        					
								}
			            	}
			            }else {		                	
			             	Ext.MessageBox.alert('����',"�����д���!");   
			            }   
			        }
			    });
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿɵ���!');
			}
		} 
		
		function fun_summary_sort(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
				large_summary_panel_sortpanel_groupname_store.loadData(eval(fun_combox_listname(Ext.getCmp("large_summary_panel_showresult_gridpanel"))));			
				large_summary_panel_sortwinpanel.show();		
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�����!');
			}
		}
		
		function fun_summary_sortpanel_cancel(){
			large_summary_panel_sortwinpanel.hide();
		}
		
		function fun_summary_sortpanel_submit(){
			var fieldvaluename = Ext.getCmp('large_summary_panel_sortpanel_groupname').getValue();
			var fielddisplayname = Ext.getCmp('large_summary_panel_sortpanel_groupname').getRawValue();
			var typevaluename = Ext.getCmp('large_summary_panel_sortpanel_type').getValue();			
			if (trim(fieldvaluename).length != 0 && trim(typevaluename).length != 0 ) {
				summary_sortpanel_module_sql = "order by " + fieldvaluename + " " +typevaluename;
	    		//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
				var virtual_dbname = cdcombination_sql;
	    		var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;			
				grid_store_reload(Ext.getCmp("large_summary_panel_showresult_gridpanel").store,pageSize,Ext.getCmp("GroupBy_PagingToolbar"),virtual_dbname,sql);
				Ext.getCmp('large_summary_panel_sortpanel_groupname').reset();
				Ext.getCmp('large_summary_panel_sortpanel_type').reset();		
				large_summary_panel_sortwinpanel.hide();	
			}
			else{
				Ext.Msg.alert('��ʾ','��ѡ�������ֶλ�������ʽ!');
			}			
		}
		
		function fun_summary_filter(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
				large_summary_panel_filterpanel_groupname_store.loadData(eval(fun_combox_listname(Ext.getCmp("large_summary_panel_showresult_gridpanel"))));			
				large_summary_panel_filterwinpanel.show();		
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ɸѡ!');
			}			
		}
		
		function fun_summary_filterpanel_cancel(){
			large_summary_panel_filterwinpanel.hide();	
		}
	    
		function fun_summary_filterpanel_submit(){		
			var textfield_content1 = trim(Ext.getCmp('large_summary_panel_filterpanel_textfield1').getValue());
			var filterfield_combox1 = trim(Ext.getCmp('large_summary_panel_filterpanel_groupname1').getValue());
			var filtertype_combox1 = trim(Ext.getCmp('large_summary_panel_filterpanel_groupmath1').getValue());
			if(textfield_content1.length ==0 || filterfield_combox1.length ==0 || filtertype_combox1 == 0){
				Ext.Msg.alert('��ʾ','��ɸѡ����������������д!');
			}
			else{
				var sql_str1 = '';
				if(filterfield_combox1.indexOf("district")>=0 || filterfield_combox1.indexOf("city")>=0 || filterfield_combox1.indexOf("province")>=0){
					sql_str1 = filterfield_combox1 + filtertype_combox1 + " '" + trim(textfield_content1) + "' ";
				}
				else{
					sql_str1 = filterfield_combox1 + filtertype_combox1 + textfield_content1;
				}
				var textfield_content2 = trim(Ext.getCmp('large_summary_panel_filterpanel_textfield2').getValue());
				var filterfield_combox2 = trim(Ext.getCmp('large_summary_panel_filterpanel_groupname2').getValue());
				var filtertype_combox2 = trim(Ext.getCmp('large_summary_panel_filterpanel_groupmath2').getValue());			
				if(textfield_content2.length>0 && filterfield_combox2.length >0 && filtertype_combox2.length>0){
					var filtertype_radio = Ext.getCmp('state').getGroupValue();
					if(filterfield_combox2.indexOf("district")>=0 || filterfield_combox2.indexOf("city")>=0 || filterfield_combox2.indexOf("province")>=0){
						sql_str2 = filterfield_combox2 + " " + filtertype_combox2 + " '" + textfield_content2 + "' ";
					}
					else{
						sql_str2 = filterfield_combox2 + " " + filtertype_combox2 + " " + textfield_content2;
					}
					summary_filterpanel_module_sql = sql_str1 + " " +filtertype_radio + " " + sql_str2;
	    			//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var virtual_dbname = cdcombination_sql;
	    			var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;			
					grid_store_reload(Ext.getCmp("large_summary_panel_showresult_gridpanel").store,pageSize,Ext.getCmp("GroupBy_PagingToolbar"),virtual_dbname,sql);			
					large_summary_panel_filterwinpanel.hide();
					
				}
				else if(textfield_content2.length==0 && filterfield_combox2.length ==0 && filtertype_combox2.length==0){
					summary_filterpanel_module_sql = sql_str1;
	    			//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var virtual_dbname = cdcombination_sql;
	    			var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;			
					grid_store_reload(Ext.getCmp("large_summary_panel_showresult_gridpanel").store,pageSize,Ext.getCmp("GroupBy_PagingToolbar"),virtual_dbname,sql);				
					large_summary_panel_filterwinpanel.hide();
				}
				else{
					Ext.Msg.alert('��ʾ','��ɸѡ����������������д!');	
				}
			}	
		}
		
		function fun_summary_filterclear(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
				Ext.getCmp('large_summary_panel_filterpanel_textfield1').reset();
				Ext.getCmp('large_summary_panel_filterpanel_textfield2').reset();
				Ext.getCmp('large_summary_panel_filterpanel_groupname1').reset();
				Ext.getCmp('large_summary_panel_filterpanel_groupname2').reset();
				Ext.getCmp('large_summary_panel_filterpanel_groupmath1').reset();
				Ext.getCmp('large_summary_panel_filterpanel_groupmath2').reset();		
				summary_filterpanel_module_sql = ' ';
	    		//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
				var virtual_dbname = cdcombination_sql;
	    		var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;			
				grid_store_reload(Ext.getCmp("large_summary_panel_showresult_gridpanel").store,pageSize,Ext.getCmp("GroupBy_PagingToolbar"),virtual_dbname,sql);			
			}			
		}
		    	        
	    function fun_cdc_export(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
				//export rights
				Ext.Ajax.request({      
					 url: 'GetCDCexportRows',
			         params: {rights:rightspk},      
			         callback : function(options, success, response) {   
			            if(success){ 
			            	var erows = Ext.getCmp('CDCombination_gridpanel').store.getCount();
			            	var data = trim(response.responseText);	
			            	exportRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɵ�����
			            	var exportedRows = trim(data.split("@")[1]);  //�����Ѿ���������
			            	var exportedObs =  trim(data.split("@")[2]);  //�����Ѿ���������	
			            	var exportRowsOfRights = parseInt(trim(data.split("@")[3]));  //Ȩ�޵��µ�������
			            	var exportObsOfRights = parseInt(trim(data.split("@")[4]));   //Ȩ�޵��µ�������	            	
			            	if(exportedObs == ''){
								if(erows > exportRowNum){
									Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܵ���'+exportRowNum+'��!');
								}
								else{
								    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ����?',callback);
								    function callback(id){
								   		if(id == 'yes'){
										  exported(Ext.getCmp('CDCombination_gridpanel')); 
											//record export rows						
								    		Ext.Ajax.request({      
								    			 url: 'SaveCDCExportActions',
									             params: {rights:rightspk,exportbutton:4,exportedrows:erows,sysfunid:sysfunStr},      
									             callback : function(options, success, response) {}
									        });							  
								   		}
								    }
								}
			            	}
			            	else{	
				            	var exportedRows = parseInt(trim(data.split("@")[1])); 
				            	var exportedObs = parseInt(trim(data.split("@")[2])); 	            		
								if(erows > exportRowNum){
									Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܵ���'+exportRowNum+'��!');
								}	            	
				            	else if(exportedObs+1 > exportObsOfRights){
				            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
				            	}
				            	else if(exportedRows+erows > exportRowsOfRights){
				            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
				            	}
								else{		   						
								    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ����?',callback);
								    function callback(id){
								   		if(id == 'yes'){
										  exported(Ext.getCmp('CDCombination_gridpanel')); 
											//record export rows						
								    		Ext.Ajax.request({      
								    			 url: 'SaveCDCExportActions',
									             params: {rights:rightspk,exportbutton:4,exportedrows:erows,sysfunid:sysfunStr},      
									             callback : function(options, success, response) {}
									        });							  
								   		}
								    }				       								        					
								}
			            	}
			            }else {		                	
			             	Ext.MessageBox.alert('����',"�����д���!");   
			            }   
			        }
			    });	
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿɵ���!');
			}
		}     
	    
	    function fun_cdc_submit(){
	    	sysfunStr = '';
			var store_count = thirdGridStore.getCount();
			var name_array = [],uniquename_array = [];
			if(store_count>1){
				for(var i=0;i<store_count;i++){
					name_array.push(thirdGridStore.data.items[i].data.dimension);
					/*�������ݿ�*/
					if(i == store_count-1)
						sysfunStr = sysfunStr + thirdGridStore.data.items[i].data.name.replace('--','');
					else
						sysfunStr = sysfunStr + thirdGridStore.data.items[i].data.name.replace('--','') + ',';
				}
				uniquename_array = ArrayUnique(name_array);		
				if(uniquename_array.length>1){
					Ext.Msg.alert('��ʾ','����ϸ�̶ֳ���һ��,������ѡ��ϲ����ݼ�!');
				}
				else{
					/*��ȡdimension*/
					var data = thirdGridStore.data.items[0].data;
					dimension = data.dimension;
					if(dimension == "������" || dimension == "���س���") drillleastlevel = "district";
					else if(dimension == "�ؼ���") drillleastlevel = "city";
					else if(dimension == "ʡ��") drillleastlevel = "province";
					else if(dimension == "�й�") drillleastlevel = "china";
											
					var dbname_str="",dataindex_str = "";
					for(var i=0;i<store_count;i++){
						dbname_str = dbname_str + "@" + thirdGridStore.data.items[i].data.dbname;
						dataindex_str = dataindex_str + "@" + thirdGridStore.data.items[i].data.dataindex;
					}	
					dbname_str = trim(dbname_str.substring(1,dbname_str.length));
					dataindex_str = trim(dataindex_str.substring(1,dataindex_str.length));
			
				   /***************************
				     * ## ��ȡ�ϲ����ݵ�sql
				   ****************************/ 
					Ext.getBody().mask("���Ե�,���ڴ�������...","x-mask-loading");
					Ext.Ajax.request({ 
						url : 'GetCDCombinationSql', 
						method : 'post', 
						params : { 
							dbname : dbname_str,
							dataindex : dataindex_str,
							dimension : dimension
						}, 
						success : function(response, options) { 
							Ext.getBody().unmask();
							cdcombination_sql = response.responseText;//ȫ�ֱ���
							//����column model
							var jsoncolumnmodel = "";						
							for(var i = 0;i<store_count;i++){
								var name = thirdGridStore.data.items[i].data.field;
								var field = thirdGridStore.data.items[i].data.dataindex;
								var dbname = thirdGridStore.data.items[i].data.dbname;							
								if(name.indexOf("+")>=0){
									var name_array = name.split("+");
									var field_array = field.split("+");
									for(var j =0;j<name_array.length;j++){										
										if(trim(name_array[j]) == "��������" || trim(name_array[j]) == "ҽԺ����"){
											jsoncolumnmodel = jsoncolumnmodel + "{header:'"+trim(name_array[j])+"_"+(i+1)+"',dataIndex:'"+trim(field_array[j])+"_"+(i+1)+"',align:'left',width:160,sortable:false},";										
										}
										else{
											jsoncolumnmodel = jsoncolumnmodel + "{header:'"+trim(name_array[j])+"_"+(i+1)+"',dataIndex:'"+trim(field_array[j])+"_"+(i+1)+"',align:'right',width:160,xtype:'numbercolumn',format:'0,00.0',sortable:false},";	
										}									
									}
								}
								else{
									if(trim(name) == "��������" || trim(name) == "ҽԺ����"){
										jsoncolumnmodel = jsoncolumnmodel + "{header:'"+name+"_"+(i+1)+"',dataIndex:'"+field+"_"+(i+1)+"',align:'left',width:160,sortable: false},";
									}
									else{
										jsoncolumnmodel = jsoncolumnmodel + "{header:'"+name+"_"+(i+1)+"',dataIndex:'"+field+"_"+(i+1)+"',align:'right',width:160,xtype:'numbercolumn',format : '0,00.0',sortable: false},";
									}
								}
							}
							jsoncolumnmodel = jsoncolumnmodel.substring(0,jsoncolumnmodel.length-1);
							var columnnamedataindex = "";
							var numcolumnpoint = 0;
							if(dimension == "�й�"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'���',dataIndex:'year_id',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 2;
							}						
							else if(dimension == "ʡ��"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'���',dataIndex:'year_id',width:100,sortable:false},{header:'ʡ��',dataIndex:'province',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 3;
							}
							else if(dimension == "�ؼ���"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'���',dataIndex:'year_id',width:100,sortable:false},{header:'ʡ��',dataIndex:'province',width:100,sortable:false},{header:'�ؼ���',dataIndex:'city',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 4;
							}
							else if(dimension == "������"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'���',dataIndex:'year_id',width:100,sortable:false},{header:'ʡ��',dataIndex:'province',width:100,sortable:false},{header:'�ؼ���',dataIndex:'city',width:100,sortable:false},{header:'������',dataIndex:'district',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 5;
							}
						    var virtual_dbname = cdcombination_sql;//"(" + cdcombination_sql + ") as cdc_temp_inner";
							Create_GridPanel_Remote(virtual_dbname,columnnamedataindex,pageSize,numcolumnpoint,cdcombination_sql);
							
							//����������treenode
							if(drillleastlevel == "china"){
								var large_newcolumn_panel_tree_root=new Ext.tree.AsyncTreeNode({   
							        id:"large_newcolumn_panel_tree_root",     
							        expanded:true,
						        	text :'ָ��',       	
						        	children : eval(fun_tree_listname_onlyfield(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point))		       
								});	
							}
							else{
								var large_newcolumn_panel_tree_root=new Ext.tree.AsyncTreeNode({   
							        id:"large_newcolumn_panel_tree_root",     
							        expanded:true,
						        	text :'ָ��',       	
						        	children : eval(fun_tree_listname_onlyfield(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1))		       
								});														
							}
							large_newcolumn_panel_tree.setRootNode(large_newcolumn_panel_tree_root);
							//�������ɸѡ�����������õ�����
							sort_module_sql = ' ';
			    			filter_module_sql = ' '; 
			    			newcolumn_module_sql = ' ';	
							large_sort_panel_store.removeAll();
							large_filter_panel_gridpanel_store.removeAll();
							large_filter_panel_onlyread_gridpanel_store.removeAll();
							large_newcolumn_panel_onlyread_gridpanel_store.removeAll();											
						},
						failure : function(response, options) {
							Ext.getBody().unmask();
							Ext.Msg.alert('����','��������!');
						}					
					});	
				}	
			} 
			else{
				Ext.Msg.alert('��ʾ','������Ҫ�����ϲ�����Դ!');
			}
	    }
	    
	    function fun_cdc_removeall(){
			Ext.MessageBox.confirm('��ʾ','ȷ����Ҫɾ�������?',callback);
			function callback(id){
				if(id == 'yes'){
			    	cdcombination_sql = ' ';
					if (Ext.getCmp("CDCombination_gridpanel_store") != undefined) {
					    Ext.getCmp("CDCombination_gridpanel_store").remove();
					}
					if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
					    Ext.getCmp("CDCombination_gridpanel").destroy();
					}
					if (Ext.getCmp("CDCombination_gridpanel_PagingToolbar") != undefined) {
					    Ext.getCmp("CDCombination_gridpanel_PagingToolbar").destroy();
					}
					if (Ext.getCmp("CDCombination_gridpanel_rightMenu") != undefined) {
					    Ext.getCmp("CDCombination_gridpanel_rightMenu").destroy();
					}
	    			sort_module_sql = ' ';
	    			filter_module_sql = ' '; 
	    			newcolumn_module_sql = ' ';
					cdcombination_sql = ' ';	
					large_sort_panel_store.removeAll();
					large_filter_panel_gridpanel_store.removeAll();
					large_filter_panel_onlyread_gridpanel_store.removeAll();
					large_newcolumn_panel_onlyread_gridpanel_store.removeAll();				
				}
			}    	
	    }
	    
		function Create_GridPanel_Remote(_dbname,_columndataindex,_pageSize,_numcolumnpoint,_sql) {
			if (Ext.getCmp("CDCombination_gridpanel_store") != undefined) {
			    Ext.getCmp("CDCombination_gridpanel_store").remove();
			}
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
			    Ext.getCmp("CDCombination_gridpanel").destroy();
			}
			if (Ext.getCmp("CDCombination_gridpanel_PagingToolbar") != undefined) {
			    Ext.getCmp("CDCombination_gridpanel_PagingToolbar").destroy();
			}		
			if (Ext.getCmp("CDCombination_gridpanel_rightMenu") != undefined) {
			    Ext.getCmp("CDCombination_gridpanel_rightMenu").destroy();
			}			
			
			var CDCombination_gridpanel_store = new Ext.data.Store({//���÷������ݼ�
				id : 'CDCombination_gridpanel_store',
				autoLoad: {params:{start:0,limit:_pageSize}},
				reader: new Ext.data.JsonReader(),
				proxy : new Ext.data.HttpProxy({
					url : 'GetCDCombinationGridstorePage'
				})
			});
			
			CDCombination_gridpanel_store.on('beforeload', function(store,options) 
			{ 
				var new_params={sql:_sql,numcolumnpoint:_numcolumnpoint,dbname:_dbname}; 
				Ext.apply(options.params,new_params); 
			});
			    
		    var CDCombination_gridpanel_PagingToolbar = new Ext.PagingToolbar({
	    		id  :'CDCombination_gridpanel_PagingToolbar',
			    store: CDCombination_gridpanel_store,
			    pageSize:_pageSize,
			    displayInfo:true,
			    displayMsg :'��{0}��-{1}����һ��{2}��',
		        onFirstLayout : function(){//�����������
	                if(this.dsLoaded){
	                    this.onLoad.apply(this, this.dsLoaded);
	                }
	                if(this.rendered && this.refresh){
	                    this.refresh.hide();
	                }
		        }		    
			}); 
			
			var CDCombination_gridpanel = new Ext.grid.GridPanel({
			    id: "CDCombination_gridpanel",
			    autoScroll: true,
			    border: false,
			    //viewConfig: {forceFit: true},
			    bbar : CDCombination_gridpanel_PagingToolbar,
			    loadMask: true,	
				stripeRows:true,
				containerScroll:true,
				trackMouseOver:true,				
			    cm: new Ext.grid.ColumnModel(eval("("+_columndataindex + ")")),
			    store: CDCombination_gridpanel_store
			});
			Ext.getCmp('dynamic_gridpanel').add(CDCombination_gridpanel)
			Ext.getCmp('dynamic_gridpanel').doLayout(); 	
			
			//�Ҽ�
			var CDCombination_gridpanel_rightMenu = new Ext.menu.Menu( {  
		    id : 'CDCombination_gridpanel_rightMenu',  
		    items : [
		    	{  
			        text:'��Ԫ����ظ�������',  
			        iconCls:'cellcopy',
			        tooltip:'���֮�󣬵���������ϵĸ��ư�ť������ְ',
			        handler:fun_cdcombination_cell_copy_nav  
			    },
		    '-',
		    	{  
			        text:'���м��ظ�������',  
			        iconCls:'copy',
			        tooltip:'���֮�󣬵���������ϵĸ��ư�ť������ְ',
			        handler:fun_cdcombination_row_copy_nav  
			    },
		    	{  	        
			        text:'���м��ظ���(������ͷ)����',  
			        iconCls:'copy_header',
			        handler:fun_cdcombination_row_copy_header_nav
			    }]  
			});
			
			CDCombination_gridpanel.addListener('rowcontextmenu', cdcombinationrightClickFn);
			function cdcombinationrightClickFn(grid, rowIndex, e) {  
			    e.preventDefault();  
			    CDCombination_gridpanel_rightMenu.showAt(e.getXY()); 
			}	
			
			CDCombination_gridpanel.addListener('cellcontextmenu',cdcombinationcellclick);  
			function cdcombinationcellclick(grid, rowIndex, columnIndex, e) {
				columnindex = columnIndex;
			}			
			function fun_cdcombination_cell_copy_nav(){
				fun_cell_copy(CDCombination_gridpanel,"cdcombination_copybutton");
			}		
			function fun_cdcombination_row_copy_nav(){
				fun_row_copy(CDCombination_gridpanel,"cdcombination_copybutton");
			}		
			function fun_cdcombination_row_copy_header_nav(){
				fun_row_copy_header(CDCombination_gridpanel,"cdcombination_copybutton");
			}
			
		}
		
	    function ReloadGridStore(textvalue){
			Ext.Ajax.request({      
				 url: 'GetAdvKWSearchCombinationData',   
				 params : { 
					findstr : textvalue
				 }, 
		         callback : function(options, success, response) {   
		            if(success){ 
		            	var returnmyData = trim(response.responseText);  
		            	firstGridStore.loadData(eval(returnmyData));
		            }else {		                	
		             	Ext.MessageBox.alert('����',"������ѡ��!");   
		            }   
		        }
		    });
	    }
		
		function fun_cell_copy(_grid,_buttonid){ 
			var select_model =_grid.getSelectionModel();	
			var selected_rows = select_model.getCount(); 
		    if(select_model.getSelected() == undefined) {  
		        Ext.Msg.alert('��ʾ','δѡ���κ�����!');  
		    }
		    else{
				if(selected_rows == 1){
					var record = select_model.getSelected();
					crows = 1;   //ȫ�ֱ���
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //ȫ�ֱ���
				            	var data = trim(response.responseText);				            	
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
									    var fieldName = _grid.getColumnModel().getDataIndex(columnindex);
										var info = record.get(fieldName);  
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
									    var fieldName = _grid.getColumnModel().getDataIndex(columnindex);
										var info = record.get(fieldName);  
										Ext.getCmp(_buttonid).setValue(info);				       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });
				}
				else{
					var info = "";
					var records = select_model.getSelections();					
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = records.length;   //ȫ�ֱ���
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
										var fieldName = _grid.getColumnModel().getDataIndex(columnindex);
										for(var i = 0 ;i <=records.length-1;i++){
											info = info + records[i].get(fieldName) +"\n"; 
										}
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
										var fieldName = _grid.getColumnModel().getDataIndex(columnindex);
										for(var i = 0 ;i <=records.length-1;i++){
											info = info + records[i].get(fieldName) +"\n"; 
										}
										Ext.getCmp(_buttonid).setValue(info);				       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });	
				}
		    }
		}
		
		function fun_row_copy(_grid,_buttonid){
			var select_model =_grid.getSelectionModel();
			var grid_col_model = _grid.getColumnModel();
			var selected_rows = select_model.getCount(); 		
		    if(select_model.getSelected() == undefined) {  
		        Ext.Msg.alert('��ʾ','δѡ���κ�����!');  
		    } 
		    else{
				if(selected_rows == 1){
					var info = "";
					var record = select_model.getSelected();						
					crows = 1;   //ȫ�ֱ���
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //ȫ�ֱ���
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
										var info = "";
										var record = select_model.getSelected();				
										var column_count = grid_col_model.getColumnCount();
										for(var i=1;i<column_count;i++){
											if(!grid_col_model.isHidden(i)){
												info = info + record.get(grid_col_model.getDataIndex(i)) + '\t';
											}
										} 
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
										var info = "";
										var record = select_model.getSelected();				
										var column_count = grid_col_model.getColumnCount();
										for(var i=1;i<column_count;i++){
											if(!grid_col_model.isHidden(i)){
												info = info + record.get(grid_col_model.getDataIndex(i)) + '\t';
											}
										} 
										Ext.getCmp(_buttonid).setValue(info);		       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });	
				}
				else{			
					var info = "";
					var records = select_model.getSelections();	
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = records.length;   //ȫ�ֱ���
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
										var column_count = grid_col_model.getColumnCount();
										for(var k = 0 ;k <records.length;k++){
											var row_info = "";
											for(var i=1;i<column_count;i++){
												if(!grid_col_model.isHidden(i)){
													row_info = row_info + records[k].get(grid_col_model.getDataIndex(i)) + '\t';
												}
											}
											info = info + row_info + "\n";
										}				
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
										var column_count = grid_col_model.getColumnCount();
										for(var k = 0 ;k <records.length;k++){
											var row_info = "";
											for(var i=1;i<column_count;i++){
												if(!grid_col_model.isHidden(i)){
													row_info = row_info + records[k].get(grid_col_model.getDataIndex(i)) + '\t';
												}
											}
											info = info + row_info + "\n";
										}				
										Ext.getCmp(_buttonid).setValue(info);				       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });	
				}
		    }			
		}
		
		function fun_row_copy_header(_grid,_buttonid){
			var select_model =_grid.getSelectionModel();
			var grid_col_model = _grid.getColumnModel();
			var confObj = grid_col_model.config;
			var selected_rows = select_model.getCount(); 		
		    if(select_model.getSelected() == undefined) {  
		        Ext.Msg.alert('��ʾ','δѡ���κ�����!');  
		    } 
		    else{
				if(selected_rows == 1){
					var info_header = "";
					var row_info = "";
					var record = select_model.getSelected();	
					crows = 1;   //ȫ�ֱ���
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //ȫ�ֱ���
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
										var column_count = grid_col_model.getColumnCount();
										for(var i=1;i<column_count;i++){
											if(!grid_col_model.isHidden(i)){
												info_header = info_header + confObj[i].header + '\t';
												row_info = row_info + record.get(grid_col_model.getDataIndex(i)) + '\t';
											}
										}
										var info  = info_header + '\n' + row_info;				
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
										var column_count = grid_col_model.getColumnCount();
										for(var i=1;i<column_count;i++){
											if(!grid_col_model.isHidden(i)){
												info_header = info_header + confObj[i].header + '\t';
												row_info = row_info + record.get(grid_col_model.getDataIndex(i)) + '\t';
											}
										}
										var info  = info_header + '\n' + row_info;				
										Ext.getCmp(_buttonid).setValue(info);			       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });		
				}
				else{				
					var info = "";
					var records = select_model.getSelections();
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = records.length;   //ȫ�ֱ���
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //��ǰҳ�ɸ�����
				            	var copyedRows = trim(data.split("@")[1]);  //�����Ѿ���������
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //Ȩ�޵��¸�������	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}
									else{
										var column_count = grid_col_model.getColumnCount();
										for(var k = 0 ;k <records.length;k++){
											var info_header = "";
											var row_info = "";
											for(var i=1;i<column_count;i++){
												if(!grid_col_model.isHidden(i)){
													info_header = info_header + confObj[i].header + '\t';
													row_info = row_info + records[k].get(grid_col_model.getDataIndex(i)) + '\t';
												}
											}
											info = info + row_info + "\n";
										}
										info = info_header + '\n' + info;
										Ext.getCmp(_buttonid).setValue(info);
									}
				            	}
				            	else{	
					            	var copyedRows = parseInt(trim(data.split("@")[1]));  	            		
									if(crows > copyRowNum){
										Ext.Msg.alert('��ʾ','���˻�Ȩ��ֻ�ܸ���'+copyRowNum+'��!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('��ʾ','���˻��ڵ����Ѿ��ۼƳ�����������!');
					            	}
									else{		   						
										var column_count = grid_col_model.getColumnCount();
										for(var k = 0 ;k <records.length;k++){
											var info_header = "";
											var row_info = "";
											for(var i=1;i<column_count;i++){
												if(!grid_col_model.isHidden(i)){
													info_header = info_header + confObj[i].header + '\t';
													row_info = row_info + records[k].get(grid_col_model.getDataIndex(i)) + '\t';
												}
											}
											info = info + row_info + "\n";
										}
										info = info_header + '\n' + info;
										Ext.getCmp(_buttonid).setValue(info);			       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
				            }   
				        }
				    });	
				}
		    }		
		}
				
	  /***************************
	     * ## ͼ��ʼ
	   ****************************/
		//����ͼ
	    function fun_barchart(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {	    	
		    	barchart_winpanel.show();    	
		    	if(activeaccording_id == 0.0 ){
		    		if(drillleastlevel == "china"){	  
			    		Ext.getCmp('singlebarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('singlebarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('singlebarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('singlebarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 0.1 ){
		        	if(drillleastlevel == "china"){	
		        		Ext.getCmp('multibarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('multibarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		        	}
		        	else{
		        		Ext.getCmp('multibarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('multibarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function barchart_summit(){
	    	if(activeaccording_id == 0.0 ){    		
				var caption = Ext.getCmp('singlebarchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlebarchart_charttype').getValue();
				var charttype = Ext.getCmp('singlebarchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singlebarchart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlebarchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlebarchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlebarchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singlebarchart_subtitle').getValue();
				var haxisname = Ext.getCmp('singlebarchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('singlebarchart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('barchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;	
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({ 
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("barchartContainer",charttypeid,0,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		            	    	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  													
				}
	    	}
	    	else if(activeaccording_id == 0.1){    		
				var caption = Ext.getCmp('multibarchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multibarchart_charttype').getValue();
				var charttype = Ext.getCmp('multibarchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multibarchart_haxis').getValue();
				var haxisfield = Ext.getCmp('multibarchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multibarchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multibarchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('multibarchart_subtitle').getValue();
				var haxisname = Ext.getCmp('multibarchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('multibarchart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('barchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}
			                	if(charttype == "��ά�ѻ�����ͼ(100%)" || charttype == "��ά�ѻ�����ͼ(100%)"){
			                		renderCharts("barchartContainer",charttypeid,1.1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                	}
			                	else{
			                		renderCharts("barchartContainer",charttypeid,1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                	}
			                }else {                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	} 
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }
		//����ͼ        
	    function fun_columnchart(){ 
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {	    	
		    	columnchart_winpanel.show();
		    	if(activeaccording_id == 1.0 ){
		    		if(drillleastlevel == "china"){	
		    			Ext.getCmp('singlecolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('singlecolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
		    			Ext.getCmp('singlecolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('singlecolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 1.1 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multicolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('multicolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		        	}
		        	else{
			        	Ext.getCmp('multicolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('multicolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	        			        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function columnchart_summit(){
	    	if(activeaccording_id == 1.0 ){    		
				var caption = Ext.getCmp('singlecolumnchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlecolumnchart_charttype').getValue();
				var charttype = Ext.getCmp('singlecolumnchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singlecolumnchart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlecolumnchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlecolumnchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlecolumnchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singlecolumnchart_subtitle').getValue();
				var haxisname = Ext.getCmp('singlecolumnchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('singlecolumnchart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('columnchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("columnchartContainer",charttypeid,0,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else if(activeaccording_id == 1.1){    		
				var caption = Ext.getCmp('multicolumnchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multicolumnchart_charttype').getValue();
				var charttype = Ext.getCmp('multicolumnchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multicolumnchart_haxis').getValue();
				var haxisfield = Ext.getCmp('multicolumnchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multicolumnchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multicolumnchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('multicolumnchart_subtitle').getValue();
				var haxisname = Ext.getCmp('multicolumnchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('multicolumnchart_vaxisname').getValue();	
				var showlabel = 0;
				var checked = Ext.getCmp('columnchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}		                			              
			                	renderCharts("columnchartContainer",charttypeid,1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}		
	    	} 
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }
	
		//����ͼ        
	    function fun_linechart(){ 
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	linechart_winpanel.show();
		    	if(activeaccording_id == 2.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singlelinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('singlelinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
						Ext.getCmp('singlelinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('singlelinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));
		    		}
		    	}
		        else if(activeaccording_id == 2.1 ){
		        	if(drillleastlevel == "china"){
		        		Ext.getCmp('multilinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('multilinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		        	}
		        	else{
		        		Ext.getCmp('multilinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('multilinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function linechart_summit(){    	
	    	if(activeaccording_id == 2.0 ){    		
				var caption = Ext.getCmp('singlelinechart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlelinechart_charttype').getValue();
				var charttype = Ext.getCmp('singlelinechart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singlelinechart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlelinechart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlelinechart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlelinechart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singlelinechart_subtitle').getValue();
				var haxisname = Ext.getCmp('singlelinechart_haxisname').getValue();
				var vaxisname = Ext.getCmp('singlelinechart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('linechart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("linechartContainer",charttypeid,0,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else if(activeaccording_id == 2.1){    		
				var caption = Ext.getCmp('multilinechart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multilinechart_charttype').getValue();
				var charttype = Ext.getCmp('multilinechart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multilinechart_haxis').getValue();
				var haxisfield = Ext.getCmp('multilinechart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multilinechart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multilinechart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('multilinechart_subtitle').getValue();
				var haxisname = Ext.getCmp('multilinechart_haxisname').getValue();
				var vaxisname = Ext.getCmp('multilinechart_vaxisname').getValue();	
				var showlabel = 0;
				var checked = Ext.getCmp('linechart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}		                			              
			                	renderCharts("linechartContainer",charttypeid,1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }
	    
		//���ͼ        
	    function fun_areachart(){  
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {     	
		    	areachart_winpanel.show();
		    	if(activeaccording_id == 3.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singleareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('singleareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
		    			Ext.getCmp('singleareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('singleareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 3.1 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multiareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('multiareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		        	}
		        	else{
		        		Ext.getCmp('multiareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('multiareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function areachart_summit(){    	
	    	if(activeaccording_id == 3.0 ){    		
				var caption = Ext.getCmp('singleareachart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singleareachart_charttype').getValue();
				var charttype = Ext.getCmp('singleareachart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singleareachart_haxis').getValue();
				var haxisfield = Ext.getCmp('singleareachart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singleareachart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singleareachart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singleareachart_subtitle').getValue();
				var haxisname = Ext.getCmp('singleareachart_haxisname').getValue();
				var vaxisname = Ext.getCmp('singleareachart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('areachart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("areachartContainer",charttypeid,0,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else if(activeaccording_id == 3.1){    		
				var caption = Ext.getCmp('multiareachart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multiareachart_charttype').getValue();
				var charttype = Ext.getCmp('multiareachart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multiareachart_haxis').getValue();
				var haxisfield = Ext.getCmp('multiareachart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multiareachart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multiareachart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('multiareachart_subtitle').getValue();
				var haxisname = Ext.getCmp('multiareachart_haxisname').getValue();
				var vaxisname = Ext.getCmp('multiareachart_vaxisname').getValue();	
				var showlabel = 0;
				var checked = Ext.getCmp('areachart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}		                			              
			                	renderCharts("areachartContainer",charttypeid,1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    } 
	
		//��ͼ        
	    function fun_piechart(){    
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	piechart_winpanel.show();
		    	if(activeaccording_id == 4.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singlepiechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
		    			Ext.getCmp('singlepiechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
		    			Ext.getCmp('singlepiechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
		    			Ext.getCmp('singlepiechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function piechart_summit(){    	
	    	if(activeaccording_id == 4.0 ){    		
				var caption = Ext.getCmp('singlepiechart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlepiechart_charttype').getValue();
				var charttype = Ext.getCmp('singlepiechart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singlepiechart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlepiechart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlepiechart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlepiechart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singlepiechart_subtitle').getValue();
				var haxisname = "";//Ext.getCmp('singlepiechart_haxisname').getValue();
				var vaxisname = "";//Ext.getCmp('singlepiechart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('piechart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/��ǩ/ָ�����Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("piechartContainer",charttypeid,2.1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }    
	      
		//ɢ��ͼ     
	    function fun_scatterchart(){  
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	scatterchart_winpanel.show();
		    	if(activeaccording_id == 5.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlescatterchart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('singlescatterchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
			    		Ext.getCmp('singlescatterchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('singlescatterchart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('singlescatterchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));
			    		Ext.getCmp('singlescatterchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    }     
	    function scatterchart_summit(){    	
	    	if(activeaccording_id == 5.0 ){    		
				var caption = Ext.getCmp('singlescatterchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlescatterchart_charttype').getValue();
				var charttype = Ext.getCmp('singlescatterchart_charttype').getRawValue();
				var labelvalue = Ext.getCmp('singlescatterchart_label').getValue();
				var haxisvalue = Ext.getCmp('singlescatterchart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlescatterchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlescatterchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlescatterchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singlescatterchart_subtitle').getValue();
				var haxisname =  Ext.getCmp('singlescatterchart_haxisname').getValue();
				var vaxisname =  Ext.getCmp('singlescatterchart_vaxisname').getValue();
				var showlabel = 0;
				var showregression = 0;
				var checked = Ext.getCmp('scatterchart_label').getValue();
				if(checked) showregression = 1;else showregression = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/XYָ�����Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCScatterChart',        
			             params: {sql:sql,label:labelvalue,haxis:haxisvalue,vaxis:vaxisvalue,showregression:showregression,dbname:database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	data = replaceAll(data,vaxisvalue,vaxisfield);
			                	data = replaceAll(data,haxisvalue,haxisfield);
			                	renderCharts("scatterchartContainer",charttypeid,3,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	 		else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }
	    
		//Բ��ͼ       
	    function fun_doughnutchart(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	doughnutchart_winpanel.show();
		    	if(activeaccording_id == 6.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singledoughnutchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('singledoughnutchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('singledoughnutchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('singledoughnutchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function doughnutchart_summit(){    	
	    	if(activeaccording_id == 6.0 ){    		
				var caption = Ext.getCmp('singledoughnutchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singledoughnutchart_charttype').getValue();
				var charttype = Ext.getCmp('singledoughnutchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singledoughnutchart_haxis').getValue();
				var haxisfield = Ext.getCmp('singledoughnutchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singledoughnutchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singledoughnutchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('singledoughnutchart_subtitle').getValue();
				var haxisname = "";//Ext.getCmp('singledoughnutchart_haxisname').getValue();
				var vaxisname = "";//Ext.getCmp('singledoughnutchart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('doughnutchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/��ǩ/ָ�����Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	renderCharts("doughnutchartContainer",charttypeid,2.1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }
	    
		//����ͼ     
	    function fun_bubblechart(){   
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	bubblechart_winpanel.show();
		    	if(activeaccording_id == 7.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlebubblechart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('singlebubblechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
			    		Ext.getCmp('singlebubblechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
			    		Ext.getCmp('singlebubblechart_zaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('singlebubblechart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('singlebubblechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));
			    		Ext.getCmp('singlebubblechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));
			    		Ext.getCmp('singlebubblechart_zaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    }     
	    function bubblechart_summit(){    	
	    	if(activeaccording_id == 7.0 ){    		
				var caption = Ext.getCmp('singlebubblechart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlebubblechart_charttype').getValue();
				var charttype = Ext.getCmp('singlebubblechart_charttype').getRawValue();
				var labelvalue = Ext.getCmp('singlebubblechart_label').getValue();
				var haxisvalue = Ext.getCmp('singlebubblechart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlebubblechart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlebubblechart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlebubblechart_vaxis').getRawValue();
				var zaxisvalue = Ext.getCmp('singlebubblechart_zaxis').getValue();
				var zaxisfield = Ext.getCmp('singlebubblechart_zaxis').getRawValue();			
				var subcaption = Ext.getCmp('singlebubblechart_subtitle').getValue();
				var haxisname =  Ext.getCmp('singlebubblechart_haxisname').getValue();
				var vaxisname =  Ext.getCmp('singlebubblechart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('bubblechart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;
				var showquadrant = 0;
				var checked = Ext.getCmp('bubblechart_quadrant').getValue();
				if(checked) showquadrant = 1;else showquadrant = 0;						
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0 || trim(zaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/XYZָ�����Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCBubbleChart',        
			             params: {sql:sql,label:labelvalue,haxis:haxisvalue,vaxis:vaxisvalue,zaxis:zaxisvalue,dbname:database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	data = replaceAll(data,vaxisvalue,vaxisfield);
			                	data = replaceAll(data,haxisvalue,haxisfield);
			                	//data = replaceAll(data,zaxisvalue,zaxisfield);
			                	showlabel = showlabel.toString() +'@'+ showquadrant.toString();
			                	renderCharts("bubblechartContainer",charttypeid,4,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	}
	 		else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    } 
	    
		//�״�ͼ
	    function fun_radarchart(){ 
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	radarchart_winpanel.show();
		        if(activeaccording_id == 8.0 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multiradarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('multiradarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		        	}
		        	else{
			        	Ext.getCmp('multiradarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('multiradarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function radarchart_summit(){
	    	if(activeaccording_id == 8.0){    		
				var caption = Ext.getCmp('multiradarchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multiradarchart_charttype').getValue();
				var charttype = Ext.getCmp('multiradarchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multiradarchart_haxis').getValue();
				var haxisfield = Ext.getCmp('multiradarchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multiradarchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multiradarchart_vaxis').getRawValue();
				var subcaption = Ext.getCmp('multiradarchart_subtitle').getValue();
				var haxisname = "";//Ext.getCmp('multiradarchart_haxisname').getValue();
				var vaxisname = "";//Ext.getCmp('multiradarchart_vaxisname').getValue();
				var showlabel = 0;
				var checked = Ext.getCmp('radarchart_label').getValue();
				if(checked) showlabel = 1;else showlabel = 0;			
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiBarChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,dbname : database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}		                			              
			                	renderCharts("radarchartContainer",charttypeid,5,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  												
				}
	    	} 
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    } 
	    
		//���ͼ
	    function fun_combinedchart(){    
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	combinedchart_winpanel.show();
		    	if(activeaccording_id == 9.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlecombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('singlecombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('singlecombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('singlecombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
		    	else if(activeaccording_id == 9.1){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('multicombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"С��")));
			    		Ext.getCmp('multicombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"����")));
		    		}
		    		else{
			    		Ext.getCmp('multicombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"С��")));
			    		Ext.getCmp('multicombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"����")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('��ʾ','û�����ݿ�ͼ��!');
			}
	    } 
	    
	    function combinedchart_summit(){
	    	if(activeaccording_id == 9.0 ){    		
				var caption = Ext.getCmp('singlecombinedchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('singlecombinedchart_charttype').getValue();
				var charttype = Ext.getCmp('singlecombinedchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('singlecombinedchart_haxis').getValue();
				var haxisfield = Ext.getCmp('singlecombinedchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('singlecombinedchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('singlecombinedchart_vaxis').getRawValue();
				var vtylevalue = Ext.getCmp('singlecombinedchart_vtyle').getValue();
				//var vtylefield = Ext.getCmp('singlecombinedchart_vtyle').getRawValue();			
				var showvalue = Ext.getCmp('singlecombinedchart_showlabel').getValue();
				//var showfield = Ext.getCmp('singlecombinedchart_showlabel').getRawValue();						
				var subcaption = Ext.getCmp('singlecombinedchart_subtitle').getValue();
				var haxisname = Ext.getCmp('singlecombinedchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('singlecombinedchart_vaxisname').getValue();
				var showlabel = 0;
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else if(single_index == 1){
					Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');	
				}
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCSingleCombinedChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,vcharttype:vtylevalue,showvalue:showvalue,dbname:database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}	
			                	
			                	renderCharts("combinedchartContainer",charttypeid,6,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  													
				}
	    	}
	    	else if(activeaccording_id == 9.1 ){    		
				var caption = Ext.getCmp('multicombinedchart_majortitle').getValue();
				var charttypeid = Ext.getCmp('multicombinedchart_charttype').getValue();
				var charttype = Ext.getCmp('multicombinedchart_charttype').getRawValue();
				var haxisvalue = Ext.getCmp('multicombinedchart_haxis').getValue();
				var haxisfield = Ext.getCmp('multicombinedchart_haxis').getRawValue();
				var vaxisvalue = Ext.getCmp('multicombinedchart_vaxis').getValue();
				var vaxisfield = Ext.getCmp('multicombinedchart_vaxis').getRawValue();
				var vtylevalue = Ext.getCmp('multicombinedchart_vtyle').getValue();
				//var vtylefield = Ext.getCmp('multicombinedchart_vtyle').getRawValue();			
				var showvalue = Ext.getCmp('multicombinedchart_showlabel').getValue();
				//var showfield = Ext.getCmp('multicombinedchart_showlabel').getRawValue();						
				var subcaption = Ext.getCmp('multicombinedchart_subtitle').getValue();
				var haxisname = Ext.getCmp('multicombinedchart_haxisname').getValue();
				var vaxisname = Ext.getCmp('multicombinedchart_vaxisname').getValue();
				var secondaxisvalue = Ext.getCmp('multicombinedchart_secondaxis').getValue();
				var showlabel = 0;
				if(trim(charttypeid).length == 0 || trim(haxisvalue).length == 0 || trim(vaxisvalue).length == 0){
					Ext.Msg.alert('����','ͼ������/����/���᲻��Ϊ��!');
				}
				else if(multi_index == 1){
					Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');	
				}
				else if(secondaxisvalue.length == 0){
	    			Ext.Msg.alert('����','������Ҫһ������!');			 
				}				
				else if(Ext.getCmp('multicombinedchart_vaxis').getValue() == secondaxisvalue){
	    			Ext.Msg.alert('����','������Ҫһ������!');			
				}			
				else{
					var sql = ' ' + '@' + ' ' + '@' + filter_module_sql + '@' + sort_module_sql + '@' + newcolumn_module_sql;
					//var database = "(" + cdcombination_sql + ") as cdc_temp_inner";
					var database = cdcombination_sql;
		    		Ext.Ajax.request({      
			             url: 'GetCDCMultiCombinedChart',        
			             params: {sql:sql,haxis:haxisvalue,vaxis:vaxisvalue,vcharttype:vtylevalue,showvalue:showvalue,secondaxisvalue:secondaxisvalue,dbname:database},      
			             callback : function(options, success, response) {   
			                if(success){ 
			                	var data = trim(response.responseText);
			                	if(vaxisfield.indexOf(",")>=0){
			                		var vaxi_fieldarray = vaxisfield.split(",");
			                		var vaxi_valuearray = vaxisvalue.split(",");
			                		for(var i=0; i<=vaxi_fieldarray.length-1;i++){
			                			data = data.replace(trim(vaxi_valuearray[i]),trim(vaxi_fieldarray[i]));
			                		}		                		
			                	}else{
			                		data = data.replace(vaxisvalue,vaxisfield);
			                	}
			                	renderCharts("combinedchartContainer",charttypeid,6,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                }else {		                	
			                 	Ext.MessageBox.alert('����',"�����д���,������ѡ��!");   
			                }   
			            }
			        });  													
				}
	    	}    	
	    	else{
	    		Ext.Msg.alert('��ʾ',"������չ������<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>�۵���ť!");
	    	}
	    }    
	          
	   /***************************
	     * ## ͼ�����ɺ���
	     * 	@@����ͼ
	     * 	 	$$render_singlebarchart(_grid,_fieldstr_point): ��ά������ͼ����
	     *   	$$render_multibarchart(_grid,_fieldstr_point): ��ά������ͼ����
	     * 	 	$$render_singlecolumnchart(_grid,_fieldstr_point): ��ά������ͼ����
	     *   	$$render_multicolumnchart(_grid,_fieldstr_point): ��ά������ͼ����
	     * 	 	$$render_singlelinechart(_grid,_fieldstr_point): ��ά������ͼ����
	     *   	$$render_multilinechart(_grid,_fieldstr_point): ��ά������ͼ����
	     * 	 	$$render_singleareachart(_grid,_fieldstr_point): ��ά������ͼ����
	     *   	$$render_multiareachart(_grid,_fieldstr_point): ��ά������ͼ����
	     * 	 	$$render_singlepiechart(_grid,_fieldstr_point): ��ά�ȱ�ͼ����
	     * 	 	$$render_scatterchart(_grid,_fieldstr_point): ɢ��ͼ����
	     * 	 	$$render_singledoughnutchart(_grid,_fieldstr_point): Բ��ͼ����
	     * 	 	$$render_singlebubblechart(_grid,_fieldstr_point): ����ͼ����
	  	 *   	$$render_multiradarchart(_grid,_fieldstr_point): �״�ͼͼ���� 
	  	 *      $$render_singlecombinedchart(_grid,_fieldstr_point): ��ά�Ƚ��ͼ����  
	   ****************************/    
		function render_singlebarchart(_grid,_fieldstr_point){		
			var singlebarchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��ά����ͼ','column2d'],
		   			['��ά����ͼ','column3d'],
		   			['��ά����������ͼ','pareto2d'],
		   			['��ά����������ͼ','pareto3d']
		   		]
		   	});
			var singlebarchart_haxis_store = new Ext.data.SimpleStore({
			   id : 'singlebarchart_haxis_store',
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlebarchart_vaxis_store = new Ext.data.SimpleStore({
			   id : 'singlebarchart_vaxis_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singlebarchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlebarchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlebarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlebarchart_charttype',            
		        			store:singlebarchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'singlebarchart_haxis',            
		        			store:singlebarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									//alert(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��"))
									singlebarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlebarchart_vaxis',
		        			editable : true, 
		        			store:singlebarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }         
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlebarchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'singlebarchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'singlebarchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_multibarchart(_grid,_fieldstr_point){
			var multibarchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��ά����ͼ','mscolumn2d'],
		   			['��ά����ͼ','mscolumn3d'],
		   			['��ά�ѻ�����ͼ','stackedcolumn2d'],
		   			['��ά�ѻ�����ͼ','stackedcolumn3d'],
		   			['��ά�ѻ�����ͼ(100%)','stackedcolumn2d@1'],
		   			['��ά�ѻ�����ͼ(100%)','stackedcolumn3d@1']
		   		]
		   	});	 
			var multibarchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multibarchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var multibarchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multibarchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multibarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		                    listWidth:150,
		    				id:'multibarchart_charttype',            
		        			store:multibarchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			listeners:{ 
								'select' : function(combox,record,index){},
								'afterRender' : function(combox,record,index){
								}					
		        			}
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multibarchart_haxis',            
		        			store:multibarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){									
									multibarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multibarchart_vaxis',
		        			//editable : false, 
		        			store:multibarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multibarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multibarchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'multibarchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'multibarchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singlecolumnchart(_grid,_fieldstr_point){
			var singlecolumnchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��ά����ͼ','bar2d'],
		   			['��ά����ͼ','bar3d']
		   		]
		   	});	 
			var singlecolumnchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlecolumnchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singlecolumnchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlecolumnchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlecolumnchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_charttype',            
		        			store:singlecolumnchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_haxis',            
		        			store:singlecolumnchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecolumnchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_vaxis',
		        			//editable : false, 
		        			store:singlecolumnchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecolumnchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlecolumnchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'singlecolumnchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'singlecolumnchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}	
		
		function render_multicolumnchart(_grid,_fieldstr_point){
			var multicolumnchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��ά����ͼ','msbar2d'],
		   			['��ά����ͼ','msbar3d'],
		   			['��ά�ѻ�����ͼ','stackedbar2d'],
		   			['��ά�ѻ�����ͼ','stackedbar3d']	   			
		   		]
		   	});	 
			var multicolumnchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multicolumnchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var multicolumnchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multicolumnchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multicolumnchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_charttype',            
		        			store:multicolumnchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			listeners:{ 
								'select' : function(combox,record,index){},
								'afterRender' : function(combox,record,index){
								}					
		        			}
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_haxis',            
		        			store:multicolumnchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicolumnchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_vaxis',
		        			//editable : false, 
		        			store:multicolumnchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicolumnchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multicolumnchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'multicolumnchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'multicolumnchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singlelinechart(_grid,_fieldstr_point){
			var singlelinechart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['����ͼ','line']	,
		   			['ƽ������ͼ','spline']
		   		]
		   	});	 
			var singlelinechart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlelinechart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singlelinechart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlelinechart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlelinechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlelinechart_charttype',            
		        			store:singlelinechart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'singlelinechart_haxis',            
		        			store:singlelinechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlelinechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlelinechart_vaxis',
		        			//editable : false, 
		        			store:singlelinechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlelinechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlelinechart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'singlelinechart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'singlelinechart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}	
		
		function render_multilinechart(_grid,_fieldstr_point){
			var multilinechart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['����ͼ','msline'],
		   			['ƽ������ͼ','msspline']
		   		]
		   	});	 
			var multilinechart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multilinechart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var multilinechart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multilinechart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multilinechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'multilinechart_charttype',            
		        			store:multilinechart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multilinechart_haxis',            
		        			store:multilinechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multilinechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multilinechart_vaxis',
		        			//editable : false, 
		        			store:multilinechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multilinechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multilinechart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'multilinechart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'multilinechart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singleareachart(_grid,_fieldstr_point){
			var singleareachart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['���ͼ','area2d'],
		   			['ƽ�����ͼ','splinearea']
		   		]
		   	});	 
			var singleareachart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singleareachart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singleareachart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singleareachart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singleareachart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singleareachart_charttype',            
		        			store:singleareachart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'singleareachart_haxis',            
		        			store:singleareachart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singleareachart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singleareachart_vaxis',
		        			//editable : false, 
		        			store:singleareachart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singleareachart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singleareachart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'singleareachart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'singleareachart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}	
		
		function render_multiareachart(_grid,_fieldstr_point){
			var multiareachart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['���ͼ','MSArea'],
		   			['ƽ�����ͼ','mssplinearea'],
		   			['�ѻ����ͼ','stackedarea2d']	   			
		   		]
		   	});	 
			var multiareachart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multiareachart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var multiareachart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multiareachart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multiareachart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'multiareachart_charttype',            
		        			store:multiareachart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multiareachart_haxis',            
		        			store:multiareachart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiareachart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multiareachart_vaxis',
		        			//editable : false, 
		        			store:multiareachart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiareachart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multiareachart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'multiareachart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'multiareachart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singlepiechart(_grid,_fieldstr_point){
			var singlepiechart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��ά��ͼ','pie2d'],
					['��ά��ͼ','pie3d']
		   		]
		   	});	 
			var singlepiechart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlepiechart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singlepiechart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlepiechart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlepiechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlepiechart_charttype',            
		        			store:singlepiechart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '��ǩ',
		                    selectOnFocus:true,
		    				id:'singlepiechart_haxis',            
		        			store:singlepiechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'�������ǩָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlepiechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlepiechart_vaxis',
		        			//editable : false, 
		        			store:singlepiechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlepiechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            //collapsed : true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlepiechart_subtitle'
		                }
		            ]
		        }    
		        ]
		    });
		}

		function render_scatterchart(_grid,_fieldstr_point){
			var singlescatterchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['ɢ��ͼ','scatter']			
		   		]
		   	});	
			var singlescatterchart_label_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});		   	
			var singlescatterchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlescatterchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			  
			
		    var singlescatterchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlescatterchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlescatterchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_charttype',            
		        			store:singlescatterchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                }, 
						{
		                    xtype: 'combo',
		                    fieldLabel: '��ǩ',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_label',            
		        			store:singlescatterchart_label_store,
		        			mode: 'local',
		        			emptyText :'�������ǩ��',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_label_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },	                
						{
		                    xtype: 'combo',
		                    fieldLabel: 'Xָ����',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_haxis',            
		        			store:singlescatterchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'������Xָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			
		                },                
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Yָ����',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_vaxis',
		        			//editable : false, 
		        			store:singlescatterchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'������Yָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlescatterchart_subtitle'
		                },
		                {
		                    fieldLabel: 'X������',
		                    id: 'singlescatterchart_haxisname',
		                    emptyText :'������X������'
		                },
		                {
		                    fieldLabel: 'Y������',
		                    emptyText :'������Y������',
		                    id: 'singlescatterchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singledoughnutchart(_grid,_fieldstr_point){
			var singledoughnutchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['��άԲ��ͼ','doughnut2d'],
					['��άԲ��ͼ','doughnut3d']
		   		]
		   	});	 
			var singledoughnutchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singledoughnutchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var singledoughnutchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singledoughnutchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singledoughnutchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_charttype',            
		        			store:singledoughnutchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '��ǩ',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_haxis',            
		        			store:singledoughnutchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'�������ǩָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singledoughnutchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_vaxis',
		        			//editable : false, 
		        			store:singledoughnutchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singledoughnutchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            //collapsed : true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singledoughnutchart_subtitle'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singlebubblechart(_grid,_fieldstr_point){
			var singlebubblechart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['����ͼ','bubble']			
		   		]
		   	});	
			var singlebubblechart_label_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});		   	
			var singlebubblechart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlebubblechart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
			var singlebubblechart_zaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});			   
			  		
		    var singlebubblechart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlebubblechart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlebubblechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_charttype',            
		        			store:singlebubblechart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all'
		                }, 
						{
		                    xtype: 'combo',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_label',            
		        			store:singlebubblechart_label_store,
		        			mode: 'local',
		        			emptyText :'�������ǩ��',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_label_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },	                
						{
		                    xtype: 'combo',
		                    fieldLabel: 'Xָ����',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_haxis',            
		        			store:singlebubblechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'������Xָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			
		                },                
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Yָ����',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_vaxis',
		        			//editable : false, 
		        			store:singlebubblechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'������Yָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Zָ����',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_zaxis',
		        			store:singlebubblechart_zaxis_store,
		        			mode: 'local',
		        			emptyText :'������Zָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_zaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                } 	                	             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlebubblechart_subtitle'
		                },
		                {
		                    fieldLabel: 'X������',
		                    id: 'singlebubblechart_haxisname',
		                    emptyText :'������X������'
		                },
		                {
		                    fieldLabel: 'Y������',
		                    emptyText :'������Y������',
		                    id: 'singlebubblechart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_multiradarchart(_grid,_fieldstr_point){
			var multiradarchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['�״�ͼ','radar']			
		   		]
		   	});	 
			var multiradarchart_haxis_store = new Ext.data.SimpleStore({
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multiradarchart_vaxis_store = new Ext.data.SimpleStore({
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
		    var multiradarchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multiradarchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multiradarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    selectOnFocus:true,
		    				id:'multiradarchart_charttype',            
		        			store:multiradarchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',      			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			listeners:{ 
								'select' : function(combox,record,index){},
								'afterRender' : function(combox,record,index){
								}					
		        			}
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multiradarchart_haxis',            
		        			store:multiradarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiradarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multiradarchart_vaxis',
		        			//editable : false, 
		        			store:multiradarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiradarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multiradarchart_subtitle'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_singlecombinedchart(_grid,_fieldstr_point){		
			var singlecombinedchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['2D����+����+������ͼ(ֻ�����ᣩ','mscombi2d'],
		   			['3D����+����+������ͼ(ֻ�����ᣩ','mscombi3d'],
		   			['2D�ѻ�����+����+������ͼ(ֻ�����ᣩ','stackedcolumn2dline'],
		   			['3D�ѻ�����+����+������ͼ(ֻ�����ᣩ','stackedcolumn3dline']
		   		]
		   	});	 
			var singlecombinedchart_haxis_store = new Ext.data.SimpleStore({
			   id : 'singlecombinedchart_haxis_store',
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var singlecombinedchart_vaxis_store = new Ext.data.SimpleStore({
			   id : 'singlecombinedchart_vaxis_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
			var singlecombinedchart_vtyle_store = new Ext.data.SimpleStore({
			   id : 'singlecombinedchart_vtyle_store',
			   fields:['charttype_name','charttype_id'],
			   autoLoad : true,
			   data : []
			});
			   
			var singlecombinedchart_showlabel_store = new Ext.data.SimpleStore({
			   id : 'singlecombinedchart_showlabel_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
	
		    var singlecombinedchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'singlecombinedchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'singlecombinedchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    listWidth : 240,
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_charttype',            
		        			store:singlecombinedchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_haxis',            
		        			store:singlecombinedchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecombinedchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_vaxis',
		        			editable : true, 
		        			store:singlecombinedchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecombinedchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								},
			        			'blur' : function(combox,record,index){
			        				Ext.getCmp('singlecombinedchart_vtyle').reset();
			        				Ext.getCmp('singlecombinedchart_showlabel').reset();
				        			var combox_value = this.getValue();
				        			var combox_display = this.getRawValue();
				        			var poi = combox_display.indexOf(",");
	                            	var str_pre = "[";
	                            	var str_post = "]";
	                            	var str_mid = "";
	                            	var str_show = "";
				        			if(poi<0){
				        				//str_mid = str_mid + "['"+combox_display+"-����ͼ','"+combox_value+"-Column'],";
				        				str_mid = str_mid + "['"+combox_display+"-����ͼ','"+combox_value+"-line'],";
				        				str_mid = str_mid + "['"+combox_display+"-���ͼ','"+combox_value+"-area']";
				        				if(trim(str_mid).length>0)
				        				{
					        				str_mid = str_pre + str_mid + str_post;
					        				singlecombinedchart_vtyle_store.loadData(eval(str_mid));
					        				/*�Ƿ���ʾֵ*/
					        				str_show = "['"+combox_display+"','"+combox_value+"']";
											str_show = str_pre + str_show + str_post;
					        				singlecombinedchart_showlabel_store.loadData(eval(str_show));				        				
				        				}			        							        							        							       
				        			}
				        			else{
				        				var arr_value = combox_value.split(",");
				        				var arr_display = combox_display.split(",");
				        				for(var i = 0 ; i< arr_display.length ; i++){
					        				//str_mid = str_mid + "['"+trim(arr_display[i])+"-����ͼ','"+trim(arr_value[i])+"-column'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-����ͼ','"+trim(arr_value[i])+"-line'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-���ͼ','"+trim(arr_value[i])+"-area'],";					        				
					        				str_show = str_show +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
				        				}
				        				if(trim(str_mid).length>0){
				        					str_mid = str_mid.substring(0,str_mid.length-1);
											str_mid = str_pre + str_mid + str_post;
											singlecombinedchart_vtyle_store.loadData(eval(str_mid));
											/*�Ƿ���ʾֵ*/
											str_show = str_show.substring(0,str_show.length-1);
											str_show = str_pre + str_show + str_post;
					        				singlecombinedchart_showlabel_store.loadData(eval(str_show));				        				
				        				}
				        			}			        						        						        			
				        		}														
		        			}        			     
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ��ͼ��',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_vtyle',
		        			store:singlecombinedchart_vtyle_store,
		        			mode: 'local',
		        			emptyText :'Ĭ������ͼ',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'charttype_name', 
		        			valueField : 'charttype_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        		    listeners:{
		        		    	'blur' : function(combox,record,index){
		        		    		var arr = this.getRawValue().split(",");
		        		    		var combox_display = Ext.getCmp('singlecombinedchart_vaxis').getRawValue();
		        		    		var poi = combox_display.indexOf(',');
		        		    		if(poi>=0){
		        		    			var arr_display = combox_display.split(/[,-]/);
		        		    			for(var i=0;i<arr_display.length;i++){
		        		    				if(countInArray_adv(trim(arr_display[i]),arr)>1){
		        		    					Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');
		        		    					single_index = 1;
		        		    					break;
		        		    				}
		        		    				else{
		        		    					single_index = 0;
		        		    				}
		        		    			}	        		    				        		    		
		        		    		}
		        		    		else{
		        		    			if(countInArray_adv(combox_display,arr)>1){
		        		    				Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');
		        		    				single_index = 1;
		        		    			}
		        		    			else{
		        		    				single_index = 0;
		        		    			}
		        		    		}
		        		    	}
		        		    }
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '��ʾֵ',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_showlabel',
		        			editable : true, 
		        			store:singlecombinedchart_showlabel_store,
		        			mode: 'local',
		        			emptyText :'Ĭ�ϲ���ʾ',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true
		                }		                		                	         
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'singlecombinedchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'singlecombinedchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'singlecombinedchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		function render_multicombinedchart(_grid,_fieldstr_point){		
			var multicombinedchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['2D����+����+������ͼ(�������ᣩ','mscombidy2d'],
		   			['3D����+����+������ͼ(�������ᣩ','mscolumn3dlinedy'],
		   			//['2D�ѻ�����+����+������ͼ(�������ᣩ','stackedcolumn2dlinedy'],
		   			['3D�ѻ�����+����+������ͼ(�������ᣩ','stackedcolumn3dlinedy']
		   		]
		   	});	 
			var multicombinedchart_haxis_store = new Ext.data.SimpleStore({
			   id : 'multicombinedchart_haxis_store',
			   fields:['category_name','category_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multicombinedchart_vaxis_store = new Ext.data.SimpleStore({
			   id : 'multicombinedchart_vaxis_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			   
			var multicombinedchart_vtyle_store = new Ext.data.SimpleStore({
			   id : 'multicombinedchart_vtyle_store',
			   fields:['charttype_name','charttype_id'],
			   autoLoad : true,
			   data : []
			});
			   
			var multicombinedchart_showlabel_store = new Ext.data.SimpleStore({
			   id : 'multicombinedchart_showlabel_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});	
			
			var multicombinedchart_secondaxis_store = new Ext.data.SimpleStore({
			   id : 'multicombinedchart_secondaxis_store',
			   fields:['value_name','value_id'],
			   autoLoad : true,
			   data : []
			});			
				
		    var multicombinedchart_form = new Ext.FormPanel({
		        labelWidth: 55,
		        id : 'multicombinedchart_form',
		        labelAlign : 'right',
		        border : false,
		        bodyStyle:'padding:2px 3px 0',
		        forceFit : true,
		        defaultType: 'textfield',
		        items: [
		        {
		            xtype:'fieldset',
		            collapsible: true,
		            forceFit : true,            
		            title: '��Ҫ��������',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '������',
		                    width : 120,
		                    emptyText :'���������',
		                    id : 'multicombinedchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'ͼ������',
		                    listWidth : 240,
		                    selectOnFocus:true,
		    				id:'multicombinedchart_charttype',            
		        			store:multicombinedchart_store,
		        			mode: 'local',
		        			emptyText :'��ѡ��ͼ������',
		        			typeAhead : true,
		        			triggerAction: 'all',	        			
		        			displayField: 'fusion_chart_type', 
		        			valueField : 'fusion_chart_type_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true
		                },                
						{
		                    xtype: 'combo',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_haxis',            
		        			store:multicombinedchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'���������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicombinedchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"С��")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ����',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_vaxis',
		        			editable : true, 
		        			store:multicombinedchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'����������ָ����',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicombinedchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"����")));
								},
			        			'blur' : function(combox,record,index){
			        				Ext.getCmp('multicombinedchart_vtyle').reset();
			        				Ext.getCmp('multicombinedchart_showlabel').reset();
			        				Ext.getCmp('multicombinedchart_secondaxis').reset();
				        			var combox_value = this.getValue();
				        			var combox_display = this.getRawValue();
				        			var poi = combox_display.indexOf(",");
	                            	var str_pre = "[";
	                            	var str_post = "]";
	                            	var str_mid = "";
	                            	var str_show = "";
	                            	var str_secondaxis = "";
				        			if(poi<0){
				        				//str_mid = str_mid + "['"+combox_display+"-����ͼ','"+combox_value+"-Column'],";
				        				str_mid = str_mid + "['"+combox_display+"-����ͼ','"+combox_value+"-line'],";
				        				str_mid = str_mid + "['"+combox_display+"-���ͼ','"+combox_value+"-area']";
				        				if(trim(str_mid).length>0)
				        				{
					        				str_mid = str_pre + str_mid + str_post;
					        				multicombinedchart_vtyle_store.loadData(eval(str_mid));
					        				/*�Ƿ���ʾֵ*/
					        				str_show = "['"+combox_display+"','"+combox_value+"']";
											str_show = str_pre + str_show + str_post;
					        				multicombinedchart_showlabel_store.loadData(eval(str_show));	
					        				/*����*/
					        				str_secondaxis = "['"+combox_display+"','"+combox_value+"']";
											str_secondaxis = str_pre + str_secondaxis + str_post;
					        				multicombinedchart_secondaxis_store.loadData(eval(str_secondaxis));					        				
					        				
				        				}			        							        							        							       
				        			}
				        			else{
				        				var arr_value = combox_value.split(",");
				        				var arr_display = combox_display.split(",");
				        				for(var i = 0 ; i< arr_display.length ; i++){
					        				//str_mid = str_mid + "['"+trim(arr_display[i])+"-����ͼ','"+trim(arr_value[i])+"-column'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-����ͼ','"+trim(arr_value[i])+"-line'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-���ͼ','"+trim(arr_value[i])+"-area'],";					        				
					        				str_show = str_show +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
					        				str_secondaxis = str_secondaxis +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
				        				}
				        				if(trim(str_mid).length>0){
				        					str_mid = str_mid.substring(0,str_mid.length-1);
											str_mid = str_pre + str_mid + str_post;
											multicombinedchart_vtyle_store.loadData(eval(str_mid));
											/*�Ƿ���ʾֵ*/
											str_show = str_show.substring(0,str_show.length-1);
											str_show = str_pre + str_show + str_post;
					        				multicombinedchart_showlabel_store.loadData(eval(str_show));
					        				/*����*/
											str_secondaxis = str_secondaxis.substring(0,str_secondaxis.length-1);
											str_secondaxis = str_pre + str_secondaxis + str_post;
					        				multicombinedchart_secondaxis_store.loadData(eval(str_secondaxis));				        				
				        				}
				        			}			        						        						        			
				        		}														
		        			}        			     
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: 'ָ��ͼ��',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_vtyle',
		        			store:multicombinedchart_vtyle_store,
		        			mode: 'local',
		        			emptyText :'Ĭ������ͼ',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'charttype_name', 
		        			valueField : 'charttype_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        		    listeners:{
		        		    	'blur' : function(combox,record,index){
		        		    		var arr = this.getRawValue().split(",");
		        		    		var combox_display = Ext.getCmp('multicombinedchart_vaxis').getRawValue();
		        		    		var poi = combox_display.indexOf(',');
		        		    		if(poi>=0){
		        		    			var arr_display = combox_display.split(/[,-]/);
		        		    			for(var i=0;i<arr_display.length;i++){
		        		    				if(countInArray_adv(trim(arr_display[i]),arr)>1){
		        		    					Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');
		        		    					multi_index = 1;
		        		    					break;
		        		    				}
		        		    				else{
		        		    					multi_index = 0;
		        		    				}
		        		    			}	        		    				        		    		
		        		    		}
		        		    		else{
		        		    			if(countInArray_adv(combox_display,arr)>1){
		        		    				Ext.Msg.alert('����','ͬһ��ָ��ֻ��ѡ��һ��ͼ��!');
		        		    				multi_index = 1;
		        		    			}
		        		    			else{
		        		    				multi_index = 0;
		        		    			}
		        		    		}
		        		    	}
		        		    }
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '��ʾֵ',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_showlabel',
		        			editable : true, 
		        			store:multicombinedchart_showlabel_store,
		        			mode: 'local',
		        			emptyText :'Ĭ�ϲ���ʾ',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '����',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_secondaxis',
		        			editable : true, 
		        			store:multicombinedchart_secondaxis_store,
		        			mode: 'local',
		        			emptyText :'����һ������',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{
		        		    	'blur' : function(combox,record,index){
		        		    		if(this.getValue() == Ext.getCmp('multicombinedchart_vaxis').getValue()){
		        		    			Ext.Msg.alert('����','������Ҫһ������!');
		        		    		}	        		    	
		        		    	}
		        			}
		                }	                
		            ]
		        },{
		            xtype:'fieldset',
		            title: '������������',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '������',
		                    emptyText :'�������ӱ���',
		                    id : 'multicombinedchart_subtitle'
		                },
		                {
		                    fieldLabel: '��������',
		                    id: 'multicombinedchart_haxisname',
		                    emptyText :'�������������'
		                },
		                {
		                    fieldLabel: '��������',
		                    emptyText :'��������������',
		                    id: 'multicombinedchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		
		/*******************************
		 * ## ��ҳ��ͻ��ܽ��渴�ư�ť����¼�   
		********************************/
		Ext.getCmp('cdcombination_copybutton').on('click',function(){
			if(crows == 0){
				Ext.MessageBox.alert('��ʾ','�����Ҽ���������');	
			}
			else{
			    Ext.MessageBox.alert('��ʾ','�Ѿ����Ƶ�������',callback);
			    function callback(id){
			   		if(id == 'ok'){
						Ext.Ajax.request({      
							 url: 'SaveCDCCopyActions',
				             params: {rights:rightspk,copybutton:4,copyedrows:crows,sysfunid:sysfunStr},      
				             callback : function(options, success, response) {}
				        });
				        crows = 0;
			   		}
			    }
			}
		});
		
		Ext.getCmp('summary_copybutton').on('click',function(){
			if(crows == 0){
				Ext.MessageBox.alert('��ʾ','�����Ҽ���������');	
			}
			else{
			    Ext.MessageBox.alert('��ʾ','�Ѿ����Ƶ�������',callback);
			    function callback(id){
			   		if(id == 'ok'){
						Ext.Ajax.request({
							 url: 'SaveCDCCopyActions',
				             params: {rights:rightspk,copybutton:5,copyedrows:crows,sysfunid:sysfunStr},      
				             callback : function(options, success, response) {}
				        });
				        crows = 0;
			   		}
			    }
			}
		});	
		
   	}
	/*******************************
	 * ## Ext�첽����session���ڽ������    
	********************************/	
	Ext.Ajax.on('requestcomplete',checkUserSessionStatus, this);
	function checkUserSessionStatus(conn,response,options){	
	    if(response.getResponseHeader("sessionstatus") == 'timeOut'){
	        if(response.getResponseHeader("loginPath")){
	            Ext.Msg.alert('��ʾ',"�Ự���ڣ������µ�½!");
	            window.top.location.href = response.getResponseHeader("loginPath");
	        }else{
	            Ext.Msg.alert('��ʾ',"����ʱ�����µ�½ !");
	            window.top.location.href = response.getResponseHeader("loginPath");
	    	}
		}
	}  		 
});