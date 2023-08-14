import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../models/Note";
import { fetchNotes } from "../thunks/fetchNotes";

interface fetchedData {
  status: string,
  data: Note[],
  error: any
}

const initialState: fetchedData = {
  status: 'idle',
  data: [],
  error: null
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote(state, action) {
      state.data = state.data.filter((note: Note) => note.id !== action.payload)
      return state
    },
    
  },
  extraReducers(builder) {
    builder.addCase(fetchNotes.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.status = 'success'
      state.data = action.payload
    })
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error
    })
  }
});

export const { deleteNote } = notesSlice.actions;
