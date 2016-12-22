package com.platform.test;

import org.junit.Test;

import com.platform.common.utils.UUIDUtil;

public class uuidUtil{
	@Test
	public void add() throws Exception{
		for(int i=0;i<10;i++){
			System.out.println(UUIDUtil.getRandom32PK());
		}
	}

}
