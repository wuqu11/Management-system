<template>
        <div class="header-container">
            <div class="l-container">
                <el-button icon="el-icon-menu" size="mini"></el-button>
                <span class="text">首页</span>
            </div>
            <div class="r-container">
                <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        <img src="../assets/images/user.png" alt="" class="user">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
</template>

<script>
export default {
    name:''
}
</script>

<style lang="less" scoped>
.header-container {
    height: 60px;
    background-color: #333;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
        color: aliceblue;
        size: 14px;
        margin-left: 10px;
    }

    .r-container {
        .el-dropdown {
            top: 10px;
            .user {
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }

        }
    }

}
</style>