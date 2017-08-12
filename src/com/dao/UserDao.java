package com.dao;
import com.entity.User;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
public class UserDao {	
    /**
     * ע���û�
     */		
	public void saveUser(String username,String password,String company,String companyaddress, String telphone, String department,String post,String email,String fpr,String cookie){
		Conn conn = new Conn();
        String sql = "insert into Sys_Account(Account,Password,Company,CompanyAddress,Telphone,Department,Post,Email,FPR,Cookie) values(?,?,?,?,?,?,?,?,?,?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            // ��SQL����ռλ���������ж�̬��ֵ
            ps.setString(1, username);
            ps.setString(2, password);
            ps.setString(3, company);
            ps.setString(4, companyaddress);
            ps.setString(5, telphone);
            ps.setString(6, department);
            ps.setString(7, post);
            ps.setString(8, email);
            ps.setString(9, fpr);
            ps.setString(10, cookie);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{        	
        	conn.close();
        }
    }
    /**
     * ��¼��ʱ�򱣴�cookie
     * @param username �û���
     * @param cookie
     * @return is unique or not
     */	
	public void saveUserCookie(String username,String cookie){
		Conn conn = new Conn();
        String sql = "update Sys_Account set Cookie = ? where (Account = ? or Email = ?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            // ��SQL����ռλ���������ж�̬��ֵ            
            ps.setString(1, cookie);
            ps.setString(2, username);
            ps.setString(3, username);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * ��¼��ʱ�򱣴�fpr
     * @param username �û���
     * @param fpr
     * @return is unique or not
     */	
	public void saveUserFPR(String username,String fpg){
		Conn conn = new Conn();
        String sql = "update Sys_Account set FPR = ? where (Account = ? or Email = ?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            // ��SQL����ռλ���������ж�̬��ֵ
            ps.setString(1, fpg);
            ps.setString(2, username);
            ps.setString(3, username);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }	
    /**
     * ��¼��ʱ���ж��Ƿ���Ψһ�û�
     * @param username �û���
     * @param fpr fingerprint
     * @param cookie cookie
     * @return is unique or not
     */
    public boolean loginuniquelogin(String username, String fpr,String cookie){
    	boolean uniqueaccount = false;
    	String uniqueFg = "";
        Conn conn = new Conn();
        String sql = "SELECT dbo.getLoginUniqueAccount(?,?,?)";  
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, fpr);
            ps.setString(3, cookie);            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	uniqueFg = rs.getString(1).trim();            
            }
            if(uniqueFg.equals("1")){
            	uniqueaccount = true;
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return uniqueaccount;
    }  
    /**
     * ע���ʱ���ж��Ƿ���Ψһ�û�
     * @param username �û���
     * @param fpr fingerprint
     * @param cookie cookie
     * @return error code
     */
    public String registeruniquelogin(String username, String email,String fpr,String cookie){
    	String uniqueFg = "";
        Conn conn = new Conn();
        String sql = "SELECT dbo.getRegisterUniqueAccount(?,?,?,?)";  
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, email);
            ps.setString(3, fpr);
            ps.setString(4, cookie);            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
            	uniqueFg = rs.getString(1).trim();            
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return uniqueFg;
    } 
        
    /**
     * �û���¼
     * @param username �û���
     * @param password ����
     * @param fpr fingerprint
     * @param cookie cookie
     * @return �û�����
     */
    public User login(String username, String password){
        User user = null;
        Conn conn = new Conn();
        String sql = "select * from Sys_Account where (Account = ? or Email = ?) and Password = ? ";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, username);
            ps.setString(3, password);            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                user = new User();
                user.setId(rs.getString("ID"));
                user.setOpenDate(rs.getString("OpenDate"));
                user.setAvailableTime(rs.getString("AvailableTime"));                
                user.setUsername(rs.getString("Account"));
                user.setIsopensoftware(rs.getInt("IsOpenSoftware"));
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return user;
    }

    /**
     * ����Ա��¼
     * @param username �û���
     * @param password ����
     * @return �û�����
     */
    public User adminlogin(String username, String password){
        User user = null;
        Conn conn = new Conn();
        String sql = "select * from Sys_Account where (Account = ? or Email = ?) and Password = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, username);
            ps.setString(3, password);           
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                user = new User();
                user.setId(rs.getString("ID"));
                user.setOpenDate(rs.getString("OpenDate"));
                user.setAvailableTime(rs.getString("AvailableTime"));                 
                user.setUsername(rs.getString("Account"));
                user.setIsopensoftware(rs.getInt("IsOpenSoftware"));
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            conn.close();
        }
        return user;
    }    
    
    /**
     * �ж��û��������ݿ����Ƿ����
     * @param username �û���
     * @return ����ֵ
     */
    public boolean userIsExist(String username){
    	Conn conn = new Conn();
        String sql = "select * from Sys_Account where (Account = ? or Email = ?)";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.setString(2, username);
            ResultSet rs = ps.executeQuery();
            if(!rs.next()){
                return true;
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
        return false;
    }
    /**
     * �ж�email�����ݿ����Ƿ����
     * @param email �����ַ
     * @return ����ֵ
     */
    public boolean emailIsExist(String email){
    	Conn conn = new Conn();
        String sql = "select * from Sys_Account where Email = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                return true;
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
        return false;
    }
    /**
     * �����û��Ļ�����Ϣ
     * @param AvailableTime �˻�����ʱ��; ExportObs ��������;ExportRows ��������;CopyRows����������;IsOpenSoftware���Ƿ�ͨ����� userid���û�ID
     * @return NULL
     */    
	public void updateUser(Integer ExportObs,Integer ExportRows,Integer CopyRows,String userid){
		Conn conn = new Conn();
        String sql = "UPDATE Sys_Account SET ExportObs = ?,ExportRows = ?,CopyRows = ? WHERE ID = ?";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setInt(1, ExportObs);
            ps.setInt(2, ExportRows);
            ps.setInt(3, CopyRows);
            ps.setString(4, userid);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * �����û��Ҽ�Ȩ��
     * @param rightmenu_rights:�Ҽ�Ȩ��;userid���û�ID
     * @return NULL
     */    
	public void updateRightmenu_Rights(Integer userid,Integer rightmenu_rights){
		Conn conn = new Conn();
  		String sql = "{call Proc_RightMenu_Rights(?,?)}"; 
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setInt(1, userid);
            ps.setInt(2, rightmenu_rights);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }	
    /**
     * ��ͨ���
     * @param IsOpenSoftware���Ƿ�ͨ����� userid���û�ID
     * @return NULL
     */    
	public void openSoftware(Integer IsOpenSoftware,Long availabletime, String currentDate, String userid){
		Conn conn = new Conn();		
        String sql = "UPDATE Sys_Account SET IsOpenSoftware = ?, OpenDate = ?, CloseDate = ?,AvailableTime = ? WHERE ID = ?";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setInt(1, IsOpenSoftware);
            ps.setString(2, currentDate);
            ps.setString(3, "");
            ps.setLong(4, availabletime); 
            ps.setString(5, userid);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * �ر����
     * @param IsOpenSoftware���Ƿ�ͨ����� userid���û�ID
     * @return NULL
     */    
	public void closeSoftware(Integer IsOpenSoftware,Long availabletime, String currentDate, String accountname){
		Conn conn = new Conn();
        String sql = "UPDATE Sys_Account SET IsOpenSoftware = ?, AvailableTime = ? , CloseDate = ? WHERE Account = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setInt(1, IsOpenSoftware);
            ps.setLong(2, availabletime);
            ps.setString(3, currentDate);            
            ps.setString(4, accountname);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }	
    /**
     * ɾ���û�
     */    
	public void deleteUser(String userid){
		Conn conn = new Conn();
        String sql = 
        	"DELETE FROM Sys_Account WHERE CHARINDEX(CAST(ID AS VARCHAR(10)) + '|',?)>0;" +
        	"DELETE FROM Sys_Rights WHERE CHARINDEX(CAST(Account_Id AS VARCHAR(10)) + '|',?)>0;" +
        	"DELETE FROM Sys_SheetRights WHERE CHARINDEX(CAST(Account_Id AS VARCHAR(10)) + '|',?)>0;";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, userid);
            ps.setString(2, userid);
            ps.setString(3, userid);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * ���������Ϣ��¼
     */    
	public void updateSoftwareInfo(String opendate,Long availabletime,String closedate,Integer isopensoftware,String userid){
		Conn conn = new Conn();
		String sql = "insert into Sys_SoftwareInfo(Account_id,OpenDate,AvailableTime,CloseDate,IsOpensoftware) VALUES(?,?,?,?,?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, userid);
            ps.setString(2, opendate);
            ps.setLong(3, availabletime);
            ps.setString(4, closedate);
            ps.setInt(5, isopensoftware);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * �����û���������Ȩ��
     */    
	public void updateECRightInfo(Integer exportobs,Integer exportrows,Integer copyrows,String userid){
		Conn conn = new Conn();
		String sql = "insert into Sys_ExportCopyRightInfo(Account_id,exportobs,exportrows,copyrows) VALUES(?,?,?,?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, userid);
            ps.setInt(2, exportobs);
            ps.setInt(3, exportrows);
            ps.setInt(4, copyrows);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * ����ָ�Ʊ�ǩ
     * @param userid���û�ID
     * @return NULL
     */    
	public void clearFingerPrint(String username){
		Conn conn = new Conn();
        String sql = "UPDATE Sys_Account SET Cookie = NULL, FPR = NULL WHERE Account = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, username);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
	
    /**
     * ��¼��ʱ�򱣴��¼ʱ����û���
     * @param userid:��¼�û�ID
     * @param logintime:��¼ʱ��
     * @return void
     */	
	public void saveLogintime(String userid,String logintime){
		Conn conn = new Conn();
		String sql = "insert into Sys_LoginInfo(Account_id,LoginTime) VALUES(?,?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            // ��SQL����ռλ���������ж�̬��ֵ            
            ps.setString(1, userid);
            ps.setString(2, logintime);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }

    /**
     * ��¼��ʱ��ע��ʱ����û���
     * @param userid:ע���û�ID
     * @param logintime:ע��ʱ��
     * @return void
     */	
	public void saveLogouttime(String userid,String logouttime){
		Conn conn = new Conn();
		String sql = "insert into Sys_LogoutInfo(Account_id,LogoutTime) VALUES(?,?)";
        try {
           // ��ȡPreparedStatement����
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            // ��SQL����ռλ���������ж�̬��ֵ            
            ps.setString(1, userid);
            ps.setString(2, logouttime);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
    /**
     * ��������
     * @param email��email��ַ
     * @param password������
     * @return NULL
     */    
	public void resetPassword(String email,String password){
		Conn conn = new Conn();
        String sql = "UPDATE Sys_Account SET Password = ? WHERE Email = ?";
        try {
            PreparedStatement ps = conn.PreparedexecuteQuery(sql);
            ps.setString(1, password);
            ps.setString(2, email);
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }finally{
        	conn.close();
        }
    }
	
	
}

