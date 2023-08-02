<template>
    <div>
        <el-row>
            <el-col :span="8">
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
                <!-- <el-card>
                    <el-table  :data="tableData" style="width: 100%">
                        <el-table-column prop="name" label="课程" >
                        </el-table-column>
                        <el-table-column prop="todayBuy" label="日订单">
                        </el-table-column>
                        <el-table-column prop="monthBuy" label="月订单">
                        </el-table-column>
                        <el-table-column prop="totalBuy" label="总订单" >
                        </el-table-column>
                    </el-table>
                </el-card> -->
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: 'vivo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '苹果',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '小米',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '三星',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: '魅族',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    }
                ]
        }
    },

}
</script>

<style lang="less" scoped>
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

.user-login {display: flex;
    p {
        
        line-height: 28px;
        font-size: 14px;
        color: #999;
    }

    span {
        padding-left: 50px;
    }
}
</style>