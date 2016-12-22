package com.platform.mapper;

import java.util.List;

import com.platform.entity.User;
import com.platform.mapper.base.BaseMapper;

public interface UserMapper extends BaseMapper<String,User>{
	
	public  void  addUser(User  user);

	public User userLogin(String username);

	public List<User> selectUnitName();

	public List<User> selectCommitteeName();

	public User findById(String id);
	
	
}
