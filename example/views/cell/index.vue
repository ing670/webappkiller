<template>

  <div class="ee">
    <router-link to="/cell/abc">Go to Foo</router-link>
    <router-view></router-view>
    <cell icon-class="" title="cell 实现各种组合" c="cell--title" value="" :is-link="false"></cell>
    <!-- 基础样式 -->
    <cell></cell>
    <!-- value左对齐 -->
    <cell icon-class="" title="cell value左对齐控制class就可以了,没有箭头" c="cell--title" value="" :is-link="false"></cell>


  </div>
</template>
<script>
  import { Cell, } from 'components';

  export default {
    components: {
      Cell,
    },
  };
</script>
<style lang="scss">
  .cell-group {
    margin-top: 1rem;
  }

  .ee {
    overflow-y: scroll;
    overflow-x: hidden;

  }
</style>
