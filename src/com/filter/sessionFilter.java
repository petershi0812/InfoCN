package com.filter;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.http.*;

import com.dao.UserDao;
import com.util.util;


public class sessionFilter implements Filter{
    public void doFilter(ServletRequest request, ServletResponse response,FilterChain chain) throws IOException, ServletException {    	
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        HttpSession session = httpRequest.getSession();     
        String currentDate = new util().getCurrentDate();
        util ut = new util();
        Integer flag = 0;
        // ��½url
        String loginUrl = httpRequest.getContextPath() + "/portals.jsp"; 
        String loginPath = httpRequest.getScheme()+"://"+httpRequest.getServerName()+":"+httpRequest.getServerPort()+loginUrl;                      
        
        if (session.getAttribute("user")==null || session.getAttribute("username") == null) {
        	flag = 1;
        	 //�ж��Ƿ�Ϊajax����
            if (httpRequest.getHeader("x-requested-with") != null && httpRequest.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
                httpResponse.addHeader("sessionstatus", "timeOut");
                httpResponse.addHeader("loginPath", loginPath);
                chain.doFilter(request, response);// �����٣�������������
            }
            else{
	        	String str = "<script language='javascript'>window.top.location.href='"+ loginPath + "';</script>";
	        	response.setContentType("text/html;charset=UTF-8");// �����������
		        try {
		            PrintWriter writer = response.getWriter();
		            writer.write(str);
		            writer.flush();
		            writer.close();
		        } catch (Exception e) {
		            e.printStackTrace();
		        }  
            }
        }
        else if(flag == 0){
            String opendate = (String)session.getAttribute("opendate");
            String userid = (String)session.getAttribute("userid");
            String availabletime = (String)session.getAttribute("availabletime");        
            long startT=ut.fromDateStringToLong(opendate); //�����ͨ����
            long currentT = ut.fromDateStringToLong(ut.getCurrentDate()); //��ȡ��ǰfilter�ĺ���
            long ss=(currentT - startT)/(1000); //��������            
//            System.out.println("opentimeTs:" + startT);
//            System.out.println(session.getAttribute("username") + "open time:" + ut.getCurrentTs(startT));
//            System.out.println("current filtertime:" + currentT);
//            System.out.println(session.getAttribute("username") + "current time:" + ut.getCurrentTs(currentT));
//            System.out.println(session.getAttribute("username") + "available time:" + availabletime);        
//            System.out.println(session.getAttribute("username") + "interval time:" + ss);        	
        	if(Long.parseLong(availabletime) != 0 && ss > Long.parseLong(availabletime)){
	        	UserDao UD = new UserDao();
	        	UD.closeSoftware(0,Long.parseLong(availabletime),ut.getCurrentTs(currentT),(String)session.getAttribute("username"));
	        	UD.updateSoftwareInfo(opendate,Long.parseLong(availabletime),currentDate,0,userid);
	        	String str = "<script language='javascript'>alert('�˻���Ч���ѵ�!');  window.top.location.href='"+ loginPath + "';</script>";
	        	response.setContentType("text/html;charset=UTF-8");// �����������
		        try {
		            PrintWriter writer = response.getWriter();
		            writer.write(str);
		            writer.flush();
		            writer.close();
		        } catch (Exception e) {
		            e.printStackTrace();
		        }
        	}
            else {
                chain.doFilter(request, response);
            }        	
        }
    }
	public void destroy() {}
	public void init(FilterConfig arg0) throws ServletException {}
}
