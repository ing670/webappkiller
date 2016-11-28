/**
 * 定义路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import DiaryTemplateList from '../views/DiaryTemplateList';
Vue.use(VueRouter);


const router= new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/', component: () => System.import('../views/home')},
    {path: '/diaryTemplateList', component: DiaryTemplateList},

  ],
});
export default router;
