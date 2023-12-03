"use client";

import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader-slice/loaderSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself.
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsReducer, comments: CommentsReducer}
export type AppDispatch = typeof store.dispatch;
