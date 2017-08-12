package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetSoftwareLoginInfoAllGridstore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String sql = "select c.Account,a.logintime,c.Company,c.Telphone,c.email,c.CompanyAddress,1 as flag from Sys_LoginInfo as a join Sys_Account as c on a.account_id = c.ID order by logintime desc";
	    int start = Integer.parseInt(request.getParameter("start").toString());
	    int limit = Integer.parseInt(request.getParameter("limit").toString());		
		GridstoreAction AGP = new GridstoreAction(); 
		String result = AGP.AllBasicGridstorePage(sql,start,limit);
		response.getWriter().write(result);	
	}
	
}
