import request from './request';
//获取文章
export function GetAllArt() {
    return request({
        url: '/api/article',
        method: 'get',
    });
}
