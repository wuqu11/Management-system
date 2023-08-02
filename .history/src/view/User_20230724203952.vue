<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" >
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    <div class="user-header">
        
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            dialogVisible:false,

        }
    },
}
</script>

<style lang="less" scoped></style>