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
            <CommenTag /></CommenTag>
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
import CommenTag from '@/components/CommenTag.vue';
    export default {
        components:{CommenSide,CommenHeader,CommenTag}
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
    padding: 10px;
  }
</style>