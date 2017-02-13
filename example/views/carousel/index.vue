<template>
    <Page>
        <HeaderBar slot="header" title="轮播图" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <!--<router-link to="/cell/abc">Go to Foo</router-link>-->
        <!--<router-view></router-view>-->

        <carousel :value="itemdata"></carousel>
    </Page>
</template>
<script>
    import {Carousel, Page, HeaderBar} from 'components';
    import Image1 from '../../static/img/111.jpg';
    import Image2 from '../../static/img/222.jpg';
    import Image3 from '../../static/img/333.jpg';
    import Image4 from '../../static/img/keji_height.jpg';
    import Image5 from '../../static/img/keji_width.jpg';


    export default {
        data(){
            return {
                itemdata: [
                    {src: Image1, title: '1'},
                    {src: Image2, title: '2'},
                    {src: Image3, title: '3'},
                    {src: Image4, title: '4'},
                    {src: Image5, title: '5'}
                ]

            }
        },
        methods:{
          back(){
              this.$router.back();
          }
        },
        components: {
            Carousel, Page, HeaderBar
        },
    };
</script>
<style lang="less">

</style>