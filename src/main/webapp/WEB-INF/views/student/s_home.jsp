<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ include file="s_header.jsp"%>

<script type="text/javascript">
	$(function() {
		startTime();//时间初识化
		$("#DetailsModal").modal({
			backdrop : false,//是否显示遮障层，就是背景
			keyboard : false,//
			show : false
		});

		$("#ActivityUpdateModal").modal({
			backdrop : false,//是否显示遮障层，就是背景
			keyboard : false,//
			show : false
		});
	});

	function addActivityCheck() {
		var student = $("#student1").val();
		var unit = $("#unit1").val();
		var a_content = $("#a_content1").val();
		var a_place = $("#a_place1").val();
		var a_person = $("#a_person1").val();
		var a_phone = $("#a_phone1").val();
		
		var date = $("#date1").val();
		var time_start = $("#time_start1").val();
		var time_end = $("#time_end1").val();
		
		var a_person_number = $("#a_person_number1").val();
		var a_word = $("#a_word1").val();
		
		
		//字符串截取
		var timeStart=time_start.split(":");
		var timeEnd=time_end.split(":");
		
		var s_time=parseInt(timeStart[0]);
		var s_minute=parseInt(timeStart[1]);
		var e_time=parseInt(timeEnd[0]);
		var e_minute=parseInt(timeEnd[1]);
		
		if (isEmpty(student)) {
			alert("学生组织不能为空");
			return false;
		}
		

		if (isEmpty(student)) {
			alert("学生组织不能为空");
			return false;
		}
		if (isEmpty(unit)) {
			alert("主管责任单位不能为空");
			return false;
		}
		if (isEmpty(a_content)) {
			alert("活动内容不能为空");
			return false;
		}
		if (isEmpty(a_place)) {
			alert("活动地点不能为空");
			return false;
		}
		if (isEmpty(a_person)) {
			alert("活动负责任不能为空");
			return false;
		}
		if(isEmpty(a_phone)||!isMobile(a_phone)){
			alert("请输入正确的手机号码格式！");
			return false;
		}
		if (isEmpty(date)) {
			alert("活动日期不能为空");
			return false;
		}
		if (isEmpty(time_start)) {
			alert("活动开始时间不能为空");
			return false;
		}
		if (isEmpty(time_end)) {
			alert("活动结束时间不能为空");
			return false;
		}
		
		//1 12点之前开展的活动不行
		if(!((s_time>12||((s_time=12)&&(s_minute>0)))&&(s_time<24))){
			alert("活动开展必须在12点后");
			return false;
		}
		//2 活动长度不能为0和负数
		if(!((s_time<e_time)||((s_time=e_time)&&(e_minute>s_minute)))){
			alert("结束时间要比开始时间大");
			return false;
		}
		
		if (isEmpty(a_person_number)||!isPositiveInteger(a_person_number)) {
			alert("请输入正确格式的的活动人数");
			return false;
		}
		
		if (isEmpty(a_word)) {
			alert("宣传内容不能为空");
			return false;
		}

		document.getElementById("student1").disabled = false;
		document.getElementById("unit1").disabled = false;

	}

	function detailsClose() {
		window.location.href = "${pageContext.request.contextPath}/student/activity/a.list";
	}

	function activityCancel(id) {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/student/activity/a_cancel",
			type : "GET",
			datatype : "text",
			data : "id=" + id,
			error : function(XMLHttpRequest, textStatus, errorThrown) {

			},
			success : function(data) {
				alert(data.Message);
				window.location.reload();//刷新界面
			}
		})

	}

	function activityUpdate(id) {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/student/activity/xdata",
			type : "GET",
			datatype : "text",
			data : "id=" + id,
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				
			},
			success : function(data) {
				var propas = (data.a_propas).split("");
				var checkbox1 = document.getElementById("box1");
				var checkbox2 = document.getElementById("box2");
				var checkbox3 = document.getElementById("box3");
				var checkbox4 = document.getElementById("box4");
				var checkbox5 = document.getElementById("box5");
				var checkbox6 = document.getElementById("box6");
				var checkbox7 = document.getElementById("box7");
				var checkbox8 = document.getElementById("box8");
				for (var i = 0; i < propas.length; i++) {
					if (propas[i] == "1")
						checkbox1.checked = true;
					if (propas[i] == "2")
						checkbox2.checked = true;
					if (propas[i] == "3")
						checkbox3.checked = true;
					if (propas[i] == "4")
						checkbox4.checked = true;
					if (propas[i] == "5")
						checkbox5.checked = true;
					if (propas[i] == "6")
						checkbox6.checked = true;
					if (propas[i] == "7")
						checkbox7.checked = true;
					if (propas[i] == "8")
						checkbox8.checked = true;
				}

				document.getElementById("h_id").value = data.id;
				document.getElementById("a_content1").value = data.a_content;
				document.getElementById("a_place1").value = data.a_place;
				document.getElementById("a_person1").value = data.a_person;
				document.getElementById("a_phone1").value = data.a_phone;
				
				document.getElementById("date1").value = data.date;
				document.getElementById("time_start1").value = data.time_start;
				document.getElementById("time_end1").value = data.time_end;
				
				document.getElementById("a_person_number1").value = data.a_person_number;
				document.getElementById("a_word1").value = data.a_word;
				document.getElementById("w_t1").value = data.w_t1;
				document.getElementById("w_t2").value = data.w_t2;
				document.getElementById("w_t3").value = data.w_t3;
				document.getElementById("w_t4").value = data.w_t4;
				document.getElementById("w_t5").value = data.w_t5;
			}
		})

	}

	
	function details(id) {
		var base = "${pageContext.request.contextPath}";
		$.ajax({
			url : base + "/student/activity/xdata",
			type : "GET",
			datatype : "text",
			data : "id=" + id,
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				
			},
			success : function(data) {
				var propas = (data.a_propas).split("");
				for (var i = 0; i < propas.length; i++) {
					if (propas[i] == "1")
						$("#xcwp").append("喷绘,  ");
					if (propas[i] == "2")
						$("#xcwp").append("海报,  ");
					if (propas[i] == "3")
						$("#xcwp").append("展板,  ");
					if (propas[i] == "4")
						$("#xcwp").append("条幅,  ");
					if (propas[i] == "5")
						$("#xcwp").append("拱门,  ");
					if (propas[i] == "6")
						$("#is").append("活动涉及售卖物品 ,  ");
					if (propas[i] == "7")
						$("#is").append("活动用电 ,  ");
					if (propas[i] == "8")
						$("#is").append("活动有校外单位参与,  ");
				}

				$("#a_content").append("");
				$("#a_content").append(data.a_content);
				$("#a_place").append("");
				$("#a_place").append(data.a_place);
				$("#a_person").append("");
				$("#a_person").append(data.a_person);
				$("#a_phone").append("");
				$("#a_phone").append(data.a_phone);
				
				$("#date").append("");
				$("#date").append(data.date);
				$("#time_start").append("");
				$("#time_start").append(data.time_start);
				$("#time_end").append("");
				$("#time_end").append(data.time_end);
				
				
				$("#a_person_number").append("");
				$("#a_person_number").append(data.a_person_number);
				$("#a_word").append("");
				$("#a_word").append(data.a_word);
				$("#a_create_time").append("");
				$("#a_create_time").append(data.a_create_time);

				if (data.a_state == 1) {
					$("#a_state").append("");
					$("#a_state").append("审批中");
				}
				if (data.a_state == 2) {
					$("#a_state").append("");
					$("#a_state").append("审批中");
				}
				if (data.a_state == 3) {
					$("#a_state").append("");
					$("#a_state").append("未批准");
				}
				if (data.a_state == 4) {
					$("#a_state").append("");
					$("#a_state").append("已批准");
				}
				if (data.a_state == 5) {
					$("#a_state").append("");
					$("#a_state").append("未批准");
				}
				if (data.a_state == 6) {
					$("#a_state").append("");
					$("#a_state").append("已取消申请");
				}

				$("#w_t1_1").append("");
				$("#w_t1_1").append(data.w_t1);

				$("#w_t2_1").append("");
				$("#w_t2_1").append(data.w_t2);

				$("#w_t3_1").append("");
				$("#w_t3_1").append(data.w_t3);

				$("#w_t4_1").append("");
				$("#w_t4_1").append(data.w_t4);

				$("#w_t5_1").append("");
				$("#w_t5_1").append(data.w_t5);
			}
		})
	}

	
	function pageOut() {
		var r = confirm("您真的要退出系统吗？");
		if (r == true) {
			alert("OK");
		} else {
			alert("Cancel");
		}
	}

	
	function startTime() {
		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var date = today.getDate();
		//获取的只是0-6的数字，需要处理输出
		var day = today.getDay();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var m1 = checkTime(m);
		var s1 = checkTime(s);
		//星期处理方法
		day = checkDay(day);
		document.getElementById("time_year").innerHTML = year + ":"
				+ (month + 1) + ":" + date + "   " + day;
		document.getElementById("time_day").innerHTML = h + ":" + m1 + ":" + s1;
		t = setTimeout('startTime()', 1500);

	}

	//星期处理方法
	function checkDay(j) {
		if (j == 1) {
			j = "星期一";
		} else if (j == 2) {
			j = "星期二";
		} else if (j == 3) {
			j = "星期三";
		} else if (j == 4) {
			j = "星期四";
		} else if (j == 5) {
			j = "星期五";
		} else if (j == 6) {
			j = "星期六";
		} else if (j == 0) {
			j = "星期日";
		}
		return j;
	}
	//空位补0
	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
</script>

<body onload="startTime()">
	<div class="col-md-12">
		<%@ include file="s_navbar.jsp"%>
		<div class="col-md-12">
			<div class="col-md-6 ">
				<p><strong>组织基本信息：</strong></p>
				<table class="table table-bordered table-hover" border="2">
					<tr>
						<td class="table-thead-bg-font">组织名</td>
						<td>${user.username}</td>
					</tr>
					<tr>
						<td class="table-thead-bg-font">类型</td>
						<td><c:if test="${user.user_type=='1'}">学生组织</c:if> <c:if
								test="${user.user_type=='2'}">主管单位</c:if> <c:if
								test="${user.user_type=='3'}">校团委</c:if></td>
					</tr>
					<tr>
						<td class="table-thead-bg-font">责任单位</td>
						<td>${users.username}</td>
					</tr>
				</table>
			</div>

			<div class="col-md-6">
				<p><strong>当前时间：</strong></p>
				<div class="div_time">
					<div>
						<p id="time_year">0000:00:00 星期日</p>
						<span id="time_day">00:00:00</span>
					</div>
				</div>
			</div>

		</div>

		<div class="col-md-12">
			<div style="margin-top: 20px;">
				<p><strong>活动申请进度：</strong></p>
			</div>
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
						<td>详情</td>
						<td>操作</td>
					</tr>
				</thead>
				<tbody>
				
					<c:if test="${empty alist}">
						<tr>
							<td  colspan="12">
								<div class="list_empty">无活动申请信息</div>
							</td>
						</tr>
					</c:if>
					<!-- items：Model传递的集合，var:迭代器 -->
					<c:forEach items="${alist}" var="list" varStatus="vs">
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
							
							<td>
								<c:if test="${list.a_state=='1'}">审批中</c:if> 
								<c:if test="${list.a_state=='2'}">审批中</c:if> 
								<c:if test="${list.a_state=='3'}">未批准</c:if> 
								<c:if test="${list.a_state=='4'}">已批准</c:if> 
								<c:if test="${list.a_state=='5'}">未批准</c:if> 
								<c:if test="${list.a_state=='6'}">已取消申请</c:if>
							</td>
							<td>
								<a href="#" data-toggle="modal" data-target="#DetailsModal"
									onclick="details('${list.id}')"> <font color="#0000FF">更多信息</font>
								</a>
							</td>
							<c:if test="${list.a_state=='4'}">
								<td>
									活动已批准,无法操作
								</td>
							</c:if>
							<c:if test="${list.a_state=='6'}">
								<td>
									活动已取消,无法操作
								</td>
							</c:if>
							<c:if test="${list.a_state!='4' and list.a_state!='6'}">
								<td>
									<a href="#" onclick="activityCancel('${list.id}')"> <font
											color="#0055FF">取消活动</font>
									</a> 
									<a href="#" onclick="activityUpdate('${list.id}')" data-toggle="modal"
										data-target="#ActivityUpdateModal"> <font color="#0000FF">修改活动</font>
									</a>
								</td>
							</c:if>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>

		<!-- 信息详情模态框Modal -->
		<div class="modal fade" id="DetailsModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close"></button>
						<h4 class="modal-title" id="myModalLabel">
							活动具体信息
						</h4>
					</div>
					<div class="modal-body">
						<div>
							<table class="table table-bordered table-hover" id="t_activity"
								border="2" cellpadding="0" cellspacing="0">
								<tr>
									<td class="table-thead-bg-font">学生组织</td>
									<td>${user.username}</td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">主管单位</td>
									<td>${users.username}</td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动内容</td>
									<td id="a_content"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动地点</td>
									<td id="a_place"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动负责人</td>
									<td id="a_person"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">负责人联系电话</td>
									<td id="a_phone"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动开展日期</td>
									<td id="date"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动开始时间</td>
									<td id="time_start"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动结束时间</td>
									<td id="time_end"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动宣传文字</td>
									<td id="a_word"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">提交申请时间</td>
									<td id="a_create_time"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动申请状态</td>
									<td id="a_state"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">座椅</td>
									<td id="w_t1_1"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">帐篷</td>
									<td id="w_t2_1"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">投影仪</td>
									<td id="w_t3_1"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">幕布</td>
									<td id="w_t4_1"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">音响</td>
									<td id="w_t5_1"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动宣传物品</td>
									<td id="xcwp"></td>
								</tr>
								<tr>
									<td class="table-thead-bg-font">活动附加</td>
									<td id="is"></td>
								</tr>
							</table>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"
							onclick="detailsClose()">关闭</button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 活动修改模态框 -->
		<div class="model-view-grade">
		<div class="modal fade" id="ActivityUpdateModal" tabindex="-1" role="dialog";
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document" style="width:70%">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">
							请修改如下内容
						</h4>
					</div>
					<div>
						<form class="form-horizontal"
							action="${pageContext.request.contextPath}/student/activity/updateActivity"
							method="post" enctype="multipart/form-data">
							<div class="col-md-12">
								<div class="table_count" style="margin-top:20px;">
									<table class="table table-bordered table-hover" style="margin-right: 20px;">
										<tr>
											<td class="table1"><label>学生组织名称：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="student" id="student1" value="${user.username}"
												disabled="true">
											<td class="table1"><label>主管责任单位：</label></td>
											<td class="table2"><input type="text" class="form-control" name="unit"
												id="unit1" value="${users.username}" disabled="true">
										</tr>
										<tr>
											<td class="table1"><label>活动内容：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="a_content" id="a_content1" placeholder="活动内容">
											<td class="table1"><label>活动地点：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="a_place" id="a_place1" placeholder="活动地点">
										</tr>
										<tr>
											<td class="table1"><label>活动负责人：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="a_person" id="a_person1" placeholder="活动负责人">
											<td class="table1"><label>负责人联系方式：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="a_phone" id="a_phone1" placeholder="赋值人联系方式">
										</tr>
										<tr>
											<td class="table1"><label>活动开展日期：</label></td>
											<td class="table2">
											
											<input type="text" name="date" id="date1"
											class="form-control" value="0000-00-00" />
											
											</td>
											<td class="table1"><label>活动持续时间：</label></td>
											<td class="table2 col-md-4">
												<div class="col-md-5">
													<input type="text" name="time_start" id="time_start1"
													class="form-control" value="00:00" />
												</div>
												
												<div class="col-md-1">
													<label>至</label>
												</div>
													
												<div class="col-md-5">
													<input type="text" name="time_end" id="time_end1"
													class="form-control" value="00:00" />
												</div>
											</td>
										</tr>
										<tr>
											<td class="table1"><label>活动参与人数：</label></td>
											<td class="table2"><input type="text" class="form-control"
												name="a_person_number" id="a_person_number1"
												placeholder="活动参与人数">
										</tr>
									</table>
								</div>
								
								<div class="table_count">
									<label>活动需要物质及其数量：</label>
									<table class="table table-bordered table-hover">
										<thead>
											<tr class="table-thead-bg-font">
												<th>序号</th>
												<th>物质类别</th>
												<th>物质数量</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>座椅</td>
												<td width="20%">
													<div class="col-md-2">
														<input type="text" width="100%" name="w_t1" id="w_t1"
															value="0">
													</div>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>帐篷</td>
												<td width="20%">
													<div class="col-md-2">
														<input type="text" width="100%" name="w_t2" id="w_t2"
															value="0">
													</div>
												</td>
											</tr>
											<tr>
												<td>3</td>
												<td>投影仪</td>
												<td width="20%">
													<div class="col-md-2">
														<input type="text" width="100%" name="w_t3" id="w_t3"
															value="0">
													</div>
												</td>
											</tr>
											<tr>
												<td>4</td>
												<td>幕布</td>
												<td width="20%">
													<div class="col-md-2">
														<input type="text" width="100%" name="w_t4" id="w_t4"
															value="0">
													</div>
												</td>
											</tr>
											<tr>
												<td>5</td>
												<td>音响</td>
												<td width="20%">
													<div class="col-md-2">
														<input type="text" width="100%" name="w_t5" id="w_t5"
															value="0">
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="publicity">
									<label class>活动宣传物品：</label> <label> <input
										type="checkbox" id="box1" name="a_propa" value="1"> 喷绘
									</label> <label> <input type="checkbox" id="box2"
										name="a_propa" value="2"> 海报
									</label> <label> <input type="checkbox" id="box3"
										name="a_propa" value="3"> 展板
									</label> <label> <input type="checkbox" id="box4"
										name="a_propa" value="4"> 条幅
									</label> <label> <input type="checkbox" id="box5"
										name="a_propa" value="5"> 拱门
									</label>
								</div>
								<div class="publicity">
									<label>活动宣传文字内容：</label>
									<textarea class="form-control" rows="3" name="a_word"
										id="a_word1"></textarea>
								</div>

								<div class="checkbox">
									<label> <input type="checkbox" id="box6" name="a_propa"
										value="6"> 活动是否涉及售卖物品
									</label> <label> <input type="checkbox" id="box7"
										name="a_propa" value="7"> 活动是否用电
									</label> <label> <input type="checkbox" id="box8"
										name="a_propa" value="8"> 活动是否有校外单位参与
									</label>
								</div>
								
								<input type="hidden" value="" name="h_id" id="h_id" />
								
								<div class="commit">
									<button type="submit" class="btn btn-primary btn-lg btn-block"
										onclick="return addActivityCheck();">提交申请</button>
									<button type="reset" class="btn btn-default btn-lg btn-block">重置申请</button>
								</div>
							</div>
						</form>
					</div>
					
					<!-- <div class="modal-body"></div> -->
					<div class="modal-footer"></div>
				</div>
			</div>
		</div>
		</div>
		
		<%@ include file="../common/address.jsp"%>
	</div>
	
</body>
</html>