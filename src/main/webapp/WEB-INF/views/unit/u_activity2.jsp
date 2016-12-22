<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ include file="u_header.jsp"%>

<script type="text/javascript">
	$(function() {
		$("#CommentUpdateModal").modal({
			backdrop : false,//是否显示遮障层，就是背景
			keyboard : false,//
			show : false
		});
	});

	function activityYes(id) {
		var base = "${pageContext.request.contextPath}";
		var a_comments = $('#comments').val();//默认评语,
		$.ajax({
			url : base + "/unit/activity/yes",
			type : "GET",
			datatype : "text",
			data : "id=" + id + "&a_comments=" + a_comments,
			error : function(XMLHttpRequest, textStatus, errorThrown) {

			},
			success : function(data) {
				alert(data.Message);
				window.location.reload();//刷新界面
			}
		})
	}

	function t_No(id) {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/unit/activity/no",
			type : "GET",
			datatype : "text",
			data : "id=" + id,
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
			},
			success : function(data) {
				alert(data.Message);
				window.location.reload();//刷新界面
			}
		})
	}

	//活动不同通过
	function No(id) {
		var r = confirm("你确定不通过该活动？");
		if (r == true) {
			t_No(id);

		} else {
			alert("取消操作");
		}
	}

	function m_close() {
		window.location.href = "${pageContext.request.contextPath}/unit/activity/type.list";
	}

	function m_agree(id1) {
		$('#CommentUpdateModal').modal('hide');
		activityYes();

	}
</script>

<body>
	<div class="col-md-12">
		<%@ include file="u_navbar.jsp"%>
		<div class="col-md-12">
			<div>
				<p>
					<strong>未审查活动：</strong>
				</p>
				<table class="table table-bordered table-hover" id="t_activity"
					border="2" cellpadding="0" cellspacing="0">
					<thead>
						<tr class="table-thead-bg-font">
							<td>id</td>
							<td>内容</td>
							<td>地点</td>
							<td>日期</td>
							<td>开始时间</td>
							<td>结束时间</td>
							<td>人数</td>
							<td>负责人</td>
							<td>责任单位</td>
							<td>申请进度</td>
							<td>审批</td>
						</tr>
					</thead>
					<tbody>
						<c:if test="${empty auditList}">
							<tr>
								<td  colspan="12">
									<div class="list_empty">无未审查活动信息</div>
								</td>
							</tr>
						</c:if>
						<c:forEach items="${auditList}" var="list" varStatus="vs">
							<tr>
								<td>${vs.index+1}</td>
								<td>${list.a_content}</td>
								<td>${list.a_place}</td>
								<td>${list.date}</td>
								<td>${list.time_start}</td>
								<td>${list.time_end}</td>

								<td>${list.a_person_number}</td>
								<td>${list.a_person}</td>
								<td>${list.unit}</td>
								<td><c:if test="${list.a_state=='1'}">未审查</c:if> <c:if
										test="${list.a_state=='3'}">未通过</c:if> <c:if
										test="${list.a_state=='2'}">已审查</c:if></td>
								<td><a href="#" onclick="activityYes('${list.id}')"><font
										color="#0000FF">通过</font></a> <a href="#"
									onclick="No('${list.id}')"><font color="#770055">不通过</font></a>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
				<p>
					<strong>已审查活动：</strong>
				<p>
				<table class="table table-bordered table-hover" id="t_activity"
					border="2" cellpadding="0" cellspacing="0">
					<thead>
						<tr class="table-thead-bg-font">
							<td>id</td>
							<td>内容</td>
							<td>地点</td>
							<td>日期</td>
							<td>开始时间</td>
							<td>结束时间</td>
							<td>人数</td>
							<td>负责人</td>
							<td>责任单位</td>
							<td>申请进度</td>
						</tr>
					</thead>
					<tbody>
						<c:if test="${empty yesList}">
							<tr>
								<td  colspan="12">
									<div class="list_empty">无已审查活动信息</div>
								</td>
							</tr>
						</c:if>
						<c:forEach items="${yesList}" var="list" varStatus="vs">
							<tr>
								<td>${vs.index+1}</td>
								<td>${list.a_content}</td>
								<td>${list.a_place}</td>
								<td>${list.date}</td>
								<td>${list.time_start}</td>
								<td>${list.time_end}</td>

								<td>${list.a_person_number}</td>
								<td>${list.a_person}</td>
								<td>${list.unit}</td>
								<td><c:if test="${list.a_state=='1'}">未审查</c:if> <c:if
										test="${list.a_state=='3'}">未通过</c:if> <c:if
										test="${list.a_state=='2'}">已审查</c:if></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
				<p>
					<strong>未通过的活动：</strong>
				<p>
				<table class="table table-bordered table-hover" id="t_activity"
					border="2" cellpadding="0" cellspacing="0">
					<thead>
						<tr class="table-thead-bg-font">
							<td>id</td>
							<td>内容</td>
							<td>地点</td>
							<td>日期</td>
							<td>开始时间</td>
							<td>结束时间</td>
							<td>人数</td>
							<td>负责人</td>
							<td>责任单位</td>
							<td>申请进度</td>
						</tr>
					</thead>
					<tbody>
						<c:if test="${empty noList}">
							<tr>
								<td  colspan="12">
									<div class="list_empty">无未通过的活动信息</div>
								</td>
							</tr>
						</c:if>
						<c:forEach items="${noList}" var="list" varStatus="vs">
							<tr>
								<td>${vs.index+1}</td>
								<td>${list.a_content}</td>
								<td>${list.a_place}</td>
								<td>${list.date}</td>
								<td>${list.time_start}</td>
								<td>${list.time_end}</td>

								<td>${list.a_person_number}</td>
								<td>${list.a_person}</td>
								<td>${list.unit}</td>
								<td><c:if test="${list.a_state=='1'}">未审查</c:if> <c:if
										test="${list.a_state=='3'}">未通过</c:if> <c:if
										test="${list.a_state=='2'}">已审查</c:if></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>

		<!-- 默认批语模态框Modal -->
		<div class="modal fade" id="CommentUpdateModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close"></button>
						<h4 class="modal-title" id="myModalLabel">默认评语</h4>
					</div>
					<div class="modal-body">
						<!-- 添加默认不可修改的评语 -->
						<div>
							<textarea class="form-control" rows="3" disabled id="comments"
								name="comments">
								我单位已对该活动进行审查，已对该活动参与学生进行安全教育。该活动符合我校有关要求，活动内容积极健康
								，活动中无商业售卖行为，已落实安全管理细则。活动后学生将对场地进行卫生清理
							</textarea>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"
							onclick="m_close()">取消</button>
						<button type="button" class="btn btn-primary" onclick="m_agree()">同意</button>

					</div>
				</div>
			</div>
		</div>

		<%@ include file="../common/address.jsp"%>
	</div>




</body>
</html>