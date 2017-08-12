import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import com.sun.org.apache.bcel.internal.generic.AALOAD;
import com.util.util;

public class test {
	public static void main(String[] arg){
		TimeZone.setDefault(TimeZone.getTimeZone("GMT+8")); 
	    Date d=new Date();   
	    SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	    System.out.println(d.getTime());
	    System.out.println("今天的日期："+df.format(d));   
	    System.out.println("两天前的日期：" + df.format(new Date(d.getTime() - 10*1000)));  
	    System.out.println("三天后的日期：" + df.format(new Date(d.getTime() + 3 * 24 * 60 * 60 * 1000)));
//	    System.out.println(new util().getTimestamp("2016-10-23 22:14:23"));
	    Long a = Long.parseLong("0");
	    System.out.println(a);
	    float r = a/3600;
	    System.out.println(r);
	    float  b   =  (float)(Math.round(r*100))/100;
	    System.out.println(b);
	        
	    DecimalFormat df1   =new DecimalFormat("#.00");
	    System.out.println(df1.format(a/3600.0));
	}
}
