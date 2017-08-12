package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class SaveMapRuleIdRights extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String accountid = request.getParameter("accountid");
		String rulerights = request.getParameter("rulerights");
		String yearid = request.getParameter("year_id");
		RightsDao rd = new RightsDao();
		rd.SaveMapRuleIdRights(accountid,yearid,rulerights);
		response.getWriter().write("success");	
	}

}
