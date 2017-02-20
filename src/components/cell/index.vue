<template>

<div class="wk-cell js-qlc-cell" @click="$emit('onLink')" >

  <div v-if="title">
  <slot name='start'>
    <span class="title" >{{title}}</span>
  </slot>
  </div>
  <slot></slot>
  <div v-if="value">
  <slot name='end'>
    <span class="value" >{{value}}</span>
  </slot>
  </div>
</div>


</template>
<script>

export default {
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

  mounted(){
    //console.log(this.$refs.cell)
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
    height: .96rem;
    border-bottom:1px solid #eee;
    padding-left: .30rem;
    padding-right: .30rem;
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

  }
  .title{
    margin-left: .1rem;
  }
  .value{
    margin-right: .1rem;
  }

  }


</style>
