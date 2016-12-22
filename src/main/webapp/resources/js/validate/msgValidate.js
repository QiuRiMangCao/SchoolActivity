/**
 * 短信验证
 * author:mr_server
 */


var InterValObj; // timer变量，控制时间
var count = 60; // 间隔函数，1秒执行
var curCount;// 当前剩余秒数

// timer处理函数
function SetRemainTime() {
	if (curCount == 0) {
		window.clearInterval(InterValObj);// 停止计时器
		$(".sendMsg").removeClass("disabled");// 启用按钮
		$(".sendMsg").text("重新发送验证码");
	} else {
		curCount--;
		$(".sendMsg").text(curCount + "秒后重新获取");
	}
}
function SetRemainTime_Reset() {
	if (curCount == 0) {
		window.clearInterval(InterValObj);// 停止计时器
		$("#getTelphoneValidateCode_reset").removeClass("pure-button-disabled");// 启用按钮
		$("#getTelphoneValidateCode_reset").text("重新发送验证码");
	} else {
		curCount--;
		$("#getTelphoneValidateCode_reset").text(curCount + "秒后重新获取");
	}
}