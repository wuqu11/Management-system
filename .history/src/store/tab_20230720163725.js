export default{
    state:{
        isCollapse:false//目录伸shuo
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}