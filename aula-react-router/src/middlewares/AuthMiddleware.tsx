import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IAuthMiddleware {
    children: ReactNode;
}

export const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to="/login" />;
    }
}