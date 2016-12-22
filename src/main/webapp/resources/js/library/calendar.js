;window.replace = function() {
    return ""
}; (function(c) {
    var f = {
        _cache_: {},
        VERSION: "1.0.2",
        DKEY: "yyyy-mm",
        MASK: "yyyy-mm-dd",
        log: function(a) {
            f._cache_.logs || (f._cache_.logs = []);
            if (!a) return f._cache_.logs;
            f._cache_.logs.push(a)
        },
        pad: function(a, b) {
            a += "";
            for (b = b || 2; a.length < b;) a = "0" + a;
            return a
        },
        format: function(a, b) {
            b = b || this.MASK;
            var d = a.getDate(),
            c = f.pad;
            a.getDay();
            var e = a.getMonth(),
            g = a.getFullYear(),
            l = a.getHours(),
            k = a.getMinutes(),
            h = a.getSeconds(),
            z = a.getTime(),
            p = {
                d: d,
                dd: c(d),
                m: e + 1,
                mm: c(e + 1),
                yy: String(g).slice(2),
                yyyy: g,
                H: l,
                M: k,
                S: h,
                L: c(z, 3)
            };
            return b.replace((/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|"[^"]*"|'[^']*'/g),
            function(a) {
                return (a in p ? p[a] : a.slice(1, a.length - 1))
            })
        },
        parseDateInt: function(a) {
            "string" == typeof a && (a = a.toDate());
            return (a ? parseInt(f.format(a, "yyyymmdd"), 10) : !1)
        },
        addMonth: function(a, b) {
            return new Date(a.getFullYear(), a.getMonth() + b, 1)
        },
        get: function(a) {
            if (!a) return f.log("Date is null, Can't create calendar data structure."),
            null;
            var b = f.format(a, "yyyy-mm");
            f._cache_[b] || f._create(a, b);
            return f._cache_[b]
        },
        _create: function(a, b) {
            var d = a.getFullYear(),
            c = a.getMonth();
            a.getDay();
            a.getDate();
            var e = (new Date(d, c, 1)).getDay() - 1; (new Date(d, c + 1, 0)).getDate();
            for (var g = [], l = 0; 42 > l; l++) {
                var k = new Date(d, c, l - e),
                h = f.format(k, "yyyy-mm-dd"),
                k = {
                    o: k,
                    k: h,
                    i: parseInt(h.replace((/-/gi), ""), 10),
                    y: k.getFullYear(),
                    m: k.getMonth(),
                    d: k.getDate(),
                    w: k.getDay()
                };
                g.push(k)
            }
            return f._cache_[b] = g
        }
    },
    m = new Date,
    l = null,
    h = function(a, b) {
        this.setting = {
            options: {
                container: c.container,
                reference: !1,
                step: 2,
                minDate: null,
                maxDate: null,
                startDate: null,
                endDate: null,
                permit: null,
                prohibit: null,
                weekday: "0123456",
                render: "default",
                showAlways: !1,
                showOptions: !1,
                showWeek: !0,
                nextEl: null,
                rangeColor: "#D9E5F4",
                defaultDate: null,
                date: null,
                tipText: "yyyy-mm-dd",
                zindex: 9999
            },
            string: {
                header: "\u8bf7\u9009\u62e9\u65e5\u671f",
                title: "yyyy\u5e74m\u6708",
                week: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
                weekText: "pic_sun pic_mon pic_tue pic_wed pic_thu pic_fir pic_sat".split(" "),
                todayText: ["pic_today", "pic_tomorrow", "pic_aftertomorrow"]
            },
            classNames: {
                select: "day_selected",
                nothismonth: "day_over",
                blankdate: "day_no",
                today: "today",
                tomorrow: "",
                aftertomorrow: ""
            },
            listeners: {
                onBeforeShow: null,
                onShow: null,
                onChange: null
            },
            template: {
                wrapper: '<div class="calendar_wrap">\n<div class="calendar_content" id="${uid}"></div>\n<a class="month_prev" href="javascript:void(0);" data-bind="prev"></a>\n<a class="month_next" href="javascript:void(0);" data-bind="next"></a>\n</div>',
                calendar: '<div class="calendar_month${monthclass}">\n<div class="calendar_title">${title}</div>\n<dl class="calendar_day">\n<dt class="weekend">\u65e5</dt><dt>\u4e00</dt><dt>\u4e8c</dt><dt>\u4e09</dt><dt>\u56db</dt><dt>\u4e94</dt><dt class="weekend">\u516d</dt>\n<dd>\n{{each data}}\n{{if isfestival}}<a href="javascript:void(0);" ${classes}><span class="c_day_festival" ${attr}>${day}</span>{{else}}<a href="javascript:void(0);" ${classes} ${attr}>${day}{{/if}}</a>\n{{/each}}\n</dd>\n</dl>\n</div>',
                styles: "\n.calendar_wrap{position:relative;display:inline-block;padding:3px 5px 0;font-size:12px;font-family:tahoma,\u200bArial,\u200bHelvetica,\u200bsimsun,\u200bsans-serif;border:1px solid #999;background:#fff;*display:inline;*zoom:1;box-shadow:0 3px 5px #ccc;}.calendar_content{background:#bbb;}.calendar_month{float:left;overflow:hidden;width:182px;text-align:center;}.calendar_title{height:23px;line-height:23px;font-weight:bold;color:#fff;text-align:center;background-color:#004fb8;}.month_next,.month_prev{position:absolute;top:3px;width:23px;height:23px;color:#fff;background:#2d7ce7 url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/un_calender_index.png) no-repeat;cursor:pointer;cursor:pointer;}.month_prev{left:5px;}.month_next{right:5px;float:right;background-position:100% 0;}.month_prev:hover{background-color:#62adf1;background-position:0 -26px;}.month_next:hover{background-color:#62adf1;background-position:100% -26px;}.calendar_day{overflow:hidden;padding-top:4px;padding-bottom:5px;}.calendar_day dt{display:inline;float:left;width:26px;height:22px;line-height:20px;color:#666;border-bottom:2px solid #fff;background:#ececec;}.calendar_day .weekend{font-weight:bold;color:#f90;}.calendar_day dd{_width:185px;}.calendar_day dd a{float:left;overflow:hidden;width:26px;height:24px;line-height:22px;border:1px solid #fff;border-width:1px 0;font-size:11px;font-weight:bold;color:#005ead;text-decoration:none;cursor:pointer;}.calendar_day a:hover,.calendar_day .today,.calendar_day .day_selected,.calendar_day .c_festival_select,.calendar_day .c_festival_select:hover{background:#e6f4ff url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/un_calender_index.png) no-repeat;}.calendar_day a:hover{background-color:#e6f4ff;background-position:-26px -53px;text-decoration:none;}.calendar_day .today{background-color:#fff5d1;background-position:0 -82px;}.calendar_day .day_over,.calendar_day .day_no{font-weight:normal;color:#dbdbdb;outline:none;cursor:default;}.calendar_day .day_over:hover,.calendar_day .day_no:hover{background:#fff;}.calendar_day .day_selected,.calendar_day .day_selected:hover{background-color:#629be0;background-position:0 -53px;color:#fff;}.calendar_day .c_festival_select,.calendar_day .c_festival_select:hover{background-color:#ffe6a6;background-image:url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/un_calender_index.png);background-position:0 -111px;}.calendar_month.other{width:192px;}.calendar_month.other .calendar_day{margin-left:4px;padding-left:4px;border-left:2px solid #bbb;}.calendar_day .c_festival_select,.calendar_day .c_festival_select:hover{background-color:#ffe6a6;background-image:url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/un_calender_index.png);background-position:0 -111px;}.c_yuandan span,.c_chuxi span,.c_chunjie span,.c_yuanxiao span,.c_qingming span,.c_wuyi span,.c_duanwu span,.c_zhongqiu span,.c_guoqing span,.c_jintian span,.c_shengdan span{width:24px;height:24px;background-image:url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/un_festivals.png?v=1);background-repeat:no-repeat;text-indent:-9999em;overflow:hidden;display:block;}.c_yuandan span{background-position:0 0;}.c_chuxi span{background-position:0 -32px;}.c_chunjie span{background-position:0 -64px;}.c_yuanxiao span{background-position:0 -96px;}.c_qingming span{background-position:0 -128px;}.c_wuyi span{background-position:0 -160px;}.c_duanwu span{background-position:0 -192px;}.c_zhongqiu span{background-position:0 -224px;}.c_guoqing span{background-position:0 -256px;}.c_jintian span{background-position:0 -288px;}.c_shengdan span{ background-position: 0 -320px;}.c_calender_date{display:inline-block;color:#666;text-align:right;position:absolute;z-index:1;}.calendar_wrap:before,.calendar_wrap:after{content:'.';display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0;}.calendar_wrap:after{clear:both;}\n"
            },
            festival: {
                "2015-02-18": ["c_chuxi", "\u9664\u5915"],
                "2014-01-30": ["c_chuxi", "\u9664\u5915"],
                "2013-02-09": ["c_chuxi", "\u9664\u5915"],
                "2015-02-19": ["c_chunjie", "\u6625\u8282"],
                "2014-01-31": ["c_chunjie", "\u6625\u8282"],
                "2013-02-10": ["c_chunjie", "\u6625\u8282"],
                "2015-03-05": ["c_yuanxiao", "\u5143\u5bb5"],
                "2014-02-14": ["c_yuanxiao", "\u5143\u5bb5"],
                "2013-02-24": ["c_yuanxiao", "\u5143\u5bb5"],
                "2015-04-05": ["c_qingming", "\u6e05\u660e"],
                "2014-04-05": ["c_qingming", "\u6e05\u660e"],
                "2013-04-04": ["c_qingming", "\u6e05\u660e"],
                "2015-06-20": ["c_duanwu", "\u7aef\u5348"],
                "2014-06-02": ["c_duanwu", "\u7aef\u5348"],
                "2013-06-12": ["c_duanwu", "\u7aef\u5348"],
                "2015-09-27": ["c_zhongqiu", "\u4e2d\u79cb"],
                "2014-09-08": ["c_zhongqiu", "\u4e2d\u79cb"],
                "2013-09-19": ["c_zhongqiu", "\u4e2d\u79cb"],
                "01-01": ["c_yuandan", "\u5143\u65e6"],
                "05-01": ["c_wuyi", "\u52b3\u52a8"],
                "10-01": ["c_guoqing", "\u56fd\u5e86"],
                "12-25": ["c_shengdan", "\u5723\u8bde"]
            }
        };
        var d = this;
        d.target = c(a);
        if (b && (c.extend(!0, this.setting, b), b.options && b.options.date)) {
            var n = b.options.date.toDate();
            n && (m = n)
        }
        l = f.parseDateInt(m);
        d.uid = "calendar" + d.target.uid();
        this._fragment = document.createDocumentFragment();
        var e = !1; (this.setting.options.showAlways ? (e || (d._init(), e = !0), d.show(), this._isShow = !1) : (d.target.bind("focus",
        function() {
            e || (d._init(), e = !0);
            d.show()
        }), d.target.bind("mousedown",
        function(a) {
            e || (d._init(), e = !0);
            d.show()
        })))
    };
    h.prototype = {
        _init: function() {
            var a = this.setting.options;
            this.container = c(a.container);
            this.step = 1 * (a.step || 1);
            a.minDate && (a.minDate = a.minDate.toDate());
            this.setMinDate(a.minDate);
            a.maxDate && (a.maxDate = a.maxDate.toDate(), this._max = f.parseDateInt(a.maxDate));
            a.starDate && (this._start = f.parseDateInt(a.startDate));
            a.endDate && (this._end = f.parseDateInt(a.endDate));
            a.reference && (this.reference = c(a.reference));
            this._initTpl()
        },
        _initTpl: function() {
            var a = this.uid,
            b = this.setting.template,
            d = this.setting.options,
            n = '<hr style="display:none;line-height:0;font-size:0;border:none;" /><style>' + b.styles.replace((/(\s*)([^\{\}]+)\{/g),
            function(b, d, c) {
                return d + c.replace((/([^,]+)/g), "#" + a + " $1") + "{"
            }) + "</style>",
            e = document.createElement("div");
            e.id = a;
            e.style.cssText = "width:" + 195 * d.step + "px;z-Index:" + this.setting.options.zindex + ";";
            e = c(e);
            e.html(n + c.tmpl.render(b.wrapper, {
                uid: "c_" + a
            }));
            this._layout = e;
            this._content = e.find("#c_" + a);
            var g = this,
            f = !0;
            e.bind("mousedown",
            function(a) {
                var b = a.target || a.srcElement;
                g._handleEvent(b);
                f = !1;
                "select" != b.nodeName.toLowerCase() && a.stop()
            });
            d.showAlways || (c(document).bind("click",
            function(a) {
                g._checkExternalClick(a);
                f = !0
            }), this.target.bind("blur",
            function() {
                f && g.hide()
            }), e.bind("mouseup",
            function(a) {
                f = !0
            }));
            this.reference && (g._tempEnd = !1, e.bind("mousemove",
            function(a) { (g.isIn(g._content[0], a.target) ? g._checkHoverColor(a.target) : g._tempEnd && (g._tempEnd = !1, g.update()))
            }))
        },
        setMinDate: function(a) {
            a = (a || "#").toDate();
            var b = !1; (a ? b = f.parseDateInt(a) : (this.setting.options.minDate = m, b = l));
            this._min = b
        },
        isIn: function(a, b) {
            for (var d = b; d && 9 !== d.nodeType;) {
                if (d == a) return ! 0;
                d = d.parentNode
            }
            return ! 1
        },
        _checkExternalClick: function(a) {
            a = a.target || a.srcElement;
            c(a);
            var b = this.uid;
            if (!this.isIn(this._layout[0], a) && a != this.target[0] && a.id != b) {
                if ("OPTION" == a.nodeName || "#document" == a.nodeName) return ! 1;
                this.hide()
            }
        },
        _handleEvent: function(a) {
            var b = a.getAttribute("data-bind");
            if (b) switch (b) {
            case "close":
                this.hide();
                break;
            case "prev":
                this.changeDrawMonth( - this.step);
                break;
            case "next":
                this.changeDrawMonth(this.step);
                break;
            case "select":
                this.select(a)
            }
            return ! 1
        },
        changeDrawMonth: function(a) {
            this._drawDate = f.addMonth(this._drawDate, a);
            this.update()
        },
        show: function() {
            var a = this.setting.options;
            if (!this._isShow) {
                h.__inst && h.__inst.uid != this.uid && h.__inst.hide();
                this._updateOptions();
                var b = this.setting.listeners;
                b.onBerforeShow && b.onBerforeShow.call(this);
                this.update();
                this.container.append(this._layout);
                a.showAlways || (this._layout.offset(this.target), h.__inst = this);
                b.onShow && b.onShow.call(this);
                this.setting.options.showAlways || this._layout.cover();
                this._isShow = !0
            }
        },
        hide: function() {
            this._isShow && (this.setting.options.showAlways || this._layout.uncover(), this._fragment.appendChild(this._layout[0]), this._isShow = !1)
        },
        _updateOptions: function() {
            var a = this.target.data(),
            b = this.setting.options,
            d;
            for (d in a) switch (d) {
            case "startDate":
                var n = f.parseDateInt(a.startDate);
                n != this._start && (b.startDate = a.startDate, this._start = n);
                break;
            case "endDate":
                n = f.parseDateInt(a.endDate);
                n != this._end && (b.endDate = a.endDate, this._end = n);
                break;
            case "minDate":
                a.minDate = a.minDate.toDate(); (n = a.minDate) && n != b.minDate && (b.minDate = n, this.setMinDate(n));
                break;
            case "maxDate":
                a.maxDate = a.maxDate.toDate(); (n = f.parseDateInt(a.maxDate)) && n != this._max && (b.maxDate = a.maxDate, this._max = n);
                break;
            case "showWeek":
                b.showWeek = a.showWeek;
                break;
            case "permit":
                b.permit = a.permit;
                break;
            case "prohibit":
                b.prohibit = a.prohibit;
                break;
            case "weekday":
                b.weekday = a.weekday;
                break;
            case "reference":
                this.reference = c(a.reference);
                break;
            case "nextEl":
                b.nextEl = a.nextEl
            }
            this.reference && (this._tempEnd = !1, a = this.reference.value().toDate()) && (this.setting.options.startDate = a, this._start = f.parseDateInt(a));
            this.setCurrentDate(this.target);
            this._start && this.currentDate && (b.endDate = this.currentDate, this._end = this.currentDint);
            this._parseDrawMonth()
        },
        _parseDrawMonth: function() {
            var a = !1,
            b = this.setting.options; (this.currentDate ? this._drawDate = this.currentDate: ((b.defaultDate ? a = b.defaultDate.toDate() : this._min && (a = b.minDate)), a || (a = m), this._drawDate = a))
        },
        setCurrentDate: function(a) {
            a = a.value();
            a.isDate() && (a = a.toDate(), this.isPassDate(a) || (this.currentDate = a, this.currentDint = f.parseDateInt(a)))
        },
        update: function() {
            var a = this.step,
            b = 1,
            d = this._create(this._drawDate);
            if (a > b) for (; b < a; b++) d += this._create(f.addMonth(this._drawDate, b), "other");
            this._content.html(d);
            if (this.setting.options.showOptions) {
                var c = this._layout.find("select"),
                e = this;
                c.bind("change",
                function() {
                    e._drawDate = new Date(c[0].value, 1 * c[1].value - 1, 1);
                    e.update()
                })
            }
        },
        _create: function(a, b) {
            var d = this.setting,
            n = d.options,
            e = a.getMonth(),
            g = d.template,
            l = "",
            k = this._renderCalendar(a);
            if (n.showOptions) {
                for (var d = e + 1,
                e = a.getFullYear(), h = (n.minDate ? n.minDate.getFullYear() : 1900), n = (n.maxDate ? n.maxDate.getFullYear() : 2020), l = '<select name="year">'; h <= n; h++) l = (h == e ? l + ('<option value="' + h + '" selected="selected">' + h + "</options>") : l + ('<option value="' + h + '">' + h + "</options>"));
                l += '</select>\u5e74 <select name="m">';
                for (n = 1; 13 > n; n++) l = (n == d ? l + ('<option value="' + n + '" selected="selected">' + n + "</options>") : l + ('<option value="' + n + '">' + n + "</options>"));
                l += "</select>\u6708"
            } else l = f.format(a, d.string.title);
            return c.tmpl.render(g.calendar, {
                title: l,
                monthclass: (b ? " " + b: ""),
                data: k
            })
        },
        _renderCalendar: function(a) {
            var b = f.get(a),
            d = a.getMonth(),
            c = this;
            a = 0;
            for (var e = [], g = this.setting.classNames, l = {
                "default": function(a) {
                    return (a.m == d ? c._parseCellDate(a, g, d) : {
                        day: "",
                        date: null,
                        classes: ' class="' + g.blankdate + '"'
                    })
                },
                all: function(a) {
                    return c._parseCellDate(a, g, d)
                }
            } [this.setting.options.render]; 42 > a; a++) e.push(l(b[a]));
            return e
        },
        _checkFestival: function(a) {
            var b = a.substring(5),
            d = this.setting.festival;
            return (d[a] ? d[a] : (d[b] ? d[b] : !1))
        },
        _parseCellDate: function(a, b, d) {
            var c = a.k;
            d = a.i;
            var e = a.w,
            g = ' id="' + c + '"',
            f = [];
            a = {
                day: a.d,
                date: c,
                classes: "",
                attr: ""
            };
            d == l && f.push(b.today);
            if (this._checkPassDate(c, d, e)) f.push(b.nothismonth);
            else {
                g += ' data-bind="select"';
                if (c = this._checkFestival(c)) a.isfestival = !0,
                f.push(c[0]);
                this.currentDate && this.currentDint == d && (a.isfestival ? f.push("c_festival_select") : f.push(b.select));
                this._start && (this._start == d && (a.isfestival ? f.push("c_festival_select") : f.push(b.select)), this._end && d > this._start && d < this._end && (g += ' style="background-color: ' + this.setting.options.rangeColor + '"'), this._tempEnd && d > this._start && d < this._tempEnd && (g += ' style="background-color: ' + this.setting.options.rangeColor + '"'))
            }
            0 < f.length && (a.classes = ' class="' + f.join(" ") + '"');
            a.attr = g;
            return a
        },
        isPassDate: function(a) {
            var b = f.format(a),
            d = f.parseDateInt(a);
            a = a.getDay();
            return this._checkPassDate(b, d, a)
        },
        _checkPassDate: function(a, b, d) {
            var c = this.setting.options;
            return (c.prohibit && -1 !== c.prohibit.indexOf(a) ? !0 : (c.permit && -1 !== c.permit.indexOf(a) ? !1 : (this._min && b < this._min || this._max && b > this._max || -1 === c.weekday.indexOf(d) ? !0 : !1)))
        },
        _checkHoverColor: function(a) {
            "select" == a.getAttribute("data-bind") && (a = a.id) && (a = f.parseDateInt(a)) && a != this._tempEnd && a > this._start && (this._end ? a > this._end && (this._tempEnd = a, this.update()) : (this._tempEnd = a, this.update()))
        },
        select: function(a) {
            a = a.id;
            var b = a.toDate(),
            d = this.target[0],
            n = f.format(b, this.setting.options.tipText);
            this.target.value(a);
            this.currentDate = b;
            this.currentDint = f.parseDateInt(b);
            this.hide();
            var e = this,
            g = this.setting.listeners;
            g.onChange && setTimeout(function() {
                g.onChange.call(e, d, n, !1)
            });
            this.target.trigger("change");
            var l = c(this.setting.options.nextEl);
            l.length && setTimeout(function() {
                l[0].focus()
            });
            this.setting.options.showWeek && this.setWeek();
            this.setting.options.showAlways && this.update()
        },
        getWhatDay: function(a) {
            var b = f.format(a);
            string = this.setting.string;
            if (b = this._checkFestival(b)) return b[0].replace("c_", "pic_");
            b = new Date;
            b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
            b = parseInt((a - b) / 864E5, 10);
            return (0 <= b && 3 > b ? string.todayText[b] : string.weekText[a.getDay()])
        },
        setWeek: function(a) {
            var b = null,
            b = (a ? c(a) : this.target); ((a = b.value().toDate()) ? (a = this.getWhatDay(a)) && 105 <= b.offset().width && b.css({
                "background-image": "url(http://sandbox.runjs.cn/uploads/rs/313/hxtth5wr/" + a + ".png)",
                "background-position": "right center",
                "background-repeat": "no-repeat"
            }) : b.css({
                "background-image": "none"
            }))
        }
    };
    c.mod.reg({
        name: "calendar",
        version: "6.0",
        init: function() {},
        uninit: function() {},
        module: h
    })
})($);