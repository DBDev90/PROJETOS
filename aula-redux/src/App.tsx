import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Button />
      </div>
    </Provider>
  );
}