<template>
    <div ref="pulltoloadmorewraper" class="wk-pulltoloadmore">
        <slot name="pulldown">

            <div ref="pulldown" class="wk-pulldown" v-show="true">
                <icon class="pulldown_arrow" ref="pulldown_arrow" fontCode="e5db"></icon>
                <!--<circular v-show="true" :size="24" color="carbon"></circular>-->
                <span v-show="pullDownLoading" class="wk-infinite-scroll-text">正在加载。。。</span>
            </div>
        </slot>
        <slot>
            <div ref="pullcontent" class="wk-pull-content">
                <div ref="pullcontentchild" style="height: 300px">
                    内容
                </div>
                <div ref="pullcontentchild" style="height: 300px">
                    内容
                </div>
                <div ref="pullcontentchild" style="height: 300px">
                    内容
                </div>
                <div ref="pullcontentchild" style="height: 300px">
                    内容
                </div>
            </div>
        </slot>

        <slot name="pullup">
            <div ref="pullup" class="wk-pullup" style="display: block">
                <circular style="display: block" :size="24" color="carbon"></circular>
                <span v-show="loading" class="wk-infinite-scroll-text">正在加载。。。</span>
            </div>
        </slot>

    </div>
</template>
<script>
//    e5db
    import circular from '../circular'
    import icon from '../icon'

    export default {
        data(){
            return {
                loading: false,
                pullDownLoading: false,
                startY: 0,
                endY: 0,
                pulldownHeight: 0,
                pullupHeight: 0,
                contentOffsetTop: 0
            }
        },
        methods: {},
        mounted(){

            this.pulldownHeight = this.$refs.pulldown.clientHeight;
            this.pullupHeight = this.$refs.pullup.clientHeight;
            this.$refs.pulldown.style.top = (0 - this.pulldownHeight) + 'px';
            this.$refs.pullup.style.bottom = (0 - this.pullupHeight) + 'px';
            this.$refs.pullcontent.addEventListener('touchstart', (e) => {
                //this.startY = e.touches[0].clientY;
                //
                if (this.pullDownLoading == false && this.$refs.pullcontent.scrollTop == 0) {
                    this.startY = e.touches[0].clientY;
                }
            }, false);
            this.$refs.pullcontent.addEventListener('touchmove', (e) => {
                let distance = (e.touches[0].clientY - this.startY);

                if (this.pullDownLoading == false && this.$refs.pullcontent.scrollTop == 0 && distance > 0) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.endY = e.touches[0].clientY;
                    this.contentOffsetTop = distance / 2;
                    this.$refs.pulldown.style.transform = 'translate3d(0,' + distance / 5 + 'px,0)';
                    this.$refs.pullcontent.style.transform = 'translate3d(0,' + distance / 2 + 'px,0)';
                    if(distance/2<=180){
                        this.$refs.pulldown_arrow.$el.style.transform='rotate('+(distance/2 )+'deg)'

                    }

                }

            }, false);
            this.$refs.pullcontent.addEventListener('touchend', (e) => {
                //
                if (this.pullDownLoading == false && this.$refs.pullcontent.scrollTop == 0) {

                    if (this.contentOffsetTop > this.pulldownHeight) {
                        this.$refs.pullcontent.style.transform = 'translate3d(0,' + this.pulldownHeight + 'px,0)';
                        this.$refs.pulldown.style.transform = 'translate3d(0,' + this.pulldownHeight + 'px,0)';
                        this.$refs.pulldown_arrow.$el.style.transform='rotate(180deg)'

                        this.pullDownLoading = true;
                        setTimeout(() => {
                            this.startY = 0;
                            this.contentOffsetTop = 0;
                            this.$refs.pullcontent.style.transform = 'translate3d(0,0px,0)';
                            this.$refs.pulldown.style.transform = 'translate3d(0,0px,0)';
                            this.$refs.pulldown_arrow.$el.style.transform='rotate(0deg)'

                            setTimeout(() => this.pullDownLoading = false, 200)
                        }, 2000);
                    } else {
                        this.$refs.pullcontent.style.transform = 'translate3d(0,0,0)';
                        this.$refs.pulldown.style.transform = 'translate3d(0,0,0)';
                    }
                }
            }, false);

        },
        components: {
            circular,icon
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .wk-pulltoloadmore {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .wk-pullup {
            position: absolute;
            width: 100%;
            font-size: 32px;

        }
        .pulldown_arrow{
            transition: all .2s ease;
            font-size: .64rem;
        }
        .wk-pulldown {
            position: absolute;
            width: 100%;
            font-size: 32px;
            transition: all .2s ease;
        }
    }

    .wk-pull-content {
        transition: all .2s ease;
        flex: 1;
        overflow-y: scroll;

    }

</style>