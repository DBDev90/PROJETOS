import { useSaveTodos } from "./hooks/useSaveTodos";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export const App = () => {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}