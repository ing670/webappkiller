webpackJsonp([3],{325:function(t,e,o){o(416),o(417);var n=o(1)(o(346),o(399),null,null);t.exports=n.exports},346:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(50);e.default={data:function(){return{msg:"hello vue"}},methods:{bclick:function(){this.$refs.toast.show()},back:function(){window.history.back()}},components:{Page:n.b,"my-button":n.d,IconText:n.r,Toast:n.B,HeaderBar:n.e,Ripple:n.C}}},375:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".vc-button-fill{background:red}",""])},376:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".wk-page-content-padding{margin-top:.2rem;padding-left:.3rem;padding-right:.3rem}.wk-button-wrap{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.wk-button-wrap div{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Page",{on:{click:t.bclick}},[o("HeaderBar",{attrs:{title:"BUTTONS",leftFontCode:"e5c4"},on:{onLeft:t.back},slot:"header"}),t._v(" "),o("div",{staticClass:"wk-page-content-padding"},[o("my-button",{ref:"fufu",staticClass:"vc-button-fill",attrs:{text:"FUKC"}},[o("IconText",{staticStyle:{color:"white"},attrs:{text:"文字在左",position:"right",fontCode:"e863"}})],1),t._v(" "),o("my-button",{on:{click:t.bclick}},[t._v("弹出Toast")]),t._v(" "),o("div",{staticClass:"wk-button-wrap"},[o("my-button",[t._v("左边的按钮")]),t._v(" "),o("my-button",[t._v("右边的按钮")])],1),t._v(" "),o("Toast",{ref:"toast",attrs:{text:"Toast"}})],1)],1)},staticRenderFns:[]}},416:function(t,e,o){var n=o(375);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(2)("991593ce",n,!0)},417:function(t,e,o){var n=o(376);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(2)("d55a0090",n,!0)}});