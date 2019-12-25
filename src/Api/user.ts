import request from './request'
import Cookies from "js-cookie";
const token  ={
    admin:'admin'
}
export function getToken(params: any){
    console.log(params)
    return request({
        url:'/user/token',
        method:'get',
        data:params
    })
}
export function getInfo(token: any, password: string | any | string | undefined) {
    return request({
        url: '/user/info',
        method: 'GET',
        data:token
    })
}
export function getLogin(data:any) {
    Cookies.set('admin',token.admin)
    return request({
        url: '/user/login',
        method: 'GET',
        data: data
    })
}
