package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetAllGridstorePage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");	
	  	String sql=request.getParameter("sql");
		String username = (String)request.getSession().getAttribute("username");
		String arrrightspk[] = request.getParameter("rights").split("\\|");
		String dbname=request.getParameter("dbname"); 
	  	Integer numcolumnpoint=Integer.parseInt(request.getParameter("numcolumnpoint"));    	 	
		int start = Integer.parseInt(request.getParameter("start").toString());
		int limit = Integer.parseInt(request.getParameter("limit").toString());	
		GridstoreAction AGP = new GridstoreAction();
	  	String result = AGP.AllGridstorePage(sql,dbname,numcolumnpoint,start,limit,username,arrrightspk[0],arrrightspk[1]);
	  	//System.out.println(result);
		response.getWriter().write(result);		
	}
}
