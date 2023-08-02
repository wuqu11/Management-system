<template>
    <div>
        <el-form>
            <el-form-item></el-form-item>
            <el-form-item>
                <el-input v-model="password"></el-input>
                <el-input v-model=""></el-input>
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