webpackJsonp([15],{320:function(t,e,n){n(407);var o=n(1)(n(341),n(390),null,null);t.exports=o.exports},341:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(50);e.default={data:function(){var t=this;return{actionSheet:{show:!1,showCancel:!0,actions:[{isLabel:!0,name:"选择一个你喜欢的"},{name:"守望先锋",click:function(){t.showMsg("守望先锋")}},{name:"炉石传说",click:function(){t.showMsg("炉石传说")}},{name:"英雄联盟",color:"red",click:function(){t.showMsg("英雄联盟")}},{name:"剑灵",click:function(){t.showMsg("剑灵")}}]},modal:{show:!1,msg:"",title:"你选择的是"}}},methods:{back:function(){window.history.back()},showMsg:function(t){this.modal.msg=t,this.modal.show=!0},showActionSheet:function(t){this.$refs.as.show=!0,this.$refs.as.showCancel=!t}},watch:{topPopup:function(t){var e=this;t&&setTimeout(function(){e.topPopup=!1},2e3)}},components:{ActionSheet:o.k,Modal:o.l,Button:o.d,Overlay:o.c,Page:o.b}}},366:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".center-block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},390:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[n("Button",{attrs:{text:"点击弹出 Action Sheet"},nativeOn:{click:function(e){t.showActionSheet()}}}),t._v(" "),n("Button",{attrs:{text:"不带 cancel 按钮的"},nativeOn:{click:function(e){t.showActionSheet(!0)}}}),t._v(" "),n("Button",{attrs:{text:"不带 cancel 按钮的"},nativeOn:{click:function(e){t.showActionSheet(!0)}}}),t._v(" "),n("action-sheet",{ref:"as",attrs:{actions:t.actionSheet.actions,"show-cancel":t.actionSheet.showCancel}}),t._v(" "),n("modal",{ref:"md",attrs:{show:t.modal.show,title:t.modal.title,msg:t.modal.msg}})],1)},staticRenderFns:[]}},407:function(t,e,n){var o=n(366);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("2dfe1584",o,!0)}});