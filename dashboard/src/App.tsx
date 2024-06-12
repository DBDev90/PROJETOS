import { useEffect } from "react";
import { useAuth } from "./hooks/Auth";

export const App = () => {
  const { handleAuthenticateUser } = useAuth();

  useEffect(() => {
    handleAuthenticateUser();
  }, [handleAuthenticateUser]);

  return (
    <div>

    </div>
  );
};