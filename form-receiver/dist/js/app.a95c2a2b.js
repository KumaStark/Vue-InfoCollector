(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&f.push(l[a][0]),l[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var c=o[i];0!==l[c]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},l={app:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("85ec"),l=o.n(r);l.a},"4e8b":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e623"),o("e379"),o("5dc8"),o("37e1");var r=o("2b0e"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],a=(o("034f"),o("2877")),i={},c=Object(a["a"])(i,l,n,!1,null,null,null),s=c.exports,u=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",[o("el-col",{attrs:{span:5}},[o("div",{staticClass:"grid-content bg-purple"})]),o("el-col",{attrs:{span:14}},[o("h2",[o("center",[e._v("请您告诉我们准备返回的时间和方式")])],1),o("el-form",{ref:"infoCollector",attrs:{model:e.infoCollector,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"您的姓名",prop:"name"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择您的名字"},model:{value:e.infoCollector.name,callback:function(t){e.$set(e.infoCollector,"name",t)},expression:"infoCollector.name"}},e._l(e.nameList,(function(e,t){return o("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),o("el-row",[o("el-col",{attrs:{span:11}},[o("el-form-item",{attrs:{label:"出行方式",prop:"tripMode"}},[o("el-radio-group",{model:{value:e.infoCollector.tripMode,callback:function(t){e.$set(e.infoCollector,"tripMode",t)},expression:"infoCollector.tripMode"}},[o("el-radio-button",{attrs:{label:"飞机"}}),o("el-radio-button",{attrs:{label:"火车"}})],1)],1)],1),o("el-col",{attrs:{span:13}},[o("el-form-item",{attrs:{label:"出行地点",prop:"tripPort"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.tripPortSwitch,placeholder:"请选择火车站或机场名称"},model:{value:e.infoCollector.tripPort,callback:function(t){e.$set(e.infoCollector,"tripPort",t)},expression:"infoCollector.tripPort"}},["火车"==e.transTool?o("el-option",{attrs:{label:"上海火车站",value:"上海火车站"}}):e._e(),"火车"==e.transTool?o("el-option",{attrs:{label:"上海南站",value:"上海南站"}}):e._e(),"火车"==e.transTool?o("el-option",{attrs:{label:"上海虹桥火车站",value:"上海虹桥火车站"}}):e._e(),"飞机"==e.transTool?o("el-option",{attrs:{label:"上海浦东国际机场",value:"上海浦东国际机场"}}):e._e(),"飞机"==e.transTool?o("el-option",{attrs:{label:"上海虹桥国际机场",value:"上海虹桥国际机场"}}):e._e()],1)],1)],1)],1),o("el-form-item",{attrs:{label:"航班车次",prop:"tripNumber"}},[o("el-input",{attrs:{placeholder:"请输入您乘坐的航班号或者列车车次"},model:{value:e.infoCollector.tripNumber,callback:function(t){e.$set(e.infoCollector,"tripNumber",t)},expression:"infoCollector.tripNumber"}})],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"出发日期",prop:"leaveDate"}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择一个日期","picker-options":e.pickerOptions},model:{value:e.infoCollector.leaveDate,callback:function(t){e.$set(e.infoCollector,"leaveDate",t)},expression:"infoCollector.leaveDate"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"出发时间",prop:"leaveTime"}},[o("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择一个时间"},model:{value:e.infoCollector.leaveTime,callback:function(t){e.$set(e.infoCollector,"leaveTime",t)},expression:"infoCollector.leaveTime"}})],1)],1)],1),o("el-form-item",{attrs:{label:"备注信息",prop:"desc"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.infoCollector.desc,callback:function(t){e.$set(e.infoCollector,"desc",t)},expression:"infoCollector.desc"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("infoCollector")}}},[e._v("确认信息")]),o("el-button",{on:{click:function(t){return e.resetForm("infoCollector")}}},[e._v("重新填写")])],1)],1)],1),o("el-col",{attrs:{span:5}},[o("div",{staticClass:"grid-content bg-purple"})])],1)},f=[],d=o("bc3a"),m=o.n(d);document.title="行程收集表";var b={watch:{"infoCollector.tripMode":{handler:function(e){console.log("get tripMode change:",e),""!=e?(this.tripPortSwitch=!1,this.transTool=e):this.tripPortSwitch=!0},deep:!0}},data:function(){return{tripPortSwitch:!0,nameList:["张勤林","姜铁军","浦金云","程炜","焦万合","顾宇翔","李莉","庄弘炜","崔翛龙","任士学","罗刚林","盖绫顺","杨成","吴克学","姚明"],transTool:"",pickerOptions:{shortcuts:[{text:"选择今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"选择明天",onClick:function(e){var t=new Date;t.setTime(t.getTime()+864e5),e.$emit("pick",t)}},{text:"选择后天",onClick:function(e){var t=new Date;t.setTime(t.getTime()+1728e5),e.$emit("pick",t)}}]},infoCollector:{name:"",tripMode:"",tripPort:"",tripNumber:"",leaveDate:new Date,leaveTime:(new Date).setSeconds(0),desc:""},rules:{name:[{required:!0,message:"请在列表中选择您的名字",trigger:"change"}],tripMode:[{required:!0,message:"请选择一个出行方式",trigger:"change"}],tripPort:[{required:!0,message:"请选择您出行的交通枢纽站点",trigger:"change"}],tripNumber:[{required:!0,message:"请输入您乘坐的航班号或者列车车次",trigger:"blur"}],leaveDate:[{type:"date",required:!0,message:"请选择航班起飞或车次出发日期",trigger:"change"}],leaveTime:[{type:"date",required:!0,message:"请选择航班起飞或车次出发时间",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o=new FormData(t.infoCollector);for(var r in console.log(t.infoCollector),t.infoCollector)o.append(r,t.infoCollector[r]);m()({method:"post",url:"/postForm",headers:{"Content-Type":"multipart/form-data"},data:o}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t.$alert("谢谢！您辛苦了！","信息已保存",{confirmButtonText:"确定"})}))},resetForm:function(e){this.$refs[e].resetFields()}}},v=b,h=(o("ce6a"),Object(a["a"])(v,p,f,!1,null,"55d5518e",null)),g=h.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[o("center",[e._v("谢谢您！您辛苦了！")])],1)])},w=[],y={},k=y,T=Object(a["a"])(k,C,w,!1,null,"a3856eec",null),x=T.exports;r["default"].use(u["a"]);var _=[{path:"/",name:"Collector",component:g},{path:"/Thanks",name:"Thanks",component:x}],P=new u["a"]({mode:"history",base:"/",routes:_}),$=P,O=o("5c96"),S=o.n(O);o("0fae");r["default"].use(S.a),r["default"].config.productionTip=!1,new r["default"]({router:$,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,o){},ce6a:function(e,t,o){"use strict";var r=o("4e8b"),l=o.n(r);l.a}});
//# sourceMappingURL=app.a95c2a2b.js.map