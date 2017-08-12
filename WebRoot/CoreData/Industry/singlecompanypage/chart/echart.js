require.config({
    paths: {
        echarts: '../JS/echarts/build/dist'
    }
});
function rendepieECharts(echartid,dist){	        
    require(
        [
            'echarts',
            'echarts/chart/pie'            
        ],
        function (ec) {
            //var myChart = ec.init(document.getElementById(echartid));             
			option = {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },			
			    series : [
			        {
			            name:'指标',
			            type:'pie',
			            radius : '65%',
			            data:[
			                {value:dist['peichart'][1], name:'营业收入(千元)'}
			            ]
			        }
			    ]
			};                      		
            // 为echarts对象加载数据 
            ec.init(document.getElementById(echartid)).setOption(option); 
        }
    );	
}

function renderradarECharts(echartid,dist){ 
	var arr =[]
	for(var i = 0 ; i<dist['industryavgindicators'].split('#').length;i++){
		arr.push(dist['industryavgindicators'].split('#')[i]);
	}
	
    require(
        [
            'echarts',
            'echarts/chart/radar'            
        ],
        function (ec) {            
			option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        orient : 'vertical',
			        x : 'right',
			        y : 'bottom',
			        data:['该公司','行业平均值']
			    },
			    polar : [
			       {
			           indicator : [
			               { text: '从业人数'},
			               { text: '工业总产值'},
			               { text: '利润总额'},
			               { text: '营业利润'},
			               { text: '营业成本'},
			               { text: '营业收入'},            
			               { text: '所有者权益'},
			               { text: '资产总计'},
			               { text: '流动资产'}
			             
			            ]
			        }
			    ],
			    series : [
			        {
			            name: '',
			            type: 'radar',
			            radius : '70%',
			            data : [
			                {
			                    value : dist['radarchart'],
			                    name : '该公司'
			                },
			                 {
			                    value : arr, //[309,  196754 , 12361, 13876, 167423, 194632,101947,124671,73638],
			                    name : '行业平均值'
			                }
			            ]
			        }
			    ]
			};
            // 为echarts对象加载数据 
            ec.init(document.getElementById(echartid)).setOption(option); 
        }
    );	
}

function rendePiePPECharts(echartid,dist,poi){
	var vv = dist['companypiechart'];
	var arr =[];
	if(vv.length == 0)
		return ''
	else{
		var ll_arr = vv.split("|")[poi].split('@');
		for(var i = 0 ; i<ll_arr.length;i++){
			arr.push(eval("({value:"+ll_arr[i].split('#')[1]+", name:'"+ll_arr[i].split('#')[0]+"'})"));		
		}			
	}
    require(
        [
            'echarts',
            'echarts/chart/pie'            
        ],
        function (ec) {             
			option = {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },	
			    toolbox: {
			        show : true,
			        feature : {
			            dataView : {show: true, readOnly: false},
			            saveAsImage : {show: true}
			        }
			    },				    
			    series : [
			        {
			            name:'指标',
			            type:'pie',
			            radius : '55%',
			            data : arr
			        }
			    ]
			};                      		
            // 为echarts对象加载数据 
            ec.init(document.getElementById(echartid)).setOption(option); 
        }
    );	
}


function rendeBarPPECharts(echartid,dist,poi){
	var vv = dist['companyfinanceindicators']

    require(
        [
            'echarts',
            'echarts/chart/bar'            
        ],
        function (ec) {             
			option = {
			    tooltip : {
			      formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            dataView : {show: true, readOnly: false},
			            saveAsImage : {show: true}
			        }
			    },			  
			    yAxis : [
			        {
			        	show : true,
			        	axisLabel : {
			        		interval : 0
							},
			            type : 'category',
			            data : vv[poi][1]
			        }
			    ],
			    xAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:vv[poi][0],
			            type:'bar',
			            radius : '55%',
			            data:vv[poi][2]
			        }
			    ]
			};                    		
            // 为echarts对象加载数据 
            ec.init(document.getElementById(echartid)).setOption(option); 
        }
    );	
}