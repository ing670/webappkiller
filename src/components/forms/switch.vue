<template>
    <label class="wk-switch" :class="{'label-left': labelLeft}">
        <input type="checkbox" :value="value"/>
        <div class="wk-switch-label" v-if="label && labelLeft">{{label}}</div>
        <div class="wk-switch-checkbox"></div>
        <div class="wk-switch-label" v-if="label && !labelLeft">{{label}}</div>
    </label>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            labelLeft: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            }
        },

    }
</script>

<style rel="stylesheet/less" type="text/less" lang="less">
    @import "../theme/variables.less";
    @import "../theme/tools.less";

    .wk-switch {
        position: relative;
        display: inline-block;
        height: .72rem;
        line-height: .72rem;
        margin-right: .64rem;
        color: @body_color;
        input[type="checkbox"] {
            display: none;
            &:checked {
                + .wk-switch-checkbox,
                + .wk-switch-label + .wk-switch-checkbox {
                    background: rgba(red(@red), green(@red), blue(@red), 0.5);
                    &:after {
                        transform: translate3d(.32rem, 0, 0);
                        background: @red;
                    }
                }
            }
        }
        * {
            pointer-events: none;
        }
        &.label-left {
            .wk-switch-label {
                margin-left: 0;
                margin-right: .16rem;
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .wk-switch-label {
        font-size: .32rem;
        color: @color;
        margin-left: .16rem;
        margin-right: auto;
    }

    .wk-switch-checkbox {
        width: .72rem;
        border-radius: .72rem;
        height: .28rem;
        background: #b0afaf;
        z-index: 0;
        margin: 0;
        padding: 0;
        appearance: none;
        border: none;
        cursor: pointer;
        position: relative;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        transition: all 300ms;
        &:after {
            content: ' ';
            height: .4rem;
            width: .4rem;
            border-radius: .4rem;
            background: #fff;
            position: absolute;
            z-index: 2;
            top: -0.06rem;
            left: 0;
            box-shadow: 0 .04rem .1rem rgba(0, 0, 0, 0.4);
            transform: translate3d(0, 0, 0);
            transition: transform 300ms;
            backface-visibility: hidden;
        }
    }

    .wk-switch-label,
    .wk-switch-checkbox {
        display: inline-block;
        vertical-align: middle;
    }
</style>
