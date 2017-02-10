<template>
    <div ref='wkpickerwrap' class="wk-picker-wrapper">
        <slot>
        <PickerItem :itemHeight="itemHeight" :itemCount="itemCount"></PickerItem>
        </slot>
        <div class="wk-picker-center-highlight" :style="{'height':itemHeight+'px'}"></div>
    </div>
</template>
<style rel='stylesheet/less' lang="less">
.wk-picker-wrapper{
    display: flex;
    .wk-picker-center-highlight {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        width: 100%;
        align-self: center;
        pointer-events: none;
        &:before {
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
            display: block;
            z-index: 15;
            left: 0;
            top: 0;
            right: auto;
        }
        &:after {
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
            display: block;
            z-index: 15;
            left: 0;
            bottom: 0;
            right: auto;
            top: auto;
        }

    }
}
</style>
<script>
    import  PickerItem from './pickerItem.vue'
    export default{
        methods: {},

        props: {
            itemHeight: {
                type: Number,
                default: 30
            },
            itemCount: {
                type: Number,
                default: 3
            },
        },
        mounted(){
        },
        components: {
            PickerItem
        }
    }

</script>
