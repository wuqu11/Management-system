import Vue from 'vue'
import App from './App.vue'
// import {Row,Button} from 'element-ui';
  // import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
