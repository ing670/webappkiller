<template>
  <div class="list-page">
    <div class="list">

      <div class="wraper">
        <ul class="content">
          <li v-for="item in listData" @click="alert(item)">
            {{ item }}
          </li>
        </ul>
        <div class="head">上拉刷新</div>
        <div class="bottom">加载更多</div>
      </div>

    </div>
  </div>
</template>
<style lang="scss">
  .list-page {
    .list-header {
      width: 100%;
      position: absolute;
      line-height: .90rem;
      height: .90rem;
      font-size: .32rem;
      text-align: center;
    }
    .head {
      position: absolute;
      top: 0;
      width: 100%;
      text-align: center;
      font-size: .32rem;
      z-index: 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: .32rem;
      z-index: 0;
    }
    .content {
      z-index: 1;
      position: absolute;
      background: bisque;
      width: 100%;
    }
    .wraper {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      overflow: hidden;
    }
  }
</style>
<script>

  import IScroll from './iscroll-lite.js';

  export default{
    data(){
      return {
        listData: [
          '1',
          '2',
          '3',
          '1',
          '2',
          '3', '1',
          '2',
          '3', '1',
          '2',
          '3', '1',
          '2',
          '3',
          '1',
          '2',
          '3', '1',
          '2',
          '3', '1',
          '2',
          '3'
        ]
      }
    },
    mounted(){
      var target = this.$el.querySelector(".content");
      var container = this.$el.querySelector(".wraper");
      console.log(target.scrollHeight);
      console.log(target.offsetHeight);
      var myScroll = new IScroll(container,{preventDefault:false});
      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      //给element注入transform属性
//      var at = new AlloyTouch({
//        //disablePullDown:true,
//        //disablePullUp:true,
//        touch: container,//反馈触摸的dom
//        vertical: true,//不必需，默认是true代表监听竖直方向touch
//        target: target, //运动的对象
//        property: "translateY",  //被滚动的属性
//        sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
//        factor: 1,//不必需,默认值是1代表touch区域的1px的对应target.y的1
//        min: 0, //不必需,滚动属性的最小值
//        max: 0, //不必需,滚动属性的最大值
//        step: 40,
//        touchMove:function(e){
//          //console.log(e);
//        },
//        animationEnd: function (value) {
//          //console.log(value);
//        }
//      })


//      var dragger = new DragLoader(target, {
//        dragDownRegionCls: 'latest',
//        dragUpRegionCls: 'more',
//        dragDownHelper: function(status) {
//          if (status == 'default') {
//            return '<div>向下拉加载最新</div>';
//          } else if (status == 'prepare') {
//            return '<div>释放刷新</div>';
//          } else if (status == 'load') {
//            return '<div>加载中...</div>';
//          }
//        },
//        dragUpHelper: function(status) {
//          if (status == 'default') {
//            return '<div>向上拉加载更多</div>';
//          } else if (status == 'prepare') {
//            return '<div>释放刷新</div>';
//          } else if (status == 'load') {
//            return '<div>加载中...</div>';
//          }
//        }
//      });
//      dragger.on('dragDownLoad', function() {
//        setTimeout(function() {
//          // 无论何时，必须由业务功能主动调用reset()接口，以还原状态
//          // 比如在onDragDownLoad()回调中使用ajax加载数据时，在ajax的回调函数中应当调用reset()重置drag状态
//          // 如果不重置，drag操作将失效
//          dragger.reset();
//        }, 2000);
//      });
//      dragger.on('dragUpLoad', function() {
//        setTimeout(function() {
//          dragger.reset();
//        }, 2000);
//      });

    },
    components: {}
  }
</script>
