<template>
    <div>
        <el-tag v-for="(item,index) in tabList"
            :key="item.path"
            :type="item.type"
           :effect="$route.name == item.name? 'dark':'plain'"
           :closable="item.name !== 'home'"
            @click="updatedTag(item)"
            @close="deleteTag(item,index)"
           >
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
    name: 'CommenTag',
    computed: {
        ...mapState({
            tabList: state => state.tab.istabList
        }),
        
    },
    methods:{
        ...mapMutations(['deleteTag']),
        //点击面包屑跳转
        updatedTag(item) {
            console.log(item);
            this.$router.push(item.name)
        },
        deleteTag(item,index){
           this.deleteTag(item)
           const length= this.tags.length -1
        }
    }
}
</script>

<style lang="less" scoped>
</style>