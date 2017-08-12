package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetHopdepartdoclistGridStore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");	
	  	String params= request.getParameter("sql");
	  	String dbname= request.getParameter("dbname");
	  	GridstoreAction AGP = new GridstoreAction(); 	  	
	  	String result = AGP.AllGridstore_for_doclist(params,dbname);	 
		response.getWriter().write(result);	
	}
}
