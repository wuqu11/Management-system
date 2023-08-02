<template>
    <div>
        <el-form :model="form" >
            <el-form-item label="登录页面"></el-form-item>
            <el-form-item>
                <el-input v-model="form.name" label="用户名："></el-input>
                <el-input v-model="form.password"></el-input>
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