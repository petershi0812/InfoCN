package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetAllDiseaseMOHGridstorePage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
					  		
	  	String province_city=request.getParameter("sql");
	  	String year_id=request.getParameter("yearid");	  	
	  	GridstoreAction AGP = new GridstoreAction(); 	  	
	  	String result = AGP.AllGridstorePage_for_MOHOnlyDisease(province_city,year_id); 
		response.getWriter().write(result);		
	}

}
