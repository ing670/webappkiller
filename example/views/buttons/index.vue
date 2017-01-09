<template>
    <Page @click="bclick">
        <HeaderBar slot="header" title="BUTTONS" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <div class="wk-page-content-padding">
            <Button class="vc-button-fill" text="FUKC"  >
                <IconText text="文字在左" position="right" style="color:white" fontCode="e863"></IconText>
            </Button>
            <Button @click="bclick" >弹出Toast</Button>
            <div class="wk-button-wrap">
            <Button  >左边的按钮</Button>
            <Button >右边的按钮</Button>
            </div>
            <Toast ref="toast" text="Toast"></Toast>
        </div>
    </Page>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">
    .vc-button-fill{
        background:red;
    }
</style>
<script>
    //    import {Button,} from '../../src/button'
    import {Button, IconText, Toast, Page, HeaderBar} from 'components'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            bclick(){
                this.$refs.toast.show();
            },
            back(){
                window.history.back();
            }
        },
        components: {
            Page,
            Button,
            IconText,
            Toast,
            HeaderBar
        }
    }
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-page-content-padding {
        margin-top: .2rem;
        padding-left: .30rem;
        padding-right: .30rem;
    }
    .wk-button-wrap{
        display: flex;
        div{
            flex: 1;
        }
    }

</style>
