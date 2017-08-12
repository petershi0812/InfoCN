package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.cdatacombination.CDCombination;

public class GetCombinationData extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");		
		String username = (String)request.getSession().getAttribute("username");
		
		CDCombination gcg = new CDCombination(); 
		String result = gcg.GetCombinationGridData(username);
		//System.out.println(result);
		response.getWriter().write("("+result+")");	
	}

}
