<template>
    <div>
        <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
            {{ tag.name }}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'CommenTag',
    mounted
}
</script>

<style lang="less" scoped></style>