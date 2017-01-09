<template>
    <a href="javascript:;" class="wk-bottom-nav-item" :class="{'active': show}" @click="onClick()">
        <slot>
            <icon :value="icon"></icon>
            <div class="wk-bottom-nav-item-text">{{title}}</div>
        </slot>
    </a>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                index: -1,
                show: false
            }
        },
        computed: {
            show () {
                return (this.$parent.active === this.index)
            }
        },
        methods: {
            onClick () {
                this.$parent.handlerClick(this.index)
            }
        },
        created () {
            this.$parent.renderData.push({
                title: this.title,
                active: false
            })
        },
        mounted () {
            let children = this.$parent.$children
            for (let i = 0; i < children.length; i++) {
                if (children[i].$el === this.$el) {
                    this.index = i
                    break
                }
            }
        },
        components: {}
    }
</script>

<style lang="less" rel="stylesheet/less" type="less">
    @import "../theme/tools.less";
    @import "../theme/variables.less";

    .wk-bottom-nav-item {
        flex: 1;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        .active-highlight();

        &.active {
            color: red;
            .wk-bottom-nav-item-text {
                font-size: .32rem;
            }
        }
        .wk-bottom-nav-item-text {
            font-size: .32rem;
            transition: color 0.3s, font-size 0.3s;
        }
        .icon {
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        }
    }
</style>
