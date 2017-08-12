package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import  com.grid.GridstoreAction;

public class GetMapGridstore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
	  	String params= URLDecoder.decode(request.getParameter("params"),"UTF-8");
	  	String flag=request.getParameter("flag");   	
	  	String subjectid=request.getParameter("subjectid");   	
	  	GridstoreAction AGP = new GridstoreAction(); 	
		String result = AGP.MapGridstore(flag,params,subjectid);
		//System.out.println(result);
		response.getWriter().write(result);	
		
	}

}
