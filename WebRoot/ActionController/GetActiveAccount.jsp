<%@ page language="java" contentType="text/html;charset=utf-8" import="java.util.*" pageEncoding="utf-8"%>     
<%  
		@SuppressWarnings("unchecked")
		ArrayList<String> allUser = (ArrayList<String>)application.getAttribute("allUser");
		List<String> dedupallUser  = new ArrayList<String>(new HashSet<String>(allUser));				
		Iterator<String> iter = dedupallUser.iterator();
		int c = 0;
	    while(iter.hasNext()) { 
	        String user = iter.next();
	    	if(user != null){ 
	        	//System.out.println("★" + user + "★");  
	        	c = c + 1;
	        }
	    }
		response.getWriter().write(""+c+"");
%>