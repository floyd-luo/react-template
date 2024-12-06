// 认证服务

import httpClient from './api/httpClient';

import { AxiosResponse } from 'axios';

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response: AxiosResponse<LoginResponse> = await httpClient.post<LoginResponse>(
        '/auth/login',
        credentials
    );
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
};

const refreshToken = async () => {
    const response = await httpClient.post('/auth/refresh');
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export default { login, logout, refreshToken };