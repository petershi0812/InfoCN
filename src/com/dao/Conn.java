package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Conn {
	    private String url="jdbc:sqlserver://localhost:1433;DatabaseName=InfoCN";
	    private String user="sa";
	    private String password="sql2008";
	    //private String url="jdbc:sqlserver://120.55.163.55;DatabaseName=InfoCN";
	    //private String user="admin";
	    //private String password="pInfocn2001";		    
		    
/*     	String url="jdbc:sqlserver://61.152.116.36;DatabaseName=infocnmodel";
	    String user="infocnmodel";
	    String password="infocndata111";*/
	    
		private Connection connect = null;
		private Statement stmt = null;
		public Conn(){
			try {
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");	
			}
			catch(java.lang.ClassNotFoundException e) {
				e.printStackTrace();
			}
		}

		public PreparedStatement PreparedexecuteQuery(String sql) {
			PreparedStatement ps = null;
			try {
				connect = DriverManager.getConnection(url,user,password);
				ps = connect.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
			} 
			catch(SQLException ex) { 
				ex.printStackTrace();
			}
			return ps;
		}			
		
		public ResultSet executeQuery(String sql) {
			ResultSet rs = null;
			try {
				connect = DriverManager.getConnection(url,user,password);
				stmt = connect.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
				rs = stmt.executeQuery(sql);
			} 
			catch(SQLException ex) { 
				ex.printStackTrace();
			}
			return rs;
		}
		
		public int executeUpdate(String sql) {
			int result = 0;
			try {
				connect = DriverManager.getConnection(url,user,password); 
				stmt = connect.createStatement();
				result = stmt.executeUpdate(sql);
			} 
			catch(SQLException ex) { 
				System.err.println(ex.getMessage());		
			}
			return result;
		}
		
		
		public void close(){
			if(connect!=null){
				try{
					connect.close();
					connect = null;	
				}catch(SQLException ex) { 
					System.err.println(ex.getMessage());
				}
			}	
			if(stmt!=null){
				try{
					stmt.close();
					stmt = null;	
				}catch(SQLException ex) { 
					System.err.println(ex.getMessage());
				}
			}			
		}
}
