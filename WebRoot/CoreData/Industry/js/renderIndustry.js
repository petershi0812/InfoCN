function show_Chart(obj){
    require.config({
        paths: {
            echarts: '../JS/echarts/build/dist'
        }
    });	       
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],        
        function (ec) {	               	                
			option1 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '主营业务收入及同比增速情况分析',
			    	x: 'center',
			    	y: 35
			    },
			    /*legend: {
			        y: 0,
			        x: 'bottom',
			        itemGap : 20,
			        data:['主营业务当月收入','主营业务累计收入同比增速']
			    },*/
			    grid: {
			        y: 80,
			        borderWidth:0			        
			    },
			    /*toolbox: {
			        show : true,
			        orient: 'vertical',
			        x: 'right',
			        y: 'center',
			        feature : {
			            magicType : {show: true, type: ['stack', 'tiled']}
			        }
			    },*/
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            //data : ['2015/2','2015/3','2015/4','2015/5','2015/6','2015/7','2015/8','2015/9','2015/10','2015/11','2015/12']
			            data : eval(obj.items[0].xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(M)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    },
				    {
				        type : 'value',
				        name : '增速(%)',
				        axisLabel : {
				            formatter: '{value}'
				        }
				    }
				],
				series : [				
				    {
				        name:'主营业务当月收入',
				        type:'bar',
				        //data:[396.00,613.00,816.00,1025.00,1258.00,1461.00,1651.00,1850.00,2062.00,2278.00,2499.00]
				        data:eval(obj.items[0].Series3)
				    },
				    {
				        name:'主营业务累计收入同比增速',
				        type:'line',
			            yAxisIndex: 1,
			            //data:[-8.27,-10.76,-12.97,-13.59,-13.00,-13.18,-13.88,-14.40,-14.55,-14.60,-14.80]
			            data:eval(obj.items[0].Series2)
				    }]
			};	
			option2 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '赢利能力情况分析',
			    	subtext: '利润总额累计同比增减额角度',
			    	x: 'center',
			    	y: 35
			    },
			    /*legend: {
			        y: 20,
			        x: 'bottom',
			        itemGap : 20,
			        data:['利润总额累计同比增减额']
			    },*/
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
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            //data : ['2015/2','2015/3','2015/4','2015/5','2015/6','2015/7','2015/8','2015/9','2015/10','2015/11','2015/12']
			            data : eval(obj.items[1].xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(M)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        name:'利润总额累计同比增减额',
				        type:'line',
				        //data:[396.00,613.00,816.00,1025.00,1258.00,1461.00,1651.00,1850.00,2062.00,2278.00,2499.00]
				        data:eval(obj.items[1].Series1_1)
				    }]
			};	
			option3 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '年度主营业务收入',
			    	x: 'center',
			    	y: 35
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
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            data : eval(obj.items[2].xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(B)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        name:'主营业务收入',
				        type:'bar',
				        itemStyle : { normal: {label : {show: true, position: 'top'}}},
				        data:eval(obj.items[2].Series4)
				    }]
			};	
			option4 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '年度营业利润',
			    	x: 'center',
			    	y: 35
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
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            data : eval(obj.items[2].xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(B)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        name:'营业利润',
				        type:'bar',
				        itemStyle : { normal: {label : {show: true, position: 'top'}}},
				        data:eval(obj.items[2].Series5)
				    }]
			};			
            var myChart1 = ec.init(document.getElementById('zyywsr_lj'));
            var myChart2 = ec.init(document.getElementById('qylrze_ljtbzje'));
            var myChart3 = ec.init(document.getElementById('qylrze_nd'));
            var myChart4 = ec.init(document.getElementById('yylr_nd'));
            myChart1.setOption(option1);                       
            myChart2.setOption(option2);
            myChart3.setOption(option3);
            myChart4.setOption(option4);
        }
    );	
}

//行业细分情况
function show_ThreeRankChart(obj){
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
			            position: 'right',
			            formatter: '{c}(B)',
			            textStyle:{fontSize:12,color:'black'}
			        }
			    }
			};        	
			option1 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '2015年top10行业主营业务收入排名',
			    	//subtext: '主营业务收入角度',
			    	x: 'center',
			    	y: 25
			    },
			    grid: {
			    	x: 200,
			        y: 80,
			        borderWidth:0			        
			    },
				xAxis : [
			        {
			            type : 'value',
			            position: 'buttom',
			            name : '(B)',
			            splitLine: {show: false},
			            axisLabel: {show: true}				            
			            
			        }			
				],
				yAxis : [
				    {
				        type : 'category',				        
				        data : eval(obj.yAxis1),				        			       
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        type:'bar',
				        name : '收入',
				        itemStyle : dataStyle,
				        data:eval(obj.Series1)
				    }]
			};	
			option2 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '2015年top10行业营业利润排名',
			    	x: 'center',
			    	y: 25
			    },
			    grid: {
			    	x: 200,
			        y: 80,
			        borderWidth:0			        
			    },
				xAxis : [
			        {
			            type : 'value',
			            position: 'buttom',
			            name : '(B)',
			            splitLine: {show: false},
			            axisLabel: {show: true}				            
			            
			        }			
				],
				yAxis : [
				    {
				        type : 'category',				        
				        data : eval(obj.yAxis2),				        			       
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        type:'bar',
				        name : '收入',
				        itemStyle : dataStyle,
				        data:eval(obj.Series2)
				    }]
			};			
            var myChart1 = ec.init(document.getElementById('zyywsr'));
            var myChart2 = ec.init(document.getElementById('yylr'));
            myChart1.setOption(option1);
            myChart2.setOption(option2);                       
        }
    );	
}

//行业总体情况
function show_RankChart(obj){
    require.config({
        paths: {
            echarts: '../JS/echarts/build/dist'
        }
    });	       
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line' 
        ],        
        function (ec) {	
			var dataStyle = { 
			    normal: {
			        label : {
			            show: true,
			            position: 'top',
			            formatter: '{c}(B)',
			            textStyle:{fontSize:12,color:'black'}
			        }
			    }
			};         	
			option1 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '年度主营业务收入',
			    	x: 'center',
			    	y: 35
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
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            data : eval(obj.xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(B)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        name:'主营业务收入',
				        type:'bar',
				        //itemStyle : { normal: {label : {show: true, position: 'top'}}},
				        itemStyle : dataStyle,
				        data:eval(obj.Series1)
				    }]
			};
			option2 = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    title : {
			    	text: '年度营业利润',
			    	x: 'center',
			    	y: 35
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
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
				xAxis : [
			        {
			            type : 'category',
			            position: 'buttom',
			            splitLine: {show: false},
			            axisLabel: {show: true},	
			            data : eval(obj.xAxis)
			        }			
				],
				yAxis : [
				    {
				        type : 'value',
				        name : '(B)',
				        axisLabel : {
				            formatter: '{value}'
				        },
				        splitLine:{show:false}
				    }
				],
				series : [				
				    {
				        name:'营业利润',
				        type:'bar',
				        itemStyle : dataStyle,
				        //itemStyle : { normal: {label : {show: true, position: 'top'}}},
				        data:eval(obj.Series2)
				    }]
			};			
            var myChart1 = ec.init(document.getElementById('zyywsr'));
            var myChart2 = ec.init(document.getElementById('yylr'));
            myChart1.setOption(option1);
            myChart2.setOption(option2);
        }
    );	
}