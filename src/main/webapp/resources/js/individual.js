/**
 *  个人用户和企业用户注册
 */

$(function(){

//	if(/msie/i.test(navigator.userAgent)){ //ie浏览器 
//		   $('#IdCard').bind("propertychange", function() { 
//		handle();
//		});
//		}else{//非ie浏览器，比如Firefox 
//		document.getElementById('IdCard').addEventListener("input", handle, false); 
//		} 
//	
	
	
	
	/***
	 * 用户信息模糊查
	 */
$('#IdCard').bind('input oninput', function() {
	if($("#IdCard").val().length>1){
		searchPersonbyIdCard($("#IdCard").val());
	}
}); 

$("#idCardLike").change(function(){
	$("#IdCard").attr("value",$(this).children('option:selected').val());
	$("#idCardLike").hide();
});
	
/*******企业信息注册******/
$('#businessId').bind('input oninput', function() {
	if($("#businessId").val().length>1){
		searchBusinessbyId($("#businessId").val());
	}
}); 
	
$("#businessIdLike").change(function(){
	$("#businessId").attr("value",$(this).children('option:selected').val());
	$("#businessIdLike").hide();
});	
	
	
	
	
	//添加成成功的提示信息
	if($("#msg").is(":visible")){
		$("#msg").animate({opacity: 1.0}, 3000).fadeOut("slow",function(){ 
		$("#msg").remove();
		});	
	}
	if($("#msgCode").is(":visible")){
		$("#msgCode").animate({opacity: 1.0}, 6000).fadeOut("slow",function(){ 
		$("#msgCode").remove();
		});	
	}
	
	
});




/**
 * 查询身份证信息
 */
function searchPersonbyIdCard(val){
	$("#idCardLike").empty();
	select = $("#idCardLike");
	$.post("findByIdCardList",{'IdCard':val},function(data){
		if(data.length>0){
			$("#idCardLike").show();
		}else{
			$("#idCardLike").hide();
		}
		/**动态加载*/
		$.each(data,function(i){
			obj = data[i];
			$("<option>").attr("value",obj.idCard).html(obj.idCard).appendTo(select);
		});
	});
}
/****************查询企业信息**************/
function searchBusinessbyId(val){
	$("#businessIdLike").empty();
	select = $("#businessIdLike");
	$.post("findByBusinessList",{'businessId':val},function(data){
		if(data.length>0){
			$("#businessIdLike").show();
		}else{
			$("#businessIdLike").hide();
		}
		/**动态加载*/
		$.each(data,function(i){
			obj = data[i];
			$("<option>").attr("value",obj.idCard).html(obj.idCard).appendTo(select);
		});
	});
}






/********添加用户时发送短信息**********/
function sendCode(){
	var phone = $("#phone").val();
//	alert(phone); 
//	if(phone=" " || phone==null){
//		$("#sendCode").html("请输入手机号码");
//		$("#sendCode").show();
//	}
	$.post("sendCode",{'phone':phone},function(data){
		if(data=="true"){
			$("#msgCode").html("验证码已经发送……");
//			$("#msgCode").is(":block");
			$("#msgCode").show();
			$("#validate_input").show();
			$("#phoneButton").html("重发");
		}
	});	
}


/******************验证短信*****************/
function checkCode(){
	//获取验证码
	var code = $("#validateCode").val();
	//获取手机号
	var phone = $("#phone").val();
	
	
	//获取验证码并从验证
	$.post("checkCode",{'code':code,'phone':phone},function(data){
		if(data=="true"){
			$("#submit_show").show();
		}
	});
	
}