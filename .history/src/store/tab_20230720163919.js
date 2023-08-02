export default{
    state:{
        isCollapse:false//目录伸收 初始化
        istab
    },
    mutations:{
        //点击目录伸收键改变值
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}