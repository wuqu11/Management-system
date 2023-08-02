<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user"></div>
                    <div ></div>
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
    background-color: rgb(242, 255, 240);
}
</style>