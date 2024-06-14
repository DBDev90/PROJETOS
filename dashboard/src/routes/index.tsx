import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/auth"
import { Layout } from "../components/layout"
import { Home } from "../pages/home"
import { NewTransaction } from "../pages/transaction/new"
import { EditTransaction } from "../pages/transaction/edit"

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

                <Route path="/transacoes">
                    <Route path="nova" element={<NewTransaction />} />
                    <Route path=":id/editar" element={<EditTransaction />} />
                </Route>
            </Route>
        </Routes>
    )
}