<template>
    <Page>
        <Page v-if="toolActive === 0 ">
            <HeaderBar slot="header" :title="tab1" leftFontCode="e5c4" @onLeft="back"></HeaderBar>

        </Page>
        <Page v-if="toolActive === 1 ">
            <HeaderBar slot="header" :title="tab2" leftFontCode="e5c4" @onLeft="back"></HeaderBar>

        </Page>
        <Page v-if="toolActive === 2 ">
            <HeaderBar slot="header" :title="tab3" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        </Page>
        <bottom-nav slot='footer' :active="toolActive" @nav-change="tabClick">
            <bottom-nav-item :title="tab1"></bottom-nav-item>
            <bottom-nav-item :title="tab2"></bottom-nav-item>
            <bottom-nav-item :title="tab3"></bottom-nav-item>
        </bottom-nav>
    </Page>
</template>

<script>
    import {BottomNav, BottomNavItem, Page, HeaderBar} from 'components'
    export default {
        data () {
            return {
                toolActive: 0,
                tab1: 'tab1',
                tab2: 'tab2',
                tab3: 'tab3',
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
        components: {BottomNav, BottomNavItem, Page, HeaderBar}
    }
</script>
