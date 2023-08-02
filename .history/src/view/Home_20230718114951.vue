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
                       <p>上次登录的时间:<span>2021:1:14</span></p>
                       <p>上次登录的地点:<span>武汉</span></p>
                    </div>
                </el-card>
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
        .access{
            color: #999;
        }
    }
}
.user-login{
    
}
</style>