package com.listener;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import com.dao.UserDao;

public class OnlineUserListener implements
		ServletContextListener,HttpSessionListener,HttpSessionAttributeListener{
	// 声明一个ServletContext对象
	private ServletContext application = null ;
	
	//ServletContext创建时调用该方法
	public void contextInitialized(ServletContextEvent sce) {
		ArrayList<String> allUser = new ArrayList<String>();
//		HashMap<String , Double> map = new HashMap<String , Double>();
		application = sce.getServletContext();
		application.setAttribute("allUser", allUser);
	}
	//ServletContext销毁时调用该方法
	public void contextDestroyed(ServletContextEvent sce) {		
	}

	//session销毁时调用该方法
	@SuppressWarnings("unchecked")
	public void sessionDestroyed(HttpSessionEvent se) {
		ArrayList<String> allUser = (ArrayList<String>) application.getAttribute("allUser");
		String user = (String)se.getSession().getAttribute("userid");
		if(user != null){
			UserDao UD = new UserDao();
			//删除该用户
			List<String> dedupallUser  = new ArrayList<String>(new HashSet<String>(allUser));
			dedupallUser.remove(user);
			String dt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
			System.out.println("invalidate username: " + user + ", time: " + dt);	    	    	    	 	    	   
			application.setAttribute("allUser", dedupallUser);
			UD.saveLogouttime(user,dt);
			/*Iterator<String> iter = dedupallUser.iterator();
		    while(iter.hasNext()) { 
		        String curr_user = iter.next();
		    	if(curr_user != null){ 
		        	System.out.println("after invalidate,current username size(): " + curr_user);
		        }
		    }*/				
		}
	}
	//session范围属性添加时调用
	@SuppressWarnings("unchecked")
	public void attributeAdded(HttpSessionBindingEvent se) {
		ArrayList<String> allUser = (ArrayList<String>) application.getAttribute("allUser");
		String user = (String)se.getSession().getAttribute("userid");		
		if(user != null && !allUser.contains(user)){
			UserDao UD = new UserDao();
			allUser.add(user);
			String dt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
			System.out.println("add username: " + user + ", time: " + dt);
			UD.saveLogintime(user,dt);
			/*(List<String> dedupallUser  = new ArrayList<String>(new HashSet<String>(allUser));				
			Iterator<String> iter = dedupallUser.iterator();
		    while(iter.hasNext()) { 
		        String curr_user = iter.next();
		    	if(curr_user != null){ 
		        	System.out.println("after add, current username size(): " + curr_user);  
		        }
		    }*/
		}
	    
	}
		
	//session创建时调用该方法
	public void sessionCreated(HttpSessionEvent se) {	
	}	
	//session范围属性移除时调用
	public void attributeRemoved(HttpSessionBindingEvent se) {	
	}
	//session范围属性替换时调用
	public void attributeReplaced(HttpSessionBindingEvent se) {
	}


}
