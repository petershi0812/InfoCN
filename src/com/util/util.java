package com.util;
import java.text.SimpleDateFormat;
import java.util.*;

public class util {

	//创建二维数组
	public static String[][] ReturnTwoDimensionArray(int rows,int columns) {
		String[][] arr = new String[rows][columns];
		for (int i = 0; i < rows; i++)
		{
		   for (int j = 0; j < columns; j++)// 初始化数组
		   {
		    arr[i][j] = "";
		   }
		}
        return arr; 
    }
	//去除数组中重复的记录  
	public static String[] array_unique(String[] a) {   
	    List<String> list = new LinkedList<String>();  
	    for(int i = 0; i < a.length; i++) {  
	        if(!list.contains(a[i])) {  
	            list.add(a[i]);  
	        }  
	    }  
	    return (String[])list.toArray(new String[list.size()]);  
	} 
	
	public String getCurrentDate(){
		TimeZone.setDefault(TimeZone.getTimeZone("GMT+8")); 
//		Calendar c = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		String curDate = s.format(c.getTime());  //当前日期		  
//        System.out.println("java.runtime.version:\t"+System.getProperty("java.runtime.version"));  
//        System.out.println("当前时间:\t\t"+new Date().toLocaleString());
//		System.out.print(s.format(new Date()));
		return s.format(new Date());
	}
	public long fromDateStringToLong(String inVal) { //此方法计算时间毫秒
		TimeZone.setDefault(TimeZone.getTimeZone("GMT+8")); 
		Date date = null;   //定义时间类型       
		SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		try { 
		  date = inputFormat.parse(inVal); //将字符型转换成日期型
		} catch (Exception e) { 
		  e.printStackTrace(); 
		} 
		return date.getTime();   //返回毫秒数
	}
	public String getCurrentTs(Long ts){ 
		TimeZone.setDefault(TimeZone.getTimeZone("GMT+8"));
		String date = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date(ts));
		return date;
	}
}
