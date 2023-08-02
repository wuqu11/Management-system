<template>
    <div class="tags">
        <el-tag v-for="(item, index) in tagList" :key="item.path" :type="item.type"
            :effect="$route.name == item.name ? 'dark' : 'plain'" :closable="item.name !== 'home'" @click="updatedTag(item)"
            @close="deletetag(item, index)"  size="small">
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
            tagList: state => state.tab.istabList
        }),

    },
    methods: {
        ...mapMutations(['deleteTag']),
        //点击面包屑跳转
        updatedTag(item) {
            console.log(item);
            this.$router.push({name:item.name})
        },
        deletetag(item, index) {
            console.log(this.tagList);
            //点击传输删除的tag的信息
            this.deleteTag(item)
           
            const lengthTag = this.tagList.length
            //删除不合当前相同的tag不需要跳转
            if (item.name !== this.$route.name) {return}
            //删除当前相同进行跳转
            //删除最后一个tag所以跳转到前一个
            if (index === lengthTag) { 
                this.$router.push( this.tagList[index - 1].name )
             }
            //删除中间的
            else {
                 this.$router.push( this.tagList[index ].name )
            }
        }
    },
}
</script>

<style lang="less" scoped>
    .tags{
        margin: 8px;
        el-tag{}
    }
</style>