<template>
    <div class="wk-carousel-main js-qlc-cell" ref="main" :style="{width:mainWidth+'px',height:mainHeight+'px'}">
        <div id="wk-carousel" class="wk-transition" ref="carousel">
            <div  v-for="it in value" :style="{width:mainWidth+'px',height:mainHeight+'px'}">
                <img :src="it.src" @load="setImgStyle"/>
            </div>
        </div>
        <div class="wk-carousel-points" ref="points">
            <div v-for="it in value">
            </div>
        </div>
        <div id="wk-carousel-left-shadow" ref="leftShadow"></div>
        <div id="wk-carousel-right-shadow" ref="rightShadow"></div>
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
            },
            mainHeight:{
                default: 220,
            }
        },
        methods:{
            setImgStyle(e){
                if(e.currentTarget.clientHeight>e.currentTarget.clientWidth){
                    e.currentTarget.style.width = "100%";
                }else{
                    e.currentTarget.style.height = "100%";
                }
            },
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
            console.log(this.$refs);
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
                this.$refs.leftShadow.classList.remove('wk-transition');
                this.$refs.rightShadow.classList.remove('wk-transition');
            }, false);

            this.$refs.carousel.addEventListener('touchmove', (e)=> {
                this.isTouch = true;
                moveX = (e.touches[0].clientX - this.startX)+this.distance;
                if(moveX>=0){
                    //到达最左
                    if(parseInt(moveX)>halfWidth){

                    }else{
                        let grade = parseInt(moveX) / halfWidth;   //拉伸率,最大边界为宽的一半
                        this.$refs.leftShadow.style.width = 20*grade + "px";
                        this.$refs.leftShadow.style.opacity = 0.5*grade;
                    }
                    moveX = 0;
                }
                else if(moveX*(-1)+this.mainWidth >= this.maxWidth){
                    //到达最右
                    let over = moveX*(-1)+this.mainWidth - this.maxWidth;
                    if(over>halfWidth){

                    }else{
                        let grade = over / halfWidth;   //拉伸率,最大边界为宽的一半
                        this.$refs.rightShadow.style.width = 20*grade + "px";
                        this.$refs.rightShadow.style.opacity = 0.5*grade;
                    }
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
                this.$refs.leftShadow.setAttribute('class','wk-transition');
                this.$refs.rightShadow.setAttribute('class','wk-transition');
                this.$refs.leftShadow.style.width = "0px";
                this.$refs.rightShadow.style.width = "0px";
                //this.distance += e.touches[0].clientX - this.startX;
               // this.$refs.carousel.style.webkitTransform = 'translate3d(' + this.distance + 'px,0,0)';
                //this.startX=0;
            }, false);

        },
        destroyed(){
            clearInterval(this.timer);
        }
    };
</script>
<style rel="stylesheet/less" type="text/less" >
.wk-carousel-main{
    display: flex;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
}
#wk-carousel{
    display: flex;
    position: relative;
}
#wk-carousel div{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
#wk-carousel div img{
    display: block;
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
    width: 10px;
    height: 10px;
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    opacity: 0.3;
    border-radius: 100%;
    background-color: white;
}
.point-active{
    opacity: 0.8 !important;
}
#wk-carousel-left-shadow{
    height: 100%;
    width: 0px;
    position: absolute;
    left: 0;
    background-color: black;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    opacity: 0.7;
}
#wk-carousel-right-shadow{
    height: 100%;
    width: 0px;
    position: absolute;
    right: 0;
    background-color: black;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    opacity: 0.7;
}
</style>
