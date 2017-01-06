<template>
    <header class="wk-headerbar">
        <slot name="left">
            <icon-text class="wk-icontext-left" :text="leftText" :fontCode="leftFontCode" :position="leftTextPosition"
                       @click="$emit('onLeft')"></icon-text>
        </slot>

        <slot name="title">
            <span v-text="title" class="wk-headerbar-tile" @click="$emit('onTitle')"></span>
        </slot>
        <slot name="right">
            <icon-text class="wk-icontext-right" :text="rightText" :fontCode="rightFontCode" :position="rightTextPosition"
                       @click="$emit('onRight')"></icon-text>
        </slot>
    </header>
</template>

<script>
    import IconText from '../icontext';

    export default {
        props: {
            title: {
                default: '头部',
            },
            leftText: {
                default: '',
            },
            leftTextPosition: {
                default: 'right',
            },
            leftFontCode:{
                default: '',
            },
            rightFontCode:{
                default: '',
            },
            rightText: {
                default: '',
            },
            rightTextPosition: {
                default: 'left',
            },
        },
        components: {
            IconText,
        },
    };
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-headerbar {
        .wk-headerbar-tile {
            flex: 2;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .90rem;
        padding-left: .30rem;
        padding-right: .30rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        z-index: 999;

        .wk-icontext-left {
            flex: 1;
            text-align: left;
            .wk-icon{
                font-size: .48rem;
            }
        }
        .wk-icontext-right {

            flex: 1;
            text-align: right;

        }
    }
</style>

