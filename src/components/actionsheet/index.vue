<template>

    <overlay v-show='show' @click.native="overlayClick">
      <div  class="vc-action-sheet" >
        <div class="vc-action-sheet-group">
          <a href="javascript:;" @click="actionClick(action)"   :class="['color-' + action.color, action.isLabel ? 'vc-action-sheet-label' : 'vc-action-sheet-button']" v-for="action in actions">
            {{action.name}}
          </a>
        </div>
        <div class="vc-action-sheet-group" v-if="showCancel">
          <a class="vc-action-sheet-button" href="javascript:;" @click="cancel" >
            {{cancelText}}
          </a>
        </div>
      </div>
    </overlay>

</template>

<script>
import overlay from "../overlay"
export default {
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancel: {
      type: Boolean,
      default: true
    },

  },
  components:{
  overlay
  },
  data(){
    return {
        show: false
    }
  },
  methods: {
    cancel () {
      this.show = false
    },
    overlayClick () {
       this.show = !this.show
    },
    actionClick (action) {
      if (!action.isLabel && action.click) {
        action.click()
      }
      this.show = false
    }
  },
}
</script>

<style lang="less" rel="stylesheet/less" type="less" >
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-action-sheet{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
  max-height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.vc-action-sheet-group {
  position: relative;
  .hairline(bottom, @border-color);
  &:last-child {
    .hairline-remove(bottom);
  }
}
.vc-action-sheet-button,
.vc-action-sheet-label {
  width: 100%;
  font-weight: normal;
  margin: 0;
  display: flex;
  position: relative;
  padding: 0 .32rem;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.vc-action-sheet-label {
  font-size: .28rem;
  line-height: 1;
  min-height: 1.14rem;
  padding-top: .24rem;
  padding-bottom: .24rem;
  color: @body_color;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .hairline(top, @border-color);
  &:first-child{
    .hairline-remove(top);
  }
}

.vc-action-sheet-button{
  cursor: pointer;
  height: .96rem;
  line-height: .96rem;
  font-size: .32rem;
  color: @color;
  .active-highlight(@tap-color);
  .vc-ripple-ink {
    color: @tap-color;
  }
  &.color-red{
    color: @red;
  }
  &.color-green{
    color: @green;
  }
  &.color-amber{
    color: @amber;
  }
  &.color-blue{
    color: @blue;
  }
}

.actionsheet-enter-active, .actionsheet-leave-active {
  transition: opacity .1s;
  transform: translate3d(0, 100%, 0);
}
.actionsheet-enter, .actionsheet-leave-active {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
