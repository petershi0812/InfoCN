/**
 * @class Ext.grid.PasteCopyGridPanel
 * Version: 1.4
 * Author: Surinder singh http://www.sencha.com/forum/member.php?75710-Surinder-singh, surinder83singh@gmail.com
 * changes: 1) added the block fill feature.
 			2) support for auto editing on any non-navigation key press (feature demanded by jackpan http://www.sencha.com/forum/member.php?181839-jackpan). 
 *
 */
Ext.grid.PasteCopyGridPanel = Ext.extend(Ext.grid.GridPanel, {
 	
 	initComponent : function(){
 		Ext.grid.PasteCopyGridPanel.superclass.initComponent.call(this);
		this.addClass('PasteCopyGridPanel');
 		/*make sure that selection modal is ExcelCellSelectionModel*/
 		//this.selModel = new Ext.grid.ExcelCellSelectionModel();
 		this.addListener('render',this.addKeyMap, this);
 	}, 	
 	addKeyMap:function(){
    	var thisGrid = this;
    	this.body.on("mouseover", this.onMouseOver, this);
    	this.body.on("mouseup", this.onMouseUp, this);
    	Ext.DomQuery.selectNode('div[class*=x-grid3-scroller]', this.getEl().dom).style.overflowX='hidden';
	 	// map multiple keys to multiple actions by strings and array of codes	 	
	 	new Ext.KeyMap(Ext.DomQuery.selectNode('div[class*=x-grid3-scroller]', this.getEl().dom).id, [{
	        key: "c",
	        ctrl:true,
	        fn: function(){
				thisGrid.copyToClipBoard(thisGrid.getSelectionModel().getSelectedCellRange());
			}
	    },{
	    	key: "v",
	        ctrl:true,
	        fn: function(){
	        	 thisGrid.pasteFromClipBoard();
			}
	    }]);
	},
	onMouseOver:function(e){
		this.processEvent("mouseover", e);
	},
	onMouseUp:function(e){
		this.processEvent("mouseup", e);
	}, 
	copyToClipBoard:function(rows){
    	this.collectGridData(rows);
    	if( window.clipboardData && clipboardData.setData )	{
			clipboardData.setData("text", this.tsvData);
		} else {
			var hiddentextarea = this.getHiddenTextArea();
			hiddentextarea.dom.value = this.tsvData; 
	    	hiddentextarea.focus();
	        hiddentextarea.dom.setSelectionRange(0, hiddentextarea.dom.value.length);			
		}
    },
    collectGridData:function(cr){
        var row1 		= cr[0], col1 = cr[1], row2 = cr[2], col2=cr[3];
        this.tsvData 	="";
        var rowTsv		="";
        for(var r = row1; r<= row2; r++){
        	if(this.tsvData!=""){
        	  	this.tsvData +="\n";
        	}
        	rowTsv	= "";
        	for(var c = col1; c<= col2; c++){
        		if(rowTsv!=""){
	        	  	rowTsv+="\t";
	        	}				
				
        	  	rowTsv += this.store.getAt(r).get(this.getColumnModel().getDataIndex(c));
        	}
        	this.tsvData +=rowTsv;
    	}
    	return this.tsvData;        
	},
		
	pasteFromClipBoard:function(){        
    	var hiddentextarea 			= this.getHiddenTextArea();
		hiddentextarea.dom.value 	= ""; 
    	hiddentextarea.focus();
    },	
    getHiddenTextArea:function(){
		if(!this.hiddentextarea){
    		this.hiddentextarea = new Ext.Element(document.createElement('textarea'));    		
    		//this.hiddentextarea.setStyle('left','-1000px');
			this.hiddentextarea.setStyle('border','2px solid #ff0000');
			this.hiddentextarea.setStyle('position','absolute');
			//this.hiddentextarea.setStyle('top','0px');
			this.hiddentextarea.setStyle('z-index','-1');
			this.hiddentextarea.setStyle('width','100px');
			this.hiddentextarea.setStyle('height','30px');
			
    		this.hiddentextarea.addListener('keyup', this.updateGridData, this);
    		Ext.get(this.getEl().dom.firstChild).appendChild(this.hiddentextarea.dom);
    	}
    	return this.hiddentextarea;
    }
	
});
Ext.reg('PasteCopyGrid', Ext.grid.PasteCopyGridPanel);