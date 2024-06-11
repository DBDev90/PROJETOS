import { ApiGetDashboard } from "../../@types/Transaction"
import { formatDate } from "../../utils/formatDate";
import { api } from "../Api"

export const getDashboard = async (month: string, year: string) => {
    const response = await api<ApiGetDashboard>({
        endpoint: "dashboard"
    });

    let balance = 0;
    const pending_transactions = response.data?.pending_transactions ?? 0;
    const completed_transactions = response.data?.completed_transactions ?? 0;

    if (response.data) {
        response.data.transactions.map(transaction => {
            const date = formatDate(transaction.created_at).split("/");

            if (date[1] === month && date[2] === year) balance += transaction.amount;
        })
    }

    return {
        balance,
        pending_transactions,
        completed_transactions
    }
}