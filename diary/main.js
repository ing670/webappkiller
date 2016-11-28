import Vue from 'vue';
import store from './store';
import FastClick from 'fastclick';
import root from 'components/app';
import router from './router';
import {sync} from 'vuex-router-sync'
import axios from './utils/service';
import bridge from 'utils/bridge';
import moment from 'moment';

FastClick.attach(document.body);
moment.locale('zh-cn')
!function (n) {
    //i对应的数码像素
    var e = n.document, t = e.documentElement, i = 750, d = i / 100, o = "orientationchange" in n ? "orientationchange" : "resize", a = function () {
        var n = t.clientWidth || 320;
        n > 750 && (n = 750), t.style.fontSize = n / d + "px"
    };
    a();
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);

//全局请求配置
Vue.prototype.$http=axios;
sync(store, router);
const app = new Vue({
    store,
    router,
    ...root,
});

app.$mount('#app');
