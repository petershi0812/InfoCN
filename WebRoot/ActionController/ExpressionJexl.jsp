<%@ page language="java" contentType="text/html;charset=utf-8" import="java.util.*" pageEncoding="utf-8"%> 
<%@ page import="org.apache.commons.jexl.*" %>    
<%  
String jexlExp = request.getParameter("Exp");  
try{
	Expression e = ExpressionFactory.createExpression(jexlExp);  
	JexlContext jc = JexlHelper.createContext();  
	Object result = e.evaluate(jc); 
	//System.out.print(result.toString());
	response.getWriter().write(result.toString());  
}catch(Exception e){
	//System.out.println('Error');
	response.getWriter().write("Error"); 	
}
%>