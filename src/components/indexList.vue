<template>
    <div ref='wkindexlistwrap' class="wk-index-list-wrapper">
        <div ref="wk_index_list_left_wrap" class="wk-index-data-list-wrap">
            <div v-for="i in indexs" class="wk-index-data-wrap" v-show="listData[i].length>0">
                <div class="wk-index-data-title">
                    {{i}}
                </div>
                <div v-for="it in listData[i]" class="wk-index-data-content" @click="itemClick(it)">
                    {{it}}
                </div>
            </div>

        </div>

        <div ref="index_list_items_wrap" class="wk-index-list">
            <div ref="index_list_items" class="wk-index-list-item" v-for="i in indexs"
                 :style="{'height':indexItemHeight+'px','line-height':indexItemHeight+'px'}">{{i}}
            </div>
        </div>
        <div class="wk-index-list-position" v-show="showPosition">{{indexs[currentPosition-1]}}</div>
    </div>
</template>
<style rel='stylesheet/less' lang="less">
    .wk-index-list-wrapper {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        position: relative;
        justify-content: center;
        .wk-index-data-list-wrap {
            flex: 1;
            border-right: 1px solid #ddd;
            overflow-y: scroll;
            .wk-index-data-title {
                padding: 0 .20rem;
                height: .72rem;
                line-height: .72rem;
                background: #000;
                color: white;
                font-size: .28rem;

            }
            .wk-index-data-content {
                padding: 0 .20rem;
                height: .96rem;
                line-height: .96rem;
                font-size: .28rem;
            }
        }
        .wk-index-list {
            align-self: center;
            width: .3rem;
            font-size: .28rem;
            text-align: center;
        }
        .wk-index-list {
            font-size: .28rem;

        }
        .wk-index-list-position {
            position: absolute;
            align-self: center;
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background: rgba(0, 0, 0, 1);
            color: white;
            font-size: .48rem;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                showPosition: false,
                currentPosition: 1
            }
        },
        methods: {
            scrollToTarget(){
                let scroll = 0;
                if (this.listData[this.indexs[this.currentPosition - 1]].length > 0 && this.currentPosition - 1 <= this.$refs.wk_index_list_left_wrap.children.length) {
                    for (let i = 0; i < this.currentPosition - 1; i++) {
                        scroll += this.$refs.wk_index_list_left_wrap.children[i].clientHeight
                    }
                    this.$refs.wk_index_list_left_wrap.scrollTop = scroll;
                }

            }
        },

        props: {
            itemClick: {
                type: Function,
                default: function () {
                }
            },
            listData: {
                type: Object,
                default: {
                    A: [],
                    B: [],
                    C: [],
                    D: [],
                    E: [],
                    F: [],
                    G: [],
                    H: [],
                    I: [],
                    J: [],
                    K: [],
                    L: [],
                    M: [],
                    N: [],
                    O: [],
                    P: [],
                    Q: [],
                    R: [],
                    S: [],
                    T: [],
                    U: [],
                    V: [],
                    W: [],
                    X: [],
                    Y: [],
                    Z: [],
                    "#": []
                }
            },
            indexs: {
                type: Array,
                default: ['A', 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z', '#']
            },
            indexItemHeight: {
                type: Number,
                default: 20
            },
        },
        mounted(){

            let indexmarginTop = (this.$refs.wkindexlistwrap.clientHeight - this.$refs.index_list_items_wrap.clientHeight) / 2;

            this.$refs.index_list_items_wrap.addEventListener('touchstart', (e) => {
                this.currentPosition = Math.ceil((e.touches[0].clientY - indexmarginTop) / this.indexItemHeight);
                if (this.currentPosition >= 1) {
                    this.showPosition = true;
                    this.scrollToTarget();
                }
            }, false)
            this.$refs.index_list_items_wrap.addEventListener('touchend', (e) => {
                this.showPosition = false;
            }, false)
            this.$refs.index_list_items_wrap.addEventListener('touchmove', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.currentPosition = Math.ceil((e.touches[0].clientY - indexmarginTop) / this.indexItemHeight);
                if (this.currentPosition >= this.indexs.length) {
                    this.currentPosition = this.indexs.length;
                } else if (this.currentPosition < 1) {
                    this.currentPosition = 1;
                }
                this.scrollToTarget();
            }, false)
        },
        components: {}
    }

</script>
