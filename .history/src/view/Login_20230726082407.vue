<template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item label="登录页面"></el-form-item>
            <el-form-item label="用户名:" prop="name">
                <el-input v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            
            rules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
}
</script>

<style lang="less" scoped></style>