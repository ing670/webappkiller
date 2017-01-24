<template>
    <Page>
        <HeaderBar slot="header" title="行" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <PullToLoadMore></PullToLoadMore>
    </Page>
</template>
<script>
    import { PullToLoadMore, Page, HeaderBar} from 'components';

    export default {
        methods:{
            back(){
                this.$router.back();
            }
        },
        components: {
            PullToLoadMore,Page, HeaderBar
        },
    };
</script>
<style rel="stylesheet/less" lang="less">

</style>
