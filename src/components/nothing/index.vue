<template>
<div :class="c">
  <i :class="[ iconClass, c + '__icon']" v-if="iconClass"></i>
  <slot><p v-text="text"></p></slot>
</div>
</template>

<script>
export default {
  props: {
    c: {
      type: String,
      default: 'nothing',
    },
    iconClass: {
      type: String,
      default: 'i i-nothing',
    },
    text: {
      type: String,
      default: '什么也没有',
    },
  },
};
</script>
<style lang="less">
@import 'nothing.less';
</style>
