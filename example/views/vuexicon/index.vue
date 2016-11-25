<template>
  <div class="icon-container">
    <icon @click="aaa" fontFamily="material" fontCode="e84d" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="eb3b" :size="size" iconColor="blue" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e855" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e191" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e8b5" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e84e" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e914" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e84f" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e850" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e851" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e853" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e145" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e60e" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e439" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e003" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e856" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e146" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e147" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e3ba" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e567" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e854" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e03c" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e05c" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e39e" :size="size" iconColor="red" >
  </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e630" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e631" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e632" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e633" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e634" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e635" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e636" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e637" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e539" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e194" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e055" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="eb3c" :size="size" iconColor="red" >
    </icon>
    <icon @click="aaa" fontFamily="material" fontCode="e857" :size="size" iconColor="red" >
    </icon>

  </div>
</template>
<style lang="scss">
  .icon-container {
    padding-left: .30rem;
    padding-right: .30rem;

  }

  .my {
    position: absolute;
  }

  .icon {
    font-size: .48rem;
    color: red;
  }
</style>
<script>
  /**
   * 参数,icon名称,icon大小,icon颜色,icon事件
   */
  import { Icon } from 'components';
  export default{
    data(){
      return {
        aaa: function () {
          alert('aaa');
        },
        size: ".64rem",
        iconColor: "blue"
      }

    },
    methods: {
      onIconClick(e){
        alert('fuck');
      },
    },
    components: {
      Icon
    }
  }
</script>
