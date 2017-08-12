Ext.onReady(function(){
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
   /***************************
     * ## 模糊筛选框的tips
   ****************************/    
	var updateTip = function(field){  
	    if(field.rendered){  
	        field.getEl().dom.setAttribute("ext:qtip", "输入'All或所有'还原树");  
	    }  
	};     
    /***************************
     * @@rightspk: 权限值
    ***************************/
    var rightspk = document.getElementById("rightspk").value;
   /***************************
     * ## 全局变量
     *	@@ pageSize ： 分页数
     *  @@ exportRowNum: 导出行数
     *  @@ copyRowNum: 复制行数
     *	@@ tablename : 数据表中文名字
     *  @@ tablesortflag : 数据表的排序号
     *  @@ dimension : 数据表的维度
     *  @@ fieldstr_point: 核心指标中使用数字格式dataindex的起始点
     *  @@ dbname : 数据表名索引
     *  @@ cdcombination_sql ： 合并的sql语句
     *  @@ sort_module_sql : 排序模块sql语句
     *  @@ filter_module_sql : 过滤模块sql语句
     *  @@ newcolumn_module_sql: 新增字段模块sql语句
     *  @@ summary_module_sql: 分类汇总模块sql语句
     *     $$summary_sortpanel_module_sql: 分类汇总模块中排序sql语句
     *     $$summary_filterpanel_module_sql 分类汇总模块中筛选sql语句
     *  @@ SelectionPoint: 新增列模块中公式文本框的光标位置
     *  @@ activeaccording_id: 图表中panel的id
     *  @@ drillleastlevel: 图表中细分维度
     *  @@ single_index: 在结合图中，判断是否有重复的指标设定图表 
     *  @@ crows: 加载复制的行数
     *  @@ sysfunStr: 选择的数据库，用作复制和导出跟踪
   ****************************/
    var pageSize = 200;
	var exportRowNum;
	var copyRowNum;    
    var tablename = "";
    var tablesortflag = 0;
    var dimension = "";
    var fieldstr_point;
    var dbname = "";
    var cdcombination_sql = ' ';//空格非常重要
    var sort_module_sql = ' ';  //空格非常重要
    var filter_module_sql = ' '; //空格非常重要
    var newcolumn_module_sql = ' '; //空格非常重要
    var summary_module_sql = ' '  //空格非常重要
    var summary_sortpanel_module_sql = ' '  //空格非常重要
    var summary_filterpanel_module_sql = ' '  //空格非常重要    
    var SelectionPoint = 0;
	var activeaccording_id = 0.0;
	var drillleastlevel = ' ';
	var single_index = 0;   
	var crows = 0;	
	var sysfunStr = '';
   /****************************
     * ## 数据集结合gridpanel
     * 	%% firstGrid ： 现有所有的数据集
     *  %% secondGrid ： 已经选择所有的数据集
     *  %% thirdGrid ： 显示已经选择的数据集的字段
   ****************************/
	Ext.Ajax.request({      
		 url: 'GetCombinationData',    
         callback : function(options, success, response) {   
            if(success){ 
            	myData = trim(response.responseText);  
            	runscript(eval(myData));
            }else {		                	
             	Ext.MessageBox.alert('错误',"请重新刷新");   
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
			{header: "数据集名",align:'left',width: 200,dataIndex: 'name',menuDisabled:true,sortable: false,renderer:change},
			{header: "细分程度",align:'right',width: 75,dataIndex: 'dimension',menuDisabled:true,sortable:false},
			{header: "隐藏gridcolumn_return",hidden:true,sortable: false, dataIndex: 'ref_name',hideable: true},
			{header: "隐藏排序标签",hidden:true,sortable: false, dataIndex: 'sortflag',hideable: true},
			{header: "隐藏数值开始点",hidden:true,sortable: false, dataIndex: 'fieldstr_point',hideable: true},
			{header: "隐藏dbname",hidden:true,sortable: false, dataIndex: 'dbname',hideable: true}
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
	        title : '已选择的数据库'
	    }); 
	    
		secondGrid.addListener('rowdblclick', rowdblclickFn);
		function rowdblclickFn(grid, rowIndex, e) {
			var data = secondGridStore.data.items[rowIndex].data;
			tablename = data.name;
			tablesortflag = data.sortflag;
			dimension = data.dimension;
			if(dimension == "区县市" || dimension == "区县城市") drillleastlevel = "district";
			else if(dimension == "地级市") drillleastlevel = "city";
			else if(dimension == "省份") drillleastlevel = "province";
			else if(dimension == "中国") drillleastlevel = "china";
			fieldstr_point = data.fieldstr_point;
			dbname = data.dbname;
			var grid_colModel_array = fun_grid_colModel_config(data.ref_name,"grid_sm");		
			dbcolumnselection_win.show();
			dbcolumnselection_win.setTitle(replaceAll(data.name,'--','') + "-列名选择");		
			//checkcolumn根据thirdgrid进行初始化
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
				//加载数据库的列名
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
			{header: "数据集名",dataIndex: 'name',width:200,menuDisabled:true,sortable: false},
			{header: "细分程度",dataIndex: 'dimension',width:100,menuDisabled:true,sortable: false},
			{header: "选择列名",dataIndex: 'field',width:500,menuDisabled:true,sortable: false},
			{header: "隐藏列名dataindex",hidden:true,sortable: false, dataIndex: 'dataindex',hideable: true},
			{header: "隐藏sortflag",hidden:true,sortable: false, dataIndex: 'sortflag',hideable: true},
			{header: "隐藏数据表索引",hidden:true,sortable: false, dataIndex: 'dbname',hideable: true}
		];   
	    var thirdGrid = new Ext.grid.GridPanel({
	        store : thirdGridStore,
	        columns : thirdGridcols,  
	        autoScroll:true, 	        
		    //autoExpandColumn:3,
			frame:false,   
			border : false,
			stripeRows:true,
			title : '已选择数据库的列&nbsp;(注意：需要同一细分程度)'
	    });
	    
	   /***************************
	     * ##数据表的指标项选择win panel
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
			{header: "选择列名",dataIndex: 'name',menuDisabled:true,sortable: false},
			{header: "选择dataindex",dataIndex: 'field',menuDisabled:true,hidden:true,sortable:false,hideable:true},
			{xtype: 'checkcolumn',header:'是否选择',dataIndex: 'isselected',width: 70,menuDisabled:true,sortable: false}		
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
				{xtype : 'button',text : '确定',tooltip:'确定选择的列名',iconCls:'accept',handler:fun_dbcolumnselected}
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
	     * ## 排序功能界面实现
	     * 	@@ large_sort_win : 排序功能界面实现
	     * 	@@ large_sort_panel : 排序功能界面指标grid
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
		   data : [['降序','DESC'],['升序',' ASC']]
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
				{header: '指标项',dataIndex: 'find_field',width: 200,align : 'center',sortable:false,hideable: false,
		         	editor:editorfield_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = editorfield_combox_store.find('field_id',value);  
	                    if(index!=-1){  
	                    	return editorfield_combox_store.getAt(index).data.field;  
	                    }  
	                    return value;  
	                }         
		        },     
				{header: '次序',dataIndex: 'Order_type',width: 80,align : 'center',sortable : false, hideable : false,
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
	       {text : '加入条件',tooltip : '新增排序条件',iconCls : 'add',handler : fun_sort_add},
	       '-',
	       {xtype : 'tbspacer'},
	       {text : '删除条件',tooltip : '删除条件',iconCls : 'delete',handler : fun_sort_del},
	       '-',{xtype : 'tbspacer'},
	       {iconCls : 'arrow_up',text : '上移',tooltip : '选中排序条件上移',handler : fun_sort_moveup},
	       {xtype : 'tbspacer'},
	       {iconCls : 'arrow_down',text : '下移',tooltip :'选中排序条件下移',handler : fun_sort_movedown},
	       '-',{xtype : 'tbspacer'},'->',
	       {text : '确定',iconCls : 'accept',tooltip:'确定排序',handler : fun_sort_submit},
	       {xtype : 'tbspacer'},
	       {text : '取消',iconCls : 'deldt',tooltip : '清除所有排序条件',handler : fun_sort_cancel},
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
		        title : '排序', 
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
	     * ## 筛选功能界面实现
	     * 	@@large_filter_panel：筛选界面
	     *  @@large_filter_panel_tree：医院的指标树
	     *  @@large_filter_panel_gridpanel: 自定义条件
	     *  @@large_filter_panel_onlyread_gridpanel: 显示已经设置的条件
	   ****************************/ 		   
		var large_filter_panel_tree = new Ext.tree.TreePanel({ 
			id:'large_filter_panel_tree',        
		    el : 'large_filter_panel_tree',// 将树形添加到一个指定的div中,非常重要！自动生成ID
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
		       	   	either: 'and',  //默认是and
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
		   data : [['和','and'],['或',' or']]  //故意OR前加入空格,为了长度和and一致，为下面截取字符串做准备
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
		   data : [['大于','>'],['大于等于','>='],['等于','='],['不等于','<>'],['小于','<'],['小于等于','<='],['包含','like'],['不包含','not like'],['开头是','#like'],['开头不是','#not like'],['结尾是','@like'],['结尾不是','@not like']]
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
		    	{header: '和/或',dataIndex: 'either',width: 50,align : 'center',sortable:false,hideable: false,
		         	editor:either_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = either_combox_store.find('either_type_id',value);  
	                    if(index!=-1){  
	                    	return either_combox_store.getAt(index).data.either_type;  
	                    }  
	                    return value;  
	                }         
		        },	        
		    	{header: '主要指标',dataIndex: 'filter_field',width: 110,align : 'center',sortable:false,hideable: false},    	
		    	{header: '条件符号',dataIndex: 'filter_type',width: 60,align : 'center',sortable:false,hideable: false,
		         	editor:filtertype_combox ,
		         	renderer: function(value,metadata,record){  
	     		   		var index = filtertype_combox_store.find('math_type_id',value);  
	                    if(index!=-1){  
	                    	return filtertype_combox_store.getAt(index).data.math_type;  
	                    }  
	                    return value;  
	                }         
		        },	        
				{header:'<center>输入内容</center>',dataIndex:'contents',width : 100,align :'right',sortable : false,hideable: false,
					editor : contents_textfield,
					renderer: function(value,metadata,record){
						if(!isNaN(value)) return Ext.util.Format.number(value, '0,000.00');
						else return value;
					}
				},
				{header:'隐藏dataindex',dataIndex:'dataindex',hidden : true,hideable: false},			
				{header:'隐藏sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
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
			fun_readonly_showconditions();  //简化通用函数，在删除按钮调用同样的函数
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
		    	{header:'列名',dataIndex:'filter_field',hidden : true,hideable: false},
				{header:'<center>设置的条件</center>',dataIndex:'CH_conditions',width : 100,align :'left',sortable : false,hideable: false} ,
				{header:'隐藏条件',width : 100,dataIndex:'EN_conditions',align :'left',sortable : false,hideable: false,hidden : true} ,
				{header:'隐藏sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
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
	        title: '已经设置的条件',       
	        border : false,
	        layout:'fit',
	        items : [large_filter_panel_onlyread_gridpanel]
	    });
		
		var large_filter_panel = new Ext.Panel({  
			layout : 'border',
			border : false,
			items : [
			{
				title : '所有指标',
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
				title : '自定义条件',
				region : 'center',
				fill : true,
	      		layout : 'fit',
				tbar : [
					{xtype : 'button',text : '删除',tooltip:'删除选中的筛选条件',iconCls : 'sel_left',id : 'large_filter_panel_removesingle',handler : fun_filter_remove},
					'-',
					{xtype : 'button',text : '清空',tooltip:'清除所有的筛选条件',iconCls :'select_clear',id : 'large_filter_panel_clear',handler : fun_filter_clear},
					'->','-',
					{xtype : 'button',text : '确定',tooltip:'筛选',iconCls :'accept',id : 'large_filter_panel_submit',handler : fun_filter_submit}
	
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
		        title : '筛选', 
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
	     * ## 新增列界面实现
	     * 	@@large_newcolumn_panel： 新增自定义列win
	     *  @@large_newcolumn_panel_tree: 显示数值指标的tree
	     *  @@show_newcolumn_panel : 显示已经新增列的公式 
	   ****************************/   
		var large_newcolumn_panel_tree = new Ext.tree.TreePanel({ 
			id:'large_newcolumn_panel_tree',        
		    el : 'large_newcolumn_panel_tree',// 将树形添加到一个指定的div中,非常重要！自动生成ID
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
				/*放入文本textformula*/
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
		    	new Ext.grid.RowNumberer(),//自动行号	    
		    	{header:'新增字段',width : 40,dataIndex:'new_field',align :'center',sortable : false,hideable: false} ,
				{header:'<center>字段公式</center>',dataIndex:'CH_formula',width : 100,align :'left',sortable : false,hideable: false} ,
				{header:'隐藏公式',width : 100,dataIndex:'EN_formula',align :'left',sortable : false,hideable: false,hidden : true} ,
				{header:'隐藏sortid',dataIndex:'sort_flag',hidden : true,hideable: false}
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
				title : '所有指标',
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
				                {xtype : 'button',text : '新增',tooltip:'即时在主表中新增自定义指标',iconCls : 'add',handler : fun_newcolumn_add},
				                {xtype : 'button',text : '删除',tooltip:'即时在主表中删除选中自定义指标',iconCls : 'delete',handler : fun_newcolumn_delete},
				                '-', 
				                {xtype : 'button',text : '关闭',tooltip:'关闭该页面',iconCls : 'deldt',handler : fun_newcolumn_close}
			                ],
			                bodyStyle:'padding:3px 0 0 3px',
			                items: [{
			                    xtype:'textfield',
			                    allowBlank : true,
			                    blankText: '不允许为空',		                    
				                emptyText:'仅字母或汉字',
			                    fieldLabel: '名称',
			                    id: 'large_newcolumn_panel_textname',
			                    anchor:'98%',
			                    listeners : {
			                    	'blur' : function(e){
			                    		if(this.getValue().length !=0){
				                    		if(fun_gridfieldname_exists(this.getValue(),Ext.getCmp("CDCombination_gridpanel"))){
				                    			Ext.Msg.alert('提示','名字重复!');			          
				                    			this.focus(true);
				                    		}
				                    		if(!isCHENChar(this.getValue())){
				                    			Ext.Msg.alert('错误','输入仅字母或汉字!');			          
				                    			this.focus(true);
				                    		}
			                    		}
			                    	}
			                    }
			                }, {
			                    xtype:'textfield',
			                    fieldLabel: '公式',
				                emptyText:'仅限(,+,-,*,/,)等四则运算符', 
				                blankText: '不允许为空',
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
				            	{text: '(',width : 25,tooltip:'前括号',symbol: '(' },
				            	{text: ')',width : 25,tooltip:'后括号',symbol: ')',style : 'margin-left : 5px;'  },
				            	{text: '+',width : 25,tooltip:'加',symbol: '+',style : 'margin-left : 5px;'  },
				            	{text: '-',width : 25,tooltip:'减',symbol: '-',style : 'margin-left : 5px;'  },
				            	{text: '÷',width : 25,tooltip:'除',symbol: '/',style : 'margin-left : 5px;'  },
				            	{text: '*',width : 25,tooltip:'乘',symbol: '*',style : 'margin-left : 5px;'  }]
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
		        title : '新增自定义列', 
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
	     * ##分类汇总界面实现
	     * 	@@large_summary_panel： 分类汇总win
	     *  @@dynamic_panel： 产生动态grid
	   ****************************/
		var large_summary_panel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_groupvalue_store  = new Ext.data.SimpleStore({
			fields: ['valuename','valueindex']
		});
		var large_summary_panel_grouptype_store  = new Ext.data.SimpleStore({
			fields: ['typename','typeindex'],
			data : [["计数","count"],["求和","sum"],["平均值","avg"],["最大值","max"],["最小值","min"]]		
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
	                text: '排序与筛选',
	                iconCls:'sortandfilter',
	                menu: [
		                {text: '排序',iconCls: 'small_sort',tooltip:'显示排序对话框，一次性根据多个条件进行排序',handler:fun_summary_sort},
		                '-', 
		                {text: '筛选',tooltip:'显示筛选对话框,对指标进行自定义筛选',iconCls : 'small_filter',handler:fun_summary_filter},
		                {text: '取消筛选',tooltip:'取消分类汇总筛选的所有条件',iconCls : 'clear_filter',handler:fun_summary_filterclear}
	                ]
	            },	 
	            '-',
	            {xtype : 'CopyButton',text : '复制',id : 'summary_copybutton',tooltip:'复制',iconCls : 'copy_small'},
	            '-',
	        	{xtype : 'button',text : '导出',id : 'large_summary_panel_export',tooltip:'导出excel',iconCls : 'export_small',handler : fun_summary_export},        	
	            '->',
	            '-',
		        {xtype : 'button',text : '确定',tooltip:'确定',id : 'large_summary_panel_submit',iconCls : 'accept',handler : fun_summary_submit},
		        {xtype : 'button',text : '全部删除',tooltip:'删除分类汇总结果',id : 'large_summary_panel_clear',iconCls : 'select_clear',handler : fun_summary_removeall},
		        {xtype : 'button',text : '取消',tooltip:'关闭分类汇总页面',id : 'large_summary_panel_cancel',iconCls : 'deldt',handler:fun_summary_cancel}        
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
	            blankText: '不允许为空',
	            emptyText:'选择分类字段',
	            fieldLabel: '分类字段',
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
	            blankText: '不允许为空',
	            emptyText:'选择分类字段',
	            fieldLabel: '选定汇总项',
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
	            blankText: '不允许为空',
	            emptyText:'汇总方式',
	            fieldLabel: '汇总方式',
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
		        title : '分类汇总', 
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
	     * ##分类汇总功能下排序界面实现
	     * 	@@large_summary_panel_sortwinpanel: windows界面
	     *  @@large_summary_panel_sortpanel： formpanel界面
	   ****************************/
		var large_summary_panel_sortpanel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_sortpanel_grouptype_store  = new Ext.data.SimpleStore({
			fields: ['sortname','sortindex'],
			data : [["升序","asc"],["降序","desc"]]		
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
	            blankText: '不允许为空',
	            emptyText:'选择排序字段',
	            fieldLabel: '排序字段',
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
	            blankText: '不允许为空',
	            emptyText:'排序方式',
	            fieldLabel: '排序方式',
	            id: 'large_summary_panel_sortpanel_type',
	            anchor:'95%',
	            listeners : {}
	        }],
	        buttons : [
	        	{text : '确定',tooltip:'确定排序',id : 'large_summary_panel_sortpanel_submit',iconCls : 'accept',handler : fun_summary_sortpanel_submit},
		        {text : '取消',tooltip:'关闭界面',id : 'large_summary_panel_sortpanel_cancel',iconCls : 'deldt',handler:fun_summary_sortpanel_cancel}  
	        ]
		});	
			
		var large_summary_panel_sortwinpanel = new Ext.Window({ 
		        title : '排序', 
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
	     * ##分类汇总功能下筛选界面实现
	     * 	@@large_summary_panel_filterwinpanel: windows界面
	     *  @@large_summary_panel_filterpanel： formpanel界面
	   ****************************/
		var large_summary_panel_filterpanel_groupname_store  = new Ext.data.SimpleStore({
			fields: ['dataname','dataindex']
		});	
		var large_summary_panel_filterpanel_groupmath_store  = new Ext.data.SimpleStore({
			fields: ['mathtype','mathid'],
			data : [["大于",">"],["大于等于",">="],["等于","="],['不等于','<>'],["小于","<"],["小于等于","<="]]		
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
				            blankText: '不允许为空',
				            emptyText:'选择筛选字段',
				            fieldLabel: '筛选字段1',
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
				            blankText: '不允许为空',
				            emptyText:'条件符号',
				            fieldLabel: '条件符号1',
				            id: 'large_summary_panel_filterpanel_groupmath1',
				            width : 80
				        },
				        {
		                    xtype:'textfield',
		                    allowBlank : false,
		                    blankText: '不允许为空',		                    
			                emptyText:'输入条件',
		                    fieldLabel: '筛选条件1',
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
		        		{xtype:'radio',boxLabel:'和',name:'fieldtype',id : 'state',inputValue:'and'},
		        		{xtype:'radio',boxLabel:'或',name:'fieldtype',inputValue:'or',checked: true}		        		       
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
				            blankText: '不允许为空',
				            emptyText:'选择筛选字段',
				            fieldLabel: '筛选字段2',
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
				            blankText: '不允许为空',
				            emptyText:'条件符号',
				            fieldLabel: '条件符号2',
				            id: 'large_summary_panel_filterpanel_groupmath2',
				            width : 80
				        },
				        {
		                    xtype:'textfield',	
		                    allowBlank : false,
		                    blankText: '不允许为空',
			                emptyText:'输入条件',
		                    fieldLabel: '筛选条件2',
		                    id: 'large_summary_panel_filterpanel_textfield2',
		                    width : 100
				        }          		
	        		]
	        	}]
	        }],
	        buttons : [
	        	{text : '确定',tooltip:'确定筛选',id : 'large_summary_panel_filterpanel_submit',iconCls : 'accept',handler : fun_summary_filterpanel_submit},
		        {text : '取消',tooltip:'关闭页面',id : 'large_summary_panel_filterpanel_cancel',iconCls : 'deldt',handler:fun_summary_filterpanel_cancel}  
	        ]
		});	
		
		var large_summary_panel_filterwinpanel = new Ext.Window({ 
		        title : '筛选', 
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
	     * ## 柱形图界面实现
	   ****************************/
		//var barchart_fb = new Ext.ux.ColorField({id:'barchart_fb',width:100,value: '#6d9eeb',msgTarget: 'qtip'});    
		var barchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'barchart_tbar'
		}); 
		barchart_tbar.add(
		    //'颜色:',barchart_fb,
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'barchart_label',
				checked:false
			},
		   '-',
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'barchart_summit',handler : barchart_summit}
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
			            title:'单维度柱形表',
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
			            title:'多维度柱形表',
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
		        title : '柱形图', 
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
	     * ## 条形图界面实现
	   ****************************/     
		var columnchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'columnchart_tbar'
		}); 
		columnchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'columnchart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'columnchart_summit',handler : columnchart_summit}
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
			            title:'单维度条形图',
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
			            title:'多维度条形图',
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
		        title : '条形图', 
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
	     * ## 折线图界面实现
	   ****************************/     
		var linechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'linechart_tbar'
		}); 
		linechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'linechart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'linechart_summit',handler : linechart_summit}
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
			            title:'单维度折线图',
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
			            title:'多维度折线图',
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
		        title : '折线图', 
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
	     * ## 面积图界面实现
	   ****************************/     
		var areachart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'areachart_tbar'
		}); 
		areachart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'areachart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'areachart_summit',handler : areachart_summit}
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
			            title:'单维度面积图',
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
			            title:'多维度面积图',
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
		        title : '面积图', 
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
	     * ## 饼图界面实现
	   ****************************/     
		var piechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'piechart_tbar'
		}); 
		piechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'piechart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'piechart_summit',handler : piechart_summit}
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
			            title:'单维度饼图',
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
		        title : '饼图', 
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
	     * ## 散点图界面实现
	   ****************************/     
		var scatterchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'scatterchart_tbar'
		}); 
		scatterchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示回归线', 
			    style: 'margin-top:-8px;',
				id: 'scatterchart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'scatterchart_summit',handler : scatterchart_summit}
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
			            title:'散点图',
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
		        title : '散点图', 
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
	     * ## 圆环图界面实现
	   ****************************/     
		var doughnutchart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'doughnutchart_tbar'
		}); 
		doughnutchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'doughnutchart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'doughnutchart_summit',handler : doughnutchart_summit}
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
			            title:'圆环图',
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
		        title : '圆环图', 
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
	     * ## 气泡图界面实现
	   ****************************/     
		var bubblechart_tbar =new Ext.Toolbar({
	       plain:true,
	       id:'bubblechart_tbar'
		}); 
		bubblechart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示象限', 
			    style: 'margin-top:-8px;',
				id: 'bubblechart_quadrant',
				checked:false
			},
			'-',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'bubblechart_label',
				checked:false
			},
		   '-',	
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'bubblechart_summit',handler : bubblechart_summit}
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
			            title:'气泡图',
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
		        title : '气泡图', 
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
	     * ## 雷达图界面实现
	   ****************************/ 
		var radarchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'radarchart_tbar'
		}); 
		radarchart_tbar.add(
			'->',
		    {   
				xtype: 'checkbox',     
			    boxLabel: '显示值', 
			    style: 'margin-top:-8px;',
				id: 'radarchart_label',
				checked:false
			},
		   '-',
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'radarchart_summit',handler : radarchart_summit}
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
			            title:'雷达图',
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
		        title : '雷达图', 
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
	     * ## 结合图界面实现
	   ****************************/ 
		var combinedchart_tbar =new Ext.Toolbar({
	       plain:true,       
	       id:'combinedchart_tbar'
		}); 
		combinedchart_tbar.add(
			'->',
		   '-',
	       {text : '生成图表',tooltip : '生成图表',iconCls : 'chartshow',id : 'combinedchart_summit',handler : combinedchart_summit}
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
			            title:'结合图(只含主轴)',
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
			            title:'结合图(含主次轴)',
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
		        title : '结合图', 
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
	     * ## 整体布局
	   ****************************/   
	   var tbar=new Ext.Toolbar({
	       plain:true,
	       id:'tbar'
	   }); 
	   tbar.add(       	   
		   '-',{xtype:'tbspacer'},{xtype:'tbspacer'},
		   {xtype : 'textfield',emptyText:"关键字查找表",id :'Search_Transfer',width : 140,
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
		   {text:'搜索',iconCls:'search',
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
	      	  	title : '现有的数据库',
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
						    {xtype : 'button',text : '排序',id : 'cdcombination_sort',tooltip:'排序',iconCls : 'small_sort',handler : fun_cdc_sort},
						    ' ',
						    {xtype : 'button',text : '筛选',id : 'cdcombination_filter',tooltip:'筛选',iconCls : 'small_filter',handler : fun_cdc_filter},
							'-',
							{xtype : 'button',text : '取消筛选',id : 'cdcombination_clearfilter',tooltip:'取消筛选的所有条件',iconCls : 'clear_filter',handler : fun_cdc_clearfilter},
							'-',
							{xtype : 'button',text : '分类汇总',id : 'cdcombination_summary',tooltip:'汇总多个相关性指标项',iconCls : 'data_summary_small',handler : fun_cdc_summary},						
							'-',
						    {xtype : 'button',text : '新增列',id : 'cdcombination_newcolumn',tooltip:'自定义构建延伸列',iconCls : 'add_column_small',handler : fun_cdc_newcolumn},					    
						    '-',            
				            {
				                xtype:'splitbutton',
				                text: '图表',
				                iconCls:'other_chart',
				                menu: [ 
					            	{text: '柱形图',iconCls: 'bar_chart',handler : fun_barchart},
					            	{text: '折线图',iconCls: 'line_chart',handler : fun_linechart},
					            	{text: '饼图',iconCls: 'pie_chart',handler : fun_piechart},
					            	{text: '条形图',iconCls: 'column_chart',handler : fun_columnchart},
					            	{text: '面积图',iconCls: 'area_chart',handler : fun_areachart},
					            	{text: '散点图',iconCls: 'scatter_chart',handler : fun_scatterchart},
					            	{text: '结合图',iconCls: 'combined_chart',handler : fun_combinedchart},
					            	{text: '雷达图',iconCls: 'radar_chart',handler : fun_radarchart},
					            	{text: '气泡图',iconCls: 'bubble_chart',handler : fun_bubblechart},
					            	{text: '圆环图',iconCls: 'round_chart',handler : fun_doughnutchart}
				                ]
				            },
				            '-',					    
						    {xtype : 'button',text : '导出',id : 'cdcombination_export',tooltip:'导出excel',iconCls : 'export_small',handler : fun_cdc_export},
						    '-',
							{xtype : 'CopyButton',text : '复制',id : 'cdcombination_copybutton',tooltip:'复制',iconCls : 'copy_small'},
							'-',
							'->','-',
							{xtype : 'button',text : '确定',tooltip:'创建合并数据集',iconCls :'accept',id : 'cdcombination_submit',handler:fun_cdc_submit},
					        {xtype : 'button',text : '全部删除',tooltip:'删除合并数据集',id : 'cdcombination_clear',iconCls : 'select_clear',handler : fun_cdc_removeall}						
			
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
	     * ## 现有数据库和已有数据库之间表格拖动
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
	     * ## 该页面所有基础函数
	     * 	 @@fun_dbcolumnselected: 选择数据表的列名
	     * 	 @@fun_cdc_sort : 动态创建gridpanel的排序按钮
	     *   	$$fun_sort_cancel: 排序模块下取消按钮
	     *   	$$fun_sort_add: 排序模块下加入条件按钮
	     *   	$$fun_sort_del: 排序模块下删除条件按钮
	     *   	$$fun_sort_moveup: 排序模块下上移按钮
	     *   	$$fun_sort_movedown: 排序模块下下移按钮
	     *   	$$fun_sort_submit: 排序模块下提交按钮
	     *   @@fun_cdc_filter: 动态创建gridpanel的筛选按钮
	     *   	$$fun_filter_clear: 筛选模块下清空按钮
	     *   	$$fun_filter_remove: 筛选模块下删除按钮
	     *   	$$fun_filter_submit: 筛选模块下确定按钮 
	     *   @@fun_cdc_clearfilter: 动态创建gridpanel的取消筛选按钮
	     *   @@fun_cdc_newcolumn: 动态创建gridpanel的自定义列按钮
	     *   	$$fun_newcolumn_close: 新增列模块下关闭按钮
	     *   	$$fun_newcolumn_submit: 新增列模块下确定按钮
	     *   	$$fun_newcolumn_add: 新增列模块下新增按钮  
	     *   	$$fun_newcolumn_delete: 新增列模块下删除按钮 
	     *   @@fun_cdc_summary: 主界面分类汇总按钮
	     *      $$fun_summary_sort: 分类汇总模块排序按钮
	     *      	&&fun_summary_sortpanel_cancel: 分类汇总模块排序按钮下的取消按钮
	     *          &&fun_summary_sortpanel_submit: 分类汇总模块排序按钮下的确定按钮
	     *      $$fun_summary_filter: 分类汇总模块筛选按钮
	     *      	&&fun_summary_filterpanel_cancel: 分类汇总模块筛选按钮下的取消按钮
	     *          &&fun_summary_filterpanel_submit: 分类汇总模块筛选按钮下的确定按钮 
	     *      $$fun_summary_filterclear: 分类汇总模块取消筛选按钮
	     *      $$fun_summary_newcolumn: 分类汇总模块新增列按钮
	     *      $$fun_summary_export: 分类汇总模块导出按钮
	     *   	$$fun_summary_cancel: 分类汇总模块下取消按钮 
	     *      $$fun_summary_submit: 分类汇总模块下确定按钮 
	     *      $$fun_summary_removeall: 分类汇总模块下全部删除按钮 
	     *      $$Create_SummaryGridPanel_Remote(_database,_jsonmsg,_pageSize,_sql): 功能函数，动态创建gridpanel
	     *   @@fun_cdc_export: 动态创建gridpanel的导出按钮
	     * 	 @@fun_cdc_submit: 动态创建gridpanel的提交按钮
	     * 	 @@fun_cdc_removeall: 动态创建gridpanel的全部删除按钮
	     *   @@Create_GridPanel_Remote(_database,_jsonmsg,_pageSize,_sql): 功能函数，动态创建gridpanel
	     *   @@ReloadGridStore(textvalue): 表格模糊筛选
	     * ## grid绑定右键实现copy+paste
	     *   @@fun_cdcombination_cell_copy_nav:复制cell
	     * 		$$fun_cell_copy(_grid,_buttonid) 
	     *   @@fun_cdcombination_row_copy_nav复制row
	     *  	$$fun_row_copy(_grid,_buttonid)
	     *   @@fun_cdcombination_row_copy_header_nav复制带表头的row
	     *  	$$fun_row_copy_header(_grid,_buttonid)
	     * ## 该页面所有图表函数
	     *   @@fun_barchart: 主界面柱形图按钮
	     *   	$$barchart_summit: 柱形图提交按钮
	     *      $$fun_winpanel_resize: 使用echarts的时候用【重要】
	     *   @@fun_columnchart: 主界面柱形图按钮
	     *   	$$columnchart_summit: 柱形图提交按钮
	     *   @@fun_linechart: 主界面折线图按钮
	     *   	$$linechart_summit: 折线图提交按钮
	     *   @@fun_areachart: 主界面面积图按钮
	     *   	$$areachart_summit: 面积图提交按钮
	     *   @@fun_piechart: 主界面饼图按钮
	     *   	$$piechart_summit: 饼图提交按钮
	     *   @@fun_scatterchart: 主界面散点图按钮
	     *   	$$scatterchart_summit: 散点图提交按钮
	     *   @@fun_doughnutchart: 主界面圆环图按钮
	     *   	$$doughnutchart_summit: 圆环图提交按钮
	     *   @@fun_bubblechart: 主界面气泡图按钮
	     *   	$$bubblechart_summit: 气泡图提交按钮
	     *   @@fun_radarchart: 主界面雷达图按钮
	     *   	$$radarchart_summit: 雷达图提交按钮
	     *   @@fun_combinedchart: 主界面结合图按钮
	     *   	$$combinedchart_summit: 结合图提交按钮
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
	    		Ext.Msg.alert('提示','没有选择列!');
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
		       	   	name : tablename,  //默认是and
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
				Ext.Msg.alert('提示','没有数据可排序!');
			}
	   	}
	   	
		function fun_sort_cancel(){
		    Ext.MessageBox.confirm('提示','确定需要清空排序条件?',callback);
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
		       	   default_id : '主要关键字',
		           find_field:'年份',	         
		           Order_type:'降序'           
		       });
			}else{
		       var row = new Ext.data.Record({ 
		       	   default_id : '次要关键字',
		           find_field:'年份',          
		           Order_type:'降序'       	     
		       });		
			}		
			var selected_rows = select_model.getCount();
			if(selected_rows == 0){
		       large_sort_panel.stopEditing();        
		       large_sort_panel_store.insert(i,row);  //在第一行插入这一行 这个的调用对象是store  
		       large_sort_panel.startEditing(0,1);   //在哪一行开始编辑
			}else{
				var seletedGrid = select_model.getSelected();
				var rowid = large_sort_panel_store.indexOf(seletedGrid)+1;
		        large_sort_panel.stopEditing();        
		        large_sort_panel_store.insert(rowid,row);  //在第一行插入这一行 这个的调用对象是store  
		        large_sort_panel.startEditing(0,1);   //在哪一行开始编辑		
			}      
			large_sort_panel_store.commitChanges();
		}
		
		function fun_sort_del(){
			large_sort_panel_store.commitChanges();		
			var store_count = large_sort_panel_store.getCount();
			var select_model =large_sort_panel.getSelectionModel();
			var selected_rows = select_model.getCount();
			if(selected_rows == 0){
				Ext.Msg.alert('错误','请选择要删除的排序条件!');
			}
			else if(selected_rows == 1){	
			    var single_var = select_model.getSelected();
				var rowid = large_sort_panel_store.indexOf(single_var);
				if(store_count >1){
					if(rowid == 0){
				   		large_sort_panel_store.getAt(1).set('default_id','主要关键字');
					}			
					large_sort_panel_store.remove(single_var);
				}
				else{
					large_sort_panel_store.remove(single_var);
				}
			}
			else if(selected_rows>1 && selected_rows != store_count){
				var single_vars = select_model.getSelections();
				if(single_vars[0].get('default_id')=='主要关键字'){
					large_sort_panel_store.remove(single_vars);
					large_sort_panel_store.commitChanges();
					large_sort_panel_store.getAt(0).set('default_id','主要关键字');
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
			    	Ext.Msg.alert('提示','一次只能选择一条!');
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
			        		large_sort_panel_store.getAt(rowIndex).set('default_id','次要关键字');
			        		large_sort_panel_store.getAt(rowIndex-1).set('default_id','主要关键字');
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
			    	Ext.Msg.alert('提示','一次只能选择一条!');
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
			        		large_sort_panel_store.getAt(rowIndex+1).set('default_id','次要关键字');
			        		large_sort_panel_store.getAt(rowIndex).set('default_id','主要关键字');
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
					Ext.Msg.alert('错误','有列被多次排序，请删除重复的排序条件，然后重试!');
				}
				else{
					var sql_str='';
					for(var i = 0 ; i <= store_count-1 ; i++){
						var textformula = fun_newcolumn_dataindexformula('EN_formula',sort_field_array[i],'new_field',large_newcolumn_panel_onlyread_gridpanel_store);
						if(textformula.length>0){
							sql_str = sql_str + ' (' +textformula+ ') ' ;
						}
						else{
							if(sort_field_array[i] == '年份'){sql_str = sql_str + ' year_id ';}
							else{sql_str = sql_str + ' ' + sort_field_array[i] + ' ';}
						}
						if(order_field_array[i] == '降序'){sql_str = sql_str + ' desc, ';}
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
			    Ext.MessageBox.confirm('提示','确定需要取消筛选吗?',callback);
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
				Ext.Msg.alert('提示','没有数据可取消筛选!');
			}		
		}
	    
	    function fun_cdc_filter(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
					var large_filter_panel_tree_root=new Ext.tree.AsyncTreeNode({   
					        id:"root",     
					        expanded:true,
				        	text :'指标' ,      	
				        	children : eval(fun_tree_listname(Ext.getCmp("CDCombination_gridpanel")))		       
					});	
					large_filter_panel_tree.setRootNode(large_filter_panel_tree_root); 			
					large_filter_panel.show();	
			}
			else{
				Ext.Msg.alert('提示','没有数据可筛选!');
			}
		}	
		
		function fun_filter_clear(){
			Ext.MessageBox.confirm('提示','确定需要清空条件吗?',callback);
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
		    	Ext.Msg.alert('错误','请选择需要删除的条件!');
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
					var dataindex_data = large_filter_panel_gridpanel_store.data.items[i].data.dataindex;	//隐藏值			
					var filter_type_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_type;
					var contents_data = large_filter_panel_gridpanel_store.data.items[i].data.contents;	
					either_data_array.push(either_data);
					dataindex_data_array.push(dataindex_data);
					filter_type_data_array.push(filter_type_data);				
					contents_data_array.push(contents_data);							
				}			
				/*判断输入内容是否有空值*/		
				var _contents_blank = 0;			
				for(var i = 0; i <= contents_data_array.length-1;i++){
					if(contents_data_array[i].replace(" ","").length == 0) _contents_blank = _contents_blank + 1;	
				}			
				if(_contents_blank>0){
					Ext.Msg.alert('错误','请输入条件内容!');
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
				/*和\或*/
				var either_data_EN_data = large_filter_panel_gridpanel_store.data.items[i].data.either;
				var either_data_CH_data = either_combox_store.getAt(either_combox_store.find('either_type_id',either_data_EN_data)).data.either_type;
				either_data_EN_array.push(either_data_EN_data);
				either_data_CH_array.push(either_data_CH_data);
				/*指标*/					
				var filter_field_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_field;
				var dataindex_data = large_filter_panel_gridpanel_store.data.items[i].data.dataindex;
				filter_field_data_array.push(filter_field_data);
				dataindex_data_array.push(dataindex_data);
				/*数学条件*/	
				var math_type_EN_data = large_filter_panel_gridpanel_store.data.items[i].data.filter_type;
				var math_type_CH_data = filtertype_combox_store.getAt(filtertype_combox_store.find('math_type_id',math_type_EN_data)).data.math_type;
				math_type_EN_data_array.push(math_type_EN_data);
				math_type_CH_data_array.push(math_type_CH_data);
				/*内容*/
				var contents_data = large_filter_panel_gridpanel_store.data.items[i].data.contents;
				contents_data_array.push(contents_data);
				/*序号*/
				var sort_data = large_filter_panel_gridpanel_store.data.items[i].data.sort_flag;
				sort_data_array.push(sort_data);
			}
			/*实现放入readonlygrid中*/		
			for(var i = 0;i<=store_count-1;i++){	
				var en_sql_str = ' ',ch_sql_str = ' ';
				var _count = countInArray(filter_field_data_array[i],filter_field_data_array)
				if(_count>1 ){/*字段有重复*/
					if(i == store_count-1 || dataindex_data_array[i] != dataindex_data_array[i+1]){ //最后一个
						for(var k = i - _count +1 ; k <= i ; k++){
							if(fun_gridcolumnindex(dataindex_data_array[i],Ext.getCmp("CDCombination_gridpanel"))>=fieldstr_point){/*数字格式*/   //空格使用其他字符替换
								if(filter_field_data_array[k].indexOf("疾病名称")>=0 || filter_field_data_array[k].indexOf("医院类型")>=0)
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " '" + contents_data_array[k] + "' ";
								else
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " " + contents_data_array[k] + " ";							
							}
							else{
								if(math_type_CH_data_array[i] == '包含' || math_type_CH_data_array[i] == '不包含'){ 
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k] +  " '%" + contents_data_array[k] +"%' ";								
								}
								else if(math_type_CH_data_array[i] == '开头是' || math_type_CH_data_array[i] == '开头不是'){ 
									en_sql_str = en_sql_str + either_data_EN_array[k] + " " + dataindex_data_array[k] + " " + math_type_EN_data_array[k].substring(1,math_type_EN_data_array[k].length) +  " '" + contents_data_array[k] +"%' ";								
								}	
								else if(math_type_CH_data_array[i] == '结尾是' || math_type_CH_data_array[i] == '结尾不是'){ 
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
						/*插入Readonlypanel*/
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
				       	large_filter_panel_onlyread_gridpanel_store.insert(k,row);  //在第一行插入这一行 这个的调用对象是store  
				       	large_filter_panel_onlyread_gridpanel.startEditing(0,1);   //在哪一行开始编辑
				       	large_filter_panel_onlyread_gridpanel_store.commitChanges();
				       	large_filter_panel_onlyread_gridpanel_store.sort('sort_flag', 'ASC');	   		       	
					}										
				}else{/*字段没有重复*/								
					if(fun_gridcolumnindex(dataindex_data_array[i],Ext.getCmp("CDCombination_gridpanel"))>=fieldstr_point){/*数字格式*/   //空格使用其他字符替换
						if(filter_field_data_array[i].indexOf("疾病名称")>=0 || filter_field_data_array[i].indexOf("医院类型")>=0)
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '" + contents_data_array[i] + "' ";
						else
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " " + contents_data_array[i];
					}					
					else{/*字符格式*/
						if(math_type_CH_data_array[i] == '包含' || math_type_CH_data_array[i] == '不包含'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '%" + contents_data_array[i] +"%' ";					
						}
						else if(math_type_CH_data_array[i] == '开头是' || math_type_CH_data_array[i] == '开头不是'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i].substring(1,math_type_EN_data_array[i].length) +  " '" + contents_data_array[i] +"%' ";					
						}
						else if(math_type_CH_data_array[i] == '结尾是' || math_type_CH_data_array[i] == '结尾不是'){ 
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i].substring(1,math_type_EN_data_array[i].length) +  " '%" + contents_data_array[i] +"' ";					
						}							
						else{
							en_sql_str = dataindex_data_array[i] + " " + math_type_EN_data_array[i] +  " '" + contents_data_array[i] + "' ";						
						}					
					}
					ch_sql_str = filter_field_data_array[i] + math_type_CH_data_array[i] +"'"+contents_data_array[i]+"'";	
					
					/*插入Readonlypanel*/
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
			       	large_filter_panel_onlyread_gridpanel_store.insert(k,row);  //在第一行插入这一行 这个的调用对象是store  
			       	large_filter_panel_onlyread_gridpanel.startEditing(0,1);   //在哪一行开始编辑
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
				Ext.Msg.alert('提示','没有数据可新增列!');
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
					/*插入列*/ 
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
				Ext.Msg.alert('提示','没有新增的字段!');
			}		
		}
		
	   function fun_newcolumn_add(){
	    	var text_fieldname = Ext.getCmp('large_newcolumn_panel_textname').getValue();
	    	if(trim(text_fieldname) == '不允许为空' || trim(text_fieldname).length == 0){
	    		Ext.Msg.alert('错误','名称不能为空!');
	    	}
	    	else{
		    	var text_rawvalue = Ext.getCmp('large_newcolumn_panel_textformula').getValue();
		    	var text_dbrawvalue = text_rawvalue;
		    	var text_validation_value = text_rawvalue;
		    	var text_value = text_rawvalue;    	
		    	if(text_value != '仅限(,+,-,*,/,)等四则运算符' || trim(text_rawvalue).length != 0){
		    		/*将四则运算符进行替换*/
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
		    			Ext.Msg.alert('公式错误','输入指标错误!'); 
		    		}
		    		else{
		    			/*将指标替换为数字，进行后台验证*/
			    		for(k = 0 ; k <text_array.length;k++){
			    			if(fun_gridfieldname_exists(trim(text_array[k]),Ext.getCmp("CDCombination_gridpanel"))){
			    				text_validation_value = text_validation_value.replace(text_array[k],1); //用于计算
			    			}
			    		}
			    		/*后台验证公式*/
			    		Ext.Ajax.request({      
				             url: '../ActionController/ExpressionJexl.jsp',        
				             params: {Exp : text_validation_value},      
				             callback : function(options, success, response) {   
				                if(success){ 
				                	if(trim(response.responseText) == "Error"){
				                		Ext.MessageBox.alert('错误',"公式有错误,请检查!"); 	
				                	}else{		                		
										/*中文替换为数据库指标*/
							    		for(k = 0 ; k <text_array.length;k++){
							    			if(fun_gridfieldname_exists(trim(text_array[k]),Ext.getCmp("CDCombination_gridpanel"))){
							    				var dataindex = fun_treenodetext_dataindex(text_array[k],Ext.getCmp('large_newcolumn_panel_tree').getRootNode());
							    				text_dbrawvalue = text_dbrawvalue.replace(text_array[k],"CAST("+dataindex+" as decimal(24,2))"); 
							    			}
							    		}						    		
							    		/*插入字段公式展示页面*/
							    		var sort_id =  Ext.getCmp("CDCombination_gridpanel").getColumnModel().getColumnCount(); //0是checkbox
							    		var i = large_newcolumn_panel_onlyread_gridpanel_store.getCount();						    		
							    		var record = new Ext.data.Record({ 
								       	   new_field : text_fieldname,
								           CH_formula: text_rawvalue,       
								           EN_formula: text_dbrawvalue,
								           sort_flag : sort_id
								       	});
								        large_newcolumn_panel_onlyread_gridpanel.stopEditing();        
								        large_newcolumn_panel_onlyread_gridpanel_store.insert(i,record);  //在第一行插入这一行 这个的调用对象是store  
								        large_newcolumn_panel_onlyread_gridpanel.startEditing(0,1);   //在哪一行开始编辑
								        large_newcolumn_panel_onlyread_gridpanel_store.commitChanges();							       
								        /*清空两个界面*/
								        Ext.getCmp('large_newcolumn_panel_textname').reset();
								        Ext.getCmp('large_newcolumn_panel_textformula').reset();
								        /*提交*/
										fun_newcolumn_submit();							        
				                	}		                    		                   
				                }else {		                	
				                 	Ext.MessageBox.alert('错误',"公式有错误,请检查!");   
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
				Ext.Msg.alert('错误','请选择要删除的自定义列!');
			}
			else{
				Ext.MessageBox.confirm('提示','确定需要删除新增列吗?',callback);
	    		function callback(id){
		   			if(id == 'yes'){
						if(selected_rows == 1){	
						    var record = select_model.getSelected();
						    large_newcolumn_panel_onlyread_gridpanel_store.remove(record);
						    /*删除新增列模块中的新增列*/
						    Ext.getCmp("CDCombination_gridpanel").removeColumn(record.get('new_field'));
						    /*删除排序模块中的新增列*/
						    for(var i = 0 ;i<=large_sort_panel_store.getCount()-1;i++){
						    	var data = large_sort_panel_store.data.items[i].data;
						    	if(data.find_field == record.get('new_field')){
						    		large_sort_panel_store.removeAt(i);
						    	}
						    }
						    if(large_sort_panel_store.getCount()>0){
						    	large_sort_panel_store.getAt(0).set('default_id','主要关键字');
						    }
						    /*删除筛选模块中的新增列*/
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
						    /*删除新增列*/
						    for(var i = 0 ;i <=records.length-1;i++){
						    	Ext.getCmp("CDCombination_gridpanel").removeColumn(records[i].get('new_field'));
						    	/*删除排序模块中的新增列*/
							    for(var j = 0 ;j<=large_sort_panel_store.getCount()-1;j++){
							    	var data = large_sort_panel_store.data.items[j].data;
							    	if(data.find_field == records[i].get('new_field')){
							    		large_sort_panel_store.removeAt(j);			    		
							    	}
							    }
							    if(large_sort_panel_store.getCount()>0){
							    	large_sort_panel_store.getAt(0).set('default_id','主要关键字');
							    }
							    /*删除筛选模块中的新增列*/
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
			    	/*加载分类汇总字段combox*/ 
			    	large_summary_panel_groupname_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于"))); 
			    	/*加载分类汇总方式combox*/
			    	large_summary_panel_groupvalue_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    	}
		    	else{
			    	/*加载分类汇总字段combox*/ 
			    	large_summary_panel_groupname_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于"))); 
			    	/*加载分类汇总方式combox*/
			    	large_summary_panel_groupvalue_store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			    		
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
				Ext.Msg.alert('提示','没有数据分类汇总!');
			}    	
	    }
	    
	    function fun_summary_cancel(){
	    	large_summary_panel.hide();
	    }
	    
	    function fun_summary_removeall(){
			Ext.MessageBox.confirm('提示','确定需要删除结果吗?',callback);
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
	    	/*清空筛选和排序sql*/
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
			/*开始分类汇总*/		
	    	var combox_valuename =  Ext.getCmp('large_summary_panel_groupname').getValue();
	    	var combox_displayname =  Ext.getCmp('large_summary_panel_groupname').getRawValue();
	    	var combox_valuefield = Ext.getCmp('large_summary_panel_valuename').getValue();
	    	var combox_displayfield = Ext.getCmp('large_summary_panel_valuename').getRawValue();    	
	    	var combox_type = Ext.getCmp('large_summary_panel_type').getValue();
	    	var combox_CNtype = Ext.getCmp('large_summary_panel_type').getRawValue();  
	    		/*去掉[万]，[助理]*/
	    	combox_displayfield = replaceAll(combox_displayfield,"\\[平方公里\\]","");	
			combox_displayfield = replaceAll(combox_displayfield,"\\[十分之一\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[万吨\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[吨\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[万千瓦时\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[亿元\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[亿\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[万美元\\]","");		
			combox_displayfield = replaceAll(combox_displayfield,"\\[万元\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[万\\]","");
			combox_displayfield = replaceAll(combox_displayfield,"\\[助理\\]","含助理");  	    	
	    	if(trim(combox_valuename).length == 0 || trim(combox_valuefield).length == 0 || trim(combox_type).length == 0){
	    		Ext.Msg.alert('提示','字段不允许为空!');
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
		    	/*动态创建gridpanel*/
	    		summary_module_sql = sql_str; 
	    		if("省份".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '行政区划代码',dataIndex:'admincode_temp',width:90,sortable: true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}
	    		else if("地级市".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '行政区划代码',dataIndex:'admincode_temp',width:90,sortable: true},{header: '省份',dataIndex:'province',width:90,sortable: true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}
	    		else if("区县市@区县城市".indexOf(combox_displayname)>=0){
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '行政区划代码',dataIndex:'admincode_temp',width:90,sortable: true},{header:'省份',dataIndex:'province',width:90,sortable:true},{header:'地级市',dataIndex:'city',width:90,sortable:true},{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";
	    		}    		
	    		else{
	    			var columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header: '"+combox_displayname+"',dataIndex: '"+combox_valuename+"',width:100,sortable: true}," + jsoncolumnmodel + "]";	
	    		} 
	    		//var virtual_dbname = "(" + cdcombination_sql + ") as cdc_temp_inner";
	    		var virtual_dbname = cdcombination_sql;
	    		var sql = sort_module_sql + '@' + filter_module_sql + '@'+  newcolumn_module_sql + '@' + summary_module_sql + '@' + summary_sortpanel_module_sql + '@' + summary_filterpanel_module_sql;
				Create_SummaryGridPanel_Remote(virtual_dbname,columnnamedataindex,pageSize,sql);//后期应该改成numberpoint传入服务器端
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
			
			var large_summary_panel_showresult_gridpanel_store = new Ext.data.Store({//配置分组数据集
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
				    displayMsg :'第{0}条-{1}条，一共{2}条',
			        onFirstLayout : function(){//增加这个配置
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
		       '求和:',
		       {id:'text_plus',text:'111'},
		       {xtype : 'tbspacer'},
		       '平均值:',
		       {id:'text_avg',text:'11'},
		       {xtype : 'tbspacer'},
		       '最大值:',
		       {id:'text_max',text:'11'},
		       '最小值:',
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
			        text:'单元格加载复制内容',  
			        iconCls:'cellcopy',
			        tooltip:'点击之后，点击功能栏上的复制按钮进行入职',
			        handler:fun_summary_cell_copy_nav  
			    },
		    '-',
		    	{  
			        text:'整行加载复制内容',  
			        iconCls:'copy',
			        tooltip:'点击之后，点击功能栏上的复制按钮进行入职',
			        handler:fun_summary_row_copy_nav  
			    },
		    	{  	        
			        text:'整行加载复制(包括表头)内容',  
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
			            	exportRowNum = parseInt(trim(data.split("@")[0])); //当前页可导出量
			            	var exportedRows = trim(data.split("@")[1]);  //当月已经导出行数
			            	var exportedObs =  trim(data.split("@")[2]);  //当月已经导出次数	
			            	var exportRowsOfRights = parseInt(trim(data.split("@")[3]));  //权限当月导出行数
			            	var exportObsOfRights = parseInt(trim(data.split("@")[4]));   //权限当月导出次数	            	
			            	if(exportedObs == ''){
								if(erows > exportRowNum){
									Ext.Msg.alert('提示','该账户权限只能导出'+exportRowNum+'条!');
								}
								else{
								    Ext.MessageBox.confirm('提示','确定需要导出?',callback);
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
									Ext.Msg.alert('提示','该账户权限只能导出'+exportRowNum+'条!');
								}	            	
				            	else if(exportedObs+1 > exportObsOfRights){
				            		Ext.Msg.alert('提示','该账户在当月已经累计超过导出次数!');
				            	}
				            	else if(exportedRows+erows > exportRowsOfRights){
				            		Ext.Msg.alert('提示','该账户在当月已经累计超过导出行数!');
				            	}
								else{		   						
								    Ext.MessageBox.confirm('提示','确定需要导出?',callback);
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
			             	Ext.MessageBox.alert('错误',"数据有错误!");   
			            }   
			        }
			    });
			}
			else{
				Ext.Msg.alert('提示','没有数据可导出!');
			}
		} 
		
		function fun_summary_sort(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
				large_summary_panel_sortpanel_groupname_store.loadData(eval(fun_combox_listname(Ext.getCmp("large_summary_panel_showresult_gridpanel"))));			
				large_summary_panel_sortwinpanel.show();		
			}
			else{
				Ext.Msg.alert('提示','没有数据可排序!');
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
				Ext.Msg.alert('提示','请选择排序字段或者排序方式!');
			}			
		}
		
		function fun_summary_filter(){
			if (Ext.getCmp("large_summary_panel_showresult_gridpanel") != undefined) {
				large_summary_panel_filterpanel_groupname_store.loadData(eval(fun_combox_listname(Ext.getCmp("large_summary_panel_showresult_gridpanel"))));			
				large_summary_panel_filterwinpanel.show();		
			}
			else{
				Ext.Msg.alert('提示','没有数据可筛选!');
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
				Ext.Msg.alert('提示','请筛选条件有误，请重新填写!');
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
					Ext.Msg.alert('提示','请筛选条件有误，请重新填写!');	
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
			            	exportRowNum = parseInt(trim(data.split("@")[0])); //当前页可导出量
			            	var exportedRows = trim(data.split("@")[1]);  //当月已经导出行数
			            	var exportedObs =  trim(data.split("@")[2]);  //当月已经导出次数	
			            	var exportRowsOfRights = parseInt(trim(data.split("@")[3]));  //权限当月导出行数
			            	var exportObsOfRights = parseInt(trim(data.split("@")[4]));   //权限当月导出次数	            	
			            	if(exportedObs == ''){
								if(erows > exportRowNum){
									Ext.Msg.alert('提示','该账户权限只能导出'+exportRowNum+'条!');
								}
								else{
								    Ext.MessageBox.confirm('提示','确定需要导出?',callback);
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
									Ext.Msg.alert('提示','该账户权限只能导出'+exportRowNum+'条!');
								}	            	
				            	else if(exportedObs+1 > exportObsOfRights){
				            		Ext.Msg.alert('提示','该账户在当月已经累计超过导出次数!');
				            	}
				            	else if(exportedRows+erows > exportRowsOfRights){
				            		Ext.Msg.alert('提示','该账户在当月已经累计超过导出行数!');
				            	}
								else{		   						
								    Ext.MessageBox.confirm('提示','确定需要导出?',callback);
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
			             	Ext.MessageBox.alert('错误',"数据有错误!");   
			            }   
			        }
			    });	
			}
			else{
				Ext.Msg.alert('提示','没有数据可导出!');
			}
		}     
	    
	    function fun_cdc_submit(){
	    	sysfunStr = '';
			var store_count = thirdGridStore.getCount();
			var name_array = [],uniquename_array = [];
			if(store_count>1){
				for(var i=0;i<store_count;i++){
					name_array.push(thirdGridStore.data.items[i].data.dimension);
					/*保存数据库*/
					if(i == store_count-1)
						sysfunStr = sysfunStr + thirdGridStore.data.items[i].data.name.replace('--','');
					else
						sysfunStr = sysfunStr + thirdGridStore.data.items[i].data.name.replace('--','') + ',';
				}
				uniquename_array = ArrayUnique(name_array);		
				if(uniquename_array.length>1){
					Ext.Msg.alert('提示','数据细分程度需一致,请重新选择合并数据集!');
				}
				else{
					/*获取dimension*/
					var data = thirdGridStore.data.items[0].data;
					dimension = data.dimension;
					if(dimension == "区县市" || dimension == "区县城市") drillleastlevel = "district";
					else if(dimension == "地级市") drillleastlevel = "city";
					else if(dimension == "省份") drillleastlevel = "province";
					else if(dimension == "中国") drillleastlevel = "china";
											
					var dbname_str="",dataindex_str = "";
					for(var i=0;i<store_count;i++){
						dbname_str = dbname_str + "@" + thirdGridStore.data.items[i].data.dbname;
						dataindex_str = dataindex_str + "@" + thirdGridStore.data.items[i].data.dataindex;
					}	
					dbname_str = trim(dbname_str.substring(1,dbname_str.length));
					dataindex_str = trim(dataindex_str.substring(1,dataindex_str.length));
			
				   /***************************
				     * ## 获取合并数据的sql
				   ****************************/ 
					Ext.getBody().mask("请稍等,正在创建数据...","x-mask-loading");
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
							cdcombination_sql = response.responseText;//全局变量
							//创建column model
							var jsoncolumnmodel = "";						
							for(var i = 0;i<store_count;i++){
								var name = thirdGridStore.data.items[i].data.field;
								var field = thirdGridStore.data.items[i].data.dataindex;
								var dbname = thirdGridStore.data.items[i].data.dbname;							
								if(name.indexOf("+")>=0){
									var name_array = name.split("+");
									var field_array = field.split("+");
									for(var j =0;j<name_array.length;j++){										
										if(trim(name_array[j]) == "疾病名称" || trim(name_array[j]) == "医院类型"){
											jsoncolumnmodel = jsoncolumnmodel + "{header:'"+trim(name_array[j])+"_"+(i+1)+"',dataIndex:'"+trim(field_array[j])+"_"+(i+1)+"',align:'left',width:160,sortable:false},";										
										}
										else{
											jsoncolumnmodel = jsoncolumnmodel + "{header:'"+trim(name_array[j])+"_"+(i+1)+"',dataIndex:'"+trim(field_array[j])+"_"+(i+1)+"',align:'right',width:160,xtype:'numbercolumn',format:'0,00.0',sortable:false},";	
										}									
									}
								}
								else{
									if(trim(name) == "疾病名称" || trim(name) == "医院类型"){
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
							if(dimension == "中国"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'年份',dataIndex:'year_id',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 2;
							}						
							else if(dimension == "省份"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'年份',dataIndex:'year_id',width:100,sortable:false},{header:'省份',dataIndex:'province',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 3;
							}
							else if(dimension == "地级市"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'年份',dataIndex:'year_id',width:100,sortable:false},{header:'省份',dataIndex:'province',width:100,sortable:false},{header:'地级市',dataIndex:'city',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 4;
							}
							else if(dimension == "区县市"){
								columnnamedataindex = "[new Ext.grid.RowNumberer({width:30}),{header:'年份',dataIndex:'year_id',width:100,sortable:false},{header:'省份',dataIndex:'province',width:100,sortable:false},{header:'地级市',dataIndex:'city',width:100,sortable:false},{header:'区县市',dataIndex:'district',width:100,sortable:false}," + jsoncolumnmodel + "]";
								numcolumnpoint = 5;
							}
						    var virtual_dbname = cdcombination_sql;//"(" + cdcombination_sql + ") as cdc_temp_inner";
							Create_GridPanel_Remote(virtual_dbname,columnnamedataindex,pageSize,numcolumnpoint,cdcombination_sql);
							
							//加载新增列treenode
							if(drillleastlevel == "china"){
								var large_newcolumn_panel_tree_root=new Ext.tree.AsyncTreeNode({   
							        id:"large_newcolumn_panel_tree_root",     
							        expanded:true,
						        	text :'指标',       	
						        	children : eval(fun_tree_listname_onlyfield(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point))		       
								});	
							}
							else{
								var large_newcolumn_panel_tree_root=new Ext.tree.AsyncTreeNode({   
							        id:"large_newcolumn_panel_tree_root",     
							        expanded:true,
						        	text :'指标',       	
						        	children : eval(fun_tree_listname_onlyfield(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1))		       
								});														
							}
							large_newcolumn_panel_tree.setRootNode(large_newcolumn_panel_tree_root);
							//清空排序，筛选，新增列设置的条件
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
							Ext.Msg.alert('错误','操作出错!');
						}					
					});	
				}	
			} 
			else{
				Ext.Msg.alert('提示','至少需要两个合并数据源!');
			}
	    }
	    
	    function fun_cdc_removeall(){
			Ext.MessageBox.confirm('提示','确定需要删除结果吗?',callback);
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
			
			var CDCombination_gridpanel_store = new Ext.data.Store({//配置分组数据集
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
			    displayMsg :'第{0}条-{1}条，一共{2}条',
		        onFirstLayout : function(){//增加这个配置
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
			
			//右键
			var CDCombination_gridpanel_rightMenu = new Ext.menu.Menu( {  
		    id : 'CDCombination_gridpanel_rightMenu',  
		    items : [
		    	{  
			        text:'单元格加载复制内容',  
			        iconCls:'cellcopy',
			        tooltip:'点击之后，点击功能栏上的复制按钮进行入职',
			        handler:fun_cdcombination_cell_copy_nav  
			    },
		    '-',
		    	{  
			        text:'整行加载复制内容',  
			        iconCls:'copy',
			        tooltip:'点击之后，点击功能栏上的复制按钮进行入职',
			        handler:fun_cdcombination_row_copy_nav  
			    },
		    	{  	        
			        text:'整行加载复制(包括表头)内容',  
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
		             	Ext.MessageBox.alert('错误',"请重新选择!");   
		            }   
		        }
		    });
	    }
		
		function fun_cell_copy(_grid,_buttonid){ 
			var select_model =_grid.getSelectionModel();	
			var selected_rows = select_model.getCount(); 
		    if(select_model.getSelected() == undefined) {  
		        Ext.Msg.alert('提示','未选择任何数据!');  
		    }
		    else{
				if(selected_rows == 1){
					var record = select_model.getSelected();
					crows = 1;   //全局变量
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //全局变量
				            	var data = trim(response.responseText);				            	
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
					            	}
									else{		   						
									    var fieldName = _grid.getColumnModel().getDataIndex(columnindex);
										var info = record.get(fieldName);  
										Ext.getCmp(_buttonid).setValue(info);				       								        					
									}
				            	}
				            }else {		                	
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
								crows = records.length;   //全局变量
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
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
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
		        Ext.Msg.alert('提示','未选择任何数据!');  
		    } 
		    else{
				if(selected_rows == 1){
					var info = "";
					var record = select_model.getSelected();						
					crows = 1;   //全局变量
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //全局变量
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
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
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
								crows = records.length;   //全局变量
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
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
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
		        Ext.Msg.alert('提示','未选择任何数据!');  
		    } 
		    else{
				if(selected_rows == 1){
					var info_header = "";
					var row_info = "";
					var record = select_model.getSelected();	
					crows = 1;   //全局变量
					//copy rights
					Ext.Ajax.request({      
						 url: 'GetCDCcopyRows',
				         params: {rights:rightspk},      
				         callback : function(options, success, response) {   
				            if(success){ 
								crows = 1;   //全局变量
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
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
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
								crows = records.length;   //全局变量
				            	var data = trim(response.responseText);
				            	copyRowNum = parseInt(trim(data.split("@")[0])); //当前页可复制量
				            	var copyedRows = trim(data.split("@")[1]);  //当月已经复制行数
				            	var copyRowsOfRights = parseInt(trim(data.split("@")[2]));  //权限当月复制行数	            	
				            	if(copyedRows == ''){
									if(crows > copyRowNum){
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
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
										Ext.Msg.alert('提示','该账户权限只能复制'+copyRowNum+'条!');
									}	            	
					            	else if(copyedRows+crows > copyRowsOfRights){
					            		Ext.Msg.alert('提示','该账户在当月已经累计超过复制行数!');
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
				             	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
				            }   
				        }
				    });	
				}
		    }		
		}
				
	  /***************************
	     * ## 图表开始
	   ****************************/
		//柱形图
	    function fun_barchart(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {	    	
		    	barchart_winpanel.show();    	
		    	if(activeaccording_id == 0.0 ){
		    		if(drillleastlevel == "china"){	  
			    		Ext.getCmp('singlebarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('singlebarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('singlebarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('singlebarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 0.1 ){
		        	if(drillleastlevel == "china"){	
		        		Ext.getCmp('multibarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('multibarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		        	}
		        	else{
		        		Ext.getCmp('multibarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('multibarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                	if(charttype == "三维堆积柱形图(100%)" || charttype == "二维堆积柱形图(100%)"){
			                		renderCharts("barchartContainer",charttypeid,1.1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                	}
			                	else{
			                		renderCharts("barchartContainer",charttypeid,1,caption,subcaption,haxisname,vaxisname,showlabel,data);
			                	}
			                }else {                	
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	} 
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }
		//条形图        
	    function fun_columnchart(){ 
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {	    	
		    	columnchart_winpanel.show();
		    	if(activeaccording_id == 1.0 ){
		    		if(drillleastlevel == "china"){	
		    			Ext.getCmp('singlecolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('singlecolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
		    			Ext.getCmp('singlecolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('singlecolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 1.1 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multicolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('multicolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		        	}
		        	else{
			        	Ext.getCmp('multicolumnchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('multicolumnchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	        			        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}		
	    	} 
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }
	
		//折线图        
	    function fun_linechart(){ 
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	linechart_winpanel.show();
		    	if(activeaccording_id == 2.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singlelinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('singlelinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
						Ext.getCmp('singlelinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('singlelinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));
		    		}
		    	}
		        else if(activeaccording_id == 2.1 ){
		        	if(drillleastlevel == "china"){
		        		Ext.getCmp('multilinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('multilinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		        	}
		        	else{
		        		Ext.getCmp('multilinechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('multilinechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }
	    
		//面积图        
	    function fun_areachart(){  
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {     	
		    	areachart_winpanel.show();
		    	if(activeaccording_id == 3.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singleareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('singleareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
		    			Ext.getCmp('singleareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('singleareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
		        else if(activeaccording_id == 3.1 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multiareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('multiareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		        	}
		        	else{
		        		Ext.getCmp('multiareachart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('multiareachart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    } 
	
		//饼图        
	    function fun_piechart(){    
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	piechart_winpanel.show();
		    	if(activeaccording_id == 4.0 ){
		    		if(drillleastlevel == "china"){
		    			Ext.getCmp('singlepiechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
		    			Ext.getCmp('singlepiechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
		    			Ext.getCmp('singlepiechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
		    			Ext.getCmp('singlepiechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/标签/指标项不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }    
	      
		//散点图     
	    function fun_scatterchart(){  
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	scatterchart_winpanel.show();
		    	if(activeaccording_id == 5.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlescatterchart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('singlescatterchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
			    		Ext.getCmp('singlescatterchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('singlescatterchart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('singlescatterchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));
			    		Ext.getCmp('singlescatterchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/XY指标项不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}
	 		else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }
	    
		//圆环图       
	    function fun_doughnutchart(){
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	doughnutchart_winpanel.show();
		    	if(activeaccording_id == 6.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singledoughnutchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('singledoughnutchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('singledoughnutchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('singledoughnutchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/标签/指标项不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }
	    
		//气泡图     
	    function fun_bubblechart(){   
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	bubblechart_winpanel.show();
		    	if(activeaccording_id == 7.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlebubblechart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('singlebubblechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
			    		Ext.getCmp('singlebubblechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
			    		Ext.getCmp('singlebubblechart_zaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('singlebubblechart_label').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('singlebubblechart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));
			    		Ext.getCmp('singlebubblechart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));
			    		Ext.getCmp('singlebubblechart_zaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/XYZ指标项不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	}
	 		else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    } 
	    
		//雷达图
	    function fun_radarchart(){ 
	    	if (Ext.getCmp("CDCombination_gridpanel") != undefined) {
		    	radarchart_winpanel.show();
		        if(activeaccording_id == 8.0 ){
		        	if(drillleastlevel == "china"){
			        	Ext.getCmp('multiradarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('multiradarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		        	}
		        	else{
			        	Ext.getCmp('multiradarchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('multiradarchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	        		
		        	}
		        }
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  												
				}
	    	} 
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    } 
	    
		//结合图
	    function fun_combinedchart(){    
			if (Ext.getCmp("CDCombination_gridpanel") != undefined) {    	
		    	combinedchart_winpanel.show();
		    	if(activeaccording_id == 9.0 ){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('singlecombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('singlecombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('singlecombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('singlecombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
		    	else if(activeaccording_id == 9.1){
		    		if(drillleastlevel == "china"){
			    		Ext.getCmp('multicombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"小于")));
			    		Ext.getCmp('multicombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point,"大于")));
		    		}
		    		else{
			    		Ext.getCmp('multicombinedchart_haxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"小于")));
			    		Ext.getCmp('multicombinedchart_vaxis').store.loadData(eval(fun_combox_cdcadv_listname(Ext.getCmp("CDCombination_gridpanel"),fieldstr_point-1,"大于")));	    			
		    		}
		    	}
			}
			else{
				Ext.Msg.alert('提示','没有数据可图表!');
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
				}
				else if(single_index == 1){
					Ext.Msg.alert('错误','同一个指标只能选择一种图表!');	
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
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
					Ext.Msg.alert('错误','图表类型/横轴/纵轴不能为空!');
				}
				else if(multi_index == 1){
					Ext.Msg.alert('错误','同一个指标只能选择一种图表!');	
				}
				else if(secondaxisvalue.length == 0){
	    			Ext.Msg.alert('错误','至少需要一个次轴!');			 
				}				
				else if(Ext.getCmp('multicombinedchart_vaxis').getValue() == secondaxisvalue){
	    			Ext.Msg.alert('错误','至少需要一个主轴!');			
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
			                 	Ext.MessageBox.alert('错误',"数据有错误,请重新选择!");   
			                }   
			            }
			        });  													
				}
	    	}    	
	    	else{
	    		Ext.Msg.alert('提示',"请重新展开上面<img src = '../EXT/extjs3.3.1/images/according_expand.png'/>折叠按钮!");
	    	}
	    }    
	          
	   /***************************
	     * ## 图表生成函数
	     * 	@@柱形图
	     * 	 	$$render_singlebarchart(_grid,_fieldstr_point): 单维度柱形图生成
	     *   	$$render_multibarchart(_grid,_fieldstr_point): 多维度柱形图生成
	     * 	 	$$render_singlecolumnchart(_grid,_fieldstr_point): 单维度条形图生成
	     *   	$$render_multicolumnchart(_grid,_fieldstr_point): 多维度条形图生成
	     * 	 	$$render_singlelinechart(_grid,_fieldstr_point): 单维度线形图生成
	     *   	$$render_multilinechart(_grid,_fieldstr_point): 多维度线形图生成
	     * 	 	$$render_singleareachart(_grid,_fieldstr_point): 单维度线形图生成
	     *   	$$render_multiareachart(_grid,_fieldstr_point): 多维度线形图生成
	     * 	 	$$render_singlepiechart(_grid,_fieldstr_point): 单维度饼图生成
	     * 	 	$$render_scatterchart(_grid,_fieldstr_point): 散点图生成
	     * 	 	$$render_singledoughnutchart(_grid,_fieldstr_point): 圆环图生成
	     * 	 	$$render_singlebubblechart(_grid,_fieldstr_point): 气泡图生成
	  	 *   	$$render_multiradarchart(_grid,_fieldstr_point): 雷达图图生成 
	  	 *      $$render_singlecombinedchart(_grid,_fieldstr_point): 单维度结合图生成  
	   ****************************/    
		function render_singlebarchart(_grid,_fieldstr_point){		
			var singlebarchart_store = new Ext.data.SimpleStore({
		   		fields:['fusion_chart_type','fusion_chart_type_id'],
		   		autoLoad : true, 
		   		data : [   			
		   			['二维柱形图','column2d'],
		   			['三维柱形图','column3d'],
		   			['二维帕累托柱形图','pareto2d'],
		   			['三维帕累托柱形图','pareto3d']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlebarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlebarchart_charttype',            
		        			store:singlebarchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'singlebarchart_haxis',            
		        			store:singlebarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									//alert(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于"))
									singlebarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlebarchart_vaxis',
		        			editable : true, 
		        			store:singlebarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }         
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlebarchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'singlebarchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['二维柱形图','mscolumn2d'],
		   			['三维柱形图','mscolumn3d'],
		   			['二维堆积柱形图','stackedcolumn2d'],
		   			['三维堆积柱形图','stackedcolumn3d'],
		   			['二维堆积柱形图(100%)','stackedcolumn2d@1'],
		   			['三维堆积柱形图(100%)','stackedcolumn3d@1']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multibarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		                    listWidth:150,
		    				id:'multibarchart_charttype',            
		        			store:multibarchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multibarchart_haxis',            
		        			store:multibarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){									
									multibarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multibarchart_vaxis',
		        			//editable : false, 
		        			store:multibarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multibarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'multibarchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'multibarchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['二维条形图','bar2d'],
		   			['三维条形图','bar3d']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlecolumnchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_charttype',            
		        			store:singlecolumnchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_haxis',            
		        			store:singlecolumnchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecolumnchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlecolumnchart_vaxis',
		        			//editable : false, 
		        			store:singlecolumnchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecolumnchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlecolumnchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'singlecolumnchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['二维条形图','msbar2d'],
		   			['三维条形图','msbar3d'],
		   			['二维堆积条形图','stackedbar2d'],
		   			['三维堆积条形图','stackedbar3d']	   			
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multicolumnchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_charttype',            
		        			store:multicolumnchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_haxis',            
		        			store:multicolumnchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicolumnchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multicolumnchart_vaxis',
		        			//editable : false, 
		        			store:multicolumnchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicolumnchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'multicolumnchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'multicolumnchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['折线图','line']	,
		   			['平滑折线图','spline']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlelinechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlelinechart_charttype',            
		        			store:singlelinechart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'singlelinechart_haxis',            
		        			store:singlelinechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlelinechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlelinechart_vaxis',
		        			//editable : false, 
		        			store:singlelinechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlelinechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlelinechart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'singlelinechart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['折线图','msline'],
		   			['平滑折线图','msspline']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multilinechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'multilinechart_charttype',            
		        			store:multilinechart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multilinechart_haxis',            
		        			store:multilinechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multilinechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multilinechart_vaxis',
		        			//editable : false, 
		        			store:multilinechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multilinechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'multilinechart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'multilinechart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['面积图','area2d'],
		   			['平滑面积图','splinearea']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singleareachart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singleareachart_charttype',            
		        			store:singleareachart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'singleareachart_haxis',            
		        			store:singleareachart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singleareachart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singleareachart_vaxis',
		        			//editable : false, 
		        			store:singleareachart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singleareachart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singleareachart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'singleareachart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['面积图','MSArea'],
		   			['平滑面积图','mssplinearea'],
		   			['堆积面积图','stackedarea2d']	   			
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multiareachart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'multiareachart_charttype',            
		        			store:multiareachart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multiareachart_haxis',            
		        			store:multiareachart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiareachart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multiareachart_vaxis',
		        			//editable : false, 
		        			store:multiareachart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiareachart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'multiareachart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'multiareachart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['二维饼图','pie2d'],
					['三维饼图','pie3d']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlepiechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlepiechart_charttype',            
		        			store:singlepiechart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '标签',
		                    selectOnFocus:true,
		    				id:'singlepiechart_haxis',            
		        			store:singlepiechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入标签指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlepiechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlepiechart_vaxis',
		        			//editable : false, 
		        			store:singlepiechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlepiechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            //collapsed : true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
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
		   			['散点图','scatter']			
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlescatterchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_charttype',            
		        			store:singlescatterchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '标签',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_label',            
		        			store:singlescatterchart_label_store,
		        			mode: 'local',
		        			emptyText :'请输入标签项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_label_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },	                
						{
		                    xtype: 'combo',
		                    fieldLabel: 'X指标项',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_haxis',            
		        			store:singlescatterchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入X指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			
		                },                
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Y指标项',
		                    selectOnFocus:true,
		    				id:'singlescatterchart_vaxis',
		        			//editable : false, 
		        			store:singlescatterchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入Y指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlescatterchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlescatterchart_subtitle'
		                },
		                {
		                    fieldLabel: 'X轴名称',
		                    id: 'singlescatterchart_haxisname',
		                    emptyText :'请输入X轴名称'
		                },
		                {
		                    fieldLabel: 'Y轴名称',
		                    emptyText :'请输入Y轴名称',
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
		   			['二维圆环图','doughnut2d'],
					['三维圆环图','doughnut3d']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singledoughnutchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_charttype',            
		        			store:singledoughnutchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '标签',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_haxis',            
		        			store:singledoughnutchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入标签指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singledoughnutchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singledoughnutchart_vaxis',
		        			//editable : false, 
		        			store:singledoughnutchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singledoughnutchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            //collapsed : true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
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
		   			['气泡图','bubble']			
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlebubblechart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_charttype',            
		        			store:singlebubblechart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_label',            
		        			store:singlebubblechart_label_store,
		        			mode: 'local',
		        			emptyText :'请输入标签项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_label_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },	                
						{
		                    xtype: 'combo',
		                    fieldLabel: 'X指标项',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_haxis',            
		        			store:singlebubblechart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入X指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			
		                },                
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Y指标项',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_vaxis',
		        			//editable : false, 
		        			store:singlebubblechart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入Y指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: 'Z指标项',
		                    selectOnFocus:true,
		    				id:'singlebubblechart_zaxis',
		        			store:singlebubblechart_zaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入Z指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlebubblechart_zaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                } 	                	             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlebubblechart_subtitle'
		                },
		                {
		                    fieldLabel: 'X轴名称',
		                    id: 'singlebubblechart_haxisname',
		                    emptyText :'请输入X轴名称'
		                },
		                {
		                    fieldLabel: 'Y轴名称',
		                    emptyText :'请输入Y轴名称',
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
		   			['雷达图','radar']			
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multiradarchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    selectOnFocus:true,
		    				id:'multiradarchart_charttype',            
		        			store:multiradarchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',      			
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multiradarchart_haxis',            
		        			store:multiradarchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiradarchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multiradarchart_vaxis',
		        			//editable : false, 
		        			store:multiradarchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multiradarchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
								}
		        			}        			     
		                }             
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
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
		   			['2D柱形+线性+面积结合图(只含主轴）','mscombi2d'],
		   			['3D柱形+线性+面积结合图(只含主轴）','mscombi3d'],
		   			['2D堆积柱形+线性+面积结合图(只含主轴）','stackedcolumn2dline'],
		   			['3D堆积柱形+线性+面积结合图(只含主轴）','stackedcolumn3dline']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'singlecombinedchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    listWidth : 240,
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_charttype',            
		        			store:singlecombinedchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_haxis',            
		        			store:singlecombinedchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecombinedchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_vaxis',
		        			editable : true, 
		        			store:singlecombinedchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									singlecombinedchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
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
				        				//str_mid = str_mid + "['"+combox_display+"-柱形图','"+combox_value+"-Column'],";
				        				str_mid = str_mid + "['"+combox_display+"-线形图','"+combox_value+"-line'],";
				        				str_mid = str_mid + "['"+combox_display+"-面积图','"+combox_value+"-area']";
				        				if(trim(str_mid).length>0)
				        				{
					        				str_mid = str_pre + str_mid + str_post;
					        				singlecombinedchart_vtyle_store.loadData(eval(str_mid));
					        				/*是否显示值*/
					        				str_show = "['"+combox_display+"','"+combox_value+"']";
											str_show = str_pre + str_show + str_post;
					        				singlecombinedchart_showlabel_store.loadData(eval(str_show));				        				
				        				}			        							        							        							       
				        			}
				        			else{
				        				var arr_value = combox_value.split(",");
				        				var arr_display = combox_display.split(",");
				        				for(var i = 0 ; i< arr_display.length ; i++){
					        				//str_mid = str_mid + "['"+trim(arr_display[i])+"-柱形图','"+trim(arr_value[i])+"-column'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-线形图','"+trim(arr_value[i])+"-line'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-面积图','"+trim(arr_value[i])+"-area'],";					        				
					        				str_show = str_show +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
				        				}
				        				if(trim(str_mid).length>0){
				        					str_mid = str_mid.substring(0,str_mid.length-1);
											str_mid = str_pre + str_mid + str_post;
											singlecombinedchart_vtyle_store.loadData(eval(str_mid));
											/*是否显示值*/
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
		                    fieldLabel: '指标图形',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_vtyle',
		        			store:singlecombinedchart_vtyle_store,
		        			mode: 'local',
		        			emptyText :'默认柱形图',
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
		        		    					Ext.Msg.alert('错误','同一个指标只能选择一种图表!');
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
		        		    				Ext.Msg.alert('错误','同一个指标只能选择一种图表!');
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
		                    fieldLabel: '显示值',
		                    selectOnFocus:true,
		    				id:'singlecombinedchart_showlabel',
		        			editable : true, 
		        			store:singlecombinedchart_showlabel_store,
		        			mode: 'local',
		        			emptyText :'默认不显示',
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
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'singlecombinedchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'singlecombinedchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
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
		   			['2D柱形+线性+面积结合图(含主次轴）','mscombidy2d'],
		   			['3D柱形+线性+面积结合图(含主次轴）','mscolumn3dlinedy'],
		   			//['2D堆积柱形+线性+面积结合图(含主次轴）','stackedcolumn2dlinedy'],
		   			['3D堆积柱形+线性+面积结合图(含主次轴）','stackedcolumn3dlinedy']
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
		            title: '主要参数设置',
		            autoHeight:true,            
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',            
		            items :[
		            	{
		                    fieldLabel: '主标题',
		                    width : 120,
		                    emptyText :'请输入标题',
		                    id : 'multicombinedchart_majortitle'
		                },
		                {
		                    xtype: 'combo',
		                    fieldLabel: '图表类型',
		                    listWidth : 240,
		                    selectOnFocus:true,
		    				id:'multicombinedchart_charttype',            
		        			store:multicombinedchart_store,
		        			mode: 'local',
		        			emptyText :'请选择图表类型',
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
		                    fieldLabel: '横轴',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_haxis',            
		        			store:multicombinedchart_haxis_store,
		        			mode: 'local',
		        			emptyText :'请输入横轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'category_name', 
		        			valueField : 'category_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicombinedchart_haxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"小于")));
								}
		        			}        			
		                },
		                {
		                    xtype: 'multiSelect',
		                    fieldLabel: '指标项',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_vaxis',
		        			editable : true, 
		        			store:multicombinedchart_vaxis_store,
		        			mode: 'local',
		        			emptyText :'请输入纵轴指标项',
		        			typeAhead : true,
		        			triggerAction: 'all',
		        			displayField: 'value_name', 
		        			valueField : 'value_id',
		        			forceSelection: true,
		        			lazyRender: true,
		        			resizable:true ,
		        			listeners:{ 
								'afterRender' : function(combox,record,index){
									multicombinedchart_vaxis_store.loadData(eval(fun_combox_cdcadv_listname(_grid,_fieldstr_point,"大于")));
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
				        				//str_mid = str_mid + "['"+combox_display+"-柱形图','"+combox_value+"-Column'],";
				        				str_mid = str_mid + "['"+combox_display+"-线形图','"+combox_value+"-line'],";
				        				str_mid = str_mid + "['"+combox_display+"-面积图','"+combox_value+"-area']";
				        				if(trim(str_mid).length>0)
				        				{
					        				str_mid = str_pre + str_mid + str_post;
					        				multicombinedchart_vtyle_store.loadData(eval(str_mid));
					        				/*是否显示值*/
					        				str_show = "['"+combox_display+"','"+combox_value+"']";
											str_show = str_pre + str_show + str_post;
					        				multicombinedchart_showlabel_store.loadData(eval(str_show));	
					        				/*次轴*/
					        				str_secondaxis = "['"+combox_display+"','"+combox_value+"']";
											str_secondaxis = str_pre + str_secondaxis + str_post;
					        				multicombinedchart_secondaxis_store.loadData(eval(str_secondaxis));					        				
					        				
				        				}			        							        							        							       
				        			}
				        			else{
				        				var arr_value = combox_value.split(",");
				        				var arr_display = combox_display.split(",");
				        				for(var i = 0 ; i< arr_display.length ; i++){
					        				//str_mid = str_mid + "['"+trim(arr_display[i])+"-柱形图','"+trim(arr_value[i])+"-column'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-线形图','"+trim(arr_value[i])+"-line'],";
					        				str_mid = str_mid + "['"+trim(arr_display[i])+"-面积图','"+trim(arr_value[i])+"-area'],";					        				
					        				str_show = str_show +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
					        				str_secondaxis = str_secondaxis +"['"+trim(arr_display[i])+"','"+trim(arr_value[i])+"'],";
				        				}
				        				if(trim(str_mid).length>0){
				        					str_mid = str_mid.substring(0,str_mid.length-1);
											str_mid = str_pre + str_mid + str_post;
											multicombinedchart_vtyle_store.loadData(eval(str_mid));
											/*是否显示值*/
											str_show = str_show.substring(0,str_show.length-1);
											str_show = str_pre + str_show + str_post;
					        				multicombinedchart_showlabel_store.loadData(eval(str_show));
					        				/*次轴*/
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
		                    fieldLabel: '指标图形',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_vtyle',
		        			store:multicombinedchart_vtyle_store,
		        			mode: 'local',
		        			emptyText :'默认柱形图',
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
		        		    					Ext.Msg.alert('错误','同一个指标只能选择一种图表!');
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
		        		    				Ext.Msg.alert('错误','同一个指标只能选择一种图表!');
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
		                    fieldLabel: '显示值',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_showlabel',
		        			editable : true, 
		        			store:multicombinedchart_showlabel_store,
		        			mode: 'local',
		        			emptyText :'默认不显示',
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
		                    fieldLabel: '次轴',
		                    selectOnFocus:true,
		    				id:'multicombinedchart_secondaxis',
		        			editable : true, 
		        			store:multicombinedchart_secondaxis_store,
		        			mode: 'local',
		        			emptyText :'至少一根次轴',
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
		        		    			Ext.Msg.alert('错误','至少需要一个主轴!');
		        		    		}	        		    	
		        		    	}
		        			}
		                }	                
		            ]
		        },{
		            xtype:'fieldset',
		            title: '附属参数设置',
		            collapsible: true,
		            autoHeight:true,
		            forceFit : true,
		            defaults: {anchor:'98%'},
		            defaultType: 'textfield',
		            items :[
		            	{
		                    fieldLabel: '副标题',
		                    emptyText :'请输入子标题',
		                    id : 'multicombinedchart_subtitle'
		                },
		                {
		                    fieldLabel: '横轴名称',
		                    id: 'multicombinedchart_haxisname',
		                    emptyText :'请输入横轴名称'
		                },
		                {
		                    fieldLabel: '纵轴名称',
		                    emptyText :'请输入纵轴名称',
		                    id: 'multicombinedchart_vaxisname'
		                }
		            ]
		        }    
		        ]
		    });
		}
		
		
		/*******************************
		 * ## 主页面和汇总界面复制按钮点击事件   
		********************************/
		Ext.getCmp('cdcombination_copybutton').on('click',function(){
			if(crows == 0){
				Ext.MessageBox.alert('提示','请先右键加载数据');	
			}
			else{
			    Ext.MessageBox.alert('提示','已经复制到剪贴板',callback);
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
				Ext.MessageBox.alert('提示','请先右键加载数据');	
			}
			else{
			    Ext.MessageBox.alert('提示','已经复制到剪贴板',callback);
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
	 * ## Ext异步请求session过期解决方案    
	********************************/	
	Ext.Ajax.on('requestcomplete',checkUserSessionStatus, this);
	function checkUserSessionStatus(conn,response,options){	
	    if(response.getResponseHeader("sessionstatus") == 'timeOut'){
	        if(response.getResponseHeader("loginPath")){
	            Ext.Msg.alert('提示',"会话过期，请重新登陆!");
	            window.top.location.href = response.getResponseHeader("loginPath");
	        }else{
	            Ext.Msg.alert('提示',"请求超时请重新登陆 !");
	            window.top.location.href = response.getResponseHeader("loginPath");
	    	}
		}
	}  		 
});