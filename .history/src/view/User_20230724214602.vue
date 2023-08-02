<template>
    <div class="user">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
            <!-- 用户表单 -->
            <el-form ref="form" :inline="true" label-width="80px" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input placeholder="请输入姓名" v-model="form.name">
                    </el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input placeholder="请输入年龄" v-model="form.age">
                    </el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="bir">
                    <el-col :span="19">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birth"
                            style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input placeholder="请输入地址" v-model="form.addr">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="user-header">
            <el-button @click="dialogVisible = true" type="primary">
                + 新增
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: ''
            },
            rules:{
                name:[
                    {required:true}
                ],
            }
        }
    },
}
</script>

<style lang="less" scoped></style>