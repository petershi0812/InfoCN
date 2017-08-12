package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.UserDao;
import com.util.util;
import com.mail.Mail;

public class SaveOpensw extends HttpServlet {
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
			String emailaddress = request.getParameter("email");	
			String accountname = request.getParameter("accountname");			
			String opendate = request.getParameter("opendate");
			Long availabletime = Long.parseLong(request.getParameter("availabletime"));
			Integer isopensoftware = Integer.parseInt(request.getParameter("IsOpSW"));
			if(isopensoftware.equals(1)){
				String currentDate = new util().getCurrentDate();
				UD.openSoftware(isopensoftware,availabletime,currentDate,userid);  //更新用户表
				UD.updateSoftwareInfo(currentDate,availabletime,"",isopensoftware,userid);  //更新用户导出复制权限信息表
				String emailcontents = "";
				if(availabletime == 0){
					if(opendate==null || opendate.equals("null")){
						util ut = new util();
						opendate = ut.getCurrentDate();
					}
					emailcontents = "用户名: " + accountname + "\r\n;   软件开启时间: " + opendate + "\r\n;   软件有效期: 无";
				}
				else{
					if(availabletime < 3600){
						emailcontents = "用户名: " + accountname + "\r\n;   软件开启时间: " + opendate + "\r\n;   软件有效期: " + availabletime + "秒";
					}
					else{
						emailcontents = "用户名: " + accountname + "\r\n;   软件开启时间: " + opendate + "\r\n;   软件有效期: " + availabletime/3600 + "小时";
					}
				}
				Mail.sendAndCc("smtp.infocn.com.cn", "peter.shi@infocn.com.cn", emailaddress, "", "欢迎使用InfoCN数据平台", emailcontents, "peter.shi@infocn.com.cn", "Sht848610");
				response.getWriter().write("success");				
			}else{
				String currentDate = new util().getCurrentDate();
				UD.closeSoftware(isopensoftware,availabletime,currentDate,accountname);
				UD.updateSoftwareInfo(opendate,availabletime,currentDate,isopensoftware,userid);
				response.getWriter().write("success");					
			}
		}
	}

}
