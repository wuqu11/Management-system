//引入Vue
import Vue from "vue";
//引入路由
import VueRouter  from "vue-router";
//引入路由配置
import routes from './routes'
//使用插件
Vue.use(VueRouter)
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


//配置路由
export default new VueRouter({
    //配置路由
    mode:'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})