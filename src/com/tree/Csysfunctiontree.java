package com.tree;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.dao.*;

public class Csysfunctiontree {
	/***********��ʼҳ����صĺ���********/
	/***************************
     * %% getResultByRootId: �������ݿ�
     * %% getResultByEmergingIndustryRootId��Deprecated��: ������ҵ
     * %% getResultByAnnualHotIndustryRootId��Deprecated��: ����ȵ���ҵ
     * %% getResultByAnalysisRootId: ���ݷ�����
     * %% getResultByReportRootId: ����������ҵ�����о�
     * %% getResultByInsightRootId: ���Ƕ���
     * %% getResultByDiseaseRootId: ����
     * %% getResultSearchingByRootId: �������ݿ�����ѯ
     * %% getResultEmergingIndustrySearchingByRootId��Deprecated��: ������ҵ�ȵ��ѯ
     * %% getResultAnnualHotIndustrySearchingByRootId��Deprecated��: ����ȵ���ҵ�ȵ��ѯ
     * %% getResultByTransferRootId��Deprecated��: �л�ʡ��
     * %% getResultBySysManagementRootId: ϵͳ����
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
		
	/***********Ȩ��������صĺ���********/
	/***************************
     * %% getResultByRootIdOfSysRights: �������ݿ�Ȩ��
     * %% getResultByEmergingIndustryRootIdOfSysRights: ������ҵȨ��
     * %% getResultByAnnualHotIndustryRootIdOfSysRights: ����ȵ���ҵȨ��
     * %% getResultByAnalysisRootIdOfSysRights: ���ݷ�����Ȩ��
     * %% getResultByReportRootIdOfSysRights: ����������ҵ�����о�Ȩ��
     * %% getResultByInsightRootIdOfSysRights: ���Ƕ���Ȩ��
     * %% getResultByDiseaseRootIdOfSysRights: ����Ȩ��
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
	
    /*��ȡmapȨ�޵����*/
	public  String getmaptreeOfSysRights(String sql){ 
		Conn conn = new Conn();
		StringBuffer record = new StringBuffer();
		record.append("[{'text':'���','expanded':true,'children':[");
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
