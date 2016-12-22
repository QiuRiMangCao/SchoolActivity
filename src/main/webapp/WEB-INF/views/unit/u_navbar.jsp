<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!--  页面最上端的导航条     -->
<nav class="navbar  bg-primary">
<div class="container-fluid">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed"
			data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
			aria-expanded="false">
			<span class="sr-only">Toggle navigation</span> <span
				class="icon-bar"></span> <span class="icon-bar"></span> <span
				class="icon-bar"></span>
		</button>
		<a class="navbar-brand"
			href="${pageContext.request.contextPath}/unit/activity/a.list"><strong>责任主管单位</strong></a>
	</div>

	<div class="collapse navbar-collapse"
		id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav" id="bar_menu">
			<li><a
				href="${pageContext.request.contextPath}/unit/activity/type.list"><strong>活动批准</strong></a></li>
			<li><a
				href="${pageContext.request.contextPath}/unit/activity/n.list"><strong>活动公告</strong></a></li>
			<li><a href="#"><strong>反馈意见</strong></a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li><a href="${pageContext.request.contextPath}/login/logout"
				style="color: #fff;" onclick="pageOut()"><strong>退出</strong></a>
			</li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li><a href="#" style="color: #fff;" data-toggle="modal"
				data-target="#UserUpdateModal"><strong>修改密码</strong></a></li>
		</ul>
	</div>
</div>
</nav>

<!-- 修改密码模态 -->
<div class="modal fade" id="UserUpdateModal" tabindex="-1" role="dialog"
	aria-labelledby="exampleModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title" id="exampleModalLabel">请修改以下内容</h4>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="username" class="control-label">用户名：</label> <input
						type="text" class="form-control" name="username" id="username"
						value="${user.username}" readonly="true">
				</div>
				<div class="form-group">
					<label for="lpassword" class="control-label">旧密码：</label> <input
						type="password" class="form-control" name="lpassword"
						id="lpassword">
				</div>
				<div class="form-group">
					<label for="password" class="control-label">新密码：</label> <input
						type="password" class="form-control" name="password"
						id="password">
				</div>
				<div class="form-group">
					<label for="qpassword1" class="control-label">确认密码：</label> <input
						type="password" class="form-control" id="qpassword"
						name="password1">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default"
						data-dismiss="modal">关闭</button>
					<button type="button" class="btn btn-primary"
						onclick="userUpdate('${user.id}')">确认修改</button>
				</div>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
	//模态的进入界面自动加载
	$("#UserUpdateModal").modal({
		backdrop : false,//是否显示遮障层，就是背景
		keyboard : false,//
		show : false
	});
	
	//用户账号修改
	function userUpdate(id) {
		var username = $("#username").val();
		var lpassword = $("#lpassword").val();
		var password = $("#password").val();
		var qpassword = $("#qpassword").val();
		if (isEmpty(username)) {
			alert("用户名不能为空");
			return false;
		}
		if (isEmpty(lpassword)) {
			alert("旧密码不能为空");
			return false;
		}
		if (isEmpty(password)) {
			alert("新密码不能为空");
			return false;
		}
		if (isEmpty(qpassword)) {
			alert("确认密码不能为空");
			return false;
		}

		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/login/u_update",
			type : "POST",
			datatype : "text",
			data : "id=" + id + "&username=" + username + "&lpassword="
					+ lpassword + "&password=" + password + "&qpassword="
					+ qpassword,
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
			},
			success : function(data) {
				alert(data.Message);
				$("#lpassword").val("");
				$("#password").val("");
				$("#qpassword").val("");
			}
		})

	}
</script>

