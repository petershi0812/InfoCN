package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.combobox.comboservice;

public class GetComboxSelectionsOfRights extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		comboservice node=new comboservice(); 
		String word_id = request.getParameter("id");
		String tempResponse=""; 
		String sql = "" ,variable = "";
		if(word_id.equals("province")){
			sql = "select distinct province from AdminCode_MOH order by province";
			variable = "province";
			tempResponse=node.getComboResult(sql,variable); 
		}
		else if(word_id.equals("city")){
			String province_id = request.getParameter("province_id");
			String sql_str = "";
			if(province_id.indexOf(",")>0){		
				String[] strarray=province_id.split(",");
				for(int i = 0 ; i<= strarray.length-1 ; i++){
					if(i < strarray.length-1) sql_str = sql_str + "province = '" + strarray[i] + "' or ";
					else sql_str = sql_str + "province = '" + strarray[i] + "' ";
				}
			}else{
				sql_str = sql_str + "province = '" + province_id + "' ";
			}	
			sql = "select distinct city from AdminCode_MOH where " + sql_str;
			variable = "city";
			tempResponse=node.getComboResult(sql,variable); 		
		}
		else if(word_id.equals("district")){
			String province_id = request.getParameter("province_id");
			String city_id = request.getParameter("city_id");
			String sql_str_province = "",sql_str_city = "";
			/*省份*/
			if(province_id.indexOf(",")>0){
				String[] strarray=province_id.split(",");
				for(int i = 0 ; i<= strarray.length-1 ; i++){
					if(i < strarray.length-1) sql_str_province = sql_str_province + "province = '" + strarray[i] + "' or ";
					else sql_str_province = sql_str_province + "province = '" + strarray[i] + "' ";
				}					
			}
			else{
				sql_str_province = sql_str_province + "province = '" + province_id + "' ";
			}			
			sql_str_province = " ( " + sql_str_province + " ) ";			
			/*城市*/
			if(city_id.indexOf(",")>0){
				String[] strarray=city_id.split(",");
				for(int i = 0 ; i<= strarray.length-1 ; i++){
					if(i < strarray.length-1) sql_str_city = sql_str_city + "city = '" + strarray[i] + "' or ";
					else sql_str_city = sql_str_city + "city = '" + strarray[i] + "' ";
				}					
			}
			else{
				sql_str_city = sql_str_city + "city = '" + city_id + "' ";
			}	
			sql_str_city = " ( " + sql_str_city + " ) ";

			sql = "select district from AdminCode_MOH where " + sql_str_province + " and " + sql_str_city;
			variable = "district";			
			tempResponse=node.getComboResult(sql,variable); 	
		}
		response.getWriter().write("["+tempResponse+"]");
	}

}
