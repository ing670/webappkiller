/**
 * Created by liuqingling on 16/11/26.
 */
import  * as Types from './motations-types'
import myaxio from '../utils/service';
const home = {
    state: {
        list: [],
        leftMenu: [{
            title: '所有的',
            type: 0
        }, {
            title: '我提交的',
            type: -1
        }],
        rightMenu: [{
            title: '全部日志',
            id: 0
        }]
    },
    mutations: {
        [Types.HOME_SEARCH_DIARY](state, {v}){
            state.count += v
            console.log(state.count);
        },
        [Types.HOME_CHANGENAME](state, data){
            state.list.find((it) => it.id == data.id).userName = data.userName;
        },
        [Types.HOME_GET_ALL_DIARY](state, n){
            state.list = state.list.concat(n.list);
        },
        [Types.HOME_GOOD](state, n){
            let it = state.list.find((it) => it.id == n.id);
            it.likeNum = n.likeTotal;
            it.isLike==0?it.isLike=1:it.isLike=0;
        },
        [Types.HOME_UPDATE_TEMPLATES](state, n){
            state.rightMenu = state.rightMenu.concat(n.list);
        },

    },
    actions:{
        leftClick(ctx,{id}){
            myaxio.post('/diaryLike/'+id).then((successResponse)=>{
                successResponse.id=id;
                console.log(successResponse);
                ctx.commit(Types.HOME_GOOD,successResponse);
            })
        },
        getTemplates(ctx){
            myaxio.get('/template/list?client=app').then((successResponse)=>{
                console.log(successResponse)
                ctx.commit(Types.HOME_UPDATE_TEMPLATES,successResponse);
            })
        },
        queryDiary(ctx,{pageNum,pageSize,range,templateId}){
            myaxio.get("/diaryQuery/getAllDiary?pageNum="+pageNum+"&pageSize="+pageSize+"&range="+range+"&templateId="+templateId+"").then((successResponse)=>{
                ctx.commit(Types.HOME_GET_ALL_DIARY,successResponse);
            });
        }
    }
}
export default home
