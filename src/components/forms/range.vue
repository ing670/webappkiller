<template>
<div class="wk-range ">
  <input ref='inputrange' @input="onInput" type="range" :step="step" :min="min" :max="max" v-model="value" :style="{'background':'-webkit-linear-gradient(to right, #ff5252 ' + per + '%,#ff5252 ' + per + '%, #b9b9b9 ' +per + '%)','background':'-o-linear-gradient(to right, #ff5252 ' + per + '%,#ff5252 ' + per + '%, #b9b9b9 ' +per + '%)','background':'-moz-linear-gradient(to right, #ff5252 ' + per + '%,#ff5252 ' + per + '%, #b9b9b9 ' +per + '%)','background':'linear-gradient(to right, #ff5252 ' + per + '%,#ff5252 ' + per + '%, #b9b9b9 ' +per + '%)'}">
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    }
  },
  computed:{
    per(){
      return this.value/this.max*100
    }
  },
  watch: {
    value () {
      this.$emit('input-change', this.value)
    }
  },
  methods:{
    onInput(e){
    e.target.style.background='linear-gradient(to right, #ff5252 ' + this.value/this.max*100 + '%,#ff5252 ' + this.value/this.max*100 + '%, #b9b9b9 ' + this.value/this.max*100 + '%)' ;
}

  }
}
</script>

<style rel="stylesheet/less" type="text/less" lang="less">
@import "../theme/variables.less";
@import "../theme/tools.less";
.wk-range {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: .72rem;
  display: flex;
  align-items: center;
  input[type="range"] {
    position: relative;
    display: block;
    height: .04rem;
    width: 100%;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: -webkit-gradient(linear, 50% 0, 50% 100%, color-stop(0, #b9b9b9), color-stop(100%, #b9b9b9));
    background: linear-gradient(to right, #b9b9b9 0, #b9b9b9 100%);
    background-position: center;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    outline: 0;
    -ms-background-position-y: 500px;
    &:active,
    &:focus {
      border: 0;
      outline: 0 none;
    }
  }
  // Range thumb mixin
  .range-thumb() {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    height: .4rem;
    width: .4rem;
    position: relative;
    background: @red;
    border-radius: .4rem;
  }
  // ======= Webkit ========
  input[type="range"]::-webkit-slider-thumb {
    .range-thumb();
  }

  input[type="range"]::-webkit-slider-thumb:before {
    position: absolute;
    top: 50%;
    right: 100%;
    width: 40rem;
    height: 0.4rem;
    margin-top: -0.02px;
    z-index: 1;
    background: @red;
    content: ' ';
  }
  // ======= FireFox ========
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: .04rem;
    background: #b7b8b7;
    border: none;
    outline: 0;
  }
  input[type="range"]::-moz-range-thumb {
    .range-thumb();
  }
  // ======= IE ========
  input[type="range"]::-ms-track {
    width: 100%;
    height: .4rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-thumb {
    .range-thumb();
  }
  input[type="range"]::-ms-fill-lower {
    background: @red;
  }
  input[type="range"]::-ms-fill-upper {
    background: #b7b8b7;
  }
}

</style>
