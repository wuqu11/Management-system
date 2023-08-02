<template>
    <div>
        <el-row>
            <el-col :span="8" style="padding-right: 10px;">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/user.png" alt="" class="user-img">
                        <div class="userinfo">
                            <p class="name">超级管理员</p>
                            <p class="access">Admin</p>
                        </div>
                    </div>
                    <div class="user-login">
                        <p>上次登录的时间:<span>2021-1-14</span></p>
                        <p>上次登录的地点:<span>武汉</span></p>
                    </div>
                </el-card>
                <el-card style="margin-top: 20px; height: 460px;">
                    <el-table :data="tableData" style="width: 100%">
                        <!-- <el-table-column prop="name" label="课程" >
                        </el-table-column>
                        <el-table-column prop="todayBuy" label="日订单">
                        </el-table-column>
                        <el-table-column prop="monthBuy" label="月订单">
                        </el-table-column>
                        <el-table-column prop="totalBuy" label="总订单" >
                        </el-table-column> -->
                        <el-table-column v-for="(val, key) in tableList" :prop="key" :label="val">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left: 10px;">
                <div class="num">
                    <el-card v-for="Item in numDate" :key="Item.name" :body-style="{ display: 'flex', padding: 0 }"
                        class="numcontainer">
                        <i class="icon" :class="`el-icon-${Item.icon}`" :style="{ background: Item.color }"></i>
                        <div class="detail">
                            <p class="praice">￥{{ Item.value }}</p>
                            <p class="dec">{{ Item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height: 280px; width: 100%;" >
                    <div id="echarts1" style="height: 280px;"></div>
                </el-card>
                <div class="chart">
                    <el-card style="height: 260px;">
                    <div id="echarts2" style="height: 260px;"></div>
                </el-card>
                    <el-card style="height: 260px;"></el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script src="js/echarts.js"></script>
<script>

import { getData } from '../api'
import * as echarts from 'echarts';
export default {
    name: 'Home',
    data() {
        return {
            tableData: [],
            tableList: {
                name: '课程',
                todayBuy: '日收入',
                monthBuy: '月收入',
                totalBuy: "总收入"
            },
            numDate: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
    mounted() {
        getData().then((data) => {
            const tableList = data.data
            this.tableData = tableList.data.tableData
            //创建echarts实例
            let echarts1 = echarts.init(document.getElementById('echarts1'))
            const echarts2 = echarts.init(document.getElementById('echarts2'))
           
            //定义一个echarts的容器
            //折线图
            var echars1Option = {}

            const { orderData,userData } = data.data.data

            const xAxis = Object.keys(orderData.data[0])
            const xAxisData ={
                data:xAxis
            }
            echarts1sption.xAxis = xAxisData
            echars1Option.yAxis ={}
            echars1Option.legend =xAxisData
            echars1Option.series = []
            xAxis.forEach(key => {
                echars1Option.series.push({
                    name:key,
                    type:'line',
                    data:orderData.data.map(item =>item[key])
                })
            })
            console.log(echars1Option);
           
            //柱形图 
            
            const echarts2Option ={
                legend: {
                    // 图例文字颜色
                    textStyle: {
                    color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: userData.map(item => item.data) ,
                    axisLine: {
                    lineStyle: {
                        color: "#17b3a3",
                    },
                    },
                    axisLabel: {
                    interval: 0,
                    color: "#333",
                    },
                },
                yAxis: [
                    {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                        color: "#17b3a3",
                        },
                    },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name:'新增用户',
                        data:userData.map(item => item.data)
                    }
                ],
                }


             //应用实例
            echarts1.setOption(echars1Option)
          
        })
    },

}
</script>

<style lang="less" scoped>
.box-card {
    display: flex;

    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #999;

        .user-img {
            height: 140px;
            width: 140px;
            border-radius: 50%;
            margin-right: 40px;
        }

        .userinfo {
            margin-left: 40px;

            .name {
                font-size: 32px;
                margin-bottom: 10px;
            }

            .access {
                color: #999;
            }
        }
    }

    .user-login {
        p {

            line-height: 28px;
            font-size: 14px;
            color: #999;
        }

        span {
            padding-left: 40px;
        }
    }

}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .numcontainer {
        display: flex;
        width: 32%;
        margin-bottom: 10px;

        .icon {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }

        .detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 30px;

            .praice {

                font-size: 30px;
                height: 15px;
                margin: 0px;
            }

            .dec {
                padding-top: 14px;
                font-size: 14px;
                align-items: center;
                color: #999;
            }
        }
    }
}

.chart {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .el-card {
        width: 48%;
    }
}
</style>