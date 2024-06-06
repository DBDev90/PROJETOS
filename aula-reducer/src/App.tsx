import { Button } from "./components/Button";
import { ContextProvider } from "./contexts/Context";

export const App = () => {
  return (
    <ContextProvider>
      <Button />
    </ContextProvider>
  );
};