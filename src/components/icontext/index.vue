<template>
<span :class="c" @click="$emit('wholeClick')">
  <span v-text="text" v-if="position&&position==='right'" @click="onText" :style="{'font-size':iconSize,'color':textColor}"></span>
      <span v-text="text" v-if="position&&position==='top'" @click="onText"></span>

  <icon :size="iconSize" :fontFamily="fontFamily" :fontCode="iconFontCode" :iconColor="iconColor"></icon>
  <span v-text="text" v-if="position&&position==='left'" @click="onText" :style="{'font-size':iconSize,'color':textColor}"></span>
  <span v-text="text" v-if="position&&position==='bottom'" @click="onText" :style="{'font-size':iconSize,'color':textColor}"></span>
</span>
</template>

<script>
  //参数,position,有left,right,top,bottom
  // onWhole整行点击,classNames样式类名,icon所有参数
  import Icon from '../icon'
  export default {
    components: {
      Icon
    },
    methods: {
      onWhole(){

      },
      onText(){

      }
    },
    computed: {
      c(){
        return 'icontext icon-text-' + this.position + " " + this.classNames;
      }
    },
    props: {
      onWhole: {
        default: function () {
        }
      },
      classNames: {
        default: '',
      },
      position: {
        default: 'right',
      },
      fontFamily:{
        default:"material"
      },
      iconSize: {
        default: ".32rem",
      },
      iconFontCode:{
        default:"e859"
      },
      iconColor:{
        default:"#000"
      },
      textColor:{
         default:"#000"
      },
      text: {
        default: 'text',
      },
    },
  };
</script>
<style lang="less">
  .icontext {
    display: block;
    text-align: center;
  }

  .icon-text-top {
      span{
        display: block;
      }
  }

  .icon-text-bottom {
    span{
      display: block;
    }
  }

  .icon-text-left {
  }

  .icon-text-right {

  }

</style>
