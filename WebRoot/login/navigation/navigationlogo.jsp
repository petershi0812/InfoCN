<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset= UTF-8" /> 
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/default.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<article class="htmleaf-container"> 
		<!-- <div class="container"> -->
			<div class="content" style="width:650px;height:250px;overflow:hidden;">
				<div id="slider">
					<a href="#"><img src="img/banner11.jpg"/></a>
					<a href="#"><img src="img/banner12.jpg"/></a>
					<a href="#"><img src="img/banner13.jpg"/></a>
				</div>
			</div>
		<!-- </div> -->
	</article>
	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="js/vmc.slider.full.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#slider').vmcSlider({
				width: 650,
				height: 250,
				gridCol: 10,
				gridRow: 5,
				gridVertical: 20,
				gridHorizontal: 10,
				autoPlay: true,
				ascending: true, 
				effects: [
					'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
					'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
					'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
				],
				ie6Tidy: false,
				random: false,
				duration: 2000,
				speed: 900
			});
		});
	</script>
</body>
</html>