<template>
  <div class="item-wrap">
    <div class="top-wrap">
      <div class="top">
        <div class="avatar"><img src="../../static/img/head.jpg" alt=""></div>
        <div class="info">
          <div class="name">郑彩云</div>
          <div class="time">2016-11-14 10:38 来自web端</div>
        </div>
      </div>
      <div class="tag"><span>研发中心</span><span>周报</span></div>
      <div class="formbody">
        <div class="row">
          <div class="label">本周工作：</div>
          <div class="content">
         1. 内容内容内容内容内容内容内容<br/>
         2. 内容内容内容内容内容内容内容内容<br/>
         3. 内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
          </div>
        </div>
        <div class="row">
          <div class="label">本周工作：</div>
          <div class="content">
            1. 内容内容内容内容内容内容内容<br/>
            2. 内容内容内容内容内容内容内容内容<br/>
            3. 内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
          </div>
        </div>
      </div>
    </div>
    <div  @click="showAll" class="expand">
      <div class="expand-button">展开全文</div>
      <div class="location">北京丽兹查尔顿酒店上地店</div>
    </div>
    <div class="imagewraper">
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
      <img src="../../static/img/head.jpg" />
    </div>
    <div class="bottom">
      <div class="good">
        <icon-text @wholeClick="alert('a')" textColor="#969696" fontFamily="icomoon" iconSize=".26rem" iconColor="#ddd"
                   iconFontCode="E90E" text="12" position="left"></icon-text>
      </div>
      <div>
        <icon-text @wholeClick="alert('b')" textColor="#969696" fontFamily="icomoon" iconSize=".26rem" iconColor="#ddd"
                   iconFontCode="E90E" text="200" position="left"></icon-text>
      </div>
    </div>
  </div>
</template>
<script>
  import IconText from 'components/icontext'
  export default {

    components:{
      IconText
    },
    mounted(){
      let formbody=this.$el.querySelector('.formbody');
      //换算成标准像素
      let height=formbody.clientHeight * window.devicePixelRatio;
      if(height>=375){
        formbody.classList.add('show-expand');
        this.$el.querySelector('.expand').style.display='flex';
      }
    },
    methods:{
      showAll(){
        let formbody=this.$el.querySelector('.formbody');
        if(!formbody.classList.contains('isShowing')&&formbody.classList.contains('show-expand')){
          formbody.classList.remove('show-expand')
          formbody.classList.add('isShowing');
        }else{
          formbody.classList.remove('isShowing')
          formbody.classList.add('show-expand');
        }
      }
    }

  }

</script>
<style lang="less">
  @import "../../theme/style";

  .item-wrap {
    margin-top: .15rem;
    background: #fff;
    .imagewraper{
      display: flex;
      padding-left:.30rem;
      width: 5.8rem;
      flex-wrap: wrap;
      margin-bottom: .22rem;
      img{
        width: 1.8rem;
        height: 1.8rem;
        margin-right: .1rem;
        &:nth-child(n + 4){
          margin-top: .1rem;
        }
      }
    }
    .expand{
      display: none;
      padding-right: .3rem;
      padding-left: .3rem;
      flex-direction: column;
      justify-content: center;
      height: 1rem;
      .expand-button{
        font-size: .26rem;
        color:#0FCF84
      }
      .location{
        margin-top: .14rem;
        font-size: .24rem;
        color:#999999;
      }
    }
    .show-expand{
      display: block;
      height: 3.7rem;
      overflow: hidden;
    }
    .formbody{
      //height: 3.7rem;
      //overflow: hidden;
      .row{
        font-size: .28rem;
        word-break:break-all;
        color: #969696;
        .label{
          display: inline-block;
          color: #2d2d2d;
        }
        .content{
          line-height: .42rem;
          margin-top: .1rem;
          display: inline-block;
        }
      }
    }
    .top-wrap {
      padding: .30rem;
      padding-bottom: 0;
      .avatar, .avatar img {
        height: .8rem;
        width: .8rem;
        border-radius: 100%;
      }

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;

        .info {
          display: flex;
          flex-direction: column;
          margin-left: .22rem;

          .name {
            font-size: .32rem;
          }

          .time {
            margin-top: .16rem;
            font-size: .22rem;
            color: #AAAAAA;
          }

        }
      }
      .tag {
        //height: .92rem;
        //line-height: .92rem;
        padding-bottom: .2rem;
        span {
          margin-top: .2rem;
          display: inline-block;
          background: #12D290;
          color: #fff;
          border-radius: .04rem;
          font-size: .24rem;
          margin-right: .13rem;
          padding: .1rem;
        }

      }
    }

    .bottom {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        top:0;
        left: 0;
        height: 1px;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        box-sizing: border-box;
        background: #eee;
      }
      display: flex;
      height: .7rem;
      align-items: center;
      .good {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 1px;
          height: 100%;
          bottom: 0;
          right: 0;
          transform:scaleX(0.5);
          background: #eee;
        }
      }
      div {
        flex: 1;
        text-align: center;
      }
    }
  }

</style>
