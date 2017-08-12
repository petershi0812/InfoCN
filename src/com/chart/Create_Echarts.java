package com.chart;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.*;
import com.encryption.Des;
/*******************
 * ##针对分科
 * createsinglebarcharts(String sql,String dbname,String haxisname,String vaxisname): 
 * createmultibarcharts(String sql,String dbname,String haxisname,String vaxisname):
 * createscattercharts(String sql,String dbname,String label,String haxisname,String vaxisname,String createscattercharts):
 * createbubblecharts(String sql,String dbname,String label,String haxisname,String vaxisname,String zaxisname):
 * createsinglecombinedcharts(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue):
 * createmulticombinedcharts(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue):
 * ##针对疾病
 * createsinglebarcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname)
 * createmultibarcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname):
 * createscattercharts_for_disease(String sql,String dbname,String label,String haxisname,String vaxisname,String createscattercharts):
 * createbubblecharts_for_disease(String sql,String dbname,String label,String haxisname,String vaxisname,String zaxisname):
 * createsinglecombinedcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue):
 * createmulticombinedcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue):
 * ##针对数据分析区
 * createsinglebarcharts_for_cdc(String sql,String dbname,String haxisname,String vaxisname)
 * createmultibarcharts_for_cdc(String sql,String dbname,String haxisname,String vaxisname):
 * createscattercharts_for_cdc(String sql,String dbname,String label,String haxisname,String vaxisname,String createscattercharts):
 * createbubblecharts_for_cdc(String sql,String dbname,String label,String haxisname,String vaxisname,String zaxisname):
 * createsinglecombinedcharts_for_cdc(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue):
 * createmulticombinedcharts_for_cdc(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue):
*******************/
public class Create_Echarts {
	private String sql_year = " where 1=1 ";
	private String sql_preyear = " 1=1 ";	
	public String createsinglebarcharts(String sql,String DB,String haxisname,String vaxisname,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}	
	  	Conn con = new Conn();		
		String sql_str = "";
		StringBuffer record = new StringBuffer();		
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  		  
		try{
			/*主数据库*/
//			System.out.println(username);
//			System.out.println(treeid);
//			System.out.println(sheetnodeid);
//			System.out.println(dbname);
//			System.out.println(sql_str);
//			System.out.println(sourceStrArray[3]);
//			System.out.println(sourceStrArray[4]);
//			System.out.println(haxisname);
//			System.out.println(vaxisname);			
			
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();					
			rs.beforeFirst();	
			record.append("([");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   if(Float.parseFloat(rs.getString(2))==0)
					   record.append("{'label': '"+rs.getString(1)+"','value': ''}");
				   else
			   	 	   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'}");
			   }
			   else{
				   if(Float.parseFloat(rs.getString(2))==0)
			   		   record.append("{'label': '"+rs.getString(1)+"','value': ''},");
				   else
					   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'},");
			   }
			}
			record.append("])");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();  
    }
	public String createmultibarcharts(String sql,String DB,String haxisname,String vaxisname,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}		
	  	Conn con = new Conn();		
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;		    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{	
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();				
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");	
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();
    }
	public String createscattercharts(String sql,String DB,String label,String haxisname,String vaxisname,String createscattercharts,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}	
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}		
		Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	
		StringBuffer record = new StringBuffer();
		if(label.replace(" ","").equals("")){		  		  
		 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  	
		    String showregression_str = "";
		    if(createscattercharts.equals("1")){
		    	showregression_str = "'showregressionline':'1',";
		    }
		    else{
		    	showregression_str = "'showregressionline':'0',";
		    }			
			try{
				/*主数据库*/
				String majorAdjust_QQuery = "{call Proc_CreateSatterCharts_Major_Init(?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();					
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '"+rs.getString(1)+"','y': ''}");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(2))==0)
				   		   record.append("{'x': '"+rs.getString(1)+"','y': ''},");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}
		else{					    
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  
		    String showregression_str = "";
		    if(createscattercharts.equals("1")){
		    	showregression_str = "'showregressionline':'1',";
		    }
		    else{
		    	showregression_str = "'showregressionline':'0',";
		    }		    
			try{
				/*主数据库*/
				String majorAdjust_QQuery = "{call Proc_CreateSatterCharts_Major_Init(?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();	
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(3))==0)
						   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(3))==0)
				   		   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }		
		}
		return record.toString();
    }
	public String createbubblecharts(String sql,String DB,String label,String haxisname,String vaxisname,String zaxisname,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}	
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}		
		Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;		
		StringBuffer record = new StringBuffer();
		if(label.replace(" ","").equals("")){		  				    
		 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  				   
			try{
				String majorAdjust_QQuery = "{call Proc_CreateBubbleCharts_Major_Init(?,?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.setString(11,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();						
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
				   	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}
		else{			    
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  	
			try{
				String majorAdjust_QQuery = "{call Proc_CreateBubbleCharts_Major_Init(?,?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.setString(11,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}
		return record.toString();
    }
	public String createsinglecombinedcharts(String sql,String DB,String haxisname,String vaxisname,String vcharttype,String showvalue,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}	
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}		
	  	Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	  	    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  		
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }	
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();			
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}											
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();
    }
	public String createmulticombinedcharts(String sql,String DB,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue,String username,String treeid,String sheetnodeid){
		String dbname = "";
		String toplines = "";
		int poi = DB.indexOf("|");
		if(poi>0){
			String[] arr = DB.split("\\|");
			dbname = arr[0];
			toplines = arr[1];
		}
		else
			dbname = DB;
		if(sheetnodeid.substring(0,1).equals("I")){
			if(dbname.equals("top10industrydb")){
				if(toplines.equals("10")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=10  ";
				}
				else if(toplines.equals("30")){
					sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";
					sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' and yysr_rank <=30 ";						
				}
			}				
			else{
				sql_year = " where IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";
				sql_preyear = " IndustryCode = '"+sheetnodeid.substring(1,5)+"' ";				
			}
		}
		else if(sheetnodeid.substring(0,1).equals("t")){
			sql_year = " where IndustryName = '总计' ";
			sql_preyear = " IndustryName = '总计' ";			
		}
		else if(sheetnodeid.substring(0,1).equals("s")){
			if(sheetnodeid.equals("s_2")){
				sql_year = " where IndustryName = '采矿业' ";
				sql_preyear = " IndustryName = '采矿业' ";
			}
			else if(sheetnodeid.equals("s_3")){
				sql_year = " where IndustryName = '制造业' ";
				sql_preyear = " IndustryName = '制造业' ";
			}
			else if(sheetnodeid.equals("s_4")){
				sql_year = " where IndustryName = '电力、热力、燃气及水生产和供应业' ";
				sql_preyear = " IndustryName = '电力、热力、燃气及水生产和供应业' ";
			}
			else if(sheetnodeid.substring(0,3).equals("s_2")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '采矿业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_3")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '制造业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}
			else if(sheetnodeid.substring(0,3).equals("s_4")){
				if(sheetnodeid.substring(4,5).equals("1")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,2) = '00') ";
				}
				else if(sheetnodeid.substring(4,5).equals("2")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and (RIGHT(IndustryCode,1) = '0' and RIGHT(IndustryCode,2) <> '00')) ";					
				}
				else if(sheetnodeid.substring(4,5).equals("3")){
					sql_year = " where IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";
					sql_preyear = " IndustryCode in (select industrycode from IndustryCode_Year where IndustryDomain = '电力、热力、燃气及水生产和供应业' and RIGHT(IndustryCode,1) <> '0') ";					
				}				
			}								
		}
		else if(sheetnodeid.substring(0,1).equals("c")){
			sql_year = " where charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
			sql_preyear = " charindex((select SYSFUN_NAME from SYS_Function where SYSFUN_ID = '" + sheetnodeid + "'),keyword)>0 ";
		}		
	  	Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	  	    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();	
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}
				//判断是否是次轴
				String vsecondaxis_str = "";
				if(secondaxisvalue.indexOf(",")>=0){
					String[] secondaxisvalue_arr = secondaxisvalue.split(",");
					for(int k=0;k<secondaxisvalue_arr.length;k++){
					   if(secondaxisvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vsecondaxis_str  = "'parentYAxis': 'S',";
						   break;
					   }
					   else{
						   vsecondaxis_str  = "'parentYAxis': 'Y',";
					   }
					}
				}
				else{
				   if(secondaxisvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vsecondaxis_str  = "'parentYAxis': 'S',";
				   }
				   else{
					   vsecondaxis_str  = "'parentYAxis': 'Y',";
				   }
				}										
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString(); 
    }
	public String createsinglebarcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String username,String treeid,String sheetnodeid){ 
	  	Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	  	 
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;sourceStrArray[5]:disease link id*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }
	    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
	    	sql_str = " where link = " + sourceStrArray[5];
	    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
	    {
	    	if(sql_str.indexOf("where") >=0){
	    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
	    	}
	    }
		StringBuffer record = new StringBuffer();
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();				
			rs.beforeFirst();	
			record.append("([");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   if(Float.parseFloat(rs.getString(2))==0)
					   record.append("{'label': '"+rs.getString(1)+"','value': ''}");
				   else
			   	 	   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'}");
			   }
			   else{
				   if(Float.parseFloat(rs.getString(2))==0)
			   		   record.append("{'label': '"+rs.getString(1)+"','value': ''},");
				   else
					   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'},");
			   }
			}
			record.append("])");	
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }	
		return record.toString();  
    }
	public String createmultibarcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String username,String treeid,String sheetnodeid){ 
	  	Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;		  	 
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  
	    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
	    	sql_str = " where link = " + sourceStrArray[5];
	    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
	    {
	    	if(sql_str.indexOf("where") >=0){
	    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
	    	}
	    }		    
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();		  		
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");			
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }	
		return record.toString();  
    }
	public String createscattercharts_for_disease(String sql,String dbname,String label,String haxisname,String vaxisname,String createscattercharts,String username,String treeid,String sheetnodeid){
		StringBuffer record = new StringBuffer();
		Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;			
		if(label.replace(" ","").equals("")){		  		    
		 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    } 
		    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
		    	sql_str = " where link = " + sourceStrArray[5];
		    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
		    {
		    	if(sql_str.indexOf("where") >=0){
		    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
		    	}
		    }
		    String showregression_str = "";
		    if(createscattercharts.equals("1")){
		    	showregression_str = "'showregressionline':'1',";
		    }
		    else{
		    	showregression_str = "'showregressionline':'0',";
		    }
		    try{
				/*主数据库*/
				String majorAdjust_QQuery = "{call Proc_CreateSatterCharts_Major_Init(?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();			    		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '"+rs.getString(1)+"','y': ''}");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(2))==0)
				   		   record.append("{'x': '"+rs.getString(1)+"','y': ''},");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'},");
				   }
				}
				record.append("]}])");		
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}
		else{				  
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  	
		    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
		    	sql_str = " where link = " + sourceStrArray[5];
		    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
		    {
		    	if(sql_str.indexOf("where") >=0){
		    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
		    	}
		    }	
		    String showregression_str = "";
		    if(createscattercharts.equals("1")){
		    	showregression_str = "'showregressionline':'1',";
		    }
		    else{
		    	showregression_str = "'showregressionline':'0',";
		    }	
		    try{
				/*主数据库*/
				String majorAdjust_QQuery = "{call Proc_CreateSatterCharts_Major_Init(?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(3))==0)
						   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(3))==0)
				   		   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}	
		return record.toString();  
    }
	public String createbubblecharts_for_disease(String sql,String dbname,String label,String haxisname,String vaxisname,String zaxisname,String username,String treeid,String sheetnodeid){
		Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();
		if(label.replace(" ","").equals("")){		  	  
		 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    }  	
		    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
		    	sql_str = " where link = " + sourceStrArray[5];
		    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
		    {
		    	if(sql_str.indexOf("where") >=0){
		    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
		    	}
		    }	
		    try{
				String majorAdjust_QQuery = "{call Proc_CreateBubbleCharts_Major_Init(?,?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.setString(11,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();			    		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
				   	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");		
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}
		else{			  
			String[] sourceStrArray = sql.split("@");		
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
		    }
		    else if(sourceStrArray[2].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
		    }
		    else{
		    	sql_str = sql_year;
		    } 
		    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
		    	sql_str = " where link = " + sourceStrArray[5];
		    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
		    {
		    	if(sql_str.indexOf("where") >=0){
		    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
		    	}
		    }	    	  			  		 
		    try{
				String majorAdjust_QQuery = "{call Proc_CreateBubbleCharts_Major_Init(?,?,?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setString(8,label);
		  		majorAdjust_ps.setString(9,haxisname);
		  		majorAdjust_ps.setString(10,vaxisname);
		  		majorAdjust_ps.setString(11,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();			    		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }				
		}		
		return record.toString();			
    }
	public String createsinglecombinedcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String username,String treeid,String sheetnodeid){ 
	  	Conn con = new Conn();		
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null; 
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;

	    }  	
	    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
	    	sql_str = " where link = " + sourceStrArray[5];
	    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
	    {
	    	if(sql_str.indexOf("where") >=0){
	    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
	    	}
	    }
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();				
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}											
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();					 
    }
	public String createmulticombinedcharts_for_disease(String sql,String dbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue,String username,String treeid,String sheetnodeid){ 
	  	Conn con = new Conn();	
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;	  	   
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }
	    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
	    	sql_str = " where link = " + sourceStrArray[5];
	    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
	    {
	    	if(sql_str.indexOf("where") >=0){
	    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
	    	}
	    }	 
	    int array_length = 0;
		StringBuffer record = new StringBuffer();
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }		
		try{
			/*主数据库*/
			String majorAdjust_QQuery = "{call Proc_CreateCharts_Major_Init(?,?,?,?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,username);
	  		majorAdjust_ps.setString(2,treeid);
	  		majorAdjust_ps.setString(3,sheetnodeid);
	  		majorAdjust_ps.setString(4,dbname);
	  		majorAdjust_ps.setString(5,sql_str);
	  		majorAdjust_ps.setString(6,sourceStrArray[3]);
	  		majorAdjust_ps.setString(7,sourceStrArray[4]);
	  		majorAdjust_ps.setString(8,haxisname);
	  		majorAdjust_ps.setString(9,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();				
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}
				//判断是否是次轴
				String vsecondaxis_str = "";
				if(secondaxisvalue.indexOf(",")>=0){
					String[] secondaxisvalue_arr = secondaxisvalue.split(",");
					for(int k=0;k<secondaxisvalue_arr.length;k++){
					   if(secondaxisvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vsecondaxis_str  = "'parentYAxis': 'S',";
						   break;
					   }
					   else{
						   vsecondaxis_str  = "'parentYAxis': 'Y',";
					   }
					}
				}
				else{
				   if(secondaxisvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vsecondaxis_str  = "'parentYAxis': 'S',";
				   }
				   else{
					   vsecondaxis_str  = "'parentYAxis': 'Y',";
				   }
				}										
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }	
		return record.toString();
    }
	public String createsinglebarcharts_for_cdc(String sql,String encryptiondbname,String haxisname,String vaxisname){
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();  
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    } 
	    try{
			String majorAdjust_QQuery = "{call Proc_CreateCDCCharts_Major_Init(?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,dbname);
	  		majorAdjust_ps.setString(2,sql_str);
	  		majorAdjust_ps.setString(3,sourceStrArray[3]);
	  		majorAdjust_ps.setString(4,sourceStrArray[4]);
	  		majorAdjust_ps.setString(5,haxisname);
	  		majorAdjust_ps.setString(6,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();	
			rs.beforeFirst();	
			record.append("([");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   if(Float.parseFloat(rs.getString(2))==0)
					   record.append("{'label': '"+rs.getString(1)+"','value': ''}");
				   else
			   	 	   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'}");
			   }
			   else{
				   if(Float.parseFloat(rs.getString(2))==0)
			   		   record.append("{'label': '"+rs.getString(1)+"','value': ''},");
				   else
					   record.append("{'label': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'},");
			   }
			}
			record.append("])");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }			
		return record.toString();  
    }
	public String createmultibarcharts_for_cdc(String sql,String encryptiondbname,String haxisname,String vaxisname){ 
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();  	    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  		  	  			  		
	    int array_length = 0;
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{
			String majorAdjust_QQuery = "{call Proc_CreateCDCCharts_Major_Init(?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,dbname);
	  		majorAdjust_ps.setString(2,sql_str);
	  		majorAdjust_ps.setString(3,sourceStrArray[3]);
	  		majorAdjust_ps.setString(4,sourceStrArray[4]);
	  		majorAdjust_ps.setString(5,haxisname);
	  		majorAdjust_ps.setString(6,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();	
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"','data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");	
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }		
		return record.toString();
    }
	public String createscattercharts_for_cdc(String sql,String encryptiondbname,String label,String haxisname,String vaxisname,String createscattercharts){
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();  	
				
	    String showregression_str = "";
	    if(createscattercharts.equals("1")) showregression_str = "'showregressionline':'1',";
	    else showregression_str = "'showregressionline':'0',";
	    
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    } 
	    		
		if(label.replace(" ","").equals("")){	    	  			  		
			try{
				String majorAdjust_QQuery = "{call Proc_CreateCDCScatterCharts_Major_Init(?,?,?,?,?,?,?)}"; 
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,dbname);
		  		majorAdjust_ps.setString(2,sql_str);
		  		majorAdjust_ps.setString(3,sourceStrArray[3]);
		  		majorAdjust_ps.setString(4,sourceStrArray[4]);
		  		majorAdjust_ps.setString(5,label);
		  		majorAdjust_ps.setString(6,haxisname);
		  		majorAdjust_ps.setString(7,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();					
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '"+rs.getString(1)+"','y': ''}");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(2))==0)
				   		   record.append("{'x': '"+rs.getString(1)+"','y': ''},");
					   else if(Float.parseFloat(rs.getString(1))==0)
						   record.append("{'x': '','y': '"+rs.getString(2)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			finally{
				con.close();            
	        }
		}
		else{				
			try{
				String majorAdjust_QQuery = "{call Proc_CreateCDCScatterCharts_Major_Init(?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,dbname);
		  		majorAdjust_ps.setString(2,sql_str);
		  		majorAdjust_ps.setString(3,sourceStrArray[3]);
		  		majorAdjust_ps.setString(4,sourceStrArray[4]);
		  		majorAdjust_ps.setString(5,label);
		  		majorAdjust_ps.setString(6,haxisname);
		  		majorAdjust_ps.setString(7,vaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"',"+showregression_str+"'color': '009900','anchorsides': '1','anchorradius': '6','anchorbgcolor': 'D5FFD5','anchorbordercolor': '009900','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   if(Float.parseFloat(rs.getString(3))==0)
						   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
					   else
				   	 	   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'}");
				   }
				   else{
					   if(Float.parseFloat(rs.getString(3))==0)
				   		   record.append("{'x': '"+rs.getString(2)+"','y': '','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else if(Float.parseFloat(rs.getString(2))==0)
						   record.append("{'x': '','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
					   else
						   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','tooltext': '"+rs.getString(1)+","+haxisname+":"+rs.getString(2)+";"+vaxisname+":"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
		}			
		return record.toString();
    }
	public String createbubblecharts_for_cdc(String sql,String encryptiondbname,String label,String haxisname,String vaxisname,String zaxisname){
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();
		
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    } 
	    
		if(label.replace(" ","").equals("")){		  			
			try{
				String majorAdjust_QQuery = "{call Proc_CreateCDCBubbleCharts_Major_Init(?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,dbname);
		  		majorAdjust_ps.setString(2,sql_str);
		  		majorAdjust_ps.setString(3,sourceStrArray[3]);
		  		majorAdjust_ps.setString(4,sourceStrArray[4]);
		  		majorAdjust_ps.setString(5,label);
		  		majorAdjust_ps.setString(6,haxisname);
		  		majorAdjust_ps.setString(7,vaxisname);
		  		majorAdjust_ps.setString(8,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
				   	   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(1)+"','y': '"+rs.getString(2)+"','z':'"+rs.getString(3)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;
				if(majorAdjust_ps != null) majorAdjust_ps.close();				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }		
		}
		else{			
			try{
				String majorAdjust_QQuery = "{call Proc_CreateCDCBubbleCharts_Major_Init(?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,dbname);
		  		majorAdjust_ps.setString(2,sql_str);
		  		majorAdjust_ps.setString(3,sourceStrArray[3]);
		  		majorAdjust_ps.setString(4,sourceStrArray[4]);
		  		majorAdjust_ps.setString(5,label);
		  		majorAdjust_ps.setString(6,haxisname);
		  		majorAdjust_ps.setString(7,vaxisname);
		  		majorAdjust_ps.setString(8,zaxisname);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();		
				rs.beforeFirst();	
				record.append("([{'seriesname':'"+haxisname+"vs"+vaxisname+"','data': [");
				while(rs.next()) 
				{		
				   if(rs.isLast()){
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'}");
				   }
				   else{
					   record.append("{'x': '"+rs.getString(2)+"','y': '"+rs.getString(3)+"','z':'"+rs.getString(4)+"','name':'"+rs.getString(1)+"'},");
				   }
				}
				record.append("]}])");	
				rs.close();
				rs = null;	
				if(majorAdjust_ps != null) majorAdjust_ps.close();				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }			
		}			
		return record.toString();
    }
	public String createsinglecombinedcharts_for_cdc(String sql,String encryptiondbname,String haxisname,String vaxisname,String vcharttype,String showvalue){ 
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();
 
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  		
	    	    	  			  		 
	    int array_length = 0;
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }	
		try{
			String majorAdjust_QQuery = "{call Proc_CreateCDCCharts_Major_Init(?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,dbname);
	  		majorAdjust_ps.setString(2,sql_str);
	  		majorAdjust_ps.setString(3,sourceStrArray[3]);
	  		majorAdjust_ps.setString(4,sourceStrArray[4]);
	  		majorAdjust_ps.setString(5,haxisname);
	  		majorAdjust_ps.setString(6,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();	
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}			
					
				
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }	
		return record.toString();
    }
	
	public String createmulticombinedcharts_for_cdc(String sql,String encryptiondbname,String haxisname,String vaxisname,String vcharttype,String showvalue,String secondaxisvalue){ 
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
	  	Conn con = new Conn();
		PreparedStatement majorAdjust_ps = null;
		ResultSet rs = null;
		StringBuffer record = new StringBuffer();	
	 	/*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
		String[] sourceStrArray = sql.split("@");		
		String sql_str = "";
	    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[1].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[1] + " and " + sql_preyear;
	    }
	    else if(sourceStrArray[2].replace(" ","").length()>0){
	    	sql_str = " where " + sourceStrArray[2] + " and " + sql_preyear;
	    }
	    else{
	    	sql_str = sql_year;
	    }  		
	    int array_length = 0;
		if(vaxisname.indexOf(",")>=0){
			String[] str = vaxisname.split(",");
			array_length = str.length;
		}
		else{
			array_length = 1;
		}
		StringBuffer[] recordvalue = new StringBuffer[array_length];
		for(int i=0;i<array_length ;i++){
			recordvalue[i] = new StringBuffer();
	    }			
		try{
			String majorAdjust_QQuery = "{call Proc_CreateCDCCharts_Major_Init(?,?,?,?,?,?)}";
	  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
	  		majorAdjust_ps.setString(1,dbname);
	  		majorAdjust_ps.setString(2,sql_str);
	  		majorAdjust_ps.setString(3,sourceStrArray[3]);
	  		majorAdjust_ps.setString(4,sourceStrArray[4]);
	  		majorAdjust_ps.setString(5,haxisname);
	  		majorAdjust_ps.setString(6,vaxisname);
	  		majorAdjust_ps.execute();		  				  
	  		rs = majorAdjust_ps.getResultSet();	
	  		
			rs.beforeFirst();	
			record.append("[{'category':[");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
				   record.append("{'label': '"+rs.getString(1)+"'}");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''}");					   
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'}");
				   }
			   }
			   else{
				   record.append("{'label': '"+rs.getString(1)+"'},");
				   for(int i=0; i<array_length; i++){
					   if(Float.parseFloat(rs.getString(i+2))==0)
						   recordvalue[i].append("{'value': ''},");
					   else
						   recordvalue[i].append("{'value': '"+rs.getString(i+2)+"'},");
				   }
			   }
			}				
			record.append("]}]@[");			
			for(int i=0; i<array_length; i++){
				//判断是否需要显示值
				String showvalue_str = "";
				if(showvalue.indexOf(",")>=0){
					String[] showvalue_arr = showvalue.split(",");
					for(int k=0;k<showvalue_arr.length;k++){
					   if(showvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   showvalue_str  = "'showValues': '1',";
						   break;
					   }
					   else{
						   showvalue_str  = "'showValues': '0',";
					   }
					}
				}
				else{
				   if(showvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   showvalue_str  = "'showValues': '1',";
				   }
				   else{
					   showvalue_str  = "'showValues': '0',";
				   }
				}
				//判断显示图表
				String vcharttype_str = "";
				if(vcharttype.indexOf(",")>=0){
					String[] vcharttype_arr = vcharttype.split(",");
					for(int k=0;k<vcharttype_arr.length;k++){
					   if(vcharttype_arr[k].split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vcharttype_str  = "'renderAs': '"+vcharttype_arr[k].split("-")[1].replace(" ","")+"',";
						   break;
					   }
					}
				}
				else{
				   if(vcharttype.split("-")[0].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vcharttype_str  = "'renderAs': '"+vcharttype.split("-")[1].replace(" ","")+"',";
				   }								
				}
				//判断是否是次轴
				String vsecondaxis_str = "";
				if(secondaxisvalue.indexOf(",")>=0){
					String[] secondaxisvalue_arr = secondaxisvalue.split(",");
					for(int k=0;k<secondaxisvalue_arr.length;k++){
					   if(secondaxisvalue_arr[k].replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
						   vsecondaxis_str  = "'parentYAxis': 'S',";
						   break;
					   }
					   else{
						   vsecondaxis_str  = "'parentYAxis': 'Y',";
					   }
					}
				}
				else{
				   if(secondaxisvalue.replace(" ","").equals(rs.getMetaData().getColumnName(i+2))){
					   vsecondaxis_str  = "'parentYAxis': 'S',";
				   }
				   else{
					   vsecondaxis_str  = "'parentYAxis': 'Y',";
				   }
				}			
								
				if(i == array_length-1){
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]}");
				}
				else{
					record.append("{'seriesname':'"+rs.getMetaData().getColumnName(i+2)+"',"+vcharttype_str+showvalue_str+vsecondaxis_str+"'data':[");
					record.append(recordvalue[i].toString());
					record.append("]},");
				}								
			}
			record.append("]");		
			rs.close();
			rs = null;
			if(majorAdjust_ps != null) majorAdjust_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }	
		return record.toString(); 
    }
	
	
	
	
}
