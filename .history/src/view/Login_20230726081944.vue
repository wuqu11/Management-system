<template>
    <div>
        <el-form :model="form" >
            <el-form-item label="登录页面"></el-form-item>
            <el-form-item label="用户名:">
                <el-input v-model="form.name" ></el-input>
            </el-form-item><el-input v-model="form.password" label="密码"></el-input>
            <el-form-item label="用户名:">
                <el-input v-model="form.name" ></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    name:'',
                    password:''
                }
            }
        },
    }
</script>

<style lang="less" scoped>

</style>