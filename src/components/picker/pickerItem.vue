<template>
    <div ref='wkpickeritemwrap' class="wk-picker-items-wrapper">
        <div ref='wkpickerslot' class="wk-picker-item-wrapper wk-picker-animated">
            <div v-for="i in values" class="wk-picker-item "
                 :style="{'height':itemHeight+'px','line-height':itemHeight+'px'}">{{i}}
            </div>
        </div>
    </div>
</template>
<style rel='stylesheet/less' lang="less">
    .wk-picker-items-wrapper {
        display: flex;
        flex-direction: row;
        position: relative;
        overflow: hidden;
        flex: 1;
        .wk-picker-item-wrapper {
            flex: 1;
            text-align: center;
        }
        .wk-picker-item {
            font-size: .24rem;
        }
        .wk-picker-div {
            display: flex;
            align-items: center;
        }
        .wk-picker-animated {
            transition: all .3s ease-out;
        }
        .wk-picker-div{
            font-size: .36rem;
        }

    }
</style>
<script>
    export default{
        data(){
            return {
                startY: 0,
                scrollDistance: 0,
                pullMin: 0,
                pullMax: 0,
                scrollPosition:0,
            }
        },
        methods: {
            scrollToValue(val){
                this.indexSelected = this.values.indexOf(val);
                if(this.indexSelected==-1){
                    this.indexSelected=0;
                }
                this.scrollPosition = (this.pullMax - (this.indexSelected * this.itemHeight))
                this.$refs.wkpickerslot.style.webkitTransform = 'translate3d(0,' + this.scrollPosition + 'px,0)';
                this.valueSelected=this.values[this.indexSelected]
                this.onSelected(this);
            }
        },
        props: {

            itemHeight: {
                type: Number,
                default: 30
            },
            itemCount: {
                type: Number,
                default: 3
            },
            values: {
                type: Array,
                default: []
            },
            valueSelected: {
                type: Number,
                default: '',
            },
            indexSelected: {
                type: Number,
                default: 0,
            },
            onSelected:{
                type: Function,
                default:function () {

                }
            }

        },
        mounted(){
            //
            //找到选中的第几个
            this.scrollToValue(this.valueSelected);
            let itemsLength = (this.values.length -1) * this.itemHeight;
            let itemWrapperHeight = this.itemHeight * this.itemCount;
            this.$refs.wkpickeritemwrap.style.height = itemWrapperHeight + 'px';
            this.pullMax = ((this.itemCount - 1) / 2 * this.itemHeight);
            this.pullMin = -itemsLength+this.pullMax;
            //默认选中
            this.$refs.wkpickerslot.addEventListener('touchstart', (e) => {
                this.startY = e.touches[0].clientY;
                this.$refs.wkpickerslot.classList.remove("wk-picker-animated");
            }, false);
            this.$refs.wkpickerslot.addEventListener('touchmove', (e) => {
                this.scrollDistance = (e.touches[0].clientY - this.startY)
                //简单处理速度
                let scrollDistance = this.scrollPosition + this.scrollDistance;
                this.$refs.wkpickerslot.style.webkitTransform = 'translate3d(0,' + scrollDistance + 'px,0)';
            }, false);
            this.$refs.wkpickerslot.addEventListener('touchend', (e) => {
                this.$refs.wkpickerslot.classList.add("wk-picker-animated");
                this.scrollPosition=this.scrollPosition + Math.round(this.scrollDistance/this.itemHeight)*this.itemHeight;

                if (this.scrollPosition <= this.pullMin){
                    this.$refs.wkpickerslot.style.webkitTransform = 'translate3d(0,' + this.pullMin + 'px,0)';
                    this.scrollPosition=this.pullMin;
                }
                if (this.scrollPosition >= this.pullMax){
                    this.$refs.wkpickerslot.style.webkitTransform = 'translate3d(0,' + this.pullMax + 'px,0)';
                    this.scrollPosition=this.pullMax;
                }
                if(this.scrollPosition < this.pullMax&&this.scrollPosition>this.pullMin){
                    //计算出滚动位置
                    this.$refs.wkpickerslot.style.webkitTransform = 'translate3d(0,' + this.scrollPosition  + 'px,0)';
                }
                this.indexSelected=(this.pullMax-this.scrollPosition)/this.itemHeight;
                this.valueSelected=this.values[this.indexSelected]
                this.onSelected(this);
            }, false);
        },

    }

</script>
