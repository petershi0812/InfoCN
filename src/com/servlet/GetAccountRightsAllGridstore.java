package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetAccountRightsAllGridstore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String sql = "select a.*,ISNULL(RightMenu_Rights,-999) as RightMenu_Rights,1 as flag from Sys_Account as a left join Sys_IndustryRightMenu_Rights as b on a.ID = b.Account_Id";	
		GridstoreAction AGP = new GridstoreAction(); 
		String result = AGP.AllBasicGridstore(sql);
		//System.out.println(result);
		response.getWriter().write(result);	
	}
}
