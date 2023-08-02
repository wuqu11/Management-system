import Mock from "mockjs";
import homeApi from './mock/home';
import 

Mock.mock('/api/home/getData',homeApi.getStatisticalData)