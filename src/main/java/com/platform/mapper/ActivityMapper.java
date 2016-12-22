package com.platform.mapper;

import java.util.List;

import com.platform.entity.Activity;
import com.platform.mapper.base.BaseMapper;

public interface ActivityMapper extends BaseMapper<String, Activity>{
	
	
	public List<Activity> selectActivity(String student_id);
	public List<Activity> selectActivityU(String unit_id);
	
	
	public List<Activity> findAll();
	public List<Activity> findAllNo();
	
	public List<Activity> finNotice();
	
	
	public List<Activity> selectNotice(String student_id);
	public List<Activity> selectNoticeU(String unit_id);
	
	
	public List<Activity> selectAudit(String unit_id);
	public List<Activity> selectYes(String unit_id);
	public List<Activity> selectNo(String unit_id);
	
	public Activity findById(String id);
	
	


}
