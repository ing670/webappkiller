<template>
  <Page>

      <Button text="点击弹出 Action Sheet" @click.native="showActionSheet()" ></Button>
      <Button text="不带 cancel 按钮的" @click.native="showActionSheet(true)" ></Button>
  <Button text="不带 cancel 按钮的" @click.native="showActionSheet(true)" ></Button>

  <action-sheet ref="as" :actions="actionSheet.actions"  :show-cancel="actionSheet.showCancel"></action-sheet>
  <modal ref="md" :show="modal.show" :title="modal.title" :msg="modal.msg"></modal>
  </Page>
</template>

<script>
import {ActionSheet,Modal,Button,Overlay,Page} from 'components'
export default {
  data () {
    return {
      actionSheet: {
        show: false,
        showCancel: true,
        actions: [{
          isLabel: true,
          name: '选择一个你喜欢的'
        }, {
          name: '守望先锋',
          click: () => {
            this.showMsg('守望先锋')
          }
        }, {
          name: '炉石传说',
          click: () => {
            this.showMsg('炉石传说')
          }
        }, {
          name: '英雄联盟',
          color: 'red',
          click: () => {
            this.showMsg('英雄联盟')
          }
        }, {
          name: '剑灵',
          click: () => {
            this.showMsg('剑灵')
          }
        }]
      },
      modal: {
        show: false,
        msg: '',
        title: '你选择的是'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showMsg (msg) {
      this.modal.msg = msg
      this.modal.show = true
    },
    showActionSheet (flag) {
      console.log(this.$refs.as.show)
      this.$refs.as.show = true
      this.$refs.as.showCancel = !flag
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  },
  components:{
    ActionSheet,Modal,Button,Overlay,Page
  }
}
</script>

<style lang="css">
.center-block{
  display: flex;
  align-items: center;
}
</style>
