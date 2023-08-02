export default{
    state:{
        isCollapse:false//目录伸收 初始化
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}