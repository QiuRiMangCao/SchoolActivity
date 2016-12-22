package com.platform.mapper.base;

import java.util.List;
import java.util.Map;

/**
 * 
 * @author Mr.Server
 *
 * @param <S>
 * @param <T>
 */
public interface BaseMapper<S, T> {


    /**
     * 插入 数据
     */
    int insert(T t);

    /**
     * 删除
     */
    int delete(T t);

    /**
     *修改信息    
     */
    int update(T  t);

    /**
     *条件查询查一个   
     */
    T  queryOne(T t);

    /***
     * 条件查询查多个 
     */
    List<T> queryAll(T  t);
    
    /**
     * @Title 根据条件查询数据记录数
     * @param map
     *            查询条件
     * @return 记录数
     */
    int findAllByFilterCount(T t);

}