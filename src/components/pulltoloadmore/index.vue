<template>
    <div ref="pulltoloadmorewraper" class="wk-pulltoloadmore">
        <div ref="pulldown" class="wk-pulldown">
            <slot name="pulldown">
                <icon v-show="!pullDownLoading" class="pulldown_arrow" ref="pulldown_arrow" fontCode="e5db"></icon>
                <circular v-show="pullDownLoading" :size="24" color="carbon"></circular>
                <span class="wk-pulldown-scroll-text">正在加载。。。</span>
            </slot>
        </div>
        <div ref="pullcontent" class="wk-pull-content">
            <slot>
            </slot>
        </div>
        <div ref="pullup" class="wk-pullup">
            <slot name="pullup">
                <icon v-show="!pullUpLoading" class="pullup_arrow" ref="pullup_arrow" fontCode="e5d8"></icon>
                <circular v-show="pullUpLoading" :size="24" color="carbon"></circular>
                <span class="wk-pulldown-scroll-text">正在加载。。。</span>
            </slot>
        </div>

    </div>
</template>
<script>
    //    e5db
    import circular from '../circular'
    import icon from '../icon'

    export default {
        data(){
            return {
                pullUpLoading: false,
                pullDownLoading: false,
                pullUping:false,
                pullDowning:false,
                startY: 0,
                pulldownHeight: 0,
                pullupHeight: 0,
                contentOffsetTop: 0,
                contentOffsetBottom: 0
            }
        },
        props: {
            pullDownCallBack: {
                type: Function,
                default: null
            },
            pullUpCallBack: {
                type: Function,
                default: null
            },
            pullUp: {
                type: Boolean,
                default: false
            },
            pullDown: {
                type: Boolean,
                default: false
            }
        },
        mounted(){

            this.pulldownHeight = this.$refs.pulldown.clientHeight;
            this.pullupHeight = this.$refs.pullup.clientHeight;
            this.$refs.pulldown.style.top = (0 - this.pulldownHeight) + 'px';
            this.$refs.pullup.style.bottom = (0 - this.pullupHeight) + 'px';
            this.$refs.pullcontent.addEventListener('touchstart', (e) => {
                    this.startY = e.touches[0].clientY;
//                    this.$refs.pullcontentmask.style.display="block"
            }, false);
            this.$refs.pullcontent.addEventListener('touchmove', (e) => {

                let distance = (e.touches[0].clientY - this.startY);
                let isTop = this.$refs.pullcontent.scrollTop == 0;
                //下拉效果
                if (this.pullDown && this.pullDownLoading == false && isTop && distance > 0) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.pullUping=false;
                    this.pullDowning=true;
                    this.contentOffsetTop = distance / 2;
                    this.$refs.pulldown.style.transform = 'translate3d(0,' + distance / 3 + 'px,0)';
                    this.$refs.pullcontent.style.transform = 'translate3d(0,' + distance / 2 + 'px,0)';
                    //角度控制
                    if (distance / 2 <= 180) {
                        this.$refs.pulldown_arrow.$el.style.transform = 'rotate(' + (distance / 2 ) + 'deg)'
                    }
                    //控制箭头
                    if (this.contentOffsetTop / 2 > this.pulldownHeight) {
                        this.$refs.pulldown_arrow.$el.style.transform = 'rotate(180deg)'
                    } else {
                        this.$refs.pulldown_arrow.$el.style.transform = 'rotate(0deg)'
                    }
                }
                //上拉效果
                let isBottom = this.$refs.pullcontent.scrollHeight - this.$refs.pullcontent.scrollTop == this.$refs.pullcontent.clientHeight ;

                if (this.pullUp && this.pullUpLoading == false && isBottom && distance < 0) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.pullUping=true;
                    this.pullDowning=false;
                    this.contentOffsetBottom = distance / 2;
                    this.$refs.pullup.style.transform = 'translate3d(0,' + distance / 3 + 'px,0)';
                    this.$refs.pullcontent.style.transform = 'translate3d(0,' + distance / 2 + 'px,0)';
                    if (distance / 2 <= 180) {
                        this.$refs.pullup_arrow.$el.style.transform = 'rotate(' + (distance / 2 ) + 'deg)'
                    }
                    //控制箭头
                    if (this.contentOffsetBottom / 2 > -this.pulldownHeight) {
                        this.$refs.pullup_arrow.$el.style.transform = 'rotate(180deg)'
                    } else {
                        this.$refs.pullup_arrow.$el.style.transform = 'rotate(0deg)'
                    }
                }

            }, false);
            this.$refs.pullcontent.addEventListener('touchend', (e) => {
                //下拉刷新
               // this.$refs.pullcontentmask.style.display="block"
                e.stopPropagation();
                let isBottom = this.$refs.pullcontent.scrollHeight - this.$refs.pullcontent.scrollTop == this.$refs.pullcontent.clientHeight;
                let isTop = this.$refs.pullcontent.scrollTop == 0;
                let isPullDown=this.pullDown && this.pullDownLoading == false && isTop&&this.pullDowning;
                let isPullUp=this.pullUp && this.pullUpLoading == false && isBottom&&this.pullUping

                if (isPullDown) {
                    console.log('isPullDown');
                    if (this.contentOffsetTop > this.pulldownHeight) {

                        this.$refs.pullcontent.style.transform = 'translate3d(0,' + this.pulldownHeight + 'px,0)';
                        this.$refs.pulldown.style.transform = 'translate3d(0,' + this.pulldownHeight + 'px,0)';
                        this.$refs.pulldown_arrow.$el.style.transform = 'rotate(180deg)'
                        this.pullDownLoading = true;
                        let next = () => {
                            this.startY = 0;
                            this.contentOffsetTop = 0;
                            this.$refs.pullcontent.style.transform = 'translate3d(0,0px,0)';
                            this.$refs.pulldown.style.transform = 'translate3d(0,0px,0)';
                            setTimeout(() => {
                                this.pullDownLoading = false;
                                this.$refs.pulldown_arrow.$el.style.transform = 'rotate(0deg)'
//                                this.$refs.pullcontentmask.style.display="none"
                            }, 200);
                        };
                        if (this.pullDownCallBack) {
                            this.pullDownCallBack(next)
                        } else {
                            setTimeout(next, 2000);
                        }
                    }else {
                        this.$refs.pullcontent.style.transform = 'translate3d(0,0,0)';
                        this.$refs.pulldown.style.transform = 'translate3d(0,0,0)';
                        this.$refs.pulldown_arrow.$el.style.transform = 'rotate(0deg)'
                        this.pullDownLoading = false;
//                        this.$refs.pullcontentmask.style.display="none"

                    }
                }
                if (isPullUp) {
                    console.log('isPullUp');

                    if ((0 - this.contentOffsetBottom) > this.pullupHeight) {
                        this.$refs.pullcontent.style.transform = 'translate3d(0,' + -this.pullupHeight + 'px,0)';
                        this.$refs.pullup.style.transform = 'translate3d(0,' + -this.pullupHeight + 'px,0)';
                        this.$refs.pullup_arrow.$el.style.transform = 'rotate(180deg)'
                        this.pullUpLoading = true;
                        let next = () => {
                            this.startY = 0;
                            this.contentOffsetBottom = 0;
                            this.$refs.pullcontent.style.transform = 'translate3d(0,0px,0)';
                            this.$refs.pullup.style.transform = 'translate3d(0,0px,0)';
                            setTimeout(() => {
                                this.pullUpLoading = false;
                                this.$refs.pullup_arrow.$el.style.transform = 'rotate(0deg)'
//                                this.$refs.pullcontentmask.style.display="none"

                            }, 200);
                        };
                        if (this.pullUp && this.pullUpCallBack) {
                            this.pullUpCallBack(next)
                        } else {
                            setTimeout(next, 2000);
                        }

                    }else {
                        this.$refs.pullcontent.style.transform = 'translate3d(0,0px,0)';
                        this.$refs.pullup.style.transform = 'translate3d(0,0,0)';
                        this.$refs.pullup_arrow.$el.style.transform = 'rotate(0deg)'
                        this.pullUpLoading = false;
//                        this.$refs.pullcontentmask.style.display="none"

                    }
                }

            }, false);

        },
        components: {
            circular, icon
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
            font-size: .64rem

        }
        .pulldown_arrow, .pullup_arrow {
            transition: all .3s ease;
            font-size: .36rem;
            line-height: .64rem;

        }
        .wk-pulldown, .wk-pullup {
            position: absolute;
            width: 100%;
            font-size: .64rem;
            transition: all .2s ease;
            display: flex;
            justify-content: center;
            align-content: center;
        }
    }

    .wk-pulldown-scroll-text {
        display: block;
        margin-left: .16rem;
        font-size: .16rem;
        line-height: .64rem;
    }

    .wk-pull-content {
        transition: all .2s ease;
        flex: 1;
        overflow-y: scroll;
        position: relative;

    }
    .wk-pull-content-mask{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #4caf50;
    }

</style>