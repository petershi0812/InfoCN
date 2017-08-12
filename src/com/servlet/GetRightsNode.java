package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.rights.RightsDao;

public class GetRightsNode extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");	
		
		String treeid = request.getParameter("treeid");
		String userid = request.getParameter("userid");
		RightsDao RD = new RightsDao();		
		if(!RD.IsExistsRights(userid,treeid)){
			response.getWriter().write("error");
		}
		else if(request.getSession().getAttribute("username") == null){
			response.getWriter().write("redirect");
		}		
		else{
			String tempResponse = RD.GetRightsNode(treeid,userid);
			//System.out.println("-->" + tempResponse);
			response.getWriter().write(tempResponse);
		}
	}

}
