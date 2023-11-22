import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createPinia, PiniaVuePlugin  } from 'pinia'


import '@/assets/css/main.css'



Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()


new Vue({
  render: h => h(App),
  router,
  pinia,
}).$mount('#app')


