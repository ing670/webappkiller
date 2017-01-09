<template>
    <Page>
        <HeaderBar slot="header" title="TAB" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <Page>
            <tab-bar slot="header" :active="tabActive" @tab-change="tabBarClick">
                <tab-bar-item>
                    tab1
                </tab-bar-item>
                <tab-bar-item>
                    tab2
                </tab-bar-item>
                <tab-bar-item>
                    tab3
                </tab-bar-item>
            </tab-bar>
            <TabBarContent>
                <Page v-if="tabActive === 0">
                    1
                </Page>
                <Page v-if="tabActive === 1">
                    2
                </Page>
                <Page v-if="tabActive === 2">
                    3
                </Page>
            </TabBarContent>
        </Page>
    </Page>
</template>

<script>
    import {Page, TabBar, TabBarItem, TabBarContent, HeaderBar} from 'components'
    export default {
        data () {
            return {
                tabActive: 1
            }
        },
        methods: {
            back () {
                window.history.back()
            },
            tabBarClick (index) {
                this.tabActive = index
            }
        },
        components: {
            Page, TabBar, TabBarItem, HeaderBar, TabBarContent
        }
    }
</script>

<style lang="less">
    .wk-tab-content {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
