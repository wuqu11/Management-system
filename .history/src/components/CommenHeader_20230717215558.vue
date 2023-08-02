<template>
    <div>
        <div class="header-container">
            <div class="l-container">
                <el-button icon="el-icon-menu" size="mini"></el-button>
                <span class="text">首页</span>
            </div>
            <div class="r-container">
            <el-dropdown-menu src="../assets/images/user.png" slot="dropdown">
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
    background-color: #333;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
        color: aliceblue;
        size: 12px;
        margin-left: 10px;
    }
}
</style>