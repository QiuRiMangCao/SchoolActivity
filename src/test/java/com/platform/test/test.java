package com.platform.test;

import com.platform.common.utils.DateUtil;
import com.platform.common.utils.Md5;

public class test {
	
	public static void main(String[] args) {
		
		String  yymm = DateUtil.getyyMM() ;
		String dd = DateUtil.getdd() ;
		
		String  yymmdd_start = yymm +"-"+ ( Integer.valueOf(dd)-1+"" );
		
		String  yymmdd_end = yymm +"-"+ ( Integer.valueOf(dd)+1+"" ); 
		
		System.out.println(yymmdd_start + "    "  + yymmdd_end);
	}

}
