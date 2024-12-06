//API 数据结构类型
export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}