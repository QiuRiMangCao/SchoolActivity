package com.platform.common.utils;

public class New_token {
	
	// 生成token
	public  static  String  newToken( String  txt ){
		
		
		return    Md5.getVal_bgk(txt) ;
		
	}

}
