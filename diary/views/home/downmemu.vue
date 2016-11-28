<template>
    <div>
        <div class="downmemu-wraper">
            <div class="left">
                <icon-text @click="leftClick" fontFamily="icomoon"
                           fontCode="E90D" :text="leftMenu[leftSelected].title" position="right"></icon-text>
            </div>
            <div class="right">
                <icon-text @click="rightClick" fontFamily="icomoon"
                           fontCode="E90D" :text="rightMenu[rightSelected].title" position="right"></icon-text>
            </div>
        </div>
        <OverLay class="index-overlay" v-show='showOverlay' ref="overlay" @click="showOverlay=false">
            <div class="select-left-list" v-show='showLeftMenu'>
                <div class="selected-item" @click='itemLeftClick(index,i)' v-for="(i,index) in leftMenu">{{i.title}}
                </div>
            </div>
            <div class="select-right-list" v-show='showRightMenu'>
                <div class="selected-item" @click='itemRightClick(index,i)' v-for="(i,index) in rightMenu">{{i.title}}
                </div>
            </div>
        </OverLay>
    </div>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">
    @import "../../theme/var";

    .index-overlay {
        top: .8rem !important;
    }

    .select-left-list, .select-right-list {
        background: #fff;
        max-height: 48%;
        overflow: scroll;
    }

    .selected-item {
        height: 1rem;
        line-height: 1rem;
        padding-left: .3rem;
        padding-right: .3rem;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
            transform: scaleY(0.5);
            background: @main-border-color;
        }
    }

    .downmemu-wraper {
        background: #fff;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
            transform: scaleY(0.5);
            background: #eee;
        }
        display: flex;
        height: .8rem;
        align-items: center;
        .left, .right {
            span {
                color: @main-font-color;
            }
            .wk-icon {
                color: @main-color;
                font-size: .24rem
            }
            position: relative;
            &:after {
                content: '';
                position: absolute;
                width: 1px;
                height: 100%;
                bottom: 0;
                right: 0;
                transform: scaleX(0.5);
                background: #eee;
            }
        }
        div {
            flex: 1;
            text-align: center;
        }
    }
</style>
<script>
    import IconText from 'components/icontext'
    import OverLay from 'components/overlay'

    export default{
        props: {
            leftMenu: {
                default: []
            },
            rightMenu: {
                default: []
            }
        },
        data(){
            return {
//                leftMenu: [{
//                    title: '我提交的',
//                    type: 0
//                }, {
//                    title: '全部日志',
//                    type: 1
//                }],
//                rightMenu: [],
                leftSelected: 0,
                rightSelected: 0,
                showOverlay: false,
                showLeftMenu: false,
                showRightMenu: false,
            }
        },
        methods: {
            leftClick(){
                this.showOverlay = true;
                this.showLeftMenu = true;
                this.showRightMenu = false;

            },
            rightClick(){
                this.showOverlay = true;
                this.showLeftMenu = false;
                this.showRightMenu = true;
            },
            itemLeftClick(index, item){
                this.leftSelected = index;
                this.$emit('itemLeftClick', {
                    leftSelected: this.leftMenu[this.leftSelected],
                    rightSelected: this.rightMenu[this.rightSelected]
                })
            },
            itemRightClick(index, item){
                this.rightSelected = index;
                this.$emit('itemRightClick', {
                    leftSelected: this.leftMenu[this.leftSelected],
                    rightSelected: this.rightMenu[this.rightSelected]
                })
            },
        },
        components: {
            IconText, OverLay
        }

    }

</script>
