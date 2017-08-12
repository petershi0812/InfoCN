package com.tree;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.*;

public class Csysfunctiontree {
	/***********初始页面相关的函数********/
	/***************************
     * %% getResultByRootId: 基础数据库
     * %% getResultByEmergingIndustryRootId【Deprecated】: 新兴行业
     * %% getResultByAnnualHotIndustryRootId【Deprecated】: 年度热点行业
     * %% getResultByAnalysisRootId: 数据分析区
     * %% getResultByReportRootId: 治疗领域行业分析研究
     * %% getResultByInsightRootId: 鉴智洞察
     * %% getResultByDiseaseRootId: 疾病
     * %% getResultSearchingByRootId: 基础数据库树查询
     * %% getResultEmergingIndustrySearchingByRootId【Deprecated】: 新兴行业热点查询
     * %% getResultAnnualHotIndustrySearchingByRootId【Deprecated】: 年度热点行业热点查询
     * %% getResultByTransferRootId【Deprecated】: 切换省份
     * %% getResultBySysManagementRootId: 系统管理
     ****************************/	
	public  String getResultByRootId(String rootCode,String account,String treeId){ 		
		Conn conn = new Conn();
		String result="";
		String strSql="";
		try{
			if(treeId.equals("1"))
				strSql="select dbo.getResultByRootId('" + rootCode + "','"+account+"','" + treeId + "')";
			else if(treeId.equals("11"))
				strSql="select dbo.getResultByEmergingIndustryRootId('" + rootCode + "','"+account+"','" + treeId + "')";
			else if(treeId.equals("999"))
				strSql="select dbo.getResultByAnnualHotIndustryRootId('" + rootCode + "','"+account+"','" + treeId + "')";			
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByEmergingIndustryRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByEmergingIndustryRootId('" + rootCode + "','"+account+"','" + treeId + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByAnnualHotIndustryRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByAnnualHotIndustryRootId('" + rootCode + "','"+account+"','" + treeId + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }	
	public  String getResultByDiseaseRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{ 
			String strSql="select dbo.getResultByDiseaseRootId('" + rootCode + "','"+account+"','" + treeId + "')";  
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }	
	public  String getResultByAnalysisRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByAnalysisRootId('" + rootCode + "','"+account+"','" + treeId + "')";    
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByReportRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{			
			String strSql="select dbo.getResultByReportRootId('" + rootCode + "','"+account+"','" + treeId + "')";   
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByInsightRootId(String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByInsightRootId('" + rootCode + "','"+account+"','" + treeId + "')";  
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByTransferRootId(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByTransferRootId('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultSearchingByRootId(String findStr,String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		String strSql="";
		try{			
			if(treeId.equals("1"))
				strSql="select dbo.getResultByDistionaryRootId('"+findStr+"','" + rootCode + "','" + account + "','" + treeId + "')";
			else if(treeId.equals("11"))
				strSql="select dbo.getResultEmergingIndustryByDistionaryRootId('"+findStr+"','" + rootCode + "','" + account + "','" + treeId + "')";
			else if(treeId.equals("999"))
				strSql="select dbo.getResultAnnualHotIndustryByDistionaryRootId('"+findStr+"','" + rootCode + "','" + account + "','" + treeId + "')";					
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultEmergingIndustrySearchingByRootId(String findStr,String rootCode,String account,String treeId){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultEmergingIndustryByDistionaryRootId('"+findStr+"','" + rootCode + "','" + account + "','" + treeId + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }	
	public  String getResultBySysManagementRootId(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultBySysManagementRootId('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        } 
		return result;  
    }
		
	/***********权限设置相关的函数********/
	/***************************
     * %% getResultByRootIdOfSysRights: 基础数据库权限
     * %% getResultByEmergingIndustryRootIdOfSysRights: 新兴行业权限
     * %% getResultByAnnualHotIndustryRootIdOfSysRights: 年度热点行业权限
     * %% getResultByAnalysisRootIdOfSysRights: 数据分析区权限
     * %% getResultByReportRootIdOfSysRights: 治疗领域行业分析研究权限
     * %% getResultByInsightRootIdOfSysRights: 鉴智洞察权限
     * %% getResultByDiseaseRootIdOfSysRights: 疾病权限
     ****************************/	
	public  String getResultByRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByEmergingIndustryRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByEmergingIndustryRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public String getResultByAnnualHotIndustryRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByAnnualHotIndustryRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }	
	public  String getResultByAnalysisRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByAnalysisRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }	
	public  String getResultByReportRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByReportRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByInsightRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByInsightRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	public  String getResultByDiseaseRootIdOfSysRights(String rootCode){ 
		Conn conn = new Conn();
		String result="";
		try{
			String strSql="select dbo.getResultByDiseaseRootIdOfSysRights('" + rootCode + "')"; 
			ResultSet rs=conn.executeQuery(strSql);
			rs.next();
			result=rs.getString(1);	
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			conn.close();            
        }
		return result;  
    }
	
    /*获取map权限的年份*/
	public  String getmaptreeOfSysRights(String sql){ 
		Conn conn = new Conn();
		StringBuffer record = new StringBuffer();
		record.append("[{'text':'年份','expanded':true,'children':[");
		try{
			//String strSql="SELECT distinct YEAR_ID FROM Map_Rule order by 1 desc"; 
			ResultSet rs=conn.executeQuery(sql);
			while(rs.next()){
				if(rs.isLast())					
					record.append("{'text':'"+rs.getString(1)+"','leaf':true,'iconCls':'tree_level'}");
				else
					record.append("{'text':'"+rs.getString(1)+"','leaf':true,'iconCls':'tree_level'},");
			}
			rs.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
            conn.close();
        }
		record.append("]}]");	
		return record.toString();  
    }	
		
	
	
}
