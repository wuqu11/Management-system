export default{
    state:{
        isCollapse:false//目录伸sou
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}