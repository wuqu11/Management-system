import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'
//自己设立url的地址
Mock.mock('/api/home/getData',homeApi.getStatisticalData);

Mock.mock('/api/home/add',user.createUser);
Mock.mock('/api/home/del',user.deleteUser);
Mock.mock('/api/home/ed',user.deleteUser);
Mock.mock('/api/home/del',user.deleteUser)