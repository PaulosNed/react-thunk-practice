import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const baseUrl = 'http://localhost:4000/notes'


export const fetchNotes = createAsyncThunk('notes/fetch', async() => {
    const response = await axios.get(baseUrl)
    return response.data
})