import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
  // import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router';
import store from '@/store';
import '@/api/mock'

Vue.use(router)
Vue.use(ElementUI)
// Vue.use(Button)
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
