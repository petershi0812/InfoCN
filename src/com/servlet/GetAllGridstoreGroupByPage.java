package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetAllGridstoreGroupByPage extends HttpServlet {
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
		String username = (String)request.getSession().getAttribute("username");
		String arrrightspk[] = request.getParameter("rights").split("\\|");			
		int start = Integer.parseInt(request.getParameter("start").toString());
		int limit = Integer.parseInt(request.getParameter("limit").toString());
		//System.out.println(sql+'|'+dbname+'|'+numcolumnpoint+'|'+start+'|'+limit+'|'+username+'|'+arrrightspk[0]+'|'+arrrightspk[1]);
		GridstoreAction AGP = new GridstoreAction();
		String result = AGP.AllGridstoreGroupByPage(sql,dbname,start,limit,username,arrrightspk[0],arrrightspk[1]);
		response.getWriter().write(result);		
	}

}
