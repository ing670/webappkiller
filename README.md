
## 技术栈
- vuex,vue2,vue-router,axios,webpack2,LESS,布局全用Flex布局,REM适配
如何使用
```
git clone https://github.com/ing670/webappkiller.git
```
```
cd webappkiller
```
```
npm install
```
```
npm run dev
```
文件介绍
- 基础组件都是放在了src下面
- 启动命令：npm run dev
- 打包命令：npm run build
=====
组件的设计思想
- 样式命名 "wk-"开头为基础组件，开发者可以在每个组件的class添加自己的class去控制组件的样式
- 组件只提供功能性的参数，比如icontext 带文字的icon，提供font-family，fontCode,text内容，text与icon的相对位置。
至于icon的大小，text的大小，颜色，统一使用css来去控制
- 事件暴露使用$emit('事件名称')
- 如果需要绑定到真实dom上，请使用$事件名称.native，比如@click.native
======




