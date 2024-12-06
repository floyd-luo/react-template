import httpClient from './httpClient';
import {User} from '@/types/api';
const getUserInfo = async (userId:string) => {
    const response = await httpClient.get(`/users/${userId}`);
    return response.data;
};

const updateUser = async (userId: string, data:User) => {
    const response = await httpClient.put(`/users/${userId}`, data);
    return response.data;
};

export default { getUserInfo, updateUser };