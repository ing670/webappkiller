/**
 * Created by liuqingling on 16/10/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import home from './home';
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({

  modules: {
      home,
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
