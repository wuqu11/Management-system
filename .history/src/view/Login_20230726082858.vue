<template>
    <div class="login">
        <el-form :model="form" :rules="rules" class="login-container">
            <el-form-item label="登录页面"></el-form-item>
            <el-form-item label="用户名:" prop="name">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">
                    登录
                </el-button>
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
            // 需要在标签中填写prop属性值
            rules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
}
</script>

<style lang="less" scoped>
.login{
    .login-container{
        width: 350px;
        border: 1px solid #feeefe;

    }
}
</style>