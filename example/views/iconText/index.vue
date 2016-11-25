<template>
<div>
  <h1>字体 + 图标 </h1>
  <ul>
    <li>
      <icon-text text="文字在右" position="right">asdasd</icon-text>
    </li>
    <li>
      <icon-text text="文字在左" position="left"></icon-text>
    </li>
    <li>
      <icon-text fontFamily="material" :iconSize="size" :iconColor="iconColor" :iconFontCode="fontCode" class="icon-text-page-top"text="文字在上" position="top" ></icon-text>
    </li>
    <li>
      <icon-text text="文字在下" position="bottom" icon-class=""></icon-text>
    </li>
  </ul>

</div>
</template>

<script>
import IconText from 'components/icontext';

export default {
  data(){
    return {
        size: ".32rem",
        fontCode: "e859",
        iconColor: 'red',
    }
  },
  components: {
    IconText,
  },
};
</script>
<style lang="less">
  .icon-text-page-top{
    span{
      &:first-child{
        margin-bottom: .20rem;
      }
      &:last-child{

      }
    }
  }
</style>
