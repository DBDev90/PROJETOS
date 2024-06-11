import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/Auth";

interface IAuthState {
    user: User | null;
    authToken: string | null;
    authStatus: "authenticated" | "not_authenticated" | "not_verified";
}

const initialState: IAuthState = {
    user: null,
    authToken: null,
    authStatus: "not_verified",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IAuthState["user"]>) => {
            state.user = action.payload;
        },
        setAuthToken: (state, action: PayloadAction<IAuthState["authToken"]>) => {
            state.authToken = action.payload;
        },
        setAuthState: (state, action: PayloadAction<IAuthState["authStatus"]>) => {
            state.authStatus = action.payload;
        },
    },
});

export const { setUser, setAuthToken, setAuthState } = authSlice.actions;

export default authSlice.reducer;
