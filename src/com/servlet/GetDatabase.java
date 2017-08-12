package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.configuration.Configuration;

public class GetDatabase extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		Configuration rc = new Configuration();
		String dbnameCn = request.getParameter("dbname");  
		String dbnameEn = rc.getPropertyFromFile("/getdatabasename.properties",dbnameCn);
		response.getWriter().write(dbnameEn);		
	}
}
