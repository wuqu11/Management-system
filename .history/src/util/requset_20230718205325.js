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


request