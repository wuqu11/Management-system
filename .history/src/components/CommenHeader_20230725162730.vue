<template>
    <div class="header-container">
        <!-- 头部左边的关闭标签页和地址的信息 -->
        <div class="l-container">   
            <el-button @click="handleMnue" icon="el-icon-menu" size="mini" style="margin-right:10px"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tabList" :key="item.name" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 头部的个人信息 -->
        <div class="r-container">
            <el-dropdown class="el-dropdown">
                <span class="el-dropdown-link">
                    <img src="../assets/images/user.png" alt="" class="user">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CommenHeader',
    methods: {
        handleMnue() {
            console.log(this.$store.state.tab.isCollapse);
            this.$store.commit('collapsemenu')
        }
    },
    computed:{
        ...mapState({
            tabList: state => state.tab.istabList
        })
    }
}
</script>

<style lang="less" scoped>
.header-container {
    height: 60px;
    background-color: #333;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .l-container{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item{
            font-weight: normal;
                .el-breadcrumb__inner{
                    color: #666;
                }
        }
    }

    .r-container {
        .el-dropdown {
            top: 10px;

            .user {
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }

        }
    }

}
</style>