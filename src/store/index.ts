import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/formSlice";
import { notesSlice } from "./slices/notesSlice";

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
        notes: notesSlice.reducer
    }
})