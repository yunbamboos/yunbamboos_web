import axios from 'axios'
import store from '@/store'
import {TOKEN} from '@/constant'

// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: '/',
    timeout: 50000,
    responseType: "json",
    headers: {'Content-Type': 'application/json'},
});

// 拦截请求
service.interceptors.request.use(
    config => {
        const accountToken = store.getters['token/getAccountToken']();
        if (accountToken) {
            config.headers[TOKEN] = accountToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    // 响应成功进入第1个函数，该函数的参数是响应对象
    response => {
        return response
    },async error => {
        return Promise.reject(error)
    }
);
// 导出 axios 实例
export default service;
