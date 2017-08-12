package com.servlet;

import java.io.IOException;
import java.net.URLDecoder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.tree.Csysfunctiontree;

public class GetSysSearchingFunctiontree extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		Csysfunctiontree node=new Csysfunctiontree(); 
		String params = URLDecoder.decode(request.getParameter("params"),"UTF-8");
		String treeid = request.getParameter("treeid");			
		String username = (String)request.getSession().getAttribute("username");
		String tempResponse=""; 
		if(params.equals("Ыљга") || params.toLowerCase().equals("all")){				
			tempResponse=node.getResultByRootId("data_a0",username,treeid);
		}
		else{
			tempResponse=node.getResultSearchingByRootId(params,"data_a0",username,treeid);			 			
		}
		response.getWriter().write("["+tempResponse+"]");		
		//System.out.println(tempResponse);
		//response.getWriter().write("[{id:'data_a0',text:'',level:0,change:'',iconCls:'tree_level',leaf: true}]");
	}

}
