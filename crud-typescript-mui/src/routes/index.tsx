import { useEffect } from "react";
import { useDrawerContext } from "../shared/contexts";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, DetalheDePessoa, ListagemDePessoas } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'people',
        path: '/pessoas',
        label: 'Pessoas',
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
      <Route
        path="/pessoas"
        element={
          <ListagemDePessoas />
        }
      />
      <Route
        path="/pessoas/detalhe/:id"
        element={
          <DetalheDePessoa />
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
