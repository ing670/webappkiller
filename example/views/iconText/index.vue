<template>
<Page>
  <HeaderBar slot="header" title="图标文本" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
    <Cell>
      <icon-text text="文字在右" position="right">asdasd</icon-text>
    </Cell>
    <Cell>
      <icon-text text="文字在左" position="left"></icon-text>
    </Cell>
    <Cell>
      <icon-text fontFamily="material" :iconSize="size" :iconColor="iconColor" :iconFontCode="fontCode" class="icon-text-page-top"text="文字在上" position="top" ></icon-text>
    </Cell>
    <Cell>
      <icon-text text="文字在下" position="bottom" icon-class=""></icon-text>
    </Cell>

</Page>
</template>

<script>
import {IconText,Page,HeaderBar,Cell} from 'components';

export default {
  data(){
    return {
        size: ".32rem",
        fontCode: "e859",
        iconColor: 'red',
    }
  },
    methods:{
        back(){
            this.$router.back();
        }
    },
  components: {
    IconText,Page,HeaderBar,Cell
  },
};
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
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
