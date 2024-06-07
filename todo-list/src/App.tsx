import { useSaveTodos } from "./hooks/useSaveTodos";

export const App = () => {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return (
    <></>
  );
}