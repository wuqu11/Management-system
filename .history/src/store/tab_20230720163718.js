export default{
    state:{
        isCollapse:false//目录shen
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}