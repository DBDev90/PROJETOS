import { Outlet, useRoutes } from "react-router-dom";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { About, Home, Login, NotFoundPage, Product, Products } from "../pages";

//Metodo 1
/*
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/products"
                    element={
                        <AuthMiddleware>
                            <Outlet />
                        </AuthMiddleware>
                    }
                >
                    <Route index element={<Products />} />
                    <Route path=":cateforyId/:productId" element={<Product />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}
*/

//Método 2
export const AppRoutes = () => {
    const element = useRoutes([
        {
            index: true,
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/products",
            element: <AuthMiddleware><Outlet /></AuthMiddleware>,
            children: [
                {
                    index: true,
                    element: <Products />
                },
                {
                    path: ":categoryId/>productId",
                    element: <Product />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]);

    return element;
}