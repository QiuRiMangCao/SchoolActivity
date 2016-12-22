<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/font-awesome.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/hint.css">
<title>操作结果</title>
</head>

<body>

	<div class="side_box">
		<div class="content_box">
			<div class="icon_box">
				<p><i class="fa fa-commenting"></i>&nbsp;&nbsp;提示消息</p>
			</div>
			<div class="result">${result}</div>
			
			<div class="result_home">
			
				<a href="${pageContext.request.contextPath}/committee/activity/a.list"><i class="fa fa-mail-reply"></i>&nbsp;&nbsp;返回主页面</a>
				
			</div>
		</div>
	</div>


</body>
</html>