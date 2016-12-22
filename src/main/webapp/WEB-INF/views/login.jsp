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
	src="${pageContext.request.contextPath}/resources/js/jquery-1.9.1.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-ui-1.9.2.custom.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-migrate-1.2.1.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="/ n.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="/ n.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
<script type="text/javascript">
	function change() {
		var img = document.getElementById("checkCodeImg");
		img.src = "${pageContext.request.contextPath}/login/checkCode?"
				+ new Date;
	}
</script>


</head>
<body background="#fff">
	<div class="row" style="margin-top: 160px;">
		<div class="col-md-8 col-md-offset-2"
			style="border: 1px solid white; padding: 20px;">
			<img class="col-md-7" src="${pageContext.request.contextPath}/resources/images/login.png" style="height: 350px;" />
			<form action="${pageContext.request.contextPath}/login/userLogin"
				method="post" style="margin-top: 40px;">
				&nbsp;&nbsp;&nbsp;<font size="3" color="red">${result}</font>
				<div class="form-group" style="color: black;">
					<label for="inputGoodsPrice" class="col-md-5 control-label">用户名：</label>
					<div class="col-md-5">
						<input type="text" class="form-control" name="username"
							placeholder="请输入用户名">
					</div>
				</div>

				<div class="form-group" style="color: black; ">
					<label for="inputGoodsPriceLB" class="col-sm-5 control-label" style="margin-top:5px;">密码：</label>
					<div class="col-md-5">
						<input type="password" class="form-control" name="password"
							placeholder="请输入密码">
					</div>
				</div>
				<div class="form-group" style="color: white;">

					<div class="col-md-5">
						<br>
						<div class="row">
							<div class="col-md-5">
								<img name="checkCodeImg" id="checkCodeImg"
									src="${pageContext.request.contextPath}/login/checkCode"
									style="display: block; float: left"
									class="form-control col-md-5" /> <a href="javascript:change();"
									style="display: block; float: left; line-height: 37px; color: black;">
									看不清？<span style="color: black">换一张</span>
								</a>
							</div>
							<div class="col-md-7">
								<input type="text" class=" form-control" name="checkcode"
									placeholder="验证码">
							</div>
						</div>
					</div>
				</div>

				<div class="form-group">
					<div class=" col-md-5">
						<button type="submit"
							class="btn btn-primary col-md-4 col-md-offset-1"
							style="margin-top: 10px;">登录</button>
							<a class="btn btn-default col-md-4 col-md-offset-1"
							style="margin-top: 10px;" href="${pageContext.request.contextPath}/login/register">注册</a>
					</div>
				</div>
			</form>
		</div>
	</div>

</body>
</html>