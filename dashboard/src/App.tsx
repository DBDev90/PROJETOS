import { useEffect } from "react";
import { useAuth } from "./hooks/Auth";
import { useTheme } from "./hooks/Theme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { MainRoutes } from "./routes";

export const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();
    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <MainRoutes />
    </ThemeProvider>
  );
};