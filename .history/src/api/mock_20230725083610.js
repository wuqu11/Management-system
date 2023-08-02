import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/user'

Mock.mock('/api/home/getData',homeApi.getStatisticalData);

Mock