package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.cdatacombination.CDCombination;

public class GetAdvKWSearchCombinationData extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");		
		String username = (String)request.getSession().getAttribute("username");	
		String textvalue = request.getParameter("findstr");
		CDCombination gcg = new CDCombination(); 
		String result = "";
		if(textvalue.equals("Ыљга") || textvalue.toLowerCase().equals("all")){	
			result = gcg.GetCombinationGridData(username);
		}
		else{
			result = gcg.GetAdvKWSearchCombinationData(username,textvalue);
		}
		response.getWriter().write("("+result+")");	
	}

}
