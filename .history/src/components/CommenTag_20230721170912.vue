<template>
    <div>
        <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
            {{ tag.name }}
        </el-tag>
    </div>
</template>

<script>
export default {
    name:'ComTag'
}
</script>

<style lang="less" scoped></style>