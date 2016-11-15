/**
 * Created by Tsang on 2016-10-16.
 */
import newsList from '../api/newslist'
import * as types from './mutation-types'

export const getNewsList = ({ commit }) => {
  Vue.$http.get('https://cnodejs.org/api/v1/topics', {
    params: { testObj }
  }).then(function(response){
    response.body.data.forEach((singleItem)=>{
      commit(types.SET_DATA_LIST, { singleItem })
    })
  })
}


