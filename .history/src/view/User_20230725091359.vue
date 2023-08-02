<template>
    <div class="user">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
            <!-- 用户表单 -->
            <el-form ref="form" :inline="true" label-width="80px" :rules="rules" :model="form" :before-close="handleClose">
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
                <el-form-item label="出生日期" prop="birth">
                    <el-col :span="19">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birth"
                            style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input placeholder="请输入地址" v-model="form.addr">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="canTab">取 消</el-button>
                <el-button type="primary" @click="sureTab">确 定</el-button>
            </span>
        </el-dialog>
        <div class="user-header">
            <el-button @click="dialogVisible = true" type="primary">
                + 新增
            </el-button>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="180">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="180">
            </el-table-column>
            <el-table-column prop="birth" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="addr" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {} form '../api/'
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
            rules: {
                name: [
                    { required: true, message: '请输入名字' }
                ],
                age: [
                    { required: true, message: '请输入年龄' }
                ],
                sex: [
                    { required: true, message: '请选择性别' }
                ],
                birth: [
                    { required: true, message: '请请选择出生日期' }
                ],
                addr: [
                    { required: true, message: '请输入地址' }
                ],

            }
        }
    },
    methods: {
        sureTab() {
            this.$refs.form.validate(vaild => {
                if (vaild) {
                    console.log(this.form, 'form');
                    this.$refs.form.resetFields();
                    this.dialogVisible = false;
                }
            })
        },
        handleClose() {
            this.$refs.form.resetFields();
            this.dialogVisible = false;
        },

        canTab() {
            this.handleClose()
        }
    }
}
</script>

<style lang="less" scoped></style>