<template>
<Page>
  <HeaderBar slot="header" title="9宫格组件" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
  <div>
    <!--<grid></grid>-->
    <grid :list="gdata" rowHeight="3"  columnCount="3" @on-item="itclick">
    </grid>
    <!--<grid :list="orderGrid" @on-item=""></grid>-->
    <!--<grid :list="doGrid"  @on-item=""></grid>-->
    <!--<grid c="footergrid" :list="navGrid" @on-item=""></grid>-->
  </div>
</Page>
</template>
<script>
import { Grid,Page,HeaderBar} from 'components';
//import { orderGrid, doGrid, navGrid } from './grid';

export default {
  data(){
    return{
    gdata:[
        {
          classNames:"abc",
          iconColor: 'red',
          position: 'bottom',
          text: '111',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '222',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '333',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '444',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '555',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '666',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '777',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '888',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '999',
        },
         {
          iconColor: '#333',
          position: 'bottom',
          text: '000',
        },
      ]
    }
  },
  methods:{
    itclick(it){
      alert(JSON.stringify(it))
    },
      back(){
        window.history.back();
      }
  },
  components: {
    Grid,Page,HeaderBar

  },
};

</script>
<style lang="less">
.abc{
  color: #00ABEB;
}
</style>
