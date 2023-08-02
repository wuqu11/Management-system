import VueRouter from "vue-router";
import Vue from "vue";
import User from '@/view/User.vue';
import Home from '@/view/Home.vue';
import Main from '@/view/Main.vue';
import Mall from '@/view/Mall.vue';
import PageOne from '@/view/PageOne.vue';
import PageTwo from '@/view/PageTwo.vue';
import Login from "@/view/Login.vue";

//1.创建路由组件
//2.路由组件的映射
//3.创建路由实例对象

Vue.use(VueRouter);
const routes = [
    { 
      path: '/',
      component:Main ,
      redirect:'/home',
      children:[ 
        { path: 'home',name:'home',  component: Home },
        { path: 'user',name:'user', component: User },
        { path: 'mall',name:'mall', component: Mall },
        { path: 'page1',name:'page1', component: PageOne },
        { path: 'page2',name:'page2', component: PageTwo },
      ]
    },
    {
        path:'/login',
        
    }
   
  ]
 //先把VueRouter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;
let originReplce = VueRouter.prototype.replace;
//重写push|relace
//第一个参数:告诉原来push方法,你往哪里跳转(传递那些参数)
//第二个参数:成功回调
//第三个参数:失败回调
//call|apply区别
//相同点:都可以调用函数一次,都可以篡改函数的上下文一次
//不同点:call与apply传递参数,call传递参数用逗号隔开,apply方法执行,传递数组
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
};

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplce.call(this,location,resolve,reject)
    }else{
        originReplce.call(this,location,()=>{},()=>{})
    }
};

export default new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  

