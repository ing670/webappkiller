<template>
<header :class="classNames">
  <slot name="left">
    <icon-text :classNames="leftClass" :text="leftText" :icon-class="leftIcon" :position="leftTextPosition" @on-whole="$emit('on-left')"></icon-text>
  </slot>

  <slot name="title">
    <span v-text="title" :class="classNames + '__title'" @click="$emit('on-title')"></span>
  </slot>
  <slot name="right">
    <icon-text :classNames="rightClass" :text="rightText" :icon-class="rightIcon" :position="rightTextPosition" @on-whole="$emit('on-right')"></icon-text>
  </slot>
</header>
</template>

<script>
import IconText from '../icontext';

export default {
  props: {
    classNames: {
      default: 'headerbar',
    },
    title: {
      default: 'headerBar',
    },
    leftClass: {
      default: 'icontext--left',
    },
    leftIcon: {
      default: 'i i-backrow',
    },
    leftText: {
      default: '',
    },
    leftTextPosition: {
      default: 'right',
    },
    rightClass: {
      default: 'icontext--right',
    },
    rightIcon: {
      default: 'i i-menu',
    },
    rightText: {
      default: '',
    },
    rightTextPosition: {
      default: 'left',
    },
  },
  components: {
    IconText,
  },
};
</script>
<style lang="less">
  @import 'header-bar.less';
</style>

