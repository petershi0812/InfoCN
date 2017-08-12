function renderMap(_province,_data,_range_max,_range_min,_maptitle,_subjectid){	
	require.config({
        paths: {
            echarts: '../../JS/echarts/build/dist'
        }
    });      
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            // ����׼���õ�dom����ʼ��echartsͼ��
            var myChart = ec.init(document.getElementById('mapContainer'));            		
			option = {
			    tooltip : {
			        trigger: 'item',
			        formatter: '{b}:{c}'
			    },	
			    dataRange: {
			        orient: 'horizontal',
			        x: 'left',
			        min: _range_min, //0
			        max: _range_max,//1000,
			        color:['#3c78d8','#c9daf8'],
			        text:['��','��'],           // �ı���Ĭ��Ϊ��ֵ�ı�
			        splitNumber:0,
			        calculable : true,
			        textStyle:{
			            color:'#000000'
			        }
			    },		    
			    series : [
			        {
			            //name: 'ȫ��344����Ҫ���У��أ���ͼ',
			            type: 'map',
			            mapType: _province,//'����',
			            roam: true,
			            selectedMode : 'single',
				        itemStyle:{
				              normal:{
				                label:{show:true,textStyle:{color:'#000000',fontSize:8}},
				                borderColor:'rgba(123,149,237,1)',
				                borderWidth:0.5,
				                areaStyle:{
				                  color: '#cfe2f3'
				                }                				
				              },
				            emphasis:{label:{show:true}}
				        },
			            mapLocation: {
			                x: 'left',
			                y: 'top'
			            },			        
			            data:_data/*[
				            {name: '�γ���',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '��ͨ��',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '��Ǩ��',value: Math.round(Math.random()*1000)},
				            {name: '���Ƹ���',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '�Ͼ���',value: Math.round(Math.random()*1000)},
				            {name: '̩����',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '������',value: Math.round(Math.random()*1000)},
				            {name: '����',value: Math.round(Math.random()*1000)}		            		            
			            ]*/
			        }
			    ]
			};			
            myChart.setOption(option);
                        
			var ecConfig = require('echarts/config');
			myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
			    var selected = param.selected;
			    var city = "";
			    for (var p in selected) {
			        if (selected[p]) {
			            city = p;
			        }
			    }
			    document.getElementById('iframe_grid').innerHTML = "";
			    document.getElementById('iframe_grid').innerHTML = "<iframe name = 'iframe_contents' frameborder='no' style='width:100%;height:100%' src='city_grid/map_grid.jsp?flag=2&subjectid="+_subjectid+"&maptitle="+encodeURI(encodeURI(_maptitle))+"&city="+encodeURI(encodeURI(city))+"&"+Date.parse(new Date())+"' scrolling='no'></iframe>";			    
			});				
			
        }
    );	
}