<template>
  <div>
    <InfiniteLoader :onLoading="loadMore">
      <div>
        <div v-for="i in items">{{i}}</div>
      </div>
    </InfiniteLoader>
  </div>
</template>
<style lang="scss">
  .page {
    overflow-y: hidden;
  }
</style>
<script>
  import {InfiniteLoader} from 'components'
  export default{
    data(){
      return {
        test: "fux",
        loading: false,
        items: [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3]
      }
    },
    watch: {
      loading(n, o){
        console.log('new value===>' + n)
      },
      test(n, o){
        console.log('new value===>' + n)
      }
    },
    methods: {
      loadMore (loader) {
        setTimeout(function () {
          loader.loading = false;
        if (this.end < 100) {
          for (let i = this.end; i < this.end + 20; i++) {
            this.items.push(i + 1)
          }
        }
        this.end += 20
      },
        2000
      )
      }
    },
    components: {
      InfiniteLoader
    }
  }


</script>
