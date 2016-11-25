<template>
  <Page>

    <div v-if="toolActive === 0 " >
      首页信息
    </div>
    <div v-if="toolActive === 1 " >
      人员信息
    </div>
    <div v-if="toolActive === 2 " >
      个人信息
    </div>
  <bottom-nav slot='footer':active="toolActive" @nav-change="tabClick">
    <bottom-nav-item icon="home" title="首页" ></bottom-nav-item>
    <bottom-nav-item icon="explore" title="发现"></bottom-nav-item>
    <bottom-nav-item icon="person" title="我的"></bottom-nav-item>
  </bottom-nav>
  </Page>
</template>

<script>
import {BottomNav,BottomNavItem,Page} from 'components'
export default {
  data () {
    return {
      toolActive: 0
    }
  },
  methods: {
    tabClick (index) {
      this.toolActive = index
    },
    back () {
      window.history.back()
    }
  },
  components: {BottomNav,BottomNavItem,Page}
}
</script>
