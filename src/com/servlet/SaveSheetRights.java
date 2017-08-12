package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class SaveSheetRights extends HttpServlet {
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
		String yearid = request.getParameter("yearid");
		String userid = request.getParameter("userid");
		String inityearrights = request.getParameter("inityearrights");
		String yearrights = request.getParameter("yearrights");		
		String sheetrights = request.getParameter("sheetrights");
		String provincerights = request.getParameter("provincerights");	
		String cityrights = request.getParameter("cityrights");	
		String districtrights = request.getParameter("districtrights");	
		//System.out.println(provincerights + '-' + cityrights + '-' + districtrights);	
		RightsDao RD = new RightsDao();	
		if(request.getSession().getAttribute("username") == null){
			response.getWriter().write("redirect");
		}
		else{
			RD.SaveSheetRights(userid,treeid,yearid,nodeid,sheetrights,inityearrights,yearrights,provincerights,cityrights,districtrights);
			//System.out.println("-->" + tempResponse);
			response.getWriter().write("success");
		}
	}
}
