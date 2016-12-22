package com.platform.common.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * Action 基类
 */
@Controller
public class CommonBaseAction  {
	
	
	public static HttpSession getSession() { 
		HttpSession session = null; 
		try { 
		    session = getRequest().getSession(); 
		} catch (Exception e) {} 
		    return session; 
		} 
	public static HttpServletRequest getRequest() { 
		ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder 
		.getRequestAttributes(); 
		return attrs.getRequest(); 
	} 
	
	
}