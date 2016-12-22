package com.platform.common.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {
	private final static SimpleDateFormat sdfYear = new SimpleDateFormat("yyyy");

	private final static SimpleDateFormat sdfDay = new SimpleDateFormat(
			"yyyy-MM-dd");
	private final static SimpleDateFormat sdfDaydd = new SimpleDateFormat(
			"dd");
	
	private final static SimpleDateFormat sdfDays = new SimpleDateFormat(
	"yyyyMMddHHmmss");

	private final static SimpleDateFormat sdfTime = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss");
	
	private final static SimpleDateFormat sdfDay_yyMM = new SimpleDateFormat(
			"yyyy-MM");
	
	
	
	
	 /*
     * yymmdd
     */
    public static String getyymmdd(Date  date){
    	
    	SimpleDateFormat myFmt=new SimpleDateFormat("YYYYMMdd");
    	
    	return myFmt.format(date) ;
    	
    }
	
    
    
    /*
     * HHmmss
     */
    public static String getHHmmss(Date  date){
    	
    	SimpleDateFormat myFmt=new SimpleDateFormat("HHmmss");
    	
    	return myFmt.format(date) ;
    	
    }

	
	
	/**
	 * 获取yyMM格式
	 */
	public static String getyyMM() {
		
		return  sdfDay_yyMM.format(new Date());
	}
	/**
	 * 获取dd格式
	 */
	public static String getdd() {
		
		return  sdfDaydd.format(new Date());
	}
	
	
	

	/**

	 * 获取YYYY格式

	 * 

	 * @return

	 */
	public static String getYear() {
		return sdfYear.format(new Date());
	}

	/**

	 * 获取YYYY-MM-DD格式

	 * 

	 * @return

	 */
	public static String getDay() {
		return sdfDay.format(new Date());
	}
	
	/**

	 * 获取YYYYMMDD格式

	 * 

	 * @return

	 */
	public static String getDays(){
		return sdfDays
				.format(new Date());
	}

	/**

	 * 获取YYYY-MM-DD HH:mm:ss格式

	 * 

	 * @return

	 */
	public static String getTime() {
		return sdfTime.format(new Date());
	}

	/**

	* @Title: compareDate

	* @Description: TODO(日期比较，如果s>=e 返回true 否则返回false)

	* @param s

	* @param e

	* @return boolean  

	* @throws

	* @author Mr.Server

	 */
	public static boolean compareDate(String s, String e) {
		if(fomatDate(s)==null||fomatDate(e)==null){
			return false;
		}
		return fomatDate(s).getTime() >=fomatDate(e).getTime();
	}

	/**

	 * 格式化日期

	 * 

	 * @return

	 */
	public static Date fomatDate(String date) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			return fmt.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}

	/**

	 * 校验日期是否合法

	 * 

	 * @return

	 */
	public static boolean isValidDate(String s) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			fmt.parse(s);
			return true;
		} catch (Exception e) {
			// 如果throw java.text.ParseException或者NullPointerException，就说明格式不对

			return false;
		}
	}
	public static int getDiffYear(String startTime,String endTime) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			int years=(int) (((fmt.parse(endTime).getTime()-fmt.parse(startTime).getTime())/ (1000 * 60 * 60 * 24))/365);
			return years;
		} catch (Exception e) {
			// 如果throw java.text.ParseException或者NullPointerException，就说明格式不对

			return 0;
		}
	}
	  /**

     * <li>功能描述：时间相减得到天数

     * @param beginDateStr

     * @param endDateStr

     * @return

     * long 

     * @author Mr.Server

     */
    public static long getDaySub1(String beginDateStr,String endDateStr){
        long day=0;
        java.text.SimpleDateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd");
        java.util.Date beginDate = null;
        java.util.Date endDate = null;
        
            try {
				beginDate = format.parse(beginDateStr);
				endDate= format.parse(endDateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
            day=(endDate.getTime()-beginDate.getTime())/(24*60*60*1000);
            //System.out.println("相隔的天数="+day);

      
        return day;
    }
    /**
	 * 邹景旺  计算两个日期相减  天数差
	 * @param begin_date
	 * @param end_date
	 * @return
	 */
	 public static  long getTwoDay(Date begin_date, Date end_date) {
		  long day = 0;
		  day = (end_date.getTime() - begin_date.getTime())  / (24 * 60 * 60 * 1000);
		  
		  return day;
		 }
    /**

     * 得到n天之后的日期

     * @param days

     * @return

     */
    public static String getAfterDayDate(String days) {
    	int daysInt = Integer.parseInt(days);
    	
        Calendar canlendar = Calendar.getInstance(); // java.util包

        canlendar.add(Calendar.DATE, daysInt); // 日期减 如果不够减会将月变动

        Date date = canlendar.getTime();
        
        SimpleDateFormat sdfd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = sdfd.format(date);
        
        return dateStr;
    }
    
    /**

     * 得到n天之后是周几

     * @param days

     * @return

     */
    public static String getAfterDayWeek(String days) {
    	int daysInt = Integer.parseInt(days);
    	
        Calendar canlendar = Calendar.getInstance(); // java.util包

        canlendar.add(Calendar.DATE, daysInt); // 日期减 如果不够减会将月变动

        Date date = canlendar.getTime();
        
        SimpleDateFormat sdf = new SimpleDateFormat("E");
        String dateStr = sdf.format(date);
        
        return dateStr;
    }
    
    public static void main(String[] args) {
    	//System.out.println(getDays());
    	//System.out.println(getAfterDayWeek("3"));
    	//方法 一
    	System.out.println(System.currentTimeMillis()); 
    	//方法 二
    	System.out.println(Calendar.getInstance().getTimeInMillis());
    	//方法 三
    	System.out.println(new Date().getTime());
    	System.out.println(getXiaoFeiMa());
    	System.out.println(getFileName());
    }
	/**
	 * @author 李嘉伟
	 * 时间戳加随机数
	 */
	public static String getXiaoFeiMa(){
		return String.valueOf(Tools.getRandomThreeNum())+String.valueOf(System.currentTimeMillis())+"";
	}
	
	/**
	 * @author leo
	 * 生成图片名称
	 */
	public static String getFileName(){
		return String.valueOf(Tools.getRandomNum())+String.valueOf(System.currentTimeMillis())+"";
	}
	
	
	/**
     * YYYY-MM-dd
     */
    public static String getyy_mm_dd(Date  date){
    	
    	SimpleDateFormat myFmt=new SimpleDateFormat("YYYY-MM-dd");
    	
    	return myFmt.format(date) ;
    	
    }
 

}
