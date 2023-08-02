export default{
    state:{
        isCollapse:false,//目录伸收 初始化
        istabList:{
            icon: "s-home",
            label:"首页",
            name:"home",
            path:"/",
            url:"Home/Home"
        }
    },
    mutations:{
        //点击目录伸收键改变值
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        },
        updatedTab(state,val){
            if(state.name !== 'home'){
                    const index= state.istabList.findIndex(item => item.name == val.name)
                    if(index !== -1){

                    }
            }
        }
    }
}