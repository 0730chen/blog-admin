import request from './request';
import Cookies from "js-cookie";
const token = {
    admin: 'admin'
};
export function getToken(params) {
    console.log(params);
    Cookies.set('admin', token);
    return request({
        url: '/user/token',
        method: 'get',
        data: params
    });
}
export function getInfo(token, password) {
    return request({
        url: '/user/info',
        method: 'GET',
        data: token
    });
}
export function getLogin(data) {
    Cookies.set('admin', token.admin);
    return request({
        url: '/user/login',
        method: 'GET',
        data: data
    });
}
