import router from "@/router"
import Cookie from "js-cookie"
export default{
    state:{
        isCollapse:false,//目录伸收 初始化
        istabList:[{
            icon: "s-home",
            label:"首页",
            name:"home",
            path:"/",
            url:"Home/Home"
        }],
        //存储菜单的地址
        menus:[]
  },
    mutations:{
        //点击目录伸收键改变值
        collapsemenu(state){
            state.isCollapse = !state.isCollapse
        },
        //添加面包屑
        updatedTab(state,val){
            if(val.name !== 'home'){
                    const index= state.istabList.findIndex(item => item.name === val.name)
                    if(index === -1){
                        state.istabList.push(val)
                    }
            }
        },
        //删除面包屑
        deleteTag(state,val){
            const index=state.istabList.findIndex(item => item.name === val.name)
            state.istabList.splice(index,1)

        },
        //获取目录
        setMenu(state,val){
            state.menus = val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态路由
        addMenu(state,route){
            //判断是否有数据
            if(!Cookie.get('menu'))return
            const menus =  JSON.parse(Cookie.get('menu'))
            //重新赋值数据
            state.menus =menus
            //组装动态数组
            const menusArry=[];
            //遍历菜单数据
            menus.forEach(item => {
                //判断菜单是否有子菜单
                if(item.children){
                    item.children = item.children.map(item =>{
                        //有就添加子菜单的路径
                        item.component = () => import(`@/view/${item.url}`)
                        return item
                    })
                    menusArry.push(...item.children)
                }else{
                    //没有子菜单直接添加
                    item.component = () => import(`@/view/${item.url}`)
                    menusArry.push(item)
                }
            });
            console.log('menusArry',menusArry);
            menusArry.forEach(item=>{
                router.addRoute('Main',item)
            })
            
        }
    }
}