package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class SaveSheetRightsOfInitYear extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");	
		
		String nodeid = request.getParameter("nodeid");
		String treeid = request.getParameter("treeid");
		String userid = request.getParameter("userid");
		String inityearrights = request.getParameter("inityearrights");
		RightsDao RD = new RightsDao();	
		if(request.getSession().getAttribute("username") == null){
			response.getWriter().write("redirect");
		}
		else{
			RD.SaveSheetRightsOfInitYear(userid,treeid,nodeid,inityearrights);
			response.getWriter().write("success");
		}
	}
}
