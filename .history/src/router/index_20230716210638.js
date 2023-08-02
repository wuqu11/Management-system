import VueRouter from "vue-router";
import Vue from "vue";
import User from '@/view/User.vue';
import Home from '@/view/Home.vue';
import Main from '@/view/Main.vue';
import Mall from '@/view/Mall.vue';
import PageOne from '@/view/PageOne.vue';
import PageTwo from '@/view/PageTwo.vue'

//1.创建路由组件
//2.路由组件的映射
//3.创建路由实例对象

Vue.use(VueRouter);
const routes = [
    { path: '/',
      component:Main ,
      
      children:[ 
        { path: '/home', component: Home },
        { path: '/user', component: User },
        { path: '/mall', component: Mall },
        { path: '/page1', component: PageOne },
        { path: '/page2', component: PageTwo },
      ]
    },
   
  ]

export default new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  

