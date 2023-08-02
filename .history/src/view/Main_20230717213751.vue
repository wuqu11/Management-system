<template>
    <div>
        <el-container>
        <el-aside width="200px">
            <CommenSide />
        </el-aside>
        <el-container>
            <el-header class=".el-header"></el-header>
            <el-main>
                    <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
import CommenSide from '@/components/CommenSide.vue';
    export default {
        components:{CommenSide}
    }
</script>

<style   scoped>
      .el-header {
    background-color: #B3C0D1;
    color: #w;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>