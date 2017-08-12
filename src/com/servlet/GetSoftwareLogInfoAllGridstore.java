package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetSoftwareLogInfoAllGridstore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String sql = "select c.Account,x.logintime,x.logouttime,datediff(SECOND ,x.logintime,x.logouttime) as INTEVAL_TOTALSECOND,CAST(datediff(SECOND ,x.logintime,x.logouttime) / 60.0 AS DECIMAL(24,2)) as INTEVAL_MINUTE,CAST(datediff(SECOND ,x.logintime,x.logouttime) / 3600.0 AS DECIMAL(24,4)) as INTEVAL_HOUR, c.Company,c.Telphone,c.email,c.CompanyAddress,1 as flag from (select a.account_id,a.logintime,b.logouttime,ROW_NUMBER() OVER(partition by a.account_id,logintime order by logouttime) as rk from Sys_LoginInfo as a join Sys_LogoutInfo as b on a.account_id = b.account_id where b.logouttime > a.logintime) as x join Sys_Account as c on x.account_id = c.ID where rk = 1 order by logintime desc";
	    int start = Integer.parseInt(request.getParameter("start").toString());
	    int limit = Integer.parseInt(request.getParameter("limit").toString());		
		GridstoreAction AGP = new GridstoreAction(); 
		String result = AGP.AllBasicGridstorePage(sql,start,limit);
		response.getWriter().write(result);	
	}
	
}
