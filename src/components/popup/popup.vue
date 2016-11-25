<template>
  <transition v-bind:name="pTransition">
  <div  v-show="show" class="vc-popup" :style="{'z-index': zIndex}" :class="[position ? 'vc-popup-' + position : '']" >
    <slot></slot>
  </div>
  </transition>
</template>

<script>
import {getZIndex} from '../utils'
import overlay from '../overlay'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
    },

    popupTransition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    zIndex () {
      return this.overlay ? '' : getZIndex()
    },
     pTransition(){
    if (this.popupTransition !== 'popup-fade') {
      return  `popup-slide-${this.position}`
    }else{
      return this.popupTransition;
    }
  }
  },

  methods: {
    overlayClick () {
      if (this.clickOverlayClose) this.show = false
    }
  },
  components:{
    overlay
  }
}
</script>

<style lang="css">
.vc-popup {
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
}

.vc-popup-top {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.vc-popup-right {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate3d(0, -50%, 0);
}
.vc-popup-bottom {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.vc-popup-left {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate3d(0, -50%, 0);
}

.popup-slide-top-transition,
  .popup-slide-right-transition,
  .popup-slide-bottom-transition,
  .popup-slide-top-enter,
  .popup-slide-top-leave {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave {
    transform: translate3d(-50%, 100%, 0);
  }
.popup-slide-left-enter-active{
  transition: all .5s ease;
}
.popup-slide-left-leave-active{
  transition: all .5s ease;
}
  .popup-slide-left-enter, .popup-slide-left-leave-active{
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-transition {
    transition: opacity .3s;
  }

  .popup-fade-enter,
  .popup-fade-leave {
    opacity: 0;
  }


</style>
