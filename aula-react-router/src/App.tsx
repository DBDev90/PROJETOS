import { Route, Routes } from "react-router-dom";
import { About, Home } from "./pages";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}