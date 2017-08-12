package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.tree.Csysfunctiontree;

public class GetAnnualHotIndustrySysFunctiontree extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");		
		Csysfunctiontree node=new Csysfunctiontree(); 
		String flag = request.getParameter("flag");
		String username = (String)request.getSession().getAttribute("username");
		String tempResponse="";
		/*0:主页的iconCls; 1:权限管理的iconCls*/
		if(flag.equals("0"))
			tempResponse=node.getResultByAnnualHotIndustryRootId("data_a0",username,"999");
		else if(flag.equals("1"))
			tempResponse=node.getResultByAnnualHotIndustryRootIdOfSysRights("data_a0");
		response.getWriter().write("["+tempResponse+"]");
		//System.out.println(tempResponse);		
	}

}
