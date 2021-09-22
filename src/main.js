import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuetify from './plugins/vuetify'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
  vuetify,
	store,
  created() {
    AOS.init()
  }
}).$mount('#app')
