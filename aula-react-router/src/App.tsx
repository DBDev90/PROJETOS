import { Route, Routes } from "react-router-dom";
import { About, Home, Product, Products } from "./pages";
import { MainLayout } from "./components";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":cateforyId/:productId" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
