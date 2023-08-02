<template>
    <div>
        <div class="header-container">
            <div class="l-container">
                <el-button icon="el-icon-menu" size="mini"></el-button>
                <span class="text">首页</span>
            </div>
            <div class="r-container">
                <span class="el-dropdown-link">
                    <img src="../assets/images/user.png" class="user">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
        size: 12px;
        margin-left: 10px;
    }

    
    .user {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
}
</style>