/*
  该文件是整个文件的入口文件
*/
//引入vue文件
import Vue from 'vue'
//引入App文件，App文件是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//引入Vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
//创建Vue的实例对象--vm
new Vue({
  el:'#app',
  //将App组件放入容器
  render: h => h(App),
  store:'hello',
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
