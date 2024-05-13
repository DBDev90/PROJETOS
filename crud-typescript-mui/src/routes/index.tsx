import { useEffect } from "react";
import { useDrawerContext } from "../shared/contexts";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      }
    ]);
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Dashboard />
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
