package com.platform.common.utils;

import java.util.Calendar;
import java.util.Date;

import org.junit.Test;


/**
 * 日期工具
 * @author CEO
 * @Time 2016/9/14
 *
 */
public class CalendarDate1 {
	
	/**
	 * 星期的获取
	 * 
	 * @param date
	 * @return
	 */
	public static String getWeek(Date date){
		String[] weeks = {"星期日","星期一","星期二","星期三","星期四","星期五","星期六"};
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int week_index = cal.get(Calendar.DAY_OF_WEEK) - 1;
		if(week_index<0){
			week_index = 0;
		} 
		return weeks[week_index];
	}
	
}
