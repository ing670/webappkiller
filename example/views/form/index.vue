<template>
  <Page ref="page">
    <p slot='header' style="height:.9rem;line-height:.9rem;text-align:center">头部</p>
    <Switcher labelLeft label="左边的label 1" value="true"></Switcher>
    <Range value="10" max="200"></Range>
    <Range value="20" max="200" step="20"></Range>
    <SelectField :options='sdata' :value="sdata[1]" ></SelectField>
    <Radio v-for="it in rdata" @click="radioClick"  :value="it.value" :label="it.label" name="radio"
           :checked="it.checked"></Radio>
    <Checkbox checked="true" label="fuxk"></Checkbox>
    <Checkbox checked="true" label="fuxk"></Checkbox>
    <Checkbox checked="true" label="fuxk"></Checkbox>
    <Button text="搞个日历" @click="$refs.datepicker.show=true"></Button>
    <DateSelect :value="moment"></DateSelect>
    <Picker :values="sdata"></Picker>
  </Page>
</template>
<style>

</style>
<script>
    import moment from 'moment'
    import {Picker,DateSelect,Button,DatePicker,Page,Switcher,IconText,Range,SelectField,Radio,Checkbox } from 'components'
    export default{
        data(){
            return {
              moment:moment().format('YYYY-MM-DD'),
              rdata:[
                {label:"label1",value:1,checked:true},
                {label:"label1",value:1,checked:false},
                {label:"label1",value:1,checked:false},
              ],
              sdata:[
                  {text:'1',value:'1'},
                  {text:'2',value:'2'},
                  {text:'3',value:'3'}
            ]

          }
        },
        methods:{
        getval(val){
          alert(JSON.stringify(val));
        },
        gettime(t){
          alert(t);
        },
        radioClick(val){
        },
        hide(picker){
          picker.show=false;
        }
        },
        mounted(){
          console.log(this)
        },
        components:{
        Picker,
        DateSelect,
        Button,
        DatePicker,
        Page,
        SelectField,
         Switcher,
         IconText,
         Range,
         Radio,
         Checkbox
        }
    }


</script>
