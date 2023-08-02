<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/user.png" alt="" class="user-img">
                    </div>
                    <div class="userinfo">
                        <p>Admin</p>
                    </div>
                    <div class="login-info"></div>
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
    justify-content: center;
    align-items: center;
    .user-img{
        height: 140px;
        width: 140px;
        border-radius: 50%;
    }
}
</style>