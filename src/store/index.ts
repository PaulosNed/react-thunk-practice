import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/formSlice";
import { notesApi } from "./apis/notesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
        [notesApi.reducerPath]: notesApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(notesApi.middleware)
    }
})

setupListeners(store.dispatch)