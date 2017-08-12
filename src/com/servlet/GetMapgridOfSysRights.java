package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.grid.GridstoreAction;

public class GetMapgridOfSysRights extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String yearid = request.getParameter("yearid");
		String accountid = request.getParameter("accountid");
		GridstoreAction ga = new GridstoreAction();
		String sql = "SELECT B.Year_id,B.Rule_id,replace(B.Rule_Name,'@','') as Rule_Name,CASE WHEN CHARINDEX(cast(B.Year_id as varchar(10))+'#'+ cast(B.Rule_id as varchar(10))+',',A.RightRule_id)>0 THEN 1 ELSE 0 END AS Selected FROM SYS_MapRights AS A JOIN Map_Rule AS B ON B.Dimension = 'Ê¡·Ý' WHERE A.Account_id = "+accountid+" AND B.Year_id = " + yearid;
		String result = ga.AllBasicGridstore(sql);
		response.getWriter().write(result);	
	}

}
