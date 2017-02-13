<template>
    <Page ref="page">
        <HeaderBar slot="header" title="FROM" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <div class="wk-example-padding">
            <div class="wk-example-item">
                <p>Switcher</p>
                <Switcher labelLeft label="左边的label" value="true"></Switcher>
                <Switcher labelRight label="右边的label" value="true"></Switcher>
            </div>
            <div class="wk-example-item">
                <p>SeekBar</p>
                <Range value="10" max="200"></Range>
                <Range value="20" max="200" step="20"></Range>
            </div>
            <div class="wk-example-item">
                <p>下拉选择框</p>
                <SelectField :options='sdata' :value="sdata[1]"></SelectField>
            </div>
            <div class="wk-example-item">
                <p>Radio</p>
                <Radio v-for="it in rdata" @click="radioClick" :value="it.value" :label="it.label" name="radio"
                       :checked="it.checked"></Radio>
            </div>
            <div class="wk-example-item">
                <p>Checkbox</p>
                <Checkbox checked="true" label="fuxk"></Checkbox>
                <Checkbox checked="true" label="fuxk"></Checkbox>
                <Checkbox checked="true" label="fuxk"></Checkbox>
            </div>
            <div class="wk-example-item">
                <p>日历</p>
                <DateSelect :value="moment"></DateSelect>
            </div>
        </div>
    </Page>
</template>
<style lang="less" rel="stylesheet/less">
    .wk-example-padding {
        padding: .30rem;
    }

    .wk-example-item {
        border-top: 1px solid #ddd;
        padding-top: .40rem;
        &:first-child{
            border-top:none
        }
    }
</style>
<script>
    import moment from 'moment'
    import {
        Overlay,
        Cell,
        DateSelect,
        Button,
        DatePicker,
        Page,
        Switcher,
        IconText,
        Range,
        SelectField,
        Radio,
        Checkbox,
        HeaderBar
    } from 'components'
    export default{
        data(){
            return {
                moment: moment().format('YYYY-MM-DD'),
                rdata: [
                    {label: "label1", value: 1, checked: true},
                    {label: "label2", value: 1, checked: false},
                    {label: "label3", value: 1, checked: false},
                ],
                sdata: [
                    {text: '111111111111', value: '1111111111'},
                    {text: '222222222222', value: '2222222222'},
                    {text: '3', value: '3'}
                ]

            }
        },
        methods: {
            back(){
                this.$router.back();
            },
            getval(val){
                alert(JSON.stringify(val));
            },
            gettime(t){
                alert(t);
            },
            radioClick(val){
            },
            hide(picker){
                picker.show = false;
            }
        },
        mounted(){
        },
        components: {
            Cell,
            HeaderBar,
            DateSelect,
            Button,
            DatePicker,
            Page,
            SelectField,
            Switcher,
            IconText,
            Range,
            Radio,
            Checkbox,
            Overlay
        }
    }


</script>
