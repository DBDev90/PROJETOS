import { ThemeAction } from "../types/ThemeReducer";
import { ThemeReducer, themeInitialState } from "./reducers/ThemeReducer";

//Exporting all initial states
export const InitialState = {
    theme: themeInitialState,
};

//Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
    theme: ThemeReducer(state.theme, action),
});

//Exporting all types
export type InitialStateType = typeof InitialState;
export type ActionType = ThemeAction;