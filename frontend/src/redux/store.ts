"use client";

import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader-slice/loaderSlice";
import authReducer from "./auth-slice/authSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        auth: authReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself.
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsReducer, comments: CommentsReducer}
export type AppDispatch = typeof store.dispatch;
