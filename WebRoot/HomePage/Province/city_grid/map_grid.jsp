<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<%
  	//String flag = URLDecoder.decode(request.getParameter("flag"),"UTF-8"); 
  	String flag = request.getParameter("flag");
  	String province = "",city = "",maptitle = "",subjectid="";
	if(flag.equals("1")){  	
		subjectid = URLDecoder.decode(request.getParameter("subjectid"),"UTF-8");
  		province = URLDecoder.decode(request.getParameter("province"),"UTF-8");  		
  		maptitle= new String(request.getParameter("maptitle").getBytes("iso-8859-1"), "UTF-8");	 					  		
  	}
  	else{
  		subjectid = URLDecoder.decode(request.getParameter("subjectid"),"UTF-8");
  		city = URLDecoder.decode(request.getParameter("city"),"UTF-8");
  		maptitle = URLDecoder.decode(request.getParameter("maptitle"),"UTF-8");  
  	}  	
%>
<head>
<link rel="stylesheet" type="text/css" href="../../../EXT/extjs4.2.1/resources/css/ext-all-neptune.css" />
<script src="../../../EXT/extjs4.2.1/bootstrap.js"></script>
<script type="text/javascript" src="../../../EXT/extjs4.2.1/locale/ext-lang-zh_CN.js"></script>
<script type="text/javascript" src="../../../EXT/extjs4.2.1/ux/export-all.js"></script>
</head>

<body style = "background: #fff; padding:5px;">	 
<input type="hidden" value="<%=province%>" id="province"/>  
<input type="hidden" value="<%=city%>" id="city"/>  
<input type="hidden" value="<%=flag%>" id="flag"/>  
<input type="hidden" value="<%=maptitle%>" id="maptitle"/> 
<input type="hidden" value="<%=subjectid%>" id="subjectid"/>   
<div id="grid_map" style="height:100%;width:100%;"></div>
<script type="text/javascript">
window.onload = function() {  
	var _rootEl=document.compatMode=="CSS1Compat"?document.documentElement:document.body;/*得到当前窗体的根元素*/ 
	//setTimeout(function(){
		Ext.require([
		    'Ext.grid.*',
		    'Ext.data.*',
		]);
		Ext.Loader.setConfig({ enabled: true });  
		Ext.Loader.setPath('Ext.ux.exporter', '../../../EXT/extjs4.2.1/ux/exporter');
		Ext.require([  
		    'Ext.ux.exporter.Exporter'  
		]); 				
		
		Ext.onReady(function() {
			var flag  = document.getElementById('flag').value;	
			var city  = document.getElementById('city').value;
			var province  = document.getElementById('province').value;
			var subjectid  = document.getElementById('subjectid').value;
			var inputparams ="";
			if(flag == "1"){
				inputparams = province;
			}else{
				inputparams = city;
			}
			Ext.define('Map_Grid', {
			    extend: 'Ext.data.Model',
			    fields: [
			       {name: 'city', type: 'string'},
			       {name: 'index',type: 'float'}
			    ]
			});
					   
			var mapgrid_store = Ext.create('Ext.data.Store', {
			    model: 'Map_Grid',
			    id : 'mapgrid_store',
			    autoLoad: true,
			    proxy: {
			        type: "ajax",
			        //url: "../../../ActionController/GridAction/MapGridstore.jsp?subjectid="+subjectid+"&flag="+flag+"&params="+encodeURI(encodeURI(inputparams)),
			        url: 'GetMapGridstore?subjectid='+subjectid+'&flag='+flag+'&params='+encodeURI(encodeURI(inputparams)),
			        reader: {
			            type: 'json',
			            root: "myData"
			        }
			    }	    
			}); 	
		               
		    Ext.create('Ext.grid.Panel', {
		        id:'grid',
		        //title:  document.getElementById('maptitle').value,
		        margin: '0 0 0 0',
		        store : mapgrid_store,
		        //collapsible: true,
		        border:false,
		        height:_rootEl.clientHeight/1.01, 
				autoScroll:true,				             
		        viewConfig: {forceFit: true,loadMask:false},
		        columns: [
		            { text: '城市', dataIndex: 'city', align:'left',flex:1},
		            { text: '指标', dataIndex: 'index',align:'right',flex:1,xtype:'numbercolumn',format : '0,00.00' }
		        ],		        
				dockedItems:[{  
                    xtype: 'toolbar',  
                    dock: 'top',  
                    style : 'background-color: #157fcc',
                    items: [
                    	"<span style='font-size:13px;font-weight:bold;color:white;line-height:15px;font-family:arial,helvetica,verdana,sans-serif;text-transform: none;'>" + document.getElementById('maptitle').value+ "</span>",
                    	'->',  
                        Ext.create('Ext.ux.exporter.Button', {
                        	style: 'margin-top : -12px',
                            component: Ext.getCmp('grid'),  
                            text: "导出Excel" ,
                            tooltip:'导出'
                        })  
                    ]}],		        
		        renderTo: 'grid_map'
		    });
				
		});
	//},100);
	
};
</script>
</body>	
</html>

