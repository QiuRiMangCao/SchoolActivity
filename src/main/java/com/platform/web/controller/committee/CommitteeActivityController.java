package com.platform.web.controller.committee;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpRequest;
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
 * 校团委 Manage
 * @author CEO
 * @Time 2016/9/14
 *
 */
@Controller
@RequestMapping("/committee/activity/")
public class CommitteeActivityController extends CommonBaseAction {
	

	@Autowired
	private UserService userService;

	@Autowired
	private ActivityService activityService;
	
	/**
	 * 获取用户Session
	 * 
	 * @return
	 */
	public User getLoginUser1() {
		return (User) getSession().getAttribute(Constants.LOGIN_USER);
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
	 * 定位到个别活动添加界面
	 * 
	 * @param model
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "activity", method = RequestMethod.GET)
	public String AddInfo(Model model,HttpSession session) {
		User users=getLoginUser1();
		model.addAttribute("users", users);
		model.addAttribute("user", users);
		return "committee/c_activity2";
	}

	/**
	 * 获取主管责任单位审查通过的所有活动
	 * 
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "a.list", method = RequestMethod.GET)
	public String findActivity(Model model,String student,HttpSession session) {
		User user = getLoginUser1();
		List<Activity> activity = activityService.findAll();//查询主管单位通过的所有活动
		List<Activity> acitvity1 = activityService.finNotice();
		List<Activity> acitvity2 = activityService.findAllNo();
		
		model.addAttribute("alist1", acitvity1);
		model.addAttribute("alist2", acitvity2);
		model.addAttribute("alist", activity);
		model.addAttribute("user", user);
		
		return "committee/c_home";
	}
	
	/**
	 * 个别活动的添加
	 * 
	 * @param model
	 * @param student
	 * @param unit_id
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
	public String addActivity(Model model, String student, String unit_id, String a_content, String a_place,
		String a_person, String a_phone,String date, String time_start, String time_end, Integer a_person_number, 
		String a_word,String[] a_propa, 
		Integer w_t1, Integer w_t2, Integer w_t3, Integer w_t4, Integer w_t5, HttpSession session,HttpServletRequest request
	) {
		
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
		if(Tools.notEmpty(student)&&Tools.notEmpty(unit_id)&&Tools.notEmpty(a_content)&&Tools.notEmpty(a_place)
				&&Tools.notEmpty(a_person)&&Tools.notEmpty(a_phone)
				&&Tools.notEmpty(date)&&Tools.notEmpty(time_start)&&Tools.notEmpty(time_end)
				){
			
			User user_unit = userService.findById(unit_id);//获取校团委对应的主管责任单位的用户信息
			
			User user=getLoginUser1();//用户登陆信息
			
			Activity activity = new Activity();
			activity.setId(UUIDUtil.getRandom32PK());
			activity.setStudent(student);
			activity.setUnit(user_unit.getUsername());
			activity.setA_content(a_content);
			activity.setA_place(a_place);
			activity.setA_person(a_person);
			activity.setA_phone(a_phone);
			
			activity.setDate(date);
			activity.setTime_start(time_start);
			activity.setTime_end(time_end);
			
			activity.setA_person_number(a_person_number);
			activity.setA_word(a_word);
			activity.setA_state(Constants.ACTIVITY_STATE_OVER);//状态为通过
			
			activity.setA_propas(sb.toString());
			activity.setStudent_id(user.getId());
			//1 校团委-主管责任单位-活动接收者||个别活动是否要显示到具体的组织中？
			//2 各组织间是否有联系？
			//3 各主管责任单位之间是否有联系?
			activity.setUnit_id(user_unit.getId());
			
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
		return "common/c_hint";
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
		User user = getLoginUser1();
		
		List<Activity> notice = activityService.finNotice();
		model.addAttribute("nlist", notice);
		model.addAttribute("user", user);
		
		return "committee/c_notice";
	}
	
	/**
	 * 批准活动申请
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
		
		Map<String,String> result=new HashMap<String,String>();
		/*Date date=new Date();
		String week=CalendarDate1.getWeek(date);
		if(week.equals("星期四")||week.equals("星期五")){*/
			
			if(Tools.notEmpty(id)&&Tools.notEmpty(a_comments)){
				
				Activity yuanA = activityService.findById(id);
				if(null!=yuanA){
					Activity activity=new Activity();
					activity.setId(id);
					activity.setA_state(Constants.ACTIVITY_STATE_OVER);
					activity.setA_comments(a_comments);
					activityService.update(activity);
					result.put("Message", "修改成功");
				}else{
					result.put("Message", "信息有误，修改失败");
				}
			}else{
				result.put("Message", "所填信息不全，添加失败");
			}
		/*}else{
			result.put("Message", "审批时间未到");
		}*/
		
		return result;
		
	}
	
	
	/**
	 * 不批准活动申请
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
		/*Date date=new Date();
		String week=CalendarDate1.getWeek(date);
		if(week.equals("星期四")||week.equals("星期五")){*/
			if(Tools.notEmpty(id)){
				Activity yuanA = activityService.findById(id);
				if(null!=yuanA){
					Activity activity=new Activity();
					activity.setId(id);
					activity.setA_state(Constants.ACTIVITY_STATE_OUT);
					activityService.update(activity);
					result.put("Message", "修改成功");
				}else{
					result.put("Message", "信息有误，修改失败");
				}
			}else{
				result.put("Message", "所填信息不全，添加失败");
			}
		/*}else{
			result.put("Message", "审批时间未到");
		}*/
		return result;
		
	}

	

}
