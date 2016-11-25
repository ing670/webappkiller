<template>

<div class="cell js-qlc-cell" @click="$emit('on-link')" >
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
<style lang="less">
  @import 'cell.less';

</style>
