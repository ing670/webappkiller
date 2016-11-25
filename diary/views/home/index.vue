<template>
  <Page>
    <Downmemu slot="header" ></Downmemu>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <item></item>
    <Button class="diary-button" slot='footer' @click="newDiary">
      <IconText textColor="#12D290" iconColor="#12D290" position="left" iconFontCode="e145" text="新建日志"></IconText>
    </Button>
  </Page>
</template>

<script>

  //import { Cell,Icon,Ripple,HeaderBar,Page } from 'components';
  import Icon  from 'components/icon';
  import Ripple  from 'components/helpers/ripple';
  import Cell  from 'components/cell';
  import Page  from 'components/page';
  import {Button}  from 'components/button';
  import IconText from 'components/icontext'
  import OverLay from 'components/overlay'

  import Item  from './item';
  import Downmemu  from './downmemu';


  export default {

    data() {

      return {
        showOverlay:false,
        showLeftMenu:false,
        showRightMenu:false,
        cellList: [
          {
            title: 'pop',
            value: 'poplayout',
            link: '/pop',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: '遮罩',
            value: '遮罩',
            link: '/overlay',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'tab',
            value: '常用tab(完成)',
            link: '/tabbar',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: '底部tab',
            value: '底部tab(完成)',
            link: '/bottomnav',
            startIconCode: 'e85d',
            startIconColor: "#1af",
          },
          {
            title: '选择器',
            value: '选择器(。。)',
            link: '/picker',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'buttons',
            value: '常用button(完成)',
            link: '/buttons',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'badge',
            value: '角标(完成)',
            link: '/badge',
            startIconCode: 'e85d',
            startIconColor: "#1af",
          },
          {
            title: 'Icons',
            value: '图标集合(完成)',
            link: '/icon',
            startIconCode: 'e39f',
            startIconColor: "#22f",
          },

          {
            title: 'Grid',
            value: '9宫格(完成)',
            link: '/grid',
            startIconCode: 'e3a1',
            startIconColor: "#4af",
          },
          {
            title: 'Nothing',
            value: '结果组件 - 无',
            link: '/nothing',
            startIconCode: 'e228',
            startIconColor: "#6af",
          },
          {
            title: 'HeaderBar',
            value: '顶部导航',
            link: '/headerbar',
            startIconCode: 'e236',
            startIconColor: "#eaf",
          },
          {
            title: 'IconText',
            value: '图标 + 文字(完成)',
            link: '/icontext',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'Spinner',
            value: '来自loaders.css的加载小动画',
            link: '/spinner',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: '无线滚动',
            value: '滚啊滚啊滚(完成)',
            link: '/infiniteloader',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'vuex例子',
            value: 'vuex+vue-resource(完成)',
            link: '/vuexexample',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: '表单控件',
            value: '表单控件',
            link: '/form',
            startIconCode: 'e191',
            startIconColor: "#eaf",
          },
          {
            title: 'Cell',
            value: '单行列表单行(完成)',
            link: '/cell',
            startIconCode: 'e153',
            startIconColor: "rgb(80, 207, 150)",
          },
        ],
      };
    },
  methods:{
      newDiary(){
        this.$router.push('/diaryTemplateList');
      },

    },
    components: {
      OverLay,
      Item,
      Downmemu,
      Page,
      Cell,
      Icon,
      Ripple,
      Button,
      IconText
    },
  };



</script>
<style lang="less">
  .page {
    background: #f0f4f6;
  }
  .select-left-list,.select-right-list{
    background: #fff;
  }
  .selected-item{
    height: 1rem;
    line-height: 1rem;
    padding-left:.3rem;
    padding-right:.3rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      transform: scaleY(0.5);
      background: #eee;
    }
  }


  .diary-button {
    background: #fff;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0;
      transform: scaleY(0.5);
      background: #ddd;
    }
  }


</style>
