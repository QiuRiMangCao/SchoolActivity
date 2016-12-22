package com.platform.web.controller.login;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.platform.common.contants.Constants;
import com.platform.common.utils.Md5;
import com.platform.common.utils.Tools;
import com.platform.common.utils.UUIDUtil;
import com.platform.entity.User;
import com.platform.service.UserService;

/**
 * 登录  Login
 * @author CEO
 * @Time 2016/9/14
 */
@Controller
@RequestMapping("/login/")
public class LoginController {

	@Autowired
	private UserService userService;
	
	/**
	 * 定位到用户登陆界面
	 * 
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "info", method = RequestMethod.GET)
	public String info(Model model, String student, HttpSession session) {

		return "login";
	}

	/**
	 * 定位到用户注册界面
	 * 
	 * @param model
	 * @param student
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "register", method = RequestMethod.GET)
	public String register(Model model, String student, HttpSession session) {

		return "register";
	}

	/**
	 * 用户登陆
	 * 
	 * @param model
	 * @param checkcode
	 * @param username
	 * @param password
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "userLogin", method = RequestMethod.POST)
	public String userLogin(Model model, String checkcode, String username, String password, HttpSession session,
			HttpServletRequest request) {
		String generateCheckCode = (String) session.getAttribute("CheckCode");
		if(!(Tools.notEmpty(checkcode))){
			request.setAttribute("result", "验证不能为空");
			return "login";
		}
		if (generateCheckCode == null || !generateCheckCode.equalsIgnoreCase(checkcode)) {
			model.addAttribute("result", "验证码不正确！");// info_checkcode
			return "login";
		}
		
		if (Tools.notEmpty(username) && Tools.notEmpty(password)) {
			User user = userService.userLogin(username);
			if (null == user) {
				request.setAttribute("result", "用户不存在");
				return "login";
			}
			if (user.getUser_state() == 2) {
				request.setAttribute("result", "用户冻结,请联系管理员");
				return "login";
			}
			if (Md5.getVal_UTF8(password).equals(user.getPassword())) {
				session.setAttribute(Constants.LOGIN_USER, user);// 设置权限
				if (user.getUser_type() == 1) {
					return "redirect:/student/activity/a.list";
				}
				if (user.getUser_type() == 2) {
					return "redirect:/unit/activity/a.list";
				}
				if (user.getUser_type() == 3) {
					return "redirect:/committee/activity/a.list";
				}
			} else {
				request.setAttribute("result", "密码错误");
			}

		} else {
			request.setAttribute("result", "所填信息不全");
		}

		return "login";
	}

	/**
	 * 获取上下级
	 * 
	 * @param model
	 * @param type
	 * @param session
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "{type}", method = RequestMethod.GET)
	public Map<String, Object> getUserSuper(Model model, @PathVariable String type, HttpSession session,
			HttpServletRequest request) {
		Map<String, Object> result = new HashMap<String, Object>();
		List<User> studentSuper = null;
		List<User> unitSuper = null;
		if (type.equals("getStudentSuper")) {
			studentSuper = userService.selectUnitName();
			result.put("unit_name_list", studentSuper);// 返回的是list对象
		}
		if (type.equals("getUnitSuper")) {
			System.out.println("进入控台2");
			unitSuper = userService.selectCommitteeName();
			result.put("committee_name_list", unitSuper);
		}

		return result;

	}

	/**
	 * 添加用户
	 * 
	 * @param model
	 * @param username
	 * @param password
	 * @param password1
	 * @param usertype
	 * @param user_super
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "addUser", method = RequestMethod.POST)
	public String addUser(Model model, String username, String password, String password1, String usertype,
			String user_super, HttpSession session, HttpServletRequest request) {
		
		if (Tools.notEmpty(user_super) && Tools.notEmpty(username) && Tools.notEmpty(password)
				&& Tools.notEmpty(password1) && Tools.notEmpty(usertype)) {
			if (password.equals(password1)) {
				User user1 = userService.userLogin(username);
				if (user1 == null) {
					User user = new User();
					user.setId(UUIDUtil.getRandom32PK());
					user.setUsername(username);
					user.setPassword(Md5.getVal_UTF8(password));
					user.setUser_state(Constants.USER_STATE_ACTIVITY);
					if ("1".equals(usertype)) {
						user.setUser_type(Constants.USER_TYEP_STUDENT);
					}
					if ("2".equals(usertype)) {
						user.setUser_type(Constants.USER_TYPE_UNIT);
					}
					/*
					 * if ("3".equals(usertype)) {
					 * user.setUser_type(Constants.USER_TYPE_COMMITTEE); }
					 */
					user.setUser_super_id(user_super);
					userService.addUser(user);
					request.setAttribute("result", "注册成功");
				} else {
					request.setAttribute("result", "用户名已经存在");
				}

			} else {
				request.setAttribute("result", "二次输入的密码不一致");
			}

		} else {
			request.setAttribute("result", "所填信息不全");
		}

		return "register";
	}

	/**
	 * 退出系统
	 * 
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/login/info";
	}

	/**
	 * 用户信息修改
	 * 
	 * @param model
	 * @param id
	 * @param lpassword
	 * @param password
	 * @param qpassword
	 * @param request
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "u_update", method = RequestMethod.POST)
	public Map<String, String> u_update(Model model, String id, String lpassword, String password, String qpassword,
			HttpServletRequest request, HttpSession session) {
		// 根据id来修改信息
		Map<String, String> result = new HashMap<String, String>();

		if (Tools.notEmpty(id) && Tools.notEmpty(lpassword) && Tools.notEmpty(password) && Tools.notEmpty(qpassword)) {
			// 1 更加id来修改，2旧密码不和新密码相同 ，3新密码和确认密码必须相同，4用户名不可修改
			User user = userService.findById(id);
			if (null != user) {
				if (user.getPassword().equals(Md5.getVal_UTF8(lpassword))) {
					if (!(lpassword.equals(password))) {// 旧密码不和新密码相同
						if (password.equals(qpassword)) {
							User user1 = new User();
							user1.setId(id);
							user1.setPassword(Md5.getVal_UTF8(password));
							userService.update(user1);
							result.put("Message", "用户信息修改成功");

						} else {
							result.put("Message", "二次输入的密码不一致，修改信息失败");
						}

					} else {
						result.put("Message", "旧密码和新密码相同，修改信息失败");
					}
				} else {
					result.put("Message", "旧密码输入错误，修改信息失败");
				}

			} else {
				result.put("Message", "该用户不存在");
			}
		}else{
			result.put("Message", "所填信息不全，修改失败");
		}

		

		return result;// 跳转到绝对路径
	}
	
	
	/**
	 * 验证码
	 * 
	 * @param session
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "checkCode")
	public ResponseEntity<byte[]> checkCode(HttpSession session, HttpServletResponse response) throws IOException {

		int width = 150;
		int height = 50;
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		Graphics g = image.getGraphics();
		g.setColor(getRandColor(200, 250));
		g.fillRect(0, 0, width, height);
		g.setColor(new Color(102, 102, 102));
		g.drawRect(20, 30, width - 20, height - 30);
		g.setFont(new Font("Times New Roman", Font.PLAIN, 40));
		g.setColor(getRandColor(160, 200));
		Random RANDOM = new Random();
		// // 画随机线
		for (int i = 0; i < 155; i++) {
			int x = 5 + RANDOM.nextInt(width - 10);
			int y = 5 + RANDOM.nextInt(height - 10);
			int xl = RANDOM.nextInt(6) + 5;
			int yl = RANDOM.nextInt(12) + 5;
			g.drawLine(x, y, x + xl, y + yl);
		}
		//
		// // 从另一方向画随机线
		for (int i = 0; i < 70; i++) {
			int x = 5 + RANDOM.nextInt(width - 10);
			int y = 5 + RANDOM.nextInt(height - 10);
			int xl = RANDOM.nextInt(12) + 5;
			int yl = RANDOM.nextInt(6) + 5;
			g.drawLine(x, y, x - xl, y - yl);
		}

		// 生成随机数,并将随机数字转换为字母

		String checkCode = "";
		for (int i = 0; i < 4; i++) {

			int itmp = RANDOM.nextInt(26) + 65;
			char ctmp = (char) itmp;
			checkCode += String.valueOf(ctmp);
			g.setColor(new Color(20 + RANDOM.nextInt(110), 20 + RANDOM.nextInt(110), 20 + RANDOM.nextInt(110)));
			g.drawString(String.valueOf(ctmp), 25 * i + 20, 40);
		}
		g.dispose();

		session.setAttribute("CheckCode", checkCode);

		ByteArrayOutputStream out = new ByteArrayOutputStream();
		ImageIO.write(image, "JPEG", out);
		// 8.设置响应头通知浏览器以图片的形式打开
		response.setHeader("Content-Type", "image/jpeg");
		response.setContentType("image/jpeg");
		// 等同于response.setHeader("Content-Type","image/jpeg");
		// 9.设置响应头控制浏览器不要缓存
		// response.setDateHeader("expries", -1);
		// response.setHeader("Cache-Control", "no-cache");
		// response.setHeader("Pragma", "no-cache");

		try {
			return new ResponseEntity<byte[]>(out.toByteArray(), HttpStatus.OK);
		} finally {
			IOUtils.closeQuietly(out);
		}
	}

	Color getRandColor(int fc, int bc) {// 给定范围获得随机颜色
		Random random = new Random();
		if (fc > 255)
			fc = 255;
		if (bc > 255)
			bc = 255;
		int r = fc + random.nextInt(bc - fc);
		int g = fc + random.nextInt(bc - fc);
		int b = fc + random.nextInt(bc - fc);
		return new Color(r, g, b);
	}

}
