webpackJsonp([10],{329:function(e,t,n){n(404);var o=n(1)(n(351),n(386),null,null);e.exports=o.exports},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50);t.default={data:function(){return{test:"fux",loading:!1,items1:[111111111111,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]}},watch:{loading:function(e,t){},test:function(e,t){}},methods:{back:function(){this.$router.back()},loadMore:function(e){var t=this;setTimeout(function(){e.loading=!1,t.items1=t.items1.concat(t.items1),console.log(t.items1.length)},2e3)}},components:{InfiniteLoader:o.w,Page:o.b,Cell:o.m,HeaderBar:o.e}}},363:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".page{overflow-y:hidden}",""])},386:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("HeaderBar",{attrs:{title:"图标文本",leftFontCode:"e5c4"},on:{onLeft:e.back},slot:"header"}),e._v(" "),n("InfiniteLoader",{attrs:{onLoading:e.loadMore}},e._l(e.items1,function(t){return n("Cell",[e._v(e._s(t))])}))],1)},staticRenderFns:[]}},404:function(e,t,n){var o=n(363);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("c62baafe",o,!0)}});