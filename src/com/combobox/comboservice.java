package com.combobox;
import java.sql.*;

import com.dao.*;
public class comboservice {
    public String getComboResult(String sql, String variable){    	
    	Conn con = new Conn();
    	String s1,s2="";
    	StringBuffer record = new StringBuffer();
    	try {
	    	ResultSet rs = con.executeQuery(sql);
	    	int j=1;
	    	while(rs.next()) {	    		
	    		s1=rs.getString(variable);
	    		if(j>1){record.append(",");	}
	    	    s2="['"+s1+"']";
	    		record.append(s2);
	    		j++;    			
	    	 }
	    	rs.close();
	    	rs = null; 	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }    	
        return record.toString();        
    } 
}
