package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.tree.Csysfunctiontree;

public class GetSysFunctiontree extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");		
		Csysfunctiontree node=new Csysfunctiontree(); 
		String flag = request.getParameter("flag");
		String username = (String)request.getSession().getAttribute("username");
		String tempResponse="";
		/*0:主页的iconCls; 1:权限管理模块中的iconCls*/
		if(flag.equals("0"))
			tempResponse=node.getResultByRootId("data_a0",username,"1");
		else if(flag.equals("1"))
			tempResponse=node.getResultByRootIdOfSysRights("data_a0");		
		response.getWriter().write("["+tempResponse+"]");			
		//response.getWriter().write("[{id:'data_a0',text:'',level:0,change:'',iconCls:'tree_level',leaf: true}]");
	}

}
