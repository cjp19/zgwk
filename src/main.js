import Vue from 'vue'
import App from './App.vue'

import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store'

//自定义插件 Loading
import Loading from './components/Loading'
// console.log('Loading',Loading)
Vue.use(Loading)

// import 'font-awesome/css/font-awesome.css'

//全局的base.css样式
import '../public/css/base.css'
import '../public/js/font.js'

//全局引入过渡动画第三方库 animate.css
import 'animate.css'

Vue.config.productionTip = false

import $ from 'jquery'
window.$ = window.jQuery = $

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.config.productionTip = false

//全局使用axios
import axios from 'axios'
axios.defaults.withCredentials = true

Vue.prototype.$http = axios


//添加axios的拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  store.state.loadingFlag = false
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.state.loadingFlag = true
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.mixin({
  data(){
    return {
      zgwk: 'yui'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
