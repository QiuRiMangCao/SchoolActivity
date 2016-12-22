<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

 <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
 <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 <!--[if lt IE 9]>
   <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
   <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
 <![endif]-->

<link
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css"
	rel="stylesheet" type="text/css">
	
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.9.1.js">
</script>

<script
	src="${pageContext.request.contextPath}/resources/js/jquery-ui-1.9.2.custom.min.js">
</script>

<script
	src="${pageContext.request.contextPath}/resources/js/jquery-migrate-1.2.1.min.js">
</script>

<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js">
</script>

<script type="text/javascript">

	$(document).ready(function () { 
		  $("#usertype").bind("change",function(){ 
		    if($(this).val()==0){
		      return; 
		    } 
		    else if($(this).val()==1){
		    	student_super();
			} 
		    else if($(this).val()==2){
		    	unit_super();
			}else{
				return;
			}
		  }); 
		});
	
	
	/* 获取注册页面上的上级下拉框 */
	function unit_super() {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/login/getUnitSuper",
			type : "GET",
			datatype : "text",
			data : "",
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus); 
			},
			success : function(data) {
				var data1=eval(data.committee_name_list); 
				$("#super_type").empty();
			
		  		for(key in data1)     
	  			{     				
		 		  $('#super_type')
		          .append($("<option></option>")
		          .attr("value",data1[key].id)
		          .text(data1[key].username));
	  			}  
				}
			})
		}
	
	
	
	function student_super() {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/login/getStudentSuper",
			type : "GET",
			datatype : "text",
			data : "",
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus); 
			},
			success : function(data) {
				var data1=eval(data.unit_name_list); 
				$("#super_type").empty();
			
		  		for(key in data1)     
	  			{     				
		 		  $('#super_type')
		          .append($("<option></option>")
		          .attr("value",data1[key].id)
		          .text(data1[key].username));
	  			}  
				}
			})
	}
	
</script>

</head>
<body background="#fff">
	<div class="row" style="margin-top: 160px;">
		<div class="col-md-8 col-md-offset-2"
			style="border: 1px solid white; padding:20px;">
			<img class="col-md-7" src="${pageContext.request.contextPath}/resources/images/login.png" style="height: 350px;" />
			<form action="${pageContext.request.contextPath}/login/addUser"
				method="post">
				<div class="form-group" style="color: black;">
					&nbsp;&nbsp;&nbsp;<font size="3" color="red" style="margin-top: -120px">${result}</font>
				</div>
				
				<div class="form-group" style="color: black;">
					<label for="inputGoodsPrice" class="col-md-5 control-label" style="margin-top: -17px;">用户名：</label>
					<div class="col-md-5">
						<input type="text" class="form-control" name="username"
							placeholder="请输入用户名">
					</div>
				</div>

				<div class="form-group" style="color: black;">
					<label for="inputGoodsPriceLB" class="col-sm-5 control-label" style="margin-top: 5px;">密码：</label>
					<div class="col-md-5">
						<input type="password" class="form-control" name="password"
							placeholder="请输入密码">
					</div>
				</div>
				<div class="form-group" style="color: black;">
					<label for="inputGoodsPriceLB" class="col-sm-5 control-label" style="margin-top: 5px;">确认密码：</label>
					<div class="col-md-5">
						<input type="password" class="form-control" name="password1"
							placeholder="请输入确定密码">
					</div>
				</div>
				<div class="form-group" style="color: black;">
					<label for="inputGoodsPriceLB" class="col-sm-5 control-label" style="margin-top: 5px;">用户类型：</label>
					<div class="col-md-5">
						<select class="form-control" name="usertype" id="usertype">
							<option value="0" selected="selected">请选择上级单位</option>
			  				<option value="1">学生组织</option>
			  				<option value="2">主管单位</option>
			  				<!-- <option value="3">校团委</option> -->
						</select>
					</div>
				</div>
				<div class="form-group" style="color: black;">
					<label for="inputGoodsPriceLB" class="col-sm-5 control-label" style="margin-top: 5px;">上级单位：</label>
					<div class="col-md-5">
						<select class="form-control" name="user_super" id="super_type">
		  				
						</select>
					</div>
				</div>

				<div class="form-group">
					<div class=" col-md-5">
						<button type="submit"
							class="btn btn-primary col-md-4 col-md-offset-1"
							style="margin-top:10px; ">注册</button>
							<a class="btn btn-default col-md-4 col-md-offset-1"
							style="margin-top: 10px;" href="${pageContext.request.contextPath}/login/info">登陆</a>
					</div>
				</div>
			</form>
		</div>
	</div>

</body>
</html>