package com.rights;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import com.dao.Conn;
import com.util.util;

import java.util.Date;
import java.util.TimeZone;
import java.text.SimpleDateFormat;

public class RightsDao {
    public String GetRightsNode(String treeid, String useid){
        Conn conn = new Conn();
        String rightnode = "";
        String sql = "SELECT RightNode_id FROM Sys_Rights where TreeId = ? and Account_Id = ? ";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, treeid);
            ps.setString(2, useid);        
            ResultSet rs = ps.executeQuery();
            if(rs.next()){            	
            	rightnode = rs.getString("RightNode_id");
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return rightnode;
    }
    public boolean IsExistsRights(String useid,String treeid){
        Conn conn = new Conn();
        String sql = "SELECT * FROM Sys_Rights WHERE Account_Id = ? and TreeId = ?";        	
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql); 
            ps.setString(1, useid);
            ps.setString(2, treeid);          
            ResultSet rs = ps.executeQuery();
            if(rs.next()){            	
            	return true;        	
            }
            rs.close();
            ps.close();            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();            
        }
        return false;
    }
    public boolean IsExistsYearInitRights(String username){
        Conn conn = new Conn();
        String sql = "SELECT A.* FROM Sys_Account AS A JOIN Sys_Rights AS B ON A.ID = B.Account_Id WHERE A.Account = ?";        	
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql); 
            ps.setString(1, username);                   
            ResultSet rs = ps.executeQuery();
            if(rs.next()){            	
            	return false;        	
            }
            rs.close();
            ps.close();            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();            
        }
        return true;
    } 
    /*
    public boolean IsYearInitRights(String usename){
    	String isyearinitrights = "";
        Conn conn = new Conn();
        String sql = "SELECT IsInitYearRights FROM Sys_Account WHERE Account = ?";        	
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql); 
            ps.setString(1, usename);        
            ResultSet rs = ps.executeQuery();
            if(rs.next()){            	
            	isyearinitrights = rs.getString("IsInitYearRights");       	
            }
            rs.close();
            ps.close();            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();            
        }
        if(isyearinitrights.equals("0"))
        	return false;
        else
        	return true;
    } */
    public void SaveYearInitRights(String username,String yearid,String treeid,String leastparentnodeid){
        Conn conn = new Conn();
        PreparedStatement ps = null;         
        try {
//        	System.out.println(username);
//        	System.out.println(yearid);
//        	System.out.println(treeid);
//        	System.out.println(leastparentnodeid);        	
    		String majorInit_QQuery = "{call Proc_YearInitRights(?,?,?,?)}";
    		ps = conn.PreparedexecuteQuery(majorInit_QQuery);
    		ps.setString(1,username);
    		ps.setString(2,yearid);
    		ps.setString(3,treeid);
    		ps.setString(4,leastparentnodeid);
    		ps.executeUpdate();	
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }
    public int SaveTopNRights(String username,String treeid,String topnrights,String leastparentnodeid){
        Conn conn = new Conn();
        PreparedStatement ps = null;  
        int flag = 0;
        try {
    		String majorInit_QQuery = "{call Proc_TopNRights(?,?,?,?)}";
    		ps = conn.PreparedexecuteQuery(majorInit_QQuery);
    		ps.setString(1,username);
    		ps.setString(2,treeid);
    		ps.setString(3,topnrights);
    		ps.setString(4,leastparentnodeid);
    		flag = ps.executeUpdate();	
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{        	
            conn.close();            
        }
        return flag;
    } 
    public int SavePagesRights(String username,String treeid,String pagesrights,String leastparentnodeid){
        Conn conn = new Conn();
        PreparedStatement ps = null;  
        int flag = 0;
        try {
    		String majorInit_QQuery = "{call Proc_PagesRights(?,?,?,?)}";
    		ps = conn.PreparedexecuteQuery(majorInit_QQuery);
    		ps.setString(1,username);
    		ps.setString(2,treeid);
    		ps.setString(3,pagesrights);
    		ps.setString(4,leastparentnodeid);
    		flag = ps.executeUpdate();	
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{        	
            conn.close();            
        }
        return flag;
    }     
    public void SaveInitialYearRights(String username,String yearid,String treeid,String leastparentnodeid){
        Conn conn = new Conn();
        PreparedStatement ps = null;  		       
        try {
    		String majorInit_QQuery = "{call Proc_InitialYearRights(?,?,?,?)}";
    		ps = conn.PreparedexecuteQuery(majorInit_QQuery);
    		ps.setString(1,username);
    		ps.setString(2,yearid);
    		ps.setString(3,treeid);
    		ps.setString(4,leastparentnodeid);
    		ps.executeUpdate();	
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }    
    
    public void NewRights(String treeid, String useid,String rights){
        Conn conn = new Conn();
        String sql = "";
        if(treeid.equals("10")){
	        sql = 
        		"INSERT INTO Sys_Rights VALUES(?,?,?);" +
        		"INSERT INTO Sys_SheetRights SELECT a.Account_Id,a.TreeId,b.SheetNodeId,b.DiseaseNodeId,b.SheetRights,b.YearInitRights,b.YearRights,b.ACProvinceRights,b.ACCityRights,b.ACDistrictRights FROM Sys_Rights as a join Sys_InitSheetRights as b on a.TreeId = b.TreeId and a.TreeID = ? and SheetNodeId = 'data_a5b1' and a.Account_Id = ? and CHARINDEX(b.DiseaseNodeId+'|',RightNode_id)>0";
        }
        else{
	        sql = 
        		"INSERT INTO Sys_Rights VALUES(?,?,?);" +
        		"INSERT INTO Sys_SheetRights SELECT a.Account_Id,a.TreeId,b.SheetNodeId,b.DiseaseNodeId,b.SheetRights,b.YearInitRights,b.YearRights,b.ACProvinceRights,b.ACCityRights,b.ACDistrictRights FROM Sys_Rights as a join Sys_InitSheetRights as b on a.TreeId = b.TreeId and a.TreeID = ? and a.Account_Id = ? and CHARINDEX(b.SheetNodeId+'|',RightNode_id)>0";        	
        }
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, useid);
            ps.setString(2, treeid);              
            ps.setString(3, rights);
            ps.setString(4, treeid); 
            ps.setString(5, useid); 
            ps.executeUpdate();
            ps.close();                                  
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }
          
    public int SaveRights(String rightnode, String treeid, String useid){
        Conn conn = new Conn();
        Integer success = 0;
        String splitStr = "";
        String sql = "SELECT dbo.getResultBysplitNodes(?,?,?)";             
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, useid);
            ps.setString(2, treeid);
            ps.setString(3, rightnode);        
            ResultSet rs = ps.executeQuery();
            if(rs.next()){ 
            	splitStr = rs.getString(1);            	
            }
            rs.close();                                          
            ps.close();
            String str_sql = "";
            String removesql = "";
            String newsql = "";            
            String[] arrStrs = splitStr.split("@"); 
            if((arrStrs[0].trim().length() == 0 || arrStrs[0].trim().equals("|"))  && (arrStrs[1].trim().length() == 0 || arrStrs[1].trim().equals("|"))){
            	;
            }
            else if((arrStrs[0].trim().length() > 0 || !arrStrs[0].trim().equals("|")) && (arrStrs[1].trim().length() == 0 || arrStrs[1].trim().equals("|"))){            	
            	if(treeid.equals("10")){
            		removesql =
	            		"Update Sys_Rights SET RightNode_id = REPLACE(RightNode_id, '" + arrStrs[0].trim()+"', '') WHERE Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_Rights WHERE LEN(RightNode_id) = 0 and Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_SheetRights WHERE Account_id = '" + useid + "' and TreeId = 10 and SheetNodeId = 'data_a5b1' and CHARINDEX(DiseaseNodeId + '|','" + arrStrs[0].trim() + "')>0;";
            	}
            	else{
            		removesql =
	            		"Update Sys_Rights SET RIGHTNODE_ID = REPLACE(RightNode_id, '" + arrStrs[0].trim() + "', '') WHERE Account_Id = '" + useid + "' and TreeId = '" + treeid + "'; " +
	            		"DELETE FROM Sys_Rights WHERE LEN(RightNode_id) = 0 and Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_SheetRights WHERE Account_id = '" + useid + "' and TreeId = '" + treeid + "' and CHARINDEX(SheetNodeId + '|','" + arrStrs[0].trim() + "')>0;";            		            		
            	}
            }
            else if((arrStrs[0].trim().length() == 0 || arrStrs[0].trim().equals("|")) && (arrStrs[1].trim().length() > 0 || !arrStrs[1].trim().equals("|"))){ 
            	newsql = 
            		"UPDATE Sys_Rights SET RightNode_id = RightNode_id + '" + arrStrs[1].trim() + "' WHERE Account_id = '" + useid + "' and TreeId = '" + treeid + "'; ";
            	String newinnersql = "";
            	if(treeid.equals("10")){
            		newinnersql = "INSERT INTO Sys_SheetRights SELECT '" + useid + "' as Account_Id,TreeId,SheetNodeId,DiseaseNodeId,SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_InitSheetRights WHERE TreeId = '10' and CHARINDEX(DiseaseNodeId + '|','" + arrStrs[1].trim() + "') > 0;";            		
            	}
            	else{
            		newinnersql = "INSERT INTO Sys_SheetRights SELECT '" + useid + "' as Account_Id,TreeId,SheetNodeId,DiseaseNodeId,SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_InitSheetRights WHERE TreeId = '" + treeid + "' and CHARINDEX(SheetNodeId + '|','" + arrStrs[1].trim() + "') > 0 ;";
            	}
            	newsql = newsql + newinnersql;
            }
            else{
            	//remove nodeid
            	if(treeid.equals("10")){
            		removesql =
	            		"Update Sys_Rights SET RightNode_id = REPLACE(RightNode_id, '" + arrStrs[0].trim()+"', '') WHERE Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_Rights WHERE LEN(RightNode_id) = 0 and Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_SheetRights WHERE Account_id = '" + useid + "' and TreeId = 10 and SheetNodeId = 'data_a5b1' and CHARINDEX(DiseaseNodeId + '|','" + arrStrs[0].trim() + "')>0;";
            	}
            	else{
            		removesql =
	            		"Update Sys_Rights SET RIGHTNODE_ID = REPLACE(RightNode_id, '" + arrStrs[0].trim() + "', '') WHERE Account_Id = '" + useid + "' and TreeId = '" + treeid + "'; " +
	            		"DELETE FROM Sys_Rights WHERE LEN(RightNode_id) = 0 and Account_Id = '"+ useid +"' and TreeId = '"+ treeid +"'; " +
	            		"DELETE FROM Sys_SheetRights WHERE Account_id = '" + useid + "' and TreeId = '" + treeid + "' and CHARINDEX(SheetNodeId + '|','" + arrStrs[0].trim() + "')>0;";            		            		
            	}
            	//new nodeid
            	newsql = 
            		"UPDATE Sys_Rights SET RightNode_id = RightNode_id + '" + arrStrs[1].trim() + "' WHERE Account_id = '" + useid + "' and TreeId = '" + treeid + "'; ";
            	String newinnersql = "";
            	if(treeid.equals("10")){
            		newinnersql = "INSERT INTO Sys_SheetRights SELECT '" + useid + "' as Account_Id,TreeId,SheetNodeId,DiseaseNodeId,SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_InitSheetRights WHERE TreeId = '10' and CHARINDEX(DiseaseNodeId + '|','" + arrStrs[1].trim() + "') > 0;";            		
            	}
            	else{
            		newinnersql = "INSERT INTO Sys_SheetRights SELECT '" + useid + "' as Account_Id,TreeId,SheetNodeId,DiseaseNodeId,SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_InitSheetRights WHERE TreeId = '" + treeid + "' and CHARINDEX(SheetNodeId + '|','" + arrStrs[1].trim() + "') > 0 ;";
            	}
            	newsql = newsql + newinnersql;            	
            }
            str_sql = removesql + newsql;
            //System.out.println(str_sql);
            success = conn.executeUpdate(str_sql);            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }        
        return success;
    }
    public String GetSheetInitRights(String useid,String treeid, String nodeid){
        Conn conn = new Conn();
        String sql = "";
        String rights = "";
        if(treeid.equals("10"))
        	sql = "SELECT SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_SheetRights where account_id = ? and treeid = ? and DiseaseNodeId = ?";
        else 
        	sql = "SELECT SheetRights,YearInitRights,YearRights,ACProvinceRights,ACCityRights,ACDistrictRights FROM Sys_SheetRights where account_id = ? and treeid = ? and sheetnodeid = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, useid);
            ps.setString(2, treeid);
            ps.setString(3, nodeid); 
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	rights = rs.getString("SheetRights") + '@' + rs.getString("YearInitRights") + '@' + rs.getString("YearRights") + '@' + rs.getString("ACProvinceRights") + '@' + rs.getString("ACCityRights") + '@' + rs.getString("ACDistrictRights");            	
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return rights;
    } 
    public boolean IsExistsSheetRights(String useid,String treeid, String nodeid){
        Conn conn = new Conn();
        String sql = "SELECT * FROM Sys_Rights WHERE Account_Id = ? and TreeId = ? and CHARINDEX(?+ '|',RightNode_id)>0";        	
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql); 
            ps.setString(1, useid);
            ps.setString(2, treeid);
            ps.setString(3, nodeid);            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){            	
            	return true;        	
            }
            rs.close();
            ps.close();            
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();            
        }
        return false;
    }    
    public void SaveSheetRights(String useid,String treeid, String yearid, String nodeid,String sheetrights,String inityearrights,String yearrights,String provincerights,String cityrights,String districtrights){
        Conn conn = new Conn();
        PreparedStatement ps = null;  		       
        try {
    		String majorInit_QQuery = "{call Proc_SaveSheetRights(?,?,?,?,?,?,?,?,?,?)}";
    		ps = conn.PreparedexecuteQuery(majorInit_QQuery);
    		ps.setString(1,useid);
    		ps.setString(2,treeid);
    		ps.setString(3,yearid);
    		ps.setString(4,nodeid);	
    		ps.setString(5,sheetrights);		
    		ps.setString(6,inityearrights);
    		ps.setString(7,yearrights);
    		ps.setString(8,provincerights);
    		ps.setString(9,cityrights);
    		ps.setString(10,districtrights);
    		ps.executeUpdate();	
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }
    public void SaveSheetRightsOfInitYear(String useid,String treeid, String nodeid,String inityearrights){
        Conn conn = new Conn();
        String sql = "";
        if(treeid.equals("10")){
	        sql = "Update Sys_SheetRights Set YearInitRights = ? Where Account_Id = ? and DiseaseNodeId = ?";
        }
        else{
        	sql = "Update Sys_SheetRights Set YearInitRights = ? Where Account_Id = ? and SheetNodeId = ?";        	
        }
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, inityearrights);
            ps.setString(2, useid);              
            ps.setString(3, nodeid); 
            ps.executeUpdate();
            ps.close();                                  
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }        
    } 
    public void SaveSheetRightsOfExportCopy(String useid,String treeid, String nodeid,String sheetrights){
        Conn conn = new Conn();
        String sql = "";
        if(treeid.equals("10")){
	        sql = "Update Sys_SheetRights Set SheetRights = ? Where Account_Id = ? and DiseaseNodeId = ?";
        }
        else{
        	sql = "Update Sys_SheetRights Set SheetRights = ? Where Account_Id = ? and SheetNodeId = ?";        	
        }
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, sheetrights);
            ps.setString(2, useid);              
            ps.setString(3, nodeid); 
            ps.executeUpdate();
            ps.close();                                  
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }        
    }    
    public String GetcopyRows(String username,String treeid,String sheetnodeid){
        Conn conn = new Conn(); 
        String str = ""; //判断是否有记录
        String copyingRows = ""; //该账户当前页可复制的行数权限
        String copyedRows=""; //该账户已经累计复制的行数
        String copyRows = ""; // 该账户在该月和年可以导出的行数权限
        String returnStr = "";
        TimeZone.setDefault(TimeZone.getTimeZone("GMT+8")); 
		SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		String datetime = format.format(new Date());		
        String sql = "SELECT dbo.getcopyRows(?,?,?,?)";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, treeid);    
            ps.setString(3, sheetnodeid);
            ps.setString(4, datetime);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	str = rs.getString(1);
            	copyingRows = str.split("\\@")[0].split("\\|")[3];
            	copyedRows = str.split("\\@")[1]; 
            	copyRows = str.split("\\@")[2]; 
            	returnStr = copyingRows + "@" + copyedRows  + "@"+ copyRows ;         		
            }            
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return returnStr;
    } 
    public String GetexportRows(String username,String treeid,String sheetnodeid){
        Conn conn = new Conn(); 
        String str = ""; //判断是否有记录
        String exportingRows = ""; //该账户当前页可导出的行数权限
        String exportedRows=""; //该账户已经累计导出的行数
        String exportedObs=""; //该账户已经累计导出的次数
        String exportRows = ""; // 该账户在该月和年可以导出的行数权限
        String exportObs = ""; // 该账户在该月和年可以导出次数权限
        String returnStr = "";
        TimeZone.setDefault(TimeZone.getTimeZone("GMT+8")); 
		SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		String datetime = format.format(new Date());
        String sql = "SELECT dbo.getexportRows(?,?,?,?)";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, treeid);    
            ps.setString(3, sheetnodeid);
            ps.setString(4, datetime);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	str = rs.getString(1);
            	exportingRows = str.split("\\@")[0].split("\\|")[2];
            	exportedRows = str.split("\\@")[1]; 
            	exportedObs = str.split("\\@")[2]; 
            	exportRows = str.split("\\@")[3]; 
            	exportObs = str.split("\\@")[4]; 
            	returnStr = exportingRows + "@" + exportedRows + "@" + exportedObs + "@"+ exportRows + "@" + exportObs;            		
            }            
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return returnStr;
    } 
    public void SaveExportActions(String username,String treeid,String sheetnodeid,String exportbutton,String exportedrows){
        Conn conn = new Conn();    
        PreparedStatement ps = null;
        String currentDate = new util().getCurrentDate();		
        try {
	  		String QQuery = "{call saveexportRecords(?,?,?,?,?,?)}"; 
	  		ps = conn.PreparedexecuteQuery(QQuery);
	  		ps.setString(1,username);
	  		ps.setString(2,currentDate);
	  		ps.setString(3,treeid);
	  		ps.setString(4,sheetnodeid);
	  		ps.setString(5,exportbutton);
	  		ps.setString(6,exportedrows);
	  		ps.execute();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }
    public void SaveCopyActions(String username,String treeid,String sheetnodeid,String copybutton,String copyedrows){
        Conn conn = new Conn();    
        PreparedStatement ps = null;
        String currentDate = new util().getCurrentDate();		
        try {
	  		String QQuery = "{call savecopyRecords(?,?,?,?,?,?)}"; 
	  		ps = conn.PreparedexecuteQuery(QQuery);
	  		ps.setString(1,username);
	  		ps.setString(2,currentDate);
	  		ps.setString(3,treeid);
	  		ps.setString(4,sheetnodeid);
	  		ps.setString(5,copybutton);
	  		ps.setString(6,copyedrows);
	  		ps.execute();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }
    
    public String GetMapInitYearOfSysRights(String useid){
        Conn conn = new Conn();
        String sql = "";
        String yearinitrights = "";
        	sql = "SELECT yearinitrights FROM Sys_MapRights where id = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, useid);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	yearinitrights = rs.getString(1);            	
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return yearinitrights;
    } 
    
    public void SaveMapInitYearRights(String useid,String yearid){
        Conn conn = new Conn();
        String sql = "UPDATE Sys_MapRights SET yearinitrights = ? where id = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, yearid);
            ps.setString(2, useid);
            ps.executeUpdate();
            ps.close();  
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    } 
    public void SaveMapRuleIdRights(String useid,String yearid,String rulerights){
        Conn conn = new Conn();
        String sql = "UPDATE Sys_MapRights SET RightRule_id = ? where id = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, rulerights);
            ps.setString(2, useid);
            ps.executeUpdate();
            ps.close();  
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
    }  
    
    public String GetSysIndustryRightMenu_Rights(String usename){
        Conn conn = new Conn();
        String sql = "";
        String rightmenu_rights = "";
        	sql = "select ISNULL(RightMenu_Rights,-999) as RightMenu_Rights from Sys_Account as a left join Sys_IndustryRightMenu_Rights as b on a.ID = b.Account_Id where a.Account = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, usename);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	rightmenu_rights = rs.getString(1);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return rightmenu_rights;
    }    
    
    
    
              
}
