package com.platform.entity;

/**
 * 用户名实体
 * @author CEO
 * @Time 2016/9/14
 */
public class User {
	
	private String id;//id随机生成的32位字母
	
	private String username;//登陆名
	
	private String password;//登陆密码
	
	private Integer user_state;//用户状态
	
	private Integer user_type;//用户类别
	
	private String create_time;//登陆用户创建的时间
	
	private String user_super_id;//用户对应的上级单位
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public String getCreate_time() {
		return create_time;
	}

	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}

	public Integer getUser_state() {
		return user_state;
	}

	public void setUser_state(Integer user_state) {
		this.user_state = user_state;
	}

	public Integer getUser_type() {
		return user_type;
	}

	public void setUser_type(Integer user_type) {
		this.user_type = user_type;
	}

	public String getUser_super_id() {
		return user_super_id;
	}

	public void setUser_super_id(String user_super_id) {
		this.user_super_id = user_super_id;
	}

	
	
	public User() {
		super();
	}

	public User(String id, String username, String password, Integer user_state, Integer user_type, String create_time,
			String user_super_id) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.user_state = user_state;
		this.user_type = user_type;
		this.create_time = create_time;
		this.user_super_id = user_super_id;
	}

	
	
	
	

}
