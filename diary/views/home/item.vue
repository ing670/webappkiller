<template>
    <div class="item-wrap">
        <div class="top-wrap">
            <div class="top">
                <div class="avatar"><img src="../../static/img/head.jpg" alt=""></div>
                <div class="info">
                    <div class="name">{{payload.userName}}</div>
                    <div class="time">{{createTime}} {{source}}</div>
                </div>
            </div>
            <div class="tag"><span>{{payload.templateName}}</span><span>{{diaryType}}</span></div>
            <div class="formbody">
                <div class="row" v-for="item in content">
                    <div class="label">{{item.title}}:</div>
                    <div class="content">
                       {{item.content}}
                    </div>
                </div>
            </div>
        </div>
        <div @click="showAll" class="expand">
            <div class="expand-button">展开全文</div>
            <div class="location">{{payload.location}}</div>
        </div>
        <div class="imagewraper">
            <img  v-for='it in images':src="it.fileKey"/>
        </div>
        <div class="bottom">
            <div class="good">
                <icon-text @click="leftClick" fontFamily="icomoon"
                           fontCode="E90E" :text="payload.likeNum" position="left"></icon-text>
            </div>
            <div>
                <icon-text @click=""  fontFamily="icomoon"
                           fontCode="E90E" :text="payload.commentNum" position="left"></icon-text>
            </div>
        </div>
    </div>
</template>
<script>
    import IconText from 'components/icontext'
    import moment from 'moment'
    import * as Types from '../../store/motations-types'
    export default {
        data(){
            return {
                "id": 164,
                "templateId": 16,
                "templateName": "标题",
                "spaceId": 1,
                "spaceName": null,
                "userId": 1,
                "userName": "test",
                "longitude": "",
                "latitude": "",
                "location": "",
                "visibleRange": 1,
                "createTime": 1480147608000,
                "recordStatus": null,
                "dataStatus": null,
                "dataType": 1,
                "version": 2147483647,
                "content": "[{\"size\":0,\"description\":\"请输入\",\"id\":1479864672179,\"title\":\"文本输入框\",\"isRequired\":\"0\",\"value\":\"123123123\",\"content\":\"123123123\",\"type\":\"InputText\"}]",
                "diaryFiles": null,
                "diaryVisibleRanges": [{
                    "id": 61,
                    "diaryId": 164,
                    "userId": 121,
                    "userName": "徐荣志",
                    "memberId": 2834491,
                    "spaceId": 86114,
                    "spaceName": null,
                    "teamId": 0,
                    "teamName": null,
                    "createTime": 1479869989000,
                    "dataType": 4,
                    "avatar": null,
                    "person": true,
                    "dept": false
                }, {
                    "id": 228,
                    "diaryId": 164,
                    "userId": 0,
                    "userName": "",
                    "memberId": 0,
                    "spaceId": 1,
                    "spaceName": null,
                    "teamId": 1,
                    "teamName": null,
                    "createTime": 1480147608000,
                    "dataType": 1,
                    "avatar": null,
                    "person": false,
                    "dept": true
                }],
                "at": null,
                "source": 2,
                "isLike": 0,
                "isOwner": 1,
                "diaryType": 0,
                "avatar": "http://staticoss.upesn.com/5417/2834638/201606/11/1465622660d5744d3be7f4ff41471cca00d65da75b.jpg",
                "memberId": "1",
                "likeNum": 0,
                "commentNum": 0,
                "diaryTypeName": "日报",
                "files": [{
                    "id": 72,
                    "fileKey": "http://sddffg.png",
                    "fileExtension": ".png",
                    "fileSize": 122334,
                    "fileSizeText": "119KB",
                    "fileName": "sddffg",
                    "extensionType": 1,
                    "timeLong": null,
                    "creatorId": 1,
                    "creatorName": "test",
                    "createTime": 1479869989000,
                    "diaryId": 164
                }]
            }
        },
        computed: {
            createTime(){
                return moment(this.payload.createTime).startOf('hour').fromNow()
            },
            source(){
                let sourceString = '';
                let source = this.payload.source;
                if (source == "0" || source == "3") {
                    sourceString = '来自web端'
                } else if (source == "2") {
                    sourceString = '来自iOS端'
                } else if (source == "1") {
                    sourceString ='来自Android端 '
                } else if (source == "4") {
                    sourceString  ='来自微信端 '
                }
                return sourceString;
            },
            diaryType(){
                let diaryType = this.payload.diaryType;
                return diaryType==0?'日报':diaryType==1?'周报':diaryType==2?'月报':diaryType==3?'其他':'';
            },
            content(){
                return JSON.parse(this.payload.content);
            },
            images(){
                return this.payload.files.filter((it)=>it.fileExtension =='.jpg'||it.fileExtension =='.png'||it.fileExtension =='.gif')
            }

        },
        props: {
            payload: {}
        },
        components: {
            IconText
        },
        mounted(){
            let formbody = this.$el.querySelector('.formbody');
            //换算成标准像素
            let height = formbody.clientHeight * window.devicePixelRatio;
            if (height >= 375) {
                formbody.classList.add('show-expand');
                this.$el.querySelector('.expand').style.display = 'flex';
            }
        },
        methods: {
            showAll(){
                let formbody = this.$el.querySelector('.formbody');
                if (!formbody.classList.contains('isShowing') && formbody.classList.contains('show-expand')) {
                    formbody.classList.remove('show-expand')
                    formbody.classList.add('isShowing');
                } else {
                    formbody.classList.remove('isShowing')
                    formbody.classList.add('show-expand');
                }
            },
            leftClick(){
                this.payload.userName= '你大爷'
                this.$store.commit(Types.HOME_CHANGENAME,this.payload);
            },
            rightClick(){

            }
        }

    }

</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    @import "../../theme/style";

    .item-wrap {
        margin-top: .15rem;
        background: #fff;
        .imagewraper {
            display: flex;
            padding-left: .30rem;
            width: 5.8rem;
            flex-wrap: wrap;
            margin-bottom: .22rem;
            img {
                width: 1.8rem;
                height: 1.8rem;
                margin-right: .1rem;
                &:nth-child(n + 4) {
                    margin-top: .1rem;
                }
            }
        }
        .expand {
            display: none;
            padding-right: .3rem;
            padding-left: .3rem;
            flex-direction: column;
            justify-content: center;
            height: 1rem;
            .expand-button {
                font-size: .26rem;
                color: #0FCF84
            }
            .location {
                margin-top: .14rem;
                font-size: .24rem;
                color: #999999;
            }
        }
        .show-expand {
            display: block;
            height: 3.7rem;
            overflow: hidden;
        }
        .formbody {
            //height: 3.7rem;
            //overflow: hidden;
            .row {
                font-size: .28rem;
                word-break: break-all;
                color: #969696;
                .label {
                    display: inline-block;
                    color: #2d2d2d;
                }
                .content {
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
                top: 0;
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
                    transform: scaleX(0.5);
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
