package com.platform.common.utils;

import org.junit.Test;

public class StringSplitTest {
	
	@Test
	public void StringSplit(){
		 String sourceStr = "92845";
		 String[] sourceStrArray;
		  int maxSplit = 100;
	        sourceStrArray = sourceStr.split("");
	        for (int i = 0; i < sourceStrArray.length; i++) {
	            System.out.println(sourceStrArray[i]);
	        }
	    }
		
	}


