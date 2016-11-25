<template>
  <div>
<ul v-for="(items,index) in clist" class="grid">
  <li v-for="(it,i) in items" class="" @click="$emit('on-item', it)" :style="{ height:rowHeight + 'rem' }">
    <IconText v-show="it" :classNames="it&&it.classNames" :position="it&&it.position" :text="it&&it.text" :iconSize ="it&&it.iconSize" :iconFontCode="it&&it.iconFontCode" :iconColor="it&&it.iconColor"></IconText>
  </li>
</ul>
  </div>
</template>
<script>
import IconText from '../icontext';
export default {

  computed:{
    clist(){
      let rowCount=Math.ceil(this.list.length/this.columnCount);
      console.log(rowCount);
      let cellCount=rowCount*this.columnCount;
      const arr = new Array(cellCount);
      let row = []
      let colum =  []
      //处理所有的数组
      for(let i=0;i<arr.length;i++){
        this.list[i]?arr[i]=this.list[i]:'';
        colum.push(arr[i]);
        if(colum.length == this.columnCount){
          row.push(colum);
          colum=[];
        }
      }

      return row;
    }
  },
  props: {
   rowWidth:{
    type:Number,
    default:1,
    },
    rowHeight:{
    type:Number,
    default:2,
    },
    rowCount:{
    type:Number,
    default:2
    },
    columnCount:{
    type:Number,
    default:2
    },
    list: {
      default() {
        return [{
        classNames:"",
      position: 'bottom',
      iconSize: ".32rem",
      iconFontCode:"e859",
      iconColor:"#000",
      text: ""},{
        classNames:"",
      position: 'bottom',
      iconSize: ".32rem",
      iconFontCode:"e859",
      iconColor:"#000",
      text: ""},{
        classNames:"",
      position: 'bottom',
      iconSize: ".32rem",
      iconFontCode:"e859",
      iconColor:"#000",
      text: ""}];
      },
    },
  },
    components:{
  IconText
  },
};
</script>
<style lang="less">
  @import 'grid.less';
</style>
