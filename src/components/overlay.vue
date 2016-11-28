<template>
    <div class="wk-overlay" @click="$emit('click')" @touchmove="prevent" :style="style">
        <slot></slot>
    </div>
</template>
<script>
    import {getZIndex} from './utils'
    export default {
        props: {
            onClick: {
                type: Function
            },
        },
        data () {
            return {
                zIndex: getZIndex()
            }
        },
        computed: {
            style () {
                return {
                    'z-index': this.zIndex
                }
            }
        },
        methods: {
            prevent (event) {
                event.preventDefault()
                event.stopPropagation()
            },
            handlerClick () {
                if (this.onClick) {
                    this.onClick()
                }
            }
        }
    }
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>
