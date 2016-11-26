<template>
  <div>
  <div class="downmemu-wraper">
    <div class="left">
      <icon-text @click="leftClick"  fontFamily="icomoon"
                 fontCode="E90D" text="我提交的" position="right"></icon-text>
    </div>
    <div class="right">
      <icon-text @click="rightClick"  fontFamily="icomoon"
                 fontCode="E90D" text="全部日志" position="right"></icon-text>
    </div>
  </div>
  <OverLay class="index-overlay" v-show='showOverlay' ref="overlay" @click="showOverlay=false">
    <div class="select-left-list" v-show='showLeftMenu'>
      <div class="selected-item">所有的</div>
      <div class="selected-item">我提交的</div>
      <div class="selected-item">@我的</div>
    </div>
    <div class="select-right-list" v-show='showRightMenu'>
      <div class="selected-item">所有的1</div>
      <div class="selected-item">我提交的2</div>
      <div class="selected-item">@我的3</div>
    </div>
  </OverLay>
  </div>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">
  @import "../../theme/var";
  .index-overlay {
    top: .8rem !important;
  }
  .downmemu-wraper {
    background: #fff;
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
    display: flex;
    height: .8rem;
    align-items: center;
    .left ,.right{
      span{
          color: @main-font-color;
      }
      .wk-icon{
        color:@main-color;
        font-size:.24rem
      }
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        bottom: 0;
        right: 0;
        transform: scaleX(0.5);
        background: #eee;
      }
    }
    div {
      flex: 1;
      text-align: center;
    }
  }
</style>
<script>
  import IconText from 'components/icontext'
  import OverLay from 'components/overlay'

    export default{
        data(){
            return{
                msg:'hello vue',
                showOverlay:false,
                showLeftMenu:false,
                showRightMenu:false,
            }
        },
        methods:{
         leftClick(){
        this.showOverlay=true;
        this.showLeftMenu=true;
        this.showRightMenu=false;
        console.log(this.showLeftMenu);
      },
      rightClick(){
        this.showOverlay=true;
        this.showLeftMenu=false;
        this.showRightMenu=true;
      }
        },
        components:{
        IconText,OverLay
        }

    }

</script>
