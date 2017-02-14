<template>
    <Page>

        <header-bar slot="header" title="webappkiller" right-text="" right-icon=""></header-bar>
        <cell
                class="wk-cell-padding"
                v-for="item in cellList"
                :title="item.title"
                :value="item.value"
                @onLink="$router.push(item.link)">
            <Icon slot="startIcon" size=".48rem" :iconColor="item.startIconColor" :fontCode="item.startIconCode"></Icon>
            <Icon slot="endIcon" size=".48rem" iconColor="#000" fontCode="e5c8"></Icon>
        </cell>
    </Page>
</template>
<script>

    //import { Cell,Icon,Ripple,HeaderBar,Page } from 'components';
    import HeaderBar  from 'components/header';
    import Icon  from 'components/icon';
    import Ripple  from 'components/helpers/ripple';
    import Cell  from 'components/cell';
    import Page  from 'components/page';
    export default {
        data() {
            return {
                cellList: [
                    {
                        title: '通讯录',
                        link: '/indexlist',
                    },
                    {
                        title: 'picker',
                        link: '/picker',
                    },
                    {
                        title: 'pop',
                        link: '/pop',
                    },
                    {
                        title: '遮罩',
                        link: '/overlay',
                    },
                    {
                        title: 'tab',
                        link: '/tabbar',
                    },
                    {
                        title: '底部tab',
                        link: '/bottomnav',
                    },
                    {
                        title: 'buttons',
                        link: '/buttons',
                    },

                    {
                        title: 'Icons',
                        link: '/icon',
                    },

                    {
                        title: 'Grid',
                        link: '/grid',
                    },
                    {
                        title: 'HeaderBar',
                        link: '/headerbar',
                    },
                    {
                        title: 'IconText',
                        link: '/icontext',
                    },
                    {
                        title: '无限滚动',
                        link: '/infiniteloader',
                    },
                    {
                        title: '上拉下拉',
                        link: '/pulltoloadmore',
                    },
                    {
                        title: '表单控件',
                        link: '/form',
                    },
                    {
                        title: 'Cell',
                        link: '/cell',
                    },
                    {
                        title: '轮播图',
                        link: '/carousel',
                    },
                ],
            };
        },
        components: {
            Page,
            Cell,
            Icon,
            Ripple,
            HeaderBar
        },
    };
</script>
<style lang="less" type="text/less" rel="stylesheet/less">

</style>
