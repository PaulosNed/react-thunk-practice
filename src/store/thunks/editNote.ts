import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./fetchNotes";

export const editNewNote = createAsyncThunk(
  "notes/edit",
  async (payload: any) => {
    const response = await axios.patch(`${baseUrl}/${payload.id}`, payload);
    return response.data;
  }
);

export const deleteNoteFromBackend = createAsyncThunk(
  "notes/delete",
  async (payload: any) => {
    const response = await axios.delete(`${baseUrl}/${payload}`);
    return response.data;
  }
);
