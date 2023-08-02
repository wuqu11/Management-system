import request from "@/util/requset";

export  const getData=() => {
    return  request.get('/home/getData')
}

export const getUser=(params) => {
    return request.get('/home/add',params)
}
