/***********
 *  表单验证
 */


$(function(){
	
	
	/**:::::超级管理员费用设置::*/

	$("#feeSetting").validate({
		rules : {
			personReputation:{
				required : true,
				number:true,
			},
			businessReputation:{
				required : true,
				number:true,
			},
			personReg:{
				required : true,
				number:true,
			},
			businessReg:{
				required : true,
				number:true,
			},

		},
		messages : {
			personReputation:{
				required : "不能为空",
				number:"只能是数字",
			},
			businessReputation:{
				required : "不能为空",
				number:"只能是数字",
			},
			personReg:{
				required : "不能为空",
				number:"只能是数字",
			},
			businessReg:{
				required : "不能为空",
				number:"只能是数字",
			},

		},
		onfocusout : false
	});
	
	/**********
	 * 创建费用时验证
	 */
	$("#addContrctFee").validate({
		rules : {
			critical:{
				required : true,
				number:true,
			},
			percent:{
				required : true,
				number:true,
			},

		},
		messages : {
			critical:{
				required : "不能为空",
				number:"只能是数字",
			},
			percent:{
				required : "不能为空",
				number:"只能是数字",
			},
		},
		onfocusout : false
	});
	
	
	
	
	/****
	 * 
	 * 用户登录验证
	 * 
	 */
	
	$("#loginFromValidate").validate({
		rules : {
			email : {
				required : true,
				email:true,
			},
			password:{
				required : true,
			 	minlength:6
			},
		
		},
		messages : {
			email : {
				required : "账号信息不能为空",
				email:"请输入正确的邮箱"
			},
			password:{
				required : "密码不能为空",
				minlength:"密码不能少于6位"
			},
		},
		onfocusout : false
	});
	
	
	/****
	 * 
	 * 用户修改密码
	 * 
	 */
	
	$("#validateUpdaepass").validate({
		rules : {
			oldpassword : {
				required : true,
				minlength:6
			},
			password:{
				required : true,
			 	minlength:6
			},
			repassword:{
				required : true,
			 	minlength:6,
			 	equalsTo:"#password"
			},
		
		},
		messages : {
			oldpassword : {
				required : "请输入旧密码",
				minlength:"密码不能少于6位"
			},
			password:{
				required : "密码不能为空",
				minlength:"密码不能少于6位"
			},
			repassword:{
				required : "密码不能为空",
				minlength:"密码不能少于6位",
			 	equalsTo:"两次密码不一致"
			},
		},
		onfocusout : false
	});
	
	
	
	
	
	
	
	/**
	 * 添加用户  修改用户验证
	 * 
	 */
	
	$("#addUserFormValidate").validate({
		rules : {
			userName:{
				required : true,
			},
			sex:{
				required : true,
			},
			email : {
				required : true,
				email:true,
				remote : { // 验证邮箱是否存在
					type : "POST",
					url : "findUserByEmail", 
					data : {
						roleName : function() {
							return $("#email").val();
						}
					}
				}
			},
			phone:{
				required : true,
				digits:true,
				rangelength : [ 11, 11 ],
			},
			anencyType:{
				required : true,
			},
			userId:{
				required:true,
			},
			orgId:{
				required:true,
			},
			address:{
				required:true,
			},
			imageFile:{
				required:true,
			},
			idCard : {
				required : true,
				rangelength:[18,18],
				remote : { // 验证身份证号是否存在
					type : "POST",
					url : "findUserByIdCard", 
					data : {
						idCard : function() {
							return $("#idCard").val();
						}
					}
				}
			},
		},
		messages : {
			userName:{
				required : "请填写姓名",
			},
			sex:{
				required : "请选择性别",
			},
			email : {
				required : "请填写Email",
				email:"请填写正确的邮箱地址",
				remote:"当前邮箱已存在"
			},
			phone:{
				required : "请填写移动电话（11位）",
				digits:"电话号码必须是数字",
			},
			anencyType:{
				required : "请选择代理类型",
			},
			userId:{
				required:"请选择省代理",
			},
			orgId:{
				required:"请选择机构",
			},
			address:{
				required:"归属地不能为空",
			},
			imageFile:{
				required:"文件不能为空!",
			},
			idCard : {
				required : "请填写身份证号",
				rangelength:"身份证号应为18位",
				remote:"当前身份证已经存在",
			},
		},
		onfocusout : false
	});
	
	
	
	/*****************************
	 * 
	 * 用户 信息更新
	 * 
	 * updateUserFormValidate
	 * 
	 */
	
	
	$("#updateUserFormValidate").validate({
		rules : {
			userName:{
				required : true,
			},
			sex:{
				required : true,
			},
			anencyType:{
				required : true,
			},
			userId:{
				required:true,
			},
			orgId:{
				required:true,
			},
			phone:{
				required : true,
				digits:true,
				rangelength : [ 11, 11 ],
			},
		
		},
		messages : {
			userName:{
				required : "请填写姓名",
			},
			sex:{
				required : "请选择性别",
			},
			email : {
				required : "请填写Email",
				email:"请填写正确的邮箱地址",
				remote:"当前邮箱已存在"
			},
			anencyType:{
				required : "请选择代理类型",
			},
			userId:{
				required:"请选择省代理",
			},
			orgId:{
				required:"请选择机构",
			},
			phone:{
				required : "请填写移动电话（11位）",
				digits:"电话号码必须是数字",
			},
		},
		onfocusout : false
	});
	
	
	
	
	
	
	
	
	
	
	/***
	 * 添加角色验证
	 */
	$("#validateRoleFrom").validate({
		rules : {
			roleName : {
				required : true,
				remote : { // 验证角色名是否存在
					type : "POST",
					url : "role/exist", 
					data : {
						roleName : function() {
							return $("#roleName").val();
						}
					}
				}
			},
			roleDesc:{
				required : true,
			},
		
		},
		messages : {
			roleName : {
				required : "请填写角色名称",
				remote:"当前角色已存在"
			},
			roleDesc:{
				required : "请填写角色描述",
			},
		},
		onfocusout : false
	});
	
	
	
	/***
	 * 添加角色验证
	 */
	$("#groupRoleValidate").validate({
		rules : {
			groupName : {
				required : true,
				remote : { // 验证用户组名是否存在
					type : "POST",
					url : "group/exist", 
					data : {
						roleName : function() {
							return $("#groupName").val();
						}
					}
				}
			},
			groupDesc:{
				required : true,
			},
			roleId:{
				required:true,
			},
		
		},
		messages : {
			groupName : {
				required : "请填写用户组名称",
				remote:"当前用户组已存在"
			},
			groupDesc:{
				required : "请填写用户组描述",
			},
			roleId:{
				required : "请选择角色",
			},
		},
		onfocusout : false
	});
	

	
	
	/****
	 * 组织机构添加验证
	 */
	
	$("#validateOrgAdd").validate({
		rules : {
			userId : {
				required : true,
			},
			angencyType:{
				required : true,
			},
			orgName:{
				required : true,
			},
			orgDesc:{
				required : true,
			},
		},
		messages : {
			userId : {
				required : "请选择代理员",
			},
			angencyType:{
				required : "请选择机构类型",
			},
			orgName:{
				required : "机构名称不能为空",
			},
			orgDesc:{
				required : "机构描述不能为空",
			},
		},
		onfocusout : false
	});
	
	
	
	
	/****
	 * 组织机构 更新 验证
	 */
	
	$("#validateOrgUpdate").validate({
		rules : {
			userId : {
				required : true,
			},
			angencyType:{
				required : true,
			},
			orgName:{
				required : true,
			},
			orgDesc:{
				required : true,
			},
		},
		messages : {
			userId : {
				required : "请选择代理员",
			},
			angencyType:{
				required : "请选择机构类型",
			},
			orgName:{
				required : "机构名称不能为空",
			},
			orgDesc:{
				required : "机构描述不能为空",
			},
		},
		onfocusout : false
	});
	
	
	
	
	
	/***********************
	 * 个人信息注册 验证
	 */
	

	$("#personInfo").validate({
		rules : {
			userName : {
				required : true,
			},
			IdCard:{
				required : true,
				rangelength : [ 18, 18 ],
				remote : { // 验证用户组名是否存在
					type : "POST",
					url : "person/validateIdCard", 
					data : {
						roleName : function() {
							return $("#IdCard").val();
						}
					}
				}
			},
			sex:{
				required : true,
			},
			
			phone:{
				required : true,
				digits:true,
				rangelength : [ 11, 11 ],
			},
			imageFile:{
				required : true,
			},
//			address:{
//				required:true,
//			}
		},
		messages : {
			userName : {
				required : "姓名不能为空",
			},
			IdCard:{
				required : "身份证号码不能为空",
				rangelength: "身份证号码必须为18位",
				remote:"当前用户已经添加"
			},
			sex:{
				required : "请选择性别",
			},
			
			phone:{
				required : "电话号码不能为空",
				digits:"电话号码之能是数字",
				rangelength : "电话号码必须为11位",
			},
			imageFile:{
				required : "附件不能为空",
			},
		},
		onfocusout : false
	});
	
	
	/***
	 * businessInfo  企业信息登记
	 */
	

	$("#businessInfo").validate({
		rules : {
			businessName : {
				required : true,
			},
			IdCard:{
				required : true,
				remote : { // 验证企业信息是否已经添加
					type : "POST",
					url : "business/validateBusinessId", 
					data : {
						roleName : function() {
							return $("#businessId").val();
						}
					}
				}
			},
			userName:{
				required : true,
			},
			
			phone:{
				required : true,
				digits:true,
				rangelength : [ 11, 11 ],
			},
			imageFile:{
				required : true,
			},
		},
		messages : {
			businessName : {
				required : "法人代表不能为空",
			},
			IdCard:{
				required : "企业编码不能为空",
				remote:"当前企业信息已经添加"
			},
			userName:{
				required:"企业名称不能为空",
			},
			phone:{
				required : "电话号码不能为空",
				digits:"电话号码之能是数字",
				rangelength : "电话号码必须为11位",
			},
			imageFile:{
				required : "附件不能为空",
			},
		},
		onfocusout : false
	});
	
	
	/**
	 * 用户财产登记验证
	 * personAsset
	 */

	$("#personAsset").validate({
		rules : {
			idCard:{
				required : true,
//				remote : { // 验证用户是否存在
//					type : "POST",
//					url : "person/assetsIdCard", 
//					data : {
//						roleName : function() {
//							return $("#IdCard").val();
//						}
//					}
//				}
			},
			assetsName:{
				required : true,
			},
			
			assetsId:{
				required : true,
			},
			assetsValue:{
				required : true,
				digits:true,
			},
			assessment:{
				required : true,
			},
			mortgage:{
				required : true,
			},
			imageFile:{
				required : true,
			},
		},
		messages : {
			idCard:{
				required : "证件号码不能为空",
//				remote:"当前用户不存在"
			},
			assetsName:{
				required:"资产名称",
			},
			assetsId:{
				required : "请输入资产有效编码",
			},
			assetsValue:{
				required : "请输入余值/价值",
				digits:"价值必须是数字",
		
			},
			assessment:{
				required : "请选择是否有评估报告",
			},
			mortgage:{
				required : "请选择抵押状态",
			},
			imageFile:{
				required : "请上传附件",
			},
		},
		onfocusout : false
	});
	
	
	
	/*************企业资产注册*****************/
	
	$("#businessAssets").validate({
		rules : {
			businessId:{
				required : true,
//				remote : { // 验证用户是否存在
//					type : "POST",
//					url : "person/assetsIdCard", 
//					data : {
//						roleName : function() {
//							return $("#IdCard").val();
//						}
//					}
//				}
			},
			assetsName:{
				required : true,
			},
			
			assetsId:{
				required : true,
			},
			assetsValue:{
				required : true,
				digits:true,
			},

		},
		messages : {
			businessId:{
				required : "企业编码不能为空",
//				remote:"当前用户不存在"
			},
			assetsName:{
				required:"资产名称",
			},
			assetsId:{
				required : "请输入资产有效编码",
			},
			assetsValue:{
				required : "请输入价值",
				digits:"价值必须是数字",
		
			},
		},
		onfocusout : false
	});
	
	
	
	/*************模板验证*******************/
	$("#mastePlate").validate({
		rules : {
			mTitle:{
				required : true,
			},
			investorNum:{
				required:true,
			},
			loanNum:{
				required:true,
			},
			contentType:{
				required:true,
			},
			guaranteeNum:{
				required:true,
			}
		},
		messages : {
			mTitle:{
				required : "模板名称不能为空",
			},
			investorNum:{
				required:"请选择出资方人数",
			},
			loanNum:{
				required:"请选择借款方人数",
			},
			contentType:{
				required:"请选择合同类型",
			},
			guaranteeNum:{
				required:"请选择担保方人数",
			}
		},
		onfocusout : false
	});
	
	
	/***上传范本验证**/

	$("#addContractModelValidate").validate({
		rules : {
			modelName:{
				required : true,
			},
			modelFile:{
				required:true,
			},
		},
		messages : {
			modelName:{
				required : "范本名称不能为空",
			},
			modelFile:{
				required:"附件不能为空",
			},		
		},
		onfocusout : false
	});
	
	/*************业绩查询验证*************/
	$("#performanceSearch").validate({
		rules : {
			agency:{
				required : true,
			},
			org:{
				required : true,
			},
			option:{
				required: true,
			}
		},
		messages : {
			agency:{
				required : "请选择代理员",
			},
			org:{
				required:"请选择代理机构",
			},
			option:{
				required:"请选择查询条件",
			}
		},
		onfocusout : false
	});
	
	
	
	
	/***用户办理合同验证****/
	$("#createContentData").validate({
		rules : {
			blanks:{
				required : true,
			},
			quota:{
				required :  true,
				digits:true,
			},
			used:{
				required :  true,
			},
			dataStart:{
				required :  true,
			},
			dataEnd:{
				required :  true,
			},
			takeEffectDate:{
				required :  true,
			},
			contractfiles:{
				required :  true,
			}
		},
		messages : {
			blanks:{
				required : "合同不完整，请补充",
			},
			quota:{
				required:"贷款额度不能为空",
				digits:"只能填写数字",
			},
			used:{
				required :  "用户不能为空",
			},
			dataStart:{
				required :  "合同期限不能为空",
			},
			dataEnd:{
				required :  "合同期限不能为空",
			},
			takeEffectDate:{
				required :  "合同生效日期不能为空",
			},
			contractfiles:{
				required :  "附件信息不能为空",
			}
		},
		onfocusout : false
	});
	
	
	
	
	
	
	
	/***管理员账单查询****/
	$("#admin_account").validate({
		rules : {
			option:{
				required : true,
			},
//			taskBegin:{
//				required :  true,
//			},
		},
		messages : {
			option:{
				required : "请选择查询条件",
			},
//			taskBegin:{
//				required:"请选择起始时间",
//			}
		},
		onfocusout : false
	});
	
	
	
	/***信用查询****/
	$("#creditSearch").validate({
		rules : {
			keyWord:{
				required : true,
			},
		},
		messages : {
			keyWord:{
				required : "关键字不能为空！",
			},
		},
		onfocusout : false
	});
	
	
	
	
	
	/**添加网页链接****/
	$("#addnetLinkValidate").validate({
		rules : {
			linkName:{
				required : true,
			},
			linkUrl:{
				required : true,
			},
		},
		messages : {
			linkName:{
				required :"网站名称不能为空",
			},
			linkUrl:{
				required : "请输入网站链接",
			},
		},
		onfocusout : false
	});
	
	
});
