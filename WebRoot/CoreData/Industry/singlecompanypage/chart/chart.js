   /***************************
     * ## 该页面所有函数
     * 	 @@renderCharts: 
     * 		$$: _chartindex=2.1 针对单维饼图，圆环图
   ****************************/
function renderCharts(_renderAt,_chartype,_chartindex) {
	FusionCharts.ready(function () {
        var chartWidth = '100%',chartHeight = '100%';        		
        if(_chartindex == 2.1){
			if(FusionCharts("chart")!= undefined){
			   FusionCharts("chart").dispose();
			}				
		    var chart = new FusionCharts({
		        type: _chartype,
		        renderAt: _renderAt,
		        width: chartWidth,
		        height: chartHeight,
		        dataFormat: "json",
		        dataSource:  
					{
					    "chart": {
					        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
					        "bgColor": "#ffffff",
					        "showBorder": "0",
					        "use3DLighting": "0",
					        "showShadow": "0",
					        "enableSmartLabels": "0",
					        "startingAngle": "0",
					        "showPercentValues": "1",
					        "showPercentInTooltip": "0",
					        "decimals": "1",
					        "captionFontSize": "14",
					        "subcaptionFontSize": "14",
					        "subcaptionFontBold": "0",
					        "toolTipColor": "#ffffff",
					        "toolTipBorderThickness": "0",
					        "toolTipBgColor": "#000000",
					        "toolTipBgAlpha": "80",
					        "toolTipBorderRadius": "2",
					        "toolTipPadding": "5",
					        "showHoverEffect": "1",
					        "showLegend": "0",
					        "legendBgColor": "#ffffff",
					        "legendBorderAlpha": "0",
					        "legendShadow": "0",
					        "legendItemFontSize": "10",
					        "legendItemFontColor": "#666666",
					        "useDataPlotColorForLabels": "1"
					    },
					    "data": [
					        {
					            "label": "营业收入",
					            "value": "98.1%"
					        },
					        {
					            "label": "营业利润",
					            "value": "1.9%"
					        }
					    ]
					}		        	

		    }).render();
        }	
	});
}