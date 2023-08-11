import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Note } from "../../models/Note";

const initialState: Note[] = [
  {
    id: 1691405684460,
    userId: 2,
    title: "First note",
    body: "updated description",
  },
  {
    id: 1691412914339,
    userId: 2,
    title: "Second note",
    body: "ajsdnasd MND NSDas",
  },
  {
    id: 1691416561136,
    userId: 2,
    title: "third note",
    body: "now even edited the description",
  },
];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      const newNote: Note = {
        id: Date.now(),
        userId: Date.now() + 1,
        title: action.payload.title,
        body: action.payload.body,
      };

      state.push(newNote);
    },
    deleteNote(state, action) {
      state = state.filter((note: Note) => note.id !== action.payload)
      return state
    },
    editNote(state, action) {
      state.forEach((note: Note) => {
        if (note.id === action.payload.id){
          note.title = action.payload.title
          note.body = action.payload.body
        }
      })
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
