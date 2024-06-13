import { ApiDeleteUser, ApiGetUser, ApiUpdateUser } from "../../@types/Auth";
import { api } from "../Api";

export const getUser = async () => {
    return await api<ApiGetUser>({
        endpoint: 'auth/me'
    })
}

export const updateUser = async (name: string, email: string) => {
    return await api<ApiUpdateUser>({
        endpoint: 'users', method: 'PUT', data: { name, email }
    })
}

export const deleteUser = async () => {
    return await api<ApiDeleteUser>({
        endpoint: 'users', method: 'DELETE'
    })
}