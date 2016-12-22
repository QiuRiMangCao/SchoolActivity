package com.platform.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.entity.Activity;
import com.platform.entity.User;
import com.platform.mapper.ActivityMapper;
import com.platform.mapper.UserMapper;
import com.platform.service.ActivityService;
import com.platform.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper ;
	
	
	@Override
	public void addUser(User user) {
		userMapper.addUser(user);
		
	}


	@Override
	public User userLogin(String username) {
		
		return userMapper.userLogin(username);
	}


	@Override
	public List<User> selectUnitName() {
		return userMapper.selectUnitName();
	}


	@Override
	public List<User> selectCommitteeName() {
		return userMapper.selectCommitteeName();
	}


	@Override
	public User findById(String id) {
		return userMapper.findById(id);
	}


	@Override
	public int update(User user1) {
		
		return userMapper.update(user1);
	}

}
