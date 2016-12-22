/***
 * ����Jqueryʱ����
 * ��дʱ�䣺2012��7��14��
 * version:manhuaDate.1.0.js
***/
$(function() {
	$.fn.manhuaDate = function(options) {
		var defaults = {
			Event : "click",		//����󶨵���Ӧ�¼�
			Left : 0,				//����ʱ��ͣ�������λ��
			Top : 22,				//����ʱ��ͣ�����ϱ�λ��
			fuhao : "-",			//����֮������ӷ��
			isTime : false,			//�Ƿ���ʱ��ֵĬ��Ϊfalse
			beginY : 1949,			//��ݵĿ�ʼĬ��Ϊ1949
			endY : 2049				//��ݵĽ���Ĭ��Ϊ2049
		};
		var options = $.extend(defaults,options);		
		var stc;
		if($("#calender").length<=0){
			$("body").prepend("<div class='calender'><div class='calenderContent'><div class='calenderTable'><div class='getyear'><a class='preMonth' id='preMonth'>上一月</a><select id='year'></select><select id='month'></select><a class='nextMonth' id='nextMonth'>下一月</a></div><div class='tablebg'><table id='calender' class='calendertb' cellpadding='0' cellspacing='1'><tr bgcolor='#D6D6D6'><th class='weekend'>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class='weekend noborder'>六</th></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2 noborder'></td></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2 noborder'></td></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2 noborder'></td></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2 noborder'></td></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2'></td></tr><tr><td class='weekend2'></td><td></td><td></td><td></td><td></td><td></td><td class='weekend2'></td></tr></table></div></div></div></div>");	
		}
		var $mhInput = $(this);
		var isToday = true;//�Ƿ�Ϊ����Ĭ��Ϊ��	
		var date = new Date();//���ʱ�����
		var nowYear = date.getFullYear();//��õ�ǰ���
		var nowMonth = date.getMonth() + 1;//��õ�ǰ�·�
		var today = date.getDate();//��õ�ǰ����
		var nowWeek = new Date(nowYear, nowMonth - 1, 1).getDay();//��õ�ǰ����
		var nowLastday = getMonthNum(nowMonth, nowYear);//������һ��
		//�ꡢ��������ĳ�ʼ��
		for(var i=options.beginY; i<=options.endY; i++){
			$("<option value='"+i+"'>"+i+"年</option>").appendTo($("#year"));
		}
		for(var i=1; i<=12; i++){
			$("<option value='"+i+"'>"+i+"月</option>").appendTo($("#month"));
		}		
		ManhuaDate(nowYear, nowMonth, nowWeek, nowLastday);//��ʼ��Ϊ��ǰ����		
		//��һ�°󶨵���¼�
		$("#preMonth").click(function() {
			isToday = false;
			var year = parseInt($("#year").val());
			var month = parseInt($("#month").val());		
			month = month - 1;
			if (month < 1) {
				month = 12;
				year = year - 1;
			}
			if(nowYear==year && nowMonth==month){
				isToday = true;
			}
			var week = new Date(year, month - 1, 1).getDay();
			var lastday = getMonthNum(month, year);
			ManhuaDate(year, month, week, lastday);
		});		
		//��������ĸı��¼�
		$("#year").change(function() {	
			isToday = false;				   
			var year = parseInt($(this).val());		
			var month = parseInt($("#month").val());	
			if(nowYear==year && nowMonth==month){
				isToday = true;
			}
			var week = new Date(year, month - 1, 1).getDay();
			var lastday = getMonthNum(month, year);
			ManhuaDate(year, month, week, lastday);
		});		
		//��������ĸı��¼�
		$("#month").change(function() {
			isToday = false;
			var year = parseInt($("#year").val());		
			var month = parseInt($(this).val());	
			if(nowYear==year && nowMonth==month){
				isToday = true;
			}
			var week = new Date(year, month - 1, 1).getDay();
			var lastday = getMonthNum(month, year);
			ManhuaDate(year, month, week, lastday);
		});		
		//��һ���µĵ���¼�
		 $("#nextMonth").click(function() {
			isToday = false;
			var year = parseInt($("#year").val());
			var month = parseInt($("#month").val());
		
			month = parseInt(month) + 1;
			if (parseInt(month) > 12) {
				month = 1;
				year = parseInt(year) + 1;
			}
			if(nowYear==year && nowMonth==month){
				isToday = true;
			}
			var week = new Date(year, month - 1, 1).getDay();
			var lastday = getMonthNum(month, year);
			ManhuaDate(year, month, week, lastday);
		});
		 
		 //��ʼ������
		 function ManhuaDate(year, month, week, lastday) {
			$("#year").val(year);
			$("#month").val(month)
			var table = document.getElementById("calender");
			var n = 1;
			for (var j = 0; j < week; j++) {
				table.rows[1].cells[j].innerHTML = "&nbsp;"
			}
			for (var j = week; j < 7; j++) {
				if (n == today && isToday) {				
					table.rows[1].cells[j].className="tdtoday";				
				}else {
					table.rows[1].cells[j].className="";
				}
				table.rows[1].cells[j].innerHTML = n;
				n++;
			}
			for (var i = 2; i < 7; i++) {
				for (j = 0; j < 7; j++) {
					if (n > lastday) {
						table.rows[i].cells[j].innerHTML = "&nbsp"
					}
					 else {
						if (n == today && isToday) {						
							table.rows[i].cells[j].className="tdtoday";						
						}else {
							table.rows[i].cells[j].className="";
						}
						table.rows[i].cells[j].innerHTML = n;
						n++;
					}
				}
			}
		}
		//����·ݵ�����
		function getMonthNum(month, year) {
			month = month - 1;
			var LeapYear = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true: false;
			var monthNum;
			switch (parseInt(month)) {
			case 0:
			case 2:
			case 4:
			case 6:
			case 7:
			case 9:
			case 11:
				monthNum = 31;
				break;
			case 3:
			case 5:
			case 8:
			case 10:
				monthNum = 30;
				break;
			case 1:
				monthNum = LeapYear ? 29: 28;
			}
			return monthNum;
		}		
		//ÿһ�е�����¼��ı䵱ǰ��ʽ
		$("#calender td:not(.tdtoday)").hover(function() {
			$(this).addClass("hover")
		},function() {
			$(this).removeClass("hover");
		});		
		//���ʱ���б��¼�
		$("#calender td").die().live("click",function() {	
			var dv = $(this).html();
	
			if (dv != "&nbsp;"){
				 var str = "";
				 if (options.isTime){			
					var nd = new Date();
					str = $("#year").val() + options.fuhao + $("#month").val() + options.fuhao + dv + " "+ nd.getHours()+":"+nd.getMinutes()+":"+nd.getSeconds();
				 }else{
					 var m=$("#month").val();
					if(m<10){
						if(dv<10){
							str = $("#year").val() + options.fuhao + "0"+$("#month").val() + options.fuhao +"0"+dv;
						}else{
							str = $("#year").val() + options.fuhao + "0"+$("#month").val() + options.fuhao + dv;
						}
					
					}else{
						if(dv<10){
							str = $("#year").val() + options.fuhao+$("#month").val() + options.fuhao +"0"+dv;
						}else{
							str = $("#year").val() + options.fuhao +$("#month").val() + options.fuhao + dv;
						}
//						str = $("#year").val() + options.fuhao +$("#month").val() + options.fuhao + dv;
					}
				}				 
				$("input.dateVisited").val(str);
				$("input.dateVisited").removeClass('dateVisited')
				$(".calender").hide();
			}
		});
		//�ı�����¼�
		$mhInput.live(options.Event,function(e){											
			$(this).addClass("dateVisited");
			if(stc){
				clearTimeout(stc);//���ʱ��
			}
			var iof = $(this).offset();
			$(".calender").css({ "left" : iof.left+options.Left,"top" : iof.top+options.Top });
			$(".calender").show();	
		});		
		//������뿪�ؼ������ʱ���ӳ�3��ر�
		$(".calender").live("mouseleave",function(){ 
			stc = setTimeout(function (){			
				$(".calender").hide();
				clearTimeout(stc);
			},3000);	
		});
		//������Ƶ��ؼ������ʱ����ʾ
		$(".calender").live("mousemove",function(){     
			if(stc){
				clearTimeout(stc);//���ʱ��
			}
			$(this).show();
		});	
		//�����ѡ���������ʱ�����ʱ����ֹ�ؼ���ر�
		$("#year").die().live("click",function(){     
			if(stc){
				clearTimeout(stc);//���ʱ��
			}			
		});	
		//�����ѡ���������ʱ�����ʱ����ֹ�ؼ���ر�
		$("#month").die().live("click",function(){     
			if(stc){
				clearTimeout(stc);//���ʱ��
			}			
		});	
	};
});