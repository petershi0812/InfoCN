package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;
import com.encryption.MD5;
import com.entity.User;

public class CheckAccount extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {			
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		MD5 md5 = new MD5();
	  	String username=request.getParameter("username").trim();
	  	String password=md5.getMD5ofStr(request.getParameter("password").trim());
	  	String checkcode=request.getParameter("checkcode"); 
	  	String cookie=request.getParameter("cookie"); 
	  	String fpR=request.getParameter("fpR"); 	  		  
		String strCode = (String)request.getSession().getAttribute("randomcode");			
		UserDao service = new UserDao();
		if(username.equals("管理员")){
			if(!checkcode.equals(strCode)){
				response.getWriter().write("{'success': false,'msg':'验证码错误!','errorflag':'3'}");
			}
			else{
				User user = service.adminlogin(username,password);
				if(user == null){
					response.getWriter().write("{'success': false,'msg':'用户名或密码有误!请重新登录!','errorflag':'0'}");
				}
				else{					
					request.getSession().setAttribute("user", user);
					request.getSession().setAttribute("username", user.getUsername());
					request.getSession().setAttribute("availabletime", user.getAvailableTime());
					request.getSession().setAttribute("opendate", user.getOpenDate());	
					request.getSession().setAttribute("userid", user.getId());	
					//response.sendRedirect("HomePage/index.jsp");
					//request.getRequestDispatcher("HomePage/index.jsp").forward(request,response);
					request.getSession().setMaxInactiveInterval(30*60);
					response.getWriter().write("{'success': true}");								
				}
			}
		}
		else{		
			if(service.loginuniquelogin(username,fpR,cookie)){			
				User user = service.login(username,password);
				if(user == null){
					response.getWriter().write("{'success': false,'msg':'用户名或密码有误!请重新登录!','errorflag':'0'}");
				}
				else if(user.getIsopensoftware() != 1){
					response.getWriter().write("{'success': false,'msg':'系统没有开通，请联系管理员!','errorflag':'2'}");
				}
				else if(!checkcode.equals(strCode)){
					response.getWriter().write("{'success': false,'msg':'验证码错误!','errorflag':'3'}");
				}
				else{
					Cookie infocnUID = new Cookie("infocnUID",md5.getMD5ofStr(username));
					service.saveUserFPR(username,fpR);	 
					infocnUID.setMaxAge(60*60*24*10000);
					response.addCookie(infocnUID);
					service.saveUserCookie(username,md5.getMD5ofStr(username));
					request.getSession().setAttribute("user", user);
					request.getSession().setAttribute("username", user.getUsername());
					request.getSession().setAttribute("availabletime", user.getAvailableTime());
					request.getSession().setAttribute("opendate", user.getOpenDate());
					request.getSession().setAttribute("userid", user.getId());
					request.getSession().setMaxInactiveInterval(20*60);
					response.getWriter().write("{'success': true}");
				}
			}
			else if(service.userIsExist(username)){
				response.getWriter().write("{'success': false,'msg':'该用户名还没有注册!','errorflag':'4'}");
			}
			else{
				response.getWriter().write("{'success': false,'msg':'请使用注册系统的电脑及其浏览器登录登录!'}");
			}
		}
	}
}
