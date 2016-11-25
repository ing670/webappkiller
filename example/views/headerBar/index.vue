<template>
<div class="app-container">
    <header-bar title="默认样式 class为 headerbar" style="background: #F7BA2A;color: #fff;" @on-left="backPage" @on-right="alert('点到我了')"></header-bar>

    <br />

    <header-bar title="header" left-text="返回" right-text="菜单"  @on-left="backPage" @on-right="alert('点到我了')"></header-bar>

    <br />

    <header-bar title="好多icon" style="background: #35495e;color: #fff;"  @on-left="backPage" @on-right="alert('点到我了')">
      <div slot="left">
        <i class="i i-index"></i>
        <i class="i i-xihuan"></i>
        <i class="i i-expense"></i>
      </div>
      <div slot="right">
        <i class="i i-member"></i>
        <i class="i i-gongyingshang"></i>
        <i class="i i-all"></i>
      </div>
    </header-bar>
</div>
</template>

<script>
import { HeaderBar } from 'components';

export default {
  methods: {
    // 返回上一页
    backPage() {
      this.$router.back();
    },
  },
  components: {
    HeaderBar,
  },
};
</script>
