package com.configuration;
import java.io.*;
import java.util.Properties;
/**
 * ¶ÁÈ¡propertiesÎÄ¼þ
 */
public class Configuration
{
	public Configuration(){}
	public String getPropertyFromFile(String propertyFileName,String refName){
		String ret = new String("");
		try{
			InputStream fin = getClass().getResourceAsStream(propertyFileName);
			Properties props = new Properties();
			props.load(fin);
			ret = (String)props.getProperty(refName);
			if(ret == null) ret = "";
		}
		catch(Exception e){}
		return ret;
	}
	public String DirectlygetPropertyFromFile(String refName){
		String ret = new String("");
		try{
			InputStream fin = getClass().getResourceAsStream("/getdatabasename.properties");
			Properties props = new Properties();
			props.load(fin);
			ret = (String)props.getProperty(refName);
			if(ret == null) ret = "";
		}
		catch(Exception e){}
		return ret;
	}
	public String DirectlygetYearPropertyFromFile(String refName){
		String ret = new String("");
		try{
			InputStream fin = getClass().getResourceAsStream("/getyear.properties");
			Properties props = new Properties();
			props.load(fin);
			ret = (String)props.getProperty(refName);
			if(ret == null) ret = "";
		}
		catch(Exception e){}
		return ret;
	}	
}