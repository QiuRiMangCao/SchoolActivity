package com.platform.web.controller.unit;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.platform.common.contants.Constants;
import com.platform.common.utils.CommonBaseAction;
import com.platform.common.utils.Tools;
import com.platform.entity.Activity;
import com.platform.entity.User;
import com.platform.service.ActivityService;
import com.platform.service.UserService;

/**
 * 主管责任单位  Manage
 * @author CEO
 * @Time 2016/9/14
 *
 */
@Controller
@RequestMapping("/unit/activity/")
public class UnitActivityController extends CommonBaseAction{


	@Autowired
	private ActivityService activityService;
	
	@Autowired
	private UserService userService;
	
	/**
	 * 获取用户Session
	 * 
	 * @return
	 */
	public User getLoginUser1() {
		return (User) getSession().getAttribute(Constants.LOGIN_USER);
	}
	
	/**
	 * 根据用户信息获取主管责任单位旗下的活动
	 * 定位到主界面
	 * 
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "a.list", method = RequestMethod.GET)
	public String findActivity(Model model,String student,HttpSession session) {
		
		User user=getLoginUser1();
		User users=userService.findById(user.getUser_super_id());
		model.addAttribute("users",users);
		
		List<Activity> activity = null ;
		activity = activityService.selectActivityU(user.getId());
		model.addAttribute("alist", activity);
		model.addAttribute("user",user);
		return "unit/u_home";
	}
	
	/**
	 * 活动批准的类别
	 * 
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "type.list", method = RequestMethod.GET)
	public String findType(Model model,String student,HttpSession session) {
		/*Date date=new Date();
		String week=CalendarDate1.getWeek(date);
		if(week.equals("星期三")||week.equals("星期四")){*/
		
			User user=getLoginUser1();
			List<Activity> audit = null ;
			List<Activity> yes = null ;
			List<Activity> no = null ;
			
			/*未审查的活动*/
			audit = activityService.selectAudit(user.getId());
			/*已经通过审查的活动*/
			yes = activityService.selectYes(user.getId());
			/*未通过的活动*/
			no = activityService.selectNo(user.getId());
			
			model.addAttribute("auditList", audit);
			model.addAttribute("yesList", yes);
			model.addAttribute("noList", no);
			
			model.addAttribute("user",user);
			
			return "unit/u_activity2";
		/*}else{
			return "redirect:/unit/activity/a.list";
		}*/
	}
	
	/**
	 * 定位到活动公告界面
	 * 	
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "n.list", method = RequestMethod.GET)
	public String findNotice(Model model,String student,HttpSession session) {
		User user=getLoginUser1();
		List<Activity> notice = null ;
		notice = activityService.selectNoticeU(user.getId());//根据unit_id来显示公告内容
		//这里获取的可能是多条数据
		model.addAttribute("nlist", notice);
		model.addAttribute("user",user);
		
		return "unit/u_notice";
	}
	
	
	/**
	 * 通过审查
	 * 
	 * @param model
	 * @param id
	 * @param a_comments
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "yes", method = RequestMethod.GET)
	public Map<String,String> updateYes(Model model,String id,String a_comments,HttpSession session) {
		Map<String,String> result=new HashMap<String,String>();//用来返回操作是否成功
		if(Tools.notEmpty(id)&&Tools.notEmpty(a_comments)){
			Activity yuanA = activityService.findById(id);
			if(null!=yuanA){
				Activity activity=new Activity();
				activity.setId(id);
				activity.setA_state(Constants.ACTIVITY_STATE_YES);
				activity.setA_comments(a_comments);
				activityService.update(activity);
				result.put("Message", "修改成功");
			}else{
				result.put("Message", "信息有误，修改失败");
			}
		
		
		}else{
			result.put("Message", "所填信息不全，添加失败");
		}
		return result;
		
	}
	
	
	/**
	 * 不通过审查
	 * 
	 * @param model
	 * @param id
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "no", method = RequestMethod.GET)
	public Map<String,String> updateNo(Model model,String id,HttpSession session) {
		Map<String,String> result=new HashMap<String,String>();//用来返回操作是否成功
		if(Tools.notEmpty(id)){
			Activity yuanA = activityService.findById(id);
			if(null!=yuanA){
				Activity activity=new Activity();
				activity.setId(id);
				activity.setA_state(Constants.ACTIVITY_STATE_NO);
				activityService.update(activity);
				result.put("Message", "修改成功");
			}else{
				result.put("Message", "信息有误，修改失败");
			}
		}else{
			result.put("Message", "所填信息不全，添加失败");
		}
		return result;
		
	}

	

}
