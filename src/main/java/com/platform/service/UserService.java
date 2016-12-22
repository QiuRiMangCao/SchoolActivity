package com.platform.service;

import java.util.List;

import com.platform.entity.User;

public interface UserService {

	public void addUser(User user);

	public User userLogin(String username);

	public List<User> selectUnitName();

	public List<User> selectCommitteeName();
	
	public User findById(String id);//根据id来查询

	public int update(User user1);
	
	
}
