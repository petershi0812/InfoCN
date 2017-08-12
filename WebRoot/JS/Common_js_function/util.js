/***************************
* ## 重写各种gridpanel相关的指标
****************************/ 
/*tabpanel 双击标题关闭页面*/
Ext.override(Ext.TabPanel, { 
	 initEvents: function () { 
		Ext.TabPanel.superclass.initEvents.call(this);
	 this.mon(this.strip, {
	 	scope: this,
	 	mousedown: this.onStripMouseDown,
	 	contextmenu: this.onStripContextMenu
		});
	if(this.enableTabScroll){
		this.mon(this.strip, 'mousewheel', this.onWheel, this);
	}
	 this.mon(this.strip, 'dblclick', this.onTitleDblClick, this); 
	}
});

/*解决GridPanel在google浏览器中显示最后一列出现间隙的问题。*/
Ext.override(Ext.grid.GridView, {  
	getColumnStyle: function (colIndex, isHeader) {  
      var colModel = this.cm,  
      colConfig = colModel.config,  
      style = isHeader ? '' : colConfig[colIndex].css || '',  
      align = colConfig[colIndex].align;  
      if (Ext.isChrome) {  
          style += String.format("width: {0};", parseInt(this.getColumnWidth(colIndex)) - 2 + 'px');  
      } else {  
          style += String.format("width: {0};", this.getColumnWidth(colIndex));  
      }  
      if (colModel.isHidden(colIndex)) {  
          style += 'display: none; ';  
      }  
      if (align) {  
          style += String.format("text-align: {0};", align);  
      }  
      return style;  
    }  
});  
/*以下为了自定义列*/
Ext.override(Ext.data.Store,{
	addField: function(field){
		field = new Ext.data.Field(field);
		this.recordType.prototype.fields.replace(field);
		if(typeof field.defaultValue != 'undefined'){
			this.each(function(r){
				if(typeof r.data[field.name] == 'undefined'){
					r.data[field.name] = field.defaultValue;
				}
			});
		}
	},
	removeField: function(name){
		this.recordType.prototype.fields.removeKey(name);
		this.each(function(r){
			delete r.data[name];
			if(r.modified){
				delete r.modified[name];
			}
		});
	}
});
Ext.override(Ext.grid.ColumnModel,{
	addColumn: function(column, colIndex){
		if(typeof column == 'string'){
			column = {header: column, dataIndex: column};
		}
		var config = this.config;
		this.config = [];
		if(typeof colIndex == 'number'){
			config.splice(colIndex, 0, column);
		}else{
			colIndex = config.push(column);
		}
		this.setConfig(config);
		return colIndex;
	},
	removeColumn: function(colIndex){
		var config = this.config;
		this.config = [config[colIndex]];
		config.splice(colIndex, 1);
		this.setConfig(config);
	}
});
Ext.override(Ext.grid.GridPanel,{
	addColumn: function(field, column, colIndex){
		if(!column){
			if(field.dataIndex){
				column = field;
				field = field.dataIndex;
			} else{
				column = field.name || field;
			}
		}
		this.store.addField(field);
		return this.colModel.addColumn(column, colIndex);
	},
	removeColumn: function(name, colIndex){
		this.store.removeField(name);
		if(typeof colIndex != 'number'){
			colIndex = this.colModel.findColumnIndex(name);
		}
		if(colIndex >= 0){
			this.colModel.removeColumn(colIndex);
		}
	}
});	

/***************************
* ## 使得window panel始终在上面
****************************/ 
Ext.ux.WindowAlwaysOnTop = function(){
    this.init = function(win){
         win.on('deactivate', function(){
            var i=1;
            this.manager.each(function(){i++});
            this.setZIndex(this.manager.zseed + (i*10));
         });
         win.on('activate', function(){
            var i=1;
            this.manager.each(function(){i++});
            this.setZIndex(this.manager.zseed + (i*10));
         }); 
    }
};

 /***************************
     * ## 该页面所有功能函数
     *   @@grid_store_reload(_gridstore,_pageSize,_PagingToolbar,_dbname,_sql) : 数据加载函数，针对gridpanel，进行筛选,并且任何gridpanel中的刷新都运用次函数
     *   @@fun_combox_prefix_strRights(_str,_prefix): 功能函数，构建combox的权限
     *   @@fun_combox_split_strRights(_year,_rightstr): 功能函数，返回对应年份的行政区划权限
     *   @@fun_combox_listname(_grid) : 功能函数，获取主页面gridpanel的列名  
     *   @@fun_combox_adv_listname(_grid,_FieldStr_Point,_MathType) : 功能函数，获取主页面以某个dataindex为点某一边gridpanel的列名 
     *   @@fun_combox_singlename(_str): 功能函数，获取简单菜单数据源  
     *   @@fun_newcolumn_dataindexformula(_formula,_findname,_griddataindex,_gridstore): 功能函数，在新增列模块中返回公式
     *   @@fun_tree_listname(_grid): 功能函数，指标筛选模块下生成医院列名的树形store
     *   @@fun_gridcolumnindex(_headername,_grid): 功能函数，获取主界面grid对应列名/列mapping的列号
     *   @@fun_gridcolumnindex_show(_showindex,_grid): 功能函数，显示主界面grid列号的列  
     *   @@fun_gridcolumnindex_columnonlyexists(_columdataindex,_grid): 功能函数，只保留对应的列，其他都删除【废除】
     *   @@exported(_grid): 功能函数，导出excel 
     *   @@fun_tree_listname_onlyfield(_grid,_numbercolumnindex): 功能函数，新增列模块下生成列（并且仅仅包含核心数值指标）名的树形store
     *   @@fun_gridfieldname_exists(_findtext,_grid): 功能函数，新增列模块下判断新列名是否已经存在
     *   @@fun_treenodetext_dataindex(_findnodetext,_treeroot): 功能函数，返回新增列模块下列名对应的dataindex
     *   @@fun_combox_cdcadv_listname(_grid,_FieldStr_Point,_MathType) : 数据合并区功能函数，获取主页面以某个dataindex为点某一边gridpanel的列，去掉“疾病名称”   
   ****************************/  
function grid_store_reload(_gridstore,_pageSize,_PagingToolbar,_dbname,_sql,_rightspk){ 		      
	_gridstore.on('beforeload', function(store,options) 
	{ 
		var new_params={sql:_sql,dbname:_dbname,rights:_rightspk}; 
		Ext.apply(options.params,new_params); 
	});	    	
	_gridstore.reload({params : {start:0,limit:_pageSize,sql:_sql}});
	_PagingToolbar.bind(_gridstore);		
}

function fun_combox_prefix_strRights(_str,_prefix){
	var _data = "";
	if(_str.indexOf(',')>0){
		var mid = "";
		var array = _str.split(',');
		for(var i = 0;i<array.length;i++){
			mid = mid + _prefix + '#' + trim(array[i]) + ',';
		}
		_data = mid;
	}
	else{
		_data = _prefix + '#' + trim(_str) + ',';
	}
	return _data;
}

function fun_combox_split_strRights(_year,_rightstr){
	var arr = _rightstr.split(",");
	var str = "";
	for(var i = 0; i < arr.length; i++){
		if(trim(arr[i]).indexOf(_year+'#')>=0){
			str = str + arr[i].replace(_year+'#', '') + ',';			
		}
	}
	return str;	
}

function fun_combox_listname(_grid){  //pre version : common_load_basic_sort
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var pre = "[";
    var post = "]";
    var mid = "";
	for(var k = 1;k<=column_count-1;k++){		
		var header = confObj[k].header;
		var dataIndex = confObj[k].dataIndex;
		if(k < (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"'],";
		if(k == (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"']";
	}
	var _data = pre+mid+post;
    return _data;
}

function fun_combox_singlename(_str){
    var pre = "[";
    var post = "]";
    var mid = "";
    var _data = "";
	if(_str.indexOf(',')>0){
		var array = _str.split(",");
		for(var i = 0; i<array.length; i++){
			if(i == array.length-1) mid = mid + "['"+array[i]+"']";
			else mid = mid + "['"+array[i]+"'],"; 
		}		
	}
	else{
		mid = "['"+_str+"']";	
	}
	var _data = pre+mid+post;
	return _data;
}

function fun_combox_adv_listname(_grid,_FieldStr_Point,_MathType){  
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var pre = "[";
    var post = "]";
    var mid = "";
    if(_MathType == "小于")
    {
		for(var k = 1;k<=_FieldStr_Point-1;k++){		
			var header = confObj[k].header;
			var dataIndex = confObj[k].dataIndex;			
			//if(k < (_FieldStr_Point-1)) mid = mid + "['"+header+"','"+dataIndex+"'],";
			//if(k == (_FieldStr_Point-1)) mid = mid + "['"+header+"','"+dataIndex+"']";
			if(typeof(confObj[k].format) == 'undefined'){
				mid = mid + "['"+header+"','"+dataIndex+"'],";
			}		
		}
		mid = mid.substring(0,mid.length-1);
    }
    else if(_MathType == "大于"){
		for(var k = 1;k<=column_count-1;k++){		
			var header = confObj[k].header;
			var dataIndex = confObj[k].dataIndex;
			//if(k < (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"'],";
			//if(k == (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"']";
			if(typeof(confObj[k].format) != 'undefined'){
				mid = mid + "['"+header+"','"+dataIndex+"'],";
			}			
		} 
		mid = mid.substring(0,mid.length-1);
    }
	var _data = pre+mid+post;
    return _data;
} 

function fun_combox_cdcadv_listname(_grid,_FieldStr_Point,_MathType){  
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var pre = "[";
    var post = "]";
    var mid = "";
    var diseasemid = "";
    if(_MathType == "小于")
    {	
		for(var k = 1;k<=_FieldStr_Point-1;k++){		
			var header = confObj[k].header;
			var dataIndex = confObj[k].dataIndex;
			//if(k < (_FieldStr_Point-1)) mid = mid + "['"+header+"','"+dataIndex+"'],";
			//if(k == (_FieldStr_Point-1)) mid = mid + "['"+header+"','"+dataIndex+"']";
			if(typeof(confObj[k].format) != 'undefined'){
				mid = mid + "['"+header+"','"+dataIndex+"'],";
			}		
		}
		mid = mid.substring(0,mid.length-1);
		
		for(var k = 1;k<=column_count-1;k++){		
			var header = confObj[k].header;
			var dataIndex = confObj[k].dataIndex;
			if(header.indexOf("疾病名称")>=0 || header.indexOf("医院类型")>=0){
				diseasemid = "['"+header+"','"+dataIndex+"']";
				break;
			}
		} 
		if(diseasemid.length>0){
			mid = mid + "," + diseasemid;
		}
    }
    else if(_MathType == "大于"){
		for(var k = 1;k<=column_count-1;k++){		
			var header = confObj[k].header;
			var dataIndex = confObj[k].dataIndex;
			if(header.indexOf("疾病名称")<0 && header.indexOf("医院类型")<0){
				if(typeof(confObj[k].format) != 'undefined'){
					mid = mid + "['"+header+"','"+dataIndex+"'],";
				}				
				//if(k < (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"'],";
				//if(k == (column_count-1)) mid = mid + "['"+header+"','"+dataIndex+"']";
			}
		}
		mid = mid.substring(0,mid.length-1);
    }    
	var _data = pre+mid+post;
    return _data;
} 

function fun_newcolumn_dataindexformula(_formula,_findname,_griddataindex,_gridstore){
    for(var j = 0 ;j<=_gridstore.getCount()-1;j++){
    	var data = _gridstore.data.items[j].data;
    	if(eval("data."+_griddataindex) == _findname){
    		return eval("data."+_formula);
    	}
    }
    return "";			    	
}

function fun_tree_listname(_grid){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var tree_name_str = '';
    for(var k = 1 ;k<=column_count-1;k++)
    {
    	if(k<column_count - 1){
    		tree_name_str = tree_name_str + "{text : '"+confObj[k].header+"',leaf : true,name : '"+confObj[k].dataIndex+"',iconCls : 'tree_level',id : "+k+"},";
    	}else{
    		tree_name_str = tree_name_str + "{text : '"+confObj[k].header+"',leaf : true,name : '"+confObj[k].dataIndex+"',iconCls : 'tree_level',id : "+k+"}";
    	}	    
    }
    tree_name_str = "[" + tree_name_str + "]";
    return tree_name_str;
}

function fun_gridcolumnindex(_headername,_grid){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    for(var i= 0; i<=column_count-1;i++){
    	if(confObj[i].header == _headername){
    		return i;
    	}
    	else if(confObj[i].dataIndex == _headername){
    		return i;
    	}
    }
}

function fun_treenodetext_dataindex(_findnodetext,_treeroot){
    var childnodes = _treeroot.childNodes;
    for(var i=0; i < childnodes.length; i++){        	
    	if(trim(_findnodetext) == childnodes[i].text){
    		return childnodes[i].attributes.name;
    	}
    }
} 

function fun_tree_listname_onlyfield(_grid,_numbercolumnindex){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var tree_name_str = '';
    for(var k = 1 ;k<=column_count-1;k++)
    { 
    		if(confObj[k].header.indexOf("疾病名称")<0 && confObj[k].header.indexOf("医院类型")<0){
		    	/*if(k< column_count - 1){
		    		tree_name_str = tree_name_str + "{text : '"+confObj[k].header+"',leaf : true,name : '"+confObj[k].dataIndex+"',iconCls : 'tree_level',id : "+k+"},";
		    	}else{
		    		tree_name_str = tree_name_str + "{text : '"+confObj[k].header+"',leaf : true,name : '"+confObj[k].dataIndex+"',iconCls : 'tree_level',id : "+k+"}";
		    	}*/
    			if(typeof(confObj[k].format) != 'undefined'){
					tree_name_str = tree_name_str + "{text : '"+confObj[k].header+"',leaf : true,name : '"+confObj[k].dataIndex+"',iconCls : 'tree_level',id : "+k+"},";
				}
    		}
    }
    tree_name_str = tree_name_str.substring(0,tree_name_str.length-1);
    
    tree_name_str = "[" + tree_name_str + "]";
    return tree_name_str;
}

function fun_gridfieldname_exists(_findtext,_grid){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var columnsarray = [];
    for(var i=0; i < column_count; i++){        	
    	columnsarray.push(confObj[i].header);
    }
    if(isInArray(trim(_findtext),columnsarray)){
    	return true;
    }
    else{
    	return false;
    }	    	    
}
  
function fun_gridcolumnindex_show(_showindex,_grid){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    for(var i=0; i < column_count; i++){  
    	if(i == _showindex) grid_col_model.setHidden(i,false);
    	else grid_col_model.setHidden(i,true);
    }	
}

function fun_gridcolumnindex_columnonlyexists(_columdataindex,_grid){
	var grid_col_model = _grid.getColumnModel();
    var confObj = grid_col_model.config;
    var column_count = grid_col_model.getColumnCount();
    var dataindex_array = [];
    for(var i= 1; i<=column_count-1;i++){
    	dataindex_array.push(confObj[i].dataIndex);
    }   
    for(var i = 0 ; i <=dataindex_array.length-1;i++){
    	if(dataindex_array[i] != _columdataindex){
    		_grid.removeColumn(dataindex_array[i]); 
    	}
    }
}

/*导出Excel*/
function exported(_grid){
    var vExportContent = _grid.getExcelXml();
    if (Ext.isIE6 || Ext.isIE7 || Ext.isSafari || Ext.isSafari2 || Ext.isSafari3) {   
        var fd=Ext.get('frmDummy');
        if (!fd) {
            fd=Ext.DomHelper.append(Ext.getBody(),{tag:'form',method:'post',id:'frmDummy',action:'ExportExcel'/*action:'../ActionController/ExportedAction/exportexcel.jsp'*/, target:'_blank',name:'frmDummy',cls:'x-hidden',cn:[
                {tag:'input',name:'exportContent',id:'exportContent',type:'hidden'}
            ]},true);
        }
        fd.child('#exportContent').set({value:vExportContent});
        fd.dom.submit();
    } else {
        document.location = 'data:application/vnd.ms-excel;base64,'+Base64.encode(vExportContent);
    }
}

/***************************
     * ## 选择树的函数
***************************/ 
function childHasChecked(node){  //判断子节点的选中情况
    var childNodes = node.childNodes;
    var cNum = 0;
    var nNum = 0;
    if(childNodes || childNodes.length>0){
      for(var i=0;i<childNodes.length;i++){
        if(childNodes[i].attributes.iconCls=="checked")
          cNum++;
        else if(childNodes[i].attributes.iconCls=="unchecked")  
          nNum++;   
      }
    }
    if(cNum == childNodes.length)
      return 1;
    if(nNum == childNodes.length)  
      return -1;
    return 0;
} 
    
function parentCheck(node){   //级联选中父节点
    if(node.parentNode){   
      switch (childHasChecked(node.parentNode)){
        case 1:{
          setCheck(node.parentNode,"checked");
          break;
        }
        case 0:{
          setCheck(node.parentNode,"pchecked");
          break;
        }
        case -1:{
          setCheck(node.parentNode,"unchecked");
          break;
        } 
      }
      parentCheck(node.parentNode);
    }
}
    	
function childCheck(node,check){  //对孩子节点进行全部选中或取消
	if(!node.isExpanded()) node.expand(true,false);
    if(node.hasChildNodes()){
      if(childHasChecked(node)==-1 && check=="pchecked")
        check="unchecked";
      	node.eachChild(function(child){  
        	childCheck(child,check);
      	});
    }
    setCheck(node,check);
  }
	
function setCheck(node,check){  //改变选中情况  
    if(node.attributes.iconCls!=check){
      var imgHtmlEl = node.getUI().getIconEl(); 
      if(imgHtmlEl){
        switch(node.attributes.iconCls){
          case "checked":{
            Ext.Element.fly(imgHtmlEl).removeClass("checked");
            break;
          }  
          case "pchecked":{
            Ext.Element.fly(imgHtmlEl).removeClass("pchecked");
            break;
          }  
          case "unchecked":{
            Ext.Element.fly(imgHtmlEl).removeClass("unchecked");
            break; 
          }                
        }     
        node.attributes.iconCls = check;
        Ext.Element.fly(imgHtmlEl).addClass(check);
     }
   }
}

/*创建权限字符串接入DB*/
function tagNodeOfDB(node){  //遍历树 node=root	
	if(node.hasChildNodes()){	  
	     node.eachChild(function(child){ 
	  // if( child.isLeaf()&&child.attributes.iconCls=="checked"){     
			if(child.attributes.iconCls=="pchecked"||child.attributes.iconCls=="checked"){     
				rightstr=rightstr+'/'+child.id;        //权限核心
			}     
		 	tagNodeOfDB(child);
	     });
	}
}
	
function tagNode(node, tagValue){	//标记节点，整棵树node=root
   if(tagValue==node.attributes.text)
     setCheck(node , "checked");
   else if(node.hasChildNodes()){
     node.eachChild(function(child){ // if(!child.isLeaf())
       tagNode(child, tagValue);
    });
   }  
}

/*标记叶子节点的权限*/
function arrTagNodeOfLeaf(node,tagArrValue){
	if(node.hasChildNodes()){
		if(!node.isExpanded()) node.expand(true,false);
			node.eachChild(function(child){
				arrTagNodeOfLeaf(child,tagArrValue);
			});
	}
	else if(tagArrValue.indexOf(node.attributes.id)>-1){
		setCheck(node,"checked");
	}
}

/*标记叶子的所有父节点的check状态：pcheck/uncheck/check */
function queryNodeParent(node){  //遍历树 node=root
    if(node.attributes.iconCls=="checked"){    
      childCheck(node,"checked");
      parentCheck(node);
    }else if(node.hasChildNodes()){	  
         node.eachChild(function(child){ // if(!child.isLeaf())
           queryNodeParent(child);
         });
    }   
}

/*标记叶子的节点为unchecked*/
function uncheckall(node){
    if(node.hasChildNodes()){	  
         node.eachChild(function(child){ // if(!child.isLeaf())     
         	 setCheck(child,"unchecked");
             uncheckall(child);
         });
	}  
}

/***************************
     * ## 该页面所有辅助函数
***************************/ 
/*判断数组中是否有重复*/
function isRepeat(arr){
     var hash = {};
     for(var i in arr) {
         if(hash[arr[i]])
            return true;
         	hash[arr[i]] = true;
     }
     return false;
}

/*数组去重*/
function ArrayUnique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

/*判断元素是否存在数组中*/
function isInArray(el,arr){	
	for(i=0;i<=arr.length-1;i++){
		if(el==arr[i]) return true
	}
     return false;
}

/*判断元素在数组中的个数*/
function countInArray(el,arr){	
	var _count = 0;
	for(i=0;i<=arr.length-1;i++){
		if(el==trim(arr[i])) _count = _count + 1;
	}
     return _count;
}

/*判断元素在数组中元素（包括字符串）*/
function countInArray_adv(el,arr){	
	var _count = 0;
	for(i=0;i<=arr.length-1;i++){
		if(el==trim(arr[i])) _count = _count + 1;
		else if(arr[i].indexOf(el)>=0) _count = _count + 1;
	}
     return _count;
}

/*去前后空格*/     
function trim(_str){  
	 return _str.replace(/(^\s*)|(\s*$)/g, "");
}
/*去掉所有空格*/     
function multi_trim(_str){  
	var r = /\s+/g;
    return _str.replace(r," ");
}

/*替换多个空格给一个空格*/     
function multi_trim_one(_str){  
	var r = /\s+/g;
    return _str.replace(r," ");
}

/*判断是否是数字*/ 
function isNum(_num){
	var reNum =/^\d*$/;
    return (reNum.test(_num));
}

/*判断是否是汉字或者字母*/ 
function isCHENChar(str){   
   var reg = /^[\u0391-\uFFE5A-Za-z]+$/;
   return reg.test(str);
}

/*替换所有字符*/ 
function replaceAll(_str,_re,_str1){
	var reNum ="/" + _re + "/g";
	return _str.replace(eval(reNum),_str1);
}

/*定义二维数组*/
function Array_2Dimension(nRow,nColumn){
	var array1=new Array(); //定义一维数组
	for(i=0;i<nRow;i++){
    	array1[i]=new Array(); 
　　　　　for(n=0; n< nColumn; n++){
        	array1[i][n] = 0;
        }
　　　}
	return array1;
}

/*逆序*/
function reverse(_str){
return _str.split("").reverse().join("");
}

/*加密开始*/
function encode64(input) {
	var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";	
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
                enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
                enc4 = 64;
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)
                        + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return output;
}

/*sleep*/
function sleep(numberMillis) { 
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
		now = new Date(); 
		if (now.getTime() > exitTime) 
			return; 
	} 
}

 /***************************
 *	@@ PAGESIZE ： 分页数
****************************/
var PAGESIZE = 200;