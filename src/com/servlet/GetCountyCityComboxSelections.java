package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.combobox.comboservice;

public class GetCountyCityComboxSelections extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		String username = (String)request.getSession().getAttribute("username");
		comboservice node=new comboservice(); 
		String word_id = request.getParameter("id");
		String arrrightspk[] = request.getParameter("rights").split("\\|");	
		String tempResponse=""; 
		String sql = "" ,variable = "";
		if(word_id.equals("province")){			
			sql = "SELECT * FROM DBO.GETADMINPROVINCE('"+username+"','"+arrrightspk[0].trim()+"','"+arrrightspk[1].trim()+"')";
			variable = "province";			
			tempResponse=node.getComboResult(sql,variable); 			
		}
		else if(word_id.equals("city")){
			String province_id = request.getParameter("province_id");
			sql = "SELECT * FROM DBO.GETADMINCITY_COUNTYCITY('"+username+"','"+arrrightspk[0].trim()+"','"+arrrightspk[1].trim()+"','"+province_id+"')";
			variable = "city";
			tempResponse=node.getComboResult(sql,variable); 
		}
		else if(word_id.equals("district")){
			String province_id = request.getParameter("province_id");
			String city_id = request.getParameter("city_id");
			sql = "SELECT * FROM DBO.GETADMINCOUNTYCITY('"+username+"','"+arrrightspk[0].trim()+"','"+arrrightspk[1].trim()+"','"+province_id+"','"+city_id+"')";
			variable = "district";			
			tempResponse=node.getComboResult(sql,variable); 
			//System.out.println(tempResponse);
		}
		response.getWriter().write("["+tempResponse+"]");
	}

}
