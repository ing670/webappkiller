<template>
    <Page>
        <HeaderBar slot="header" title="轮播图" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <!--<router-link to="/cell/abc">Go to Foo</router-link>-->
        <!--<router-view></router-view>-->
        <div class="carousel-example-item" style="width: 330px;margin:0 auto">
            <p>轮播图---自动轮播</p>
            <carousel :value="itemdata" :auto_play="true"></carousel>
        </div>

        <div class="carousel-example-item">
            <p>轮播图---禁止自动轮播</p>
            <carousel :value="itemdata" :auto_play="false"></carousel>
        </div>

        <div class="carousel-example-item">
            <p>轮播图---手动设置轮播区域大小(100x100),轮播时间(毫秒)</p>
            <carousel :value="itemdata" :auto_play="true" :auto_time="1000" :w="100" :h="100"></carousel>
        </div>
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
.carousel-example-item{
    margin-bottom: 1rem;
    position: relative;
}
.carousel-example-item p{
    padding: 0.2rem;
}
</style>