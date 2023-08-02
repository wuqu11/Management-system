import request from "@/util/requset";

export  const getData=() => {
    return  request.get('/home/getData')
}

export const getUser=(params) => {
    return request.get('/user/agtUser',params)
}
export const delUser=(data) => {
    return request.get('/user/del',data)
}
export const editUser=(params) => {
    return request.get('/user/edit',params)
}
