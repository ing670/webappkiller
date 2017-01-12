<template>
  <div class="wk-date-select">
    <div class="wk-date-select-text" @click="showSelect()" :class="{'placeholder': !value}">{{value || placeholder}}</div>
    <icon fontFamily="material" fontCode="e191" @click="showSelect()"></icon>
    <overlay v-if="show" fixed @click="hideSelect"></overlay>
    <date-picker @date-select-cancel="hideSelect" :type="type" :format="format" :limit="limit" @date-select-sure="select" v-if="show" :time="value"></date-picker>
  </div>
</template>

<script>
import datePicker from './datePicker'
import overlay from '../overlay'
import icon from '../icon'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'day'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    limit: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    hideSelect () {
      this.show = false
    },
    showSelect () {
      this.show = true
    },
    select (time) {
      this.value = time
      this.hideSelect()
      this.$emit('input-change', this.value)
    }
  },
  components: {
    icon,
    overlay,
    'date-picker': datePicker
  }
}
</script>

<style rel="stylesheet/less" type="text/less" lang="less">
  @import "../theme/variables.less";
  @import "../theme/tools.less";
.wk-date-select{
  width: 100%;
  height: 36px;
  display: flex;
  color: @color;
  align-items: center;
  .hairline(bottom, #d3d6db);
  &:after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    .translate3d();
    transition-duration: 200ms;
  }
  &.focus-state:after,
  &.not-empty-state:after,
  .focus-state &:after,
  .not-empty-state &:after {
    background: @red;
    .transform(scaleY(2)) !important;
  }
  > .icon-insert_invitation {
    .flex-shrink(0)
  }
}

.wk-date-select-text{
  flex: 1;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  &.placeholder{
    color: @body_color;
  }
}
</style>
