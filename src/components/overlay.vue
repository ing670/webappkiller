<template>
  <div class="vc-overlay" @click="handlerClick" @touchmove="prevent" :style="style" >
    <slot></slot>
  </div>
</template>
<script>
import {getZIndex} from './utils'
export default {
  props: {

    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  computed: {
    style () {
      return {
        'background-color': this.color,
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    handlerClick () {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>
<style lang="less">
.vc-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
}


.vc-overlay-fade-transition {
  transition: all .3s linear;
  &.vc-overlay-fade-enter,
  &.vc-overlay-fade-leave {
    opacity: 0 !important;
  }
}
</style>
