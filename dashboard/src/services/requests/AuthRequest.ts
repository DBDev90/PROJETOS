import { ApiSignIn, ApiSignUp } from "../../@types/Auth";
import { api } from "../Api";

export const signUp = async (name: string, email: string, password: string) => {
    return await api<ApiSignUp>({
        endpoint: "auth/signup",
        method: "POST",
        data: {
            name,
            email,
            password,
        },
        withAuth: false,
    });
};

export const signIn = async (email: string, password: string) => {
    return await api<ApiSignIn>({
        endpoint: "auth/signin",
        method: "POST",
        data: {
            email,
            password,
        },
        withAuth: false,
    });
};
