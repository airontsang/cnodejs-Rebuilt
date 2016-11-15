/**
 * Created by Tsang on 2016-10-16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [],
  isChangeTab: false,
  isBackList: false
}

//const mutations = {
//  [types.SET_DATA_LIST] (state, { item }) {
//    state.list.push( item )
//  }
//}
const mutations = {
  requireData (state, item) {
    state.list.push( item )
  },
  backList (state) {
    state.isBackList = true
  },
  clearStoreList (state) {
    state.list = []
  }
}

const actions = {
  requiredata: ({ commit }, playload) => {
  Vue.http.get('https://cnodejs.org/api/v1/topics', {
    params: playload
  }).then(function(response){
    response.body.data.forEach( (singleItem) =>{
      switch (singleItem.tab) {
      case 'share':
           singleItem.tab = "分享"
           break;
      case 'ask':
           singleItem.tab = "问答"
           break;
      case 'job':
           singleItem.tab = "招聘"
           break;
      case 'good':
           singleItem.tab = "精华"
           break;
    }
    var minutes = 1000 * 60
    var hours = minutes * 60
    var days = hours * 24
    const d = Date.parse(singleItem.create_at)
    const dNow = Date.parse(new Date())
    if((dNow-d)/days >= 1){
      singleItem.create_at = parseInt((dNow-d)/days)+"天"
    }else if((dNow-d)/hours >= 1){
      singleItem.create_at = parseInt((dNow-d)/hours)+"小时"
    }else if((dNow-d)/minutes >= 1){
      singleItem.create_at = parseInt((dNow-d)/minutes)+"分钟"
    }
      commit('requireData', singleItem)
  })
  })
},
  backlist: ({ commit }) => {
  commit('backList')
},
  clearstorelist: ({ commit }) => {
  commit('clearStoreList')
}
}

const getters = {
  list: state => state.list
}
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
})

