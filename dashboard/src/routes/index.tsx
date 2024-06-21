import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/auth"
import { Layout } from "../components/layout"
import { Home } from "../pages/home"
import { NewTransaction } from "../pages/transaction/new"
import { EditTransaction } from "../pages/transaction/edit"
import { Transactions } from "../pages/transaction/transactions"
import { Account } from "../pages/account"
import { NotFound } from "../pages/notFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/signin"
                element={<Auth type="signin" />}
            />

            <Route
                path="/signup"
                element={<Auth type="signup" />}
            />

            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/account" element={<Account />} />

                <Route path="/transacoes">
                    <Route index element={<Transactions />} />
                    <Route path="nova" element={<NewTransaction />} />
                    <Route path=":id/editar" element={<EditTransaction />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}