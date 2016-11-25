<template>
  <transition :name="transitionName">
      <router-view>
      </router-view>
  </transition>
</template>
<script >

export default {
  data(){
    return{
      transitionName:''
    }
  },
  computed: {
    isBack() {
      if(this.$route.path === '/') {
        return '';
      } else {
        return 'i i-backrow';
      }
    },
  },
  methods:{
    alertMe(){
      alert('aaaaa');
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/')
      const fromDepth = from.path.split('/')
      const isRoot = !fromDepth[1];
//            if(isRoot){
//        this.transitionName='slide-out';
//      }else{
//        this.transitionName = toDepth.length < fromDepth.length ? 'slide-out' : 'slide-in'
//      }

      if(isRoot){
        this.transitionName='slide-fade-out';
      }else{
        this.transitionName = toDepth.length < fromDepth.length ? 'slide-fade-out' : 'slide-fade-in'
      }

//      if(isRoot){
//        this.transitionName='slide-zoom-in';
//      }else{
//        this.transitionName = toDepth.length < fromDepth.length ? 'slide-zoom-in' : 'slide-zoom-out'
//      }
      console.log(this.transitionName)
    }
  }
};
</script>
<style lang="less">
@import 'init.less';
@import 'transition.less';
</style>
