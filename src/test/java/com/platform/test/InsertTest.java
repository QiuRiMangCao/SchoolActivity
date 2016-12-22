package com.platform.test;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.platform.common.utils.UUIDUtil;
import com.platform.entity.Activity;
import com.platform.service.ActivityService;

public class InsertTest extends BasicTest {
@Autowired
private ActivityService activityService;
	
//	@Test
//	public void select(){
//		List<Activity> li=activityService.selectActivity("11");
//		System.out.println("xxx:"+li.get(0).getA_phone());
//		
//	}
//	
//	@Test
//	public void insert(){
//		
//		Activity activity=new Activity();
//		activity.setId(UUIDUtil.getRandom32PK());
//		activity.setStudent("大三组织");
//		activity.setUnit("东软社团");
//		activity.setA_content("学校才艺");
//		activity.setA_place("东软三期");
//		activity.setA_person("小明");
//		activity.setA_phone("18786331525");
//		activity.setA_lenght(500);
//		activity.setA_person_number(200);
//		activity.setA_word("有时飞雪");
//		
//		//更新数据库
//		activityService.insert(activity);
//	}
	
	
	
	
}
