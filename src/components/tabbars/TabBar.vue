<template>
  <div class="vc-tab-bar">
    <slot></slot>
    <span class="vc-tab-link-highlight" :style="tabLightStyle"></span>
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
  computed: {
    tabLightStyle () {
      let x = this.active * 100
      let len = this.renderData.length
      return {
        width: len > 0 ? (100 / len).toFixed(4) + '%' : '100%',
        transform: 'translate3d(' + x + '%, 0, 0)'
      }
    }
  },
  methods: {
    handlerClick (index) {
      this.$emit('tab-change', index)
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-tab-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: @barcolor;
  color: #FFF;
  text-align: center;
  font-size: .32rem;
  line-height: .48rem;
  position: relative;
  width: 100%;
  z-index: 100;
}

.vc-tab-link-highlight{
  position: absolute;
  left: 0;
  bottom: 0;
  height: .06rem;
  background: @red;
  transition: all .3s;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

</style>
