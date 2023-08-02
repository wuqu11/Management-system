export default{
    state:{
        isCollapse:false//目录伸shou
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}