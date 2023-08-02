export default{
    state:{
        isCollapse:false//目录伸收 初始化
    },
    mutations:{
        //点击目录shenshou
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}