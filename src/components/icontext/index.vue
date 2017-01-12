<template>
<span :class="c" @click="$emit('click')">
  <span v-text="text" v-if="position&&position==='right'" @click="$emit('textClick')"></span>
    <span v-text="text" v-if="position&&position==='top'" @click="$emit('textClick')"></span>
  <icon :fontFamily="fontFamily" :fontCode="fontCode" :style="{display: fontCode?'inline-block':'none'}"></icon>
  <span v-text="text" v-if="position&&position==='left'" @click="$emit('textClick')"></span>
  <span v-text="text" v-if="position&&position==='bottom'" @click="$emit('textClick')"></span>
</span>
</template>

<script>
    //参数,position,有left,right,top,bottom
    // onWhole整行点击,classNames样式类名,icon所有参数
    import Icon from '../icon'
    export default {
        components: {
            Icon
        },

        computed: {
            c(){
                return 'wk-icontext wk-icon-text-' + this.position + " " + this.classNames;
            }
        },
        props: {

            classNames: {
                default: '',
            },
            position: {
                default: 'right',
            },
            fontFamily: {
                default: "material"
            },
            fontCode: {
                type: String,
                default: "e859"
            },
            text: {
                default: 'text',
            },
        },
    };
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-icontext {
        display: block;
        text-align: center;
    }

    .wk-icon-text-top {
        span {
            display: block;
        }
    }

    .wk-icon-text-bottom {
        span {
            display: block;
        }
    }

</style>
