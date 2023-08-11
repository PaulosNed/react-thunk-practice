import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Note } from "../../models/Note";

const initialState: Note[] = [
  {
    id: 1691405684460,
    userId: 2,
    title: "First note",
    body: "Climate change poses a significant threat to our planet's ecosystems and human societies. To address this crisis, there's a growing emphasis on transitioning to renewable energy sources like solar, wind, and hydropower. These sustainable alternatives not only reduce greenhouse gas emissions but also pave the way for a cleaner and more sustainable energy future.",
  },
  {
    id: 1691412914339,
    userId: 2,
    title: "Second note",
    body: "The rapid advancements in artificial intelligence (AI) have brought about transformative technologies, yet they also raise important ethical concerns. As AI systems become more sophisticated, questions about bias, privacy, and job displacement have gained prominence. Striking a balance between innovation and responsible AI development is essential to ensure that these technologies benefit society as a whole.",
  },
  {
    id: 1691416561136,
    userId: 2,
    title: "third note",
    body: "In recent years, there's been a growing focus on mental health awareness and well-being. Recognizing the prevalence of mental health challenges and the importance of destigmatizing them, individuals and organizations are promoting open conversations, resources, and support. Prioritizing mental health not only enhances personal resilience but also fosters healthier communities",
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
