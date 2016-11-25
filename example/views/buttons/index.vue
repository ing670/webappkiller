<template>
    <Page @click="bclick">
        <Button  class="vc-button-fill" text="FUKC" color="red" textColor="#fff" bgColor="red" rippleColor="black">
          <IconText text="文字在左" position="right" iconColor="white" iconFontCode="e863"></IconText>
        </Button>
        <Button @click="bclick" class="vc-button-fill" text="弹出Toast" bgColor="#fff"></Button>
        <Button text="FUKC"  rippleColor="red"></Button>
        <Button text="FUKC"  rippleColor="black"></Button>
      <Toast ref="toast" text="Toast"></Toast>
    </Page>
</template>
<style lang="less">
    .vc-button-fill {
        background-color: #7e848c;;
        color: #fff;
        .vc-ripple-ink{
            color: rgba(0,0,0,.24);
        }
        &:active {
            background-color: darken(#7e848c, 8%);
        }
        &.color-red{
            color: #fff;
            background-color:#ff5252;
            &:active {
                background-color: darken(#ff5252, 8%);
            }
        }

        &.color-green{
            color: #fff;
            background-color: #4caf50;
            &:active {
                background-color: darken(#4caf50, 8%);
            }
        }

        &.color-amber{
            color: #fff;
            background-color: #ffc107;
            &:active {
                background-color: darken(#ffc107, 8%);
            }
        }

        &.color-blue{
            color: #fff;
            background-color:  #2196f3;
            &:active {
                background-color: darken( #2196f3, 8%);
            }
        }
    }
</style>
<script>
//    import {Button,} from '../../src/button'
import {Button,IconText,Toast,Page} from 'components'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods:{
          bclick(){
            this.$refs.toast.show();
          }
        },
        components: {
        Page,
            Button,
          IconText,
          Toast
            }
    }
</script>
