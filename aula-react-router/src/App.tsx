import { Route, Routes } from "react-router-dom";
import { About, Home, Product } from "./pages";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:cateforyId/:productId" element={<Product />} />
      </Routes>
    </div>
  );
}