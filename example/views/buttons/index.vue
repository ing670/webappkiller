<template>
    <Page @click="bclick">
        <HeaderBar slot="header" title="BUTTONS" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <div class="wk-page-content-padding">
            <my-button class="vc-button-fill" text="FUKC" ref="fufu" >
                <IconText text="文字在左" position="right" style="color:white" fontCode="e863"></IconText>
            </my-button>
            <my-button @click="bclick" >弹出Toast</my-button>
            <div class="wk-button-wrap">
            <my-button >左边的按钮</my-button>
            <my-button >右边的按钮</my-button>
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

    import {Button, IconText, Toast, Page, HeaderBar,Ripple} from 'components'
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
        mounted(){
            console.log(this.$refs.fufu)
        },
        components: {
            Page,
            'my-button':Button,
            IconText,
            Toast,
            HeaderBar,
            Ripple
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
