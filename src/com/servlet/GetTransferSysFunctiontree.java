package com.servlet;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.tree.Csysfunctiontree;


public class GetTransferSysFunctiontree extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		Csysfunctiontree node=new Csysfunctiontree(); 
		String tempResponse=""; 
		tempResponse=node.getResultByTransferRootId("data_a0");  
		response.getWriter().write("["+tempResponse+"]");
	}

}
