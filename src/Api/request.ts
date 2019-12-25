//封装一个axios

import axios from 'axios'
import {Message} from "element-ui";
import store from '@/store'

const service = axios.create({
    baseURL:process.env.BASE_API,
    timeout:5000
})

service.interceptors.request.use(config => {
    return config
},error =>{
    console.log(error)
    return Promise.reject(error)
})

service.interceptors.response.use((req)=>{
    return req
},error => {
    return Promise.reject(error)
})

export default service