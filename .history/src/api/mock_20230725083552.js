import Mock from "mockjs";
import homeApi from './mock/home';
import user from './'

Mock.mock('/api/home/getData',homeApi.getStatisticalData)