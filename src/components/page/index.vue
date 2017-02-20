<template>
    <div class="wk-page">
        <div class="wk-header">
            <slot name='header'></slot>
        </div>
        <div ref='content' class="wk-content ">
                <slot></slot>
        </div>
        <div class="wk-footer">
            <slot name='footer'></slot>
        </div>
        <Overlay class='wk-pageloading' v-show="ishow">
            <Circular></Circular>
        </Overlay>
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
        .wk-pageloading {
            background-color: rgba(0, 0, 0, 0);

            .preloader-wrapper {
                position: absolute;
                left: 50%;
                top: 50%;
                width: .8rem;
                height: .8rem;
                transform: translate3d(-50%, -50%, 0);
                padding: .4rem;
                border-radius: .1rem;
            }
        }

    }

</style>
<script>
    import Overlay from 'components/overlay'
    import Circular from 'components/circular'
    import {getEID} from 'components/utils'
    import ScrollView from 'components/scrollview'

    //默认情况下，showtime=0，closeTIme=0，但是绑定数据之后，closeTime 就等于1了
    export default{
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                showTime: 0,
                closeTime: 0,
                scrollPosition: 0
            }
        },
        computed: {
            ishow(){
                if (this.loading == true) {
                    this.showTime++
                } else {
                    this.closeTime++
                }
                if (this.showTime > this.closeTime) {
                    return true;
                } else {
                    return false;
                }
            }
        },


        components: {
            Overlay, Circular, ScrollView
        }
    }
</script>
