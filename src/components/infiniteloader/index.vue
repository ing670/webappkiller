<template>
    <div ref="container" class="wk-infinite-scroll">
        <slot></slot>
        <div v-show="loading">
            <circular v-show="loading" :size="24" color="carbon"></circular>
            <span v-show="loading" class="wk-infinite-scroll-text">正在加载。。。</span>
        </div>
    </div>
</template>

<script>
    import circular from '../circular'
    export default {
        data(){
            return {
                loading: false
            }
        },
        props: {
            onLoading: {
                type: Function,
                required: true
            }
        },
        watch: {
            loading(n, o){
                console.log('新值===>' + n);
                console.log('旧值===>' + o);
            }
        },
        methods: {
            onscroll (e) {
                if (this.loading) return
                const scroller = e.currentTarget;
                let h = scroller.scrollHeight - scroller.scrollTop - 5
                let sh = scroller.offsetHeight//屏宽度
                if (h <= sh) {
                    this.loading = true
                    if (this.onLoading && typeof this.onLoading == 'function') {
                        this.onLoading(this);
                    } else {
                        throw('onLoading must be a function');
                    }
                }
            },
            addScrollListener () {
                this.handlerScroll = (e) => {
                    this.onscroll(e)
                }
                this.$refs.container.addEventListener('scroll', this.handlerScroll, false)
            },
            removeScrollListener () {
                if (!this.handlerScroll) return
                this.$refs.container.removeEventListener('scroll', this.handlerScroll, false)
                this.handlerScroll = null
            }
        },

        mounted(){
            this.addScrollListener();
        },
        beforeDestroy () {
            this.removeScrollListener()
        },
        components: {
            circular
        }
    }


</script>

<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-infinite-scroll {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;

    }

    .wk-infinite-scroll-text {
        margin-left: .16rem;
        font-size: .16rem;
    }
</style>
