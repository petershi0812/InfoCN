<%@ page language="java" pageEncoding="utf-8"%>
<!doctype html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/osSlider.css" />
   
</head>
<body>
	<center>
	<div style='margin-top:60px'>
		<div class="slider" id = 'sld'>
			<script type="text/javascript">    
			    height = document.body.clientHeight;	    
			    width = document.body.clientWidth * 0.85; 
				document.getElementById('sld').style.height=height + "px";
				document.getElementById('sld').style.width=width + "px";									    
			</script>		
	        <ul class="slider-main">
	            <li>
	                <img id='img1' src="./images/1.jpg" alt="">
	            </li>
	            <li>
	                <img id='img2' src="./images/2.jpg" alt="">
	            </li>
	            <li>
	                <img id='img3' src="./images/3.jpg" alt="">
	            </li>
	            <li>
	                <img id='img4' src="./images/4.jpg" alt="">
	            </li>
	        </ul>        
	    </div>
	</div>
	</center>	
	
		
	<script>window.jQuery || document.write('<script src="js/jquery-2.1.1.min.js"><\/script>')</script>
	<script src="js/osSlider.js"></script>	
	<script type="text/javascript">
	    var slider = new osSlider({ //开始创建效果
	        pNode:'.slider', //容器的选择器 必填
	        cNode:'.slider-main li', //轮播体的选择器 必填
	        speed:3000, //速度 默认3000 可不填写
	        autoPlay:true //是否自动播放 默认true 可不填写
	    });						    
	</script>	
</body>
</html>