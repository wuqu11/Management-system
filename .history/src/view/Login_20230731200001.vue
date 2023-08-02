<template>
    <div class="login" >
        <el-form :model="form" :rules="rules" class="login-container" :inline="true" ref="form">
            <el-form-item label="登录页面" class="login-header"></el-form-item>
            <el-form-item label="用户名:" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="submit">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import  Mock  from 'mockjs';
import Cookie from 'js-cookie';
import { getMenu } from '@/api';
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            // 需要在标签中填写prop属性值
            rules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
    methods:{
        submit(){
            //使用Mock的方法创建一个token
            // const token=Mock.Random.guid();
            // //将token加入到Cookie
            // Cookie.set('token',token);

            //校验通过
            this.$refs.form.validate((valid) => {
                    if(valid){
                      getMenu(this.form).then(({data}) => {
                        console.log(data);
                        if(data.code === 20000){
                            //token的信息存入cookie不同的页面
                            Cookie.set('token',data.data.token)
                            //获取菜单的store中的menu
                            this.$store.commit()
                            //跳转到首页
                            this.$router.push('/home')
                        }else{
                            this.$message.error('密码错误')
                        }
                      })
                    }
            })
            // //跳转到主页面
            // this.$router.push('/home');
        }
    }
}
</script>

<style lang="less" scoped>

    .login-container{
        margin: 180px auto;
        width: 350px;
        border: 1px solid #aaa;
        padding: 35px 35px 15px 35px;
        border-radius: 5%;
        box-shadow: 0 0 25px #aaa;
        box-sizing: border-box;
        text-align: center;
        .el-input{
            width: 198px;
        }
        .login-header{
            margin-bottom: 10px;
            color: #505458;
            font-weight: bold; 
           
        }
    }

</style>