import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
