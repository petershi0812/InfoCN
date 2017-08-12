package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ExportExcel extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {		
		response.setHeader("Content-Type","application/force-download");
		response.setHeader("Content-Type","application/vnd.ms-excel; charset=utf-8");
		response.setHeader("Content-Disposition","attachment;filename=output.xls");
		PrintWriter out = response.getWriter(); 
		out.print(request.getParameter("exportContent"));		
		out.flush(); 
		out.close(); 
	}

}
