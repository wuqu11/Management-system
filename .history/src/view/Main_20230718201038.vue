<template>
    <div>
        <el-container>
        <el-aside width="auto">
            <CommenSide />
        </el-aside>
        <el-container>
            <el-header class="el-header">
                <CommenHeader/>
            </el-header>
            <el-main class="el-main">
                    <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import CommenSide from '@/components/CommenSide.vue';
import CommenHeader from '@/components/CommenHeader.vue';
    export default {
        components:{CommenSide,CommenHeader}
    }
</script>

<style lang="less"   scoped>
      .el-header {
    background-color: #B3C0D1;
    color: #111;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    color: #333;
  }
  .el-main{
    
  }
</style>