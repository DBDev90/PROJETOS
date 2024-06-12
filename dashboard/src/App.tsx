import { useEffect } from "react";
import { useAuth } from "./hooks/Auth";
import { useTheme } from "./hooks/Theme";

export const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();
    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return (
    <div>

    </div>
  );
};