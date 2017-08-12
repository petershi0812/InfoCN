package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.hppush.hppush;

public class AjaxDetailedIndustryPush extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
	  	hppush hp = new hppush();
	  	String arrrightspk[] = request.getParameter("rightspk").split("\\|");
	  	String result = hp.ajaxdetailedindustryinfo(arrrightspk[0],arrrightspk[1].substring(1,5)); 
		response.getWriter().write(result);		
	}
}
