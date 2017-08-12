function Setcookie(name, value)
{  
    var expdate = new Date();
    expdate.setTime(expdate.getTime()*2 + 30 * 60 * 1000); 
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";
}
	
function getCookie(name){  
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
    if(arr != null){  
     	return unescape(arr[2]);   
    }else{  
     	return null;  
    }  
}