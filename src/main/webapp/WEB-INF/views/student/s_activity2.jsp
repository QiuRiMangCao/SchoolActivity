<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>



<%@ include file="s_header.jsp"%>

<script type="text/javascript">
	$(function() {
		$("#AgreementModal").modal({
			backdrop : false,//是否显示遮障层，就是背景
			keyboard : false,//
			show : true
		});
	});

	function addActivityCheck() {
		var student = $("#student").val();
		var unit = $("#unit").val();
		var a_content = $("#a_content").val();
		var a_place = $("#a_place").val();
		var a_person = $("#a_person").val();
		var a_phone = $("#a_phone").val();
		
		var date = $("#date1").val();
		var time_start = $("#time_start1").val();
		var time_end = $("#time_end1").val();
		
		var a_person_number = $("#a_person_number").val();
		var a_word = $("#a_word").val();
		
		var w_t1 = $("#w_t1").val();
		var w_t2 = $("#w_t2").val();
		var w_t3 = $("#w_t3").val();
		var w_t4 = $("#w_t4").val();
		var w_t5 = $("#w_t5").val();
		
		
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

		//只要在表单提交到后台之前，将控件解禁就好用了
		document.getElementById("student").disabled = false;
		document.getElementById("unit").disabled = false;
	}
	
	function agreementClose() {
		window.location.href = "${pageContext.request.contextPath}/student/activity/a.list";
	}

	function agreementAgree() {
		$('#AgreementModal').modal('hide');
	}
</script>

<body>
	<div class="col-md-12">
		<%@ include file="s_navbar.jsp"%>
		<form class="form-horizontal"
			action="${pageContext.request.contextPath}/student/activity/addActivity"
			method="post" enctype="multipart/form-data">
			<div class="col-md-12">
				<p><strong>活动申报请填写一下内容：</strong><p>
				<div class="table_count">
					<table class="table table-bordered table-hover">
						<tr>
							<!-- disabled=“true”这个意思是禁用了这个控件，相当于没有这个控件了，所以不管里面是什么数值后台是取不到的 -->
							<td class="table1"><label>学生组织名称：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="student" id="student"
								value="${user.username}" disabled="true">
							<td class="table1"><label>主管责任单位：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="unit" id="unit"
								value="${users.username}" disabled="true">
						</tr>
						<tr>
							<td class="table1"><label>活动内容：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="a_content" id="a_content"
								placeholder="活动内容">
							<td class="table1"><label>活动地点：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="a_place" id="a_place"
								placeholder="活动地点">
						</tr>
						<tr>
							<td class="table1"><label>活动负责人：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="a_person" id="a_person"
								placeholder="活动负责人">
							<td class="table1"><label>负责人联系方式：</label></td>
							<td class="table2"><input type="text"
								class="form-control" name="a_phone" id="a_phone"
								placeholder="赋值人联系方式">
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
							<td class="table2"><input type="text"
								class="form-control" name="a_person_number" id="a_person_number"
								placeholder="活动参与人数">
						</tr>
					</table>
				</div>

				
				<div class="table_count">
					<label> 活动需要物质及其数量：</label>
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
					<label>活动宣传物品：</label> 
					<label> <input type="checkbox"
						id="box1" name="a_propa" value="1"> 喷绘
					</label> <label> <input type="checkbox" id="box2" name="a_propa"
						value="2"> 海报
					</label> <label> <input type="checkbox" id="box3" name="a_propa"
						value="3"> 展板
					</label> <label> <input type="checkbox" id="box4" name="a_propa"
						value="4"> 条幅
					</label> <label> <input type="checkbox" id="box5" name="a_propa"
						value="5"> 拱门
					</label>
				</div>

				<div class="publicity">
					<label>活动宣传文字内容：</label>
					<textarea class="form-control" rows="3" name="a_word" id="a_word"></textarea>
				</div>

				<div class="checkbox">
					<label> <input type="checkbox" id="box6" name="a_propa"
						value="6"> 活动是否涉及售卖物品
					</label> <label> <input type="checkbox" id="box7" name="a_propa"
						value="7"> 活动是否用电
					</label> <label> <input type="checkbox" id="box8" name="a_propa"
						value="8"> 活动是否有校外单位参与
					</label>
				</div>

				<div class="commit">
					<button type="submit" class="btn btn-primary btn-lg btn-block"
						onclick="return addActivityCheck();">提交申请</button>
					<button type="reset" class="btn btn-default btn-lg btn-block">重置申请</button>
				</div>
			</div>
		</form>

		<!-- 模态框 -->
		<div class="modal fade" id="AgreementModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close"></button>
						<h4 class="modal-title" id="myModalLabel">
							学生活动须知
						</h4>
					</div>
					<div class="modal-body">

						<b>一、外出活动学生必须统一穿着校服。 </b><hr>
						<b>二、出发前到指定地点集队,排队上车不能争先恐后。 </b><hr>
						<b>三、必须严格遵守有关时间的规定包括出发时间,景点活动时间,回校时间等。 </b><hr>
						<b>四、活动结束回校学生不能贪恋游玩而迟归队以免延误全年级学生回校。  </b><hr>
						<b>六、行车中途停车加油,休息时谨记所乘汽车车牌号码不能离开加油站或休息
						地点。  
						</b><hr>
						<b>七、未经带队老师允许不能擅自离队,回程行车中途无特殊情况不能离队回家如有特殊情况,须由班主任请示校领导获得同意方可学生回家后打电
						话知会班主任。 
						</b>
						 
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"
							onclick="agreementClose()">取消</button>
						<button type="button" class="btn btn-primary" onclick="agreementAgree()">同意</button>
					</div>
				</div>
			</div>
		</div>

		<%@ include file="../common/address.jsp"%>
	</div>

</body>
</html>