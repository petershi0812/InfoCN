package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.mail.Mail;
import java.util.Random;
import com.dao.UserDao;

public class GetForgetPasswordEmailValidation extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String email = request.getParameter("email").trim().toLowerCase();
        Random ne=new Random();
        int scode=ne.nextInt(9999-1000+1)+1000;//为变量赋随机值1000-9999
		request.getSession().setAttribute("forgetpasswordemailcode", String.valueOf(scode));  //邀请码
		String smtp = "smtp.infocn.com.cn";// smtp服务器
		String from = "peter.shi@infocn.com.cn";// 邮件显示名称
		String username = "peter.shi@infocn.com.cn";// 发件人真实的账户名
		String password = "Sht848610";// 发件人密码		
		String to = email;// 收件人的邮件地址，必须是真实地址
		String copyto = "";// 抄送人邮件地址
		String subject = "邮件邀请码是:" + scode;// 邮件标题       
		String content = "";// 邮件内容   		
		UserDao service = new UserDao();
		if(!service.emailIsExist(email)){
			response.getWriter().write("error");
		}
		else{		
			boolean result = Mail.sendAndCc(smtp, from, to, copyto, subject, content, username, password);
			if(result) response.getWriter().write("success");
			else response.getWriter().write("failure");
		}		
	}
}
