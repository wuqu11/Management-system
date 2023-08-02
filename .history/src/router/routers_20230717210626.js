//zjiang
import User from '@/view/User.vue';
import Home from '@/view/Home.vue';
import Main from '@/view/Main.vue';
import Mall from '@/view/Mall.vue';
import PageOne from '@/view/PageOne.vue';
import PageTwo from '@/view/PageTwo.vue'

//1.创建路由组件
//2.路由组件的映射
//3.创建路由实例对象


export default new VueRouter({
      
       path: '/',
      component:Main ,
      // redirect:'/home',
      children:[ 
        { path: 'home', component: Home },
        { path: 'user', component: User },
        { path: 'mall', component: Mall },
        { path: 'page1', component: PageOne },
        { path: 'page2', component: PageTwo },
      ]
    },
     //重定向,在项目跑起来的时候,去访问/，立马让他定向到首页
     {
      path:'*',
      redirect:'/home'
    }
  )
  

