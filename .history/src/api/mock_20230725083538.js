import Mock from "mockjs";
import homeApi from './mock/home';
imp

Mock.mock('/api/home/getData',homeApi.getStatisticalData)