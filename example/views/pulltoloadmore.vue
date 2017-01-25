<template>
    <Page>
        <HeaderBar slot="header" title="行" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <PullToLoadMore pullDown="true" pullUp="true" :pullDownCallBack="pullDownCallBack" :pullUpCallBack="pullDownCallBack">
            <div @click="clickFunc" v-for="i in list">{{i}}</div>
        </PullToLoadMore>
    </Page>
</template>
<script>
    import {PullToLoadMore, Page, HeaderBar} from 'components';

    export default {
        data(){
            return {list: [1, 2, 3, 4, 5, 6, 7, 8]}
        },
        methods: {
            back(){
                this.$router.back();
            },
            pullDownCallBack(next){

                setTimeout(()=>{
                    this.list=this.list.concat(this.list);
                    next();
                },2000)
            },
            clickFunc(){
                window.alert('fff')
            }

        },
        components: {
            PullToLoadMore, Page, HeaderBar
        },
    };
</script>
<style rel="stylesheet/less" lang="less">

</style>
