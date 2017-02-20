<template>

    <div ref="scrollview" @scroll="recordPosition" :class="scrollClass">
        <slot></slot>
    </div>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">


    // 页面平滑滚动
    .scroll-y-view {
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
    }

    .scroll-x-view {
        height: 100%;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
    }

    .dis-scroll-view {
        height: 100%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        width: 100%;
    }
</style>
<script>

    //默认情况下，showtime=0，closeTIme=0，但是绑定数据之后，closeTime 就等于1了
    import {getUID} from '../utils'
    export default{
        computed: {
            scrollClass(){
                if (this.scrollY) {
                    return 'scroll-y-view';
                } else if (this.scrollY) {
                    return 'scroll-x-view';
                } else {
                    return 'dis-scroll-view';
                }
            }
        },
        recordPosition:0,
        props: {

            scrollX: {
                type: Boolean,
                default: false
            },
            scrollY: {
                type: Boolean,
                default: true
            }
        },
        data(){
          return {
              index:0
          }
        },
        created(){
               this.$route.meta.scrollviewCount=this.$route.meta.scrollviewCount+1;
               this.index=this.$route.meta.scrollviewCount;
        },
        positions:[],
        methods: {
            recordPosition(e){
                    this.$route.meta.positions[this.index-1]= e.currentTarget.scrollTop;
            }
        },

        mounted(){
            this.$el.scrollTop = this.$route.meta.positions[this.index-1]?this.$route.meta.positions[this.index-1]:0;
        },
    }
</script>
