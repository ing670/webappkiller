<template>
    <div class="wk-page">
        <div class="wk-header">
            <slot name='header'></slot>
        </div>
        <div class="wk-content">
            <slot></slot>
        </div>
        <div class="wk-footer">
            <slot name='footer'></slot>
        </div>
    </div>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-page {
        font-size: .32rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
        justify-content: space-between;
        .wk-header, .wk-footer {

        }
        .wk-content {
            position: relative;
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
        props: {}
    }
</script>
