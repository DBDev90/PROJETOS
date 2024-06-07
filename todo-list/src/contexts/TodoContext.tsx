import { ReactNode, createContext, useReducer } from "react";
import { TodoActions, TodoState } from "../@types/TodoReducer";
import { InitialState, todoReducer } from "./reducers/todoReducer";

type TodoContextProviderProps = {
    children?: ReactNode;
}

type ContextType = {
    state: TodoState;
    dispatch: React.Dispatch<TodoActions>;
};

export const TodoContext = createContext<ContextType>({
    state: InitialState,
    dispatch: () => null,
});

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [state, dispatch] = useReducer(todoReducer, InitialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}