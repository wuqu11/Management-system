<template>
    <div>
        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                    <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
import C
    export default {
        
    }
</script>

<style  scoped>

</style>