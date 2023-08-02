import VueRouter from "vue-router";
import Vue from "vue";
import User from '@/view/User.vue';
import Home from '@/view/Home.vue'

//创建lu

Vue.use(VueRouter);
const routes = [
    { path: '/user', component: User },
    { path: '/home', component: Home }
  ]

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  


  const app = new Vue({
    router
  }).$mount('#app')