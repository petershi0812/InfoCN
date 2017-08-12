package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetSuperAdmin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String Admin = (String)request.getSession().getAttribute("username");
		if(Admin.equals("管理员")){
			response.getWriter().write("[{xtype:'panel',title:'系统管理',containerScroll: true,autoScroll:true,border:false,iconCls:'viewport5',items:[Ext.getCmp('West_SM_Tree_One')]}]");
		}
		else{
			response.getWriter().write("");
		}
		
	}

}
