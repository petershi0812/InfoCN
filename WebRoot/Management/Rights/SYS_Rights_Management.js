Ext.onReady(function(){ 
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'qtip';
    Ext.BLANK_IMAGE_URL ='../EXT/extjs3.3.1/images/s.gif';
    var isECRightedit = 0; //�ж��û���ҵTop��ҵNȨ���Ƿ����
   /***************************
     * ## ȫ�ֱ���
     * 	@@ leastparentnodeid: ��С���ڵ�
   ****************************/   
    var leastparentnodeid = '';
   /***************************
     * ## ����û�grid
   ****************************/ 
	var topcompany_combox_store = new Ext.data.SimpleStore({
	   fields:['field','field_id'],
	   autoLoad : true,
	   data : [['������ҵ','0'],['Top10��ҵ','4'],['Top30��ҵ','5'],['û����ҵ','-999']]
	   });		
	var topcompany_combox = new Ext.form.ComboBox({
	    	selectOnFocus:true,
	    	id:'topcompany_combox',
	    	width :130,             
	        allowBlank:false,
	        editable : false, 
	        store:topcompany_combox_store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'field', 
	        valueField : 'field_id',
	        forceSelection: true,
	        resizable:true
	});
		
	var sysgrid_store = new Ext.data.Store({
		autoLoad :{params : {sql:'text'}},
		reader: new Ext.data.JsonReader(),
		proxy : new Ext.data.HttpProxy({
			url : 'GetAccountRightsAllGridstore'
		})
	});
	
	var sysgrid_sm = new Ext.grid.CheckboxSelectionModel({singleSelect:true});   	
	var sysgrid_colModel= new Ext.grid.ColumnModel(
		[
			//new Ext.grid.RowNumberer(),
		    sysgrid_sm,
			{header:"����",align:'right',width: 50,sortable: true,dataIndex:"ID"},
			{header:"�û���",align:'left',width: 80,sortable: true,dataIndex:"Account"}, 								
			{header:"��˾����",align:'left',width: 150,sortable: true,dataIndex:"Company"},
			{header:"����",align:'left',width: 100,sortable: true,dataIndex:"Department"},
			{header:"��λ",align:'left',width: 120,sortable: true,dataIndex:"Post"},
			{header:"<b>��ҵtopN��ҵ��ť</b>",dataIndex:'RightMenu_Rights',width: 120,align : 'left',sortable:false,hideable: false,
	         	editor:topcompany_combox,
	         	renderer: function(value,metadata,record){ 
	 		   		var index = topcompany_combox_store.find('field_id',value);  
	                if(index!=-1){  
	                	return topcompany_combox_store.getAt(index).data.field;  
	                }  
	                return value;  
	            }        
	        }			
		]);
			
	var sys_grid = new Ext.grid.EditorGridPanel({	
	    id:'sys_grid',
		frame:false,
		clicksToEdit: 1,
		sm: sysgrid_sm,
	    cm: sysgrid_colModel,
	    border : false,
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
			rowdblclick : function(grid,rowIndex,e) {
				fun_treereload(Ext.getCmp('NavigationCombox').getValue());				
			},
			afteredit: function(e){
				if(e.value != e.originalValue){
					if(e.column == 6){//���Ƶ���action
						isECRightedit = 1;
					}				
				}
		   	}			
        }
	});
   	
   /***************************
     * ## �Ҳ�Ȩ������-���ֱ��ҳ��
   ****************************/
	var NavigationCombox_Store = new Ext.data.SimpleStore({
	   fields:['Njsp','Njsp_id'],
	   autoLoad : true,
	   data : [['InfoCN�������ݿ�','1'],['������ҵ�ȵ�����','11'],['����ȵ���ҵ�����','999'],['���ݷ�����','2'],['����������ҵ�����о�','3'],['���Ƕ���','4'],['��������(ICD-10)','10']]
	   });		
	var NavigationCombox = new Ext.form.ComboBox({
	    	selectOnFocus:true,
	    	id:'NavigationCombox',
	    	width :150,             
	        allowBlank:false,
	        editable : false, 
	        store:NavigationCombox_Store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'Njsp', 
	        valueField : 'Njsp_id',
	        forceSelection: true,
	        resizable:true,
            listeners:{
            	scope:this,
				afterRender : function(combo) {					
			    	var firstValue = NavigationCombox_Store.data.items[0].data[combo.valueField];
			    	combo.setValue(firstValue);
				},      
            	select:function(combox){
					fun_treereload(combox.getValue());
            	}            	
            }	        
	});	
	
	var InitYearCombox_Store = new Ext.data.SimpleStore({
		fields: ['year_id'],
		data : [['2009'],['2010'],['2011'],['2012'],
				['2013'],['2014'],['2015'],['2016'],['2017'],['2018'],
				['2019'],['2020'],['2021'],['2022'],['2023'],['2024'],['2025'],['2026'],['2027'],['2028'],['2029'],['2030'],['2031'],['2032'],
				['2033'],['2034'],['2035'],['2036'],['2037'],['2038'],['2039'],['2040']
		       ]
	});	
	
	var InitYearCombox = new Ext.form.MultiSelect({
	    	selectOnFocus:true,
	    	id:'InitYearCombox',
	    	width :80,             
	        allowBlank:false,
	        editable : false, 
	        store:InitYearCombox_Store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'year_id', 
	        valueField : 'year_id',
	        forceSelection: true,
	        resizable:true,
            listeners:{
            	scope:this,
				afterRender : function(combo) {					
			    	var firstValue = InitYearCombox_Store.data.items[0].data[combo.valueField];
			    	combo.setValue(firstValue);
				}           	
            }	        
	});
	
	var InitialYearMultiCombox_Store = new Ext.data.SimpleStore({
		fields: ['year_id'],
		data : [['(all)'],['2009'],['2010'],['2011'],['2012'],
				['2013'],['2014'],['2015'],['2016'],['2017'],['2018'],
				['2019'],['2020'],['2021'],['2022'],['2023'],['2024'],['2025'],['2026'],['2027'],['2028'],['2029'],['2030'],['2031'],['2032'],
				['2033'],['2034'],['2035'],['2036'],['2037'],['2038'],['2039'],['2040']
		       ]
	});	
	
	var InitialYearMultiCombox = new Ext.form.MultiSelect({
	    	selectOnFocus:true,
	    	id:'InitialYearMultiCombox',
	    	width :80,             
	        allowBlank:false,
	        editable : false, 
	        store:InitialYearMultiCombox_Store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'year_id', 
	        valueField : 'year_id',
	        forceSelection: true,
	        resizable:true,
            listeners:{
            	scope:this,
				afterRender : function(combo) {					
			    	var firstValue = InitialYearMultiCombox_Store.data.items[0].data[combo.valueField];
			    	combo.setValue(firstValue);
				}           	
            }	        
	});	
	
	var TopN_combox_store = new Ext.data.SimpleStore({
	   fields:['field','field_id'],
	   autoLoad : true,
	   data : [['��������','*'],['Top2','2'],['Top5','5'],['Top10','10'],['Top30','30'],['Top50','50'],['Top100','100']]
	   });		
	var TopNCombox = new Ext.form.ComboBox({
	    	selectOnFocus:true,
	    	id:'TopNCombox',
	    	width :80,             
	        allowBlank:false,
	        editable : false, 
	        store:TopN_combox_store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'field', 
	        valueField : 'field_id',
	        forceSelection: true,
	        resizable:true,
            listeners:{
            	scope:this,
				afterRender : function(combo) {					
			    	var firstValue = TopN_combox_store.data.items[0].data[combo.valueField];
			    	combo.setValue(firstValue);
				}           	
            }	        
	});	
	
	var Pages_combox_store = new Ext.data.SimpleStore({
	   fields:['field','field_id'],
	   autoLoad : true,
	   data : [['����ҳ��','*'],['Top1','1'],['Top3','3'],['Top5','5'],['Top10','10'],['Top30','30'],['Top50','50'],['Top100','100']]
	   });		
	var PagesCombox = new Ext.form.ComboBox({
	    	selectOnFocus:true,
	    	id:'PagesCombox',
	    	width :80,             
	        allowBlank:false,
	        editable : false, 
	        store:Pages_combox_store,
	        mode: 'local',
	        typeAhead : true,
	        triggerAction: 'all',
	        displayField: 'field', 
	        valueField : 'field_id',
	        forceSelection: true,
	        resizable:true,
            listeners:{
            	scope:this,
				afterRender : function(combo) {					
			    	var firstValue = Pages_combox_store.data.items[0].data[combo.valueField];
			    	combo.setValue(firstValue);
				}           	
            }	        
	});	
	
    var systree_loader = new Ext.tree.TreeLoader({ 
        dataUrl : '../HomePage/GetSysFunctiontree?flag=1'
    });         
	var systree_root=new Ext.tree.AsyncTreeNode({
		expanded: true,
		loader:systree_loader
	});
    var systree=new Ext.tree.TreePanel({ 
        id:'systree',
        plain:true,
        baseCls:"x-plain",
        loader:systree_loader,
        frame:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:systree_root,
        //selModel: new Ext.tree.MultiSelectionModel(),
		listeners:{
            "contextmenu":function(node,e){
            	if(node.isLeaf()){
            		if(node.attributes.iconCls != "checked"){
            			Ext.Msg.alert('��ʾ','����ѡ������ݿ�!');
            		}else{	            				            		
		            	node.select();
		            	nodeid = node.id;
		            	selectnode = node;
		            	nodetext = node.text;
		            	systree_rightMenu.showAt(e.getPoint());		            	
            		}
            	}
            },
            "dblclick":function(node,e){
            	if(node.isLeaf()){
            		if(node.attributes.iconCls != "checked"){
            			Ext.Msg.alert('��ʾ','����ѡ������ݿ�!');
            		}else{	            				            		
		            	node.select();
		            	nodeid = node.id;
		            	selectnode = node;
		            	nodetext = node.text;
		            	fun_sheetrights();
            		}
            	}
            },
            "click":function(node,e){
            	if(node.hasChildNodes()){
	            	if(node.firstChild.isLeaf()){
	            		leastparentnodeid = node.id;
	            	}
            	}
            	else{
            		leastparentnodeid = '';
            	}
            }             
		}
    });
    //systree_root.expand(true,false);        
	systree.on("click",function(node,e){
		var pageX = Ext.lib.Dom.getX(node.ui.iconNode);
	    var pageY = Ext.lib.Dom.getY(node.ui.iconNode); 
	    if(e.getPageX() > pageX && e.getPageX() < pageX + 12 && e.getPageY() > pageY+5 && e.getPageY() < pageY + 17){
	      if(node.attributes.iconCls=="checked") childCheck(node ,"unchecked");
	      else childCheck(node ,"checked");
	      parentCheck(node);
	    }
	  });
	  	
   /***************************
     * ## ���岼��
   ****************************/
   new Ext.Viewport({
      	layout : 'border',
      	items : [
      	  {
			title : '<font size = 2>�û�һ��</font>',
			region : 'west',
			width : 450,
			fill : true,
      		layout : 'fit',
      		split : true,
      		collapsible:true,
      		collapseMode: 'mini',
			tbar : [
				'-',
				{text:'�Ҽ���ҵ����',iconCls:'edit',handler:fun_saverightmenu_rights},
				'->'
				/*{text:'��ҳ��ͼ����',iconCls:'maprights',handler:fun_maprights}*/							
			],      		
      		items:[sys_grid]
      	  },
      	  {				
      	  	title : '<font size = 2>����ҳ��Ȩ��һ��</font>',
			region : 'center',
			margins:'0 3 3 0',
            cmargins: '0 3 3 3',
			layout:'fit',
			tbar : [			
				'-',
				'ҳ��ѡ�� ',NavigationCombox,'-',				
				{text:'����Ȩ��',iconCls:'add',handler:fun_newrights},				
				'-',
				{text:'��ȡȨ��',iconCls:'lock_open',handler:fun_getrights},
				'-',
				{text:'����Ȩ��',iconCls:'edit',handler:fun_saverights},
				'-',
				InitYearCombox,
				//{text:'���(ȫ��)ʡ��Ȩ��',iconCls:'yearinit',handler:fun_yearprovinceinitrights},
				{text:'���Ȩ��',iconCls:'yearinit',handler:fun_yearprovinceinitrights},
				'-',
				InitialYearMultiCombox,				
				{text:'��ݳ�ʼ��',iconCls:'yearinit',handler:fun_inityearrights},
				'-',
				TopNCombox,				
				{text:'ҳ��TOPN',iconCls:'table_relationship',handler:fun_topnrights},
				'-',
				PagesCombox,				
				{text:'ҳ��Ȩ��',iconCls:'pages_relationship',handler:fun_pagesrights}				
			],
			items:[systree]
		  }
      	]
      }); 
      
   /***************************
     * ## Ĭ��չ����һ����
   ****************************/
   function expand_rootnode(_treegrid){
		_treegrid.getRootNode().expand(false, true, function() {  
		    var childNodes = _treegrid.getRootNode().childNodes;  
			for(var i=0;i<childNodes.length;i++){
				var path = childNodes[i].getPath('id');
				_treegrid.expandPath(path,"id");
			}
		}); 
   }
   expand_rootnode(systree); 
   
   /***************************
     * ## ����ҳ�����νṹ�Ҽ�
   ****************************/      
	var systree_rightMenu = new Ext.menu.Menu( {  
    id : 'rightMenu',  
    items : [
    	{  
	        text:'SheetȨ������',
	        iconCls: 'encrypted',
	        handler:fun_sheetrights  
	    }	    	    
	    ]  
	});
		
    var province_store = new Ext.data.SimpleStore({
    	fields:['province_id'],
        proxy : new Ext.data.HttpProxy({ url : 'GetComboxSelectionsOfRights?id=province' })
    }); 
    var city_store = new Ext.data.SimpleStore({
    	fields:['city_id'],
    	proxy : new Ext.data.HttpProxy({ url : 'GetComboxSelectionsOfRights?id=city'}),
   		baseParams:{province_id:''},
 		remoteSort:true        
    }); 
    var district_store = new Ext.data.SimpleStore({
    	fields:['district_id'],
    	proxy : new Ext.data.HttpProxy({ url : 'GetComboxSelectionsOfRights?id=district'}),
   		baseParams:{province_id:'',city_id:''},
   		remoteSort:true      
    });	   
	var inityear_store = new Ext.data.SimpleStore({
		fields: ['year_id'],
		data : [
				['(all)'],['2009'],['2010'],['2011'],['2012'],['2013'],['2014'],['2015'],['2016'],['2017'],['2018'],
				['2019'],['2020'],['2021'],['2022'],['2023'],['2024'],['2025'],['2026'],['2027'],['2028'],['2029'],['2030'],['2031'],['2032'],
				['2033'],['2034'],['2035'],['2036'],['2037'],['2038'],['2039'],['2040']
		       ]
	});   	
	var year_store = new Ext.data.SimpleStore({
		fields: ['year_id'],
		data : [
				['(all)'],['2009'],['2010'],['2011'],['2012'],['2013'],['2014'],['2015'],['2016'],['2017'],['2018'],
				['2019'],['2020'],['2021'],['2022'],['2023'],['2024'],['2025'],['2026'],['2027'],['2028'],['2029'],['2030'],['2031'],['2032'],
				['2033'],['2034'],['2035'],['2036'],['2037'],['2038'],['2039'],['2040']
		       ]
	}); 
	var yearlist_store = new Ext.data.SimpleStore({
		fields: ['year_id'],
		data : []
	}); 	
	
	    
	/*Sheet��Ȩ�޹���*/
    var SheetRights_Panel = new Ext.FormPanel({
        labelAlign: 'right',
        frame:true,
        items: [
        {
            xtype:'fieldset',
            title: '��ʼ�������',
            collapsible: true,
            autoHeight:true,
            collapsed: false,
            items :[
	        {
	            layout:'column',
	            items:[{
	                columnWidth:1,
	                layout: 'form',
	                items: [
		            {
		                fieldLabel: '��ʼ���',
		            	xtype : 'multiSelect',
		                selectOnFocus:true,
		                id:'inityear_combox',
		                anchor:'100%',   
		                name:'inityear_combox',
		                blankText:'��ѡ���ʼ���',
		                emptyText:'ѡ���ʼ���',              
		                allowBlank:false,
		                store:inityear_store,
		                mode: 'local',
		                triggerAction: 'all',
		                displayField: 'year_id', 
		                valueField : 'year_id',
		                forceSelection: false,
		                resizable:true
		            }]
	            }]
        	}]
        }, 
        {
            xtype:'fieldset',
            title: '��������Ȩ������',
            collapsible: true,
            autoHeight:true,
            collapsed: false,
            items :[        
		        {
		            layout:'column',
		            items:[{
		                columnWidth:1,
		                layout: 'form',
		                items: [
			            {
			                fieldLabel: '���Ȩ��',
			            	xtype : 'multiSelect',
			                selectOnFocus:true,
			                id:'year_combox',
			                anchor:'100%',   
			                name:'year_combox',
			                blankText:'��ѡ�����',
			                emptyText:'ѡ�����',              
			                allowBlank:false,
			                store:year_store,
			                mode: 'local',
			                triggerAction: 'all',
			                displayField: 'year_id', 
			                valueField : 'year_id',
			                forceSelection: false,
			                resizable:true,
			                listeners:{
			                	scope:this,
				            	change:function(){
				            		var yearvalue = Ext.getCmp('year_combox').getValue();
				            		yearlist_store.loadData(eval(fun_combox_singlename(yearvalue)));		            				            	
				            	} 
			                }	                
			            }]
		            }]
		        }, 
	        {
	            layout:'column',
	            items:[{
	                columnWidth:1,
	                layout: 'form',
	                style:'margin-top:5px',
	                items: [
		            {
		                fieldLabel: '<font color=red>�������Ȩ��</font>',
		            	xtype : 'combo',
		                selectOnFocus:true,
		                id:'yearlist_combox',
		                anchor:'100%',   
		                name:'yearlist_combox',
		                blankText:'ѡ����ݣ��鿴������ݵ���������Ȩ��',
		                emptyText:'ѡ����ݣ��鿴������ݵ���������Ȩ��',              
		                allowBlank:true,
		                store:yearlist_store,
		                mode: 'local',
		                triggerAction: 'all',
		                displayField: 'year_id', 
		                valueField : 'year_id',
		                forceSelection: true,
		                resizable:true  ,
		                listeners:{
		                	scope:this,
			            	blur:function(){
								var this_yearvalue = Ext.getCmp('yearlist_combox').getValue();
								var provinceCombox = fun_combox_split_strRights(this_yearvalue,trim(arrRights[3]));
								var cityCombox = fun_combox_split_strRights(this_yearvalue,trim(arrRights[4]));
								var districtCombox = fun_combox_split_strRights(this_yearvalue,trim(arrRights[5]));
								/*�ѵ㣬��ʼ��multicombox*/
								province_store.load();
								province_store.on('load', function (){
									var provincevalue = trim(provinceCombox.substring(0,provinceCombox.length-1));
							        Ext.getCmp('TF_ProvinceRows').setValue(provincevalue);
				    				city_store.baseParams.province_id=provincevalue;
				    				district_store.baseParams.province_id=provincevalue;
				    				city_store.load(); 			        
							    });	 
								city_store.on('load', function (){
									var cityvalue = trim(cityCombox.substring(0,cityCombox.length-1));
							        Ext.getCmp('TF_CityRows').setValue(cityvalue);
				    				district_store.baseParams.city_id=cityvalue;
				    				district_store.load(); 			        
							    });	
							    //district_store.load();
								district_store.on('load', function (){
									var districtvalue = trim(districtCombox.substring(0,districtCombox.length-1));
							        Ext.getCmp('TF_DistrictRows').setValue(districtvalue); 			        
							    });
			            	} 
		                }	                
		            }] 
	            }]
	        },                 
	        {
	            layout:'column',
	            items:[{
	                columnWidth:1,
	                layout: 'form',
	                style:'margin-top:5px',
	                items: [
		            	{
		            	xtype : 'multiSelect',
		            	fieldLabel: 'ʡ��Ȩ��',
		            	anchor:'100%',
		                selectOnFocus:true,
		                name: 'TF_ProvinceRows',
		                id: 'TF_ProvinceRows',	               
		                store:province_store,
		                mode:'remote',
		                emptyText:'ѡ��ʡ��',
		                triggerAction: 'all',
		                allowBlank:true,
		                displayField: 'province_id',
		                valueField : 'province_id', //��ѡ����Ҫ
		                forceSelection: true,
		                resizable:true,
		                listeners:{
		                	scope:this,
			                blur:function(){
			            		province_field = Ext.getCmp('TF_ProvinceRows');
			            		if(province_field.isValid()){
			            			city_field = Ext.getCmp('TF_CityRows');
			            			city_field.clearValue();
			            			district_field = Ext.getCmp('TF_DistrictRows');
			            			district_field.clearValue();	            			
			            			var value = province_field.getValue(); 
			            			if(value.length>=0){
			            				Ext.getCmp('TF_ProvinceRows').setValue(value);
			            				city_store.baseParams.province_id=value;
			            				district_store.baseParams.province_id=value;
			            				city_store.load(); 
			            			}
			            		}
			            	} 
		                }
		            }]
	            }]
	        }
	        ,{
	            layout:'column',
	            items:[{
	                columnWidth:1,
	                layout: 'form',
	                style:'margin-top:5px',
	                items: [
	           	{
	                xtype : 'multiSelect',
	                fieldLabel: '�ؼ���Ȩ��',
	                name: 'TF_CityRows',
	                id: 'TF_CityRows',
	                allowBlank:true,
	                anchor:'100%',
	                blankText:'ѡ��ؼ���',
	                emptyText:'ѡ��ؼ���',
	                triggerAction: 'all',
	                displayField: 'city_id',
	                valueField:'city_id',
	                forceSelection: false,
	                resizable:true,
	                store:city_store,
	                selectOnFocus:true,
	                loadText : '���ڼ���...',
	                listeners:{
	                	scope:this,
		            	blur:function(){
		            		city_field = Ext.getCmp('TF_CityRows');
		            		if(city_field.isValid()){
		            			district_field = Ext.getCmp('TF_DistrictRows');
		            			district_field.clearValue();
		            			var value = city_field.getValue();  
		            			if(value.length>=0){
		            				Ext.getCmp('TF_CityRows').setValue(value);	            			
		            				district_store.baseParams.city_id=value;
		            				district_store.load(); 
		            			}
		            		}
		            	}
	                }               
	            }]
	            }]
	        }
	        ,{
	            layout:'column',
	            items:[{
	                columnWidth:1,
	                layout: 'form',
	                style:'margin-top:5px',
	                items: [
		            	{
		                xtype : 'multiSelect',
		                fieldLabel: '������Ȩ��',
		                name: 'TF_DistrictRows',
		                id: 'TF_DistrictRows',
		                allowBlank:true,
	                    anchor:'100%',
		                blankText:'ѡ��������',
		                emptyText:'ѡ��������',
		                triggerAction: 'all',
		                displayField: 'district_id',
		                valueField: 'district_id',
		                forceSelection: false,
		                resizable:true,
		                store:district_store,
		                selectOnFocus:true,
		                loadText : '���ڼ���...'                
		            }]
	            }]
	        }]
        },
        {
	        xtype:'fieldset',
	        title: '��������Ȩ������',
	        collapsible: true,
	        autoHeight:true,
	        collapsed: false,
	        items :[
        		{
	            layout:'column',
	            items:[{
	                columnWidth:.5,
	                layout: 'form',
	                items: [{
	                    xtype:'textfield',
		                fieldLabel: 'ҳ������',
		                name: 'TF_PrimaryTopRows',
		                id: 'TF_PrimaryTopRows',
		                allowBlank:false,
	                    anchor:'100%'
	                }, {
	                    xtype:'textfield',
		                fieldLabel: 'ҳ��',
		                name: 'TF_Pages',
		                id: 'TF_Pages',
		                allowBlank:false,
	                    anchor:'100%'
	                }]
            	},            	            	
	           {
	                columnWidth:.5,
	                layout: 'form',
	                items: [{
	                    xtype:'textfield',
	                    fieldLabel: 'ҳ�浼������',
		                name: 'TF_ExportedRows',
		                id: 'TF_ExportedRows',
		                allowBlank:false,
	                    anchor:'100%'
	                },{
	                    xtype:'textfield',
	                    fieldLabel: 'ҳ�渴������',
		                name: 'TF_CopyRows',
		                id: 'TF_CopyRows',
		                allowBlank:false,
	                    anchor:'100%'
	                }]
	            }]
        	}]
    	}]
    });
    
	var SheetRights_Window = new Ext.Window({ 
        width : 600,       
        height: 440, 
        resizable:false,
        maximizable :false,
        collapsible : true, 
        closeAction: 'hide',
        //autoScroll:true,
        modal : true,
        plain : true, 
        defaults : {              
			border : false  
		}, 	
		fill : true,
  		layout : 'fit',
		items  :[SheetRights_Panel] ,
        buttons: [
        {  
            text: '�����ʼ�������',  
            iconCls : 'accept',
            handler : fun_savesheetrightsofinityear
        },  
        {  
            text: '���浼����������',  
            iconCls : 'accept',
            handler : fun_savesheetrightsofexportcopy
        },           
        {  
            text: '��������',  
            iconCls : 'accept',
            handler : fun_savesheetrights
        },
         {
        	text:'�ر�',
			iconCls : 'deldt',
			handler: function(){
				SheetRights_Window.hide();
			}
         }        
         ]  		
	});
		
   /***************************
     * ## ��ҳ��ͼȨ�޹���
     *  @@lmap_panel:ָ��ѡ�����
     * 	@@map_panel_tree: ҽԺ��ָ����
     * 	@@map_gridpanel: �Ѿ�ѡ��ָ���gridpanel
   ****************************/	
	var mapyearrights = new Ext.form.ComboBox({
        selectOnFocus:true,
        id:'mapyear_combox',
        width:90,
        name:'mapyear_combox',
        blankText:'ѡ���ʼ�����',
        emptyText:'ѡ���ʼ�����',              
        allowBlank:true,
        store:InitYearCombox_Store,
        mode: 'local',
        triggerAction: 'all',
        displayField: 'year_id', 
        valueField : 'year_id',
        forceSelection: true,
        resizable:true       
	});	
	
    var map_panel_loader= new Ext.tree.TreeLoader({ 
    	dataUrl : 'GetMaptreeOfSysRights'
    }); 
	var map_panel_root=new Ext.tree.AsyncTreeNode({
		expanded:true,
		loader:map_panel_loader
	});
    var map_panel_tree=new Ext.tree.TreePanel({        
        renderTo:"map_panel_tree_div",
        id : 'map_panel_tree',
        plain:true,
        baseCls:"x-plain",
        loader:map_panel_loader,
        frame:true,
        autoHeight:true,
        autoWidth:true,
        autoScroll:true, 
        animate:true, 
        enableDD:false, 
        containerScroll: true, 
        border:false,
        rootVisible:false,
        root:map_panel_root
    });
    map_panel_tree.render();
       
	Ext.getCmp('map_panel_tree').on('click',function(node){	      
		if(node.leaf){
			year_id = node.attributes.text; //ȫ�ֱ��� 
        	map_gridpanel_store.reload({params :{yearid:year_id,accountid:account_id}});       	
		}
	});
	
	var map_gridpanel_store = new Ext.data.Store({//���÷������ݼ�
		reader: new Ext.data.JsonReader(),
		proxy : new Ext.data.HttpProxy({
			url : 'GetMapgridOfSysRights'
		})
	});
	var map_gridpanel_sm = new Ext.grid.CheckboxSelectionModel(); 
	var map_gridpanel_cm=new Ext.grid.ColumnModel({
	    columns:[	       
	    	new Ext.grid.RowNumberer({width:30}),
			{header:'���',dataIndex:'Year_id',width:40,align :'left'},
			{header:'����ID',dataIndex:'Rule_id',width:60,align :'right'},
			{header:'<center>��������</center>',dataIndex:'Rule_Name',width:300,align :'right'},
			{xtype: 'checkcolumn',header:"ѡ��",align:'right',width: 50,dataIndex:"Selected"}
		]
	});
	var map_gridpanel = new Ext.grid.GridPanel({   
		cm : map_gridpanel_cm, 
		sm : map_gridpanel_sm,
		forceFit : true,
		id : map_gridpanel,
		border : false,
		store:map_gridpanel_store,
		bbar : [
			'->',
			'-',
			{xtype : 'button',text : '����',iconCls :'accept',id : 'map_panel_submit',handler : fun_maprights_submit},
			{xtype : 'button',text : 'ȡ��',iconCls :'deldt',id : 'map_panel_cancel',handler : fun_maprights_cancel}
		],		
		viewConfig: {forceFit: false}
	}); 
	
	var map_panel = new Ext.Panel({  
		layout : 'border',
		border : false,
		items : [
		{
			title : '���',
			region : 'west',
			width : 120,
			fill : true,
	  		layout : 'fit',
	  		split : true,
	  		collapsible:true,
	  		collapseMode: 'mini',
			items : [map_panel_tree]
		},
		{
			title : '��ѡר��',
			region : 'center',
			fill : true,
	  		layout : 'fit',	  		
			items : [map_gridpanel]
		}
		]
	});
	
	var map_winpanel = new Ext.Window({ 
	        title : '��ҳ��ͼȨ������', 
	        width : 650,       
	        height: 350, 
	        resizable:true,
	        closeAction: 'hide',
	        maximizable : true,
	        //autoScroll:true,
	        modal : true,
	        plain : true, 
	        defaults : {              
				border : false  
			}, 
			tbar : [
				'��ҳ��ʼ�����:',
				mapyearrights,
				{xtype : 'button',text : '����',iconCls :'accept',id : 'mapyearinit_submit',handler : fun_mapyearinitrights_submit}
			],				
			fill : true,
	  		layout : 'fit',
			items  :[map_panel]  
	});	
	
   /***************************
     * ## ҳ�����к���
     *  @@fun_treeinit: ��ʼ��Ȩ����
     *  @@fun_treemodify: �޸ı���Ȩ����
     *  @@fun_treereload: ���¼���tree
     *  @@fun_createtree: ��̬����tree
     *  @@fun_getrights: ��ȡȨ��
     *  @@fun_newrights: �����û�Ȩ��
     *  @@fun_saverights: �޸ı���Ȩ��
     *  @@fun_sheetrights: �Ҽ��޸ı���ҳ��Ȩ��
     *  @@fun_sheetinit: ��ʼ��ҳ��Ȩ��
     *  @@fun_savesheetrightsofinityear: �޸ı���ҳ��Ȩ���еĳ�ʼ���Ȩ��
     *  @@fun_savesheetrightsofexportcopy: �޸ı���ҳ��Ȩ���еĵ�������Ȩ�� 
     *  @@fun_savesheetrights: �޸ı���ҳ��Ȩ�� 
     *  @@fun_yearprovinceinitrights: ���(ȫ��)ʡ�ݵ�Ȩ��
     *  @@fun_inityearrights: ��ʼ����ݵ�Ȩ��
     *  @@fun_topnrights: ÿҳȨ������
     *  @@fun_pagesrights:ҳ��Ȩ������
     *  @@fun_maprights: ��ҳ��ͼȨ�޴���  
     *  @@fun_mapyearinitrights_submit: �����ʼ�����Ȩ��
     *  @@fun_maprights_submit: �����޸���ҳ��ͼȨ��
     *  @@fun_maprights_cancel�� �ر��޸�ҳ���ͼȨ��ҳ��
     *  @@fun_saverightmenu_rights:��ҳ�Ҽ���ҵ����
   ****************************/
   function fun_treeinit(_flag,_userid){
		Ext.Ajax.request({ 
			url  : 'GetRightsNode',
			method : 'post', 
			params : { 
				treeid : _flag,
				userid : _userid
			}, 
			callback : function(options,success,response) {
				if(trim(response.responseText) == "error"){
					Ext.Msg.alert('����','���������û��ĳ�ʼȨ��!');
				}
				else if(trim(response.responseText) == "redirect"){
					top.location='../LoginRedirect';
				}				
				else{
					var arrMaster = trim(response.responseText).split("|");
					arrTagNodeOfLeaf(systree.getRootNode(),arrMaster);
					queryNodeParent(systree.getRootNode());
				}
			}
		});    	
   }
   function fun_treemodify(_rightnode,_treeid,_userid){
		Ext.Ajax.request({ 
			url  : 'SaveRightsNode',
			method : 'post', 
			params : { 
				rightnode : _rightnode,
				treeid : _treeid,
				userid : _userid
			}, 
			callback : function(options,success,response) {
				if(trim(response.responseText) == "error"){
					Ext.Msg.alert('����','���������û��ĳ�ʼȨ��!');
				}
				else if(trim(response.responseText) == "redirect"){
					top.location='../LoginRedirect';
				}				
				else{
					Ext.Msg.alert('��ʾ','�޸ĳɹ�!');
				}
			}
		});   	   	
   }
   
   function fun_getrights(){   
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
        if(selected_rows == 0){
        	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
        }
        else{
        	uncheckall(systree.getRootNode());
        	fun_treeinit(Ext.getCmp('NavigationCombox').getValue(),row_selection.get('ID'));
        }          	
   }
   
   function fun_treereload(_flag){
	   	if(_flag == 1){				
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetSysFunctiontree?flag=1'
		    });         
	   	}
	   	else if(_flag == 11){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetEmergingIndustrySysFunctiontree?flag=1'
		    });         
	   	}
	   	else if(_flag == 999){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetAnnualHotIndustrySysFunctiontree?flag=1'
		    });         
	   	}	   	
	   	else if(_flag == 2){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetAnalysisSysFunctiontree?flag=1'
		    });         
	   	}	   	
	   	else if(_flag == 3){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetReportSysFunctiontree?flag=1'
		    });         
	   	}
	   	else if(_flag == 4){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../HomePage/GetInsightSysFunctiontree?flag=1'
		    });         
	   	}	
	   	else if(_flag == 10){
		    var systree_loader = new Ext.tree.TreeLoader({ 
		        dataUrl : '../CoreData/GetDiseaseSysFunctiontree?flag=1'
		    });         
	   	}	   		   	
	   	var systree_root=new Ext.tree.AsyncTreeNode({
			expanded: true,
			loader:systree_loader
		});
		systree.setRootNode(systree_root);	
		systree_root.expand(true,false);	
   }
   
    function fun_sheetrights(){	
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var treeid = Ext.getCmp('NavigationCombox').getValue();
		if(treeid != 3 && treeid != 4){  //combined,report��insightsû��sheetȨ��
		    if(selected_rows == 0){
		    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
		    }
		    else{
				Ext.Ajax.request({ 
					url  : 'IsExistsSheetRights',
					method : 'post', 
					params : { 
						userid : row_selection.get('ID'),
						treeid : treeid,
						nodeid : nodeid
					}, 
					callback : function(options,success,response) {
						if(trim(response.responseText) == 'success'){
							SheetRights_Window.show();
							Ext.getCmp('TF_ProvinceRows').reset();
							Ext.getCmp('TF_CityRows').reset();
							Ext.getCmp('TF_DistrictRows').reset();							
							SheetRights_Window.setTitle(nodetext + '-SheetȨ����ƽ���');
							fun_sheetinit();
						}
						else if(trim(response.responseText) == "redirect"){
							top.location='../LoginRedirect';
						}					
						else{
							setCheck(selectnode,"unchecked");
							parentCheck(selectnode);
							Ext.Msg.alert('��ʾ','�Բ�����û�����ô����ݿ��Ȩ��!');
						}
					}												
				});			
		    }
		}
   }
   
   function fun_sheetinit(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();
		var userid = row_selection.get('ID');
		var treeid = Ext.getCmp('NavigationCombox').getValue();
		Ext.Ajax.request({ 
			url  : 'GetSheetInitRights',
			method : 'post', 
			params : { 
				userid : row_selection.get('ID'),
				treeid : treeid,
				nodeid : nodeid									
			}, 
			callback : function(options,success,response) {
				if(trim(response.responseText) == "redirect"){
					top.location='../LoginRedirect';
				}
				else{										
					arrRights = response.responseText.split("@"); //ȫ�ֱ���
					var arrSheetRights = arrRights[0].split("|");					
				    Ext.getCmp('inityear_combox').setValue(arrRights[1].substring(0,arrRights[1].length-1)); 			        
					Ext.getCmp('year_combox').setValue(arrRights[2].substring(0,arrRights[2].length-1));
					Ext.getCmp('yearlist_combox').reset();
					yearlist_store.loadData(eval(fun_combox_singlename(arrRights[2].substring(0,arrRights[2].length-1))));					
					Ext.getCmp('TF_PrimaryTopRows').setValue(arrSheetRights[0]);
					Ext.getCmp('TF_Pages').setValue(arrSheetRights[1]);					
					Ext.getCmp('TF_ExportedRows').setValue(arrSheetRights[2]);
					Ext.getCmp('TF_CopyRows').setValue(arrSheetRights[3]);
				}
			}
		});
		
   }
   
   function fun_newrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var treeid = Ext.getCmp('NavigationCombox').getValue();		
        if(selected_rows == 0){
        	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
        }
        else{
   			var rightstr = "";
			/*����Ȩ���ַ�������DB*/
			function tagNodeOfDB(node){  //������ node=root	
				if(node.hasChildNodes()){	  
				     node.eachChild(function(child){      
						if(child.attributes.iconCls=="pchecked"||child.attributes.iconCls=="checked"){     
							rightstr=rightstr+'|'+child.id;
						}     
					 	tagNodeOfDB(child);
				     });
				}
			}	
		    tagNodeOfDB(systree.getRootNode());
		    rightstr = rightstr.substring(1,rightstr.length) + "|";				
			Ext.Ajax.request({ 
				url  : 'SaveNewRightsNode',
				method : 'post', 
				params : { 
					userid : row_selection.get('ID'),
					treeid : treeid,
					rights : rightstr
				}, 
				callback : function(options,success,response) {
					if(trim(response.responseText) == "error")
						Ext.Msg.alert('����','���û��Ĵ�ģ���Ѿ�������Ȩ��!');
					else if(trim(response.responseText) == "null")
						Ext.Msg.alert('����','û�и����û��Ĵ�ģ�鸳���κ�Ȩ��!');
					else if(trim(response.responseText) == "redirect"){
						top.location='../LoginRedirect';
					}						
					else 	
						Ext.Msg.alert('��ʾ','�����û�Ȩ�޳ɹ�!');
				}				
			});								      
        }      	
   }
	
   function fun_saverights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
        if(selected_rows == 0){
        	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
        }
        else{
		    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ�޸�����Ȩ��?',callback);
		    function callback(id){
		   		if(id == 'yes'){
		   			var rightstr = "";
					/*����Ȩ���ַ�������DB*/
					function tagNodeOfDB(node){  //������ node=root	
						if(node.hasChildNodes()){	  
						     node.eachChild(function(child){      
								if(child.attributes.iconCls=="pchecked"||child.attributes.iconCls=="checked"){     
									rightstr=rightstr+'|'+child.id;
								}     
							 	tagNodeOfDB(child);
						     });
						}
					}	
				    tagNodeOfDB(systree.getRootNode());
				    rightstr = rightstr.substring(1,rightstr.length) + "|";
				    fun_treemodify(rightstr,Ext.getCmp('NavigationCombox').getValue(),row_selection.get('ID'));				   
		   		}
		    }	    	   
        }        
   }
   	  
   function fun_savesheetrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();  
		var treeid = Ext.getCmp('NavigationCombox').getValue();
	    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ�޸�����Ȩ������?',callback);
	    function callback(id){
	   		if(id == 'yes'){  
	   			var provincerights = Ext.getCmp('TF_ProvinceRows').getValue();
	   			var cityrights = Ext.getCmp('TF_CityRows').getValue();
	   			var districtrights = Ext.getCmp('TF_DistrictRows').getValue();	   			
	   			var inityearrights = Ext.getCmp("inityear_combox").getValue();
	   			var yearrights = Ext.getCmp('year_combox').getValue();	   		
	   			var yearlistrights = Ext.getCmp('yearlist_combox').getValue();
	   			
	   			if(trim(inityearrights).length == 0){
	   				Ext.Msg.alert('��ʾ','��ʼ��ݲ���Ϊ��!');
	   			}	   			
	   			else if(trim(yearrights).length == 0){
	   				Ext.Msg.alert('��ʾ','���Ȩ�޲���Ϊ��!');
	   			}
	   			else if(trim(yearlistrights).length == 0){
	   				Ext.Msg.alert('��ʾ','�������Ȩ�޲���Ϊ��!');
	   			}	   			
	   			else if(trim(provincerights).length == 0){
	   				Ext.Msg.alert('��ʾ','ʡ��Ȩ�޲���Ϊ��!');
	   			}
	   			else{
	   				if(trim(inityearrights).length != 0) inityearrights = inityearrights + ',';
	   				if(trim(yearrights).length != 0) yearrights = yearrights + ',';
	   				if(trim(provincerights).length != 0){
	   					//provincerights = provincerights + ',';
	   					provincerights = fun_combox_prefix_strRights(provincerights,yearlistrights);
	   				}
	   				if(trim(cityrights).length != 0){
	   					cityrights = fun_combox_prefix_strRights(cityrights,yearlistrights);
	   					//cityrights = cityrights + ',';
	   				}
	   				else cityrights = ' ';
	   				if(trim(districtrights).length != 0){
	   					districtrights = fun_combox_prefix_strRights(districtrights,yearlistrights);
	   					//districtrights = districtrights + ',';
	   				}
	   				else districtrights = ' ';
					var sheetrights = Ext.getCmp('TF_PrimaryTopRows').getValue() + "|" + Ext.getCmp('TF_Pages').getValue() + "|" +Ext.getCmp('TF_ExportedRows').getValue() + "|" +Ext.getCmp('TF_CopyRows').getValue();	   					   				   				   		
					Ext.Ajax.request({ 
						url  : 'SaveSheetRights',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),
							treeid : treeid,
							yearid : yearlistrights,
							nodeid : nodeid,
							sheetrights: sheetrights,
							inityearrights: inityearrights,
							yearrights: yearrights,
							provincerights: provincerights,
							cityrights: cityrights,
							districtrights: districtrights
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
							else{
								//SheetRights_Window.hide();
								Ext.Msg.alert('��ʾ','�޸�SheetȨ�޳ɹ�!');
							}
						}				
					});
	   			}				
	   		} 
	    }
   }
   function fun_savesheetrightsofinityear(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();  
		var treeid = Ext.getCmp('NavigationCombox').getValue();
	    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ�޸ĳ�ʼ���Ȩ��?',callback);
	    function callback(id){
	   		if(id == 'yes'){     			
	   			var inityearrights = Ext.getCmp("inityear_combox").getValue();	   			
	   			if(trim(inityearrights).length == 0){
	   				Ext.Msg.alert('��ʾ','��ʼ��ݲ���Ϊ��!');
	   			}	   				   			
	   			else{
	   				if(trim(inityearrights).length != 0) inityearrights = inityearrights + ',';	   					   				   				   		
					Ext.Ajax.request({ 
						url  : 'SaveSheetRightsOfInitYear',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),
							treeid : treeid,
							nodeid : nodeid,
							inityearrights: inityearrights
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
							else{
								Ext.Msg.alert('��ʾ','�޸�SheetȨ�޳ɹ�!');
							}
						}				
					});
	   			}				
	   		} 
	    }   	
   }
   
   function fun_savesheetrightsofexportcopy(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();  
		var treeid = Ext.getCmp('NavigationCombox').getValue();
	    Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ�޸ĵ�������Ȩ��?',callback);
	    function callback(id){
	   		if(id == 'yes'){
	   			if(Ext.getCmp('TF_PrimaryTopRows').isValid() && Ext.getCmp('TF_Pages').isValid() && Ext.getCmp('TF_ExportedRows').isValid() && Ext.getCmp('TF_CopyRows').isValid()){
					var sheetrights = Ext.getCmp('TF_PrimaryTopRows').getValue() + "|" + Ext.getCmp('TF_Pages').getValue() + "|" +Ext.getCmp('TF_ExportedRows').getValue() + "|" +Ext.getCmp('TF_CopyRows').getValue();
					Ext.Ajax.request({ 
						url  : 'SaveSheetRightsOfExportCopy',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),
							treeid : treeid,
							nodeid : nodeid,
							sheetrights: sheetrights
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "redirect"){
								top.location='../LoginRedirect';
							}
							else{
								Ext.Msg.alert('��ʾ','�޸�SheetȨ�޳ɹ�!');
							}
						}				
					});
	   			}
	   		} 
	    }   	
   }
   
   function fun_yearprovinceinitrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var yearinitrights = Ext.getCmp('InitYearCombox').getValue();
		var treeid = Ext.getCmp('NavigationCombox').getValue();	
        if(selected_rows == 0){
        	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
        }
        //else if(leastparentnodeid == '' && treeid == 1){
        else if(leastparentnodeid == ''){
        	Ext.Msg.alert('��ʾ','��ѡ�����ʡ�ݳ�ʼ������С���ڵ�!');
        }
        else{
		    Ext.MessageBox.confirm('��ʾ','ȷ������ҳ�涼�Ѿ���ʼ��Ȩ��?',callback);
		    function callback(id){
		   		if(id == 'yes'){
		   			Ext.Ajax.request({ 
						url  : 'SaveYearInitRights',
						method : 'post', 
						params : { 
							username : row_selection.get('Account'),
							yearid : yearinitrights,
							treeid : Ext.getCmp('NavigationCombox').getValue(),
							leastparentnodeid : leastparentnodeid
						}, 
						callback : function(options,success,response) {
							var returnStr = trim(response.responseText);
							if(returnStr == "redirect"){
								top.location='../LoginRedirect';
							}
							else if(returnStr == "error"){
								Ext.Msg.alert('��ʾ','���û���û�г�ʼ��Ȩ��!');
							}
							else{
								Ext.Msg.alert('��ʾ','��ʼ�����ʡ��Ȩ�޳ɹ�!');
							}
							
						}				
					});
		   		}
		    }	    	   
        }         
   }
   
   function fun_inityearrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var initialyearrights = Ext.getCmp('InitialYearMultiCombox').getValue();
		var treeid = Ext.getCmp('NavigationCombox').getValue();	
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    //else if(leastparentnodeid == '' && treeid == 1){
	    else if(leastparentnodeid == ''){
	    	Ext.Msg.alert('��ʾ','��ѡ����ݳ�ʼ������С���ڵ�!');
	    }
	    else{
		    Ext.MessageBox.confirm('��ʾ','ȷ������ҳ�涼�Ѿ���ʼ��Ȩ��?',callback);
		    function callback(id){
		   		if(id == 'yes'){
		   			Ext.Ajax.request({ 
						url  : 'SaveInitialYearRights',
						method : 'post', 
						params : { 
							username : row_selection.get('Account'),
							yearid : initialyearrights,
							treeid : Ext.getCmp('NavigationCombox').getValue(),
							leastparentnodeid : leastparentnodeid
						}, 
						callback : function(options,success,response) {
							var returnStr = trim(response.responseText);
							if(returnStr == "redirect"){
								top.location='../LoginRedirect';
							}
							else if(returnStr == "error"){
								Ext.Msg.alert('��ʾ','���û���û�г�ʼ��Ȩ��!');
							}
							else if(returnStr == "failure"){
								Ext.Msg.alert('��ʾ','����ʧ��!');
							}							
							else{
								Ext.Msg.alert('��ʾ','��ʼ����ݵ�Ȩ�޳ɹ�!');
							}							
						}				
					});
		   		}
		    }	    	   
	    }     	
   }
   
   function fun_topnrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var topnrights = Ext.getCmp('TopNCombox').getValue();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }   
	    else{
		    Ext.MessageBox.confirm('��ʾ','ȷ������TopNȨ��',callback);
		    function callback(id){
		   		if(id == 'yes'){
		   			Ext.Ajax.request({ 
						url  : 'SaveTopNRights',
						method : 'post', 
						params : { 
							username : row_selection.get('Account'),							
							treeid : Ext.getCmp('NavigationCombox').getValue(),
							topnrights : topnrights,
							leastparentnodeid : leastparentnodeid
						}, 
						callback : function(options,success,response) {
							var returnStr = trim(response.responseText);
							if(returnStr == "redirect"){
								top.location='../LoginRedirect';
							}
							else if(returnStr == "error"){
								Ext.Msg.alert('��ʾ','���û���û�г�ʼ��Ȩ��!');
							}
							else{
								Ext.Msg.alert('��ʾ','TopNȨ�޳ɹ�!');
							}							
						}				
					});
		   		}
		    }	    	   
	    }   	   	
   }
   
   function fun_pagesrights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
		var pagesrights = Ext.getCmp('PagesCombox').getValue();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }   
	    else{
		    Ext.MessageBox.confirm('��ʾ','ȷ������ҳ��Ȩ��',callback);
		    function callback(id){
		   		if(id == 'yes'){
		   			Ext.Ajax.request({ 
						url  : 'SavePagesRights',
						method : 'post', 
						params : { 
							username : row_selection.get('Account'),							
							treeid : Ext.getCmp('NavigationCombox').getValue(),
							pagesrights : pagesrights,
							leastparentnodeid : leastparentnodeid
						}, 
						callback : function(options,success,response) {
							var returnStr = trim(response.responseText);
							if(returnStr == "redirect"){
								top.location='../LoginRedirect';
							}
							else if(returnStr == "error"){
								Ext.Msg.alert('��ʾ','���û���û�г�ʼ��Ȩ��!');
							}
							else{
								Ext.Msg.alert('��ʾ','ҳ��Ȩ�޳ɹ�!');
							}							
						}				
					});
		   		}
		    }	    	   
	    }   	   	
   }
   
   function fun_maprights(){
		var select_model =sys_grid.getSelectionModel();
		var row_selection = select_model.getSelected();	
		var selected_rows = select_model.getCount();
        if(selected_rows == 0){
        	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
        }
        else{
        	account_id = row_selection.get('ID');  //ȫ�ֱ���
        	map_winpanel.show(); 
			Ext.Ajax.request({ 
				url  : 'GetMapInitYearOfSysRights',
				method : 'post', 
				params : { 
					accountid : account_id
				}, 
				callback : function(options,success,response) {
					var returnStr = trim(response.responseText);
					if(returnStr == ''){
						var firstValue = InitYearCombox_Store.data.items[0].data[Ext.getCmp('mapyear_combox').valueField];
						Ext.getCmp('mapyear_combox').setValue(firstValue);
					}
					else
						Ext.getCmp('mapyear_combox').setValue(returnStr);
				}
			});		
        }    	
   }
   
   function fun_mapyearinitrights_submit(){
		Ext.Ajax.request({ 
			url  : 'SaveMapInitYearRights',
			method : 'post', 
			params : { 
				accountid : account_id,
				yearid : Ext.getCmp('mapyear_combox').getValue()
			}, 
			callback : function(options,success,response) {
				Ext.Msg.alert('��ʾ','��ʼ����ݳɹ�!');
			}
		});	
   }
   
   function fun_maprights_submit(){
   		Ext.MessageBox.confirm('��ʾ','ȷ����Ҫ��������Ȩ��?',callback);
	    function callback(id){
	   		if(id == 'yes'){
	   			var str = "";
	   			var count = map_gridpanel_store.getCount();
	   			for(var i = 0;i<count;i++){
	   				if(map_gridpanel_store.data.items[i].data.Selected == 1){
	   					str = str + year_id + '#' + map_gridpanel_store.data.items[i].data.Rule_id + ',';
	   				}
	   			}
				Ext.Ajax.request({ 
					url  : 'SaveMapRuleIdRights',
					method : 'post', 
					params : { 
						accountid : account_id,
						rulerights : str,
						yearid : year_id
					}, 
					callback : function(options,success,response) {
						Ext.Msg.alert('��ʾ','ר�Ᵽ��ɹ�!');
					}
				});
		
		
	   		}
	    }	   	
   }
   
   function fun_maprights_cancel(){
   		map_winpanel.hide(); 
   }
   
   function fun_saverightmenu_rights(){
		var select_model = sys_grid.getSelectionModel();	
		var selected_rows = select_model.getCount();
	    if(selected_rows == 0){
	    	Ext.Msg.alert('��ʾ','����ѡ���û�!') ;
	    }
	    else if(selected_rows>1){
	    	Ext.Msg.alert('��ʾ','ֻ��ѡ��һ���û����б���!') ;
	    } 
	    else{
		    Ext.MessageBox.confirm('��ʾ','ȷ���޸��û��Ҽ���ҵȨ��?',callback);
		    function callback(id){
		   		if(id == 'yes' && isECRightedit == 1){
		   			var row_selection = select_model.getSelected();		   						   			
					Ext.Ajax.request({ 
						url  : 'SaveRightMenu_Rights',
						method : 'post', 
						params : { 
							userid : row_selection.get('ID'),											
							rightmenu_rights : row_selection.get('RightMenu_Rights')							
						}, 
						callback : function(options,success,response) {
							if(trim(response.responseText) == "success"){
								sysgrid_store.commitChanges();
								Ext.Msg.alert('��ʾ','�޸ĳɹ�!');
								sysgrid_store.reload();								
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




   
   
   
    
});