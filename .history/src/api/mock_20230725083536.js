import Mock from "mockjs";
import homeApi from './mock/home';
i

Mock.mock('/api/home/getData',homeApi.getStatisticalData)