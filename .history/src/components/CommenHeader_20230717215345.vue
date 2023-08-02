<template>
    <div>
        <div class="header-container">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
            <el-dropdown-menu src="../components/"  slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .header-container{
        background-color: #333;
        padding: 0 20px;
        display: flex;
        align-items: center;
        .text{
            color: aliceblue;
            size: 12px;
            margin-left:10px ;
        }
    }
</style>