import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'
//自己设立url
Mock.mock('/api/home/getData',homeApi.getStatisticalData);

Mock.mock('/api/home/getData')