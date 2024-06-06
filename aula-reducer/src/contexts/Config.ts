import { ThemeAction } from "../types/ThemeReducer";
import { UserAction } from "../types/UserReducer";
import { ThemeReducer, themeInitialState } from "./reducers/ThemeReducer";
import { userInitialState, userReducer } from "./reducers/UserReducer";

//Exporting all initial states
export const InitialState = {
    theme: themeInitialState,
    user: userInitialState,
};

//Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
    theme: ThemeReducer(state.theme, action),
    user: userReducer(state.user, action)
});

//Exporting all types
export type InitialStateType = typeof InitialState;
export type ActionType = ThemeAction | UserAction;