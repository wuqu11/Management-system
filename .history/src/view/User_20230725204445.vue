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
                    <el-select v-model="form.sex" placeholder="请选择" style="width: 80%;">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-col :span="19">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" style="width: 100%;"
                            value-format="yyyy-MM-DD"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input placeholder="请输入地址" v-model="form.addr">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelTab">取 消</el-button>
                <el-button type="primary" @click="sureTab">确 定</el-button>
            </span>
        </el-dialog>
        <div class="mange-header">
            <el-button @click="handerAdd" type="primary" size="mini">
                + 新增
            </el-button>
            <el-form :inile :model="Userform">
            <el-form-item >
                <el-input v-model="Userform.name" placeholder="请输入" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
        </el-form>
        </div>
        <div class="comm-total">
            <!-- 显示mock.js带来的信息 -->
            <el-table :data="tableData" stripe style="width: 100%" height="95%" :stripe="true">
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.sex == 1 ? '男' : '女' }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="age" label="年龄" width="180">
                </el-table-column>
                <el-table-column prop="birth" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="addr" label="地址">
                </el-table-column>
                <el-table-column prop="addr" label="操作">
                    <template slot-scope="scope">
                        <el-button class="handeredit" @click="handeredit(scope.row)">编辑</el-button>
                        <el-button class="handerdel" type="danger" @click="handereclear(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination layout="prev, pager, next" :total="pagetotal" @current-change="changepage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { getUser, delUser, editUser, addUser } from '../api'
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

            },
            tableData: [],
            numType: 0,
            pagetotal: 0,
            pageDate: {
                page: 1,
                limit: 20
            },
            Userform:{
                name:''
            }
        }
    },
    methods: {
        // 填完信息关闭并且清空
        sureTab() {
            this.$refs.form.validate(vaild => {
                if (vaild) {
                    console.log(this.form, 'form');
                    if (this.numType == 0) {
                        addUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                    else {
                        editUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                    this.$refs.form.resetFields();
                    this.dialogVisible = false;
                }
            })
        },
        // 关闭并且清空信息
        handleClose() {
            this.$refs.form.resetFields();
            this.dialogVisible = false;
        },
        //关闭并且清空信息
        cancelTab() {
            this.handleClose()
        },
        //添加人员信息
        handerAdd() {
            this.dialogVisible = true
            this.numType = 0
        },
        //点击编辑信息
        handeredit(row) {
            this.dialogVisible = true
            this.numType = 1
            this.form = row
        },
        //删除人员信息
        handereclear(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delUser({ id: row.id }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                })

            }).catch(() => {
                delUser({ id: row.id }).then(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })

            });
        },
        //获取mock信息
        getList() {
            //获取列表
            //携带页数传输给mock
            //获取页码
            getUser({ params: {...this.Userform,...this.pageDate} }).then(({ data }) => {
                this.tableData = data.list
                this.pagetotal = data.count || 0
            })
        },
        //跳转页面
        //使用current-change自动产生参数 不用在标签中加（val）
        changepage(val) {
            console.log(val, 'val');
            this.pageDate.page = val;
            this.getList()
        },
        onSubmit(){
            this.getList()
        }

    },
    mounted() {
        //页面渲染时提供信息
        this.getList()
    }
}
</script>

<style lang="less" scoped>
.user {
    height: 95%;

    .comm-total {
        position: relative;
        height: calc(97%);

        .page {
            position: absolute;
            right: 20px;
            bottom: 0;
        }
    }
}
</style>