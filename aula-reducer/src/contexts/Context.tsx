import { ReactNode, createContext, useReducer } from "react";
import { ActionType, InitialState, InitialStateType, Reducers } from "./Config";

type ContextProviderProps = {
    children: ReactNode;
};

type ContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<ActionType>
};

export const Context = createContext<ContextType>({ state: InitialState, dispatch: () => null });

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducers, InitialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}