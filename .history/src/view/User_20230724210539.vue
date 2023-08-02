<template>
    <div class="user">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
            <!-- 用户表单 -->
            <el-form ref="form" :inline="true" label-width="80px">
                <el-form-item  label="姓名" >
                    <el-input placeholder="请输入姓名" v-model="form.name">
                    </el-input>
                </el-form-item>
                <el-form-item  label="年龄" >
                    <el-input placeholder="请输入年龄"  v-model="form.age">
                    </el-input>
                <el-form-item label="活动区域">
                <el-select v-model="formInline.sex" placeholder="请选择">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="0"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
                <!-- <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item> -->
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

<!-- {
    model: 'name',
    label: '姓名',
    type: 'input'
},
{
    model: 'age',
    label: '年龄',
    type: 'input'
},
{
    model: 'sex',
    label: '性别',
    type: 'select',
    opts: [
        {
            label: '男',
            value: 1
        },
        {
            label: '女',
            value: 0
        }
    ]
},
{
    model: 'birth',
    label: '出生日期',
    type: 'date'
},
{
    model: 'addr',
    label: '地址',
    type: 'input'
} -->
<script>
export default {
    name: 'User',
    data() {
        return {
            dialogVisible: false,
            form:{
                name:'',
                age:'',
                sex:'',
                birth:'',
                addr:''
            }
        }
    },
}
</script>

<style lang="less" scoped></style>