export default{
    state:{
        isCollapse:false//目录shengsou
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}