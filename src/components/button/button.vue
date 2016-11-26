<template>
    <ripple>
        <a href="javascript:;" @click="$emit('click')" class="js-wk-button wk-button" ref="button">
            <slot>
                <span class="wk-button-text" :style="{'color':textColor}" v-if="text">{{text}}</span>
            </slot>
        </a>
    </ripple>
</template>

<script>
    import ripple from '../helpers/ripple.vue'
    export default {
        el: '.js-wk-button',
        methods: {},
        props: {
            icon: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            fill: {
                type: Boolean,
                default: false
            },
            raised: {
                type: Boolean,
                default: false
            },
            big: {
                type: Boolean,
                default: false
            },
            textColor: {
                type: String,
                default: 'black'
            },
            bgColor: {
                type: String,
                default: ''
            },
            rippleColor: {
                type: String,
                default: 'black'
            }
        },

        components: {
            ripple
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="less">

    .wk-button {
        color: #fff;
        border-radius: .04rem;
        height: .72rem;
        line-height: .72rem;
        appearance: none;
        background: none;
        text-decoration: none;
        text-align: center;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-transform: uppercase;
        min-width: .128rem;
        padding: 0 .16rem;
        position: relative;
        overflow: hidden;
        outline: 0;
        border: none;
        transition-duration: 300ms;
        transform: translate3d(0, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        &:active {
            background: rgba(0, 0, 0, .1);
        }
        i.icon + span,
        i.icon + i.icon {
            margin-left: .16rem;
        }

        .icon,
        .wk-button-text {
            pointer-events: none;
        }

        .icon {
            flex-shrink: 0;
        }

        .wk-button-text {
            flex-shrink: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-wrap: break-word;
        }
    }

</style>
