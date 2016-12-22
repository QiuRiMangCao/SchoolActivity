package com.platform.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.entity.Activity;
import com.platform.mapper.ActivityMapper;
import com.platform.service.ActivityService;

@Service
public class ActivityServiceImpl implements ActivityService {
	
	@Autowired
	ActivityMapper mapper ;
	
	public List<Activity> selectActivity(String student_id) {
		return mapper.selectActivity(student_id);
	}
	
	public List<Activity> selectActivityU(String unit_id) {
		return mapper.selectActivityU(unit_id);
	}
	
	public List<Activity> findAll(){
		return mapper.findAll();
	}
	
	public List<Activity> finNotice(){
		return mapper.finNotice();
	}
	
	public List<Activity> findAllNo(){
		return mapper.findAllNo();
	}
	
	public int insert(Activity activity) {
		return mapper.insert(activity);
	}
	
	public List<Activity> selectNotice(String student_id){
		
		return mapper.selectNotice(student_id);
	}
	
	public List<Activity> selectNoticeU(String unit_id){
		
		return mapper.selectNoticeU(unit_id);
	}
	
	public List<Activity> selectAudit(String unit_id){
		return mapper.selectAudit(unit_id);
	}
	public List<Activity> selectYes(String unit_id){
		return mapper.selectYes(unit_id);
	}
	public List<Activity> selectNo(String unit_id){
		return mapper.selectNo(unit_id);
	}
	
	public Activity findById(String id){
		return mapper.findById(id);
	}
	
	public int update(Activity activity){
		return mapper.update(activity);
	}

}
