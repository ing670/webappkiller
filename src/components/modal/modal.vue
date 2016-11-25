<template>
  <overlay v-show="show" @click.native="close">
  <div class="vc-modal"  transition="vc-modal-scale">
    <div class="vc-modal-header" v-if="title">
      <div class="vc-modal-title">
          {{title}}
      </div>
    </div>
    <div class="vc-modal-body">
      <slot>
        <div v-if="msg">
          {{msg}}
        </div>
      </slot>
    </div>
    <div class="vc-modal-footer" v-if="!hideClose">
      <slot name="footer">
        <button text="关闭" @click="close"></button>
      </slot>
    </div>
  </div>
  </overlay>
</template>

<script>
import overlay from "../overlay"
import {getZIndex} from '../utils'

export default {
  props: {

    show:{
     type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },

    hideClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.show = false
    },
    overlayClick () {
      if (this.clickOverlayClose) this.show = false
    }
  },
  components:{
    overlay
  }
}
</script>

<style lang="less">
@import "../utils/_mixins.less";
@import "../utils/_vars.less";
.vc-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  outline: none;
  width: 4.8rem;
  margin: 0 auto;
  padding: 0;
  background-color: white;
  border-radius: .06rem;
  .depth(5);
  max-height: 10rem;
  max-width: 10rem;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: .32rem;
  color: @body_color;
}

.vc-modal-header {
  display: flex;
  align-items: center;
  padding: .48rem .48rem .4rem;
  .vc-modal-title {
    flex: 1;
    font-size: .4rem;
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: normal;
    color: @color;
  }
  + .vc-modal-body{
    padding-top: 0;
  }
}

.vc-modal-body {
    padding-left: .48rem;
    padding-right: .48rem;
    padding-top: .48rem;
    padding-bottom: .40rem;
}

.vc-modal-footer {
  padding: .12rem .16rem;
  min-height: .96rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .vc-button-fill,
  .vc-button-raise {
    margin-left: .2rem;
  }
}

.vc-modal-scale-transition{
  transition: all .3s ease;
}
.vc-modal-scale-enter,
.vc-modal-scale-leave {
    opacity: 0;
}

.vc-modal-scale-enter {
  transform: translate3d(-50%, -50%, 0) scale(1.1) ;
}
.vc-modal-scale-leave {
  transform: translate3d(-50%, -50%, 0) scale(0.8) ;
}
</style>
