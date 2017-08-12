package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class SaveCDCExportActions extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String username = (String)request.getSession().getAttribute("username");
		String arrrightspk[] = request.getParameter("rights").split("\\|");	
		String exportbutton = request.getParameter("exportbutton");				
		String exportedrows = request.getParameter("exportedrows");	
		String sysfunStr = request.getParameter("sysfunid");
		RightsDao rd = new RightsDao(); 
		rd.SaveExportActions(username,arrrightspk[0].trim(),sysfunStr,exportbutton,exportedrows);
		response.getWriter().write("success");	
	}

}
