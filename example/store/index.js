/**
 * Created by liuqingling on 16/10/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as Types from './motations-types'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
let m1 = {
  state: {
    count: 0,
    "weatherinfo": {
      "city": "未知",
      "cityid": "null",
      "temp": "0",
      "WD": "",
      "WS": "",
      "SD": "",
      "WSE": "",
      "time": "00:00",
      "isRadar": "1",
      "Radar": "JC_RADAR_AZ9010_JB",
      "njd": "暂无实况",
      "qy": "1011",
      "rain": "0"
    }

  },
  mutations: {
    [Types.ADD](state, {v}){
      state.count += v
    },
    [Types.UPDATE](state,weatherinfo){
      state.weatherinfo = weatherinfo
    }

  }
}


const store = new Vuex.Store({

  modules: {
    m1,
  },
  plugins: debug ? [createLogger()] : []
})
if (module.hot) {
  module.hot.accept([
    //'./getters',
    //'./actions',
    //'./mutations'
  ], () => {
    store.hotUpdate({
      //getters: require('./getters'),
      //actions: require('./actions'),
      //mutations: require('./mutations')
    })
  })
}
export default store
