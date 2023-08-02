import VueRouter from "vue-router";
import Vue from "vue";
import User from '@/view/User.vue';
import Home from '@/view/Home.vue'


Vue.use(VueRouter);
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]


  const app = new Vue({
    router
  }).$mount('#app')