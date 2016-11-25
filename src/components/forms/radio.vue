<template>
  <label @click='$emit("click", value)' class="vc-radio" :class="{'label-left': labelLeft}">
    <input type="radio" :name="name"  :value="value" :checked="chekd">
    <div class="vc-radio-label" v-if="label && labelLeft">{{label}}</div>
    <div class="vc-radio-icon"></div>
    <div class="vc-radio-label" v-if="label && !labelLeft">{{label}}</div>
  </label>
</template>

<script>
export default {
  props: {
    checked:{
      type:Boolean,
      default:false
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    chekd(){
      return this.checked?"checked":""
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-radio {
  position: relative;
  display: inline-block;;
  height: .72rem;
  line-height: .72rem;
  margin-right: .63rem;
  input[type="radio"] {
    display: none;
    &:checked{
      + .vc-radio-icon,
      + .vc-radio-label + .vc-radio-icon{
        border-color: @red;
        &:after{
          transform: scale(1);
        }
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{

    .vc-radio-label {
      margin-left: 0;
      margin-right:.16rem;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}

.vc-radio-icon {
  width: .4rem;
  height: .4rem;
  border-radius: .72rem;
  border-width: .04rem;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  position: relative;
  &:after {
    content:' ';
    display: block;
    width: .2rem;
    height: .2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.1rem;
    margin-top:  -0.1rem;
    background-color: @red;
    border-radius: 100%;
    transform: scale(0);
    transition-duration: 300ms;
  }
}

.vc-radio-label{
  color: @color;
  font-size: .32rem;
  margin-left: .16rem;
  margin-right: auto;
}

.vc-radio-label,
.vc-radio-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
