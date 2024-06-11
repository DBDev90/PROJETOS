export type TransactionStatus = "pending" | "completed";

export type Transaction = {
    id: number;
    title: string;
    status: TransactionStatus;
    amount: number;
    created_at: number;
    use_id: number;
};

export type TransactionDashboard = Omit<Transaction, "id" | "title" | "status" | "user_id">;

export type ApiGetTransactions = {
    transactions: {
        itemsReceived: number;
        curPage: number;
        nextPage?: string;
        prevPage?: string;
        offSet: number;
        itemsTotal: number;
        pageTotal: number;
        items: Transaction[];
    }
};

export type ApiGetTransaction = {
    transaction: Transaction;
};

export type ApiGetDashboard = {
    transactions: TransactionDashboard[];
    pendin_transactions: number;
    completed_transactions: number;
};

export type ApiNewTransaction = {
    transaction: Transaction;
};

export type ApiUpdateTransaction = {
    transaction: Transaction;
};

export type ApiDeleteTransaction = {
    success: boolean;
};