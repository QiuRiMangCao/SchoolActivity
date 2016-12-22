package com.platform.entity.base;

import java.io.Serializable;

/**
 * 
 * @author Mr.Server
 *
 * @param <E>
 */
public interface BaseEntity<E extends Serializable> extends Serializable {

	public E getId();

}
