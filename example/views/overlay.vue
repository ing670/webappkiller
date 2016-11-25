<template>
<div class="vc-page">
      <Button color="red" text="显示 overlay" @click="toggleOverlay"></Button>
      <Button color="red" text="显示白色的 overlay" @click="toggleWhiteOverlay"></Button>
    <overlay v-if="showWhite" :opacity="0.8" color="#FFF"  @click.native="toggleWhiteOverlay">asdasd</overlay>
  <overlay v-if="show" @click.native="toggleOverlay"></overlay>
</div>
</template>

<script>
import {Overlay,Button} from 'components'
export default {
  data () {
    return {
      show: false,
      showWhite: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    toggleOverlay () {
      this.show = !this.show
    },
    toggleWhiteOverlay () {
      this.showWhite = !this.showWhite
    }
  },
  components:{
    Overlay,Button
  }
}
</script>

<style lang="css">
</style>
