import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
});

// 添加请求拦截器
httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default httpClient;