<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="s_header.jsp"%>
<body>
	<div class="col-md-12">
		<%@ include file="s_navbar.jsp"%>
		<div class="col-md-12">
			<p><strong>本周活动公示结果：</strong><p>
			<table class="table table-bordered table-hover" id="t_notice" border="2" cellpadding="0" cellspacing="0">
				<thead>
					<tr class="table-thead-bg-font">
						<td>id</td>
						<td>活动</td>
						<td>活动名称</td>
						<td>日期</td>
						<td>开始时间</td>
						<td>结束时间</td>
						<td>喷绘悬挂时间</td>
					</tr>
				</thead>
				<tbody>
					<c:if test="${empty nlist}">
						<tr>
							<td  colspan="12">
								<div class="list_empty">无活动公示结果信息</div>
							</td>
						</tr>
					</c:if>
					<c:forEach items="${nlist}" var="list" varStatus="vs">
						<tr>
							<td>${vs.index+1}</td>
							<td>${list.a_content}</td>
							<td>${list.a_content}</td>
							<td>${list.date}</td>
							<td>${list.time_start}</td>
							<td>${list.time_end}</td>
							<td>0000:00:00</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		
		<%@ include file="../common/address.jsp"%>
	</div>




</body>
</html>