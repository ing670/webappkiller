<template>
    <overlay v-show="show" @click.native="close">
        <div class="wk-modal" transition="wk-modal-scale">
            <div class="wk-modal-header" v-if="title">
                <div class="wk-modal-title">
                    {{title}}
                </div>
            </div>
            <div class="wk-modal-body">
                <slot>
                    <div v-if="msg">
                        {{msg}}
                    </div>
                </slot>
            </div>
            <div class="wk-modal-footer" v-if="!hideClose">
                <slot name="footer">
                    <button text="关闭" @click="close"></button>
                </slot>
            </div>
        </div>
    </overlay>
</template>

<script>
    import overlay from "../overlay"
    import {getZIndex} from '../utils'

    export default {
        props: {

            show: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            msg: {
                type: String,
                default: ''
            },

            hideClose: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close () {
                this.show = false
            },
            overlayClick () {
                if (this.clickOverlayClose) this.show = false
            }
        },
        components: {
            overlay
        }
    }
</script>

<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        outline: none;
        width: 4.8rem;
        margin: 0 auto;
        padding: 0;
        background-color: white;
        border-radius: .06rem;
        max-height: 10rem;
        max-width: 10rem;
        overflow-x: hidden;
        overflow-y: auto;
        font-size: .32rem;
    }

    .wk-modal-header {
        display: flex;
        align-items: center;
        padding: .48rem .48rem .4rem;
        .wk-modal-title {
            flex: 1;
            font-size: .4rem;
            display: flex;
            align-items: center;
            margin: 0;
            font-weight: normal;
        }
        + .wk-modal-body {
            padding-top: 0;
        }
    }

    .wk-modal-body {
        padding-left: .48rem;
        padding-right: .48rem;
        padding-top: .48rem;
        padding-bottom: .40rem;
    }

    .wk-modal-footer {
        padding: .12rem .16rem;
        min-height: .96rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .wk-button-fill,
        .wk-button-raise {
            margin-left: .2rem;
        }
    }

    .wk-modal-scale-transition {
        transition: all .3s ease;
    }

    .wk-modal-scale-enter,
    .wk-modal-scale-leave {
        opacity: 0;
    }

    .wk-modal-scale-enter {
        transform: translate3d(-50%, -50%, 0) scale(1.1);
    }

    .wk-modal-scale-leave {
        transform: translate3d(-50%, -50%, 0) scale(0.8);
    }
</style>
