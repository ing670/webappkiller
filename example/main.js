import Vue from 'vue';
import store from './store';
import FastClick from 'fastclick';
import root from 'components/app';
import router from './router';
import {sync} from 'vuex-router-sync'
import axios from 'axios';
import bridge from 'utils/bridge';


FastClick.attach(document.body);
!function (w,cb) {
    //i对应的数码像素
    var e = w.document,
        t = e.documentElement,
        i = 750, d = i / 100, o = "orientationchange" in w ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 320;
            n > 750 && (n = 750), t.style.fontSize = n / d + "px";
            w.loading=t.querySelector('.wk-preloader-wrapper');
            w.loading.style.display='block';
            cb();
        };
    e.addEventListener && (w.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window,()=>{
    Vue.prototype.$http = axios;
    router.beforeEach((to, from, next) => {
        window.loading.style.display='block'
        next();
    })
    router.afterEach((to, from, next) => {
        window.loading.style.display='none'
    })
    sync(store, router);

    const app = new Vue({
        store,
        router,
        ...root,
    });
    app.$mount('#app');
});

