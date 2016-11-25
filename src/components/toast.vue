<template>
  <transition name="fade">
  <div v-if="showing" class="vc-toast"  :style="{'z-index': zIndex}"  >

    <slot>
      <!--<icon v-if="icon" :value="icon" :size="36"></icon>-->
      <div  class="vc-toast-text">{{text}}</div>
    </slot>

  </div>
  </transition>
</template>

<script>
import {getZIndex} from './utils'
//import icon from './icon/icon'
import circular from './circular'
export default {
  data () {
    return {
      zIndex: getZIndex(),
      showing:false,
    }
  },
  props: {
    time:{
      type:Number,
      default:1000,
    },
    text: {
      type: String,
      default: ''
    },
  },
  methods:{
    show(){
      this.showing=true;
      let t = window.setTimeout(()=>{
        this.showing=false;
        window.clearTimeout(t);
      },this.time);

    }
  }
}
</script>

<style lang="less">
.vc-toast{
  position: absolute;
  left: 50%;
  bottom: 50px;
  max-width: 80%;
  border-radius: .1rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: .20rem;
  z-index: 1000;
  transform: translate3d(-50%, 0, 0);
  .vc-toast-text{
    font-size: .28rem;
    display: block;
    text-align: center;
  }
  &.vc-toast-center {
    top: 50%;
    bottom: auto;
    transform: translate3d(-50%, -50%, 0);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
