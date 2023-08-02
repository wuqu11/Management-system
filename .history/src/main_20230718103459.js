import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
  // import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router';
import store from '@/';

Vue.use(router)
Vue.use(ElementUI)
// Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
