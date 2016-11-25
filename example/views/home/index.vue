<template>
  <Page >
    <header-bar slot="header" title="vue-pure"right-text="组件" right-icon=""  ></header-bar>
    <cell
      v-for="item in cellList"
      :title="item.title"
      :value="item.value"
      @on-link="$router.push(item.link)">
        <Icon slot="startIcon" size=".48rem" :iconColor="item.startIconColor" :fontCode="item.startIconCode"></Icon>
        <Icon slot="endIcon" size=".48rem" iconColor="#000" fontCode="e5c8"></Icon>
      </cell>
    <header-bar slot="footer" title="vue-pure"    right-text="组件" right-icon=""  ></header-bar>
  </Page>
</template>
<script>

//import { Cell,Icon,Ripple,HeaderBar,Page } from 'components';
import HeaderBar  from 'components/header';
import Icon  from 'components/icon';
import Ripple  from 'components/helpers/ripple';
import Cell  from 'components/cell';
import Page  from 'components/page';
export default {
  data() {
    return {
      cellList: [
      {
          title: 'pop',
          value: 'poplayout',
          link: '/pop',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
{
          title: '遮罩',
          value: '遮罩',
          link: '/overlay',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: 'tab',
          value: '常用tab(完成)',
          link: '/tabbar',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: '底部tab',
          value: '底部tab(完成)',
          link: '/bottomnav',
          startIconCode: 'e85d',
          startIconColor:"#1af",
        },
      {
          title: '选择器',
          value: '选择器(。。)',
          link: '/picker',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: 'buttons',
          value: '常用button(完成)',
          link: '/buttons',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: 'badge',
          value: '角标(完成)',
          link: '/badge',
          startIconCode: 'e85d',
          startIconColor:"#1af",
        },
        {
          title: 'Icons',
          value: '图标集合(完成)',
          link: '/icon',
          startIconCode: 'e39f',
          startIconColor:"#22f",
        },

        {
          title: 'Grid',
          value: '9宫格(完成)',
          link: '/grid',
          startIconCode: 'e3a1',
          startIconColor:"#4af",
        },
        {
          title: 'Nothing',
          value: '结果组件 - 无',
          link: '/nothing',
         startIconCode: 'e228',
          startIconColor:"#6af",
        },
        {
          title: 'HeaderBar',
          value: '顶部导航',
          link: '/headerbar',
         startIconCode: 'e236',
          startIconColor:"#eaf",
        },
        {
          title: 'IconText',
          value: '图标 + 文字(完成)',
          link: '/icontext',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: 'Spinner',
          value: '来自loaders.css的加载小动画',
          link: '/spinner',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: '无线滚动',
          value: '滚啊滚啊滚(完成)',
          link: '/infiniteloader',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: 'vuex例子',
          value: 'vuex+vue-resource(完成)',
          link: '/vuexexample',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
        {
          title: '表单控件',
          value: '表单控件',
          link: '/form',
          startIconCode: 'e191',
          startIconColor:"#eaf",
        },
         {
          title: 'Cell',
          value: '单行列表单行(完成)',
          link: '/cell',
          startIconCode: 'e153',
          startIconColor:"rgb(80, 207, 150)",
        },
      ],
    };
  },
  components: {
  Page,
    Cell,
    Icon,
    Ripple,
    HeaderBar
  },
};
</script>
<style lang="less">
</style>
