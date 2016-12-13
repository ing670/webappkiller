<template>
  <div>
    <div @click="add">{{ msg }}</div>
    <div>{{weatherinfo.city}}</div>
    <div>{{weatherinfo.cityid}}</div>
    <div>{{weatherinfo.temp}}</div>
    <div>{{weatherinfo.WD}}</div>
    <div>{{weatherinfo.SD}}</div>
    <div>{{weatherinfo.time}}</div>
    <div>{{weatherinfo.isRadar}}</div>
    <div>{{weatherinfo.njd}}</div>
    <div>{{weatherinfo.qy}}</div>
    <div>{{weatherinfo.rain}}</div>
    <Button ref="button"></Button>
  </div>
</template>
<style lang="less">

</style>
<script>
    import * as Types from '../../store/motations-types'
    import {Button} from 'components'
    export default{
      computed:{
        msg(){
          return this.$store.state.m1.count
        },
        weatherinfo(){
          return this.$store.state.m1.weatherinfo
        }

      },
        methods:{
          add(){
            this.$store.commit(Types.ADD,{v:2});
          }
        },
        created(){
          this.$http.crossDomain=true;
          this.$http.get("/api").then((successResponse)=>{
            //console.log(successResponse)
            this.$store.commit(Types.UPDATE,successResponse.data.weatherinfo);
          },(errResponse)=>{

          });
        },
        components:{
        }
    }

</script>
