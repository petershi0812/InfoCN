package com.cdatacombination;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.Conn;
import com.encryption.Des;

public class CDCombination {
	public String GetCombinationGridData(String username){   
		Conn con = new Conn();
	    StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement ps = null;  
	    try{
	    	String QQuery = "{call Proc_GetCombinationDB(?)}"; 
	  		ps = con.PreparedexecuteQuery(QQuery);
	  		ps.setString(1,username);
	  		ps.execute();		  				  
	  		rs = ps.getResultSet();	
		    rs.beforeFirst();
		    record.append("{records:[");
		    while(rs.next()) 
		    {   
		    	if(rs.isLast()){
		    		record.append("{name : '"+rs.getString(1)+"',dimension:'"+rs.getString(2)+"',ref_name : '"+rs.getString(3)+"',sortflag:"+rs.getString(4)+",fieldstr_point:"+rs.getString(5)+",dbname:'"+rs.getString(6)+"'}");
		    	}
		    	else{
		    		record.append("{name : '"+rs.getString(1)+"',dimension:'"+rs.getString(2)+"',ref_name : '"+rs.getString(3)+"',sortflag:"+rs.getString(4)+",fieldstr_point:"+rs.getString(5)+",dbname:'"+rs.getString(6)+"'},");		    		
		    	}
		    }			
			record.append("]}");			
			rs.close();
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        } 
		return record.toString();								
	}
	public String GetAdvKWSearchCombinationData(String username,String findstr){   
		Conn con = new Conn();
	    StringBuffer record = new StringBuffer();
		ResultSet rs = null;
		PreparedStatement ps = null;  
	    try{
	    	String QQuery = "{call Proc_GetAdvKWSearchCombinationData(?,?)}"; 
	  		ps = con.PreparedexecuteQuery(QQuery);
	  		ps.setString(1,username);
	  		ps.setString(2,findstr);
	  		ps.execute();		  				  
	  		rs = ps.getResultSet();	
		    rs.beforeFirst();
		    record.append("{records:[");
		    while(rs.next()) 
		    {   
		    	if(rs.isLast()){
		    		record.append("{name : '"+rs.getString(1)+"',dimension:'"+rs.getString(2)+"',ref_name : '"+rs.getString(3)+"',sortflag:"+rs.getString(4)+",fieldstr_point:"+rs.getString(5)+",dbname:'"+rs.getString(6)+"'}");
		    	}
		    	else{
		    		record.append("{name : '"+rs.getString(1)+"',dimension:'"+rs.getString(2)+"',ref_name : '"+rs.getString(3)+"',sortflag:"+rs.getString(4)+",fieldstr_point:"+rs.getString(5)+",dbname:'"+rs.getString(6)+"'},");		    		
		    	}
		    }			
			record.append("]}");			
			rs.close();
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        } 
		return record.toString();								
	}
		
	public String Return_CDCombinationSql(String username,String dbname,String fields,String dimension){ 	
	    String sql_major = "";
	    String sql_title = "",sql_mid = "";
	    String sql_pre_post = "",sql_post = "",sql_pre = "";
	    String[] dbnameArray;
	    String[] fieldsArray;	
	    String[] columnArray;
        Conn conn = new Conn();
        String splitStr = ""; 
        try {            
            String sql = "SELECT * FROM dbo.getVirtualDBtoRealDB(?,?)";           	
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, dbname);
            ps.setString(2, "@");       
            ResultSet rs = ps.executeQuery();
            while(rs.next()){ 
            	if(rs.isLast())
            		splitStr = splitStr + rs.getString(1);
            	else
            		splitStr = splitStr + rs.getString(1) + "@";
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }	   
        //System.out.println(splitStr);
	    //维度
		if(dimension.equals("中国")){
			sql_title = " a1.year_id, ";	
		}	    
		else if(dimension.equals("省份")){
			sql_title = " a1.year_id,a1.province, ";	
		}
		else if(dimension.equals("地级市")){
			sql_title = " a1.year_id,a1.admincode,a1.province,a1.city, ";
		}
		else if(dimension.equals("区县市")){
			sql_title = " a1.year_id,a1.admincode,a1.province,a1.city,a1.district, ";
		}
		//表join部分
    	dbnameArray = splitStr.split("@");    	
    	sql_pre = dbnameArray[0]+" as a1";
		if(dimension.equals("中国")){	
	    	for(int i = 1 ;i<dbnameArray.length;i++){	    		
	    		sql_post = sql_post + " join " + dbnameArray[i] + " as a"+(i+1)+" on a1.year_id = a"+(i+1)+".year_id";
	    	}
		}
		else{
	    	for(int i = 1 ;i<dbnameArray.length;i++){
	    		if(dbnameArray[0].equals("hpcmszbytypedistrict") && dbnameArray[1].equals("hpcmzlbytypedistrict")){
	    			sql_post = sql_post + " join " + dbnameArray[i]+" as a"+(i+1)+" on a1.AdminCode = a"+(i+1)+".AdminCode and a1.year_id = a"+(i+1)+".year_id and a1.Hop_Type = a"+(i+1)+".Hop_Type";
	    		}	    		
	    		else{
	    			if(dbnameArray[i-1].equals("hpcmszbytypedistrict") && dbnameArray[i].equals("hpcmzlbytypedistrict")){
	    				sql_post = sql_post + " join " + dbnameArray[i] + " as a"+(i+1)+" on a"+(i)+".AdminCode = a"+(i+1)+".AdminCode and a"+(i)+".year_id = a"+(i+1)+".year_id and a"+(i)+".Hop_Type = a"+(i+1)+".Hop_Type";
	    			}
	    			else{
	    				sql_post = sql_post + " join " + dbnameArray[i] + " as a"+(i+1)+" on a1.AdminCode = a"+(i+1)+".AdminCode and a1.year_id = a"+(i+1)+".year_id";	    				
	    			}
	    		}
	    	}
		}
    	sql_pre_post = sql_pre  + sql_post;
    	//选择列部分
    	fieldsArray = fields.split("@");
    	for(int i = 0 ;i<=fieldsArray.length-1;i++){
    		if(fieldsArray[i].indexOf("+")>=0){
    			columnArray = fieldsArray[i].split("\\+");
    			for(int j=0;j<=columnArray.length-1;j++){
    				sql_mid = sql_mid + "a"+(i+1)+"." + columnArray[j] +" as "+ columnArray[j] + "_" + (i+1) + ",";
    			}
    		}
    		else{
    			sql_mid = sql_mid + "a"+(i+1)+"." + fieldsArray[i] +" as "+ fieldsArray[i] + "_" + (i+1) + ",";
    		}    		
    	}
    	sql_mid = sql_mid.substring(0,sql_mid.length()-1);    	 
    	//合并几块数据
    	sql_major = "select " + sql_title + sql_mid + " from " + sql_pre_post; 
    	//获取条件
    	String conditionSql = "";
    	
        try {         	
            String sql = "SELECT DBO.getSheetRightsConditionSQL(?,?)";           	
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, dbname);       
            ResultSet rs = ps.executeQuery();
            while(rs.next()){ 
            	conditionSql = rs.getString(1);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }        
        String finalsql = "";
        finalsql = sql_major + conditionSql;        
        //System.out.println(finalsql);
    	Des desObj = new Des();
		return desObj.strEnc(finalsql,"1","2","3");  
    }	
}
