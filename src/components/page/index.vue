<template>
  <div class="page">
    <div class="header">
      <slot name='header' ></slot>
    </div>
    <div class="content">
      <slot ></slot>
    </div>
    <div class="footer">
      <slot name='footer' ></slot>
    </div>
  </div>
</template>
<style lang="less">
   //页面默认是关闭滚动的,否则会转场过程出现滚动条
.page{
  font-size: .32rem;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  justify-content: space-between;
  .header,.footer{
  }
  .content{
    flex: 1;
    overflow-y: scroll;;
  }
}
// 页面平滑滚动
.scroll-page {
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
}
</style>
<script>
    export default{
        props:{

        }
    }
</script>
