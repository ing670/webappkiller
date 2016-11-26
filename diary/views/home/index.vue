<template>

    <Page>
        <Downmemu slot="header"></Downmemu>

        <InfiniteLoader :onLoading="loadMore">
        <item v-for="i in home.list" :payload="i" ></item>
        </InfiniteLoader >
        <Button class="diary-button" slot='footer' @click="newDiary">
            <IconText position="left" fontCode="e145" text="新建日志"></IconText>
        </Button>
    </Page>
</template>

<script>

    //import { Cell,Icon,Ripple,HeaderBar,Page } from 'components';
    import Icon  from 'components/icon';
    import Ripple  from 'components/helpers/ripple';
    import Cell  from 'components/cell';
    import Page  from 'components/page';
    import {Button}  from 'components/button';
    import IconText from 'components/icontext'
    import OverLay from 'components/overlay'
    import InfiniteLoader from 'components/infiniteloader'

    import Item  from './item';
    import Downmemu  from './downmemu';
    import * as Types from '../../store/motations-types'

    export default {

        data() {
            return {
                showOverlay: false,
                showLeftMenu: false,
                showRightMenu: false,
                home:this.$store.state.home,
                pageNum:0,
                pageSize:3,
                range:0,
                templateId:0,

            };
        },

        created(){
            console.log(this.$store.state.home.list);
            this.$http.crossDomain=true;
            this.$http.get("http://115.29.39.62/logger/diaryQuery/getAllDiary?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&range="+this.range+"&templateId="+this.templateId+"").then((successResponse)=>{
             this.$store.commit(Types.HOME_GET_ALL_DIARY,successResponse);
            });
        },

        methods: {
            loadMore(loader){
                setTimeout(()=>{
                    this.pageNum++;
                    this.$http.get("http://115.29.39.62/logger/diaryQuery/getAllDiary?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&range="+this.range+"&templateId="+this.templateId+"").then((successResponse)=>{
                        loader.loading=false;
                        this.$store.commit(Types.HOME_GET_ALL_DIARY,successResponse);

                });
            }, 200)
            },
            newDiary(){
                this.$router.push('/diaryTemplateList');
            }

        },
        components: {
            InfiniteLoader,
            OverLay,
            Item,
            Downmemu,
            Page,
            Cell,
            Icon,
            Ripple,
            Button,
            IconText
        },
    };


</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    @import "../../theme/var";

    .wk-page {
        background: @main-page-bgcolor;
    }

    .select-left-list, .select-right-list {
        background: #fff;
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

    .diary-button {
        background: #fff;
        position: relative;
        span {
            color: @main-font-color
        }
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            top: 0;
            left: 0;
            transform: scaleY(0.5);
            background: @main-border-color;
        }
    }


</style>
