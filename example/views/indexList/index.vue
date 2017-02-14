<template>
    <indexListWrapper>

    </indexListWrapper>
</template>
<style rel='stylesheet/less' lang="less">

</style>
<script>
    import  indexListWrapper from './indexListWrapper.vue'
//    import  indexListItem from './indexListItem.vue'

    export default{
        methods: {

        },

        data(){
            return{
                itemHeight: 30,
                itemCount: 3,
                values:[2001,2002,2003,2004,2005,2006,2007]
            }

        },
        mounted(){
        },
        components: {
            indexListWrapper
        }
    }

</script>
