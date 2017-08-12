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
        int scode=ne.nextInt(9999-1000+1)+1000;//Ϊ���������ֵ1000-9999
		request.getSession().setAttribute("forgetpasswordemailcode", String.valueOf(scode));  //������
		String smtp = "smtp.infocn.com.cn";// smtp������
		String from = "peter.shi@infocn.com.cn";// �ʼ���ʾ����
		String username = "peter.shi@infocn.com.cn";// ��������ʵ���˻���
		String password = "Sht848610";// ����������		
		String to = email;// �ռ��˵��ʼ���ַ����������ʵ��ַ
		String copyto = "";// �������ʼ���ַ
		String subject = "�ʼ���������:" + scode;// �ʼ�����       
		String content = "";// �ʼ�����   		
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
