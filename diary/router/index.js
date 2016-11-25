/**
 * 定义路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const router= new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/', component: () => System.import('../views/home')},
    {path: '/diaryTemplateList', component: () => System.import('../views/DiaryTemplateList')},

  ],
});
export default router;
