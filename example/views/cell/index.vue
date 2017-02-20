<template>
    <Page>
        <HeaderBar slot="header" title="行" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <ScrollView style="height: 200px">
            <cell>使用slot1</cell>
            <cell title="title1"></cell>
            <cell title='title1' value="value"></cell>
            <cell title='title1'></cell>
            <cell value='value1'></cell>
            <cell>使用slot1</cell>
            <cell title="title1"></cell>
            <cell title='title1' value="value"></cell>
            <cell title='title1'></cell>
            <cell value='value1'></cell>
            <cell>使用slot1</cell>
            <cell title="title1"></cell>
            <cell title='title1' value="value"></cell>
            <cell title='title1'></cell>
            <cell value='value1'></cell>
            <cell>使用slot1</cell>
            <cell title="title1"></cell>
            <cell title='title1' value="value"></cell>
            <cell title='title1'></cell>
            <cell value='value1'></cell>
        </ScrollView>
        <ScrollView style="height: 200px;background: black">
            <cell>使用slot2</cell>
            <cell title="title2"></cell>
            <cell title='title2' value="value"></cell>
            <cell title='title2'></cell>
            <cell value='value2'></cell>
            <cell>使用slot2</cell>
            <cell title="title"></cell>
            <cell title='title2' value="value"></cell>
            <cell title='title2'></cell>
            <cell value='value2'></cell>
            <cell>使用slot2</cell>
            <cell title="title2"></cell>
            <cell title='title2' value="value"></cell>
            <cell title='title2'></cell>
            <cell value='value2'></cell>
            <cell>使用slot2</cell>
            <cell title="title2"></cell>
            <cell title='title2' value="value"></cell>
            <cell title='title2'></cell>
            <cell value='value'></cell>
        </ScrollView>
        <ScrollView style="height: 200px; background: red">
            <cell>使用slot</cell>
            <cell title="title"></cell>
            <cell title='title' value="value"></cell>
            <cell title='title'></cell>
            <cell value='value'></cell>
            <cell>使用slot</cell>
            <cell title="title"></cell>
            <cell title='title' value="value"></cell>
            <cell title='title'></cell>
            <cell value='value'></cell>
            <cell>使用slot</cell>
            <cell title="title"></cell>
            <cell title='title' value="value"></cell>
            <cell title='title'></cell>
            <cell value='value'></cell>
            <cell>使用slot</cell>
            <cell title="title"></cell>
            <cell title='title' value="value"></cell>
            <cell title='title'></cell>
            <cell value='value'></cell>
        </ScrollView>

    </Page>
</template>
<script>
    import {Cell, Page, HeaderBar, ScrollView} from 'components';

    export default {
        methods: {
            back(){
                this.$router.back();
            }
        },
        components: {
            Cell, Page, HeaderBar, ScrollView
        },
        mounted(){
            console.log('mounted');
        }
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
