import request from "@/util/requset";

export  const getData=() => {
    return  request.get('/home/getData')
}

export const getUser=(params) => {
    return request.get('/user/agtUser',params)
}
export const delUser=(data) => {
    return request.post('/user/del',data)
}
export const editUser=(data) => {
    return request.post('/user/edit',data)
}
export const addUser=(data) => {
    return request.get('/user/add',data)
}
