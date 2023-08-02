import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'
//自己设立url的地址
Mock.mock('/api/home/getData',homeApi.getStatisticalData);

Mock.mock('/api/user/add','post',user.createUser);
Mock.mock('/api/user/del','post',user.deleteUser);
Mock.mock('/api/user/edit','post',user.updateUser);
Mock.mock(/api/user/getUser,user.getUserList)