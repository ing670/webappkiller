<template>
    <Page>
        <HeaderBar slot="header" title="图标文本" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <InfiniteLoader :onLoading="loadMore">
            <Cell v-for="i in items1">{{i}}</Cell>
        </InfiniteLoader>
        </div>
    </Page>
</template>
<style lang="less">
    .page {
        overflow-y: hidden;
    }
</style>
<script>
    import {InfiniteLoader, Page, Cell, HeaderBar} from 'components'
    export default{
        data(){
            return {
                test: "fux",
                loading: false,
                items1: [111111111111, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            }
        },
        watch: {
            loading(n, o){
                //console.log('new value===>' + n)
            },
            test(n, o){
                //console.log('new value===>' + n)
            }
        },
        methods: {
            back(){
                this.$router.back();
            },
            loadMore (loader) {
                var _this  = this;
                setTimeout(() => {
                        loader.loading = false;
                        _this.items1=_this.items1.concat(_this.items1);
                        console.log( _this.items1.length);

//                        var nits=[];
//                        for (let i = 0; i < 10; i++) {
//                            _this.items.push(_this.items[i]);
//                        }
//
//                        _this.items=nits.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
                        //console.log(_this.items);
                    },
                    2000
                )
            }
        },
        components: {
            InfiniteLoader, Page, Cell, HeaderBar
        }
    }


</script>
