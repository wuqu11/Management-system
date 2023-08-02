<template>
    <div>
        <el-tag v-for="item in tabList"
         :key="item.path"
            :type="item.type"
           :effect="item.nam">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CommenTag',
    computed: {
        ...mapState({
            tabList: state => state.tab.istabList
        })
    }
}
</script>

<style lang="less" scoped></style>