export default{
    state:{
        isCollapse:false//目录伸收 初始化
        is
    },
    mutations:{
        //点击目录伸收键改变值
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}