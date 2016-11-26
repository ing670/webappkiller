<template>

<div class="wk-cell js-qlc-cell" @click="$emit('onLink')" >
  <div v-if='title'>
  <slot name='startIcon'>
  </slot>
    <span class="title" v-text="title"></span>
  </div>
  <div v-if='value'>
    <span class="value" v-text="value"></span>
  <slot name='endIcon'>
  </slot>
  </div>
</div>


</template>
<script>
import ripple from '../helpers/ripple.vue'

export default {
  el:'.js-qlc-cell',
  props: {
    title: {
      default: '',
    },
    value: {
      default: '',
    },
    rippleColor:{
      default: 'black',
    }
  },
  components:{
  ripple
  },
  mounted(){
    console.log(this.$refs.cell)
  }
};
</script>
<style rel="stylesheet/less" type="text/less" lang="less">

  .wk-cell{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: .96rem;
    border-bottom:1px solid #eee;
  //&:after{
     //  content: "";
     //  position: absolute;
     //  width: 100%;
     //  bottom: 0;
     //  background: #eee;
     //  height: .02rem;
     //}
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: .15rem;
    padding-right: .15rem;
  }
  .title{
    margin-left: .1rem;
  }
  .value{
    margin-right: .1rem;
  }

  }


</style>
