package com.platform.web.controller.student;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
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
import com.platform.common.utils.UUIDUtil;
import com.platform.entity.Activity;
import com.platform.entity.User;
import com.platform.service.ActivityService;
import com.platform.service.UserService;

/**
 * 学生组织  Manage
 * @author CEO
 * @Time 2016/9/14
 */
@Controller
@RequestMapping("/student/activity/")
public class StudentActivityController extends CommonBaseAction{

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
	 * 取消活动申请
	 * 
	 * @param model
	 * @param id
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "a_cancel", method = RequestMethod.GET)
	public Map<String,String> aCancel(Model model,String id,HttpSession session){
		Map<String,String> result=new HashMap<String,String>();//用来返回操作是否成功
		if (Tools.notEmpty(id)){
			Activity a_cancel = activityService.findById(id);
			if(null != a_cancel){
				if(a_cancel.getA_state()!=4){
					Activity activity = new Activity();
					activity.setId(id);
					activity.setA_state(Constants.ACTIVITY_STATE_CANCEL);
					activityService.update(activity);
					result.put("Message", "取消活动申请成功");
				}else{
					result.put("Message", "活动申请已经通过,不能取消");
				}
				
			}else{
				result.put("Message", "该活动申请不存在");
			}
	
		}else{
			result.put("Message", "所填信息不全");
		}
		return result;
	}
	
	/**
	 * 定位到活动添加界面
	 * 
	 * @param model
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "activity", method = RequestMethod.GET)
	public String AddInfo(Model model,HttpSession session) {
		/*Date date=new Date();
		String week=CalendarDate1.getWeek(date);
		if(week.equals("星期一")||week.equals("星期二")){*/
		
			User user=getLoginUser1();
			User users=userService.findById(user.getUser_super_id());
			model.addAttribute("users",users);
			model.addAttribute("user", user);
			return "student/s_activity2";
			
		/*}else{
			
			return "redirect:/student/activity/a.list";
		}*/
		
	}

	/**
	 * 根据id获取信息
	 * 
	 * @param model
	 * @param id
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "xdata", method = RequestMethod.GET)
	public Activity findxData(Model model,String id,HttpSession session) {
		Activity xdata = activityService.findById(id);
		
		return xdata;
	}
	
	
	/**
	 * 获取学生组织的活动申请详情
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
		activity = activityService.selectActivity(user.getId());
		model.addAttribute("alist", activity);
		model.addAttribute("user",user);
		return "student/s_home";
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
		notice = activityService.selectNotice(user.getId());//根据student_id来显示公告内容
		model.addAttribute("nlist", notice);
		model.addAttribute("user",user);
		return "student/s_notice";
	}
	
	/**
	 * 学生组织活动的添加
	 * 
	 * @param model
	 * @param student
	 * @param unit
	 * @param a_content
	 * @param a_place
	 * @param a_person
	 * @param a_phone
	 * @param a_person_number
	 * @param a_word
	 * @param date
	 * @param time_start
	 * @param time_end
	 * @param a_propa
	 * @param w_t1
	 * @param w_t2
	 * @param w_t3
	 * @param w_t4
	 * @param w_t5
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "addActivity", method = RequestMethod.POST)
	public String addActivity(Model model, String student, String unit, String a_content, String a_place,
		String a_person, String a_phone,Integer a_person_number, 
		String a_word,
		String date,String time_start,String time_end,  
		String[] a_propa, 
		Integer w_t1, Integer w_t2, Integer w_t3, Integer w_t4, Integer w_t5, 
		HttpSession session, HttpServletRequest request) {
		
		//限制：活动是否在12点之前开展
		
		
		StringBuffer sb = new StringBuffer(); 
		if(null!=a_propa&&0<=a_propa.length){
			for(int i = 0; i < a_propa.length; i++){ 
			    sb.append(a_propa[i]); 
			}
		}else{
			sb.append("");
		}
		
		//此次的integer如何验证判断？
		if(Tools.notEmpty(student)&&Tools.notEmpty(unit)&&Tools.notEmpty(a_content)&&Tools.notEmpty(a_place)
				&&Tools.notEmpty(a_person)&&Tools.notEmpty(a_phone)
				&&Tools.notEmpty(date)&&Tools.notEmpty(time_start)&&Tools.notEmpty(time_end)
				){
			User user=getLoginUser1();
			
			Activity activity = new Activity();
			activity.setId(UUIDUtil.getRandom32PK());
			activity.setStudent(student);
			activity.setUnit(unit);
			activity.setA_content(a_content);
			activity.setA_place(a_place);
			activity.setA_person(a_person);
			activity.setA_phone(a_phone);
			
			activity.setDate(date);
			activity.setTime_start(time_start);
			activity.setTime_end(time_end);
			
			activity.setA_person_number(a_person_number);
			activity.setA_word(a_word);
			activity.setA_state(Constants.ACTIVITY_STATE_AUDIT);
			
			activity.setA_propas(sb.toString());
			activity.setStudent_id(user.getId());//学生id
			activity.setUnit_id(user.getUser_super_id());//主管单位id，以后每个主管只查看这个id中的活动内容
			
			activity.setW_t1(w_t1);
			activity.setW_t2(w_t2);
			activity.setW_t3(w_t3);
			activity.setW_t4(w_t4);
			activity.setW_t5(w_t5);
			
			activityService.insert(activity);
			request.setAttribute("result", "添加活动成功");
		}else{
			request.setAttribute("result", "所填信息不全，添加活动失败");
		}
		return "common/hint";
	}
	
	/**
	 * 修改申请活动信息
	 * 
	 * @param model
	 * @param h_id
	 * @param student
	 * @param unit
	 * @param a_content
	 * @param a_place
	 * @param a_person
	 * @param a_phone
	 * @param a_person_number
	 * @param a_word
	 * @param date
	 * @param time_start
	 * @param time_end
	 * @param a_propa
	 * @param w_t1
	 * @param w_t2
	 * @param w_t3
	 * @param w_t4
	 * @param w_t5
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "updateActivity", method = RequestMethod.POST)
	public String updateActivity(Model model, String h_id , String student, String unit, String a_content, String a_place,
		String a_person, String a_phone, 
		String date, String time_start,  String time_end, 
		Integer a_person_number, 
		String a_word,String[] a_propa,
		Integer w_t1, Integer w_t2, Integer w_t3, Integer w_t4, Integer w_t5,
		HttpSession session,HttpServletRequest request) {
		
		StringBuffer sb = new StringBuffer(); 
		if(null!=a_propa&&0<=a_propa.length){
			for(int i = 0; i < a_propa.length; i++){ 
			    sb.append(a_propa[i]); 
			}
		}else{
			sb.append("");
		}
		if(Tools.notEmpty(student)&&Tools.notEmpty(unit)&&Tools.notEmpty(a_content)&&Tools.notEmpty(a_place)
				&&Tools.notEmpty(a_person)&&Tools.notEmpty(a_phone)
				&&Tools.notEmpty(date)&&Tools.notEmpty(time_start)&&Tools.notEmpty(time_end)
				
				){
			Activity yuanA=activityService.findById(h_id);
			if(null!=yuanA){
				Activity activity = new Activity();
				activity.setId(h_id);
				activity.setStudent(student);
				activity.setUnit(unit);
				activity.setA_content(a_content);
				activity.setA_place(a_place);
				activity.setA_person(a_person);
				activity.setA_phone(a_phone);
				
				activity.setDate(date);
				activity.setTime_start(time_start);
				activity.setTime_end(time_end);
				
				activity.setA_person_number(a_person_number);
				activity.setA_word(a_word);
				activity.setA_propas(sb.toString());
				activity.setA_state(Constants.ACTIVITY_STATE_AUDIT);
				
				activity.setW_t1(w_t1);
				activity.setW_t2(w_t2);
				activity.setW_t3(w_t3);
				activity.setW_t4(w_t4);
				activity.setW_t5(w_t5);
				
				activityService.update(activity);
				request.setAttribute("result", "活动修改成功");
			}else{
				request.setAttribute("result", "活动不存在,修改失败");
			}
		}else{
			request.setAttribute("result", "所填信息不全,修改失败");
		}
		return "common/hint";
	}
	
	
	
	

}
