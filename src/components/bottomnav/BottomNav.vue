<template>
  <div class="wk-bottom-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      renderData: []
    }
  },
  methods: {
    handlerClick (index) {
      this.$emit('nav-change', index)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" type="less">
@import "../theme/variables.less";
.wk-bottom-nav{
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  color: #000;
  text-align: center;
  font-size: .36rem;
  position: relative;
  width: 100%;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.117647) 0rem .02rem 0.12rem, rgba(0, 0, 0, 0.117647) 0rem .02rem .08rem;
}

</style>
