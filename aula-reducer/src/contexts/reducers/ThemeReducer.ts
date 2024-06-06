import { ThemeState } from "../../types/ThemeReducer";
import { ActionType } from "../Config";

export const themeInitialState: ThemeState = {
    theme: "light",
};

export const ThemeReducer = (state: ThemeState, action: ActionType): ThemeState => {
    switch (action.type) {
        case "CHANGE_THEME":
            return { theme: action.payload }
        default:
            return state
    }
};