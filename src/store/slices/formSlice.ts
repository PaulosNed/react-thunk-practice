import { createSlice } from "@reduxjs/toolkit";
import { formData } from "../../models/Props";
import { addNote, editNote } from "./notesSlice";

const initialState: formData = {
    title: "",
    body: ""
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeTitle(state, action) {
            state.title = action.payload
        },
        changeBody(state, action) {
            state.body = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(addNote, (state, action) => {
            state.title = ''
            state.body = ''
        })
        builder.addCase(editNote, (state, action) => {
            state.title = ''
            state.body = ''
        })
    }
})

export const {changeTitle, changeBody} = formSlice.actions