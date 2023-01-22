import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteListReducer: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNoteReducer: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const { setNoteListReducer, addNoteReducer } = noteSlice.actions;
