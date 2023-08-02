export default{
    state:{
        isCollapse:false//目录伸收的
    },
    mutations:{
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}