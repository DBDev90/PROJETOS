import { Outlet, Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFoundPage, Product, Products } from "./pages";
import { MainLayout } from "./components";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
