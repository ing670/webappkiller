<template>
  <em class="wk-badge" :style="{'background-color':color}">
      {{value}}
  </em>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },

  },

}
</script>

<style lang="less" rel="stylesheet/less" type="less">
.wk-badge{
  height: .32rem;
  line-height: .32rem;
  font-size: .16rem;
  display: inline-block;
  font-style: normal;
  color:#fff;
  background-color: #bbbfc4;
  border-radius: 100%;
  padding-left: .14rem;
  padding-right: .14rem;
  padding-top: .06rem;
  padding-bottom: .01rem;
}

</style>
