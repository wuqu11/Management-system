import request from "@/util/requset";

export  const getData=() => {
    return  request.get('/home/getData')
}

export const getUser=(par) => {
    return request.get()
}