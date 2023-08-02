<template>
    <div>
        <el-form :model="form">
            <el-form-item label="活动名称"></el-form-item>
            <el-form-item>
                <el-input v-model="form.name"></el-input>
                <el-input v-model="password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                User:{
                    name:'',
                    password:''
                }
            }
        },
    }
</script>

<style lang="less" scoped>

</style>