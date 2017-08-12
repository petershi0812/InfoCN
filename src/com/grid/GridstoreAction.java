package com.grid;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.*;
import com.encryption.Des;

public class GridstoreAction {
	private String sql_year = " where 1=1 ";
	private String sql_preyear = " 1=1 ";
	public String AllGridstorePage(String sql,String DB,Integer numcolumnpoint,Integer start,Integer limit,String username,String treeid,String sheetnodeid){
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
		else if(sheetnodeid.substring(0,2).equals("ag")){
			String papertype = "";
			if(sheetnodeid.equals("ag1b0"))
				papertype = "国家";
			else if(sheetnodeid.equals("ag1b1"))
				papertype = "地区";
			sql_year = " where papertype = '"+papertype+"' ";
			sql_preyear = " papertype = '"+papertype+"' ";
		}		
	  	Conn con = new Conn();		
		Integer total = 0;
		StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement majorInit_ps = null;
		PreparedStatement majorAdjust_ps = null;
		try {		
		  	if(sql.replace(" ","").equals("")){  		
		  		/*获取总的行数，为了分页用*/
		  		String ttInit_QQuery = "{call Proc_AllGridstorePage_TotalCount_Init(?,?,?,?,?)}"; 
		  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
		  		ttInit_ps.setString(1,username);
		  		ttInit_ps.setString(2,treeid);
		  		ttInit_ps.setString(3,sheetnodeid);
		  		ttInit_ps.setString(4,dbname);
		  		ttInit_ps.setString(5,sql_year);
		  		ttInit_ps.execute();		  				  
		  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
		  		ttInit_rs.last();
		  		total = ttInit_rs.getInt("total_num");
				ttInit_rs.close(); 
				ttInit_ps.close();	
				/*主数据库*/
				String majorInit_QQuery = "{call Proc_AllGridstorePage_Major_Init(?,?,?,?,?,?,?)}";
				majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
		  		majorInit_ps.setString(1,username);
		  		majorInit_ps.setString(2,treeid);
		  		majorInit_ps.setString(3,sheetnodeid);
		  		majorInit_ps.setString(4,dbname);
		  		majorInit_ps.setString(5,sql_year);
		  		majorInit_ps.setInt(6,start);
		  		majorInit_ps.setInt(7,limit);
		  		majorInit_ps.execute();		  				  
		  		rs = majorInit_ps.getResultSet();
		  	}else{  
		  	    /*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;*/
				String[] sourceStrArray = sql.split("@");		
				String sql_str = "";				
			    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
			    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2] + " and " + sql_preyear;
			    }
			    else if(sourceStrArray[1].replace(" ","").length()>0){
			    	sql_str = " where " + sourceStrArray[1]+ " and " + sql_preyear;
			    }
			    else if(sourceStrArray[2].replace(" ","").length()>0){
			    	sql_str = " where " + sourceStrArray[2]+ " and " + sql_preyear;
			    }
			    else{
			    	sql_str = sql_year;
			    }  	
		  		/*获取总的行数，为了分页用*/
		  		String ttAdjust_QQuery = "{call Proc_AllGridstorePage_TotalCount_Adjust(?,?,?,?,?)}"; 
		  		PreparedStatement ttAdjust_ps = con.PreparedexecuteQuery(ttAdjust_QQuery);
		  		ttAdjust_ps.setString(1,username);
		  		ttAdjust_ps.setString(2,treeid);
		  		ttAdjust_ps.setString(3,sheetnodeid);
		  		ttAdjust_ps.setString(4,dbname);
		  		ttAdjust_ps.setString(5,sql_str);
		  		ttAdjust_ps.execute();		  				  
		  		ResultSet ttAdjust_rs = ttAdjust_ps.getResultSet();		  				  		
		  		ttAdjust_rs.last();
		  		total = ttAdjust_rs.getInt("total_num");
		  		ttAdjust_rs.close(); 
		  		ttAdjust_ps.close();	
				/*主数据库*/
		  	    if(limit > total){
		  	    	limit = total;
		  	    }
//		  	    System.out.println(sheetnodeid);
//		  	    System.out.println(dbname);
//		  	    System.out.println(sql_str);
//		  		System.out.println(sourceStrArray[3]);
//		  		System.out.println(sourceStrArray[4]);
//		  		System.out.println(start);
//		  		System.out.println(limit);

				String majorAdjust_QQuery = "{call Proc_AllGridstorePage_Major_Adjust(?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setInt(8,start);
		  		majorAdjust_ps.setInt(9,limit);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();				  	   
		  	} 		
			rs.last();
			int num=rs.getRow();
			rs.beforeFirst();
			String[] lists = new String[num];		
			int i=0;	
			String[] columnName = new String[100];
			String[] columnValue = new String[100];
			int k =0;
			while(rs.next()) 
			{   
				lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){			
					    if(k>=numcolumnpoint){
					    	lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
					    }
					    else{
					    	if(columnValue[k] == null)
					    		lists[i] = lists[i]+columnName[k]+":'',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
						}
					}
					lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";	    
			   	i++;
			}
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}		
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(total);
			record.append(",");
			record.append("rows : [");
			if(limit > num){
				limit = num;
			}	
		 	for(int j=0;j<limit;j++){
				record.append(lists[j]);
				if(j < limit - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}");
			rs.close();
			if(majorAdjust_ps != null) majorAdjust_ps.close();
			if(majorInit_ps != null) majorInit_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		//System.out.println(record.toString());
		return record.toString();
	}
	public String AllGridstorePage_for_Disease(String sql,String dbname,Integer numcolumnpoint,Integer start,Integer limit,String username,String treeid,String sheetnodeid){
	  	Conn con = new Conn();
		Integer total = 0;
		StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement majorInit_ps = null;
		PreparedStatement majorAdjust_ps = null;		
		try {			
		  	if(sql.replace(" ","").equals("")){  		
		  		/*获取总的行数，为了分页用*/
		  		String ttInit_QQuery = "{call Proc_AllGridstorePage_TotalCount_Init(?,?,?,?,?)}"; 
		  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
		  		ttInit_ps.setString(1,username);
		  		ttInit_ps.setString(2,treeid);
		  		ttInit_ps.setString(3,sheetnodeid);
		  		ttInit_ps.setString(4,dbname);
		  		ttInit_ps.setString(5,sql_year);
		  		ttInit_ps.execute();		  				  
		  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
		  		ttInit_rs.last();
		  		total = ttInit_rs.getInt("total_num");
				ttInit_rs.close(); 
				ttInit_ps.close();
				/*主数据库*/
				String majorInit_QQuery = "{call Proc_AllGridstorePage_Major_Init(?,?,?,?,?,?,?)}";
				majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
		  		majorInit_ps.setString(1,username);
		  		majorInit_ps.setString(2,treeid);
		  		majorInit_ps.setString(3,sheetnodeid);
		  		majorInit_ps.setString(4,dbname);
		  		majorInit_ps.setString(5,sql_year);
		  		majorInit_ps.setInt(6,start);
		  		majorInit_ps.setInt(7,limit);
		  		majorInit_ps.execute();		  				  
		  		rs = majorInit_ps.getResultSet();
		  	}else{  
		  	    /*sourceStrArray[0] : 空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;sourceStrArray[5]:disease link id*/
				String[] sourceStrArray = sql.split("@");		
				String sql_str = "";
			    if(sourceStrArray[1].replace(" ","").length()>0 && sourceStrArray[2].replace(" ","").length()>0 ){
			    	sql_str = " where " + sourceStrArray[1] + " and " + sourceStrArray[2];
			    }
			    else if(sourceStrArray[1].replace(" ","").length()>0){
			    	sql_str = " where " + sourceStrArray[1];
			    }
			    else if(sourceStrArray[2].replace(" ","").length()>0){
			    	sql_str = " where " + sourceStrArray[2];
			    }
			    else{
			    	sql_str = " ";
			    } 
			    if(sql_str.replace(" ","").length() == 0 && sourceStrArray[5].replace(" ","").length() > 0){
			    	sql_str = " where link = " + sourceStrArray[5];
			    }else if(sql_str.replace(" ","").length() > 0 && sourceStrArray[5].replace(" ","").length() > 0)
			    {
			    	if(sql_str.indexOf("where") >=0){
			    		sql_str = sql_str + " and " + " link = " + sourceStrArray[5];
			    	}
			    } 		
		  		/*获取总的行数，为了分页用*/
		  		String ttAdjust_QQuery = "{call Proc_AllGridstorePage_TotalCount_Adjust(?,?,?,?,?)}"; 
		  		PreparedStatement ttAdjust_ps = con.PreparedexecuteQuery(ttAdjust_QQuery);
		  		ttAdjust_ps.setString(1,username);
		  		ttAdjust_ps.setString(2,treeid);
		  		ttAdjust_ps.setString(3,sheetnodeid);
		  		ttAdjust_ps.setString(4,dbname);
		  		ttAdjust_ps.setString(5,sql_str);
		  		ttAdjust_ps.execute();		  				  
		  		ResultSet ttAdjust_rs = ttAdjust_ps.getResultSet();		  				  		
		  		ttAdjust_rs.last();
		  		total = ttAdjust_rs.getInt("total_num");
		  		ttAdjust_rs.close(); 
		  		ttAdjust_ps.close();		  		
		  		/*主数据库*/	  		  		  		  		
		  	    if(limit > total){
		  	    	limit = total;
		  	    }
				String majorAdjust_QQuery = "{call Proc_AllGridstorePage_Major_Adjust(?,?,?,?,?,?,?,?,?)}";
		  		majorAdjust_ps = con.PreparedexecuteQuery(majorAdjust_QQuery);
		  		majorAdjust_ps.setString(1,username);
		  		majorAdjust_ps.setString(2,treeid);
		  		majorAdjust_ps.setString(3,sheetnodeid);
		  		majorAdjust_ps.setString(4,dbname);
		  		majorAdjust_ps.setString(5,sql_str);
		  		majorAdjust_ps.setString(6,sourceStrArray[3]);
		  		majorAdjust_ps.setString(7,sourceStrArray[4]);
		  		majorAdjust_ps.setInt(8,start);
		  		majorAdjust_ps.setInt(9,limit);
		  		majorAdjust_ps.execute();		  				  
		  		rs = majorAdjust_ps.getResultSet();			  	    	  	    
		  	}  	  		
			rs.last();
			int num=rs.getRow();	
			rs.beforeFirst();
			String[] lists = new String[num];
			int i=0;	
			String[] columnName = new String[100];
			String[] columnValue = new String[100];
			int k =0;
			while(rs.next()) 
			{   
				lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){			
					    if(k>=numcolumnpoint){
					    	lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
					    }
					    else{
					    	if(columnValue[k] == null)
					    		lists[i] = lists[i]+columnName[k]+":'',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";					    	
						}
					}
					lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";	    
			   	i++;
			}
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}		
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(total);
			record.append(",");
			record.append("rows : [");
			if(limit > num){
				limit = num;
			}	
		 	for(int j=0;j<limit;j++){
				record.append(lists[j]);
				if(j < limit - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}"); 	
			rs.close();			
			if(majorAdjust_ps != null) majorAdjust_ps.close();
			if(majorInit_ps != null) majorInit_ps.close();			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		//System.out.println(record.toString());
		return record.toString();
	}
	public String AllGridstoreGroupByPage(String sql,String DB,Integer start,Integer limit,String username,String treeid,String sheetnodeid){
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
		String sql_inner_major = "";
		Integer total = 0;
		String[] sourceStrArray = sql.split("@");
		Integer numberpoint = 0;
		StringBuffer record = new StringBuffer();
		ResultSet rs = null;		
		try {			
			/*sourceStrArray[0]:空;sourceStrArray[1]:主界面筛选；sourceStrArray[2]：高级筛选；sourceStrArray[3]：排序;sourceStrArray[4]：自定义列;sourceStrArray[5]:分类汇总;sourceStrArray[6]:分类汇总下的排序;sourceStrArray[7]:分类汇总下的筛选*/	
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
			if(sourceStrArray[4].trim().length()>0){
				sql_inner_major = "select *," + sourceStrArray[4] + " from " + dbname +  sql_str; 
			}
			else{
				sql_inner_major = "select * from " + dbname +  sql_str; 
			}
//			System.out.println(sheetnodeid);
//			System.out.println(dbname);
//			System.out.println(sql_inner_major);
//			System.out.println(sourceStrArray[5].split(",")[0]);
//			System.out.println(sourceStrArray[5]);
//			System.out.println(sourceStrArray[7]);
		 	/*获取总的行数，为了分页用*/
	  		String ttInit_QQuery = "{call Proc_AllGridstoreGroupByPage_TotalCount_Init(?,?,?,?,?,?,?,?)}"; 
	  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
	  		ttInit_ps.setString(1,username);
	  		ttInit_ps.setString(2,treeid);
	  		ttInit_ps.setString(3,sheetnodeid);
	  		ttInit_ps.setString(4,dbname); //替换dummy dbname
	  		ttInit_ps.setString(5,sql_inner_major);
	  		ttInit_ps.setString(6,sourceStrArray[5].split(",")[0]);
	  		ttInit_ps.setString(7,sourceStrArray[5]);
	  		ttInit_ps.setString(8,sourceStrArray[7]);
	  		ttInit_ps.execute();		  				  
	  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
	  		ttInit_rs.last();
	  		total = ttInit_rs.getInt("total_num");
			ttInit_rs.close(); 
			ttInit_ps.close();				
			/*主数据库*/
		    if(limit > total){
		    	limit = total;
		    }  	    	
			String majorInit_QQuery = "{call Proc_AllGridstoreGroupByPage_Major_Init(?,?,?,?,?,?,?,?,?,?,?)}";
			PreparedStatement majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
			majorInit_ps.setString(1,username);
			majorInit_ps.setString(2,treeid);
			majorInit_ps.setString(3,sheetnodeid);
			majorInit_ps.setString(4,dbname);
			majorInit_ps.setString(5,sql_inner_major);
			majorInit_ps.setString(6,sourceStrArray[5].split(",")[0]);
			majorInit_ps.setString(7,sourceStrArray[5]);
			majorInit_ps.setString(8,sourceStrArray[6]);
			majorInit_ps.setString(9,sourceStrArray[7]);
	  		majorInit_ps.setInt(10,start);
	  		majorInit_ps.setInt(11,limit);
	  		majorInit_ps.execute();		  				  
	  		rs = majorInit_ps.getResultSet();
			//获取数字位
			if(sourceStrArray[5].indexOf("District")>=0) numberpoint = 5;
			else if(sourceStrArray[5].indexOf("City")>=0) numberpoint = 4;
			else if(sourceStrArray[5].indexOf("Province")>=0) numberpoint = 3;
			else numberpoint = 2;
			
			rs.last();
			int num=rs.getRow();	
			rs.beforeFirst();
			String[] lists = new String[num];
			int i=0;	
			String[] columnName = new String[100];
			String[] columnValue = new String[100];
			int k =0;
			while(rs.next()) 
			{   
				lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
						if(k>=numberpoint){
							lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
						}
						else{
					    	if(columnValue[k] == null)
					    		lists[i] = lists[i]+columnName[k]+":'',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
						}									
					}
					lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";	    
			   	i++;
			}
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}		
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(total);
			record.append(",");
			record.append("rows : [");
			if(limit > num){
				limit = num;
			}	
		 	for(int j=0;j<limit;j++){
				record.append(lists[j]);
				if(j < limit - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}");
			rs.close();		
			if(majorInit_ps != null) majorInit_ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		//System.out.println(record.toString());
		return record.toString(); 			
	}
	public String AllGridstorePage_for_MOHOnlyDisease(String province_city,String year_id){
		Conn con = new Conn();
		StringBuffer record = new StringBuffer();
		String sql = "select * from MOH_database where General_Hop_Flag = 1 and Province = '"+province_city.split("@")[0].replace(" ","")+"' and City = '"+province_city.split("@")[1].replace(" ","")+"' and year_id = " + year_id;
		if (!sql.equals("")){
			try{
			  ResultSet rs=con.executeQuery(sql);
			  rs.last();
			  int num=rs.getRow();
			  rs.beforeFirst();
			  String[] lists = new String[num];
			  int i=0;
			  String[] columnName = new String[1000];
			  String[] columnValue = new String[1000];
			  int k =0;
			  while(rs.next()) 
			  {   
			  	lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
					    if(k>=23){
					    	lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
					    }
					    else{
							lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
						}
					}
					lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":'"+columnValue[rs.getMetaData().getColumnCount()-1]+"'}";
			    	
			   	i++;
			  }				
				record.append("{"); 
				record.append("metaData : {totalProperty: 'results',");
				record.append("root: 'rows',");
				record.append("id: 'id' ,");
				record.append("fields : [");
				for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
					record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
				}		
				record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
				record.append("]},");
				record.append("results :");
				record.append(num);
				record.append(",");
				record.append("rows : [");
			 	for(int j = 0 ; j <num; j++){
					record.append(lists[j]);
					if(j < num - 1){
						record.append(",");
					}
				};
				record.append("]");
				record.append("}");
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return record.toString();
		}else{
		  record.append("");
		  con.close();
		  return record.toString();
		}		
	}
	public String MapGridstore(String flag,String params,String subjectid){
	    Conn con = new Conn();
	    StringBuffer record = new StringBuffer();
	    String sql = "";
	    /*第一层*/
	    if(flag.equals("1")){
		    if(params.equals("shanghai") || params.equals("chongqing") || params.equals("beijing") || params.equals("tianjin")){
		      sql = "select Rule_sql from Map_Rule where dimension = '地级市' and Rule_name = '直辖市' and Rule_id = " + subjectid;
		    }
		    else{
		      sql = "select Rule_sql from Map_Rule where dimension = '地级市' and Rule_name is null and Rule_id = " + subjectid;
		    }
	    }
	    else{
	    	sql = "select Rule_sql from Map_Rule where dimension = '区县市' and Rule_name is null and Rule_id = " + subjectid;    	
	    }
	    try{
		    ResultSet rs=con.executeQuery(sql);
			rs.first();
			String sql_inner = rs.getString("Rule_sql");
			rs.close();                 
			/*第二层*/                 
			sql_inner = sql_inner.replaceAll("###",params);
			sql_inner = sql_inner + " order by 3 desc";
			ResultSet rs_inner=con.executeQuery("set ansi_warnings off;" + sql_inner + "; set ansi_warnings on;");
			rs_inner.beforeFirst();    
		    record.append("{'myData':["); 
			while(rs_inner.next()) 
			{
				if(rs_inner.isLast()){
					record.append("{city:'"+rs_inner.getString(1)+"',index:"+rs_inner.getString(3)+"}");
				}
				else{
					record.append("{city:'"+rs_inner.getString(1)+"',index:"+rs_inner.getString(3)+"},");
				}
			}
			record.append("]}");			
			rs_inner.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();	
	}	
	public String AllGridstorePage_for_CDCombination(String sql,String encryptiondbname,Integer numcolumnpoint,Integer start,Integer limit){		
        Des desObj = new Des();
        //System.out.println(encryptiondbname);
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";
        //System.out.println(dbname);
	  	Conn con = new Conn();		
		Integer total = 0;
		StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement majorInit_ps = null; 		
		try {
		  	if(sql.indexOf("@")<0){  		
		  		/*获取总的行数，为了分页用*/
		  		String ttInit_QQuery = "{call Proc_AllCDCGridstorePage_TotalCount_Init(?)}"; 
		  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
		  		ttInit_ps.setString(1,dbname);
		  		ttInit_ps.execute();		  				  
		  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
		  		ttInit_rs.last();
		  		total = ttInit_rs.getInt("total_num");
				ttInit_rs.close(); 
				ttInit_ps.close();
				/*主数据库*/
				String majorInit_QQuery = "{call Proc_AllCDCGridstorePage_Major_Init(?,?,?)}";
				majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
		  		majorInit_ps.setString(1,dbname);
		  		majorInit_ps.setInt(2,start);
		  		majorInit_ps.setInt(3,limit);
		  		majorInit_ps.execute();		  				  
		  		rs = majorInit_ps.getResultSet();
		  	}else{ 
		  	    /*sourceStrArray[0]：排序;sourceStrArray[1]：高级筛选;sourceStrArray[2]：自定义列;*/
				String[] sourceStrArray = sql.split("@");		
				String sql_str = "";
			    if(sourceStrArray[1].replace(" ","").length()>0){
			    	sql_str = " where " + sourceStrArray[1];
			    }
			    else{
			    	sql_str = " ";
			    }  				  		
		  		/*获取总的行数，为了分页用*/
		  		String ttInit_QQuery = "{call Proc_AllCDCGridstorePage_TotalCount_Adjust(?,?)}"; 
		  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
		  		ttInit_ps.setString(1,dbname);
		  		ttInit_ps.setString(2,sql_str);
		  		ttInit_ps.execute();		  				  
		  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
		  		ttInit_rs.last();
		  		total = ttInit_rs.getInt("total_num");
				ttInit_rs.close(); 
				ttInit_ps.close();				
				/*主数据库*/
		  	    if(limit > total){
		  	    	limit = total;
		  	    }
				String majorInit_QQuery = "{call Proc_AllCDCGridstorePage_Major_Adjust(?,?,?,?,?,?)}";
				majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
		  		majorInit_ps.setString(1,dbname);
		  		majorInit_ps.setString(2,sql_str);
		  		majorInit_ps.setString(3,sourceStrArray[0]);
		  		majorInit_ps.setString(4,sourceStrArray[2]);		  		
		  		majorInit_ps.setInt(5,start);
		  		majorInit_ps.setInt(6,limit);
		  		majorInit_ps.execute();		  				  
		  		rs = majorInit_ps.getResultSet();    	 
		  	}  	
			rs.last();
			int num=rs.getRow();	
			rs.beforeFirst();
			String[] lists = new String[num];
			int i=0;	
			String[] columnName = new String[100];
			String[] columnValue = new String[100];
			int k =0;
			while(rs.next()) 
			{   
				lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){			
					    if(k>=numcolumnpoint+1){
					    	if(columnName[k].indexOf("Disease_Name")>=0 || columnName[k].indexOf("Hop_Type")>=0)
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
					    }
					    else{
					    	if(columnValue[k] == null)
					    		lists[i] = lists[i]+columnName[k]+":'',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
						}
					}
					if(columnName[k].indexOf("Disease_Name")>=0 || columnName[k].indexOf("Hop_Type")>=0)
						lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":'"+columnValue[rs.getMetaData().getColumnCount()-1]+"'}";
					else
						lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";
			   	i++;
			}			
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}		
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(total);
			record.append(",");
			record.append("rows : [");
			if(limit > num){
				limit = num;
			}	
		 	for(int j=0;j<limit;j++){
				record.append(lists[j]);
				if(j < limit - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}");
			rs.close(); 
			if(majorInit_ps != null) majorInit_ps.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }finally{
	    	con.close();
	    }		
		return record.toString();  										
	}
	public String AllGridstoreGroupByPage_for_CDCombination(String sql,String encryptiondbname,Integer start,Integer limit){
        Des desObj = new Des();
        String dbname = "(" + desObj.strDec(encryptiondbname,"1","2","3") + ") as cdc_temp_inner";		
	  	Conn con = new Conn();
	  	Integer numberpoint = 0;
		String sql_inner_major = "";		
		Integer total = 0;
		StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement majorInit_ps = null; 	
		//System.out.println(sql);
		try {		
	  	    /*sourceStrArray[0]：排序;sourceStrArray[1]：高级筛选;sourceStrArray[2]：自定义列;sourceStrArray[3]：分类汇总;sourceStrArray[4]：分类汇总下的排序;sourceStrArray[5]：分类汇总下的筛选;*/
			String[] sourceStrArray = sql.split("@");
			/*主界面的筛选*/
			String sql_str = "";
		    if(sourceStrArray[1].replace(" ","").length()>0){
		    	sql_str = " where " + sourceStrArray[1];
		    }
		    else{
		    	sql_str = " ";
		    }  
			if(sourceStrArray[2].trim().length()>0){
				sql_inner_major = "select *," + sourceStrArray[2] + " from " + dbname +  sql_str; 
			}
			else{
				sql_inner_major = "select * from " + dbname +  sql_str; 
			}  	
			
			//System.out.println(sql_inner_major);
			
	  		/*获取总的行数，为了分页用*/
	  		String ttInit_QQuery = "{call Proc_AllCDCGridstoreGroupByPage_TotalCount_Adjust(?,?,?,?,?,?)}"; 
	  		PreparedStatement ttInit_ps = con.PreparedexecuteQuery(ttInit_QQuery);
	  		ttInit_ps.setString(1,dbname);
	  		ttInit_ps.setString(2,sql_str);
	  		ttInit_ps.setString(3,sourceStrArray[2]);
	  		ttInit_ps.setString(4,sourceStrArray[3]);
	  		ttInit_ps.setString(5,sourceStrArray[3].split(",")[0]);
	  		ttInit_ps.setString(6,sourceStrArray[5]);
	  		ttInit_ps.execute();		  				  
	  		ResultSet ttInit_rs = ttInit_ps.getResultSet();		  				  		
	  		ttInit_rs.last();
	  		total = ttInit_rs.getInt("total_num");
			ttInit_rs.close(); 
			ttInit_ps.close();		
			/*主数据库*/
	  	    if(limit > total){
	  	    	limit = total;
	  	    }
	  	    if(sourceStrArray[3].toLowerCase().indexOf("district")>=0) numberpoint = 5;
	  	    else if(sourceStrArray[3].toLowerCase().indexOf("city")>=0) numberpoint = 4;
	  	    else if(sourceStrArray[3].toLowerCase().indexOf("province")>=0) numberpoint = 3;
	  	    else numberpoint = 2;

			String majorInit_QQuery = "{call Proc_AllCDCGridstoreGroupByPage_Major_Adjust(?,?,?,?,?,?,?,?)}";
			majorInit_ps = con.PreparedexecuteQuery(majorInit_QQuery);
	  		majorInit_ps.setString(1,sql_inner_major);
	  		majorInit_ps.setString(2,sourceStrArray[2]);
	  		majorInit_ps.setString(3,sourceStrArray[3]);
	  		majorInit_ps.setString(4,sourceStrArray[3].split(",")[0]);
	  		majorInit_ps.setString(5,sourceStrArray[4]);
	  		majorInit_ps.setString(6,sourceStrArray[5]);
	  		majorInit_ps.setInt(7,start);
	  		majorInit_ps.setInt(8,limit);  		
	  		majorInit_ps.execute();		  				  
	  		rs = majorInit_ps.getResultSet();			
			rs.last();
			int num=rs.getRow();	
			rs.beforeFirst();
			String[] lists = new String[num];
			int i=0;	
			String[] columnName = new String[100];
			String[] columnValue = new String[100];		
			int k =0;
			while(rs.next()) 
			{   
				lists[i]= "{";
				for(k =0; k<rs.getMetaData().getColumnCount();k++){
					columnName[k] = rs.getMetaData().getColumnName(k+1);
					columnValue[k] = rs.getString(k+1);				
					}
					for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){			
					    if(k>=numberpoint){
					    	if(columnName[k].indexOf("Disease_Name")>=0 || columnName[k].indexOf("Hop_Type")>=0)
					    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
					    	else 
					    		lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
					    }
					    else{
							lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
						}
					}
					if(columnName[k].indexOf("Disease_Name")>=0 || columnName[k].indexOf("Hop_Type")>=0)
						lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":'"+columnValue[rs.getMetaData().getColumnCount()-1]+"'}";
					else
						lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";
			   	i++;
			}
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}		
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(total);
			record.append(",");
			record.append("rows : [");
			if(limit > num){
				limit = num;
			}	
		 	for(int j=0;j<limit;j++){
				record.append(lists[j]);
				if(j < limit - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}");
			rs.close();
			if(majorInit_ps != null) majorInit_ps.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }finally{
	    	con.close();
	    }			
	    //System.out.println(record.toString());
		return record.toString();  										
	}
	public String AllGridstore_for_doc(String sql,String dbname,Integer numcolumnpoint){
	   String databasename = dbname;	   
	   Conn con = new Conn();
	   StringBuffer record = new StringBuffer();
	   String[] params = sql.split("@"); 
	   ResultSet rs = null;
	   PreparedStatement ps = null;
	   try{
		   String QQuery = "{call Proc_AllGridstore_HopDepart(?,?,?,?)}"; 
		   ps = con.PreparedexecuteQuery(QQuery);
		   ps.setString(1,databasename);
		   ps.setString(2,params[0]);		
		   ps.setString(3,params[1]);		
		   ps.setString(4,params[2]);		
		   rs = ps.getResultSet();
		   rs.last();
		   int num=rs.getRow();
		   rs.beforeFirst();
		   String[] lists = new String[num];
		   int i=0;
		   String[] columnName = new String[100];
		   String[] columnValue = new String[100];
		   int k =0;
		   while(rs.next()) 
		   {   
		   	lists[i]= "{";
			 for(k =0; k<rs.getMetaData().getColumnCount();k++){
			 	columnName[k] = rs.getMetaData().getColumnName(k+1);
			 	columnValue[k] = rs.getString(k+1);				
			 }
			 for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				 if(k>=numcolumnpoint)
			     	lists[i] = lists[i]+columnName[k]+":"+columnValue[k]+",";
				 else
					lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
			 }
			 	lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";
		     	
		    	i++;
		   }
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(num);
			record.append(",");
			record.append("rows : [");
		 	for(int j = 0 ; j <num; j++){
				record.append(lists[j]);
				if(j < num - 1){
					record.append(",");
				}
			};
			record.append("]");
			record.append("}");			
			rs.close();
			ps = null;
			ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();								
	}
	public String AllGridstore_for_doclist(String sql,String dbname){
		   String databasename = dbname;	   
		   Conn con = new Conn();
		   StringBuffer record = new StringBuffer();
		   String[] params = sql.split("@"); 
		   ResultSet rs = null;
		   PreparedStatement ps = null;		   
		   try{
			   String QQuery = "{call Proc_AllGridstore_HopDepartDoclist(?,?,?,?)}"; 
			   ps = con.PreparedexecuteQuery(QQuery);
			   ps.setString(1,databasename);
			   ps.setString(2,params[0]);		
			   ps.setString(3,params[1]);		
			   ps.setString(4,params[2]);	
			   ps.setString(5,params[3]);
			   ps.setString(6,params[4]);
			   rs = ps.getResultSet();			   
			   rs.last();
			   int num=rs.getRow();
			   rs.beforeFirst();
			   String[] lists = new String[num];
			   int i=0;
			   String[] columnName = new String[100];
			   String[] columnValue = new String[100];
			   int k =0;
			   while(rs.next()) 
			   {   
			   	lists[i]= "{";
				 for(k =0; k<rs.getMetaData().getColumnCount();k++){
				 	columnName[k] = rs.getMetaData().getColumnName(k+1);
				 	columnValue[k] = rs.getString(k+1);				
				 }
				 for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				     	lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
				 }
				 	lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":'"+columnValue[rs.getMetaData().getColumnCount()-1]+"'}";
			     	
			    	i++;
			   }
				record.append("{"); 
				record.append("metaData : {totalProperty: 'results',");
				record.append("root: 'rows',");
				record.append("id: 'id' ,");
				record.append("fields : [");
				for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
					record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
				}
				record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
				record.append("]},");
				record.append("results :");
				record.append(num);
				record.append(",");
				record.append("rows : [");
			 	for(int j = 0 ; j <num; j++){
					record.append(lists[j]);
					if(j < num - 1){
						record.append(",");
					}
				};
				record.append("]");
				record.append("}");				
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return record.toString();								
		}
	public String AllBasicGridstore(String sql){   
		   Conn con = new Conn();
		   StringBuffer record = new StringBuffer();
		   try{
			   ResultSet rs=con.executeQuery("set ansi_warnings off;" + sql + "; set ansi_warnings on;");
			   rs.last();
			   int num=rs.getRow();
			   rs.beforeFirst();
			   String[] lists = new String[num];
			   int i=0;
			   String[] columnName = new String[100];
			   String[] columnValue = new String[100];
			   int k =0;
			   while(rs.next()) 
			   {   
			   	lists[i]= "{";
				 for(k =0; k<rs.getMetaData().getColumnCount();k++){
				 	columnName[k] = rs.getMetaData().getColumnName(k+1);
				 	columnValue[k] = rs.getString(k+1);				
				 }
				 for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
					 lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";
				 }
				 	lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";			     	
			    	i++;
			   }
				record.append("{"); 
				record.append("metaData : {totalProperty: 'results',");
				record.append("root: 'rows',");
				record.append("id: 'id' ,");
				record.append("fields : [");
				for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
					record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
				}
				record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
				record.append("]},");
				record.append("results :");
				record.append(num);
				record.append(",");
				record.append("rows : [");
			 	for(int j = 0 ; j <num; j++){
					record.append(lists[j]);
					if(j < num - 1){
						record.append(",");
					}
				};
				record.append("]");
				record.append("}");			
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return record.toString();								
		}
	public String AllBasicGridstorePage(String sql,Integer start,Integer limit){   
	   Conn con = new Conn();
	   StringBuffer record = new StringBuffer();
	   try{
		   ResultSet rs=con.executeQuery("set ansi_warnings off;" + sql + "; set ansi_warnings on;");
		   rs.last();
		   int num=rs.getRow();
		   rs.beforeFirst();
		   String[] lists = new String[num];
		   int i=0;
		   String[] columnName = new String[100];
		   String[] columnValue = new String[100];
		   int k =0;
		   while(rs.next()) 
		   {   
		   	lists[i]= "{";
			 for(k =0; k<rs.getMetaData().getColumnCount();k++){
			 	columnName[k] = rs.getMetaData().getColumnName(k+1);
			 	columnValue[k] = rs.getString(k+1);				
			 }
			 for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
			    	if(columnValue[k] == null)
			    		lists[i] = lists[i]+columnName[k]+":'',";
			    	else 
			    		lists[i] = lists[i]+columnName[k]+":'"+columnValue[k]+"',";				 
			 }
			 	lists[i] = lists[i]+columnName[rs.getMetaData().getColumnCount()-1]+":"+columnValue[rs.getMetaData().getColumnCount()-1]+"}";			     	
		    	i++;
		   }
			record.append("{"); 
			record.append("metaData : {totalProperty: 'results',");
			record.append("root: 'rows',");
			record.append("id: 'id' ,");
			record.append("fields : [");
			for(k =0; k<rs.getMetaData().getColumnCount()-1;k++){
				record.append("{name: '"+rs.getMetaData().getColumnName(k+1)+"'},");
			}
			record.append("{name: '"+rs.getMetaData().getColumnName(rs.getMetaData().getColumnCount())+"'}");					  
			record.append("]},");
			record.append("results :");
			record.append(num);
			record.append(",");
			record.append("rows : [");
			int length = start + limit;
			if(length > num){
				length = num;
			}				
		 	for(int j =start;j<length;j++){
				record.append(lists[j]);
				if(j < length - 1){
					record.append(",");
				}
			}
			record.append("]");
			record.append("}");			
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		//System.out.println(record.toString());
		return record.toString();								
	}
	
	
	public String GetsinglcompanyInfo(String company,String industrycode){
        Conn conn = new Conn();
        String result = "";               
        try {
    		String strSql="select dbo.getCompanyInfo('"+company+"','"+industrycode+"')";
			ResultSet rs=conn.executeQuery(strSql);
			if(rs.next()){
				result = rs.getString(1);
			}
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }	
        return result;
	}	
	
	public String GetsingleppcompanyInfo(String company){
        Conn conn = new Conn();
        String result = "";               
        try {
    		String strSql="select dbo.getPPCompanyInfo('"+company+"')";
			ResultSet rs=conn.executeQuery(strSql);
			if(rs.next()){
				result = rs.getString(1);
			}
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }	
        return result;
	}

	
	public String GetSinglePPCompanyPatents(String company){
        Conn conn = new Conn();
        String headercss = " style='cellspacing:0;cellpadding:2;text-align:center;margin:1px;width:99.99%;font-size:12px;' ";
        String titlecss = " style='font-size:14px;font-weight:bold;text-align:center;border-bottom:2px solid;background-color:#99bbe8;color:#FFFFFF;' ";
//        String titlecss_datetime = " style='width:0%;font-size:14px;font-weight:bold;text-align:center;border-bottom:2px solid;background-color:#99bbe8;color:#FFFFFF;' ";
        String contentcss = " style='border-bottom:0px dashed #3C3C3C;background-color:#FBFBFF;' ";
        String header = " <table" + headercss +">";
        String title = " <tr><td"+titlecss+">专利时间</td><td "+titlecss+">专利名称</td><td "+titlecss+">申请号</td><td "+titlecss+">申请公布号</td>";
        String tailer = "</table>";
        String firstlayer = "";
        String content = "";
        String result = "";  
        Integer flag = 0;
        try {
        	String strSql="SELECT zlsj,zlmc,zlh,zlgbh FROM ppcompanyPatents_DataSet WHERE dwmc1 = ? ORDER BY zlsj DESC";
	  		PreparedStatement ps = conn.PreparedexecuteQuery(strSql);
	  		ps.setString(1,company);
	  		ps.execute();	  	  				  
	  		ResultSet rs = ps.getResultSet();	  		    		
			while(rs.next()){	
				flag = 1;
				firstlayer = "<tr><td"+contentcss+">"+rs.getString(1).split(" ")[0]+"</td><td"+contentcss+">"+rs.getString(2)+"</td><td"+contentcss+">"+rs.getString(3)+"</td><td"+contentcss+">"+rs.getString(4)+"</td></tr>";	
				content = content + firstlayer;
			}
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        if(flag == 1)
        	result = header + title + content +tailer;
        else 
        	result = "";
        return result;
	}
	
	public String GetSinglePPCompanyInfo(Integer year,String company){
        Conn conn = new Conn();
        String result = "";               
        try {
    		String strSql="select dbo.getPPCompanyInfoCombine("+year+",'"+company+"')";
			ResultSet rs=conn.executeQuery(strSql);
			if(rs.next()){
				result = rs.getString(1);
			}
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        String patents = GetSinglePPCompanyPatents(company);
//        System.out.println(patents);
        result = result + "^" + patents;
        return result;
	}	
	
	
}
