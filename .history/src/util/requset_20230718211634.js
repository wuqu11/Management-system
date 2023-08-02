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


// 添加请求拦截器
rq.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//暴露axios实例
export default request