import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
// 引入vuex仓库
import store from '@/store'
// 引入MockServe，mock数据
import '@/mock/mockServe'
// 引入轮播图swiper样式
import 'swiper/css/swiper.css'
// 引入轮播图全局组件
import Carousel from '@/components/Carousel'
// 引入分页器全局组件
import Pagination from "@/components/Pagination"

Vue.config.productionTip = false

// 注册全局组件，注册后的全局组件无需引入直接使用
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)



new Vue({
  render: h => h(App),
  // 全局事件总线 $bus
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册路由信息，这里书写router的时候，组件身上都有$route和$router
  router,
  // 注册仓库：组件实例的身上会多一个$store属性
  store
}).$mount('#app')
