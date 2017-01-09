<template>
    <Page>
        <HeaderBar slot="header" title="OVERLAY" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <Button color="red" text="显示 overlay" @click="toggleOverlay"></Button>
        <Button color="red" text="显示白色的 overlay" @click="toggleWhiteOverlay"></Button>
        <transition name="vc-overlay-fade">
            <overlay v-if="showWhite" style="background-color:rgba(255, 255, 255, 0.6)" @click="toggleWhiteOverlay">
            </overlay>
        </transition>
        <transition name="vc-overlay-fade">
            <overlay v-if="show" @click="toggleOverlay"></overlay>
        </transition>
    </Page>
</template>

<script>
    import {Overlay, Button, Page, HeaderBar} from 'components'
    export default {
        data () {
            return {
                show: false,
                showWhite: false
            }
        },
        methods: {
            back () {
                window.history.back()
            },
            toggleOverlay () {
                this.show = !this.show
            },
            toggleWhiteOverlay () {
                this.showWhite = !this.showWhite
            }
        },
        components: {
            Overlay, Button, Page, HeaderBar
        }
    }
</script>

<style lang="less">
    .vc-overlay-fade-enter, .vc-overlay-fade-leave-active {
        opacity: 0;
    }

    .vc-overlay-fade-enter-active, .vc-overlay-fade-leave-active {
        transition: all .5s linear;
    }
</style>
