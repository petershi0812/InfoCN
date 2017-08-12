package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class SaveTopNRights extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");			
		String username = request.getParameter("username");
		String topnrights = request.getParameter("topnrights");
		String treeid = request.getParameter("treeid");
		String leastparentnodeid = request.getParameter("leastparentnodeid").trim();
		RightsDao RD = new RightsDao();	
		if(request.getSession().getAttribute("username") == null){
			response.getWriter().write("redirect");
		}
		else if(RD.IsExistsYearInitRights(username)){
			response.getWriter().write("error");
		}
		else{
			int flag = RD.SaveTopNRights(username,treeid,topnrights,leastparentnodeid);
//			System.out.println(flag);
			if(flag>0)
				response.getWriter().write("success");
			else
				response.getWriter().write("failure");
		}		
	}
}
