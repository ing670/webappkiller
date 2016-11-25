<template>
<div>
  <div>
    asdasdas
    <!--<grid></grid>-->
    <grid :list="gdata" rowHeight="2"  columnCount="2" @on-item="itclick">
    </grid>
    <!--<grid :list="orderGrid" @on-item=""></grid>-->
    <!--<grid :list="doGrid"  @on-item=""></grid>-->
    <!--<grid c="footergrid" :list="navGrid" @on-item=""></grid>-->
  </div>
</div>
</template>
<script>
import { Grid} from 'components';
//import { orderGrid, doGrid, navGrid } from './grid';

export default {
  data(){
    return{
    gdata:[
        {
          classNames:"abc",
          iconColor: 'red',
          position: 'bottom',
          text: '看看',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
         {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
      ]
    }
  },
  methods:{
    itclick(it){
      alert(JSON.stringify(it))
    }
  },
  components: {
    Grid,

  },
};

</script>
<style lang="less">
.abc{
  color: #00ABEB;
}
</style>
