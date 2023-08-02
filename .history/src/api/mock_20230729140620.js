import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'
//自己设立url的地址
Mock.mock('/api/home/getData',homeApi.getStatisticalData);
Mock.mock('/api/user/add','post',user.createUser);
Mock.mock('/api/user/del','post',user.deleteUser);
Mock.mock('/api/user/edit','post',user.updateUser);
//使用正则get方法可以带数据
Mock.mock(/api\/user\/getUser/,user.getUserList);
//调用permission
Mock.mock(/api\permission\/getMenu/,'post')