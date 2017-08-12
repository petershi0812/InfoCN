package com.servlet;
import java.io.IOException;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

public class GetActiveAccount extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	@SuppressWarnings("unchecked")
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");		
		ServletContext application = getServletConfig().getServletContext();
		
		ArrayList<String> allUser = (ArrayList<String>)application.getAttribute("allUser");
		List<String> dedupallUser  = new ArrayList<String>(new HashSet<String>(allUser));
				
		Iterator<String> iter = dedupallUser.iterator();
		int c = 0;
	    while(iter.hasNext()) { 
	        String user = iter.next();
	    	if(user != null){ 
	        	System.out.println("бя" + user + "бя&nbsp;&nbsp;&nbsp;");  
	        	c = c + 1;
	        }
	    }
		response.getWriter().write(""+c+"");	
	}
}
