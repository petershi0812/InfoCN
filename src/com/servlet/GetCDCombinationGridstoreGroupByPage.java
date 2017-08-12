package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetCDCombinationGridstoreGroupByPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");	
		//String username = (String)request.getSession().getAttribute("username");
	  	String sql=request.getParameter("sql");
	  	String dbname=request.getParameter("dbname");		
		int start = Integer.parseInt(request.getParameter("start").toString());
		int limit = Integer.parseInt(request.getParameter("limit").toString());
	  	GridstoreAction AGP = new GridstoreAction(); 		
	  	String result = AGP.AllGridstoreGroupByPage_for_CDCombination(sql,dbname,start,limit);
		response.getWriter().write(result);			
	}
}
