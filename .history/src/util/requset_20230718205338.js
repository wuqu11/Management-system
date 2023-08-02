import axios from "axios";

//1.利用axios对象的方法create,去创建一个axios实例
//2.request就是axios,只不过稍微配置一下
const request = axios.create({
    //配置对象
    //基础路径,发请求的时候,路径当中会出现API
    baseURL:'/api',
    //代表请求超时的时间
    timeout:5000
})


//请求拦截器:在发请求之前,请求拦截器可以检测到,看在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
    //config:配置对象,对象里面有一个属性很重要,header请求头
    if(store.state.detail.uuid_taken){
    //给请求头加一个字段
        config.headers.userTempId = store.state.detail.uuid_taken
    } 
    //需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    //可以使得进度条开始动
    NProgress.start();
    return config;
})

//响应拦截器
request.interceptors.response.use((res)=>{
    //返回成功的回调函数:服务器数据回来以后,响应拦截器可以检测到,可以做一些事情
    NProgress.done();
    return res.data
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})

//暴露axios实例
export default request