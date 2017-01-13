<template>
    <div class="wk-select" ref="select">
      <div class="wk-select-text" @click="toggleSelect()" :class="{'placeholder': !selectText}">{{selectText || placeholder}}</div>
      <Icon fontCode="e5c5" @click="toggleSelect"></Icon>
      <div class="wk-select-drop-down" :class="{'up': up}" v-show="focus">
        <ul class="wk-select-options">
          <li  v-for="(option,index) in options">
            <a  href="javascript:;"  @click="select(option)"
              class="js-option wk-select-option" :class="{'selected': isSelect(option)}">
              <div class="wk-select-option-content">
                {{option.text || option}}
              </div>
              <Icon fontCode="E5CA"></Icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Icon from '../icon/'
import Cell from '../cell/'
export default {

  props: {
    focus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    multi: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Object, Number, String]
    },
    options: {
      type: Array,
      default () {
        return [
        ]
      }
    },
    mounted(){
    }
  },
  data () {
    return {
      up: false
    }
  },
  computed: {
    selectText () {
      let text = []
      this.options.forEach((item) => {
        if (this.isSelect(item)) {
          text.push(item.text || item)
        }
      })
      return text.join(',')
    }
  },
  beforeDestroy () {
    this.removeListener()
  },
  methods: {
    isSelect (val) {
      return this.multi ? this.value && this.value.indexOf(val) !== -1 : this.value === val
    },
    toggleSelect () {
      this.focus = !this.focus
    },
    select (val) {
      if (this.multi) {
        if (!this.value) this.value = []
        const i = this.value.indexOf(val)
        if (i !== -1) {
          this.value.splice(i, 1)
        } else {
          this.value.push(val)
        }
      } else {
        this.value = val
        this.hideSelect()
      }
      this.$emit('input-change', this.value)
    },
    hideSelect () {
      this.focus = false
    },
    addListener () {
      this.windowListener = (e) => {
        if (!this.$els.select.contains(e.target)) {
          this.hideSelect()
        }
      }
      window.addEventListener('click', this.windowListener, false)
    },
    removeListener () {
      if (this.windowListener) {
        window.removeEventListener('click', this.windowListener, false)
        this.windowListener = null
      }
    }
  },

  components: {
    Icon,
    Cell,
  }
}
</script>

<style rel="stylesheet/less" type="text/less" lang="less">
@import "../theme/variables.less";
@import "../theme/tools.less";
.wk-select{
  background: #fff;
  width: 100%;
  height: .72rem;
  display: flex;
  position: relative;
  color: @color;
  align-items: center;
  &.focus-state:after,
  &.not-empty-state:after,
  .focus-state &:after,
  .not-empty-state &:after {
    background: @red;
    .transform(scaleY(2)) !important;
  }
  > .icon-arrow_drop_down {
    .flex-shrink(0)
  }
}

.wk-select-text{
  flex: 1;
  font-size: .32rem;
  height: .72rem;
  line-height: .72rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  &.placeholder{
    color: @body_color;
  }
}

.wk-select-drop-down{
  position: absolute;
  width: 100%;
  top: .72rem;
  left: 0;
  .depth(2);
  z-index: 20;
  background-color: #FFF;
  &.up{
    top: auto;
    bottom: .72rem;
  }
}
.wk-select-options{
  margin: 0;
  list-style: none;
  padding: 0;
  max-height: 4.32rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  li{
    position: relative;
  }
}
.wk-select-option{
  display: flex;
  align-items: center;
  font-size: .32rem;
  padding: .12rem .24rem;
  min-height: .72rem;
  color: @color;
  position: relative;
  .wk-ripple-ink{
    color: rgba(0, 0, 0, .1);
  }
  &.selected{
    color: @red;
    > .icon{
      display: inline-block;
      vertical-align: middle;
    }
  }
  > .icon {
    display: none;
  }
}

.wk-select-option-content{
  flex: 1;
}
</style>
