"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    loginStatus: boolean;
}

const initialState: AuthState = {
    loginStatus: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLogin: (state, action: PayloadAction<boolean>) => {
            state.loginStatus = action.payload;
        },
    },
});

export const { toggleLogin } = authSlice.actions;

export default authSlice.reducer;
