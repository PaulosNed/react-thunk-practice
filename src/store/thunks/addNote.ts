import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./fetchNotes";
import { Note } from "../../models/Note";

export const addNewNote = createAsyncThunk(
  "notes/add",
  async (_, { getState }) => {
    console.log(_)
    const currState: any = getState()
    
    const newNote: Note = {
        id: Date.now(),
        userId: Date.now() + 1,
        title: currState.form.title,
        body: currState.form.body,
      };

    const response = await axios.post(baseUrl, newNote);
    return response.data;
  }
);
