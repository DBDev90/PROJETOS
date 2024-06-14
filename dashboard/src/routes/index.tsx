import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/auth"
import { Layout } from "../components/layout"
import { Home } from "../pages/home"

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
            </Route>
        </Routes>
    )
}