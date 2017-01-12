<template>
    <Page>
        <HeaderBar slot="header" title="头部一" leftFontCode="e5c4" left-text="返回" right-text="菜单" @onLeft="backPage"
                   @onRight="onRightClick"></HeaderBar>
        <HeaderBar title="头部二"></HeaderBar>

        <HeaderBar  leftFontCode="e5c4" title="头部三">
            <div slot="title">slot头部三</div>
        </HeaderBar>

        <HeaderBar  leftFontCode="e5c4" rightFontCode="e145" rightText="添加" leftText="返回"
                   title="头部四"></HeaderBar>
        <header-bar title="头部五" @onLeft="backPage" @onRight="onRightClick">
            <div slot="left">
                slotLeft
            </div>
            <div slot="right">
                slotLeft
            </div>
        </header-bar>
    </Page>
</template>

<script>
    import {HeaderBar, Page} from 'components';

    export default {
        methods: {
            // 返回上一页
            backPage() {
                this.$router.back();
            },
            onRightClick(){
                window.alert('你点击了我')
            }
        },
        components: {
            HeaderBar, Page
        },
    };
</script>
