   /***************************
     * ## 该页面所有函数
     * 	 @@renderCharts: 
     * 		$$: _chartindex=0 针对单维条形图，柱状图，折线图，面积图
     * 		$$: _chartindex=1 针对多维条形图(堆积)，柱状图(堆积)，折线图，面积图(堆积)
     *      $$: _chartindex=1.1 柱状图(100%堆积)
     * 		$$: _chartindex=2.1 针对单维饼图，圆环图
     * 		$$: _chartindex=2.2 针对多维饼图
     * 		$$: _chartindex=3 针对散点图
     * 		$$: _chartindex=4 针对气泡图
     *		$$: _chartindex=5 针对雷达图
     *		$$: _chartindex=6 针对单轴、主次轴结合图
   ****************************/
function renderCharts(_renderAt,_chartype,_chartindex,_Caption,_subCaption,_xAxisname,_yAxisName,_showLabel,_data) {
	FusionCharts.ready(function () {
        var chartWidth = '100%',chartHeight = '100%';        
        if(_chartindex == 0){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}				
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "xAxisname": _xAxisname,		             
		              "yAxisName": _yAxisName,
		              //"numberPrefix": "$",	
		              "formatNumber":"1",
		              "showValues":_showLabel,
		              "decimals":"2",
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "paletteColors": "#0075c2",   //"palettecolors": "#008ee4,#6baa01,#f8bd19,#e44a00,#33bdda",
			          "bgColor": "#ffffff",
			          "borderAlpha": "20",
			          "canvasbgcolor": "#FFFFFF",
			          "showcanvasbg": "0",
			          "canvasbasecolor": "#FFFFFF",
			          "canvasBorderAlpha": "0",
			          "usePlotGradientColor": "0",
			          "plotBorderAlpha": "10",
			          "placevaluesInside": "1",
			          "rotatevalues": "1",
			          "valueFontColor": "#000000",
			          "showXAxisLine": "1",
			          "xAxisLineColor": "#999999",			          
			          "divlineColor": "#999999",
			          "divLineDashed": "1",
			          "showAlternateHGridColor": "0"           	             
					  //"exportEnabled":"1", //不支持中文
					  //"exportAtClientSide" : "1", 
		              //"theme": "fint"
		           },
		           "data": eval(_data)
		        }
		    }).render();
        }
		else if(_chartindex == 1){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}
			var data_array = _data.split("@");
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "xAxisname": _xAxisname,		             
		              "yAxisName": _yAxisName,
		              "formatNumber":"1",
		              "decimals":"2",
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "showValues":_showLabel,
			          "showpercentvalues": "0",
        			  "stack100percent": "0",
			          "bgColor": "#ffffff",
			          "borderAlpha": "20",	
			          "canvasbgcolor": "#FFFFFF",
			          "showcanvasbg": "0",
			          "canvasbasecolor": "#CCCCCC",
			          "canvasBorderAlpha": "0",
			          "usePlotGradientColor": "0",
			          "plotBorderAlpha": "10",
			          "placevaluesInside": "1",
			          "rotatevalues": "1",
			          "valueFontColor": "#000000",
			          "showXAxisLine": "1",
			          "xAxisLineColor": "#999999",
			          "divlineColor": "#999999",
			          "divLineDashed": "1",
			          "showAlternateHGridColor": "0"           	             
		           },
		           "categories": eval("("+data_array[0]+")"),
		           "dataset": eval("("+data_array[1]+")")
		        }
		    }).render();					
		}
		else if(_chartindex == 1.1){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}
			var data_array = _data.split("@");
			var charttype_array = _chartype.split("@");
		    var chart = new FusionCharts({
		        type: trim(charttype_array[0]),
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "xAxisname": _xAxisname,		             
		              "yAxisName": _yAxisName,
		              "formatNumber":"1",
		              "decimals":"2",
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "showValues":_showLabel,
			          "showpercentvalues": trim(charttype_array[1]),
        			  "stack100percent": trim(charttype_array[1]),
			          "bgColor": "#ffffff",
			          "borderAlpha": "20",	
			          "canvasbgcolor": "#FFFFFF",
			          "showcanvasbg": "0",
			          "canvasbasecolor": "#CCCCCC",
			          "canvasBorderAlpha": "0",
			          "usePlotGradientColor": "0",
			          "plotBorderAlpha": "10",
			          "placevaluesInside": "1",
			          "rotatevalues": "1",
			          "valueFontColor": "#000000",
			          "showXAxisLine": "1",
			          "xAxisLineColor": "#999999",
			          "divlineColor": "#999999",
			          "divLineDashed": "1",
			          "showAlternateHGridColor": "0"           	             
		           },
		           "categories": eval("("+data_array[0]+")"),
		           "dataset": eval("("+data_array[1]+")")
		        }
		    }).render();					
		}		
        else if(_chartindex == 2.1){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}				
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              //"xAxisname": _xAxisname,		             
		              //"yAxisName": _yAxisName,
		              "showValues":_showLabel,
		              "decimals":"1",
		              "formatNumber":"1",		              
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "bgColor": "#ffffff",
			          "showBorder": "0",
			          "use3DLighting": "0",
			          "showShadow": "0",
			          "enableSmartLabels": "0",
			          "startingAngle": "0",
			          "showPercentValues": "1",
			          "showPercentInTooltip": "0",
			          "toolTipColor": "#ffffff",
			          "toolTipBorderThickness": "0",
			          "toolTipBgColor": "#000000",
			          "toolTipBgAlpha": "80",
			          "toolTipBorderRadius": "2",
			          "toolTipPadding": "5",
			          "showHoverEffect": "1",
			          "showLegend": "1",
			          "legendBgColor": "#ffffff",
			          "legendBorderAlpha": "0",
			          "legendShadow": "0",
			          "legendItemFontSize": "10",
			          "legendItemFontColor": "#666666",
			          "useDataPlotColorForLabels": "1"			          
		           },
		           "data": eval(_data)
		        }
		    }).render();
        }
        else if(_chartindex == 2.2){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}				
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "showValues":_showLabel,
		              "decimals":"1",
		              "formatNumber":"1",	
		              "captionFontSize": "14",
			          "subcaptionFontBold": "0",			          
			          "subcaptionFontSize": "10",
			          "valueFontSize" : "6",
			          "baseFontColor": "#333333",
			          "baseFont": "Helvetica Neue,Arial",
			          "basefontsize": "9",
			          "subcaptionFontBold": "0",
			          "bgColor": "#ffffff",
			          "canvasBgColor": "#ffffff",
			          "showBorder": "0",
			          "showShadow": "0",
			          "showCanvasBorder": "0",
			          "pieFillAlpha": "60",
			          "pieBorderThickness": "2",
			          "hoverFillColor": "#cccccc",
			          "pieBorderColor": "#ffffff",
			          "useHoverColor": "1",
			          "showValuesInTooltip": "1",
			          "showPercentInTooltip": "0",
			          "plotTooltext": "$label, $value, $percentValue"	          
		           },
		           "category": eval(_data)
		        }
		    }).render();
        }
        else if(_chartindex == 3){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}				
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "showValues":_showLabel,
		              "decimals":"1",
		              "formatNumber":"1",	
		              "captionFontSize": "14",
			          "subcaptionFontBold": "0",			          
			          "subcaptionFontSize": "10",
			          "valueFontSize" : "6",
			          "baseFontColor": "#333333",
			          "baseFont": "Helvetica Neue,Arial",
			          "basefontsize": "9",
			          "subcaptionFontBold": "0",
			          "showBorder": "0",
			          "bgcolor": "#ffffff",
			          "canvasBgColor": "#ffffff",
			          "showShadow": "0",
			          "showCanvasBorder": "0",
			          "usePlotGradientColor": "0",
			          "legendBorderAlpha": "0",
			          "legendShadow": "0",
			          "showAxisLines": "1",
			          "showYAxisLine": "1",        
			          "showAlternateHGridColor": "0",
			          "showAlternateVGridColor": "0",
			          "divlineThickness": "1",
			          "divLineDashed": "1",
			          "divLineDashLen": "1",
			          "divLineGapLen": "0",
			          "use3dlighting": "1",
			          "yAxisLineThickness": "1",
			          "yAxisLineColor": "#999999",
			          "vDivLineDashed":"1"          
		           },
		           "dataset": eval(_data)
		        }
		    }).render();
        } 
        else if(_chartindex == 4){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}
			var arr = _showLabel.split("@");			
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "showValues":trim(arr[0]),
		              "xAxisname": _xAxisname,		             
		              "yAxisName": _yAxisName,		              
		              "decimals":"1",
		              "formatNumber":"1",	
		              "captionFontSize": "14",
			          "subcaptionFontBold": "0",			          
			          "subcaptionFontSize": "10",
			          "valueFontSize" : "6",
        			  "plotFillAlpha": "50",
        			  "plotFillHoverColor": "#6baa01",
        			  "showPlotBorder": "0",
			          "baseFontColor": "#333333",
			          "baseFont": "Helvetica Neue,Arial",
			          "basefontsize": "9",
			          "showBorder": "0",
			          "bgcolor": "#ffffff",
			          "canvasBgColor": "#ffffff",
			          "showShadow": "0",
				      "plotTooltext": "$name $zvalue; $xvalue; $yvalue",
				      "drawQuadrant": trim(arr[1]),
				      "quadrantLineAlpha": "80",
				      "quadrantLineThickness": "3",
				      //"quadrantXVal": "50",
				      //"quadrantYVal": "15000",
				      //"quadrantLabelTL": "Low Price / High Sale",
				      //"quadrantLabelTR": "High Price / High Sale",
				      //"quadrantLabelBL": "Low Price / Low Sale",
				      //"quadrantLabelBR": "High Price / Low Sale",
				      "divlineAlpha": "100",
				      "divlineColor": "#999999",
				      "divlineThickness": "1",
				      "divLineDashed": "1",
				      "divLineDashLen": "1",
				      "divLineGapLen": "1",
				      "use3dlighting": "0",
				      "showplotborder": "0",
				      "showYAxisLine": "1",
				      "yAxisLineThickness": "1",
				      "yAxisLineColor": "#999999",
				      "showXAxisLine": "1",
				      "xAxisLineThickness": "1",
				      "xAxisLineColor": "#999999",
				      "showAlternateHGridColor": "0",
				      "showAlternateVGridColor": "0",
				      "vDivLineDashed":"1" 			          		          			          			         
		           },
		           "dataset": eval(_data)
		        }
		    }).render();
        } 
		else if(_chartindex == 5){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}
			var data_array = _data.split("@");
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              //"xAxisname": _xAxisname,		             
		              //"yAxisName": _yAxisName,
		              "formatNumber":"1",
		              "decimals":"2",
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "showValues":_showLabel,
			          "bgColor": "#ffffff",
				      "radarfillcolor": "#ffffff",
				      "showBorder": "0",
				      "showShadow": "0",
				      "showCanvasBorder": "0",
				      "legendBorderAlpha": "0",
				      "legendShadow": "0",
				      "divLineAlpha": "10",
				      "legendBgAlpha" : "100",
				      "usePlotGradientColor": "0"        	             
		           },
		           "categories": eval("("+data_array[0]+")"),
		           "dataset": eval("("+data_array[1]+")")
		        }
		    }).render();					
		}
		else if(_chartindex == 6){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}
			var data_array = _data.split("@");
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  {
		           "chart": {
		              "caption": _Caption,
		              "subCaption": _subCaption,   	              
		              "xAxisname": _xAxisname,		             
		              "yAxisName": _yAxisName,
		              "formatNumber":"1",
		              "decimals":"2",
			          "subcaptionFontBold": "0",
			          "subcaptionFontSize": "10",
			          "captionFontSize": "14",
			          "valueFontSize" : "6",
			          "bgColor": "#ffffff",
			          "borderAlpha": "20",	
			          "canvasbgcolor": "#FFFFFF",
			          "showcanvasbg": "0",
			          "canvasbasecolor": "#CCCCCC",
			          "canvasBorderAlpha": "0",
        	          "canvasBgColor": "#ffffff",
				      "canvasBorderAlpha": "0",
				      "divlineAlpha": "100",
				      "divlineColor": "#999999",
				      "divlineThickness": "1",
				      "divLineDashed": "1",
				      "divLineDashLen": "1",
				      "divLineGapLen": "1",
				      "usePlotGradientColor": "0",
				      "showplotborder": "0",
				      "showXAxisLine": "1",
				      "xAxisLineThickness": "1",
				      "xAxisLineColor": "#999999",
				      "showAlternateHGridColor": "0",
				      "showAlternateVGridColor": "0",
				      "legendBgAlpha": "0",
				      "legendBorderAlpha": "0",
				      "legendShadow": "0",
				      "legendItemFontSize": "10",
				      "plotFillAlpha": "60",
				      "legendItemFontColor": "#666666"  
		           },
		           "categories": eval("("+trim(data_array[0])+")"),
		           "dataset": eval("("+trim(data_array[1])+")")
		        }
		    }).render();					
		}		
	    	    	   
   /***************************
     * ## 该页面所有函数
     * 	 @@test: 获取源数据
   ****************************/
	//function test(){alert(barchart.getChartData("csv"));}
   // Ext.getCmp('barchartgrid_summit').on('click',test);  
	
	
	});
}