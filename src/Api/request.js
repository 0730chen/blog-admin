//封装一个axios
import axios from 'axios';
import store from '@/store';
import { getTokens } from "@/Api/auth";
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
});
service.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers['X-Token'] = getTokens();
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
service.interceptors.response.use((req) => {
    return req;
}, error => {
    return Promise.reject(error);
});
export default service;
