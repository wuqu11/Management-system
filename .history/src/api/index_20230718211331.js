import request from "@/util/requset";

export default const getData=() => {
    return  request.get('/home/getData')
}

