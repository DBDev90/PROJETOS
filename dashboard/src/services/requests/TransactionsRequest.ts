import {
    ApiDeleteTransaction,
    ApiGetTransaction,
    ApiGetTransactions,
    ApiNewTransaction,
    TransactionStatus,
} from "../../@types/Transaction";
import { api } from "../Api";

export const getTransactions = async (page: number) => {
    return await api<ApiGetTransactions>({
        endpoint: "transactions",
        data: {
            page,
        },
    });
};

export const getTransaction = async (id: number) => {
    return await api<ApiGetTransaction>({
        endpoint: `transactions/${id}`,
    });
};

export const newTransaction = async (
    title: string,
    amount: number,
    status?: TransactionStatus
) => {
    return await api<ApiNewTransaction>({
        endpoint: "transactions",
        method: "POST",
        data: {
            title,
            amount,
            status,
        },
    });
};

export const updateTransaction = async (
    id: number,
    title: string,
    amount: number,
    status?: TransactionStatus
) => {
    return await api<ApiNewTransaction>({
        endpoint: `transactions/${id}`,
        method: "PUT",
        data: {
            title,
            amount,
            status,
        },
    });
};

export const deleteTransaction = async (id: number) => {
    return await api<ApiDeleteTransaction>({
        endpoint: `transactions/${id}`,
        method: "DELETE",
    });
};
