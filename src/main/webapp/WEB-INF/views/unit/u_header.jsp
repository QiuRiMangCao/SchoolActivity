<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

 <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
 <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 <!--[if lt IE 9]>
   <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
   <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
 <![endif]-->

<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js">
	
</script>
<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js">
	
</script>
<script
	src="${pageContext.request.contextPath}/resources/js/checkinput.js">
	
</script>
<link
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css"
	rel="stylesheet" type="text/css">

<link href="${pageContext.request.contextPath}/resources/css/style.css"
	rel="stylesheet" type="text/css">
	
<title>主管责任单位管理页面</title>

</head>

<%
	int iMaxInactiveInterval = request.getSession(false).getMaxInactiveInterval();
%>

<script type="text/javascript">
  ID = window.setTimeout("TimeOut();", <%=iMaxInactiveInterval * 1000%>);
  function TimeOut(){
	  var msg = "身份过期，重新登录！";
	  if(confirm(msg)){
		  
	   } 
	 window.location.href = "${pageContext.request.contextPath}/login/logout";
  }
</script>

