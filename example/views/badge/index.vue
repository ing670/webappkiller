<template>
  <div>
    <icon size=".96rem"fontCode="e908"></icon>
    <badge class="mybadge" value="1" color="red"></badge>
    <badge class="mybadge" value="2" color="blue"></badge>
    <badge class="mybadge" value="123" color="yellow"></badge>
    <badge class="mybadge" value="100" color="blue"></badge>
    <badge class="mybadge" value="1" color="blue"> </badge>
    <badge class="mybadge" value="1" color="blue"></badge>
  </div>
</template>
<style lang="less" rel="stylesheet/less" type="text/less">
  .wrap{
    position: relative;
  }
</style>
<script >
    import {Badge,Icon} from 'components'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          Badge,
          Icon
        }
    }
</script>
