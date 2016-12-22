<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="address-bottom">
	<p>@Nunsoft #2015# 大连东软信息学院</p>
</div>

<!-- 时间插件 -->
<script src="${pageContext.request.contextPath}/resources/js/date/selectUi.js" type='text/javascript'></script>
<script src="${pageContext.request.contextPath}/resources/js/date/lq.datetimepick.js" type='text/javascript'></script>
<script type="text/javascript">
	$(function() {
		$("#time_start1").on("click", function(e) {
			e.stopPropagation();
			$(this).lqdatetimepicker({
				css : 'datetime-hour'
			});
		});

		$("#time_end1").on("click", function(e) {
			e.stopPropagation();
			$(this).lqdatetimepicker({
				css : 'datetime-hour'
			});
		});

		$("#date1").on("click", function(e) {
			e.stopPropagation();
			$(this).lqdatetimepicker({
				css : 'datetime-day',
				dateType : 'D',
				selectback : function() {
				}
			});
		});
	});
</script>

