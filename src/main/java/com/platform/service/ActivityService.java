package com.platform.service;

import java.util.List;

import com.platform.entity.Activity;

public interface ActivityService {
	
	
	public List<Activity> selectActivity(String student_id);//获取home列表
	public List<Activity> selectActivityU(String unit_id);//获取home列表
	
	
	public List<Activity> findAll();//获取home列表
	
	public List<Activity> findAllNo();//获取home列表
	
	public List<Activity> finNotice();//获取home列表

	public int insert(Activity activity);
	
	
	public List<Activity> selectNotice(String student_id);//获取活动公告
	public List<Activity> selectNoticeU(String unit_id);//获取活动公告
	

	public List<Activity> selectAudit(String unit_id);//查询没有审核的活动
	public List<Activity> selectYes(String unit_id);//查询没有审核的活动
	public List<Activity> selectNo(String unit_id);//查询没有审核的活动
	
	
	public Activity findById(String id);//根据id来查询
	
	public int update(Activity activity);//查询没有审核的活动
}
