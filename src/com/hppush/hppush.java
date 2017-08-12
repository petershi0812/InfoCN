package com.hppush;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.*;

public class hppush {
	public  String ajaxpushmapinfo(String subjectid){ 
	  Conn con = new Conn();
	  StringBuffer record = new StringBuffer();
	  try{
		  String sql = "select * from Map_Rule where dimension = '省份' and Rule_id = " + subjectid;
		  ResultSet rs=con.executeQuery(sql);
		  rs.first();
		  String sql_inner = rs.getString("Rule_sql");
		  String map_name = rs.getString("Rule_name");
		  rs.close();
		  ResultSet rs_inner=con.executeQuery(sql_inner);
		  rs_inner.last();
		  int num=rs_inner.getRow();
		  rs_inner.beforeFirst(); 
		  record.append(map_name + "{");
		  while(rs_inner.next()) {     	
		  	if(rs_inner.getRow() == num){
			  	record.append("'"+rs_inner.getString(1)+"':{'value':'"+rs_inner.getString(2)+"','index':'"+rs_inner.getString(3)+"','stateInitColor':'"+rs_inner.getString(4)+"','Province':'"+rs_inner.getString(1)+"'}");
		  	}
		  	else{
		  		record.append("'"+rs_inner.getString(1)+"':{'value':'"+rs_inner.getString(2)+"','index':'"+rs_inner.getString(3)+"','stateInitColor':'"+rs_inner.getString(4)+"','Province':'"+rs_inner.getString(1)+"'},");
		  	}
		  } 
		  record.append("}");  		  
		  rs_inner.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }
		return record.toString();
    }
	public  String ajaxpush_city(String province,String subjectid){ 
      Conn con = new Conn();
      StringBuffer record = new StringBuffer();
      String sql = "";
      String province_short = "";
      float resultmax = 0;
      float resultmin = 999999999;
      /*第一层*/
      if(province.equals("shanghai") || province.equals("chongqing") || province.equals("beijing") || province.equals("tianjin")){
    	  sql = "select Rule_sql from Map_Rule where dimension = '地级市' and Rule_name = '直辖市' and Rule_id = " + subjectid;
      }
      else{
    	  sql = "select Rule_sql from Map_Rule where dimension = '地级市' and Rule_name is null and Rule_id = " + subjectid;
      }
      try{
	      ResultSet rs=con.executeQuery(sql);
		  rs.first();
		  String sql_inner = rs.getString("Rule_sql");
		  rs.close();
		  /*第二层*/
		  sql_inner = sql_inner.replaceAll("###",province);
		  ResultSet rs_inner=con.executeQuery("set ansi_warnings off;" + sql_inner + "; set ansi_warnings on;");
		  rs_inner.beforeFirst();    
		  record.append("[");
		  while(rs_inner.next()) { 		  
			  if(rs_inner.isLast()){
				  province_short = rs_inner.getString(2);
				  record.append("{name:'"+rs_inner.getString(1)+"',value:"+rs_inner.getString(3)+"}");
			  }
			  else{
			  	  record.append("{name:'"+rs_inner.getString(1)+"',value:"+rs_inner.getString(3)+"},");
			  }
			  if(resultmax<=Float.parseFloat(rs_inner.getString(3))){
				  resultmax = Float.parseFloat(rs_inner.getString(3));
			  }
			  if(resultmin>=Float.parseFloat(rs_inner.getString(3))){
				  resultmin = Float.parseFloat(rs_inner.getString(3));
			  }
		  } 
		  record.append("]@");
		  record.append(province_short);
		  record.append("@");
		  record.append(resultmax);
		  record.append("@");
		  record.append(resultmin);		  
		  rs_inner.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			con.close();            
        }		
		return record.toString();		  
	}
	public  String ajaxpushindustryinfo(String industrycode){ 
		  Conn con = new Conn();
		  String result="";
		  try{
				String strSql="select dbo.getPushIndustryInfo('" + industrycode +"')"; 
				ResultSet rs=con.executeQuery(strSql);
				rs.next();
				result = rs.getString(1);	
				rs.close();				  				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return result;
	 }
	public  String ajaxdetailedindustryinfo(String treeid,String industrycode){ 
		  Conn con = new Conn();
		  String result="";
		  try{
				String strSql="select dbo.getDetailedIndustryJson('" + industrycode +"')"; 
				ResultSet rs=con.executeQuery(strSql);
				rs.next();
				result = rs.getString(1);	
				rs.close();				  				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return result;
	 }
	public  String ajaxrankindustryinfo(String treeid,String pagecode){ 
		  Conn con = new Conn();
		  String result="";
		  try{
				String strSql="select dbo.getRankIndustryJson('" + pagecode +"')"; 
				ResultSet rs=con.executeQuery(strSql);
				rs.next();
				result = rs.getString(1);	
				rs.close();				  				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return result;
	 }
	public  String ajaxthreerankindustryinfo(String treeid,String pagecode){ 
		  Conn con = new Conn();
		  String result="";
		  try{
				String strSql="select dbo.getThreeRankIndustryJson('" + pagecode +"')"; 
				ResultSet rs=con.executeQuery(strSql);
				rs.next();
				result = rs.getString(1);	
				rs.close();				  				
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				con.close();            
	        }
			return result;
	 }	
}
