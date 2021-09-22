import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuetify from './plugins/vuetify'
import store from './store/index'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFormGenerator)

new Vue({
  router,
  render: h => h(App),
  vuetify,
	store,
  created() {
    AOS.init()
  }
}).$mount('#app')
