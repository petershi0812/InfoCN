function renderMap(_caption,_data,_range_max){	
	require.config({
        paths: {
            echarts: '../../../JS/echarts/build/dist'
        }
    });        
    require(
        [
            'echarts',
            'echarts/chart/map'            
        ],
        function (ec) {
            var myChart = ec.init(document.getElementById('mapContainer'));             
			option = {
			    backgroundColor: '#1b1b1b',
			    color: ['gold','aqua','lime'],
			    title : {
			        text: _caption,//'胃癌重点城市发病率',
			        subtext:'基于卫计委4000多家综合医院',
			        x:'center',
			        textStyle : {color: '#fff'}
			        //subtextStyle : {color : ''}
			    },
			    tooltip : {
			        trigger: 'item',
			        textStyle: { color:'#fff' },
			        formatter: '{b}'
			    },
			    dataRange: {
			        min : 0,
			        max : _range_max,	
			        calculable : true,
			        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
			        textStyle:{
			            color:'#fff'
			        }
			    },
			    series : [
			        {
			            name: '全国',
			            type: 'map',
			            roam: true,
			            hoverable: false,
			            mapType: 'china',
			            itemStyle:{
			                normal:{
			                	//label:{show:true,textStyle:{color:'#dfe9fa',fontSize:8}},
			                    borderColor:'rgba(100,149,237,1)',
			                    borderWidth:0.5,
			                    areaStyle:{
			                        color: '#1b1b1b'
			                    }                				
			                }
			                //emphasis:{label:{show:true}}
			            },
			            data:[],
			            geoCoord: {
							'上海市': [121.4648,31.2891],
							'乌鲁木齐市': [87.9236,43.5883],
							'兰州市': [103.5901,36.3043],
							'北京市': [116.4551,40.2539],
							'南京市': [118.8062,31.9208],
							'南宁市': [108.479,23.1152],
							'南昌市': [116.0046,28.6633],
							'合肥市': [117.29,32.0581],
							'呼和浩特市': [111.4124,40.4901],
							'哈尔滨市': [127.9688,45.368],
							'大连市': [122.2229,39.4409],
							'天津市': [117.4219,39.4189],
							'太原市': [112.3352,37.9413],
							'广州市': [113.5107,23.2196],
							'成都市': [103.9526,30.7617],
							'无锡市': [120.3442,31.5527],
							'昆明市': [102.9199,25.4663],
							'杭州市': [119.5313,29.8773],
							'武汉市': [114.3896,30.6628],
							'沈阳市': [123.1238,42.1216],
							'济南市': [117.1582,36.8701],
							'深圳市': [114.5435,22.5439],
							'石家庄市': [114.4995,38.1006],
							'福州市': [119.4543,25.9222],
							'苏州市': [120.6519,31.3989],
							'西宁市': [101.4038,36.8207],
							'西安市': [109.1162,34.2004],
							'贵阳市': [106.6992,26.7682],
							'郑州市': [113.4668,34.6234],
							'重庆市': [107.7539,30.1904],
							'银川市': [106.3586,38.1775],
							'长春市': [125.8154,44.2584],
							'长沙市': [113.0823,28.2568],
							'青岛市': [120.4651,36.3373]
			            }
			        },
			        {
			            type: 'map',
			            mapType: 'china',
			            data:[],
			            markPoint : {
			                symbol:'emptyCircle',
			                symbolSize : 5/*function (v){
			                    return v/100
			                }*/,
			                effect : {
			                    show: true,
			                    shadowBlur : 0
			                },
			                itemStyle:{
			                    normal:{
			                        label:{show:false}
			                    },
			                    emphasis: {
			                        label:{position:'top'}
			                    }
			                },
			                data : _data
			            }
			        }
			    ]
			};  			
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );	
}