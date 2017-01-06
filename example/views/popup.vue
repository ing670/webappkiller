<template>
    <Page>
        <HeaderBar slot="header" title="POP" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <Button style="margin-top: 40%" @click="topPopup = true">上面弹出</Button>
        <Button @click="bottomPopup = true">下面弹出</Button>
        <Button @click="leftPopup = true">左边弹出</Button>
        <Button @click="rightPopup = true">右边弹出</Button>

        <popup position="bottom" class="demo-popup-bottom" :show="bottomPopup">
            <div class="demo-bar">
                <span>弹出</span>
                <a href="javascript:;" class="demo-link" @click="bottomPopup = false">关闭</a>
            </div>
        </popup>
        <popup position="top" :overlay="false" class="demo-popup-top" :show="topPopup">
            更新成功
        </popup>
        <transition name="vc-overlay-fade">
            <Overlay v-show="leftPopup" @click="hide">
                <popup position="left" class="demo-popup-left" :show="leftPopup">
                    <Button @click="leftPopup = false">左边侧滑栏</Button>
                </popup>
            </Overlay>
        </transition>


        <transition name="vc-overlay-fade">
        <Overlay v-show="rightPopup" @click="hide">
                <popup position="right" class="demo-popup-right" :show="rightPopup">
                    <Button @click="rightPopup = false">右边关闭</Button>
                </popup>
        </Overlay>
        </transition>
    </Page>
</template>

<script>
    import {Popup, Page, Overlay, Button,HeaderBar} from "components"
    export default {
        data () {
            return {
                bottomPopup: false,
                topPopup: false,
                leftPopup: false,
                rightPopup: false
            }
        },
        methods: {
            back () {
                window.history.back()
            },
            hide(){
                this.bottomPopup = false,
                    this.topPopup = false,
                    this.leftPopup = false,
                    this.rightPopup = false

            }
        },
        watch: {
            topPopup (val) {
                if (val) {
                    setTimeout(() => {
                        this.topPopup = false
                    }, 2000)
                }
            }
        },
        components: {
            Popup, Page, Overlay, Button,HeaderBar
        }
    }
</script>

<style lang="less">
    .vc-center-block {
        display: flex;
        align-items: center;
    }

    .demo-popup-bottom {
        width: 100%;
    }

    .demo-bar {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        color: #FFF;
        padding-left: 10px;
        font-size: 16px;
    }

    .demo-link {
        display: flex;
        align-items: center;
        color: #FFF;
        text-decoration: none;
        height: 48px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .demo-popup-top {
        width: 100%;
        opacity: .8;
        height: .48rem;
        line-height: .48rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .demo-popup-left {
        display: flex;
        width: 85%;
        height: 100%;
        align-items: center;
    }

    .demo-popup-right {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .vc-overlay-fade-enter, .vc-overlay-fade-leave-active {
        opacity: 0;
    }

    .vc-overlay-fade-enter-active, .vc-overlay-fade-leave-active {
        transition: all .5s linear;
        opacity: 1;
    }


</style>
