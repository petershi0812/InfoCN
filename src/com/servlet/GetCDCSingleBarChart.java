package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.chart.Create_Echarts;


public class GetCDCSingleBarChart extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
	  	String sql=request.getParameter("sql");
	  	String dbname=request.getParameter("dbname");  		  	
	  	String haxisname=request.getParameter("haxis");   
	   	String vaxisname=request.getParameter("vaxis");                
   		Create_Echarts ce = new Create_Echarts();
	  	String result = ce.createsinglebarcharts_for_cdc(sql,dbname,haxisname,vaxisname);
		response.getWriter().write(result);		   	
	}
}
