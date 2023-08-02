<template>
    <div>
        <el-tag v-for="(item, index) in tabList" :key="item.path" :type="item.type"
            :effect="$route.name == item.name ? 'dark' : 'plain'" :closable="item.name !== 'home'" @click="updatedTag(item)"
            @close="deleteTag(item, index)">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommenTag',
    computed: {
        ...mapState({
            tabList: state => state.tab.istabList
        }),

    },
    methods: {
        ...mapMutations(['deleteTag']),
        //点击面包屑跳转
        updatedTag(item) {
            console.log(item);
            this.$router.push(item.name)
        },
        deletetag(item, index) {
            //点击传输删除的tag的信息
            this.deleteTag(item)
            const lengthTag = this.tags.length - 1
            //删除不合当前相同的tag不需要跳转
            if (item.name !== this.$route.name) return
            //删除当前相同进行跳转
            //删除最后一个tag所以跳转到前一个
            if (index === lengthTag) { 
                this.$router.push({ name: this.tags[index - 1].name })
             }
            //删除中间的
            else {
                 this.$router.push({ name: this.tags[index ].name })
            }
        }
    }
}
</script>

<style lang="less" scoped></style>