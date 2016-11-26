/**
 * Created by liuqingling on 16/11/26.
 */
import  * as Types from './motations-types'
const home = {
    state: {
        list: [],
        leftMenu: [],
        rightMenu: []
    },
    mutations: {
        [Types.HOME_SEARCH_DIARY](state, {v}){
            state.count += v
            console.log(state.count);
        },
        [Types.HOME_CHANGENAME](state, data){
            state.list.find((it)=>it.id==data.id).userName=data.userName;
        },
        [Types.HOME_GET_ALL_DIARY](state,n){
            state.list=state.list.concat(n.list);
        }
    }
}
export default home
