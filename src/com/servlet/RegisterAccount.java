package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;
import com.encryption.MD5;
import com.mail.Mail;

public class RegisterAccount extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {			
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		MD5 md5 = new MD5();
	  	String company=request.getParameter("company").trim();
	  	String companyaddress=request.getParameter("companyaddress").trim();
	  	String telphone=request.getParameter("telphone").trim();	  	
	  	String department=request.getParameter("department").trim();
	  	String post=request.getParameter("post").trim();
	  	String email=request.getParameter("email").trim().toLowerCase();
	  	String checkemailcode=request.getParameter("confirmpassword").trim(); 	  
	  	String account=request.getParameter("account").trim();
	  	String password=md5.getMD5ofStr(request.getParameter("password").trim());
	  	String fpR=request.getParameter("fpR").trim();
	  	String registercookie= md5.getMD5ofStr(account); //request.getParameter("md5").trim(); //成功的话，注册新的cook
	  	String cookie=request.getParameter("cookie").trim();  //验证cookie
	  	String emailcode = (String)request.getSession().getAttribute("emailcode");	
	  	if(checkemailcode.equals(emailcode)){
		  	UserDao service = new UserDao();
		  	String FG = service.registeruniquelogin(account,email,fpR,cookie);
		  	if(FG.equals("")){
				Cookie infocnUID = new Cookie("infocnUID",md5.getMD5ofStr(account));
				infocnUID.setMaxAge(60*60*24*10000);
				response.addCookie(infocnUID);		  		
		  		service.saveUser(account,password,company,companyaddress,telphone,department,post,email,fpR,registercookie);		  		
				Mail.sendAndCc("smtp.infocn.com.cn", "peter.shi@infocn.com.cn", "peter.shi@infocn.com.cn", "", "申请开通软件", "用户名: " + account + "; 邮件地址: " + email, "peter.shi@infocn.com.cn", "Sht848610");		  		
		  		response.getWriter().write("{'success': true}");
		  	}
		  	else{
		  		response.getWriter().write("{'success': false,'msg':'"+FG+"'}");
		  	}
	  	}
	  	else{
	  		response.getWriter().write("{'success': false,'msg':'邮箱邀请码错误!','error':'1'}");
	  	}		
	}
}
