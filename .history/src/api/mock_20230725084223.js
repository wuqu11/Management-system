import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'
//zji
Mock.mock('/api/home/getData',homeApi.getStatisticalData);

Mock.mock('/api/home/getData')