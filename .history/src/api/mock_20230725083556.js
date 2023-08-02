import Mock from "mockjs";
import homeApi from './mock/home';
import user from './mock/'

Mock.mock('/api/home/getData',homeApi.getStatisticalData)