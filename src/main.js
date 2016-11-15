import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import IndexPage from './components/IndexPage.vue'
import Foo from './components/Foo.vue'
import List from './components/List.vue'
import Article from './components/Article.vue'
/* eslint-disable no-new */

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
const routes = [
  { path: '/', component: IndexPage,
    children: [
      { path:'', redirect: '/list/all' },
      { path:'/list/:tab', name:'tab', component: List },
      { path:'/article/:id', name:'article', component: Article }
    ]
  }
]

Vue.directive('focus',{
  twoWay: true,
  inserted: function (el) {
    el.focus()
    console.log(el.offsetTop)
  },
  bind: function () {
    console.log("getop bound!")
  },
  updata: function (value) {
    console.log('offsetTop'+this.el.offsetTop);
  }
})
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

//new Vue(
//  store,
//  Vue.util.extend({ router }, App)
//).$mount('#app')
new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})
