<template>
    <Page>
        <HeaderBar slot="header" title="行" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <!--<router-link to="/cell/abc">Go to Foo</router-link>-->
        <!--<router-view></router-view>-->
        <cell >使用slot</cell>
        <cell title="title"></cell>
        <cell title='title' value="value"></cell>
        <cell title='title'></cell>
        <cell value='value'></cell>
    </Page>
</template>
<script>
    import {Cell, Page, HeaderBar} from 'components';

    export default {
        methods:{
          back(){
              this.$router.back();
          }
        },
        components: {
            Cell, Page, HeaderBar
        },
    };
</script>
<style lang="less">
    .cell-group {
        margin-top: 1rem;
    }

    .ee {
        overflow-y: scroll;
        overflow-x: hidden;

    }
</style>
