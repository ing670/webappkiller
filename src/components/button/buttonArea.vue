<template>
  <div class="wk-button-area">
    <slot></slot>
  </div>
</template>

<style lang="less" rel="stylesheet/less" type="less">
.wk-button-area {
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0 16px;
  > .wk-button + .wk-button{
    margin-top: 16px;
  }
  width: 100%;
}
</style>
