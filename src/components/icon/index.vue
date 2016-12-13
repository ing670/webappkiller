<template>
    <span class="wk-icon" v-html="fCode" @click="$emit('click')" :style="{'font-family':fontFamily}">
    </span>
</template>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-icon {
        display: inline-block;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
<script>
    /**
     * 参数,icon名称,icon大小,icon颜色,icon事件,icon样式
     */
    export default{
        props: {
            fontFamily: {
                type: String,
                default: "material",
            },
                fontCode: {
                    type: String,
                    default: "e859"
                },
        },
        computed: {
            fCode(){
                return this.fontCode ? "&#x" + this.fontCode + ";" : "　";
            },

        },
        methods: {
            onIconClick(e){
                this.onIcon && this.onIcon(e);
            },
        }
    }
</script>
