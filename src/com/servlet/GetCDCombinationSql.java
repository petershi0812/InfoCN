package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.cdatacombination.CDCombination;

public class GetCDCombinationSql extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");			
	  	String dbname=request.getParameter("dbname") + "@"; 
	  	//System.out.println(dbname);
	  	String dataindex=request.getParameter("dataindex"); 
	  	String dimension = request.getParameter("dimension");
	  	String username = (String)request.getSession().getAttribute("username");	  	
	  	CDCombination cdc = new CDCombination();     	
	  	String sql = cdc.Return_CDCombinationSql(username,dbname,dataindex,dimension); 
	  	//System.out.println(sql);
		response.getWriter().write(sql);		  		
	}
}
