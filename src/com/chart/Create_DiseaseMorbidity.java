package com.chart;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.Conn;

public class Create_DiseaseMorbidity {
	public String Create_DiseaseMorbidity_City(String sql){ 
	  	Conn con = new Conn();		
	    String sql_major = "";	 
	    sql_major = "select a.City,isnull(cast(a.Discharged_Patients/b.Year_end_Population*10 as decimal(18,0)),0) from Disease_database as a join NBS_POPandGDP_City as b on a.Year_id = b.year_id and a.admincode = b.admincode join (select  Code_City,city from AdminCode_MOH where Important_City = 1 group by Code_City,city) as c on a.AdminCode = c.Code_City  where Link = " + sql ;
		//System.out.println("Target-" + sql_major); 
		StringBuffer record = new StringBuffer();
		float disease_sum = 0;
		try{
			ResultSet rs=con.executeQuery("set ansi_warnings off;" + sql_major + "; set ansi_warnings on;");	
			rs.beforeFirst();	
			record.append("([");
			while(rs.next()) 
			{		
			   if(rs.isLast()){
			   	 	record.append("{'name': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'}");
			   }
			   else{
					record.append("{'name': '"+rs.getString(1)+"','value': '"+rs.getString(2)+"'},");
			   }
			   
			   if(disease_sum<=Float.parseFloat(rs.getString(2))){
				   disease_sum = Float.parseFloat(rs.getString(2));
			   }		  
			}
			record.append("])");
			record.append("@"+String.valueOf(disease_sum));
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
