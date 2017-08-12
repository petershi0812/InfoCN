package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.grid.GridstoreAction;

public class GetSinglePPCompanyInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String company = request.getParameter("company");
		Integer year = Integer.parseInt(request.getParameter("year"));	
		
		GridstoreAction AGP = new GridstoreAction();
	  	String result = AGP.GetSinglePPCompanyInfo(year,company);
		response.getWriter().write(result);			
	}
}


