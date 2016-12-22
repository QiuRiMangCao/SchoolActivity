package com.platform.common.contants;

/***
 * 
 * @author Mr.Server
 *
 */
public class Constants {
	
	public static final Integer ACTIVITY_STATE_AUDIT = 1;//活动未初步审核的状态,未审查
    public static final Integer ACTIVITY_STATE_YES = 2;//活动初步审核通过状态,已审查,未批准
    public static final Integer ACTIVITY_STATE_NO = 3;//活动初步审核未通过,审查未通过
    
    
    public static final Integer ACTIVITY_STATE_OVER = 4;//审批通过,已批准
    public static final Integer ACTIVITY_STATE_OUT = 5;//审批未通过,不批准
    
    
    
    public static final Integer ACTIVITY_STATE_CANCEL = 6;//活动在审批未处理阶段取消活动申请的状态
    
    
    
    public static final Integer USER_STATE_ACTIVITY = 1;//用户为活跃状态
    public static final Integer USER_STATE_NOACTIVITY = 2;//用户为冻结转台
    
    
    public static final Integer USER_TYEP_STUDENT = 1;//学生组织
    public static final Integer USER_TYPE_UNIT = 2;//主管责任单位
    public static final Integer USER_TYPE_COMMITTEE = 3;//校团委
    
    
    public static final String LOGIN_USER = "_LOGIN_USER_";//登陆用户信息
    
    
    
    
	


}
