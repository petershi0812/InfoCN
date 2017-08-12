package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetCopyAllGridstore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String sql = "SELECT B.Account_Id,A.Account,A.Company,A.Department,A.Post,B.CopyDate,B.CopyTreeName,B.CopyPage,B.CopyButton,B.CopyRecords FROM Sys_Account AS A JOIN Sys_CopyRecords AS B ON A.ID = B.Account_Id";
	    int start = Integer.parseInt(request.getParameter("start").toString());
	    int limit = Integer.parseInt(request.getParameter("limit").toString());		
		GridstoreAction AGP = new GridstoreAction(); 
		String result = AGP.AllBasicGridstorePage(sql,start,limit);
		//System.out.println(result);
		response.getWriter().write(result);	
	}
	
}
