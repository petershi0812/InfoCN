package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;
import com.encryption.MD5;

public class ResetPassword extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {			
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		MD5 md5 = new MD5();
	  	String email=request.getParameter("forgetpasswordemail").trim().toLowerCase();
	  	String checkemailcode=request.getParameter("confirmvalidatecode").trim(); 	
	  	String password=md5.getMD5ofStr(request.getParameter("forgetpassword").trim());
	  	String emailcode = (String)request.getSession().getAttribute("forgetpasswordemailcode");	
	  	if(checkemailcode.equals(emailcode)){
		  	UserDao service = new UserDao();		  		
	  		service.resetPassword(email,password);		  				  		
	  		response.getWriter().write("{'success': true}");
	  	}
	  	else{
	  		response.getWriter().write("{'success': false,'msg':'” œ‰—˚«Î¬Î¥ÌŒÛ!','error':'1'}");
	  	}		
	}
}
