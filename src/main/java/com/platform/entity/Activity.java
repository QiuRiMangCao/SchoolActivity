package com.platform.entity;

import java.util.Date;

/**
 * 活动申请表单实体
 * @author CEO 
 * @Time 2016/9/14
 * 
 */

public class Activity {

	private static final long serialVersionUID = -167297095466546121L;

	private String id;// 32位id--23
	
	private String student_id;//用户信息id

	private String student;// 学生组织

	private String unit;// 主管单位
	
	private String unit_id;//主管单位id

	private String a_content;// 活动内容

	private String a_place;// 活动地点

	private String a_person;// 活动负责人

	private String a_phone;// 负责人联系电话

	/*
	private String a_time;// 活动时间
	private String a_lenght;// 活动时间长度
	 */
	private String date;//日期
	
	private String time_start;//开始时间
	
	private String time_end;//结束时间
	
	
	
	private Integer a_person_number;// 活动人数

	private String a_word;// 活动宣传文字

	private Date a_create_time;// 提交申请时间

	private Integer a_state;// 活动申请状态
	
	private String a_propas;//	活动宣传物品
	
	private String a_comments;//活动评语
	
	private Integer w_t1;//对应物品
	
	private Integer w_t2;
	
	private Integer w_t3;
	
	private Integer w_t4;
	
	private Integer w_t5;
	

	public String getStudent() {
		return student;
	}

	public void setStudent(String student) {
		this.student = student;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getA_content() {
		return a_content;
	}

	public void setA_content(String a_content) {
		this.a_content = a_content;
	}

	public String getA_place() {
		return a_place;
	}

	public void setA_place(String a_place) {
		this.a_place = a_place;
	}

	public String getA_person() {
		return a_person;
	}

	public void setA_person(String a_person) {
		this.a_person = a_person;
	}

	public String getA_phone() {
		return a_phone;
	}

	public void setA_phone(String a_phone) {
		this.a_phone = a_phone;
	}

	public Integer getA_person_number() {
		return a_person_number;
	}

	public void setA_person_number(Integer a_person_number) {
		this.a_person_number = a_person_number;
	}

	public String getA_word() {
		return a_word;
	}

	public void setA_word(String a_word) {
		this.a_word = a_word;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getA_state() {
		return a_state;
	}

	public void setA_state(Integer a_state) {
		this.a_state = a_state;
	}
	

	

	public Date getA_create_time() {
		return a_create_time;
	}

	public void setA_create_time(Date a_create_time) {
		this.a_create_time = a_create_time;
	}

	public String getA_propas() {
		return a_propas;
	}

	public void setA_propas(String a_propas) {
		this.a_propas = a_propas;
	}

	public String getA_comments() {
		return a_comments;
	}

	public void setA_comments(String a_comments) {
		this.a_comments = a_comments;
	}

	public String getUnit_id() {
		return unit_id;
	}

	public void setUnit_id(String unit_id) {
		this.unit_id = unit_id;
	}

	public String getStudent_id() {
		return student_id;
	}

	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}

	public Integer getW_t1() {
		return w_t1;
	}

	public void setW_t1(Integer w_t1) {
		this.w_t1 = w_t1;
	}

	public Integer getW_t2() {
		return w_t2;
	}

	public void setW_t2(Integer w_t2) {
		this.w_t2 = w_t2;
	}

	public Integer getW_t4() {
		return w_t4;
	}

	public void setW_t4(Integer w_t4) {
		this.w_t4 = w_t4;
	}

	public Integer getW_t3() {
		return w_t3;
	}

	public void setW_t3(Integer w_t3) {
		this.w_t3 = w_t3;
	}

	public Integer getW_t5() {
		return w_t5;
	}

	public void setW_t5(Integer w_t5) {
		this.w_t5 = w_t5;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime_start() {
		return time_start;
	}

	public void setTime_start(String time_start) {
		this.time_start = time_start;
	}

	public String getTime_end() {
		return time_end;
	}

	public void setTime_end(String time_end) {
		this.time_end = time_end;
	}
	

	public Activity() {
		super();
	}

	public Activity(String id, String student_id, String student, String unit, String unit_id, String a_content,
			String a_place, String a_person, String a_phone, String date, String time_start, String time_end,
			Integer a_person_number, String a_word, Date a_create_time, Integer a_state, String a_propas,
			String a_comments, Integer w_t1, Integer w_t2, Integer w_t3, Integer w_t4, Integer w_t5) {
		super();
		this.id = id;
		this.student_id = student_id;
		this.student = student;
		this.unit = unit;
		this.unit_id = unit_id;
		this.a_content = a_content;
		this.a_place = a_place;
		this.a_person = a_person;
		this.a_phone = a_phone;
		this.date = date;
		this.time_start = time_start;
		this.time_end = time_end;
		this.a_person_number = a_person_number;
		this.a_word = a_word;
		this.a_create_time = a_create_time;
		this.a_state = a_state;
		this.a_propas = a_propas;
		this.a_comments = a_comments;
		this.w_t1 = w_t1;
		this.w_t2 = w_t2;
		this.w_t3 = w_t3;
		this.w_t4 = w_t4;
		this.w_t5 = w_t5;
	}

	

}
