<template>
    <a href="javascript:;" class="vc-tab-link" :class="{'active': show}" @click="tabClick">
        <slot></slot>
    </a>
</template>

<script>
    export default {
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
            tabClick () {
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

<style rel="stylesheet/less" type="text/less" lang="less">
    .vc-tab-link {
        flex: 1;
        width: 100%;
        height: 100%;
        color: #FFF;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: .24rem;
        padding-bottom: .24rem;
        .vc-ripple-ink {
            color: rgba(255, 255, 255, .3);
        }
    }
</style>
