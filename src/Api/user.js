import request from './request';
const token = {
    admin: 'admin'
};
export function getToken(params) {
    console.log(params);
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
    return request({
        url: '/user/login',
        method: 'GET',
        data: data
    });
}
