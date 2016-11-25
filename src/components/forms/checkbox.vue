<template>
  <label @click='$emit("click", value)' class="vc-checkbox" :class="{'label-left': labelLeft}">
    <input type="checkbox" :name="name" :value="value" :checked="chekd">
    <div class="vc-checkbox-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="vc-checkbox-icon"></div>
    <div class="vc-checkbox-label"  v-if="label && !labelLeft">{{label}}</div>
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
    model: {
      type: Array,
      required: true,
      default () {
        return []
      }
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
.vc-checkbox {
  position: relative;
  display: inline-block;
  height: .72rem;
  line-height: .72rem;
  margin-right: .64rem;
  input[type="checkbox"] {
    display: none;
    &:checked {
      + .vc-checkbox-icon,
      + .vc-checkbox-label + .vc-checkbox-icon{
        border-color: @red;
        background-color: @red;
        &:after{
          opacity: 1;
        }
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{
    .vc-checkbox-label {
      margin-left: 0;
      margin-right: .16rem;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}

.vc-checkbox-icon {
  position: relative;
  width: .36rem;
  height: .36rem;
  border-radius: .04rem;
  border-width: .04rem;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  &:after {
    left: 50%;
    top: 50%;
    margin-left: -0.06rem;
    margin-top: -0.14rem;
    width: .12rem;
    height: .26rem;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity .3s ease;
    transition-delay: .1s;
    border-right: .04rem solid #fff;
    border-bottom: .04rem solid #fff;
    box-sizing: border-box;
    position: absolute;
    display: block;
    content: "";
  }
}

.vc-checkbox-label{
  color: @color;
  font-size: .32rem;
  margin-left:.16rem;
  margin-right: auto;
}

.vc-checkbox-icon,
.vc-checkbox-label {
  display: inline-block;
  vertical-align: middle;
}
</style>
