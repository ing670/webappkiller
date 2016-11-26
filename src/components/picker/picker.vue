<template>
    <div class="wk-picker-content">
        <picker-slot v-for="(slot,i) in slots"
                     :divider="slot.divider"
                     :content="slot.content"
                     :text-align="slot.textAlign"
                     :width="slot.width"
                     @slot-select="change"
                     :value="values[i]"
                     :id="i"
                     :values="slot.values"
                     :visible-item-count="visibleItemCount"></picker-slot>
        <div class="wk-picker-center-highlight"></div>
    </div>
</template>

<script>
    import pickerSlot from './picker-slot'
    export default {
        props: {
            visibleItemCount: {
                type: Number,
                default: 5
            },
            values: {
                type: Array,
                default () {
                    return []
                }
            },
            slots: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        methods: {
            change (i, value) {
                this.values[i] = value;
                this.$emit('picker-change', this.values)

            }
        },
        components: {
            'picker-slot': pickerSlot
        }
    }
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-picker-content {
        background: #FFF;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
        -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
    }

    .wk-picker-center-highlight {
        height: .72rem;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        width: 100%;
        top: 50%;
        margin-top: -0.36rem;
        pointer-events: none;
        /*.hairline(top, #d3d6db);*/
        /*.hairline(bottom, #d3d6db );*/
    }

    .wk-picker-center-highlight:before {
        left: 0;
        top: 0;
        bottom: auto;
        right: auto;
    }

    .wk-picker-center-highlight:after {
        left: 0;
        bottom: 0;
        right: auto;
        top: auto;
    }
</style>
