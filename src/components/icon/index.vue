<template>
    <span :class="classs"  v-html="fCode"  @click="$emit('click',this)" :style="{'font-size': size ,'color':iconColor,'font-family':fontFamily}">
    </span>
</template>
<style lang="scss">
  .icon {
    display: inline-block;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
<script>
  /**
   * 参数,icon名称,icon大小,icon颜色,icon事件,icon样式
   */
  export default{
    props: {
      onIcon:{
        type:Function
      },
      size:{
        type:String,
        default:".48rem",
      },
      iconColor:{
        type:String,
        default:"red",
      },
      fontFamily:{
        type:String,
        default:"material",
      },
      fontCode:{
        type:String,
        default:""
      },
      classNames:{
        type:String,
        default:""
      }

    },
    computed:{
      fCode(){
        return this.fontCode?"&#x"+this.fontCode+";":"　";
      },
      classs(){
        return 'icon ' +this.classNames
      }
    },
    methods: {
      onIconClick(e){
        this.onIcon&&this.onIcon(e);
      },
    }
  }
</script>
