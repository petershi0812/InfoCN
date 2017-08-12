package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import com.chart.Create_DiseaseMorbidity;

public class GetDiseaseMorbidityMap extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
	  	String sql = URLDecoder.decode(request.getParameter("sql"),"UTF-8");
		if(!sql.replace(" ","").equals("")){
			sql = sql.replaceAll("\\$", " ");
		}
		Create_DiseaseMorbidity ce = new Create_DiseaseMorbidity();   	
	  	String result = ce.Create_DiseaseMorbidity_City(sql);    
		response.getWriter().write(result);	  			
	}

}
