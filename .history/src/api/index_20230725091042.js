import request from "@/util/requset";

export  const getData=() => {
    return  request.get('/home/getData')
}

export const getUser=(params) => {
    return request.get('/user/add',params)
}
export const delUser=(params) => {
    return request.get('/user/add',params)
}
