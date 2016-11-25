<template>
<Page>

  <tab-bar :active="tabActive" @tab-change="tabBarClick">
    <tab-bar-item>
      tab1
    </tab-bar-item>
    <tab-bar-item>
      tab2
    </tab-bar-item>
    <tab-bar-item>
      tab3
    </tab-bar-item>
  </tab-bar>
    <div v-if="tabActive === 0">
            1
    </div>
    <div v-if="tabActive === 1">
      2
    </div>
    <div v-if="tabActive === 2">
    33
    </div>
</Page>
</template>

<script>
import {Page,TabBar,TabBarItem} from 'components'
export default {
  data () {
    return {
      tabActive: 1
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    tabBarClick (index) {
      this.tabActive = index
    }
  },
  components:{
    Page,TabBar,TabBarItem
  }
}
</script>

<style lang="less">
</style>
