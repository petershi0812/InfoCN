import java.util.Date;
import java.text.SimpleDateFormat;

public class ThreadSafe {
		private String sql_year;
		private String sql_preyear;		
		public ThreadSafe(String _year_id){
			this.sql_year = " where Year_id =  " + _year_id;
			this.sql_preyear = " Year_id = " + _year_id;
			
		}
		public ThreadSafe(Integer _year_id){
			this.sql_year = " where Year_id >  " + _year_id;
			this.sql_preyear = " Year_id > " + _year_id;
		}
		public void count1(){
			System.out.println(Thread.currentThread().getName() + "-count1-" + sql_year); 
		}
		public void count2(){
			Date date = new Date();
			SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
			String time = format.format(date);
			
			System.out.println(Thread.currentThread().getName() + "-count2-" + sql_year + '-' + time); 
		}		
		
		public static void main(String[] args) {  
	        Runnable runnable = new Runnable() {  
	        	ThreadSafe count1 = new ThreadSafe("2013");
	        	ThreadSafe count2 = new ThreadSafe(0);  
	            public void run() {  
	            	count1.count1();
	            	count2.count2();
	            }  
	        };  
	        for(int i = 0; i < 10; i++) {  
	            new Thread(runnable).start();  
	        }  
	    } 		
		
}
