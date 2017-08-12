function show_Chart(obj){		
    require.config({
        paths: {
            echarts: '../JS/echarts/build/dist'
        }
    });	       
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        
        function (ec) {	               	                
			var dataStyle = { 
			    normal: {
			        label : {
			            show: true,
			            position: 'insideLeft',
			            formatter: '{c}%',
			            textStyle:{fontSize:12}
			        }
			    }
			};
			//Chart1
			option1 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: obj.subject + '整体发展状况分析',
			    	subtext: '主营业务收入角度',
			    	x: 'center',
			    	y: 35
			    },
			    legend: {
			        y: 20,
			        x: 'right',
			        itemGap : 20,
			        data:['Q1', 'Q2', 'Q3', 'Q4']
			    },
			    grid: {
			        y: 80,
			        borderWidth:0
			        
			    },
			    toolbox: {
			        show : true,
			        orient: 'vertical',
			        x: 'right',
			        y: 'center',
			        feature : {
			            magicType : {show: true, type: ['stack', 'tiled']}
			        }
			    },
			    xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},			            
			            data : eval(obj.items[0].year)
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            show : false,
			            //axisLabel:{show:false},
			            splitLine:{show:false}
			        }
			    ],
			    series : [
			        {
			            name:'Q1',
			            type:'bar',
			            //itemStyle : { normal: {label : {show: true, position: 'insideTop'}}},
			            data:eval(obj.items[0].quarters.Q1)
			        },
			        {
			            name:'Q2',
			            type:'bar',
			            //stack: '广告',
			            data:eval(obj.items[0].quarters.Q2)
			        },
			        {
			            name:'Q3',
			            type:'bar',
			            data:eval(obj.items[0].quarters.Q3)
			        },
			        {
			            name:'Q4',
			            type:'bar',
			            data:eval(obj.items[0].quarters.Q4)
			        }			        
			    ]
			};
 			//Chart2
			option2 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {       
			            type : 'shadow'        
			        }
			    },
			    title : {
			    	text: obj.subject + '赢利能力分析',
			    	subtext: '销售利润角度',
			    	x: 'center',
			    	y: 35
			    },
			    legend: {
			        y: 20,
			        x: 'right',
			        itemGap : 20,
			        data:['Q1', 'Q2', 'Q3', 'Q4']
			    },
			    grid: {
			        y: 80,
			        borderWidth:0
			        
			    },
			    toolbox: {
			        show : true,
			        orient: 'vertical',
			        x: 'right',
			        y: 'center',
			        feature : {
			            magicType : {show: true, type: ['stack', 'tiled']}
			        }
			    },			    
			    xAxis : [
			        {
			            type : 'value',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: false}
			        }
			    ],
			    yAxis : [
			        {
			            type : 'category',
			            splitLine: {show: false},
			            data : eval(obj.items[1].year)
			        }
			    ],
			    series : [
			        {
			            name:'Q1',
			            type:'bar',
			            stack: '总量',
			            itemStyle : dataStyle,
			            data:eval(obj.items[1].quarters.Q1)
			        },
			        {
			            name:'Q2',
			            type:'bar',
			            stack: '总量',
			            itemStyle : dataStyle,
			            data:eval(obj.items[1].quarters.Q2)
			        },
			        {
			            name:'Q3',
			            type:'bar',
			            stack: '总量',
			            itemStyle : dataStyle,
			            data:eval(obj.items[1].quarters.Q3)
			        },
			        {
			            name:'Q4',
			            type:'bar',
			            stack: '总量',
			            itemStyle : dataStyle,
			            data:eval(obj.items[1].quarters.Q4)
			        }		        
			    ]
			};					

            var myChart1 = ec.init(document.getElementById('zyywsr_lj'));
            var myChart2 = ec.init(document.getElementById('xslrl_lj'));
            myChart1.setOption(option1); 
            myChart2.setOption(option2); 
        }
    );
}