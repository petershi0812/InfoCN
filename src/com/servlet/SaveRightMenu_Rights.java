package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;

public class SaveRightMenu_Rights extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");			
		if(request.getSession().getAttribute("username") == null){
			response.getWriter().write("redirect");
		}
		else{
			UserDao UD = new UserDao();
			Integer userid = Integer.parseInt(request.getParameter("userid"));
			Integer rightmenu_rights = Integer.parseInt(request.getParameter("rightmenu_rights"));	
			UD.updateRightmenu_Rights(userid,rightmenu_rights);
			response.getWriter().write("success");
		}
	}

}
