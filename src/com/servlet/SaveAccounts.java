package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;

public class SaveAccounts extends HttpServlet {
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
			String userid = request.getParameter("userid");
			Integer exportobs = Integer.parseInt(request.getParameter("exportobs"));
			Integer exportrows = Integer.parseInt(request.getParameter("exportrows"));
			Integer copyrows = Integer.parseInt(request.getParameter("copyrows"));	
			UD.updateUser(exportobs,exportrows,copyrows,userid);
			UD.updateECRightInfo(exportobs,exportrows,copyrows,userid);
			response.getWriter().write("success");
		}
	}

}
