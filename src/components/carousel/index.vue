<template>
    <div class="wk-carousel-main js-qlc-cell" ref="main">
        <div id="wk-carousel" class="wk-transition" ref="carousel">
            <div  v-for="it in value">
                <img :src="it.src"/>
            </div>
        </div>
        <div class="wk-carousel-points" ref="points">
            <div v-for="it in value">
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        props: {
            title: {
                default: '',
            },
            value: {
                default: [],
            },
            rippleColor:{
                default: 'black',
            },
            mainWidth:{
                default: 220,
            }
        },
        methods:{
            addActive(index){
                let pointsNum = this.$refs.points.children.length;
                for(let i = 0;i < pointsNum;i++){
                    this.$refs.points.children[i].setAttribute('class','');
                }
                this.$refs.points.children[index-1].setAttribute('class','point-active');
            },
            auto_play(){
                this.timer = setInterval(()=>{
                    if(!this.isTouch){
                        this.distance -= this.mainWidth; //这里的220需要灵活配置

                        if(this.distance <= this.maxWidth*(-1)){
                            this.distance = 0;
                        }
                        this.$refs.carousel.style.webkitTransform = 'translate3d(' + this.distance + 'px,0,0)';
                        this.currentIndex = parseInt((this.distance*(-1)+this.mainWidth)/this.mainWidth);
                        this.addActive(this.currentIndex);
                    }
                },2000);
            }
        },
        mounted(){
//            console.log(this.mainWidth);
            this.startX = 0;
            this.distance = 0;    //用来记录上一次偏移量
            let halfWidth = this.mainWidth/2; //一张图片的一半宽度,用来界定是否划到下一张图
            let moveX=0;
            this.isTouch = false;    //是否正处于触摸状态
            let num = this.value.length; //图片个数
            this.maxWidth =  num * this.mainWidth; //暂时220一张图
            this.currentIndex = 1; //当前显示第几张图
            this.addActive(this.currentIndex);
            this.auto_play();
//            console.log(this.value);
//            console.log(this.$refs);
//            setInterval(()=>{
//                if(!this.isTouch){
//                    this.distance -= this.mainWidth; //这里的220需要灵活配置
//
//                    if(this.distance <= maxWidth*(-1)){
//                        this.distance = 0;
//                    }
//                    this.$refs.carousel.style.webkitTransform = 'translate3d(' + this.distance + 'px,0,0)';
//                    index = parseInt((this.distance*(-1)+this.mainWidth)/this.mainWidth);
//                    this.addActive(index);
//                }
//            },2000);
            this.$refs.carousel.addEventListener('touchstart', (e)=>{
                this.isTouch = true;
                clearInterval(this.timer);
                this.startX = e.touches[0].clientX;
                this.$refs.carousel.classList.remove('wk-transition');
            }, false);

            this.$refs.carousel.addEventListener('touchmove', (e)=> {
                this.isTouch = true;
                moveX = (e.touches[0].clientX - this.startX)+this.distance;
                if(moveX>=0){
                    moveX = 0;
                }
                else if(moveX*(-1)+this.mainWidth >= this.maxWidth){
                    moveX = (this.maxWidth-this.mainWidth)*(-1);
                }
                this.$refs.carousel.style.webkitTransform = 'translate3d(' + moveX + 'px,0,0)';
            }, false);
            this.$refs.carousel.addEventListener('touchend', (e)=> {
                this.$refs.carousel.setAttribute('class','wk-transition');
                this.distance=moveX;
                let index = parseInt(Math.abs(this.distance) / this.mainWidth);
                let offset = this.distance % this.mainWidth;
                if(Math.abs(offset)>halfWidth){
                    if(offset>0){
                        index--;
                    }else{
                        index++;
                    }
                }
                let afterOffset = this.mainWidth * index * (-1);
//                console.log(index);
//                console.log(afterOffset);
                this.$refs.carousel.style.webkitTransform = 'translate3d(' + afterOffset + 'px,0,0)';
                this.distance = afterOffset;
                this.currentIndex = parseInt((this.distance*(-1)+this.mainWidth)/this.mainWidth);
                this.addActive(this.currentIndex);
                this.auto_play();
                this.isTouch = false;
                //this.distance += e.touches[0].clientX - this.startX;
               // this.$refs.carousel.style.webkitTransform = 'translate3d(' + this.distance + 'px,0,0)';
                //this.startX=0;
            }, false);

        }
    };
</script>
<style rel="stylesheet/less" type="text/less" >
.wk-carousel-main{
    display: flex;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    width: 220px;
    height: 220px;
}
#wk-carousel{
    display: flex;
    position: relative;
}
.wk-transition{
    transition: all 0.3s;
}
.wk-carousel-points{
    position: absolute;
    text-align: center;
    width: inherit;
    bottom: 10px;
}
.wk-carousel-points div{
    width: .1rem;
    height: .1rem;
    margin-left: .05rem;
    margin-right: .05rem;
    display: inline-block;
    opacity: 0.3;
    border-radius: 100%;
    background-color: white;
}
.point-active{
    opacity: 0.8 !important;
}

</style>
