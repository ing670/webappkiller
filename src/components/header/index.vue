<template>
    <header class="wk-headerbar">
        <slot name="left">
            <icon-text class="wk-icontext-left" :text="leftText" :icon-class="leftIcon" :position="leftTextPosition"
                       @on-whole="$emit('onLeft')"></icon-text>
        </slot>

        <slot name="title">
            <span v-text="title" class="wk-headerbar-tile" @click="$emit('onTitle')"></span>
        </slot>
        <slot name="right">
            <icon-text class="wk-icontext-right" :text="rightText" :icon-class="rightIcon" :position="rightTextPosition"
                       @on-whole="$emit('onRight')"></icon-text>
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
            leftClass: {
                default: 'icontext--left',
            },
            leftText: {
                default: '',
            },
            leftTextPosition: {
                default: 'right',
            },
            rightClass: {
                default: 'icontext--right',
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
            margin-left: .16rem;
            margin-right: .16rem;
            flex: 1;
            text-align: left;

        }
        .wk-icontext-right {
            margin-left: .16rem;
            margin-right: .16rem;
            flex: 1;
            text-align: right;

        }
    }
</style>

